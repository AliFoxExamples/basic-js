const CustomError = require("../extensions/custom-error");

const chainMaker = {

  getLength() {
    return this.chain.length;
  },

  addLink(value) {

    if (!arguments.length) {
      this.chain.push('');
      return this;
    }

    this.chain.push(value);
    return this;
  },

  removeLink(position) {

    if (typeof position == 'number' && !(position%1)) {
      
      this.chain = this.chain.filter((e,i,arr)=>i+1!==position)
      return this;
    }

    this.chain = [];
    throw new Error();
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let str = '';
    for (let i = 0; i < this.chain.length; i++) {
      str += `( ${this.chain[i]} )~~`;
    }
    this.chain = [];
    return str.slice(0,str.length-2);
  },
  chain: [],
};

module.exports = chainMaker;
