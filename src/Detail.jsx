import React, { useContext } from 'react'
import { Context } from './hooks'

const Detail = () => {
  const { data: { list: MainList }, actions } = useContext(Context)

  const delItem = (index) => { actions.delItem(index) }
  
  return (
    <section className="detail">
      <ul className="detail__list">
        {
          MainList.map((item, index) => (
            <li className="detail__list-item" key={index}>
              <span>{item}</span>
              <button className="detail__list-item-del" onClick={() => delItem(index)}>-</button>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Detail
