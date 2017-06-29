import * as proto from './userMethods'
import makeProto from './makeProto'

/**
 * @private
 */
export default function makeUser (user) {
  return makeProto(user, proto)
}
