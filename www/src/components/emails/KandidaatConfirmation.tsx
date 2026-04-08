import {
  Container,
  Head,
  Hr,
  Html,
  Section,
  Text,
} from '@react-email/components';

interface Props {
  name: string;
}

export const KandidaatConfirmationEmail = ({ name }: Props) => (
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
            Hallo {name}! 🚀
          </Text>
          <Text
            style={{
              fontSize: '16px',
              marginBottom: '12px',
              color: '#FFFFFF',
            }}
          >
            Bedankt dat u uw profiel hebt ingevuld. We beoordelen uw match en nemen binnenkort contact op met spannende mogelijkheden!
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
            Wat u kunt verwachten:
          </Text>
          <ul style={{ fontSize: '14px', color: '#A0AEC0', paddingLeft: '20px' }}>
            <li>Persoonlijke matching met vacatures</li>
            <li>Directe contact van ons team</li>
            <li>Begeleiding door het sollicitatie proces</li>
          </ul>
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
