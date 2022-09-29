import { JSX } from "preact"

export function Navbar(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <header>
      <nav className="py-3 px-4 flex bg-red-500 items-center">
        <a href="/" className="text-3xl text-red-50">
          賺很大商店
        </a>
        <div id="navbarNav">
          <ul className="flex ml-3">
            <li className="mx-2">
              <a className="text-red-50 text-xl" aria-current="page" href="#">
                商品
              </a>
            </li>
            <li className="mx-2">
              <a className="text-red-50 text-xl" href="#">
                當日特價
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
