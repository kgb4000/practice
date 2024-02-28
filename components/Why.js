import React from 'react'

const Why = () => {
  return (
    <>
      <section>
        <div className="container max-w-9xl mx-auto mb-60">
          <div className="items-center text-center my-10 px-8">
            <h1 className="text-5xl lg:text-7xl leading-relaxed text-ui-fg-base font-normal mb-10 lg:mb-20">
              Why Sea Moss?
            </h1>
            <p className="text-xl lg:text-3xl max-w-sm lg:max-w-2xl text-center leading-loose mx-auto mb-10">
              Sea Moss is a natural, powerful superfood found in oceans
              throughout the world. It’s packed with essential vitamins and
              minerals that we humans need. Sea moss is also 100% natural,
              vegan-friendly, gluten, and GMO-free.
            </p>
            <p className="text-xl lg:text-3xl max-w-sm lg:max-w-2xl text-center leading-loose mx-auto mb-10">
              Start healing your body!
            </p>
            <div className="text-center my-10">
              <Link href="/shop">
                <button className="py-4 px-10  bg-yellow-400 text-xl font-bold">
                  Shop now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Why
