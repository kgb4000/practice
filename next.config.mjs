import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
}

export default withPlaiceholder(nextConfig)
