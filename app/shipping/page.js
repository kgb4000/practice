import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Shipping Policy | Sea Moss Wellness',
  description:
    'Discover the full range of our natural sea moss products. From gels to capsules and dried moss, find everything for your wellness journey here.',
  alternates: {
    canonical: 'https://seamosswellness.com/shop',
  },
}

const ShippingPolicy = () => {
  return (
    <>
      <section>
        <div className="container max-w-3xl mx-auto my-40 px-6">
          <h1 className="text-5xl my-8 text-center">Shipping Policy</h1>
          <p className="text-xl mb-4">
            At Sea Moss Wellness, we are dedicated to providing you with
            exceptional service from the moment you place your order to the
            moment it arrives at your doorstep.
          </p>
          <p className="text-xl mb-4">
            Please review our shipping policy outlined below to understand our
            shipping procedures and timelines:
          </p>
          <h2 className="text-3xl my-8">Order Processing Time:</h2>
          <ul className="ml-8">
            <li className="text-xl mb-4 list-disc">
              Orders are typically processed within 1-2 business days after
              payment confirmation.
            </li>
            <li className="text-xl mb-4 list-disc">
              Orders placed on weekends or holidays will be processed on the
              next business day.
            </li>
          </ul>
          <h2 className="text-3xl my-8">Shipping Methods and Timeframes:</h2>
          <ul className="ml-8">
            <li className="text-xl mb-4 list-disc">
              We offer standard shipping and expedited shipping options.
            </li>
            <li className="text-xl mb-4 list-disc">
              Standard Shipping: Delivery typically takes 3-7 business days
              within the continental United States. Remote areas may require
              additional time for delivery.
            </li>
            <li className="text-xl mb-4 list-disc">
              Expedited Shipping: For customers who need their orders sooner, we
              offer expedited shipping options with delivery typically within
              1-3 business days within the continental United States. Additional
              fees may apply for expedited shipping.
            </li>
          </ul>
          <h2 className="text-3xl my-8">Shipping Rates:</h2>
          <ul className="ml-8">
            <li className="text-xl mb-4 list-disc">
              Shipping rates are calculated based on the weight of the package,
              destination, and selected shipping method.
            </li>
            <li className="text-xl mb-4 list-disc">
              Free shipping may be available for orders exceeding a certain
              value, as specified on our website or during promotional periods.
            </li>
          </ul>
          <h2 className="text-3xl my-8">Order Tracking:</h2>
          <ul className="ml-8">
            <li className="text-xl mb-4 list-disc">
              Once your order has been shipped, you will receive a shipping
              confirmation email containing tracking information. You can track
              your order using the provided tracking number on our website or
              through the carrier's website.
            </li>
          </ul>
          <h2 className="text-3xl my-8">International Shipping:</h2>
          <ul className="ml-8">
            <li className="text-xl mb-4 list-disc">
              We currently do not offer international shipping.
            </li>
          </ul>
          <h2 className="text-3xl my-8">Shipping Restrictions:</h2>
          <ul className="ml-8">
            <li className="text-xl mb-4 list-disc">
              We comply with all local, state, and federal regulations regarding
              the shipment of our products. Some locations may have restrictions
              or regulations on the importation of certain supplements. It is
              the responsibility of the customer to ensure compliance with local
              regulations before placing an order.
            </li>
          </ul>
          <h2 className="text-3xl my-8">Shipping Address Accuracy:</h2>
          <ul className="ml-8">
            <li className="text-xl mb-4 list-disc">
              Please ensure that the shipping address provided during checkout
              is accurate and complete. We are not responsible for orders
              shipped to incorrect addresses due to customer error.
            </li>
            <li className="text-xl mb-4 list-disc">
              If you need to update or correct your shipping address after
              placing an order, please contact our customer service team as soon
              as possible for assistance.
            </li>
          </ul>
          <h2 className="text-3xl my-8">Delivery Issues:</h2>
          <ul className="ml-8">
            <li className="text-xl mb-4 list-disc">
              In the rare event of a delivery issue such as a lost or damaged
              package, please contact our customer service team immediately. We
              will work with the carrier to resolve the issue and ensure that
              you receive your order in a timely manner.
            </li>
          </ul>
          <h2 className="text-3xl my-8">Contact Us:</h2>
          <ul className="ml-8">
            <li className="text-xl mb-4 list-disc">
              If you have any questions or concerns regarding our shipping
              policy, please don't hesitate to contact our customer service
              team. We are here to assist you and ensure your shopping
              experience with Sea Moss Wellness is smooth and enjoyable.
            </li>
          </ul>
          <p className="text-xl my-4">
            Thank you for choosing Sea Moss Wellness for your sea moss
            supplement needs.
          </p>
          <p className="text-xl my-4">We appreciate your business!</p>
          <div className="my-10 text-center">
            <Link href="/shop">
              <button className="py-4 px-10 bg-yellow-400 text-xl font-bold uppercase">
                Shop Our Products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShippingPolicy
