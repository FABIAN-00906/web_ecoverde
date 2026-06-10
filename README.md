# EcoVerde Antioquia S.A.S.

## Implementación de un Entorno Dockerizado para el Despliegue Inicial de una Solución Web Institucional

### Información General

**Programa:** Análisis y Desarrollo de Software (ADSO)

**Componente:** DevOps y Contenedores

**Actividad:** Producto Integrador – Semanas 1 a 4

**Empresa Caso de Estudio:** EcoVerde Antioquia S.A.S.

---

# Descripción del Proyecto

Este proyecto consiste en la implementación de un entorno Dockerizado para el despliegue de una página web institucional de la empresa EcoVerde Antioquia S.A.S.

La solución fue desarrollada aplicando conceptos de cultura DevOps, control de versiones con Git, contenedores Docker, imágenes personalizadas, redes, volúmenes y automatización mediante Docker Compose.

El objetivo principal es garantizar un entorno reproducible, organizado y fácil de desplegar, reduciendo problemas relacionados con configuraciones manuales y diferencias entre ambientes de trabajo.

---

# Problemática Identificada

La empresa EcoVerde Antioquia S.A.S. presentaba las siguientes dificultades:

* Diferencias entre entornos de desarrollo y despliegue.
* Configuraciones manuales inconsistentes.
* Escaso control de versiones.
* Pérdida de tiempo al preparar ambientes.
* Falta de persistencia de datos.
* Dificultades en la comunicación entre servicios.

---

# Solución Implementada

Se desarrolló una solución basada en Docker que incluye:

* Página web institucional.
* Imagen Docker personalizada.
* Contenedor para la aplicación web.
* Volumen Docker para persistencia.
* Red Docker personalizada.
* Automatización mediante Docker Compose.
* Control de versiones utilizando Git.

---

# Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Docker
* Docker Compose
* Nginx
* Linux Terminal

---

# Estructura del Proyecto

```text
proyecto-ecoverde/

├── app/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── evidencias/
│
├── Dockerfile
│
├── compose.yml
│
└── README.md
```

---

# Funcionalidades

### Página Institucional

La aplicación web presenta:

* Mensaje de bienvenida.
* Información de la empresa.
* Catálogo de servicios.
* Información de contacto.
* Diseño responsive.
* Interfaz moderna y amigable.

### Contenerización

La aplicación se ejecuta dentro de un contenedor Docker utilizando Nginx como servidor web.

### Automatización

Docker Compose permite levantar todos los servicios mediante un único comando.

---

# Construcción de la Imagen

Construir la imagen Docker:

```bash
docker build -t ecoverde-web .
```

Verificar imágenes disponibles:

```bash
docker images
```

---

# Ejecución del Contenedor

Ejecutar el contenedor:

```bash
docker run -d --name ecoverde-contenedor -p 8080:80 ecoverde-web
```

Verificar contenedores activos:

```bash
docker ps
```

---

# Gestión de Volúmenes

Crear volumen:

```bash
docker volume create ecoverde-vol
```

Listar volúmenes:

```bash
docker volume ls
```

---

# Gestión de Redes

Crear red personalizada:

```bash
docker network create ecoverde-net
```

Listar redes:

```bash
docker network ls
```

---

# Despliegue con Docker Compose

Levantar todos los servicios:

```bash
docker compose up -d
```

Detener servicios:

```bash
docker compose down
```

---

# Acceso a la Aplicación

Una vez iniciado el entorno, la aplicación estará disponible en:

```text
http://localhost:8080
```

---

# Aplicación de DevOps

El proyecto incorpora principios DevOps mediante:

* Automatización del despliegue.
* Estandarización de ambientes.
* Uso de control de versiones.
* Documentación técnica.
* Reducción de configuraciones manuales.
* Reproducibilidad de la infraestructura.

---

# Estrategias para Reducir Deuda Técnica

Durante el desarrollo se implementaron las siguientes prácticas:

* Organización clara del proyecto.
* Separación de responsabilidades entre archivos.
* Uso de Docker para estandarizar entornos.
* Control de versiones mediante Git.
* Documentación completa del proceso.
* Automatización con Docker Compose.

---

# Evidencias Requeridas

Las evidencias del proyecto incluyen capturas de:

* git status
* git log --oneline
* docker images
* docker ps
* docker volume ls
* docker network ls
* docker compose up -d
* Aplicación ejecutándose en navegador

---

# Conclusiones

* Docker permite desplegar aplicaciones de manera consistente en cualquier entorno.
* Git facilita el seguimiento y control de cambios.
* Docker Compose simplifica la administración de múltiples servicios.
* La cultura DevOps mejora la colaboración y la calidad del proceso de desarrollo.
* La solución propuesta cumple con los requerimientos planteados para EcoVerde Antioquia S.A.S.

---

# Autor

Aprendiz ADSO

Servicio Nacional de Aprendizaje – SENA

Componente DevOps y Contenedores
