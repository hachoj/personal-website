import { execSync } from 'node:child_process';

export function getLastUpdated() {
  // Default fallback: build date (keeps Netlify builds working even if git isn't available).
  let lastUpdated = new Date().toISOString().slice(0, 10);

  try {
    lastUpdated = execSync('git log -1 --format=%cs', { encoding: 'utf8' }).trim();
  } catch {
    // Intentionally ignore; use fallback.
  }

  return lastUpdated;
}

