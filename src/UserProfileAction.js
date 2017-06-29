import Action from 'plug/actions/Action'
import util from 'plug/util/util'

const UserProfileAction = Action.extend({
  type: 'GET',
  init (id) {
    this.route = `profile/${id}`
    this._super(true)
  },
  parse (response) {
    if (response.code !== 200) {
      if (this.error) this.error(response.code)
      return
    }

    if (this.success) {
      const profile = response.data[0]
      profile.history.forEach(util.deserializeHistoryItem, util)
      this.success(profile)
    }
  }
})

export default UserProfileAction
