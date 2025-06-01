export default function ProductCard({ name, description, price, quantity, color }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: color,
      width: '250px'
    }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>ფასი: {price}₾</p>
      <p>რაოდენობა: {quantity}</p>
    </div>
  );
}

