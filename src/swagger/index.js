import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        version: "1.0.0",
        title: "mNews API",
        description: "Documentation nNews API."
    },
    host: "localhost:8080",
    basePath: "/",
    schemes: ['http', 'https'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ],
}

const outputFile = './swagger.json'
const endpointsFiles = ['../routes/userRoutes.js', '../routes/commentsRoutes.js', '../routes/articleRoutes.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('../../server')
})