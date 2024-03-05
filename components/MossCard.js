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
    <div
      // className={`border-2 rounded mr-12 mb-4 ${
      //   bigMossImage === product.image[index].url
      //     ? 'border-red-200'
      //     : 'border-red'
      // }
      //   cursor-pointer `}
      onClick={handleClick}
    >
      <div className="flex justify-center">
        <Image
          src={buildImage(product.image[index].public_id)
            .resize(thumbnail().width(150).height(150))
            .toURL()}
          alt={product.name}
          width={150}
          height={150}
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
