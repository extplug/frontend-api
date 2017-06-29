import UnbanAction from 'plug/actions/bans/UnbanAction'
import bannedUsers from 'plug/collections/bannedUsers'
import dispatchAction from './dispatchAction'

/**
 * Unban a user.
 *
 * @param {User} user - User to unban.
 * @return {Promise}
 */
export default function unbanUser (user) {
  return dispatchAction(new UnbanAction(user.id)).then((result) => {
    bannedUsers.remove(user.id)
    return result
  })
}
