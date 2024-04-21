import Image from 'next/image'
import Link from 'next/link'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Bio from '@/components/Bio'
import ShareBtn from '@/components/ShareBtn'
import { BiCalendar, BiStopwatch } from 'react-icons/bi'
import { buildImage } from '@/lib/cloudinary/cloudinary'

async function getPostSlug(slug) {
  const res = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query Post($slug: String!) {
            posts(where: {slug: $slug}) {
             title
              date
              slug
              metaDescription
              coverImage 
            content {
                  json
                }
            author {
              name
              bio
              photo 
            }
             readTime
          }
        }`,
      variables: {
        slug: slug,
      },
    }),
  })
  const data = await res.json()
  return data.data.posts
}

const sharedClasses = 'dark:text-white'

export async function generateMetadata({ params }) {
  const posts = await getPostSlug(params.slug)
  const post = posts[0]
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: {
      canonical: `https://seamosswellness.com/${post.slug}`,
    },
  }
}
export default async function Post({ params }) {
  const posts = await getPostSlug(params.slug)
  const post = posts[0]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    author: 'K. Browne',
    name: post.title,
    description: post.metaDescription,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section>
        <div className="container max-w-[700px] mx-auto lg:px-0 pt-20 md:pt-36 pb-16 px-4">
          <div className="">
            <h1 className="text-2xl lg:text-4xl text-center mb-4 leading-relaxed">
              {post.title}
            </h1>
          </div>
          <div className="">
            <div className="flex flex-row justify-center">
              <div className="flex flex-row items-center">
                <BiCalendar />
                <p className="ml-2">
                  {new Date(post.date).toLocaleDateString('en-us', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div className="flex flex-row items-center ml-4">
                <BiStopwatch />
                <p className="ml-2">{post.readTime}</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center my-4">
              <Image
                className="mr-4"
                src={buildImage(post.author.photo.public_id).toURL()}
                alt={post.author.name}
                loading="lazy"
                width={54}
                height={54}
              />
              <span>- by {post.author.name}</span>
            </div>
          </div>
          <p className="text-center">Share This:</p>
          <ShareBtn shareLink={`https://seamosswellness.com/${post.slug}`} />
          <article>
            <RichText
              content={post.content.json}
              renderers={{
                h2: ({ children }) => (
                  <h2 className="text-xl lg:text-4xl leading-relaxed font-bold my-6">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-[1rem] lg:text-2xl leading-relaxed  font-semibold lg:my-6">
                    {children}
                  </h3>
                ),
                a: ({ children, href, openInNewTab }) => (
                  <Link
                    href={href}
                    className="text-red-500 underline break-normal"
                    target={openInNewTab ? '_blank' : '_self'}
                    rel="noreferrer"
                  >
                    {children}
                  </Link>
                ),
                p: ({ children }) => (
                  <p className="leading lg:text-xl my-4 lg:my-6">{children}</p>
                ),
                ol: ({ children }) => <ol className="m-5">{children}</ol>,
                ul: ({ children }) => <ul className="m-5">{children}</ul>,
                li: ({ children }) => (
                  <li className="lg:text-xl my-4 leading-8 font-normal lg:my-5 list-disc mx-4 break-normal">
                    {children}
                  </li>
                ),
              }}
            />
          </article>
          <ShareBtn shareLink={`https://seamosswellness.com/${post.slug}`} />
          <Bio
            authorImg={buildImage(post.author.photo.public_id).toURL()}
            authorBio={post.author.bio}
            authorName={post.author.name}
          />
          <div className="text-center my-8">
            <Link href="/blog">
              <button className="py-6 px-10  bg-slate-400 text-xl text-white font-semibold uppercase rounded-xl">
                Back to Blog
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export const revalidate = 30
