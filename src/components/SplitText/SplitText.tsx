interface Props {
  text: string;
  role: string;
}

export default function SplitText({ text, role }: Props) {
  return (
    <span aria-label={text} role={role}>
      {text.split('').map((char, index) => {
        const style = { animationDelay: `${0.5 + index / 10}s` };
        return (
          <span key={index} aria-hidden={true} style={style}>
            {char}
          </span>
        );
      })}
    </span>
  );
}
