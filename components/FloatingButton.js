'use client'

import React, { useState, useEffect } from 'react'
import { buildImage } from '@/lib/cloudinary/cloudinary'
import SecureCheckout from './SecureCheckout'
import Image from 'next/image'
import { IoCartOutline } from 'react-icons/io5'

const FloatingButton = ({ priceOfOne, product }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const quarterPageHeight = windowHeight * 0.15

      // Show the button if scrolled beyond 25% of the page
      setIsVisible(scrollPosition > 750)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
      <section>
        <div className="w-full fixed bottom-4 py-8 text-center md:hidden">
          <button
            className={`px-16 py-5 rounded-xl text-xl font-bold bg-red-600 hover:bg-yellow-400 snipcart-add-item text-white ${isVisible ? '' : 'hidden'} shadow-xl`}
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
            <div className="flex justify-center items-center">
              {/* <Image
                src={buildImage(product.image[0].public_id).toURL()}
                width={50}
                height={50}
              />{' '} */}
              Get My {discount}% Off Now 👉
            </div>
          </button>
        </div>
      </section>
    </>
  )
}

export default FloatingButton
