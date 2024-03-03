import { Cloudinary } from '@cloudinary/url-gen'

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_PUBLIC_CLOUDNAME,
  },
  url: {
    secure: true,
  },
})

export function buildImage(src) {
  return cld.image(src).quality('auto').format('auto')
}
