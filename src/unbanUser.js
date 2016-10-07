import UnbanAction from 'plug/actions/bans/UnbanAction'
import bannedUsers from 'plug/collections/bannedUsers'
import dispatchAction from './dispatchAction'

export default function unbanUser (user) {
  return dispatchAction(new UnbanAction(user.id)).then((result) => {
    bannedUsers.remove(user.id)
    return result
  })
}
