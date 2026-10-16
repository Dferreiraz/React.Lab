import './style.css'

export const Card = ({ image, descimage, title, price }) => {
  return (
    <div className="card-products">
      <img src={image} alt={descimage} />
      <h3>{title}</h3>
      <p>R${price}</p>
    </div>
  )
}