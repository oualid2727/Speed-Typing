// server.mjs (assuming you have "type": "module" in your package.json)
import express from 'express';
 import cors  from 'cors';
import { PrismaClient } from '@prisma/client';



const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

app.get('/api/data', async (req, res) => {
  
  try {
    const data = await prisma.score.findMany();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/data', async (req, res) => {

  console.log('Request Body:', req.body);
  try {
    const { score,difficulty} = req.body;

    const createdData = await prisma.score.create({
      data: {
        score,
        difficulty,
      },
    });
    res.status(201).json(createdData);

  } catch (error) {
    console.error('Error creating data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
