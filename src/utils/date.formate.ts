

export const formatDueDateFromTimestamp = (timestamp: number): string =>  {
    const date = new Date(timestamp * 1000); // Convert the timestamp to milliseconds
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

export function formatTimeAgo(timestamp: number): string {
    const now = Date.now(); // Get the current timestamp in milliseconds
  const elapsedTime = now - timestamp;

  // Create an instance of RelativeTimeFormat
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  // Determine the appropriate unit (seconds, minutes, hours, etc.) and value
  if (elapsedTime < 60 * 1000) {
    // Less than a minute
    const seconds = Math.floor(elapsedTime / 1000);
    return rtf.format(-seconds, 'second');
  } else if (elapsedTime < 60 * 60 * 1000) {
    // Less than an hour
    const minutes = Math.floor(elapsedTime / (60 * 1000));
    return rtf.format(-minutes, 'minute');
  } else if (elapsedTime < 24 * 60 * 60 * 1000) {
    // Less than a day (24 hours)
    const hours = Math.floor(elapsedTime / (60 * 60 * 1000));
    return rtf.format(-hours, 'hour');
  } else {
    // More than a day
    const days = Math.floor(elapsedTime / (24 * 60 * 60 * 1000));
    return rtf.format(-days, 'day');
  }
}

export function dateToTimestamp(dateString: string): number | null {
  const timestamp = Date.parse(dateString);
  if (!isNaN(timestamp)) {
    return Math.floor(timestamp / 1000);
  } else {
    return null;
  }
}

export function newDateToTimestamp(date:any) {
  return Math.floor(date.getTime() / 1000);
}