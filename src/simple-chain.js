const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: '',
  currentPosition: 0,
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if (arguments.length == 0) {
      this.links.push({position: ++ this.currentPosition , value: `~( ( ) )~`});
      return this;
    }
    this.links.push({position: ++ this.currentPosition , value: `~( ${value} )~`});
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      Object.defineProperties(this, {
        chain: {value: ''},
        currentPosition: {value: 0},
        links: {value: []},
      });
      throw new Error("You can't remove incorrect link!");
    }
    if ((position <= 0) || (position > this.links.length-1)) {
      Object.defineProperties(this, {
        chain: {value: ''},
        currentPosition: {value: 0},
        links: {value: []},
      });
      throw new Error("You can't remove incorrect link!");
    }
    try {
      this.links.splice(position-1, 1);
      return this;
    }
    catch (e) {
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let finalReduce = this.links.reduce((chain, current) => {
      return chain += current.value;
    }, "");
    this.chain += finalReduce.slice(1,finalReduce.length-1);
    let result = this.chain;
    Object.defineProperties(this, {
      chain: {value: ''},
      currentPosition: {value: 0},
      links: {value: []},
    });
    return result;
  }
};


module.exports = {
  chainMaker
};
