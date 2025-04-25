# CRM Básico – Backend

Este proyecto es un backend simple para un sistema CRM, desarrollado por **Maria Ximena Marin Delgado y Emilia Gallo Alzate**, estudiante de Análisis y Desarrollo de Software. Forma parte de un taller académico enfocado en el uso de Express, TypeScript, Prisma y PostgreSQL.

---

## 📁 Estructura General del Proyecto

```
📦 raiz/
├── 📁 docs/              # Documentación del proyecto (Swagger UI)
│   ├── 📄 index.html     # Interfaz Swagger UI
│   └── 📄 swagger.json   # Especificación OpenAPI generada
├── 📁 prisma/            # Esquema de base de datos Prisma y migraciones
│   ├── 📁 migrations/    # Historial de migraciones Prisma
│   └── 📄 schema.prisma  # Definición del modelo de datos
├── 📁 src/
│   ├── 📁 controllers/   # Lógica de controladores
│   ├── 📁 routes/        # Rutas de la API
│   ├── 📁 models/        # Validaciones y tipos (Zod, DTOs)
│   ├── 📄 prismaClient.ts  # Instancia compartida de Prisma Client
│   └── 📄 server.ts      # Configuración principal del servidor
├── 📄 .env               # Variables de entorno 
├── 📄 .gitignore         # Ignora node_modules, .env, etc.
├── 📄 package.json       # Dependencias y scripts
├── 📄 package-lock.json  # Versión exacta de dependencias
├── 📄 README.md          # Documentación principal
├── 📄 tsconfig.json      # Configuración de TypeScript
└── 📄 tsoa.json          # Configuración de TSOA

```

---

## 🚀 Instrucciones de Instalación y Uso

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/Mari0724/CMDbasico.git
   cd CMDbasico
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar el archivo `.env`**

   El archivo `.env` debe incluir la conexión a tu base de datos PostgreSQL. Si tu configuración es diferente, actualiza los valores:

   ```env
   # Ejemplo: postgresql://usuario:contraseña@localhost:5432/nombrebd
   DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombrebd"
   ```

   - `usuario`: tu usuario de PostgreSQL
   - `contraseña`: tu contraseña de PostgreSQL
   - `nombrebd`: nombre de la base de datos (debe existir)

4. **Ejecutar migraciones y generar cliente Prisma**

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. **Generar rutas y documentación con TSOA**

   Para generar las rutas y la documentación en formato Swagger, ejecuta los siguientes comandos:

   ```bash
   npx tsoa routes
   npx tsoa spec
   ```

   npx tsoa routes: Genera las rutas para la API.
   npx tsoa spec: Genera la especificación de la API en formato Swagger.


6. **Correr el servidor en modo desarrollo**

   ```bash
   npm run dev
   ```

   Esto utiliza `nodemon` para reiniciar automáticamente al guardar cambios.

7. **Probar endpoints**

   - GET `/contactos` → Lista todos los contactos
   - GET `/contactos/:id` → Obtiene un contacto por ID
   - POST `/oportunidades` → Crea una nueva oportunidad
   - GET `/oportunidades?stage=<etapa>` → Filtra oportunidades por etapa

---

## 🛠️ Tecnologías usadas

- **Node.js** + **Express**
- **TypeScript**
- **Prisma ORM** + **PostgreSQL**
- **Zod** para validaciones
- **TSOA** + **Swagger** para documentación API 
- **Nodemon** para desarrollo


## 👩‍💻 Autoras

**Maria Ximena Marin Delgado y Emilia Gallo Alzate**  
Estudiantes de ADSO (Análisis y Desarrollo de Software)  
Proyecto académico para práctica backend CRM

---

## 📄 Documentación

Disponible en GitHub Pages:  
🔗 https://mari0724.github.io/CMDbasico/

