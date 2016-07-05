function initialize({props}) {
  const myProps = function() {
    return props;
  };

  return({
    myProps,
  })
};

export default {
  initialize,
}
