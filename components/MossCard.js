'use client'

import Image from 'next/image'
import { buildImage } from '@/lib/cloudinary/cloudinary'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'

const MossCard = ({ changeBigMossImage, bigMossImage, product, index }) => {
  const handleClick = () => {
    if (bigMossImage !== product.image[index].url) {
      changeBigMossImage(product.image[index].url)
    }
  }
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <div className="flex justify-center">
        <Image
          src={buildImage(product.image[index].public_id)
            .resize(thumbnail().width(90).height(90))
            .toURL()}
          alt={product.name}
          width={90}
          height={90}
          priority
          style={{
            maxWidth: '70%',
            heigth: 'auto',
          }}
        />
      </div>
    </div>
  )
}

export default MossCard
