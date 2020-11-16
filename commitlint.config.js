module.exports = {
  rules: {
    'type-enum': [2, 'always', ['feature', 'fix', 'docs', 'refactor', 'test', 'chore']],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lowerCase'],
    'scope-enum': [2, 'always', ['lint', 'package', 'readme', 'config', 'folder:*']],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lowerCase'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lowerCase'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 50],
    'subject-min-length': [2, 'always', 10]
  }
};
