// Envoi d'e-mails : Resend (RESEND_API_KEY) ou SMTP (SMTP_HOST…). Sans configuration en local : le message est affiché dans la console.
const FROM = process.env.MAIL_FROM || 'Maths Première <onboarding@resend.dev>';

function configured() {
  return !!(process.env.RESEND_API_KEY || process.env.SMTP_HOST);
}

async function sendMail({ to, subject, text, html }) {
  if (process.env.RESEND_API_KEY) {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: [to], subject, text, html }),
    });
    if (!r.ok) throw new Error(`Envoi de l'e-mail impossible (Resend ${r.status}) : ${(await r.text()).slice(0, 200)}`);
    return;
  }
  if (process.env.SMTP_HOST) {
    const nodemailer = require('nodemailer');
    const port = +process.env.SMTP_PORT || 587;
    const t = nodemailer.createTransport({
      host: process.env.SMTP_HOST, port, secure: port === 465,
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    });
    await t.sendMail({ from: FROM, to, subject, text, html });
    return;
  }
  if (process.env.VERCEL) throw new Error("Aucun service d'e-mail configuré (RESEND_API_KEY ou SMTP_HOST).");
  console.log(`\n[e-mail non envoyé — mode local]\nÀ : ${to}\nObjet : ${subject}\n${text}\n`);
}

const escHtml = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function layout(title, intro, link, label, outro) {
  const text = `${title}\n\n${intro}\n\n${label} : ${link}\n\n${outro}`;
  const html = `<div style="font-family:Arial,sans-serif;max-width:520px;margin:auto;color:#18213a">
    <h2 style="color:#2b4fd6">${escHtml(title)}</h2>
    <p>${escHtml(intro)}</p>
    <p style="margin:28px 0"><a href="${escHtml(link)}" style="background:#2b4fd6;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:bold">${escHtml(label)}</a></p>
    <p style="font-size:13px;color:#55607a">${escHtml(outro)}<br>Si le bouton ne marche pas, copie ce lien : ${escHtml(link)}</p></div>`;
  return { text, html };
}

function verifyMail(prenom, link) {
  return {
    subject: 'Confirme ton inscription — Maths Première',
    ...layout(`Bienvenue ${prenom} !`, "Pour ouvrir ton compte de révision, confirme ton adresse e-mail en cliquant sur le bouton ci-dessous. Le lien est valable 48 heures.",
      link, 'Confirmer mon adresse', "Si tu n'es pas à l'origine de cette inscription, ignore simplement ce message."),
  };
}
function resetMail(prenom, link) {
  return {
    subject: 'Nouveau mot de passe — Maths Première',
    ...layout(`Bonjour ${prenom},`, 'Tu as demandé à changer ton mot de passe. Clique sur le bouton ci-dessous pour en choisir un nouveau. Le lien est valable 2 heures.',
      link, 'Choisir un nouveau mot de passe', "Si tu n'as rien demandé, ignore ce message : ton mot de passe actuel reste valable."),
  };
}

module.exports = { sendMail, configured, verifyMail, resetMail };
