import waitlist from 'plug/collections/waitlist'

export default function getWaitingUsers() {
  return waitlist.map(user => user.toJSON())
}
