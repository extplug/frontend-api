import find from 'lodash/find'
import getPlaylists from './getPlaylists'

export default function getPlaylist(id) {
  return find(getPlaylists(), { id: id })
}
