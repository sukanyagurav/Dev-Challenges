import ContactInformation from "./components/ContactInformation"
import ProductList from "./components/ProductList"
import { products } from "./utilis/types"


function App() {
 

  return (
    <>
    <div>
      <h1>Checkout <span>3 items</span></h1>
    </div>
    <main className="flex max-w-[1000px] mx-auto rounded-lg overflow-hidden">
      <ProductList products={products} />
      <ContactInformation/>
    </main>
    </> 
  )
}

export default App
