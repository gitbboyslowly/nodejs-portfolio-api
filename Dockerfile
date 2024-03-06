# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set environment variables
ENV PORT=80
ENV NODE_ENV=production

# Expose port 8080 for the container
EXPOSE 80

# Start the Node.js application
CMD ["npm", "start"]