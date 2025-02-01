interface LinkTextProps {
  text: string;
}

export const LinkText: React.FC<LinkTextProps> = ({ text }) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const parts: string[] = text.split(urlRegex);
  const matches = text.match(urlRegex) || [];

  return (
    <>
      {parts.map((part, i) => {
        if (matches.some((match) => match === part)) {
          return (
            <a key={i} href={part} className="underline" target="_blank" rel="noopener noreferrer">
              {part}
            </a>
          );
        }
        return part;
      })}
    </>
  );
};
