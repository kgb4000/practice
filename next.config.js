/** @type {import('next').NextConfig} */
const nextConfig = {}

// const images = {
//   domains: ['images.unsplash.com', 'res.cloudinary.com'],
// }

module.exports = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
}

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         port: '',
//         pathname: '/account123/**',
//       },
//     ],
//   },
// }
