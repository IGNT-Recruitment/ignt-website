import {
  Container,
  Head,
  Hr,
  Html,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface Props {
  name: string;
  company: string;
}

export const WerkgeverConfirmationEmail = ({ name, company }: Props) => (
  <Html lang="nl">
    <Head />
    <body style={{ backgroundColor: '#0A0E27', fontFamily: 'sans-serif' }}>
      <Container maxWidth="600px" style={{ margin: '0 auto', padding: '20px' }}>
        <Section
          style={{
            backgroundColor: '#1A1F3A',
            borderRadius: '12px',
            padding: '32px',
            marginBottom: '20px',
            border: '1px solid rgba(124, 58, 237, 0.3)',
          }}
        >
          <Text
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#FFFFFF',
            }}
          >
            Bedankt voor uw interesse, {name}! 🔥
          </Text>
          <Text
            style={{
              fontSize: '16px',
              marginBottom: '12px',
              color: '#FFFFFF',
            }}
          >
            We hebben uw verzoek ontvangen van <strong>{company}</strong>. Ramon zal u binnenkort contacteren om uw persoonlijke match te vinden.
          </Text>
          <Hr
            style={{
              borderColor: '#7C3AED',
              borderTop: '1px solid #7C3AED',
              margin: '20px 0',
            }}
          />
          <Text
            style={{
              fontSize: '14px',
              color: '#A0AEC0',
              marginBottom: '12px',
            }}
          >
            <strong>Contactgegevens:</strong>
          </Text>
          <Text style={{ fontSize: '14px', color: '#A0AEC0' }}>
            Ramon van Rossen
            <br />
            ramon@ignt.nl
            <br />
            06 1994 2283
          </Text>
        </Section>
        <Section
          style={{
            textAlign: 'center',
            color: '#718096',
            fontSize: '12px',
          }}
        >
          <Text style={{ marginBottom: '8px' }}>Met een vonk enthousiasme,</Text>
          <Text style={{ fontWeight: 'bold', color: '#7C3AED' }}>
            Team IGNT
          </Text>
        </Section>
      </Container>
    </body>
  </Html>
);
