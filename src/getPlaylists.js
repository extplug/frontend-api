import playlists from 'plug/collections/playlists'
import makePlaylist from './makePlaylist'

export default function getPlaylists () {
  return playlists
    .map(playlist => playlist.toJSON())
    .map(makePlaylist)
}
