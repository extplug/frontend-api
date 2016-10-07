import { findWhere } from 'underscore'
import getPlaylists from './getPlaylists'

export default function getSelectedPlaylist () {
  return findWhere(getPlaylists(), { visible: true })
}
