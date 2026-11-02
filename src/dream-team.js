function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members
    .filter((member) => typeof member === 'string')
    .map((member) => member.trim()[0] || '')
    .join('')
    .toUpperCase()
    .split('')
    .sort()
    .join('');
}
module.exports = { createDreamTeam };
