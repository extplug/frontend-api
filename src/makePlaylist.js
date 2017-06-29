import makeProto from './makeProto'
import * as proto from './playlistMethods'

/**
 * @api private
 */
export default function makePlaylist (playlist) {
  return makeProto(playlist, proto)
}
