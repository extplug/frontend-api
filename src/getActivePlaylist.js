import find from 'lodash/find'
import getPlaylists from './getPlaylists'

export default function getActivePlaylist() {
  return find(getPlaylists(), { active: true })
}
