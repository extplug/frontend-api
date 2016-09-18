import waitlist from 'plug/collections/waitlist'
import makeUser from './makeUser'

export default function getWaitingUsers() {
  return waitlist.map(user => user.toJSON()).map(makeUser)
}
