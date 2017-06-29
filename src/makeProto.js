import { assign, create, each, partial } from 'underscore'

/**
 * Define a prototype on an object.
 *
 * @private
 */
export default function makeProto (obj, methods) {
  const proto = {}
  each(methods, (method, name) => {
    proto[name] = partial(method, obj)
  })
  return assign(create(proto), obj)
}
