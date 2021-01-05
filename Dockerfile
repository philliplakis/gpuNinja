FROM electronuserland/builder AS build-stage

WORKDIR /app
COPY . /app

RUN rm /app/public/electron.js
RUN mv /app/src/electron-starter.js /app/public/electron.js

RUN yarn
RUN yarn build
RUN yarn electron-pack

FROM scratch AS export-stage
COPY --from=build-stage /app/dist /

# DOCKER_BUILDKIT=1 docker build -o dist -t gpuninja .