import bannedUsers from 'plug/collections/bannedUsers'
import makeUser from './makeUser'

export default function getBannedUsers() {
  return bannedUsers.map(user => user.toJSON()).map(makeUser)
}
