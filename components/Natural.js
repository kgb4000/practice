import React from 'react'
import Image from 'next/image'

const Natural = () => {
  return (
    <>
      <div className="flex justify-between w-[250px] py-2">
        <Image
          src="/icons/no-gmo.png"
          alt="No GMO."
          width={40}
          height={40}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Image
          src="/icons/organic.png"
          alt="Organic."
          width={40}
          height={40}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Image
          src="/icons/gluten-free.png"
          alt="Gluten free."
          width={40}
          height={40}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Image
          src="/icons/keto.png"
          alt="Keto."
          width={40}
          height={40}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Image
          src="/icons/vegan.png"
          alt="Vegan."
          width={40}
          height={40}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </>
  )
}

export default Natural
