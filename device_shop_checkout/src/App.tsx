import ContactInformation from "./components/ContactInformation"
import ProductList from "./components/ProductList"
import { products } from "./utilis/types"


function App() {
 

  return (
    <>
    <div className="bg-gray-100 p-4 h-[40vh] bg-image flex justify-center ">
      <h1 className="absolute flex justify-center gap-4 top-10"> <span className="text-2xl font-bold text-white">Checkout </span> <span className="py-[0.5rem] px-3 text-sm rounded-xl text-white bg-black">3 items</span></h1>
    </div>
    <main className="flex max-w-[1000px] mx-4 relative -top-36 md:mx-auto rounded-lg overflow-hidden flex-col md:flex-row ">
      <ProductList products={products} />
      <ContactInformation/>
    </main>
    </> 
  )
}

export default App
