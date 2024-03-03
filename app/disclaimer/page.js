import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Disclaimer | Sea Moss Wellness',
  description:
    'The content on this website, including texts, graphics, images, and other material types, is provided exclusively for informational and educational purposes.',
  robots: {
    index: false,
  },
  googleBot: {
    index: false,
  },
  alternates: {
    canonical: 'https://seamosswellness.com/privacy-policy',
  },
}

const Disclaimer = () => {
  return (
    <>
      <section>
        <div className="container mx-auto max-w-3xl mt-40 mb-28">
          <h1 className="text-center text-5xl lg:text-7xl py-10">
            Medical Disclaimer
          </h1>
          <p className="text-xl mb-5">
            The content on this website, including texts, graphics, images, and
            other material types, is provided exclusively for informational and
            educational purposes. It is not intended as, nor should it be
            considered, a replacement for professional medical advice,
            diagnosis, or treatment.
          </p>
          <h2 className="text-3xl mb-5">Purpose of Information:</h2>
          <p className="text-xl mb-5">
            This website does not offer medical advice or services. The
            information provided herein is not meant to replace the expertise
            and judgment of your healthcare provider. It should not be relied
            upon for making a diagnosis or determining treatment for a
            particular medical condition. Professional Medical Advice: Always
            particular medical condition.
          </p>
          <h2 className="text-3xl mb-5">Medical Emergencies:</h2>
          <p className="text-xl mb-5">
            Do not use this website for medical emergencies. If you have a
            medical emergency, call your doctor, go to the nearest hospital
            emergency department, or call emergency services immediately.
          </p>
          <h2 className="text-3xl mb-5">Use of Information:</h2>
          <p className="text-xl mb-5">
            Relying on any information provided by this website is solely at
            your own risk. In no event will we be liable for any loss or damage
            including without limitation, indirect or consequential loss or
            damage, or any loss or damage whatsoever arising from loss of data
            or profits arising out of, or in connection with, the use of this
            website.
          </p>
          <h2 className="text-3xl mb-5">Healthcare Provider Relationship:</h2>
          <p className="text-xl mb-5">
            The use of this website does not create a doctor-patient
            relationship. Information provided here is not a substitute for
            direct, personal, professional medical care and diagnosis. Changes
            and Updates: The content on our website is subject to change without
            notice. We may update our disclaimer from time to time and recommend
            that you periodically review it.
          </p>
          <h2 className="text-3xl mb-5">Changes and Updates:</h2>
          <p className="text-xl mb-5">
            The content on our website is subject to change without notice. We
            may update our disclaimer from time to time and recommend that you
            periodically review it.
          </p>
          <div className="text-center my-10">
            <Link href="/shop">
              <button className="py-4 px-10  bg-yellow-400 text-xl font-bold uppercase">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Disclaimer
