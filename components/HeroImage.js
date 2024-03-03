'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import MossCard from '@/components/MossCard'

const HeroImage = ({ heroMossImage, alt, product }) => {
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
        <div className="lg:w-4/5 mx-auto">
          <Image
            src={bigMossImage}
            alt={alt}
            width={800}
            height={800}
            priority
            className="object-contain"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
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

export default HeroImage
