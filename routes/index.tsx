import { Navbar } from "../components/Navbar.tsx"
import { Product } from "../components/Product.tsx"
import { Cat } from "../components/Product.tsx"
import { useState } from "preact/hooks"

const cats = [
  {
    id: "29",
    name: "老大",
    price: "20",
    photo: "/cats/cat001.jpg",
  },
  {
    id: "39",
    name: "貝貝",
    price: "15",
    photo: "/cats/cat002.jpg",
  },
  {
    id: "72",
    name: "老虎",
    price: "10",
    photo: "/cats/cat003.jpg",
  },
  {
    id: "103",
    name: "胖胖",
    price: "8.5",
    photo: "/cats/cat004.jpg",
  },
  {
    id: "111",
    name: "小花",
    price: "9.99",
    photo: "/cats/cat005.jpg",
  },
  {
    id: "139",
    name: "黑臉",
    price: "12.5",
    photo: "/cats/cat006.jpg",
  },
]

export default function Home() {
  // const [cats, setCats] = useState([])
  return (
    <>
      <Navbar />
      <section className="container mx-auto mt-10 px-8">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3 lg:grid-cols-4 md:gap-4">
          {cats.map(({ id, name, photo, price }) => (
            <Product id={id} name={name} photo={photo} price={+price} key={id} />
          ))}
        </div>
      </section>
    </>
  )
}
