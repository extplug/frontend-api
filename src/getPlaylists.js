import playlists from 'plug/collections/playlists'

export default function getPlaylists() {
  return playlists.map(playlist => playlist.toJSON())
}
