import getUser from './getUser'

/**
 * Check if the current user has a given role.
 *
 * @param {number} role - The role to check for.
 *
 * @return {boolean} Whether the user has the role.
 */
export default function hasPermission (role) {
  const user = getUser()
  return Math.max(user.role, user.gRole) >= role
}
