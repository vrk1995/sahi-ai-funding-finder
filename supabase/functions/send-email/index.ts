import React from 'npm:react@18.3.1'
import { Webhook } from 'https://esm.sh/standardwebhooks@1.0.0'
import { Resend } from 'npm:resend@4.0.0'
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import { AuthConfirmationEmail } from './_templates/auth-confirmation.tsx'

const resend = new Resend(Deno.env.get('RESEND_API_KEY') as string)
const hookSecret = Deno.env.get('SEND_EMAIL_HOOK_SECRET') as string

Deno.serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const payload = await req.text()
    const headers = Object.fromEntries(req.headers)
    const wh = new Webhook(hookSecret)

    console.log('Received email webhook payload')

    const {
      user,
      email_data: { token, token_hash, redirect_to, email_action_type, site_url },
    } = wh.verify(payload, headers) as {
      user: {
        email: string
      }
      email_data: {
        token: string
        token_hash: string
        redirect_to: string
        email_action_type: string
        site_url: string
      }
    }

    console.log(`Processing ${email_action_type} email for ${user.email}`)

    // Handle different email types
    if (email_action_type === 'signup') {
      const confirmationUrl = `${site_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`

      const html = await renderAsync(
        React.createElement(AuthConfirmationEmail, {
          confirmationUrl,
          email: user.email,
        })
      )

      const { error } = await resend.emails.send({
        from: 'SahiStart <onboarding@resend.dev>',
        to: [user.email],
        subject: 'Welcome to SahiStart - Confirm your account',
        html,
      })

      if (error) {
        console.error('Error sending confirmation email:', error)
        throw error
      }

      console.log('Confirmation email sent successfully')
    } else if (email_action_type === 'recovery') {
      // Handle password recovery emails
      const resetUrl = `${site_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`

      const { error } = await resend.emails.send({
        from: 'SahiStart <onboarding@resend.dev>',
        to: [user.email],
        subject: 'Reset your SahiStart password',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 580px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #1e293b; text-align: center;">Reset Your Password</h1>
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              You've requested to reset your password for your SahiStart account. Click the button below to set a new password:
            </p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="${resetUrl}" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                Reset Password
              </a>
            </div>
            <p style="color: #64748b; font-size: 14px;">
              If you didn't request this password reset, you can safely ignore this email.
            </p>
          </div>
        `,
      })

      if (error) {
        console.error('Error sending password reset email:', error)
        throw error
      }

      console.log('Password reset email sent successfully')
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error in send-email function:', error)
    return new Response(
      JSON.stringify({
        error: {
          message: error.message,
        },
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
})