function getDNSStats(domains) {
  const stats = {};
  for (const domain of domains) {
    const labels = domain.split('.').reverse();
    for (let i = 0; i < labels.length; i += 1) {
      const suffix = `.${labels.slice(0, i + 1).join('.')}`;
      stats[suffix] = (stats[suffix] || 0) + 1;
    }
  }
  return stats;
}
module.exports = { getDNSStats };
