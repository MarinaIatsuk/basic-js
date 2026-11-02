const links = [];
const chainMaker = {
  getLength() { return links.length; },
  addLink(value) {
    links.push(arguments.length === 0 ? '' : String(value));
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > links.length) {
      links.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    links.splice(position - 1, 1);
    return this;
  },
  reverseChain() { links.reverse(); return this; },
  finishChain() {
    const result = links.map((value) => `( ${value} )`).join('~~');
    links.length = 0;
    return result;
  },
};
module.exports = { chainMaker };
