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
          width={375}
          height={356}
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
          width={800}
          height={760}
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
