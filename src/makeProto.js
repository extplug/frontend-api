import { assign, create, each, partial } from 'underscore'

/**
 * @api private
 */
export default function makeProto (obj, methods) {
  const proto = {}
  each(methods, (method, name) => {
    proto[name] = partial(method, obj)
  })
  return assign(create(proto), obj)
}
