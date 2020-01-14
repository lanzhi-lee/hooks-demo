import React from 'react'

const Detail = () => {
  return (
    <section className="detail">
      <ul className="detail__list">
        <li className="detail__list-item">
          <span>张三</span>
          <button className="detail__list-item-del">-</button>
        </li>

        <li className="detail__list-item">
          <span>李四</span>
          <button className="detail__list-item-del">-</button>
        </li>

        <li className="detail__list-item">
          <span>王五</span>
          <button className="detail__list-item-del">-</button>
        </li>
      </ul>
    </section>
  )
}

export default Detail
