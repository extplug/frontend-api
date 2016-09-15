import find from 'lodash/find'
import getPlaylists from './getPlaylists'

export default function getSelectedPlaylist() {
  return find(getPlaylists(), { visible: true })
}
