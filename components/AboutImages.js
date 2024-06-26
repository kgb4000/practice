'use client'

import React from 'react'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

const AboutImages = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-between my-20">
        <Link href="/products/soursop-sea-moss-gel-16oz">
          <CldImage
            src="https://res.cloudinary.com/browne-company/image/upload/v1708203042/soursopSeaMossGelAssets/SMW-SMG16oz-SOURSOP-V1_q3xzso.png"
            alt="Soursop Sea Moss Gel."
            width={400}
            height={400}
            className="mx-auto"
          />
        </Link>
        <Link href="/products/pineapple-sea-moss-gel-16oz">
          <CldImage
            src="https://res.cloudinary.com/browne-company/image/upload/v1708120768/pineappleSeaMossGelAssets/SMW-SMG16oz-PINEAPPLE-V1_p77dzz.png"
            alt="Pineapple Sea Moss Gel."
            width={400}
            height={400}
            className="mx-auto"
          />
        </Link>
        <Link href="/products/mango-sea-moss-gel-16oz">
          <CldImage
            src="https://res.cloudinary.com/browne-company/image/upload/v1708110923/mangoSeaMossGelAssets/SMW-SMG16oz-MANGO-V1_qsmgzk.png"
            alt="Mango Sea Moss Gel."
            width={400}
            height={400}
            className="mx-auto"
          />
        </Link>
        <Link href="/products/strawberry-sea-moss-gel-16oz">
          <CldImage
            src="https://res.cloudinary.com/browne-company/image/upload/v1708111033/strawberrySeaMossGelAssets/SMW-SMG16oz-STRAWBERRY-V1_fx3d4d.png"
            alt="Strawberry Sea Moss Gel."
            width={400}
            height={400}
            className="mx-auto"
          />
        </Link>
      </div>
    </>
  )
}

export default AboutImages
