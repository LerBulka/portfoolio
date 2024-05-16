import jwt from 'jsonwebtoken';
import fs from 'fs';

// Функция для аутентификации администратора
export function authenticateAdmin(username, password) {
    try {
        // Чтение данных администратора из файла adminConfig.json
        const adminConfigData = fs.readFileSync('adminConfig.json', 'utf8');
        const adminConfig = JSON.parse(adminConfigData);

        // Проверка введенных учетных данных администратора
        if (username === adminConfig.admin.username && password === adminConfig.admin.password) {
            // Создание JWT токена
            const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' }); 

            // Возвращение токена
            return token;
        } else {
            throw new Error('Invalid username or password');
        }
    } catch (error) {
        throw new Error('Authentication failed');
    }
}