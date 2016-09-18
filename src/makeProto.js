import assign from 'lodash/assign'
import each from 'lodash/each'
import partial from 'lodash/partial'
import create from 'lodash/create'

export default function makeProto(obj, methods) {
  const proto = {}
  each(methods, (method, name) => {
    proto[name] = partial(method, obj)
  })
  return assign(create(proto), obj)
}
