export function getWerkgeverConfirmationHtml(name: string, email: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; }
          .header { background-color: #0A0E27; color: #FFFFFF; padding: 40px; border-radius: 8px; margin-bottom: 20px; }
          .content { background-color: #1A1F3A; color: #FFFFFF; padding: 30px; border-radius: 8px; }
          .content h2 { color: #7C3AED; margin-top: 0; }
          .footer { margin-top: 30px; text-align: center; color: #718096; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin-top: 0;">Welkom bij IGNT!</h1>
            <p style="font-size: 16px; line-height: 1.6;">Hallo ${name},</p>
            <p style="font-size: 16px; line-height: 1.6;">Bedankt voor uw inschrijving als werkgever. We hebben uw gegevens ontvangen en zullen binnenkort contact met u opnemen.</p>
          </div>

          <div class="content">
            <h2>Wat nu?</h2>
            <p style="font-size: 14px; line-height: 1.6;">Ons team zal uw profiel beoordelen en contact opnemen om de volgende stappen te bespreken.</p>
          </div>

          <div class="footer">
            <p>© 2026 IGNT. Alle rechten voorbehouden. | ${email}</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
