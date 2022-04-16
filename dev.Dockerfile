FROM node:16.14-alpine3.14

LABEL "maintainer.name"="Michał Starski"
LABEL "maintainer.email"="michal.starski<at>proton.me"

EXPOSE 3000

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile --ignore-engines

CMD ["yarn", "start:local"]
