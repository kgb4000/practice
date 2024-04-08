import Image from 'next/image'

export default function Bio({ authorName, authorImg, authorBio }) {
  return (
    <>
      <section>
        <div className="border-solid border-2 p-6 rounded mt-10">
          <Image
            src={authorImg}
            alt={authorName}
            loading="lazy"
            className="max-w-16 border-2 border-red-600 rounded-full p-8"
            width={100}
            height={100}
          />
          <div className="my-8">
            <h3 className="text-[1rem] font-bold pb-4">About the author</h3>
            <p className="lg:text-xl">{authorBio}</p>
          </div>
        </div>
      </section>
    </>
  )
}
