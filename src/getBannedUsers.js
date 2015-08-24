import bannedUsers from 'plug/collections/bannedUsers'

export default function getBannedUsers() {
  return bannedUsers.map(user => user.toJSON())
}
