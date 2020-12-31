// Import React
import React, { useEffect, useReducer } from 'react'

// React icons
import { FaCheckCircle } from 'react-icons/fa'

// Import reducer and initial state for useReducer
import { reducer, initialState } from '../../reducers/formReducer'

// Import array to generate inputs dynamically with map method
import { generateArrayField } from '../../utils/generateArrayField'

// Import SCSS
import './form.scss'

/**
 * @function SalaryForm React Function Component
 * @param {string} form
 * @param {number} taux
 * @param {number} calc
 * @description SalaryForm: Component which displays the salarify form
 */
const SalaryForm = ({ form, taux, calc }) => {
  // Manage data with useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState)

  // ES6 Destructuring to get properties from initialState
  const { brutMens, netMens, brutAn, netAn } = state

  // array which allows to generate dynamically form's input with map method
  const arrayField = generateArrayField(brutMens, netMens, brutAn, netAn)

  /**
   * - If form prop change, the component is updated
   * - We dispatch an action to reset the inputs
   */
  useEffect(() => {
    dispatch({ type: 'ERASE_FORM' })
  }, [form])

  return (
    <div className='form'>
      <div className='form-statut'>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FaCheckCircle className='form-statut-check' />
          <h2 className='form-statut-title'>{form === 'cadre' ? 'Cadre' : 'Non Cadre'}</h2>
        </div>
        <div className='form-statut-infos'>
          <p className='form-statut-infos-text'>charges salariales (%): {taux}%</p>
        </div>
      </div>
      {
          arrayField.map((field, index) => (
            <label key={index} htmlFor={field.title} className='form-label'>
              {field.title}
              <div className='form-label-wrap'>
                <input
                  id={field.title}
                  className='form-label-wrap-input'
                  type='text'
                  pattern='[0-9]*' // accept numeric only
                  value={field.val}
                  onChange={(e) => dispatch(
                    {
                      type: field.actionType,
                      value: e.target.value,
                      taux: taux,
                      calc: calc
                    })}
                />
                <span className='form-label-wrap-euro'>€</span>
              </div>
            </label>
          ))
        }
      <button
        className='form-reset'
        onClick={() => dispatch({ type: 'ERASE_FORM' })}
      >
        Réinitialiser
      </button>
    </div>
  )
}

export default SalaryForm
