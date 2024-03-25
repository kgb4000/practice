'use client'

import React from 'react'
import Image from 'next/image'

export default function MainheroImage({ bigMossImage, alt }) {
  return (
    <>
      <div className="mx-auto lg:hidden">
        <Image
          src={bigMossImage}
          alt={alt}
          width={175}
          height={256}
          priority
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className="hidden mx-auto lg:block">
        <Image
          src={bigMossImage}
          alt={alt}
          width={700}
          height={560}
          priority
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    </>
  )
}
