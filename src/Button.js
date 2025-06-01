// src/components/Button.js

export default function Button({ bgColor, width, height, text }) {
  return (
    <button style={{
      backgroundColor: bgColor,
      width: width,
      height: height,
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer'
    }}>
      {text}
    </button>
  );
}
<Button
  bgColor="green"
  width="150px"
  height="40px"
  text="დაჭირე"
/>
