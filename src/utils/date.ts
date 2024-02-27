import { format } from "date-fns";

/**
 * Formats a date string using the specified format type.
 * @param date - The date string to format.
 * @param formatType - The format type to use for formatting.
 * @returns The formatted date string.
 */
export const formatDate = (date: string, formatType: string) =>
  format(new Date(date), formatType);
