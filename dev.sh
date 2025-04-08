#!/bin/bash

# Colors for better output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Setting up kumak.dev with PNPM ===${NC}"

# Check if PNPM is installed
if ! command -v pnpm &> /dev/null; then
    echo -e "${YELLOW}PNPM is not installed. Installing PNPM...${NC}"
    npm install -g pnpm
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Installing dependencies...${NC}"
    pnpm install
fi

# Run development server
echo -e "${GREEN}Starting development server...${NC}"
pnpm dev
