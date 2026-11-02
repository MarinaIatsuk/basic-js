function renameFiles(names) {
  const used = new Set();
  const nextSuffix = new Map();
  return names.map((name) => {
    if (!used.has(name)) { used.add(name); return name; }
    let suffix = nextSuffix.get(name) || 1;
    let candidate = `${name}(${suffix})`;
    while (used.has(candidate)) { suffix += 1; candidate = `${name}(${suffix})`; }
    used.add(candidate);
    nextSuffix.set(name, suffix + 1);
    return candidate;
  });
}
module.exports = { renameFiles };
