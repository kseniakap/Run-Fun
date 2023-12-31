import React, { useContext, useRef, useEffect } from 'react'
import { CustomContext } from '../../Context'
import { useTranslation } from 'react-i18next'
import Order from '../order/Order'
import { fadeIn } from 'react-animations'

import { Link } from 'react-router-dom'
import './../../style/style.scss'
import st from './OrderList.module.scss'

const OrderList = () => {
  const { user, cardOpen, setCardOpen, isAddToCartClicked, cart } = useContext(
    CustomContext,
  )
  const orderRef = useRef(null)
  const { t } = useTranslation()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !isAddToCartClicked &&
        cardOpen &&
        orderRef.current &&
        !orderRef.current.contains(event.target)
      ) {
        setCardOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const showOrders = (order) => {
    let sum = 0
    order && order.forEach((el) => (sum += Number(el.price) * el.count))
    return (
      <div className={st.shop__list}>
        {order && order.map((el, idx) => <Order key={idx} item={el} />)}
        <div className={st.sum}>
          <span>{t('OrderList.delivery')}:</span>
          <p className={st.delivery}>{t('OrderList.free')}</p>
          <div className={st.result}>
            <span>{t('OrderList.total')}</span>
            <span style={{ color: sum > 50000 ? 'green' : 'black' }}>
              {sum.toString().slice(0, -3) + ' ' + sum.toString().slice(-3)} ₽
            </span>
          </div>
          {user && user.name ? (
            <Link
              to="/order"
              className={st.orderLink}
              onClick={() => setCardOpen(false)}
            >
              {t('OrderList.placeAnOrder')}
            </Link>
          ) : (
            <Link
              to="/login"
              className={st.orderLink}
              onClick={() => setCardOpen(false)}
            >
              {t('OrderList.logIn')}
            </Link>
          )}
        </div>
      </div>
    )
  }

  const showNothing = () => {
    return (
      <div>
        <h2 className={st.basket}>Корзина пуста</h2>
        <p className={st.text}>
          Купите комплекст из{' '}
          <Link to="/onegood/43">журнального стола Бруклин</Link> и стула
          <Link to="/onegood/32"> Белен</Link> в сентябре, и вы получите в
          подарок
          <Link to="/onegood/29"> каркас кровати Бланка</Link>
        </p>
      </div>
    )
  }

  return (
    <>
      {cardOpen && (
        <div ref={orderRef} className={st.shop}>
          <h2 className={st.title}>Ваша корзина</h2>
          {cart && cart.length > 0 ? showOrders(cart) : showNothing()}
        </div>
      )}
    </>
  )
}

export default OrderList
