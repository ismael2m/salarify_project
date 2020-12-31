// == Initial State
export const initialState = {
  form: 'nonCadre',
  taux: 22,
  calc: 28.205
}

// == Types
const SWITCH_FORM = 'SWITCH_FORM'

// == Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SWITCH_FORM:
      return {
        ...state,
        form: action.form,
        taux: action.taux,
        calc: action.calc
      }

    default:
      return state
  }
}
