import playlists from 'plug/collections/playlists'
import makePlaylist from './makePlaylist'

/**
 * Get all of this user's playlists.
 *
 * @return {Array<Playlist>}
 */
export default function getPlaylists () {
  return playlists
    .map(playlist => playlist.toJSON())
    .map(makePlaylist)
}
