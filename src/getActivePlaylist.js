import { findWhere } from 'underscore'
import getPlaylists from './getPlaylists'

export default function getActivePlaylist() {
  return findWhere(getPlaylists(), { active: true })
}
