const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value) {
  return typeof value === "string" && EMAIL_RE.test(value.trim());
}

export function isNonEmptyString(value, maxLength = 5000) {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.trim().length <= maxLength
  );
}

/**
 * Very basic spam guard for a form with no visible CAPTCHA:
 * - `company` is a honeypot field, hidden from real visitors via CSS.
 *   A filled-in honeypot means a bot filled every field it could find.
 * - `startedAt` is a hidden timestamp set when the form first rendered.
 *   A submission that arrives in under 2 seconds is almost certainly
 *   scripted, not a person reading and typing.
 */
export function looksLikeSpam({ company, startedAt }) {
  if (typeof company === "string" && company.trim().length > 0) return true;
  const started = Number(startedAt);
  if (!started || Number.isNaN(started)) return false;
  return Date.now() - started < 2000;
}
