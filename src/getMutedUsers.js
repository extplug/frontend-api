import mutedUsers from 'plug/collections/mutedUsers'

export default function getMutedUsers() {
  return mutedUsers.map(user => user.toJSON())
}
