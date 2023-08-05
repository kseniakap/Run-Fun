import React from 'react'
import st from './Item.module.scss'

const Item = ({ list }) => {
  const { name, description, price, image } = list
  return (
    <>
      <div className={st.item}>
        <img className={st.img} src={'./img/' + image} alt={name} />
        <div className={st.content}>
          <h2 className={st.name}>{name}</h2>
          <p className={st.descr}>{description}</p>
          <p className={st.price}>{price} ₽ </p>
          <div className={st.add}>+</div>
        </div>
      </div>
    </>
  )
}

export default Item
