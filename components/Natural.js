import React from 'react'
import Image from 'next/image'

const Natural = () => {
  return (
    <>
      <div className="flex justify-between w-[300px] py-4 mx-auto">
        <Image
          src="/icons/no-gmo.png"
          alt="No GMO."
          width={50}
          height={50}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Image
          src="/icons/organic.png"
          alt="Organic."
          width={50}
          height={50}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Image
          src="/icons/gluten-free.png"
          alt="Gluten free."
          width={50}
          height={50}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Image
          src="/icons/keto.png"
          alt="Keto."
          width={50}
          height={50}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Image
          src="/icons/vegan.png"
          alt="Vegan."
          width={50}
          height={50}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </>
  )
}

export default Natural
