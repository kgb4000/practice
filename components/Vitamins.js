import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Vitamins = () => {
  return (
    <section className="bg-yellow-100 w-full py-20">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-5xl text-center mb-10">Our Sea Moss</h2>
          <div className="sm:flex gap-x-20 justify-center mb-20 px-4">
            <div className="flex flex-col items-center">
              <Image
                src="/icons/100-natural.png"
                alt="100% natural."
                width={100}
                height={100}
                className="mb-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/gluten-free.png"
                alt="Gluten free."
                width={100}
                height={100}
                className="mb-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/no-gmo.png"
                alt="No GMO."
                width={100}
                height={100}
                className="mb-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/vegan.png"
                alt="Vegan."
                width={100}
                height={100}
                className="mb-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/organic.png"
                alt="Organic."
                width={100}
                height={100}
                className="mb-4"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-2xl text-center mb-14 max-w-2xl mx-auto px-4">
        Sustainably sourced and harvested along the pristine shores of the
        island of Saint Lucia
      </p>
      <div className="text-center">
        <Link href="/shop">
          <button className="py-4 px-10 bg-yellow-400 text-xl font-bold uppercase">
            Shop now
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Vitamins
