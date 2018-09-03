FROM keymetrics/pm2:latest-alpine

COPY src .
COPY pm2.json .
RUN rm -rf node_modules

ENV NPM_CONFIG_LOGLEVEL=warn
ENV NODE_ENV=production
RUN npm install
RUN npm run build-prod

EXPOSE 3000

CMD ["pm2-runtime", "start", "pm2.json"]