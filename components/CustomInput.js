const CustomInput = ({ quantity, name, text, price, onChange }) => {
  return (
    <>
      <div>
        {quantity}
        {name}
        {price}
        {onChange}
      </div>
    </>
  )
}

export default CustomInput
