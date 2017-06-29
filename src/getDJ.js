import booth from 'plug/models/booth'
import getUser from './getUser'

/**
 * Find the current DJ.
 *
 * @return {User|null} The current DJ.
 */
export default function getDJ () {
  let dj = booth.get('currentDJ')
  return dj ? getUser(dj) : null
}
