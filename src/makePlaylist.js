import makeProto from './makeProto'
import * as proto from './playlistMethods'

export default function makePlaylist(playlist) {
  return makeProto(playlist, proto)
}
