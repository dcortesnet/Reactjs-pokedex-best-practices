FROM mhart/alpine-node:14 as node
RUN apk add --no-cache yarn
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx:1.19.5-alpine
COPY --from=node /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/