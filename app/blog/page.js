/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { buildImage } from '@/lib/cloudinary/cloudinary'
import Image from 'next/image'

export const metadata = {
  title: 'Blog | Change What You Put In Your Body!',
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
          posts(orderBy: createdAt_DESC, first: 27) {
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
        <div className="container max-w-9xl mx-auto px-8 py-44">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl mb-8">Blog</h1>
            {/* <p className="text-xl mb-8">
              Read my posts and learn about how health benefits.
            </p> */}
          </div>
          <div className="mx-auto">
            {posts.map((post) => (
              <div key={post.slug}>
                <Link href={`/${post.slug}`}>
                  <div className="max-w-4xl mx-auto flex flex-col lg:flex-row lg:items-center mb-14">
                    <Image
                      src={buildImage(post.coverImage.public_id).toURL()}
                      alt={post.coverImage.atlText}
                      loading="lazy"
                      title={post.title}
                      width={400}
                      height={300}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      className="mb-4 lg:mr-8 w-1/5"
                    />
                    <div className="blog-info max-w-3xl w-4/5">
                      <h2 className="text-2xl mb-5 max-w-2xl lg:text-4xl lg:leading-10">
                        {post.title}
                      </h2>
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
