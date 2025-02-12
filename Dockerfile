FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and lock files for both client and server
COPY client/package*.json client/
COPY server/package*.json server/

# Install dependencies for both client and server
RUN npm install

# Copy source code
COPY . .

# Build the client and server applications
RUN cd client && npm run build
RUN cd server && npm run build

# Production image - Using Nginx to serve both frontend and backend
FROM nginx:alpine

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built frontend files
COPY --from=builder /app/client/build /usr/share/nginx/html

# Copy built backend files (only necessary if you have static assets in the backend)
# COPY --from=builder /app/server/dist /app/server/dist  # Uncomment if needed

# Expose port 80 (or your desired port)
EXPOSE 80

# Nginx starts automatically
CMD ["nginx", "-g", "daemon off;"]
