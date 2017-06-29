import { findWhere } from 'underscore'
import getPlaylists from './getPlaylists'

/**
 * Get the playlist that is currently selected by the user.
 *
 * @return {Playlist|null}
 */
export default function getSelectedPlaylist () {
  return findWhere(getPlaylists(), { visible: true })
}
