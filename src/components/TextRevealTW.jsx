export const TextRevealTW = ({ text, mode = "infinite", className }) => {
    // Split the text by newline character
    const textLines = text.split('\n');
    
    return (
      <h1 className={`overflow-hidden  leading-tight text-white text-start mb-8 ${className}`}>
        {textLines.map((line, index) => (
          <div key={index}>
            {line.split("").map((char, indexChar) => (
              <span
                className={`animate-text-reveal [animation-iteration-count:${mode}]`}
                key={`${char}-${indexChar}`}
                style={{ animationDelay: `${indexChar * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        ))}
      </h1>
    );
  };
  