class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return 1;
    return 1 + Math.max(0, ...arr.filter(Array.isArray).map((item) => this.calculateDepth(item)));
  }
}
module.exports = { depthCalculator: new DepthCalculator() };
