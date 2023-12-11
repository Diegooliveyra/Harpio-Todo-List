type textTruncatProps = {
  text: string;
  size: number;
};

export function textTrucante({ text, size }: textTruncatProps) {
  if (text.length > size) {
    return text.slice(0, size) + '...';
  }

  return text;
}

export function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  const lowerCase = str.toLowerCase();
  return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}
