FROM node:lts-alpine

# Create app directory
RUN mkdir -p /usr/src/app

# Copy app source
COPY . /usr/src/app

# Install and build
WORKDIR /usr/src/app/client
RUN npm install && npm run build

WORKDIR /usr/src/app/server
RUN npm install && npm run build

# Env vars
ENV NODE_ENV production
ENV PORT 8080
ENV MONGODB_URI mongodb://localhost:27017/movie-watchlist
ENV JWT_SECRET myJwtS3cret

# Start the app
CMD ["npm", "run", "prod"]
