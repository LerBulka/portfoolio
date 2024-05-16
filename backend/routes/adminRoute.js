import express from 'express';
import fs from 'fs';

const adminrouter = express.Router();

adminrouter.get('/adminConfig', (req, res) => {
  try {
    // Читаем содержимое файла adminConfig.json
    const configData = fs.readFileSync('./adminConfig.json', 'utf8');
    // Отправляем содержимое файла как ответ на запрос
    res.json(JSON.parse(configData));
  } catch (error) {
    console.error('Error reading adminConfig:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default adminrouter;