```
/project
├── src
│   ├── application
│   │   ├── services          # Servicios de aplicación
│   │   └── ...
│   ├── domain
│   │   ├── entities          # Entidades del dominio
│   │   ├── repositories      # Interfaces de repositorios del dominio
│   │   └── services          # Servicios de dominio
│   └── infrastructure
│       ├── adapters          # Adaptadores externos (implementación de puertos)
│       │   ├── controllers   # Controladores para manejar solicitudes HTTP
│       │   ├── databases     # Adaptadores para interactuar con bases de datos
│       │   ├── external      # Adaptadores para interactuar con servicios externos
│       │   └── ...
│       ├── repositories      # Implementación de repositorios
│       └── ...
├── config                    # Configuración de la aplicación
├── migrations                # Migraciones de base de datos
├── seeds                     # Datos de inicio de base de datos
├── tests                     # Pruebas
├── .gitignore                # Archivo para especificar archivos/directorios a ignorar en Git
├── package.json              # Archivo de configuración del proyecto Node.js
└── README.md                 # Archivo README del proyecto
```
