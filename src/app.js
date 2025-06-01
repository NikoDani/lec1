import Text from './Text';
import ProductCard from './ProductCard';
import Button from './Button';
function App() {
  return (
    <div>
      <Text textContent="მოგესალმებით ბავშვებო" />
      <ProductCard
        name="ლეპტოპი"
        description="სწრაფი და კარგი"
        price={1200}
        quantity={3}
      />

      <Button text="შეიძინე"/>
    </div>
  );
}
export default App;
