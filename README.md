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

# Objetivos del Proyecto

## Objetivo General

Implementar un entorno Dockerizado para el despliegue de una solución web institucional para EcoVerde Antioquia S.A.S., aplicando principios DevOps que permitan mejorar la portabilidad, mantenibilidad y reproducibilidad del entorno de ejecución.

## Objetivos Específicos

* Aplicar control de versiones utilizando Git y GitHub.
* Diseñar una estructura organizada para el proyecto.
* Construir una imagen Docker personalizada para la aplicación web.
* Implementar contenedores para la ejecución del servicio.
* Configurar redes Docker para la comunicación entre componentes.
* Gestionar volúmenes para garantizar persistencia de datos.
* Automatizar el despliegue mediante Docker Compose.
* Documentar el proceso completo de implementación.
* Reducir errores derivados de configuraciones manuales.
* Facilitar futuras tareas de mantenimiento y escalabilidad.

---

# Alcance del Proyecto

La solución desarrollada contempla la implementación de una página web institucional ejecutada dentro de un entorno Dockerizado.

El alcance incluye:

* Desarrollo y despliegue de una aplicación web estática.
* Creación de una imagen Docker personalizada.
* Configuración de contenedores para la aplicación.
* Implementación de redes Docker.
* Uso de volúmenes para persistencia.
* Automatización mediante Docker Compose.
* Gestión del código fuente mediante Git y GitHub.
* Documentación técnica del proceso.

No se contempla el despliegue en ambientes productivos reales ni la integración con servicios externos empresariales.

---

# Beneficios de la Solución

La implementación propuesta aporta beneficios importantes para la organización:

* Estandarización de los ambientes de trabajo.
* Reducción de errores de configuración.
* Mayor rapidez en el despliegue.
* Facilidad para replicar el entorno en diferentes equipos.
* Mejor trazabilidad de cambios mediante Git.
* Simplificación de tareas operativas.
* Base tecnológica preparada para futuros procesos DevOps.

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

# Requisitos Previos

Antes de ejecutar este proyecto es necesario disponer de:

## Software Requerido

* Git versión 2.40 o superior.
* Docker Desktop o Docker Engine.
* Docker Compose.
* Navegador web moderno.
* Editor de código (Visual Studio Code recomendado).

## Conocimientos Requeridos

* Comandos básicos de Git.
* Conceptos básicos de Docker.
* Manejo de terminal de comandos.
* Estructura básica de proyectos web.

---

# Instalación del Proyecto

## 1. Clonar el Repositorio

```bash
git https://github.com/FABIAN-00906/web_ecoverde.git
```

## 2. Acceder al Directorio

```bash
cd proyecto-ecoverde
```

## 3. Verificar la Estructura

```bash
ls
```

Debe visualizarse una estructura similar a:

```text
app/
Dockerfile
compose.yml
README.md
```

## 4. Construir la Imagen Docker

```bash
docker build -t ecoverde-web .
```

## 5. Verificar la Imagen Creada

```bash
docker images
```

## 6. Ejecutar el Contenedor

```bash
docker run -d --name ecoverde-contenedor -p 8080:80 ecoverde-web
```

## 7. Verificar el Contenedor

```bash
docker ps
```

## 8. Acceder desde el Navegador

```text
http://localhost:8080
```

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
│   ├── CICD con GitHub Actions.docx
│   └── PRODUCTO INTEGRADOR.docx
│
├── .github/workflows/
│          ├── artifact-demo.yml
│          ├── ci-basica.yml
│          ├── ci-validacion.yml
│          ├── docker-build.yml
│          └── pipeline-devops.yml
│          
│
├── .dockerignore
│
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

# Resultados Obtenidos

Durante el desarrollo del proyecto se lograron los siguientes resultados:

* Creación exitosa de una página web institucional para EcoVerde Antioquia S.A.S.
* Construcción de una imagen Docker personalizada.
* Implementación de contenedores para la ejecución de la aplicación.
* Configuración de una red Docker dedicada.
* Gestión de persistencia mediante volúmenes.
* Automatización del despliegue utilizando Docker Compose.
* Organización del código mediante Git y GitHub.
* Generación de documentación técnica para facilitar futuras implementaciones.

---

# Buenas Prácticas Implementadas

Con el fin de garantizar la calidad del proyecto se aplicaron las siguientes buenas prácticas:

* Uso de control de versiones.
* Estructura organizada del repositorio.
* Separación entre código y configuración.
* Automatización del despliegue.
* Documentación continua del proceso.
* Uso de nombres descriptivos para imágenes y contenedores.
* Reducción de configuraciones manuales repetitivas.
* Aplicación de principios DevOps para mejorar la colaboración y la reproducibilidad.

---

# Checklist del Proyecto

## Planeación

* [x] Identificación de la problemática
* [x] Definición de la solución
* [x] Selección de tecnologías

## Desarrollo

* [x] Creación de la aplicación web
* [x] Organización de la estructura del proyecto
* [x] Implementación de archivos HTML, CSS y JavaScript

## Docker

* [x] Creación del Dockerfile
* [x] Construcción de la imagen
* [x] Ejecución del contenedor
* [x] Configuración de volúmenes
* [x] Configuración de redes

## Automatización

* [x] Configuración de Docker Compose
* [x] Levantamiento automático de servicios
* [x] Validación de funcionamiento

## Evidencias

* [x] Captura de git status
* [x] Captura de git log --oneline
* [x] Captura de docker images
* [x] Captura de docker ps
* [x] Captura de docker volume ls
* [x] Captura de docker network ls
* [x] Captura de docker compose up -d
* [x] Captura de la aplicación ejecutándose

---

# Consideraciones de Seguridad

Para este proyecto se tuvieron en cuenta las siguientes recomendaciones:

* No almacenar credenciales dentro del repositorio.
* Mantener actualizado Docker y sus dependencias.
* Limitar permisos innecesarios en los contenedores.
* Utilizar imágenes oficiales y verificadas.
* Mantener control de cambios mediante Git.
* Documentar adecuadamente los procesos de despliegue.

---

# Trabajo Futuro

Como posibles mejoras futuras se plantean:

* Integración con bases de datos.
* Implementación de HTTPS.
* Integración de pipelines CI/CD con GitHub Actions.
* Monitoreo y registro de eventos.
* Despliegue en ambientes cloud.
* Implementación de pruebas automatizadas.
* Escalamiento mediante orquestadores de contenedores.

---

# Conclusiones

* Docker permite desplegar aplicaciones de manera consistente en cualquier entorno.
* Git facilita el seguimiento y control de cambios.
* Docker Compose simplifica la administración de múltiples servicios.
* La cultura DevOps mejora la colaboración y la calidad del proceso de desarrollo.
* La solución propuesta cumple con los requerimientos planteados para EcoVerde Antioquia S.A.S.

---

# Autor

**Fabián Marín - Miguel Castilla**

Aprendiz ADSO – Análisis y Desarrollo de Software

Servicio Nacional de Aprendizaje (SENA)

Centro de Tecnología de la Manufactura Avanzada (CTMA)

Regional Antioquia

---

## Instructor

Wilson Castro Gil

---

## Año

2026