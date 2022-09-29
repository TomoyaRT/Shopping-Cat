import { JSX } from "preact"

export type Cat = {
  id: string
  price: number
  name: string
  photo: string
}

export function Product(props: Cat) {
  const { id, price, name, photo } = props
  return (
    <div className="col-sm-2 my-2" id={id}>
      <div className="card">
        <img src={photo} alt={name} />
        <div>
          <h5 className="text-xl">{name}</h5>
          <p>${price}</p>
          <button className="px-2 py-1 bg-red-400 rounded text-white">加到購物車</button>
        </div>
      </div>
    </div>
  )
}
