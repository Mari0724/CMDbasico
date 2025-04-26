import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import prisma from './prismaClient'; // cliente separado
import { Stage } from '@prisma/client';
import { RegisterRoutes } from "../src/routes/routes"; // este se genera automáticamente
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../docs/swagger.json";

const app = express();
app.use(bodyParser.json());

RegisterRoutes(app);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('X-Custom-Header', 'CRM-Express');
    next();
});

// Ruta raíz
app.get('/', (req: Request, res: Response) => {
    res.json({ message: '¡Bienvenido al CRM con Express y Prisma!' });
});

//Funcionalidad del ORM
// Consultar todos los contactos
app.get('/contactos', async (req: Request, res: Response) => {
    try {
        const contactos = await prisma.contact.findMany();
        res.json(contactos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener contactos' });
    }
});

// Buscar un contacto por ID.
app.get('/contactos/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const contacto = await prisma.contact.findUnique({ where: { id } });
        if (contacto) res.json(contacto);
        else res.status(404).json({ error: 'Contacto no encontrado.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el contacto.' });
    }
});

// Crear una nueva oportunidad (en la parte final esta una funcion de prueva, para que pueda verificar su funcionalidad)
app.post('/oportunidades', async (req: Request, res: Response) => {
    const { name, description, estimatedValue, currency, stage, expectedCloseDate, companyId } = req.body;
    try {
        const nuevaOportunidad = await prisma.opportunity.create({
            data: {
                name,
                description,
                estimatedValue,
                currency,
                stage,
                expectedCloseDate: new Date(expectedCloseDate),
                company: { connect: { id: companyId } },
            },
        });
        res.status(201).json(nuevaOportunidad);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la oportunidad.' });
    }
});

// Listar oportunidades por etapa (stage)
app.get('/listopor', async (req: Request, res: Response) => {
    const { stage } = req.query;
    try {
        const oportunidades = await prisma.opportunity.findMany({
            where: { stage: stage as Stage },
        });
        res.json(oportunidades);
    } catch (error) {
        res.status(500).json({ error: 'No se pudieron obtener las oportunidades.' });
    }
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`El server corre bien en http://localhost:${PORT}`);
    //crearOportunidadEjemplo();
});


/* 
FUNCIÓN DE PRUEBA - Instrucciones para ejecutar correctamente:
(primero quitar el formato comentario de la funcion y arriba al "crearOportunidadEjemplo();")
1️ Asegúrate de que el servidor NO esté corriendo (si lo ejecutaste con `npm run dev`, deténlo con Ctrl + C).
2️ Guarda este archivo si hiciste cambios (Ctrl + S).
3️ Ejecuta el archivo directamente con el siguiente comando en la terminal:
    npx ts-node src/server.ts

Esto insertará datos de prueba en la base de datos (puedes comprobarlo en pgAdmin4).
Si deseas cambiar los datos, modifica las variables, guarda, y repite los pasos.
*/

/*async function crearOportunidadEjemplo() {
    try {
        const oportunidad = await prisma.opportunity.create({
            data: {
                name: "Hola Yusef",
                description: "Funcion de prueva ",
                estimatedValue: 93945.67,
                currency: "COP",
                stage: "won",
                expectedCloseDate: new Date("2025-04-24"),
                company: {
                    connect: { id: 3 }, 
                },
            },
        });
        console.log(" Oportunidad creada:", oportunidad);
    } catch (error) {
        console.error(" Error al crear la oportunidad:", error);
    }
}*/