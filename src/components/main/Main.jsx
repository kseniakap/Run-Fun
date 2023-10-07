import React from 'react'
import { Link } from 'react-router-dom'
import LinkImgOne from './linkImg-1.png'
import './../../style/style.scss'
import st from './Main.module.scss'

const Main = () => {
  return (
    <>
      <section>
        <div className="container">
          <section className={st.photos}>
            <div className={st.imageContainer}>
              <img src={LinkImgOne} alt="изображение бегунов" />
              <Link to="/goods"> ПЕРЕЙТИ В КАТАЛОГ</Link>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Main
