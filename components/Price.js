'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { buildImage } from '@/lib/cloudinary/cloudinary'
import SecureCheckout from './SecureCheckout'
import Shipping from './Shipping'

const Price = ({ priceOfOne, product }) => {
  const minQuantity = 1
  const mxQuantity = 7
  const [quantity, setQuantity] = useState(minQuantity)
  const [discount, setDiscount] = useState(15)
  const price = priceOfOne

  const updateCartItemQuantity = (newQuantity) => {
    const addToCart = document.querySelector('.snipcart-add-item')
    addToCart.setAttribute('data-item-quantity', newQuantity.toString())
    // calculateDiscount(newQuantity)
  }

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 1)
    setQuantity(newQuantity)
    const addToCart = document.querySelector('.snipcart-add-item')
    addToCart.setAttribute('data-item-quantity', newQuantity)
    addToCart.setAttribute('data-item-min-quantity', newQuantity) // Update min quantity
  }

  const handleIncrement = () => {
    const newQuantity = Math.min(quantity + 1, mxQuantity)
    setQuantity(newQuantity)
    updateCartItemQuantity(newQuantity)
  }

  const handleDecrement = () => {
    const newQuantity = Math.min(quantity - 1, mxQuantity)
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
      updateCartItemQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    const addToCart = document.querySelector('.snipcart-add-item')
    addToCart.setAttribute('data-item-quantity', quantity.toString())
    addToCart.dispatchEvent(new Event('click'))
    // addToCart.click()
  }

  const calculateDiscount = (quantity) => {
    // let newDiscount = 0
    // if (quantity >= 1) {
    //   newDiscount = 10
    // }
    // // } else if (quantity === 2) {
    // //   newDiscount = 12
    // // }
    // // } else if (quantity === 3) {
    // //   newDiscount = 12
    // // } else if (quantity >= 4) {
    // //   newDiscount = 17
    // // }
    setDiscount()
  }

  const calculateDiscountedPrice = () => {
    const discountedAmount = price * (discount / 100)
    return price - discountedAmount
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div>
          <button className="border p-2 rounded-xl" onClick={handleDecrement}>
            -
          </button>

          <span
            className="py-2 px-3 snipcart-add-item"
            onChange={handleQuantityChange}
          >
            {quantity}
          </span>
          <button className="border p-2 rounded-xl" onClick={handleIncrement}>
            +
          </button>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-between">
            {/* <p className="text-xl text-red-600 font-bold my-1">
            You're saving: {discount}%
          </p> */}
            <p className="text-xl md:text-2xl text-red-600 font-bold text-right mr-2">
              ${(calculateDiscountedPrice() * quantity).toFixed(2)}
            </p>
            <p className="line-through text-gray-400">
              ${(price * quantity).toFixed(2)}
              {''}
            </p>
            <p className="text-[0.6rem] uppercase md:block">
              {' '}
              {product.slug.includes('soursop')
                ? '🔥Hot item'
                : '🔥Moving fast'}
            </p>
          </div>
        </div>
      </div>
      <button
        className="py-4 rounded-xl w-full text-xl font-bold bg-yellow-300 hover:bg-yellow-400 snipcart-add-item shadow-lg"
        onClick={handleAddToCart}
        data-item-id={product.id}
        data-item-price={calculateDiscountedPrice().toFixed(2)}
        data-item-description={product.productDescription}
        data-item-image={buildImage(product.image[0].public_id).toURL()}
        data-item-name={product.name}
        data-item-url={`/products/${product.slug}`}
        data-item-quantity={quantity}
        data-item-min-quantity={minQuantity}
        data-item-max-quantity={mxQuantity}
      >
        Get My {discount}% Off Now {'>'}
      </button>
      <SecureCheckout />
      <Shipping />
    </>
  )
}

export default Price
