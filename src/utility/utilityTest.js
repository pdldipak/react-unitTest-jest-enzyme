export function findByTestID(wrapper, testID) {
  return wrapper.findWhere((node) => node.prop('testID') === testID);
}
