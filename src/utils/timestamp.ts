/**
 * Format a timestamp with smart date labels: Today, Yesterday, or full date.
 * Shows time (HH:MM) for all formats.
 *
 * @param date - Date object or ISO/date string
 * @returns formatted timestamp string, e.g. "Today, 14:30" or "Yesterday, 09:15" or "20/05/2026, 14:30"
 */
export function formatTimestamp(date: Date | string): string {
  const now = new Date();
  const target = normalizeDate(date);

  const diffMs = now.getTime() - target.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const time = formatTime(target);

  if (diffDays < 0) return `Tomorrow, ${time}`;
  if (diffDays === 0) return `Today, ${time}`;
  if (diffDays === 1) return `Yesterday, ${time}`;

  return formatDate(target) + ', ' + time;
}

/**
 * Format just the time portion (HH:MM, 24-hour format).
 */
export function formatTime(date: Date | string): string {
  const target = normalizeDate(date);
  const hours = target.getHours().toString().padStart(2, '0');
  const minutes = target.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

/**
 * Format a date as DD/MM/YYYY without time.
 */
export function formatDate(date: Date | string): string {
  const target = normalizeDate(date);
  const day = target.getDate().toString().padStart(2, '0');
  const month = (target.getMonth() + 1).toString().padStart(2, '0');
  const year = target.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Format a date with the day name for older messages.
 * e.g. "Monday, 20/05/2026, 14:30"
 */
export function formatTimestampFull(date: Date | string): string {
  const target = normalizeDate(date);
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayNames[target.getDay()];
  return `${dayName}, ${formatDate(target)}, ${formatTime(target)}`;
}

/**
 * Return a relative time label for very recent messages.
 * e.g. "Just now", "5 min ago", "2 hours ago", "Today, 14:30"
 */
export function formatRelativeTime(date: Date | string): string {
  const now = new Date();
  const target = normalizeDate(date);
  const diffMs = now.getTime() - target.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHrs = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHrs / 24);

  if (diffSec < 60) return 'Just now';
  if (diffMin < 60) return diffMin === 1 ? '1 min ago' : `${diffMin} min ago`;
  if (diffHrs < 24) return diffHrs === 1 ? '1 hour ago' : `${diffHrs} hours ago`;
  if (diffDays === 0) return `Today, ${formatTime(target)}`;
  if (diffDays === 1) return `Yesterday, ${formatTime(target)}`;

  return `${formatDate(target)}, ${formatTime(target)}`;
}

/**
 * Normalize a Date or string into a Date object.
 */
function normalizeDate(date: Date | string): Date {
  return typeof date === 'string' ? new Date(date) : date;
}
