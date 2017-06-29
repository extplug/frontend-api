import waitlist from 'plug/collections/waitlist'
import makeUser from './makeUser'

/**
 * Get all users currently in the waitlist.
 *
 * @return {Array<User>}
 */
export default function getWaitingUsers () {
  return waitlist.map(user => user.toJSON()).map(makeUser)
}
