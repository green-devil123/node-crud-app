# Use node official image
FROM node:18-alpine

# App directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Expose your server port
EXPOSE 3000

# Run app
CMD ["npm","start"]
