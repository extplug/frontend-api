import RoomUpdateAction from 'plug/actions/rooms/RoomUpdateAction'
import { COHOST } from './ROLE'
import dispatchAction from './dispatchAction'
import hasPermission from './hasPermission'

/**
 * Update room properties.
 *
 * @param {{name: ?string, description: ?string, welcome: ?string, minChatLevel: ?number}} props - Properties to update.
 *
 * @private
 */
export default function updateRoom (props) {
  if (!hasPermission(COHOST)) {
    return Promise.reject(new Error('User must be a Co-host or up to do this.'))
  }
  return dispatchAction(new RoomUpdateAction(
    props.name,
    props.description,
    props.welcome,
    props.minChatLevel
  ))
}
