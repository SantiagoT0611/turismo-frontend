# Estructura del Proyecto - Descripción Detallada

## Tabla de Contenidos

1. [Vista General](#vista-general)
2. [Carpetas y Archivos](#carpetas-y-archivos)
3. [Componentes](#componentes)
4. [Servicios](#servicios)
5. [Configuración](#configuración)

---

## Vista General

TurismoFrontend está organizado siguiendo el patrón modular de Angular, facilitando el mantenimiento y escalabilidad.

```
turismo-frontend/
├── src/                  # Código fuente (lo que importa)
├── public/               # Archivos públicos estáticos
├── imagenes/             # Carpeta de imágenes/recursos
├── node_modules/         # Dependencias (generado por npm)
├── dist/                 # Compilación final (generado al construir)
├── package.json          # Configuración del proyecto
├── angular.json          # Configuración de Angular CLI
└── tsconfig.json         # Configuración de TypeScript
```

---

## Carpetas y Archivos

### `/src` - Código Fuente

Este es el corazón del proyecto. Todo lo que importa está aquí.

#### `/src/app` - Aplicación Principal

**Propósito**: Contiene toda la lógica de la aplicación Angular.

```
/app
├── features/             #  Páginas principales de la app
├── core/                 #  Servicios y configuración central
├── app.routes.ts         #  Rutas de navegación
├── app.config.ts         #  Configuración de la app
├── app.ts                #  Componente raíz
└── app.css               #  Estilos globales
```

---

### `/features` - Páginas y Características

Cada carpeta es una **página completa** de la aplicación con su propio HTML, CSS y lógica.

#### `home/` - Página de Inicio
- **home.ts**: Lógica de la página
- **home.html**: Estructura HTML
- **home.css**: Estilos visuales
- **home.spec.ts**: Pruebas automatizadas

**¿Qué hace?**: Muestra la página principal/bienvenida.

---

#### `destino/` - Listado de Destinos
- **destino.ts**: Lógica para mostrar la lista
- **destino.html**: Estructura de la lista
- **destino.css**: Estilos de tarjetas
- **destino.spec.ts**: Pruebas

**¿Qué hace?**: Muestra todos los destinos disponibles en formato de tarjetas.

---

#### `destino-detalle/` - Página de Detalle
- **destino-detalle.ts**: Lógica del detalle
- **destino-detalle.html**: Estructura
- **destino-detalle.css**: Estilos
- **destino-detalle.spec.ts**: Pruebas

**¿Qué hace?**: Muestra la información completa de un destino específico.

**Características**:
- Galería de imágenes
- Descripción detallada
- Opción para guardar como favorito
- Navegación hacia atrás

---

#### `favoritos/` - Mis Favoritos
- **favoritos.ts**: Lógica del listado
- **favoritos.html**: Estructura
- **favoritos.css**: Estilos
- **favoritos.spec.ts**: Pruebas

**¿Qué hace?**: Muestra la lista de destinos que el usuario ha guardado como favoritos.

**Características**:
- Listado de favoritos guardados
- Botón para eliminar favoritos
- Acceso rápido a cada destino
- Mensaje si no hay favoritos

---

#### `nosotros/` - Información del Proyecto
- **nosotros.ts**: Componente
- **nosotros.html**: Contenido
- **nosotros.css**: Estilos
- **nosotros.spec.ts**: Pruebas

**¿Qué hace?**: Muestra información sobre el proyecto, la misión y el equipo.

---

#### `contacto/` - Formulario de Contacto
- **contacto.ts**: Lógica del formulario
- **contacto.html**: Estructura del formulario
- **contacto.css**: Estilos
- **contacto.spec.ts**: Pruebas

**¿Qué hace?**: Permite a los usuarios enviar mensajes de contacto.

---

#### `shared/` - Componentes Compartidos

Componentes que se usan en **múltiples páginas**.

**`shared/components/`**

##### `navbar/` - Barra de Navegación
- **navbar.ts**: Lógica de navegación
- **navbar.html**: Estructura del menú
- **navbar.css**: Estilos del menú
- **navbar.spec.ts**: Pruebas

**¿Qué hace?**: Muestra el menú de navegación en todas las páginas.

**Funcionalidades**:
- Links a todas las secciones
- Responsive (adaptable a móvil)
- Logo de la aplicación

---

##### `footer/` - Pie de Página
- **footer.ts**: Componente del footer
- **footer.html**: Contenido
- **footer.css**: Estilos
- **footer.spec.ts**: Pruebas

**¿Qué hace?**: Muestra el pie de página en todas las páginas.

**Contenido típico**:
- Información de copyright
- Links adicionales
- Información de contacto

---

### `/core` - Servicios Centrales

Lógica que se comparte entre múltiples componentes.

#### `core/services/` - Servicios

##### `favoritos.ts` - Servicio de Favoritos

**Propósito**: Gestionar todo lo relacionado con favoritos.

**Funciones principales**:
```
- obtenerFavoritos()      → Obtiene la lista de favoritos
- agregarFavorito(d)      → Agrega un destino a favoritos
- eliminarFavorito(id)    → Elimina un destino de favoritos
```

**Cómo funciona**:
1. Guarda favoritos en `localStorage` del navegador
2. Cada favorito contiene: id, nombre, descripción, imagen
3. Los datos persisten incluso después de cerrar el navegador

**Archivo de pruebas**: `favoritos.spec.ts`

---

### `/assets` - Recursos Estáticos

Carpeta para imágenes y otros recursos que se copian tal cual en la compilación final.

**Contenido típico**:
- Logos
- Iconos
- Imágenes por defecto

---

### Archivos Principales en `/src`

#### `index.html` - Página HTML Principal
- Es el archivo que carga el navegador
- Contiene el contenedor donde se carga Angular
- Vincula estilos y scripts

#### `main.ts` - Punto de Entrada de Angular
- Inician la aplicación Angular
- Carga la configuración inicial
- Monta el componente raíz

#### `styles.css` - Estilos Globales
- Estilos que afectan a toda la aplicación
- Reseteos CSS
- Variables de colores globales

---

### `/public` - Archivos Públicos

#### `destinos.json` - Datos de Destinos
Archivo JSON con los datos de todos los destinos.

**Estructura aproximada**:
```json
[
  {
    "id": 1,
    "nombre": "Nombre del Destino",
    "descripcion": "Descripción...",
    "imagen": "url-imagen.jpg",
    "imagenes": ["img1.jpg", "img2.jpg"]
  }
]
```

---

## Componentes

### ¿Qué es un Componente?

Un componente es una parte reutilizable de la interfaz que contiene:
- **HTML** (.html): La estructura visual
- **TypeScript** (.ts): La lógica
- **CSS** (.css): Los estilos

### Componentes Principales

| Componente | Ubicación | Propósito |
|------------|-----------|----------|
| App | `/app.ts` | Raíz de la aplicación |
| Home | `/features/home/` | Página principal |
| Destino | `/features/destino/` | Listado de destinos |
| DestinoDetalle | `/features/destino-detalle/` | Detalle de un destino |
| Favoritos | `/features/favoritos/` | Lista de favoritos |
| Nosotros | `/features/nosotros/` | Info del proyecto |
| Contacto | `/features/contacto/` | Formulario de contacto |
| Navbar | `/shared/components/navbar/` | Menú de navegación |
| Footer | `/shared/components/footer/` | Pie de página |

---

## Servicios

### ¿Qué es un Servicio?

Un servicio es una clase que proporciona funcionalidad reutilizable a múltiples componentes.

### Servicios Disponibles

#### FavoritosService
**Ubicación**: `/core/services/favoritos.ts`

**Responsabilidades**:
- Guardar favoritos en localStorage
- Recuperar lista de favoritos
- Agregar detalles de destinos favoritos
- Eliminar favoritos

**Inyección de dependencias**:
```typescript
constructor(private favoritosService: FavoritosService) {}
```

---

## Configuración

### 📄 `package.json`

Define el proyecto y sus dependencias.

**Secciones importantes**:

```json
{
  "name": "turismo-frontend",          // Nombre del proyecto
  "version": "0.0.0",                   // Versión actual
  "scripts": {                          // Comandos disponibles
    "start": "ng serve",                // Iniciar desarrollo
    "build": "ng build",                // Compilar para producción
    "test": "ng test"                   // Ejecutar pruebas
  },
  "dependencies": {                     // Librerías necesarias
    "@angular/core": "^21.2.0",
    "bootstrap": "^5.3.8"
  }
}
```

---
### `angular.json`

Configuración de Angular CLI.

**Lo importante**:
- Rutas de los archivos
- Configuración de compilación
- Comandos personalizados

---

### `tsconfig.json`

Configuración de TypeScript.

**Lo importante**:
- Versión de JavaScript a compilar
- Rutas de módulos
- Opciones de compilación

---

## Resumen Rápido

| Elemento | ¿Dónde? | ¿Para qué? |
|----------|---------|-----------|
| Páginas | `/features/` | Mostrar contenido |
| Componentes compartidos | `/shared/` | Usar en varias páginas |
| Servicios | `/core/services/` | Lógica compartida |
| Rutas | `app.routes.ts` | Navegar entre páginas |
| Datos | `/public/destinos.json` | Información |
| Estilos globales | `styles.css` | Apariencia general |

---

**Última actualización**: Abril 2026
