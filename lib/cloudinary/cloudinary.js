import { Cloudinary } from '@cloudinary/url-gen'
import { format, quality } from '@cloudinary/url-gen/actions/delivery'

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
  url: {
    secure: true,
  },
})

export function buildImage(src) {
  return cld.image(src).quality('auto')
}
