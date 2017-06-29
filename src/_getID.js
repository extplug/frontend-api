import { Model } from 'backbone'

/**
 * Generically get a model ID, from a Backbone Model, a JavaScript object, or
 * just the input ID.
 *
 * @private
 */
export default function _getID (obj) {
  if (typeof obj === 'object') {
    if (obj instanceof Model) {
      return obj.get('id')
    }
    return obj.id
  }
  return obj
}
