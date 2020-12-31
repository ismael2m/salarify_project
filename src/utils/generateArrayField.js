
/**
 * @function generateArrayField
 * @param {number} brutMens
 * @param {number} netMens
 * @param {number} brutAn
 * @param {number} netAn
 * @returns {Array}
 * @description Function which returns an array to iterate on it
 * to generate form's inputs dynamically
 */
export const generateArrayField = (brutMens, netMens, brutAn, netAn) => {
  const arrayField = [
    {
      title: 'Salaire brut / mensuel',
      val: brutMens,
      actionType: 'GET_BRUT_M'
    },
    {
      title: 'Salaire net / mensuel',
      val: netMens,
      actionType: 'GET_NET_M'
    },
    {
      title: 'Salaire brut / annuel',
      val: brutAn,
      actionType: 'GET_BRUT_A'
    },
    {
      title: 'Salaire net / annuel',
      val: netAn,
      actionType: 'GET_NET_A'
    }
  ]

  return arrayField
}
