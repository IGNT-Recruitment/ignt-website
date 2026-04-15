export function getInternalNotificationHtml(
  type: 'werkgever' | 'kandidaat',
  name: string,
  email: string,
  company?: string
): string {
  const typeLabel = type === 'werkgever' ? 'Werkgever' : 'Kandidaat';
  const bgColor = type === 'werkgever' ? '#7C3AED' : '#D946EF';
  const companyLine = company ? `<p style="font-size: 16px; line-height: 1.6; margin: 10px 0 0 0;">Bedrijf: ${company}</p>` : '';

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; }
          .header { background-color: ${bgColor}; color: #FFFFFF; padding: 30px; border-radius: 8px; margin-bottom: 20px; }
          .header h1 { margin-top: 0; }
          .footer { background-color: #f5f5f5; padding: 20px; border-radius: 8px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin-top: 0;">Nieuwe ${typeLabel} Lead</h1>
            <p style="font-size: 16px; line-height: 1.6; margin: 0;">Naam: ${name}</p>
            <p style="font-size: 16px; line-height: 1.6; margin: 10px 0 0 0;">Email: ${email}</p>
            ${companyLine}
          </div>

          <div class="footer">
            <p>Dit is een automatisch gegenereerde notificatie van het IGNT systeem.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
