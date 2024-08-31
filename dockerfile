FROM node:20

WORKDIR /usr/src/solarsystem/


COPY package*.json ./
COPY .env ./
COPY tsconfig.json ./
COPY dist/ ./
RUN npm install
EXPOSE 4900


CMD ["node", "./main.js"]
