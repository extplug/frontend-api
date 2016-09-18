import UnmuteAction from 'plug/actions/bans/UnmuteAction'
import dispatchAction from './dispatchAction'

export default function unmuteUser(user) {
  return dispatchAction(new UnmuteAction(user.id))
}
