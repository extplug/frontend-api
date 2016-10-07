/**
 * Dispatch an action.
 *
 * @param {{ on: function(string, function()) }} action
 */
export default function dispatchAction (action) {
  return new Promise((resolve, reject) => {
    action.on('success', resolve)
    action.on('error', reject)
  })
}
