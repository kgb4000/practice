import React from 'react'
import { addDays, format } from 'date-fns'

const Shipping = () => {
  let currentDate = new Date()
  let futureDate = addDays(currentDate, 7)

  return (
    <>
      <div className="border py-6 px-4 rounded-2xl mt-4">
        <p className="uppercase text-[0.8rem]  pb-2">
          💯 Free shipping on orders over $100.00.{' '}
        </p>
        <p className="uppercase text-[0.8rem] md:text-left pb-2">
          ⭐ 90 Day Money Back Guarantee
        </p>
        <p className="uppercase text-[0.8rem] pb-2">
          🚀 Fast Shipping (3 - 5 Business Days)
        </p>
        <p className="uppercase text-[0.8rem]">
          🚚 Order today receive by{' '}
          <span className="font-bold underline text-red-500">
            {format(futureDate, 'MMMM do')}
          </span>
        </p>
      </div>
    </>
  )
}

export default Shipping
