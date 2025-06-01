export default function Text({ textColor, textContent, textSize, textAlign }) {
  return (
    <h1 style={{
      color: textColor,
      fontSize: textSize,
      textAlign: textAlign
    }}>
      {textContent}
    </h1>
  );
}
