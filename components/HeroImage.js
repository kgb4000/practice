'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import MossCard from '@/components/MossCard'
import MainheroImage from './MainheroImage'

export default function HeroImage({ heroMossImage, alt, product }) {
  const [bigMossImage, setBigMossImage] = useState(heroMossImage)
  return (
    <>
      <div className="flex md:flex-row">
        <div className="lg:w-1/5 lg:flex flex-col justify-start hidden">
          {product.image.map((moss, index) => (
            <div key={product.index}>
              <MossCard
                product={product}
                index={index}
                imgURL={moss}
                changeBigMossImage={(moss) => setBigMossImage(moss)}
                bigMossImage={bigMossImage}
              />
            </div>
          ))}
        </div>
        <MainheroImage bigMossImage={bigMossImage} />
      </div>
      <div className="flex max-w-[400px] mx-auto justify-center lg:hidden mb-8">
        {product.image.map((moss, index) => (
          <div key={product.index}>
            <MossCard
              product={product}
              index={index}
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
