// == Initial State
export const initialState = {
  brutAn: 0,
  netAn: 0,
  brutMens: 0,
  netMens: 0
}

// == Types
const GET_BRUT_A = 'GET_BRUT_A'
const GET_NET_A = 'GET_NET_A'
const GET_BRUT_M = 'GET_BRUT_M'
const GET_NET_M = 'GET_NET_M'
const ERASE_FORM = 'ERASE_FORM'

// == Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_BRUT_A:
    {
      const { value } = action
      const brutA = value === '' ? 0 : parseInt(value, 10)
      const netA = brutA === '' ? 0 : brutA - (brutA * action.taux / 100)
      const brutM = brutA === '' ? 0 : brutA / 12
      const netM = brutM === '' ? 0 : brutM - (brutM * action.taux / 100)

      return {
        ...state,
        brutAn: brutA,
        netAn: netA === '' ? 0 : Math.round(netA),
        brutMens: brutM === '' ? 0 : Math.round(brutM),
        netMens: netM === '' ? 0 : Math.round(netM)
      }
    }

    case GET_NET_A:
    {
      const { value } = action
      const netA = value === '' ? 0 : parseInt(value, 10)
      const brutA = netA === '' ? 0 : (netA * (action.calc / 100)) + netA // action.calc
      const brutM = brutA === '' ? 0 : brutA / 12
      const netM = brutM === '' ? 0 : brutM - (brutM * action.taux / 100)

      return {
        ...state,
        brutAn: brutA === '' ? 0 : Math.round(brutA),
        netAn: netA,
        brutMens: brutM === '' ? 0 : Math.round(brutM),
        netMens: netM === '' ? 0 : Math.round(netM)
      }
    }

    case GET_BRUT_M:
    {
      const { value } = action
      const brutM = value === '' ? 0 : parseInt(value, 10)
      const netM = brutM === '' ? 0 : brutM - (brutM * action.taux / 100)
      const brutA = brutM === '' ? 0 : brutM * 12
      const netA = brutA === '' ? 0 : brutA - (brutA * action.taux / 100)

      return {
        ...state,
        brutAn: brutA === '' ? 0 : Math.round(brutA),
        netAn: netA === '' ? 0 : Math.round(netA),
        brutMens: brutM,
        netMens: netM === '' ? 0 : Math.round(netM)
      }
    }

    case GET_NET_M:
    {
      const { value } = action
      const netM = value === '' ? 0 : parseInt(value, 10)
      const brutM = netM === '' ? 0 : (netM * (action.calc / 100)) + netM // action.calc
      const brutA = brutM === '' ? 0 : brutM * 12
      const netA = brutA === '' ? 0 : brutA - (brutA * action.taux / 100)

      return {
        ...state,
        brutAn: brutA === '' ? 0 : Math.round(brutA),
        netAn: netA === '' ? 0 : Math.round(netA),
        brutMens: brutM === '' ? 0 : Math.round(brutM),
        netMens: netM
      }
    }

    case ERASE_FORM:
    {
      return {
        ...state,
        brutAn: 0,
        netAn: 0,
        brutMens: 0,
        netMens: 0
      }
    }

    default:
      return state
  }
}
