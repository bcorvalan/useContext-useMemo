import {CartProvider} from './CartContex';
import Product from './component/Product'
import CartContent from './component/CartContent'
import './App.css'

function App() {
  return (
    <>
    <CartProvider>
      <Product title="Remera azul" description="remera linda" id= {1}/>
      <Product title="pantalon negro" description="pantalon linda" id= {2}/>
      <CartContent/>
    </CartProvider>
    <UseMemo/>
    </>
  );
}

export default App;
