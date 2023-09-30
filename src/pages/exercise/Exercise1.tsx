const languages = [
  "JavaScript",
  "Python",
  "Java",
  "Elm",
  "TypeScript",
  "C#",
  "F#",
];
export const Exercise1 = () => {
  function Language({ lang }: { lang: string }) {
    return <li>{lang}</li>;
  }

  return (
    <div>
      <ul>
        {languages.map((lang, index) => (
          <Language key={index} lang={lang.toUpperCase()} />
        ))}
      </ul>
    </div>
  );
};
