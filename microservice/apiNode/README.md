# Microservicio con Node JS

## Getting Started

Instalar las dependencias:
```bash
npm install
```

Correr el proyecto (puerto 3001)
```bash
npm run dev
```

Correr el microservicio de MongoDB (puerto 3002)
```bash
npm run mongodb
```
> El proyecto usa una base de datos remota, 

Abrir [http://localhost:3001](http://localhost:3001) en el navegador o postman

Abrir [http://localhost:3002](http://localhost:3002) en el navegador o postman

> Nota: En la carpeta 'apiNode/postman/' hay un archivo txt que puede importar en postman y probar el funcionamiento. Primero intente ejecutar el método create para generar datos de prueba en la API

> Nota: En el archivo .env coloque las credenciales de su base de datos en MongoDB. Se recomienda usar Atlas como proveedor.