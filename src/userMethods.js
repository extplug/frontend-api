import getDJ from './getDJ'
import getMutedUsers from './getMutedUsers'
import muteUser from './muteUser'
import unmuteUser from './unmuteUser'
import getBannedUsers from './getMutedUsers'
import banUser from './banUser'
import unbanUser from './unbanUser'

export function isDJ(user) {
  return getDJ().id === user.id
}

export function isMuted(user) {
  return getMutedUsers().some((muted) => muted.id === user.id)
}

export function isBanned(user) {
  return getBannedUsers().some((banned) => banned.id === user.id)
}

export {
  muteUser as mute,
  unmuteUser as unmute,
  banUser as ban,
  unbanUser as unban
}
