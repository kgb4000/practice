import React from 'react'
import Image from 'next/image'

const Natural = () => {
  return (
    <>
      <div className="mt-4"></div>
      <div className="grid grid-cols-4 justify-between">
        <Image
          src="/icons/no-gmo.png"
          alt="No GMO."
          width={70}
          height={70}
          className="mx-auto"
        />
        <Image
          src="/icons/organic.png"
          alt="Organic."
          width={70}
          height={70}
          className="mx-auto"
        />
        <Image
          src="/icons/gluten-free.png"
          alt="Gluten free."
          width={70}
          height={70}
          className="mx-auto"
        />
        <Image
          src="/icons/vegan.png"
          alt="Vegan."
          width={70}
          height={70}
          className="mx-auto"
        />
      </div>
    </>
  )
}

export default Natural
