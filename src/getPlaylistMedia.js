import ListMediaAction from 'plug/actions/media/ListMediaAction'
import dispatchAction from './dispatchAction'
import _getID from './_getID'

export default function getPlaylistMedia (playlist) {
  return dispatchAction(
    new ListMediaAction(_getID(playlist))
  )
}
