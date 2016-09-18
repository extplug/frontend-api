import some from 'lodash/some'
import getDJ from './getDJ'
import getMutedUsers from './getMutedUsers'
import muteUser from './muteUser'
import unmuteUser from './unmuteUser'
import getBannedUsers from './getMutedUsers'
import banUser from './banUser'
import unbanUser from './unbanUser'

export function isDJ(user) {
  return getDJ().id === user.id;
}

export function isMuted(user) {
  return some(getMutedUsers(), { id: user.id })
}

export function isBanned(user) {
  return some(getBannedUsers(), { id: user.id })
}

export {
  muteUser as mute,
  unmuteUser as unmute,
  banUser as ban,
  unbanUser as unban
}
