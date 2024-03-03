'use client'

import { RichText } from '@graphcms/rich-text-react-renderer'
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
                  <RichText
                    content={product.ingredients.raw}
                    renderers={{
                      li: ({ children }) => (
                        <li className="font-normal lg:my-5 list-disc ml-4">
                          {children}
                        </li>
                      ),
                    }}
                  />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <hr></hr>
          <Disclosure as="div" className="my-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full items-center">
                  <span className="text-xl font-semibold my-2">Benefits</span>
                  <span className="text-2xl font-bold">+</span>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <RichText
                    content={product.benefits.raw}
                    renderers={{
                      li: ({ children }) => (
                        <li className="leading-relaxed font-normal lg:my-5 list-disc">
                          {children}
                        </li>
                      ),
                    }}
                  />
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
                  <RichText content={product.flavor.raw} />
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
                  <RichText
                    content={product.shipping.raw}
                    renderers={{
                      p: ({ children }) => (
                        <p className="font-normal lg:my-5">{children}</p>
                      ),
                    }}
                  />
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
                  <RichText
                    content={product.returnPolicy.raw}
                    renderers={{
                      p: ({ children }) => (
                        <p className="font-normal lg:my-5">{children}</p>
                      ),
                    }}
                  />
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
