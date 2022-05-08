FROM node:alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
ENV NODE_ENV=development
EXPOSE 8080
CMD ["node", "index.js"]