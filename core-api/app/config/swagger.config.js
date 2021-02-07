module.exports = {
    swaggerOptions: {
        swaggerDefinition: {
            openapi: "3.0.1",
            info: {
                title: "Insurer consumable API",
                description: "This contains Api Information to be used by insurer.",
                constact: {
                    name: "contact us"
                },
                servers: ["http://localhost:3000"]
            },
            components: {
                securitySchemes: {
                    Bearer: {
                        type: 'http',
                        scheme: 'bearer',
                        bearerFormat: 'JWT',
                    }
                }
            },
            security: [
                { Bearer: [] }
            ]
        },
        apis: ["./app/routes/*.js"]
    }
};
