function initialize({props}) {
  const ROVER_ROTATIONS = {
    'NL': 'W',
    'WL': 'S',
    'SL': 'E',
    'EL': 'N',
    'NR': 'E',
    'ER': 'S',
    'SR': 'W',
    'WR': 'N'
  };

  const myProps = function() {
    return props;
  };

  const move = function() {
    switch(props.orientation) {
      case 'N':
        props.y += 1;
        break;
      case 'S':
        props.y -= 1;
        break;
      case 'W':
        props.x -= 1;
        break;
      case 'E':
        props.x += 1;
        break;
    }
  }

  const rotate = function({rotation}) {
    props.orientation = ROVER_ROTATIONS[props.orientation + rotation];
  }

  const command = function({commands}) {
    // command is a move
    for (var i = 0; i < commands.length; i++) {
      if (commands[i] == 'L' || commands[i] == 'R') {
        rotate({ rotation: commands[i] });
      } else {
        move();
      }
    }
  }

  return({
    myProps,
    move,
    rotate,
    command
  })
};

export default {
  initialize,
}
