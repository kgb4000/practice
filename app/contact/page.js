import React from 'react'

const ContactUs = () => {
  return (
    <>
      <section>
        <div className="container max-w-5xl mx-auto my-48 lg:my-40 px-6">
          <h1 className="text-7xl lg:text-7xl text-center my-14">Contact Us</h1>
          <div className="max-w-xl mx-auto">
            <form>
              <div>
                <input type="text" className="border w-full mb-2" />
              </div>
              <div>
                <input type="text" className="border w-full mb-2" />
              </div>
              <div>
                <textarea type="text" className="border w-full mb-2"></textarea>
              </div>
              <input
                type="submit"
                value="submit"
                className="border py-2 px-8 w-full"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
