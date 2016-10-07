import booth from 'plug/models/booth'
import getUser from './getUser'

/**
 * Find a single local user object.
 *
 * @param {number|null} id
 */
export default function getDJ () {
  let dj = booth.get('currentDJ')
  return dj ? getUser(dj) : null
}
