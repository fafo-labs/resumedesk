import { parse } from 'date-fns';

export const parseDate = (dateStr: string) => {
  if (!dateStr || dateStr.toLowerCase() === 'present') {
    return new Date();
  }

  const formats = ['MMM yyyy', 'MMMM yyyy', 'MMM dd, yyyy', 'MMMM dd, yyyy'];

  for (const formatStr of formats) {
    try {
      const date = parse(dateStr, formatStr, new Date());
      if (date.toString() !== 'Invalid Date') {
        return date;
      }
    } catch {
      continue;
    }
  }

  const parts = dateStr.split(' ');
  if (parts.length >= 2) {
    const month = parts[0].substring(0, 3);
    const year = parts[parts.length - 1];
    try {
      const date = parse(`${month} ${year}`, 'MMM yyyy', new Date());
      if (date.toString() !== 'Invalid Date') {
        return date;
      }
    } catch (error) {
      console.log('Error parsing date:', dateStr, error);
    }
  }

  return undefined;
};
