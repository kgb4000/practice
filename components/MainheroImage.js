import React from 'react'
import Image from 'next/image'

const MainheroImage = ({ bigMossImage, alt }) => {
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
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </>
  )
}

export default MainheroImage
