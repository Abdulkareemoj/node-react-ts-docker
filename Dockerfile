FROM node:12-alpine

ADD package.json /tmp/package.json

RUN rm -rf dist

RUN /tmp && npm install -q

RUN npm dedupe

ADD ./src

RUN rm -rf /src/node_modules && cp /tmp/node_modules /secrets

WORKDIR /src

RUN npm run-script build

RUN npm install pm2 -g

EXPOSE 3000

CMD ["pm2-runtime", "process.json"]
