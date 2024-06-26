FROM node:16
WORKDIR /app
COPY ./package.json ./package.json
COPY ./public ./public
COPY ./src ./src
RUN npm install
EXPOSE 3000

CMD ["npm","run", "dev" ]