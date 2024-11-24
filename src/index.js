import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { customerServiceAgent } from './agents/customerService.js';
import { salesAgent } from './agents/sales.js';
import { marketingAgent } from './agents/marketing.js';

config();
const app = express();

app.use(cors());
app.use(express.json());

// Customer Service Agent endpoint
app.post('/api/customer-service', async (req, res) => {
  try {
    const response = await customerServiceAgent(req.body.message);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Sales Agent endpoint
app.post('/api/sales', async (req, res) => {
  try {
    const response = await salesAgent(req.body.message);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Marketing Agent endpoint
app.post('/api/marketing', async (req, res) => {
  try {
    const response = await marketingAgent(req.body.message);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`AI Business Agents running on port ${PORT}`);
});