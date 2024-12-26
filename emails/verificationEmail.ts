import {
  Html,
  Head,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
      </Head>
      <Preview>Here&apos;s your verification code: {otp}</Preview>
      <Section style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <Row>
          <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Hello {username},
          </Text>
        </Row>
        <Row>
          <Text style={{ fontSize: '16px', marginTop: '10px' }}>
            Thank you for registering. Please use the following verification code to complete your registration:
          </Text>
        </Row>
        <Row>
          <Text style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>
            {otp}
          </Text>
        </Row>
        <Row>
          <Text style={{ fontSize: '16px', marginTop: '10px' }}>
            If you did not request this code, please ignore this email.
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
