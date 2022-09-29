import { PageProps } from "$fresh/server.ts"
import { Navbar } from "../../components/Navbar.tsx"
import { Product } from "../../components/Product.tsx"
import { AllCats } from "../../data/cats.ts"

export default function CatDetail({ params }: PageProps) {
  const cat = AllCats.find((cat) => cat.id == params.id)

  if (cat) {
    const { id, name, photo, price, description } = cat
    return (
      <>
        <Navbar />
        <section className="container mx-auto mt-10 px-8">
          <a className="bg-red-400 px-3 py-2 text-lg rounded text-white" href="/">
            回上頁
          </a>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3 lg:grid-cols-4 md:gap-4">
            <Product id={id} name={name} photo={photo} price={+price} key={id} />
            <article className="text-lg">{description}</article>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <section className="container mx-auto mt-10 px-8">
        <p className="text-3xl">沒有這隻貓貓喔！</p>
      </section>
    </>
  )
}
