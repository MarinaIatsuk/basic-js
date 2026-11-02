const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity.trim() === '') return false;
  const activity = Number(sampleActivity);
  if (!Number.isFinite(activity) || activity <= 0 || activity > MODERN_ACTIVITY) return false;
  return Math.ceil((HALF_LIFE_PERIOD / 0.693) * Math.log(MODERN_ACTIVITY / activity));
}
module.exports = { dateSample };
