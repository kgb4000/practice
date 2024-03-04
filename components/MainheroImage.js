import React from 'react'
import Image from 'next/image'
import { placeholder } from '@cloudinary/react'

export default function MainheroImage({ bigMossImage, alt }) {
  return (
    <>
      <div className="lg:w-4/5 mx-auto">
        <Image
          src={bigMossImage}
          alt={alt}
          width={828}
          height={786}
          priority
          className="object-contain"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          plugins={[placeholder()]}
        />
      </div>
    </>
  )
}
