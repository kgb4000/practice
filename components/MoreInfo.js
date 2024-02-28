'use client'

import { Disclosure } from '@headlessui/react'

const MoreInfo = ({ product }) => {
  return (
    <>
      <section className="bg-slate-50">
        <div className="max-w-sm mx-auto px-4 py-24">
          <hr></hr>
          <Disclosure as="div" className="my-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full items-center">
                  <span className="text-xl font-semibold my-2">Origin</span>
                  <span className="text-2xl font-bold">+</span>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <p>{product.origin}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <hr></hr>
          <Disclosure as="div" className="my-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full items-center">
                  <span className="text-xl font-semibold my-2">
                    Ingredients
                  </span>
                  <span className="text-2xl font-bold">+</span>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <p>{product.ingredients}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <hr></hr>
          <Disclosure as="div" className="my-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full items-center">
                  <span className="text-xl font-semibold my-2">More Info</span>
                  <span className="text-2xl font-bold">+</span>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <p>{product.more}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <hr></hr>
          <Disclosure as="div" className="my-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full items-center">
                  <span className="text-xl font-semibold my-2">Flavor</span>
                  <span className="text-2xl font-bold">+</span>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <p>{product.flavor}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <hr></hr>
          <Disclosure as="div" className="my-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full items-center">
                  <span className="text-xl font-semibold my-2">Shipping</span>
                  <span className="text-2xl font-bold">+</span>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <p>{product.shipping}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <hr></hr>
          <Disclosure as="div" className="my-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full items-center">
                  <span className="text-xl font-semibold my-2">
                    Return Policy
                  </span>
                  <span className="text-2xl font-bold">+</span>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <p>{product.returnPolicy}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <hr></hr>
        </div>
      </section>
    </>
  )
}

export default MoreInfo
