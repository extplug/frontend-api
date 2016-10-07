import { findWhere } from 'underscore'
import getPlaylists from './getPlaylists'

export default function getPlaylist (id) {
  return findWhere(getPlaylists(), { id: id })
}
