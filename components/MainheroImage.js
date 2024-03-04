import React from 'react'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary'
import { placeholder, responsive } from '@cloudinary/react'

export default function MainheroImage({ bigMossImage, alt }) {
  return (
    <>
      <div className="lg:w-4/5 mx-auto">
        <CldImage
          src={bigMossImage}
          alt={alt}
          width={800}
          height={760}
          priority
          // className="object-contain"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          plugins={[responsive(), placeholder()]}
        />
      </div>
    </>
  )
}
