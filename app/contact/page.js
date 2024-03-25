import React from 'react'

const ContactUs = () => {
  return (
    <>
      <section>
        <div className="container max-w-5xl mx-auto my-28 lg:my-32 px-6">
          <h1 className="text-5xl lg:text-7xl text-center my-10">Contact Us</h1>
          <div className="max-w-xl mx-auto">
            <form>
              <div>
                <input
                  type="text"
                  className="border w-full mb-2 p-2"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full mb-2 p-2"
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  className="border w-full mb-2 h-32 p-2"
                  placeholder="Message"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
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
