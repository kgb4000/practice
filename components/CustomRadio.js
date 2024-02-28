import React from 'react'
import { useState } from 'react'

const CustomRadio = ({ id, quantity, onChange }) => {
  return (
    <label className="p-4" key={id}>
      <input
        type="radio"
        name="myRadio"
        id={id}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <span className="py-4 px-2 text-xl">
        {quantity} {quantity > 1 ? 'Bags' : 'Bag'}
      </span>
      <span className="pl-1 text-md">
        <i>{discount}% off</i>
      </span>
    </label>
  )
}

export default CustomRadio
