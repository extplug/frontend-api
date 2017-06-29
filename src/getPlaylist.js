import { findWhere } from 'underscore'
import getPlaylists from './getPlaylists'

/**
 * Get a playlist.
 *
 * @param {number} id - The playlist's ID.
 *
 * @return {Playlist|null}
 */
export default function getPlaylist (id) {
  return findWhere(getPlaylists(), { id: id })
}
