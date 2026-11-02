function getMatrixElementsSum(matrix) {
  if (!matrix.length) return 0;
  const haunted = Array(matrix[0].length).fill(false);
  let sum = 0;
  for (const row of matrix) {
    for (let col = 0; col < row.length; col += 1) {
      if (row[col] === 0) haunted[col] = true;
      else if (!haunted[col]) sum += row[col];
    }
  }
  return sum;
}
module.exports = { getMatrixElementsSum };
