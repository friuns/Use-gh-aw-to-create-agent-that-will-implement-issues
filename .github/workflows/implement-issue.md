---
on:
  issue_comment:
    types: [created]

permissions:
  contents: write
  pull-requests: write
  issues: read

safe-outputs:
  create-pull-request:
---

# Implement Issue

This workflow is triggered when a comment containing `/gh aw` is created on an issue.

It will:
1. Create a new branch `feature/issue-{{ issue.number }}`.
2. Create a new file `issue-{{ issue.number }}.md` with the issue title and body.
3. Commit the new file.
4. Create a pull request to merge the new branch into `main`.
