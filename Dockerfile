from node:11-alpine

# install global npm packages
RUN yarn global add @vue/cli

WORKDIR /app

# install dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn

# install app
COPY . .
RUN yarn build
