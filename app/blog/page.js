/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { buildImage } from '@/lib/cloudinary/cloudinary'
import Image from 'next/image'

export const metadata = {
  title: 'Sea Moss Wellness Blog | Change What You Put In Your Body!',
  description:
    'Learn how it can help change your life! Read this blog to learn about the benefits fo sea moss and what it can doy for you physically and mentally!',
}

export async function getAllPosts() {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query Posts {
          posts(orderBy: createdAt_DESC, first: 20) {
            title
            slug
            coverImage
          }
        }
        `,
    }),
  })
  const data = await response.json()
  return data.data.posts
}

export default async function Blog() {
  const posts = await getAllPosts()
  return (
    <>
      <section>
        <div className="container max-w-7xl mx-auto px-8 py-32">
          <div className="text-center">
            <h1 className="text-7xl mb-8">Wellness Blog</h1>
            <p className="text-xl mb-8">
              Read my posts about sea moss and learn about it's health benefits.
            </p>
          </div>
          <div className="">
            {posts.map((post) => (
              <div key={post.slug}>
                <Link href={`/${post.slug}`} passHref>
                  <div className="max-w-4xl mx-auto mb-10 flex items-center">
                    <Image
                      src={buildImage(post.coverImage.public_id).toURL()}
                      alt={post.coverImage.atlText}
                      loading="lazy"
                      title={post.title}
                      width={400}
                      height={300}
                      className=" mb-5 mr-10"
                    />
                    <div className="blog-info">
                      <h2 className="text-3xl mb-5 leading-10">{post.title}</h2>
                      <p>Read more</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
