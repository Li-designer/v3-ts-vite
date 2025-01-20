module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
  "type-enum": [
    2,
    "always",
    [
      "feat",
      "fix",
      "perf",
      "style",
      "docs",
      "test",
      "refactor",
      "build",
      "ci",
      "chore",
      "revert",
      "wip",
      "workflow",
      "types",
      "release"
    ]
  ]
}};
