FROM node:latest

WORKDIR /usr/app

# Install app dependencies
RUN npm i -g @nestjs/cli
RUN nest new sms --skip-install
RUN cd sms
RUN npm install plivo --force
RUN npm i

#ARGS
ARG AUTH_ID
ARG AUTH_TOKEN
ARG SOURCE

# COPY MAIN FILE
COPY ./numbers.ts ./sms/src/app.controller.ts

WORKDIR /usr/app/sms
RUN npm install express

EXPOSE 3000
CMD ["npm", "run", "start"]