# Update Terraform Cloud Variable

[![GitHub release](https://img.shields.io/github/v/release/Stone-IT-Cloud/devops-tf-cloud-update-var?style=flat-square)](https://github.com/Stone-IT-Cloud/devops-tf-cloud-update/releases)


A GitHub Action to update a variable in [Terraform Cloud](https://www.terraform.io/docs/cloud/api/variables.html) workspaces via the Terraform Cloud API.

---

## Features
- Composite action: no Docker or custom runner required
- Uses Node.js 22 (via [actions/setup-node@v4](https://github.com/actions/setup-node))
- Installs dependencies with `npm ci` for reproducible builds
- Outputs the updated variable ID

## Inputs

| Name              | Required | Description                                                      |
|-------------------|----------|------------------------------------------------------------------|
| `workSpaceName`   | Yes      | The name of the Terraform Cloud workspace                        |
| `organizationName`| Yes      | The Terraform Cloud organization name                            |
| `terraformToken`  | Yes      | Terraform Cloud API token (use a secret)                         |
| `terraformHost`   | Yes      | Terraform Cloud host (usually `app.terraform.io`)                |
| `variableName`    | Yes      | The variable key/name as shown in Terraform Cloud                |
| `variableValue`   | Yes      | The value to update the variable with                            |
| `variableHCL`     | No       | Set to `true` if the variable is HCL, otherwise `false` (default)|

## Outputs

| Name         | Description                |
|--------------|---------------------------|
| `variableId` | The updated variable ID    |

## Example Usage

```yaml
- uses: Stone-IT-Cloud/devops-tf-cloud-update@v1.1.1
  with:
    workSpaceName: MyTestWorkspace
    organizationName: ${{ secrets.ORG_NAME }}
    terraformToken: ${{ secrets.TERRAFORM_TOKEN }}
    terraformHost: 'app.terraform.io'
    variableName: 'container_tag'
    variableValue: 'v1.1.1'
    # variableHCL: 'false' # Optional
```

## How it Works

This action is a [composite action](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action) that:
1. Sets up Node.js 22.x using `actions/setup-node@v4`
2. Installs dependencies with `npm ci`
3. Runs the main script (`index.js`) to update the variable

## Local Development & Testing

To test or develop this action locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm ci
   ```
3. Lint and format code:
   ```bash
   npm run lint
   npm run format:check
   ```
4. You can use [act](https://github.com/nektos/act) to run workflows locally:
   ```bash
   act workflow_dispatch -W .github/workflows/test-action.yml --secret-file .github/.secrets
   ```

## Contributing

- Please lint and format your code before submitting PRs.
- Follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.
- See `.pre-commit-config.yaml` for pre-commit hooks.

## License

MIT
