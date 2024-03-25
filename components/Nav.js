import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import logo from '../public/images/smw-logo-black.png'
import Image from 'next/image'

const navigation = [
  { name: 'Shop', href: '/shop' },
  { name: 'Gels', href: '/categories/sea-moss-gels' },
  { name: 'Dried', href: '/categories/dried-sea-moss' },
  { name: 'About us', href: '/about' },
  { name: 'Contact us', href: '/contact' },
]

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <header>
        <div className="fixed w-full bg-gray-600 items-center justify-around text-white top-0 py-4 hidden md:flex uppercase text-[0.8rem]">
          <p>🇺🇸 Made in the USA </p>
          <p>🔰 Safe Secure Checkout</p>
          <p>⭐ 15% Off Everything</p>
          <p>🚚 Fast Shipping</p>
          <p>💲 Money Back Guarantee</p>
        </div>
        {/* <div className="text-[0.8rem] fixed w-full z-20 bg-gray-600 text-center justify-center text-white top-0 py-4 uppercase md:hidden">
          <p>⭐ Get 15% Off Everything This Month ⭐</p>
        </div> */}
        <div className="bg-white">
          <div className="inset-x-0 top-0 fixed">
            <nav
              className="flex items-center justify-between p-6 lg:px-8 bg-gray-50 py-4 w-full z-20 md:fixed md:top-12"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Sea Moss Wellness</span>
                  <Image
                    className="h-8 w-auto"
                    src={logo}
                    alt="Sea Moss Wellness logo."
                  />
                </Link>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <button className="snipcart-checkout font-bold">
                  Cart
                  <span className="snipcart-items-count p-2"></span>
                </button>
              </div>
            </nav>

            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Sea Moss Wellness</span>
                    <Image
                      className="h-8 w-auto"
                      src={logo}
                      alt="Sea Moss Wellness logo."
                    />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    {/* <div className="py-6">
                      <button className="snipcart-checkout font-bold">
                        Cart
                        <span className="snipcart-items-count p-2"></span>
                      </button>
                    </div> */}
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        </div>
        {/* <nav className="bg-gray-50 py-4 w-full z-20 md:fixed md:top-12">
          <div className="container mx-auto flex flex-wrap items-center">
            <div className="flex w-full md:w-1/2 justify-center md:justify-start font-extrabold">
              <Link className="no-underline" href="/">
                <span className="text-2xl pl-2">
                  <i className="em em-grinning"></i>Sea Moss Wellness
                </span>
              </Link>
            </div>
            <div className="flex w-full content-center justify-between md:w-1/2 md:justify-end">
              <ul className="flex justify-between flex-1 md:flex-none items-center mt-4">
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
                  <button className="snipcart-checkout font-bold">
                    Cart
                    <span className="snipcart-items-count p-2"></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
      </header>
    </>
  )
}

export default Nav
