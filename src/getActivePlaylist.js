import { findWhere } from 'underscore'
import getPlaylists from './getPlaylists'

/**
 * Get the active playlist.
 *
 * @return {Playlist}
 */
export default function getActivePlaylist () {
  return findWhere(getPlaylists(), { active: true })
}
