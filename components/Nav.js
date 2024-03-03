import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
      <header>
        <p className="fixed w-full z-20 text-center bg-green-600 py-4 text-white top-0 h-[80px] font-semibold">
          🌟Free shipping on orders over $100🌟
        </p>
        <nav className="bg-gray-50 p-4 mt-2 fixed w-full z-20 top-12">
          <div className="container mx-auto flex flex-wrap items-center">
            <div className="flex w-full md:w-1/2 justify-center md:justify-start font-extrabold">
              <Link className="no-underline" href="/">
                <span className="text-2xl pl-2">
                  <i className="em em-grinning"></i>Sea Moss Wellness
                </span>
              </Link>
            </div>
            <div className="flex w-full content-center justify-between md:w-1/2 md:justify-end">
              <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li className="mr-3">
                  <Link
                    className="inline-block py-2 px-3 hover:underline"
                    href="/shop"
                  >
                    Shop
                  </Link>
                </li>
                <li className="mr-3">
                  <Link
                    className="inline-block py-2 px-3 hover:underline"
                    href="/categories/dried-sea-moss"
                  >
                    Dried
                  </Link>
                </li>
                <li className="mr-3">
                  <Link
                    className="inline-block text-gray-600 no-underline hover:underline py-2 px-3"
                    href="/categories/sea-moss-gels"
                  >
                    Gels
                  </Link>
                </li>
                <li className="mr-3">
                  <button className="snipcart-checkout">
                    <span className="snipcart-items-count p-2"></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav
