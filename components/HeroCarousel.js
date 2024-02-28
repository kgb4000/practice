import Image from 'next/image'
import { buildImage } from '@/lib/cloudinary/cloudinary'

export default function HeroCarousel({ product }) {
  return (
    <div>
      {product.image.map((item, index) => (
        <div key={item.id}>
          <div className="flex justify-end">
            <Image
              src={buildImage(product.image[index].public_id).toURL()}
              width={100}
              height={100}
              alt={product.name}
              style={{
                width: '60%',
                heigth: 'auto',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
