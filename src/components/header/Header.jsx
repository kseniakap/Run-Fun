import React, { useState, useContext, useRef, useEffect } from 'react'
import { CustomContext } from '../../Context'
import { Link, NavLink } from 'react-router-dom'
import { FaBasketShopping } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import OrderList from '../orderList/OrderList'
import ICONS from '../../assets/icons'
import IMAGES from '../../assets/img'

import './../../style/style.scss'
import st from './Header.module.scss'

const Header = ({ order }) => {
  const { user, logOutUser, cardOpen, setCardOpen } = useContext(CustomContext)
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <header>
      <div className={st.header_top}>
        <div className="container">
          <div className={st.header_top_container}>
            <div className={st.header_wrapper}>
              <a href="/" className={st.logo}>
                Логотип
              </a>
              <p>Время работы: 10:00 - 22:00</p>
            </div>
            <div className={st.header_wrapper}>
              любимое
              {/* логики пока нет */}
              <CustomNavLink to="/login">аккаунт</CustomNavLink>
              <FaBasketShopping
                onClick={() => setCardOpen(!cardOpen)}
                className={`basket ${cardOpen && 'active'}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={st.header_bottom}>
        <div className="container">
          <div className={st.header_bottom_container}>
            {/* выпадающие меню
             */}
            <p>каталог товаров</p>

            <nav>
              <ul className={st.list}>
                <li>
                  <a href="/" to="/about">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="/">Акции</a>
                </li>
                <li>
                  <a href="/">Новинки</a>
                </li>
              </ul>
            </nav>
            <p>социальные сети</p>
            <p>поиск</p>
          </div>
        </div>

        <OrderList order={order} />
        {/* <div className={st.entranceExit}>
          {user && user.name && user.name.length ? (
            <Link to="/" onClick={() => logOutUser()}>
              {t('homePage.headerMenu.logOut')}
            </Link>
          ) : (
            <Link to="/login"> {t('homePage.headerMenu.loginIn')}</Link>
          )}
        </div> */}
      </div>
    </header>
  )
}

export default Header

const CustomNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    style={({ isActive, isPending }) => {
      return {
        fontWeight: isActive ? 'bold' : '',
      }
    }}
  >
    {children}
  </NavLink>
)
