export function initialize({props}) {
  const myProps = function() {
    return props;
  };

  return({
    myProps,
  })
}
