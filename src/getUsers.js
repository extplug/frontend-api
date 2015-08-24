import users from 'plug/collections/users'

export default function getUsers() {
  return users.map(user => user.toJSON())
}
