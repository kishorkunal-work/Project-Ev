module.exports = {
    swaggerOptions: {
        swaggerDefinition: {
            info: {
                title: "Insurer consumable API",
                description: "This contains Api Information to be used by insurer.",
                constact: {
                    name: "contact us"
                },
                servers: ["http://localhost:3000"]
            }
        },
        apis: ["./app/routes/*.js"]
    },
    authAction: {
        JWT: {
            name: "JWT",
            schema: {
                type: "apiKey",
                in: "header",
                name: "x-access-token",
                description: "Please provide token"
            },
            value: "<JWT>"
        }
    }
};
