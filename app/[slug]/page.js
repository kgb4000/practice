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

  return (
    <>
      <section>
        <div className="container max-w-[700px] mx-auto lg:px-0 py-44 px-8">
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
          <p>Share This:</p>
          <ShareBtn shareLink={`https://seamosswellness.com/${post.slug}`} />
          <article>
            <RichText
              content={post.content.json}
              renderers={{
                h2: ({ children }) => (
                  <h2 className="text-2xl lg:text-4xl leading-relaxed text-ui-fg-base font-normal lg:my-5">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl lg:text-2xl leading-relaxed text-ui-fg-base font-normal lg:my-5">
                    {children}
                  </h3>
                ),
                a: ({ children, href, openInNewTab }) => (
                  <Link
                    href={href}
                    className="text-red-400 underline"
                    target={openInNewTab ? '_blank' : '_self'}
                    rel="noreferrer"
                  >
                    {children}
                  </Link>
                ),
                p: ({ children }) => (
                  <p className="text-xl leading text-ui-fg-base font-normal my-6 leading-8">
                    {children}
                  </p>
                ),
                li: ({ children }) => (
                  <li className="text-xl leading-relaxed text-ui-fg-base font-normal lg:my-5 list-disc mx-10">
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
          <div className="text-center my-4">
            <Link href="/blog">
              <button className="py-8 px-10  bg-slate-400 text-xl text-white font-bold uppercase">
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
