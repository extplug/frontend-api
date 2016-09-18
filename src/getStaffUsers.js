import users from 'plug/collections/users'
import makeUser from './makeUser'
import { NONE } from './ROLE'

export default function getStaffUsers(role = NONE) {
  return users
    .filter(user => user.get('role') >= role)
    .map(user => user.toJSON())
    .map(makeUser)
}
