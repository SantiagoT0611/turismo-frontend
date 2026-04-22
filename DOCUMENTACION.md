# Documentación del Proyecto Turismo Frontend

## Índice General
- [Descripción General](#descripción-general)
- [Características Principales](#características-principales)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Guías de Uso](#guías-de-uso)
  - [Instalación](#instalación)
  - [Ejecución](#ejecución)
  - [Construcción](#construcción)
  - [Pruebas](#pruebas)

---

## Descripción General

**TurismoFrontend** es una aplicación web moderna diseñada para explorar y descubrir destinos turísticos de forma interactiva.

### Propósito
Proporcionar a los usuarios una plataforma intuitiva y amigable para:
- Explorar destinos turísticos disponibles
- Ver detalles completos de cada destino
- Guardar sus destinos favoritos
- Acceder a información de contacto
- Conocer más sobre nosotros

### Tecnología Base
- **Angular 21**: Framework moderno para aplicaciones web
- **TypeScript**: Lenguaje de programación seguro y con tipado
- **Bootstrap 5**: Diseño responsivo y componentes visuales
- **RxJS**: Gestión de datos reactiva

---

## Características Principales

### Página de Inicio
La primera pantalla que ve el usuario al acceder a la aplicación.
- Presentación de la aplicación
- Acceso rápido a las principales secciones
- Diseño atractivo y llamativo

### Explorar Destinos
Navegación completa de destinos turísticos disponibles.
- Listado de todos los destinos
- Información básica de cada destino
- Acceso a detalles individuales
- Opción para guardar favoritos

### Destinos Favoritos
Sistema personal para guardar destinos que te interesan.
- Guardar y eliminar favoritos
- Ver todos tus destinos guardados
- Los favoritos se guardan automáticamente en tu dispositivo
- Acceso rápido a tus favoritos desde cualquier lugar

### Página Nosotros
Información sobre el proyecto y el equipo.
- Historia y misión
- Quiénes somos
- Nuestros valores

### Página de Contacto
Formulario para comunicarse.
- Envío de mensajes
- Información de contacto
- Formulario de consultas

### Barra de Navegación
Acceso fácil a todas las secciones.
- Menú principal en la parte superior
- Links a todas las páginas
- Diseño responsivo para dispositivos móviles

---

## Estructura del Proyecto

```
turismo-frontend/
│
├── src/                           # Código fuente
│   ├── app/                       # Aplicación principal
│   │   ├── features/              # Páginas y características
│   │   │   ├── home/              # Página de inicio
│   │   │   ├── destino/           # Listado de destinos
│   │   │   ├── destino-detalle/   # Detalle de un destino
│   │   │   ├── favoritos/         # Página de favoritos
│   │   │   ├── nosotros/          # Información sobre nosotros
│   │   │   ├── contacto/          # Formulario de contacto
│   │   │   └── shared/            # Componentes compartidos
│   │   │       └── components/    # Componentes reutilizables
│   │   │           ├── navbar/    # Barra de navegación
│   │   │           └── footer/    # Pie de página
│   │   ├── core/                  # Servicios centrales
│   │   │   └── services/          # Servicios de la aplicación
│   │   │       └── favoritos.ts   # Gestión de favoritos
│   │   └── app.routes.ts          # Rutas de la aplicación
│   │
│   ├── assets/                    # Recursos estáticos
│   │   └── (imágenes, logos, etc.)
│   │
│   └── index.html                 # Archivo principal HTML
│
├── public/                        # Archivos públicos
│   └── destinos.json              # Datos de destinos
│
├── imagenes/                      # Carpeta de imágenes
│
├── package.json                   # Dependencias del proyecto
├── angular.json                   # Configuración de Angular
└── tsconfig.json                  # Configuración de TypeScript
```

### Explicación de Carpetas Clave

**`features/`** - Contiene todas las páginas y secciones de la aplicación
- Cada carpeta es una página completa con su HTML, CSS y lógica

**`shared/components/`** - Componentes que se usan en varias páginas
- navbar, footer, etc.

**`core/services/`** - Servicios que manejan la lógica de negocio
- Servicios como `FavoritosService` que gestiona los favoritos

**`public/`** - Datos estáticos (como listado de destinos en JSON)

---

## Guías de Uso

### Instalación

#### Requisitos Previos
- Tener instalado Node.js (versión 18 o superior)
- Tener npm (viene incluido con Node.js)

#### Pasos de Instalación

1. **Abre una terminal** en la carpeta del proyecto
   ```bash
   cd turismo-frontend
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```
   Esto descargará todas las librerías necesarias (Angular, Bootstrap, etc.)

3. **Verifica que todo esté bien**
   ```bash
   npm --version
   node --version
   ```

### Ejecución (Modo Desarrollo)

Para trabajar en el proyecto y ver los cambios en tiempo real:

```bash
npm start
```

Luego abre tu navegador en: `http://localhost:4200`

**Características del modo desarrollo:**
-  Los cambios se ven automáticamente
-  Mejor para encontrar errores
-  Tienes herramientas de depuración disponibles

### Construcción (Producción)

Para crear una versión lista para publicar:

```bash
npm run build
```

Esto crea una carpeta `dist/` con los archivos optimizados para producción.

**Características de la construcción:**
- Código comprimido y optimizado
- Menor tamaño de archivos
- Mejor rendimiento
- Listo para un servidor web

### Pruebas

Para ejecutar las pruebas automatizadas:

```bash
npm test
```

Las pruebas verifican que todo funcione correctamente.

---

## Sistema de Favoritos 

### ¿Cómo funciona?

El sistema de favoritos guarda la información en tu dispositivo localmente:

1. **Guardado Local**: Usa el almacenamiento del navegador (localStorage)
2. **Persisten**: Los favoritos se guardan incluso si cierras el navegador
3. **Privados**: Solo existen en tu dispositivo, no se envían a servidores
4. **Instantáneos**: Se guardan al instante sin necesidad de conexión

### Acciones Disponibles
- **Agregar a favoritos**: Guarda un destino
- **Eliminar de favoritos**: Quita un destino guardado
- **Ver todos**: Accede a tu lista completa

---

**Última actualización**: Abril 2026
