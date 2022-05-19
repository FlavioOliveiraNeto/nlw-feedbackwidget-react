import cors from 'cors';
import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "19c2602aef74f8",
    pass: "1a8140206b79b8"
  }
});

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server is running!');
}); 