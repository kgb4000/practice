import React from 'react'
import Image from 'next/image'

const SecureCheckout = () => {
  return (
    <>
      <div className="flex justify-between items-center pt-2">
        <p className="text-[0.8rem]">🔐 Secure Checkout</p>
        <Image
          src="/icons/visa.png"
          alt="Visa"
          width={50}
          height={50}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <Image
          src="/icons/master-card.png"
          alt="Mastercard"
          width={50}
          height={50}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <Image
          src="/icons/discover-card.png"
          alt="Discover card"
          width={50}
          height={50}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <Image
          src="/icons/american-express.png"
          alt="American Express"
          width={50}
          height={50}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    </>
  )
}

export default SecureCheckout
