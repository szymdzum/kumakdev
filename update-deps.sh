#!/bin/bash

# Colors for better output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Updating dependencies with PNPM ===${NC}"

# Check if PNPM is installed
if ! command -v pnpm &> /dev/null; then
    echo -e "${YELLOW}PNPM is not installed. Installing PNPM...${NC}"
    npm install -g pnpm
fi

# Check for outdated packages
echo -e "${BLUE}Checking for outdated packages...${NC}"
pnpm outdated

echo -e "${YELLOW}Do you want to update all dependencies to their latest versions? (y/n)${NC}"
read -r response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    # Update all dependencies
    echo -e "${BLUE}Updating all dependencies...${NC}"
    pnpm update --latest

    # Install any new peer dependencies
    echo -e "${BLUE}Installing peer dependencies...${NC}"
    pnpm install

    echo -e "${GREEN}All dependencies updated successfully!${NC}"
else
    echo -e "${YELLOW}Update canceled. You can update specific packages with:${NC}"
    echo -e "${BLUE}pnpm update package-name${NC}"
fi
