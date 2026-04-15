import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  return await resend.emails.send({
    from: 'IGNT <noreply@ignt.nl>',
    to,
    subject,
    html,
  });
}

export async function sendInternalNotification({
  subject,
  html,
}: {
  subject: string;
  html: string;
}) {
  const internalEmail = process.env.INTERNAL_NOTIFICATION_EMAIL!;
  return await sendEmail({
    to: internalEmail,
    subject,
    html,
  });
}
