import {
  Container,
  Head,
  Hr,
  Html,
  Section,
  Text,
} from '@react-email/components';

interface Props {
  leadType: 'werkgever' | 'kandidaat';
  leadData: Record<string, any>;
}

export const InternalNotificationEmail = ({ leadType, leadData }: Props) => {
  const isWerkgever = leadType === 'werkgever';
  const title = isWerkgever ? 'Nieuwe werkgeverinquiry' : 'Nieuw kandidaatprofiel';

  return (
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
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: '#FFFFFF',
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                fontSize: '14px',
                color: '#A0AEC0',
                marginBottom: '12px',
              }}
            >
              <strong>Lead Type:</strong> {leadType}
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
                fontWeight: 'bold',
              }}
            >
              Lead Details:
            </Text>

            {/* Display lead data */}
            {Object.entries(leadData).map(([key, value]) => {
              // Skip answers if they're too large
              if (key === 'answers' && typeof value === 'object') {
                return (
                  <div key={key} style={{ marginBottom: '8px' }}>
                    <Text style={{ fontSize: '13px', color: '#A0AEC0' }}>
                      <strong>{key}:</strong> {JSON.stringify(value, null, 2)}
                    </Text>
                  </div>
                );
              }

              return (
                <Text
                  key={key}
                  style={{
                    fontSize: '13px',
                    color: '#A0AEC0',
                    marginBottom: '6px',
                  }}
                >
                  <strong>{key}:</strong> {String(value)}
                </Text>
              );
            })}

            <Hr
              style={{
                borderColor: '#7C3AED',
                borderTop: '1px solid #7C3AED',
                margin: '20px 0',
              }}
            />

            <Text
              style={{
                fontSize: '12px',
                color: '#718096',
              }}
            >
              Dit is een interne notificatie. Neem contact op met {leadData.email} of {leadData.phone}.
            </Text>
          </Section>
        </Container>
      </body>
    </Html>
  );
};
