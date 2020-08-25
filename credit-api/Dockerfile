FROM node:erbium-alpine3.9


# Create app directory
WORKDIR /usr/src/app

# Create group and user
RUN addgroup nodegroup && adduser node nodegroup

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
USER node:node
EXPOSE 5000
CMD [ "node", "app.js" ]