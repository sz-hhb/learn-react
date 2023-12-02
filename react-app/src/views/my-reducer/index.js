import { useState } from "react"

const initialState = {
  selectedId: 0,
  messages: {
    0: "Hello, Taylor",
    1: "Hello, Alice",
    2: "Hello, Bob"
  }
}

function messageReducer(state, action) {
  switch (action.type) {
    case "changed_selection":
      return { ...state, selectedId: action.contactId }
    case "edited_message":
      return { ...state, [state.selectedId]: action.message }
    case "sent_message":
      return { ...state, [state.selectedId]: "" }
    default:
      throw Error("未知 action：" + action.type)
  }
}

function useMyReducer(reducer, initialState) {
  const [state, setState] = useState(initialState)

  function dispatch(action) {
    setState((s) => reducer(s, action))
  }

  return [state, dispatch]
}

export { useMyReducer, initialState, messageReducer }
