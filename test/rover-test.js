import chai, { expect } from "chai";
import set from "mocha-let";
import Rover from "../app/rover";

describe("Rover", function(){
  set("props", {x: 1, y: 2, orientation: 'N'});
  set("rover", function(){
    return Rover.initialize({props: this.props});
  });

  describe('#move', function() {
    it('should move the rover in the direction it is heading', function() {
      this.rover.move();

      expect(this.rover.myProps().x).to.equal(1);
      expect(this.rover.myProps().y).to.equal(3);
      expect(this.rover.myProps().orientation).to.equal('N');
    });
  });

  describe('#rotate', function() {
    describe('when the rotation is to the left', function() {
      it('should rotate the rover 90 degrees left', function() {
        this.rover.rotate({ rotation: 'L' });
        expect(this.rover.myProps().orientation).to.equal('W');

        this.rover.rotate({ rotation: 'L' });
        expect(this.rover.myProps().orientation).to.equal('S');

        this.rover.rotate({ rotation: 'L' });
        expect(this.rover.myProps().orientation).to.equal('E');

        this.rover.rotate({ rotation: 'L' });
        expect(this.rover.myProps().orientation).to.equal('N');
      });
    });

    describe('when the rotation is to the right', function() {
      it('should rotate the rover 90 degrees right', function() {
        this.rover.rotate({ rotation: 'R' });
        expect(this.rover.myProps().orientation).to.equal('E');

        this.rover.rotate({ rotation: 'R' });
        expect(this.rover.myProps().orientation).to.equal('S');

        this.rover.rotate({ rotation: 'R' });
        expect(this.rover.myProps().orientation).to.equal('W');

        this.rover.rotate({ rotation: 'R' });
        expect(this.rover.myProps().orientation).to.equal('N');
      });
    });
  });

  describe('#command', function() {
    it('should move the rover according to the specified command', function() {
      this.rover.command({ commands: 'LMLMLMLMM' });

      expect(this.rover.myProps().x).to.equal(1);
      expect(this.rover.myProps().y).to.equal(4);
      expect(this.rover.myProps().orientation).to.equal('N');
    });
  });
});
