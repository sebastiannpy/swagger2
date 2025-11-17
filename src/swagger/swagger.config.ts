const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "API Personas, Proyectos y Tareas",
    version: "1.0.0",
    description: "Documentación generada con Swagger para el proyecto del profesor",
  },

  servers: [
    { url: "http://localhost:3000" }
  ],

  paths: {
    "/personas": {
      get: {
        summary: "Listar todas las personas",
        tags: ["Personas"],
        responses: { 200: { description: "OK" } }
      },
      post: {
        summary: "Crear persona",
        tags: ["Personas"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreatePersonaDto"
              }
            }
          }
        },
        responses: { 201: { description: "Creado" } }
      }
    },

    "/personas/{id}": {
      get: {
        summary: "Obtener persona por ID",
        tags: ["Personas"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: { 200: { description: "OK" } }
      },

      put: {
        summary: "Actualizar persona",
        tags: ["Personas"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        requestBody: {
          required: false,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/UpdatePersonaDto" }
            }
          }
        },
        responses: { 200: { description: "Actualizado" } }
      },

      delete: {
        summary: "Eliminar persona",
        tags: ["Personas"],
        parameters: [
          { name: "id", in: "path", schema: { type: "integer" }, required: true }
        ],
        responses: { 200: { description: "Eliminado" } }
      }
    },

    
    "/proyectos": {
      get: {
        summary: "Listar proyectos",
        tags: ["Proyectos"],
        responses: { 200: { description: "OK" } }
      },
      post: {
        summary: "Crear proyecto",
        tags: ["Proyectos"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CreateProyectoDto" }
            }
          }
        },
        responses: { 201: { description: "Creado" } }
      }
    },

    "/proyectos/{id}": {
      get: {
        summary: "Obtener proyecto",
        tags: ["Proyectos"],
        parameters: [
          { name: "id", in: "path", schema: { type: "integer" }, required: true }
        ],
        responses: { 200: { description: "OK" } }
      },
      put: {
        summary: "Actualizar proyecto",
        tags: ["Proyectos"],
        parameters: [
          { name: "id", in: "path", schema: { type: "integer" }, required: true }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/UpdateProyectoDto" }
            }
          }
        }
      },
      delete: {
        summary: "Eliminar proyecto",
        tags: ["Proyectos"],
        parameters: [
          { name: "id", in: "path", schema: { type: "integer" }, required: true }
        ]
      }
    },

    
    "/tareas": {
      get: {
        summary: "Listar tareas",
        tags: ["Tareas"],
        responses: { 200: { description: "OK" } }
      },
      post: {
        summary: "Crear tarea",
        tags: ["Tareas"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CreateTareaDto" }
            }
          }
        }
      }
    },

    "/tareas/{id}": {
      get: {
        summary: "Obtener tarea",
        tags: ["Tareas"],
        parameters: [
          { name: "id", in: "path", schema: { type: "integer" }, required: true }
        ]
      },
      put: {
        summary: "Actualizar tarea",
        tags: ["Tareas"],
        parameters: [
          { name: "id", in: "path", schema: { type: "integer" }, required: true }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/UpdateTareaDto" }
            }
          }
        }
      },
      delete: {
        summary: "Eliminar tarea",
        tags: ["Tareas"],
        parameters: [
          { name: "id", in: "path", schema: { type: "integer" }, required: true }
        ]
      }
    }
  },

  components: {
    schemas: {
      Persona: {
        type: "object",
        properties: {
          id: { type: "integer" },
          nombre: { type: "string" },
          edad: { type: "integer" },
          email: { type: "string" }
        }
      },
      CreatePersonaDto: {
        type: "object",
        required: ["nombre"],
        properties: {
          nombre: { type: "string" },
          edad: { type: "integer" },
          email: { type: "string" }
        }
      },
      UpdatePersonaDto: { $ref: "#/components/schemas/CreatePersonaDto" },

      Proyecto: {
        type: "object",
        properties: {
          id: { type: "integer" },
          nombre: { type: "string" },
          descripcion: { type: "string" }
        }
      },
      CreateProyectoDto: {
        type: "object",
        required: ["nombre"],
        properties: {
          nombre: { type: "string" },
          descripcion: { type: "string" }
        }
      },
      UpdateProyectoDto: { $ref: "#/components/schemas/CreateProyectoDto" },

      Tarea: {
        type: "object",
        properties: {
          id: { type: "integer" },
          proyectoId: { type: "integer" },
          titulo: { type: "string" },
          descripcion: { type: "string" },
          estado: { type: "string", enum: ["todo", "doing", "done"] }
        }
      },
      CreateTareaDto: {
        type: "object",
        required: ["titulo", "proyectoId"],
        properties: {
          proyectoId: { type: "integer" },
          titulo: { type: "string" },
          descripcion: { type: "string" }
        }
      },
      UpdateTareaDto: { $ref: "#/components/schemas/CreateTareaDto" }
    }
  }
};

export default swaggerDocument;
