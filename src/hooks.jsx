import React from 'react'

const Types = {
  ADD_ITEM: "ADD_ITEM",
  DEL_ITEM: "DEL_ITEM",
  CLEAR_ALL: "CLEAR_ALL"
}

export const ActionCreators = {
  add: (item) => ({ type: Types.ADD_ITEM, data: item }),
  del: (index) => ({ type: Types.DEL_ITEM, data: index }),
  clear: () => ({ type: Types.CLEAR_ALL }),
}

export const DefaultData = { list: [] }

export const Reducer = (state, action) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return { ...state, list: [...state.list, action.data] }
    case Types.DEL_ITEM:
      return { ...state, list: state.list.filter((_, index) => index !== action.data) }
    case Types.CLEAR_ALL:
      return { ...state, list: [] }
    default:
      return state
  }
}

export const Context = React.createContext({})