# build environment
FROM node:16-alpine as builder

ARG REACT_APP_GTM_ID
ENV REACT_APP_GTM_ID=$REACT_APP_GTM_ID

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

# production environment
FROM nginx:1.19.0
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/build .
CMD ["nginx", "-g", "daemon off;"]