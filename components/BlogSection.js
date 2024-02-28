import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const BlogSection = () => {
  return (
    <>
      <section>
        <div className="max-w-9xl mx-auto px-4 py-20">
          <div className="mb-14">
            <h2 className="text-5xl text-center">Learn More On Our Blog</h2>
          </div>
          <div className="max-w-7xl mx-auto lg:grid grid-cols-3 gap-x-10">
            <div className="mb-10">
              <Link href="/sea-moss-prostate-cancer">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704740656/seaMossWellnessBlogImages/sea_moss-prostate-health_mxfxzm.jpg"
                  width={700}
                  height={300}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  className="mb-4 max-w-xl mx-auto"
                />
                <p className="text-2xl text-center">
                  Is Sea Moss Good for Prostate Cancer?
                </p>
              </Link>
            </div>
            <div className="mb-10">
              <Link href="/sea-moss-blood-pressure">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704740522/seaMossWellnessBlogImages/does-sea-moss-lower-blood-pressure_omeawf.jpg"
                  width={700}
                  height={300}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  className="mb-4 max-w-xl mx-auto"
                />
                <p className="text-2xl text-center">
                  Does Sea Moss Lower Blood Pressure?
                </p>
              </Link>
            </div>
            <div className="mb-10">
              <Link href="/sea-moss-for-arthritis">
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704984715/seaMossWellnessBlogImages/se-moss-for-arthritis_oq1jca.jpg"
                  width={700}
                  height={300}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  className="mb-4 max-w-xl mx-auto"
                />
                <p className="text-2xl text-center">
                  Does Sea Moss Help With Arthritis and Joint Pain?
                </p>
              </Link>
            </div>
          </div>
          <div className="text-center my-4">
            <Link href="/blog">
              <button className="py-4 px-10  bg-slate-400 text-xl text-white font-bold uppercase">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogSection
