FROM keymetrics/pm2:latest-alpine

COPY src .
COPY pm2.json .
RUN rm -rf node_modules

ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install
RUN npm run build-prod

RUN ls -al -R

EXPOSE 3000

CMD ["pm2-runtime", "start", "pm2.json", "--web"]