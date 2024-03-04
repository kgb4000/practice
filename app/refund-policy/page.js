import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Refund Policy | Sea Moss Wellness',
  description:
    'Want to learn more about sea moss, or want to send us a message? Contact us today!',
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

const RefundPolicy = () => {
  return (
    <>
      <section>
        <div className="container max-w-3xl mx-auto my-40 px-6">
          <h1 className="text-5xl my-8 text-center">Refund Policy</h1>
          <p className="text-xl mb-4">
            At Sea Moss Wellness, we are committed to ensuring the satisfaction
            of our customers.
          </p>
          <p className="text-xl mb-4">
            We understand that sometimes a product may not meet your
            expectations.
          </p>
          <p className="text-xl mb-4">
            That's why we offer a generous 90-day return and refund policy.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">
            1. Return Eligibility Window
          </h2>
          <p className="text-xl mb-4">
            We have a 90-day return policy, which means you have 90 days after
            receiving your item to request a refund.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">
            2. Condition of Returned Items
          </h2>
          <p className="text-xl mb-4">
            To be eligible for a return and refund, items must be in the same
            condition that you received them, unopened and in their original
            packaging.
          </p>
          <p className="text-xl mb-4">
            Partially used or opened products are not eligible for a refund.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">
            3. Non-Refundable Items
          </h2>
          <p className="text-xl mb-4">
            Certain types of items cannot be returned for a refund, such as gift
            cards and downloadable products.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">4. Return Process</h2>
          <p className="text-xl mb-4">
            To initiate a return, please contact our customer service team at{' '}
            <Link href="/contact">support@seamosswellness.com</Link>. Provide
            your order number and the reason for your return.
          </p>
          <p className="text-xl mb-4">
            Our team will provide you with a Return Merchandise Authorization
            (RMA) number and return instructions.
          </p>
          <p className="text-xl mb-4">
            Customers are responsible for return shipping costs unless the
            return is due to an error on our part (e.g., damaged or wrong item).
          </p>
          <h2 className="text-2xl mb-4 font-semibold">5. Refunds</h2>
          <p className="text-xl mb-4">
            Once your return is received and inspected, we will send you an
            email to notify you of the approval or rejection of your refund.
          </p>
          <p className="text-xl mb-4">
            If approved, your refund will be processed, and a credit will
            automatically be applied to your original method of payment within a
            certain number of days.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">
            6. Late or Missing Refunds
          </h2>
          <p className="text-xl mb-4">
            If you haven’t received a refund yet, first check your bank account
            again.
          </p>
          <p className="text-xl mb-4">
            Then contact your credit card company, it may take some time before
            your refund is officially posted.
          </p>
          <p className="text-xl mb-4">
            Next, contact your bank. There is often some processing time before
            a refund is posted.
          </p>
          <p className="text-xl mb-4">
            If you’ve done all of this and you still have not received your
            refund, please contact us at{' '}
            <Link href="/contact">support@seamosswellness.com</Link>.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">7. Exchanges</h2>
          <p className="text-xl mb-4">
            We only replace items if they are defective or damaged. If you need
            to exchange it for the same item, send us an email at{' '}
            <Link href="/contact">support@seamosswellness.com</Link> and send
            your item to the provided return address.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">
            8. Customer Service Contact
          </h2>
          <p className="text-xl mb-4">
            For any questions or concerns regarding your order or this refund
            policy, please contact our customer service team at{' '}
            <Link href="/contact">support@seamosswellness.com</Link> .
          </p>
          <p className="text-xl mb-4">
            Thank you for shopping with Sea Moss Wellness.
          </p>
          <p className="text-xl mb-4">
            We appreciate your business and are here to ensure that your
            experience with us is positive and satisfying.
          </p>
        </div>
      </section>
    </>
  )
}

export default RefundPolicy
