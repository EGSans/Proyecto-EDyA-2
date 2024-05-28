// server.js
const http = require('http');
const fs = require('fs'); // Para leer archivos locales

const PORT = 8080; // Puerto en el que se ejecutará el servidor

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Si la URL es la raíz, sirve el archivo HTML
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error interno del servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // Si la URL no es la raíz, devuelve un error 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
});

// Iniciar el servidor en el puerto especificado
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
