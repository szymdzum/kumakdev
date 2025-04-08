# PNPM Guide for kumak.dev

This project uses [PNPM](https://pnpm.io/) as its package manager. PNPM is a fast, disk-efficient package manager that uses a content-addressable store to save disk space and improve installation speed.

## Key Benefits of PNPM

- **Disk efficiency**: Uses hard links and symlinks to save disk space
- **Performance**: Faster installations than npm or Yarn
- **Strict mode**: Prevents phantom dependencies
- **Compatibility**: Works with most npm packages
- **Monorepo support**: Built-in support for multi-package repositories

## Installation

If you don't have PNPM installed, install it globally:

```bash
# Using npm
npm install -g pnpm

# Using curl
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

## Basic Commands

### Project Setup

```bash
# Install all dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Managing Dependencies

```bash
# Add a dependency
pnpm add package-name

# Add a development dependency
pnpm add -D package-name

# Add a global dependency
pnpm add -g package-name

# Update dependencies
pnpm update

# Check outdated dependencies
pnpm outdated
```

### Running Scripts

```bash
# Run a script defined in package.json
pnpm run script-name

# Shorthand for common scripts
pnpm dev        # Same as pnpm run dev
pnpm build      # Same as pnpm run build
pnpm lint       # Same as pnpm run lint
pnpm format     # Same as pnpm run format
```

## Helper Scripts

This project includes several helper scripts to make development easier:

- `./dev.sh` - Automatically installs dependencies and starts the development server
- `./build.sh` - Cleans the build directory, runs linting, and builds the project
- `./update-deps.sh` - Checks for outdated dependencies and offers to update them

## PNPM Configuration

The project includes custom PNPM configuration in `.npmrc`:

- Uses hardlinks for workspace packages
- Configures dependency resolution for better compatibility
- Sets up optimal performance settings

## Troubleshooting Common Issues

### Resolving Peer Dependency Issues

If you encounter peer dependency warnings:

```bash
pnpm install --no-strict-peer-dependencies
```

### Clearing PNPM Cache

If you're having dependency issues, try clearing the cache:

```bash
pnpm store prune
```

### Fixing Broken Dependencies

If packages are broken or dependencies seem corrupted:

```bash
rm -rf node_modules
pnpm store prune
pnpm install
```

## Additional Resources

- [PNPM Documentation](https://pnpm.io/motivation)
- [PNPM CLI Commands](https://pnpm.io/cli/add)
- [PNPM vs npm/Yarn](https://pnpm.io/feature-comparison)
