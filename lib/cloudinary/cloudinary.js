import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen'
import { limitFit } from '@cloudinary/url-gen/actions/resize'

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_PUBLIC_CLOUDNAME,
  },
  url: {
    secure: true,
  },
})

export function buildImage(src) {
  return cld
    .image(src)
    .quality('auto')
    .format('auto')
    .resize(limitFit().width(800).height(800))
}
