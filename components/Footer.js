import Link from 'next/link'

const Footer = () => {
  return (
    <div className="border-t border-ui-border-base bg-stone-50">
      <div className="container mx-auto max-w-9xl px-4">
        <div className="grid grid-cols-1 gap-10 py-20">
          <div>
            <Link
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Sea Moss Wellness
            </Link>
            <div className="lg:max-w-2xl mt-5 pr-5">
              <p className="max-w-2xl mt-5 pr-5">
                If you're looking buy dried sea moss, organic sea moss gels, or
                sea moss capsules and supplements, look no further.
              </p>
              <p className="py-5">
                Whether you're looking for an easy-to-use gel to incorporate
                into your daily routine, the versatility of raw sea moss to
                create your own products, or the simplicity of capsules for
                on-the-go nutrition, we have you covered.
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
                  <Link href="/track-order">Track your Order</Link>
                </li>
                <li>
                  <Link href="/faqs">Faqs</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/disclaimer">Disclaimer</Link>
                </li>
                <li>
                  <Link href="/reviews">Reviews</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2 mb-16">
              <span className="txt-small-plus txt-ui-fg-base font-bold">
                Policies
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <Link href="/shipping">Shipping</Link>
                </li>
                <li>
                  <Link href="/refund-policy">Refund</Link>
                </li>
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2 mb-16">
              <span className="txt-small-plus txt-ui-fg-base  font-bold">
                Quick Links
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="/categories/sea-moss-gels">Sea Moss Gels</Link>
                </li>
                <li>
                  <Link href="/categories/dried-sea-moss">Dried Sea Moss</Link>
                </li>
                {/* <li>
                  <Link href="/shop">Capsules</Link>
                </li> */}
                <li>
                  <Link href="/about">About</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base  font-bold">
                Get In Touch
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <Link href="/blog">Contact us</Link>
                </li>
                <li className="break-words">
                  <Link href="/blog">support@seamosswellness.com</Link>
                </li>
                <li>
                  <Link href="/blog">(240) 266-0588</Link>
                </li>
                <li>
                  <Link href="/blog">Join the Community</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <p>
              The content on this website is not medical advice and it’s
              intended for informational and educational purposes only. Read our{' '}
              <Link href="/disclaimer">disclaimer</Link>.
            </p>
          </div>
        </div>
        <div className="text-center mx-auto pb-10 text-ui-fg-muted bg-stone-50">
          <p className="txt-compact-small">
            © {new Date().getFullYear()} Sea Moss Wellness Company
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
