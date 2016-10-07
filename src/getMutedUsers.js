import mutedUsers from 'plug/collections/mutes'
import makeUser from './makeUser'

export default function getMutedUsers () {
  return mutedUsers.map(user => user.toJSON()).map(makeUser)
}
