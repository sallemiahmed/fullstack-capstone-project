FROM node:18-alpine

WORKDIR /app

COPY giftlink-backend/package*.json ./giftlink-backend/
RUN cd giftlink-backend && npm install

COPY giftlink-backend/ ./giftlink-backend/

EXPOSE 3060

CMD ["node", "giftlink-backend/app.js"]
