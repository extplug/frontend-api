import getUser from './getUser'

export default function hasPermission(role) {
  const user = getUser()
  return Math.max(user.role, user.gRole) >= role
}
