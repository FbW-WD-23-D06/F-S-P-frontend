/**
 * Truncates the given text if it exceeds the maximum number of characters.
 * 
 * @param text - The text to truncate.
 * @param maxCharacters - The maximum number of characters allowed.
 * @returns The truncated text if it exceeds the maximum number of characters, otherwise the original text.
 */
export const truncateContent = (text: string, maxCharacters: number) => {
  if (text.length > maxCharacters) {
    return text.slice(0, maxCharacters) + "...";
  }
  return text;
};
