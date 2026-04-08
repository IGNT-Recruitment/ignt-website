import { Resend } from 'resend';
import { WerkgeverConfirmationEmail } from '@/components/emails/WerkgeverConfirmation';
import { KandidaatConfirmationEmail } from '@/components/emails/KandidaatConfirmation';
import { InternalNotificationEmail } from '@/components/emails/InternalNotification';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWerkgeverConfirmation(
  name: string,
  email: string,
  company: string
) {
  try {
    await resend.emails.send({
      from: 'ramon@ignt.nl',
      to: email,
      subject: 'Bedankt voor uw interesse — IGNT Recruitment',
      react: <WerkgeverConfirmationEmail name={name} company={company} />,
    });
  } catch (error) {
    console.error('Failed to send werkgever confirmation:', error);
    throw error;
  }
}

export async function sendKandidaatConfirmation(
  name: string,
  email: string
) {
  try {
    await resend.emails.send({
      from: 'ramon@ignt.nl',
      to: email,
      subject: 'Uw profiel is ontvangen — IGNT Recruitment',
      react: <KandidaatConfirmationEmail name={name} />,
    });
  } catch (error) {
    console.error('Failed to send kandidaat confirmation:', error);
    throw error;
  }
}

export async function sendInternalNotification(
  leadType: 'werkgever' | 'kandidaat',
  leadData: Record<string, any>
) {
  try {
    const subject = `Nieuwe lead: ${leadType} — ${leadData.name}`;
    await resend.emails.send({
      from: 'ramon@ignt.nl',
      to: process.env.INTERNAL_NOTIFICATION_EMAIL || 'ramon@ignt.nl',
      subject,
      react: <InternalNotificationEmail leadType={leadType} leadData={leadData} />,
    });
  } catch (error) {
    console.error('Failed to send internal notification:', error);
    throw error;
  }
}
