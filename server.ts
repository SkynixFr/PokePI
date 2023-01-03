//Setup du serveur Express
const express = require("express")
const cors = require("cors")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")

const app = express()
const port = process.env.PORT || 8080

//Setup CORS
const corsOptions = {
   origin: "http://localhost:8081"
}

//Setup Swagger
const swaggerOptions = {
   swaggerDefinition: {
      infos: {
         title: "PokePI",
         version: "1.0.0"
      },
   },
   apis: ["server.ts"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

//Analyse du cors, du type de contenu
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Route par défaut
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.get("/", (req, res) => {
   res.json({
      message: "Hello !"
   })
})
app.listen(port, () => {
   console.log(`Le serveur tourne sur le port ${port}`)
})