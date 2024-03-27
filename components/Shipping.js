import React from 'react'

const Shipping = () => {
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
          🚀 Fast 3 - 5 Day Shipping
        </p>
        <p className="uppercase text-[0.8rem] pb-2">
          📧 24 Hour Customer Service
        </p>
        {/* <p className="uppercase text-[0.8rem]">
          🚚 Order today receive by{' '}
          <span className="font-bold underline text-red-500">
            {/* {new Date().getMonth() + 1} / {new Date().getDate() + 6} /{' '}
            {new Date().getFullYear()} 
          </span>
        </p> */}
      </div>
    </>
  )
}

export default Shipping
