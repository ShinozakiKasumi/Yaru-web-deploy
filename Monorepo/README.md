# Yaru Monorepo (Submodule Layout)

This repository is managed as a superproject with Git submodules.

## Clone

```bash
git clone --recurse-submodules https://github.com/ProjectYaru/Yaru.git
```

## Initialize Existing Clone

```bash
git submodule sync --recursive
git submodule update --init --recursive
```

## Update to Latest Main of All Submodules

```bash
git submodule update --remote --merge --recursive
```

## Important Rules

- Commit code changes inside each submodule first.
- Then commit the updated submodule pointers in the superproject.
- Keep `.gitmodules` aligned with `Monorepo/scripts/submodule_visibility_policy.json`.
- Run the guard locally:

```bash
cd Monorepo
pnpm run submodules:guard
```
