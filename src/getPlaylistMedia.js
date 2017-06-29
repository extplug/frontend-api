import ListMediaAction from 'plug/actions/media/ListMediaAction'
import dispatchAction from './dispatchAction'
import getID from './_getID'

/**
 * Get the media in a playlist.
 *
 * @param {Playlist|number} playlist - The playlist.
 *
 * @return {Promise<Array<Media>>}
 */
export default function getPlaylistMedia (playlist) {
  return dispatchAction(
    new ListMediaAction(getID(playlist))
  )
}
