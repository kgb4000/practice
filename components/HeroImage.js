'use client'

import React from 'react'
import { useState } from 'react'
import MossCard from '@/components/MossCard'
import MainheroImage from './MainheroImage'

export default function HeroImage({ heroMossImage, product }) {
  const [bigMossImage, setBigMossImage] = useState(heroMossImage)
  return (
    <>
      <div className="flex md:flex-row">
        <div className="lg:w-2/5 lg:flex flex-col justify-start hidden">
          {product.image.map((moss, index) => (
            <div key={product.index}>
              <MossCard
                product={product}
                index={index}
                alt={product.name}
                imgURL={moss}
                changeBigMossImage={(moss) => setBigMossImage(moss)}
                bigMossImage={bigMossImage}
              />
            </div>
          ))}
        </div>
        <MainheroImage bigMossImage={bigMossImage} alt={product.name} />
      </div>
      <div className="flex max-w-[400px] mx-auto justify-center lg:hidden mb-2">
        {product.image.map((moss, index) => (
          <div key={product.index}>
            <MossCard
              product={product}
              index={index}
              alt={product.name}
              imgURL={moss}
              changeBigMossImage={(moss) => setBigMossImage(moss)}
              bigMossImage={bigMossImage}
            />
          </div>
        ))}
      </div>
    </>
  )
}
