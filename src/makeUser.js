import * as proto from './userMethods'
import makeProto from './makeProto'

export default function makeUser(user) {
  return makeProto(user, proto)
}
