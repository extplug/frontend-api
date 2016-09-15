export default function dispatchAction(action) {
  return new Promise((resolve, reject) => {
    action.on('success', resolve)
    action.on('error', reject)
  })
}
