// Import React
import React, { useReducer } from 'react'

// Import reducer and initial state
import { reducer, initialState } from './reducers/appReducer'

// Import components
import SalaryForm from './components/SalaryForm'

// Import Images and icons
import iphone from './assets/img/iphone.png'
import { FaArrowAltCircleRight } from 'react-icons/fa'

// Import SCSS
import './app.scss'

/**
 * @function App React Function Component
 * @description Application root
 */
function App () {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Actions to dispatch in the reducer
  const actionCadre = {
    type: 'SWITCH_FORM',
    form: 'cadre',
    taux: 25,
    calc: 33.33333333333333333333333333
  }

  const actionNonCadre = {
    type: 'SWITCH_FORM',
    form: initialState.form,
    taux: initialState.taux,
    calc: initialState.calc
  }

  /**
   * @function handleChangeStatus
   * @description on click, switch form "non cadre" => "cadre" and vice & versa
   */
  const handleChangeStatus = () => {
    if (state.form === 'nonCadre') {
      dispatch(actionCadre)
    } else {
      dispatch(actionNonCadre)
    }
  }

  const status = state.form === 'cadre' ? 'Non Cadre' : 'Cadre'

  return (
    <div className='app'>
      <img src={iphone} alt='' className='iphone' />
      <div className='app-content'>
        <h1 className='app-title'>Salarify</h1>
        <h2 className='app-subtitle'> Convertisseur de salaire</h2>
        <SalaryForm form={state.form} taux={state.taux} calc={state.calc} />
        <button className='app-button' type='button' onClick={handleChangeStatus}>
          <FaArrowAltCircleRight className='app-button-arrow' />{`Statut ${status}`}
        </button>
      </div>
      <a href='https://github.com/ismael2m/salarify_project' rel='noopener noreferrer' target='_blank'>
        <button className='app-github' type='button'>
          Repo Github
        </button>
      </a>
    </div>
  )
}

export default App
