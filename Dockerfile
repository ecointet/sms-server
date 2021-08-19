FROM node:latest

WORKDIR /usr/app

# Install app dependencies
RUN npm i -g @nestjs/cli
RUN nest new sms --skip-install
RUN cd sms
RUN npm install plivo
RUN npm i

#ARGS
ARG AUTH_ID
ARG AUTH_TOKEN
ARG SOURCE

#ENV
ENV AUTH_ID $AUTH_ID
ENV AUTH_TOKEN $AUTH_TOKEN
ENV SOURCE $SOURCE

# COPY MAIN FILE
COPY ./numbers.ts ./sms/src/app.controller.ts

WORKDIR /usr/app/sms
RUN npm install express --force

EXPOSE 3000
CMD ["npm", "run", "start"]