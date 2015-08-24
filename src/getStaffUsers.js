import users from 'plug/collections/users'
import { NONE } from './ROLE'

export default function getStaffUsers(role = NONE) {
  return users
    .filter(user => user.get('role') >= role)
    .map(user => user.toJSON())
}
