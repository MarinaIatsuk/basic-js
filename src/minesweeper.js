function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = rows ? matrix[0].length : 0;
  return matrix.map((row, r) => row.map((_, c) => {
    let count = 0;
    for (let dr = -1; dr <= 1; dr += 1) {
      for (let dc = -1; dc <= 1; dc += 1) {
        if (dr === 0 && dc === 0) continue;
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && matrix[nr][nc]) count += 1;
      }
    }
    return count;
  }));
}
module.exports = { minesweeper };
