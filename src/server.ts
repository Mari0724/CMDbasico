import express from 'express';
import bodyParser from 'body-parser';


const app = express();


// Middlewares
app.use(bodyParser.json());

// Headers personalizados
app.use((req, res, next) => {
    res.header('X-Custom-Header', 'CRM-Express');
    next();
});

// Ruta raíz
app.get('/', (_req, res) => {
    res.json({ message: '¡Bienvenido al CRM con Express y Prisma!' });
});

// Iniciar servidor
const PORT = 3000
app.listen(PORT, () => {
    // abre el localhost:3000
    console.log(`El server corre bien http://localhost:${PORT}`,);
});
