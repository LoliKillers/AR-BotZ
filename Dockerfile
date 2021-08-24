FROM buildkite/puppeteer:latest

RUN apt update
RUN apt install ffmpeg -y
RUN apt install tesseract-ocr -y
RUN apt install nmap -y
RUN apt install figlet -y

WORKDIR /app
COPY . /app
RUN npm install
CMD ["npm", "start"]
EXPOSE 8080
