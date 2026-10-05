---
title: "Ephemeral PR Preview Environments on GKE (Coming Soon)"
description: "Every pull request gets its own isolated namespace on GKE, redeployed on each push and torn down when the PR closes. CI authenticates with Workload Identity Federation, so there are no service account keys in GitHub."
url: "https://github.com/Amiynarh/ephemeralpreviewenvironment"
repo: "amiynarh/ephemeralpreviewenvironment"
tech: ["GKE", "GitHub Actions", "Terraform", "Workload Identity Federation", "Artifact Registry"]
banner: "@images/projects/ephemeral-preview.svg"
featured: true
order: 1
---

Opening a pull request triggers a GitHub Actions workflow that builds a container image tagged for that PR and pushes it to Google Artifact Registry. A dedicated namespace (`pr-42`, `pr-43`, …) is created in a GKE cluster and the app deploys into it, isolated from every other PR. New commits redeploy it; closing or merging the PR deletes the namespace and everything inside it.

The infrastructure underneath is built with Terraform, and CI authenticates to Google Cloud with Workload Identity Federation instead of a stored service account JSON key.
