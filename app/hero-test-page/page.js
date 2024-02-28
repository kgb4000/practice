'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { greenSeaMoss, seaMoss } from '@/constants'
import MossCard from '@/components/MossCard'

import heroMossImage from '../../public/images/green-sea-moss-raw.png'

const Hero = () => {
  const [bigMossImage, setBigMossImage] = useState(heroMossImage)
  const priceOfOne = 21.99

  const [quantity, setQuantity] = useState(3)

  const quantity1 = 1
  const quantity2 = 2
  const quantity3 = 3
  const quantity4 = 4

  const discount1 = 5
  const discount2 = 9
  const discount3 = 12
  const discount4 = 17

  const [discount, setDiscount] = useState(discount3)

  const discountedPrice = priceOfOne - (priceOfOne * discount) / 100

  const name = 'Hero Test Page'

  return (
    <main>
      <section>
        <div className="container max-w-7xl mx-auto px-4 my-20">
          <div className="flex">
            <div className="lg:w-3/5">
              <div className="flex">
                <div className="lg:w-1/5 flex flex-col justify-start">
                  {greenSeaMoss.map((moss, index) => (
                    <div key={index}>
                      <MossCard
                        index={index}
                        imgURL={moss}
                        changeBigMossImage={(moss) => setBigMossImage(moss)}
                        bigMossImage={bigMossImage}
                      />
                    </div>
                  ))}
                </div>
                <div className="lg:w-4/5">
                  <Image
                    src={bigMossImage}
                    alt="2oz bag of green sea moss."
                    width={800}
                    height={800}
                    priority={true}
                    className="mr-10 object-contain"
                    style={{
                      width: '90%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-2/5">
              <div className="mb-2">
                <p className="text-md text-2xl">
                  <i>
                    "I make my green sea moss gel every month. It keeps my body
                    going!"
                  </i>
                </p>
                <p className="mt-2">
                  <i>J. Brunson</i>
                </p>
              </div>
              <h1 className="text-5xl py-2">{name}</h1>
              <p className="text-xl my-2 text-green-600">
                PLANT-BASED | VEGAN | RAW FOOD | NON-GMO
              </p>
              <p className="text-lg my-2">
                One of the rare types, St. Lucian Green sea moss, rich in
                chlorophyll, is a natural detoxifier and a powerhouse of
                nutrition. It's teeming with essential vitamins and minerals,
                helping purify the body by removing toxins.
              </p>
              <div className="my-6">
                <p className="text-xl mb-4">Detoxifying Chlorophyll</p>
                <p className="text-xl mb-4">Boost Energy Levels</p>
                <p className="text-xl mb-4">Strengthen Immune System</p>
              </div>
              <div className="my-4 grid grid-cols-2">
                <div className="my-1 p-4 mr-1 border relative">
                  <label onClick={() => setDiscount(discount3)}>
                    <input
                      type="radio"
                      id={3}
                      name="myRadio"
                      value={quantity3}
                      defaultChecked={true}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <span className="py-4 px-2 text-md">{quantity3} Bags</span>
                    <span
                      className="pl-1 text-sm"
                      onClick={() => setDiscount(discount3)}
                    >
                      <i>
                        {(priceOfOne - (priceOfOne * discount3) / 100).toFixed(
                          2
                        )}
                        /each
                      </i>
                    </span>
                  </label>
                </div>
                <div className="my-1 p-4 ml-1 border">
                  <label onClick={() => setDiscount(discount4)}>
                    <input
                      type="radio"
                      id={4}
                      name="myRadio"
                      value={quantity4}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <span className="py-4 px-2 text-md">{quantity4} Bags</span>
                    <span
                      className="pl-1 text-sm"
                      onClick={() => setDiscount(discount4)}
                    >
                      <i>
                        {(priceOfOne - (priceOfOne * discount4) / 100).toFixed(
                          2
                        )}
                        /each
                      </i>
                    </span>
                  </label>
                </div>
                <div className="my-1 p-4 mr-1 border">
                  <label onClick={() => setDiscount(discount2)}>
                    <input
                      type="radio"
                      id={2}
                      name="myRadio"
                      value={quantity2}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <span className="py-4 px-2 text-md">{quantity2} Bags</span>
                    <span
                      className="pl-1 text-sm"
                      onClick={() => setDiscount(discount2)}
                    >
                      <i>
                        {(priceOfOne - (priceOfOne * discount2) / 100).toFixed(
                          2
                        )}
                        /each
                      </i>
                    </span>
                  </label>
                </div>
                <div className="my-1 p-4 ml-1 border">
                  <label onClick={() => setDiscount(discount1)}>
                    <input
                      type="radio"
                      id={1}
                      name="myRadio"
                      value={quantity1}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <span className="py-4 px-2 text-md">{quantity1} Bag</span>
                    <span
                      className="pl-1 text-sm"
                      onClick={() => setDiscount(discount1)}
                    >
                      <i>
                        {(priceOfOne - (priceOfOne * discount1) / 100).toFixed(
                          2
                        )}
                        /each
                      </i>
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <div className="my-4">
                  <div className="flex items-center justify-between">
                    <p className="text-2xl text-green-600 font-bold my-1">
                      You're saving: {discount}%
                    </p>
                    <p className="text-2xl text-green-600 font-bold">
                      ${(quantity * discountedPrice).toFixed(2)}{' '}
                      <span className="line-through text-gray-900 text-xl">
                        ${quantity * priceOfOne}
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  className="px-4 py-5 rounded-xl w-full text-2xl font-bold bg-yellow-400"
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  Add to Cart
                </button>
                <div className="flex justify-between">
                  <span>QTY: {quantity}</span>
                  <span>
                    Total Price: ${(quantity * discountedPrice).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className=" my-8">
                <h3 className="text-2xl mb-4">Other Sizes</h3>
                <div className="flex gap-4">
                  <div className="text-center">
                    <Link href="/">
                      <Image
                        src="/images/green-sea-moss-raw.png"
                        alt="4oz bag of green sea moss."
                        width={200}
                        height={200}
                        className="mx-auto pb-4"
                      />
                      <p className="text-xl font-bold mb-4">2 oz</p>
                      <p>$24.99</p>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/green-sea-moss-raw-8-oz">
                      <Image
                        src="/images/green-sea-moss-raw.png"
                        alt="8oz bag of green sea moss."
                        width={200}
                        height={200}
                        className="mx-auto pb-4"
                      />
                      <p className="text-xl font-bold mb-4">8 oz</p>
                      <p>$35.99</p>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/green-sea-moss-raw-16-oz">
                      <Image
                        src="/images/green-sea-moss-raw.png"
                        alt="16oz bag of green sea moss."
                        width={200}
                        height={200}
                        className="mx-auto pb-4"
                      />
                      <p className="text-xl font-bold mb-4">16 oz</p>
                      <p>$44.99</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
