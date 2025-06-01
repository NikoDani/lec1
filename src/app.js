import Text from './components/Text';
import ProductCard from './components/ProductCard';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Text
        textColor="purple"
        textContent="გადახედე პროდუქტს"
        textSize="28px"
        textAlign="center"
      />

      <ProductCard
        name="ლეპტოპი"
        description="სწრაფი და მსუბუქი"
        price={999}
        quantity={5}
        color="#e3f2fd"
      />

      <Button
        bgColor="#1976d2"
        width="180px"
        height="45px"
        text="შეძენა"
      />
    </div>
  );
}

export default App;
