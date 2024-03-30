'use client'

import React from 'react'
import { useState } from 'react'
import { buildImage } from '@/lib/cloudinary/cloudinary'
import SecureCheckout from './SecureCheckout'

const AddToCart = ({ priceOfOne, product }) => {
  const minQuantity = 1
  const mxQuantity = 7
  const [quantity, setQuantity] = useState(minQuantity)
  const [discount, setDiscount] = useState(15)
  const price = priceOfOne

  const updateCartItemQuantity = (newQuantity) => {
    const addToCart = document.querySelector('.snipcart-add-item')
    addToCart.setAttribute('data-item-quantity', newQuantity.toString())
    calculateDiscount(newQuantity)
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
    let newDiscount = 0
    if (quantity >= 1) {
      newDiscount = 10
    }
    // } else if (quantity === 2) {
    //   newDiscount = 12
    // }
    // } else if (quantity === 3) {
    //   newDiscount = 12
    // } else if (quantity >= 4) {
    //   newDiscount = 17
    // }
    setDiscount(newDiscount)
  }

  const calculateDiscountedPrice = () => {
    const discountedAmount = price * (discount / 100)
    return price - discountedAmount
  }
  return (
    <>
      <div className="max-w-[400px] mx-auto my-10">
        <button
          className="px-4 py-5 rounded-xl w-full text-xl font-bold bg-yellow-300 hover:bg-yellow-400 snipcart-add-item hover:shadow-xl"
          onClick={handleAddToCart}
          data-item-id={product.id}
          data-item-price={calculateDiscountedPrice().toFixed(2)}
          data-item-description={product.metaDescription}
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
      </div>
    </>
  )
}

export default AddToCart
