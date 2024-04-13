import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Sea Moss Wellness',
  description:
    'This policy provides detailed insights into how we handle your information when you visit our website at seamosswellness.com.',
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

const PrivacyPolicy = () => {
  return (
    <>
      <section>
        <div className="container max-w-9xl mx-auto lg:px-0 mt-20 md:mt-36 mb-16 px-4">
          <div className="container">
            <h1 className="text-4xl lg:text-5xl mb-8 text-center">
              Our Privacy Policy
            </h1>
            <p className="lg:text-xl mb-4">
              Thank you for being a valued member of the Sea Moss Wellness
              community ("Company," "we," "us," or "our").
            </p>
            <p className="lg:text-xl mb-4">
              Your privacy and the protection of your personal information are
              paramount to us.
            </p>
            <p className="lg:text-xl mb-4">
              This policy provides detailed insights into how we handle your
              information when you:
            </p>
            <ul className="m-4">
              <li className="lg:text-xl m-4 list-disc">
                Visit our website at seamosswellness.com
              </li>
              <li className="lg:text-xl m-4 list-disc">
                Interact with us through sales, marketing, events, or other
                related activities
              </li>
            </ul>
            <h2 className="text-2xl mb-4">Definitions for Clarity:</h2>
            <ul className="m-4">
              <li className="lg:text-xl m-4 list-disc">
                "Website" refers to any website of ours that links to this
                policy.
              </li>
              <li className="lg:text-xl m-4 list-disc">
                "Services" encompasses our Website and other related services,
                including sales, marketing, or events.
              </li>
            </ul>
            <h2 className="text-2xl mb-4">Purpose of this Policy:</h2>
            <p className="lg:text-xl mb-4">
              Our aim is to transparently explain what information we collect,
              how we use it, and your rights regarding it. If any terms in this
              policy are not agreeable to you, please cease using our Services
              immediately.
            </p>
            <h2 className="text-2xl mb-4">Information Collection:</h2>
            <p className="lg:text-xl mb-4">
              We collect personal information that you provide voluntarily when
              registering on the Website, expressing interest in our products
              and Services, participating in activities on the Website, or
              contacting us.
            </p>
            <p className="lg:text-xl mb-4">
              The personal information collected varies based on your
              interactions with us and the Website, your choices, and the
              products and features you use. This includes:
            </p>
            <ul className="m-4">
              <li className="lg:text-xl m-4 list-disc">
                Personal Information: Names, email addresses, phone numbers,
                mailing addresses, usernames, passwords, billing addresses, and
                debit/credit card numbers.
              </li>
              <li className="lg:text-xl m-4 list-disc">
                Payment Data: Information necessary to process your payments,
                like payment instrument number and security code. Payment data
                is stored by our payment processors Shopify, Amazon Pay, PayPal,
                and Google Pay.
              </li>
            </ul>
            <p className="lg:text-xl mb-4">
              We require that all information provided be accurate and current.
            </p>
            <h2 className="text-2xl mb-4">Automated Information Collection:</h2>
            <p className="lg:text-xl mb-4">
              When you navigate our Website, we automatically collect certain
              information. This includes device and usage data like IP
              addresses, browser characteristics, operating system details,
              language preferences, referring URLs, and other technical
              information for maintaining website security, operational
              efficiency, and internal analytics.
            </p>
            <h2 className="text-2xl mb-4">Collected data comprises:</h2>
            <ul>
              <li className="lg:text-xl m-4 list-disc">
                Log and Usage Data: Service-related data, diagnostic
                information, and performance metrics recorded in log files.
              </li>
              <li className="text-xl m-4 list-disc">
                Device Data: Information about your accessing device, including
                IP addresses and hardware details.
              </li>
              <li className="lg:text-xl m-4 list-disc">
                Location Data: Both precise and general information about your
                device's location, which varies based on device settings and
                usage.
              </li>
            </ul>
            <h2 className="text-2xl mb-4">Usage of Your Information:</h2>
            <p className="lg:text-xl mb-4">
              The collected information is utilized for various business
              purposes, such as account management, feedback requests, user
              communication facilitation, service and administrative updates,
              security enhancements, contract enforcement, legal request
              responses, order management, service delivery, user inquiry
              responses, marketing, and targeted advertising.
            </p>
            <p className="lg:text-xl mb-4">
              We process your information based on legitimate business
              interests, contractual performance, your consent, and/or
              compliance with legal obligations.
            </p>
            <h2 className="text-2xl mb-4">Data Sharing and Disclosure:</h2>
            <p className="lg:text-xl mb-4">
              We may share your data for various reasons, including consent,
              legitimate interests, contract performance, and legal
              requirements. Specific situations may include business transfers
              and legal proceedings.
            </p>
            <h2 className="text-2xl mb-4">Data Retention:</h2>
            <p className="lg:text-xl mb-4">
              Your personal information is retained only as long as necessary
              for the purposes outlined in this notice, complying with legal,
              accounting, or reporting requirements. We take steps to delete or
              anonymize your information or, if not possible, securely store and
              isolate it from further processing until deletion is feasible.
            </p>
            <h2 className="text-2xl mb-4">Information Security:</h2>
            <p className="lg:text-xl mb-4">
              We implement appropriate security measures to protect your
              information. However, no system is entirely secure, and we cannot
              guarantee absolute security of your data. Transmission of
              information to and from our Website is at your own risk.
            </p>
            <h2 className="text-2xl mb-4">Minor's Privacy:</h2>
            <p className="lg:text-xl mb-4">
              We do not intentionally collect data from individuals under 18. If
              we become aware of such collection, we will take steps to delete
              the information. Parents or guardians can contact us for data
              removal requests.
            </p>
            <h2 className="text-2xl mb-4">Your Privacy Rights:</h2>
            <p className="lg:text-xl mb-4">
              You can review, update, or delete your account information by
              contacting us. For marketing opt-outs, follow the unsubscribe
              instructions in our emails or contact us directly.
            </p>
            <h2 className="text-2xl mb-4">Cookie Usage:</h2>
            <p className="lg:text-xl mb-4">
              Cookies are employed to analyze web traffic and improve our
              website. You can accept or decline cookies, but this may impact
              your website experience.
            </p>
            <h2 className="text-2xl mb-4 ">Do-Not-Track Features:</h2>
            <p className="lg:text-xl mb-4">
              We currently do not respond to Do-Not-Track signals due to the
              lack of a uniform standard.
            </p>
            <h2 className="text-2xl mb-4">California Residents:</h2>
            <p className="lg:text-xl mb-4">
              California residents have specific rights regarding their personal
              information under the "Shine The Light" law and CCPA.
            </p>
            <h2 className="text-2xl mb-4">Updates to this Notice:</h2>
            <p className="lg:text-xl mb-4">
              This policy may be updated periodically. We will notify you of
              significant changes through our Website or direct communication.
            </p>
            <h2 className="text-2xl mb-4">Contact Us:</h2>
            <p className="lg:text-xl mb-4">
              For any questions or concerns about this notice, reach us at
              support@seamosswellness.com or call 1-240-266-0588.
            </p>
            <h2 className="text-2xl mb-4">Accessing Your Data:</h2>
            <p className="lg:text-xl mb-4">
              Depending on your location, you may have rights to access, modify,
              or delete the personal information we collect.
            </p>
            <p className="lg:text-xl mb-4">
              Contact us at support@seamosswellness.com to exercise these
              rights.
            </p>
          </div>
        </div>
        <div className="my-14 text-center">
          <Link href="/shop">
            <button className="py-4 px-10 bg-yellow-400 text-xl font-bold uppercase">
              Shop Here {'>'}
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy
