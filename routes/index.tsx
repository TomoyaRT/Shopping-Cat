import { Navbar } from "../components/Navbar.tsx"
import { Product } from "../components/Product.tsx"
import { AllCats } from "../data/cats.ts"
import { Cat } from "../data/types.ts"

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto mt-10 px-8">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3 lg:grid-cols-4 md:gap-4">
          {AllCats.map(({ id, name, photo, price }: Cat) => (
            <Product id={id} name={name} photo={photo} price={+price} key={id} />
          ))}
        </div>
      </section>
    </>
  )
}
