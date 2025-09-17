import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Section,
  Img,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'

interface AuthConfirmationEmailProps {
  confirmationUrl: string
  email: string
}

export const AuthConfirmationEmail = ({
  confirmationUrl,
  email,
}: AuthConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to SahiStart - Confirm your account</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Img
            src="https://your-domain.com/assets/sahi-start-logo-big-croppped-nobg.png"
            width="60"
            height="60"
            alt="SahiStart Logo"
            style={logo}
          />
          <div style={brandContainer}>
            <span style={sahiText}>SAHI</span>
            <span style={startText}>START</span>
          </div>
        </Section>
        
        <Heading style={h1}>Welcome to SahiStart!</Heading>
        
        <Text style={text}>
          Thank you for signing up for SahiStart. We're excited to help you turn your business ideas into reality.
        </Text>
        
        <Text style={text}>
          To complete your account setup and start your entrepreneurial journey, please confirm your email address by clicking the button below:
        </Text>
        
        <Section style={buttonContainer}>
          <Link
            href={confirmationUrl}
            style={button}
          >
            Confirm Your Account
          </Link>
        </Section>
        
        <Text style={smallText}>
          If the button doesn't work, you can also copy and paste this link into your browser:
        </Text>
        
        <Text style={linkText}>
          {confirmationUrl}
        </Text>
        
        <Text style={footerText}>
          If you didn't create an account with SahiStart, you can safely ignore this email.
        </Text>
        
        <Section style={footer}>
          <Text style={footerText}>
            Best regards,<br />
            The SahiStart Team
          </Text>
          <Text style={footerCopyright}>
            © 2025 SahiStart. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default AuthConfirmationEmail

const main = {
  backgroundColor: '#f8fafc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
}

const header = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '32px 32px 16px',
  borderBottom: '1px solid #e2e8f0',
  marginBottom: '32px',
}

const logo = {
  marginRight: '16px',
}

const brandContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
}

const sahiText = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#1e293b',
  fontFamily: 'Georgia, serif',
}

const startText = {
  fontSize: '24px',
  fontWeight: 'bold',
  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontFamily: 'Georgia, serif',
}

const h1 = {
  color: '#1e293b',
  fontSize: '28px',
  fontWeight: 'bold',
  lineHeight: '1.3',
  margin: '0 0 24px',
  textAlign: 'center' as const,
  padding: '0 32px',
}

const text = {
  color: '#475569',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 20px',
  padding: '0 32px',
}

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
}

const button = {
  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
  boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.4)',
  transition: 'all 0.2s ease',
}

const smallText = {
  color: '#64748b',
  fontSize: '14px',
  lineHeight: '1.5',
  margin: '0 0 12px',
  padding: '0 32px',
}

const linkText = {
  color: '#3b82f6',
  fontSize: '14px',
  lineHeight: '1.5',
  wordBreak: 'break-all' as const,
  padding: '0 32px',
  margin: '0 0 32px',
}

const footer = {
  borderTop: '1px solid #e2e8f0',
  marginTop: '40px',
  paddingTop: '32px',
  textAlign: 'center' as const,
}

const footerText = {
  color: '#64748b',
  fontSize: '14px',
  lineHeight: '1.5',
  margin: '0 0 16px',
  padding: '0 32px',
}

const footerCopyright = {
  color: '#94a3b8',
  fontSize: '12px',
  margin: '0',
  padding: '0 32px',
}