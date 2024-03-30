import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <section>
        <div className="border-t border-ui-border-base bg-stone-50">
          <div className="container mx-auto max-w-9xl px-4 py-14">
            <div className="grid grid-cols-1 gap-10 py-4">
              <div>
                <Link
                  href="/"
                  className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
                >
                  Sea Moss Wellness
                </Link>
                <div className="lg:max-w-2xl mt-5 pr-5">
                  <p className="max-w-2xl mt-5 pr-5">
                    Looking to buy dried sea moss, organic sea moss gels, or sea
                    moss capsules and supplements? Look no further.
                  </p>
                  <p className="py-5">
                    Whether you prefer the convenience of ready-to-use gel for
                    your daily routine, the flexibility of raw sea moss to craft
                    your own creations, or the ease of capsules for convenient
                    on-the-go nutrition, we've got you covered.
                  </p>
                </div>
              </div>

              <div className="text-small-regular grid grid-cols-2 lg:grid-cols-5 gap-x-10 md:gap-x-16">
                <div className="flex flex-col gap-y-2 mb-16">
                  <span className="txt-small-plus txt-ui-fg-base font-bold">
                    Mailing Address
                  </span>
                  <p>Sea Moss Wellness</p>
                  <p>4500 Forbes Blvd, Suite #200</p>
                  <p>Lanham, MD</p>
                  <p>20706</p>
                </div>
                <div className="flex flex-col gap-y-2 mb-16">
                  <span className="txt-small-plus txt-ui-fg-base font-bold">
                    Customer Care
                  </span>
                  <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                    <li>
                      <Link href="/track-order" className="hover:underline">
                        Track your Order
                      </Link>
                    </li>
                    <li>
                      <Link href="/faqs" className="hover:underline">
                        Faqs
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:underline">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/disclaimer" className="hover:underline">
                        Disclaimer
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-2 mb-16">
                  <span className="txt-small-plus txt-ui-fg-base font-bold">
                    Policies
                  </span>
                  <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                    <li>
                      <Link href="/shipping" className="hover:underline">
                        Shipping
                      </Link>
                    </li>
                    <li>
                      <Link href="/refund-policy" className="hover:underline">
                        Refund
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms-of-service"
                        className="hover:underline"
                      >
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy" className="hover:underline">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-2 mb-16">
                  <span className="txt-small-plus txt-ui-fg-base  font-bold">
                    Quick Links
                  </span>
                  <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                    <li>
                      <Link href="/" className="hover:underline">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" className="hover:underline">
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/categories/sea-moss-gels"
                        className="hover:underline"
                      >
                        Sea Moss Gels
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/categories/dried-sea-moss"
                        className="hover:underline"
                      >
                        Dried Sea Moss
                      </Link>
                    </li>
                    {/* <li>
                  <Link href="/shop">Capsules</Link>
                </li> */}
                    <li>
                      <Link href="/about" className="hover:underline">
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="txt-small-plus txt-ui-fg-base  font-bold">
                    Get In Touch
                  </span>
                  <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                    <li>
                      <Link href="/contact" className="hover:underline">
                        Contact us
                      </Link>
                    </li>
                    <li className="break-words">
                      <Link href="/contact" className="hover:underline">
                        support@seamosswellness.com
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">(240) 266-0588</Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:underline">
                        Join the Community
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mx-auto max-w-2xl text-center">
                <p>
                  The content on this website is not medical advice and it’s
                  intended for informational and educational purposes only. Read
                  our{' '}
                  <Link
                    href="/disclaimer"
                    className="text-red-500 hover:underline"
                  >
                    disclaimer
                  </Link>
                  .
                </p>
                <div className="flex justify-between items-center pt-2 max-w-[250px] mx-auto">
                  <Image
                    src="/icons/visa.png"
                    alt="Visa"
                    width={50}
                    height={50}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                  <Image
                    src="/icons/master-card.png"
                    alt="Mastercard"
                    width={50}
                    height={50}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                  <Image
                    src="/icons/discover-card.png"
                    alt="Discover card"
                    width={50}
                    height={50}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                  <Image
                    src="/icons/american-express.png"
                    alt="American Express"
                    width={50}
                    height={50}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mx-auto py-4 text-ui-fg-muted bg-gray-600">
            <p className="text-compact-small text-white">
              © {new Date().getFullYear()} Sea Moss Wellness Company
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
