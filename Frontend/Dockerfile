FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app
RUN npm install -g serve
# Copy our node module specification
COPY package* ./


# install node modules and build assets
RUN npm install --legacy-peer-deps
# Copy all files from current directory to working dir in image
# Except the one defined in '.dockerignore'
COPY . .

# Create production build of React App
RUN npm run build
RUN mkdir -p ./build/por_portal
RUN mv ./build/static ./build/por_portal/static
RUN mv ./build/*.json ./build/por_portal/ \
    && mv ./build/*.ico ./build/por_portal/ \
    && mv ./build/*.png ./build/por_portal/ \
    && mv ./build/*.svg ./build/por_portal/
