#!/bin/bash

# Colors for better output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Building kumak.dev with PNPM ===${NC}"

# Check if PNPM is installed
if ! command -v pnpm &> /dev/null; then
    echo -e "${YELLOW}PNPM is not installed. Installing PNPM...${NC}"
    npm install -g pnpm
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Installing dependencies...${NC}"
    pnpm install
fi

# Clean previous build
echo -e "${BLUE}Cleaning previous build...${NC}"
rm -rf dist

# Run linting
echo -e "${BLUE}Running linting...${NC}"
pnpm lint

# Build the project
echo -e "${GREEN}Building project...${NC}"
TIMING=1 pnpm build

# Report
echo -e "${GREEN}Build complete! Output is in the dist directory.${NC}"
echo -e "${YELLOW}Run 'pnpm preview' to preview the build.${NC}"
