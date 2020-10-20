FROM node:stretch-slim
LABEL author="Umar abubakar"
WORKDIR /app
COPY package.json /app
COPY src /app
RUN ["npm", "install"]
EXPOSE 3000
CMD ["npm", "start"]