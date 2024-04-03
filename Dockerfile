# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY server/package*.json ./server/
COPY client/package*.json ./client/

COPY client ./client
COPY server ./server

# Install the dependencies for the server
RUN npm install --prefix server

# Install the dependencies for the client
RUN npm install --prefix client

# Expose the port for the server
EXPOSE 5000

# Start the server
CMD ["npm", "start", "--prefix", "server"]