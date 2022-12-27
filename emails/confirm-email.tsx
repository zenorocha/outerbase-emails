import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';

export default function Email() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

  return (
    <Html>
      <Head />
      <Preview>Your email confirmation code is: p2ubrh</Preview>
      <Section style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/static/logo.png`}
            width="215"
            height="16"
            alt="Outerbase"
            style={logo}
          />
          <Text style={{ ...text, marginBottom: '14px' }}>
            Your email confirmation code is:
          </Text>
          <code style={code}>p2ubrh</code>
          <Button pY={8} pX={20} style={button} href="https://outerbase.com/">
            Confirm email address
          </Button>
          <Text
            style={{
              ...text,
              color: '#ababab',
              marginTop: '14px',
              marginBottom: '16px',
            }}
          >
            If you didn&apos;t try to login, you can safely ignore this email.
          </Text>
          <Hr style={divider} />
          <Text style={footer}>
            Outerbase © 2022, All Rights Reserved
          </Text>
        </Container>
      </Section>
    </Html>
  );
}

const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  border: '1px solid #eaeaea',
  borderRadius: '5px',
  margin: '40px auto',
  padding: '20px',
  width: '465px',
};

const logo = {
  margin: '24px 0',
};

const button = {
  fontFamily,
  backgroundColor: '#d1ac87',
  borderRadius: '5px',
  fontWeight: '600',
  color: '#000',
  fontSize: '14px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
};

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
  marginBottom: '24px',
};


const divider = {
  border: 'none',
  borderTop: '1px solid #eaeaea',
  margin: '26px 0',
  width: '100%',
};

const text = {
  fontFamily,
  color: '#333',
  fontSize: '14px',
  margin: '24px 0',
};

const footer = {
  fontFamily,
  color: '#898989',
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
};