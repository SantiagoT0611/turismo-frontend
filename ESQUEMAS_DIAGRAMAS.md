# Esquemas y Diagramas - TurismoFrontend

## Arquitectura General de la Aplicación

```
┌─────────────────────────────────────────────────────────────┐
│                    NAVEGADOR DEL USUARIO                     │
│                   http://localhost:4200                      │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
                ┌──────────────────────┐
                │   BARRA NAVEGACION   │ ◄────── navbar component
                │  (Navbar Component)  │
                └──────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
    ┌────────┐        ┌────────┐        ┌────────┐
    │ Home   │        │Destino │        │Favorito│  ◄── Feature Components
    │ Page   │        │ Page   │        │  Page  │
    └────────┘        └────────┘        └────────┘
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                           ▼
                ┌──────────────────────┐
                │     Router Angular   │ ◄────── app.routes.ts
                │  (Enrutador)         │
                └──────────────────────┘
                           │
                           ▼
                ┌──────────────────────┐
                │     Servicios        │ ◄────── core/services/
                │  FavoritosService    │
                └──────────────────────┘
                           │
                           ▼
                ┌──────────────────────┐
                │   localStorage       │ ◄────── Datos locales
                │  (Almacenamiento)    │
                └──────────────────────┘
```

---

## Árbol de Carpetas Simplificado

```
turismo-frontend/
│
├── 📂 src/                          ← Código fuente principal
│   ├── 📂 app/
│   │   ├── 📂 features/             ← PÁGINAS (Home, Destino, etc)
│   │   │   ├── 📂 home/
│   │   │   ├── 📂 destino/
│   │   │   ├── 📂 destino-detalle/
│   │   │   ├── 📂 favoritos/
│   │   │   ├── 📂 nosotros/
│   │   │   ├── 📂 contacto/
│   │   │   └── 📂 shared/           ← Componentes compartidos
│   │   │       └── 📂 components/
│   │   │           ├── 📂 navbar/
│   │   │           └── 📂 footer/
│   │   │
│   │   ├── 📂 core/                 ← SERVICIOS
│   │   │   └── 📂 services/
│   │   │       └── 📄 favoritos.ts
│   │   │
│   │   ├── 📄 app.routes.ts         ← Rutas
│   │   ├── 📄 app.ts                ← Componente raíz
│   │   └── 📄 app.css               ← Estilos globales
│   │
│   ├── 📂 assets/                   ← Imágenes estáticas
│   ├── 📄 index.html                ← Página principal
│   ├── 📄 main.ts                   ← Punto de entrada
│   └── 📄 styles.css                ← Estilos globales
│
├── 📂 public/                       ← Archivos públicos
│   └── 📄 destinos.json             ← Datos de destinos
│
├── 📂 imagenes/                     ← Carpeta de imágenes
│
├── 📄 package.json                  ← Dependencias
├── 📄 angular.json                  ← Config de Angular
├── 📄 tsconfig.json                 ← Config de TypeScript
└── 📄 README.md                     ← Documentación originalk
```

---

## Flujo de Datos

### Cuando el usuario ACCEDE A LA APP

```
1️⃣  Usuario abre navegador
    └─► http://localhost:4200
        │
2️⃣  Se carga index.html
    └─► main.ts se ejecuta
        │
3️⃣  App Component se inicializa
    └─► Navbar se carga
        │
4️⃣  Router detecta ruta
    └─► /destino-detalle/:id
        │
5️⃣  Componente DestinoDetalle se carga
    └─► HTML, CSS, lógica
        │
6️⃣  Se pide dato a FavoritosService
    └─► Lee localStorage
        │
7️⃣  Página se muestra con los datos
    └─► Usuario ve la página
```

---

### Cuando el usuario AGREGA UN FAVORITO

```
┌─ Usuario en la página de un destino
│                │
│                ▼
│   Hace clic en botón "♥ Favorito"
│                │
│                ▼
│   Componente DestinoDetalle
│   Método: agregarFavorito()
│                │
│                ▼
│   FavoritosService.agregarFavorito(destino)
│                │
│                ├─► Valida si no existe
│                │
│                ├─► Crea objeto con datos
│                │   - id
│                │   - nombre
│                │   - descripción
│                │   - imagen
│                │
│                ├─► Agrega a array
│                │
│                ▼
│   localStorage.setItem('favoritos', JSON.stringify(array))
│                │
│                ▼
│   Favorito guardado en el dispositivo
│
└─ Usuario puede verlo en "Mis Favoritos"
```

---

### Cuando el usuario ACCEDE A SUS FAVORITOS

```
Usuario hace clic en "Mis Favoritos"
        │
        ▼
    El Router cambia a /favoritos
        │
        ▼
    Se carga componente Favoritos
        │
        ▼
    En ngOnInit():
    ├─► FavoritosService.obtenerFavoritos()
    │
    ▼
    Lee desde localStorage['favoritos']
    
    Retorna: [
        { id: 1, nombre: "Paris", ... },
        { id: 2, nombre: "Tokyo", ... }
    ]
        │
        ▼
    El componente recibe los datos
        │
        ▼
    *ngFor en HTML itera sobre ellos
        │
        ▼
    Se muestra lista de favoritos
        │
        ▼
    Usuario ve: "Mis Favoritos (2)"
        ├─► Paris
        └─► Tokyo
```

---

## Estructura de un Componente

```
┌─────────────────────────────────────────────┐
│       UNA PÁGINA (Componente)               │
│                                             │
│  📂 nombre-pagina/                          │
│  ├── 📄 nombre-pagina.ts                    │
│  │   └─ Lógica, variables, métodos          │
│  │                                          │
│  ├── 📄 nombre-pagina.html                  │
│  │   └─ Estructura visual (HTML)            │
│  │                                          │
│  ├── 📄 nombre-pagina.css                   │
│  │   └─ Estilos visuales                    │
│  │                                          │
│  └── 📄 nombre-pagina.spec.ts               │
│      └─ Pruebas automatizadas               │
└─────────────────────────────────────────────┘
```

---

## Flujo de Navegación Completo

```
                          ┌──────────────┐
                          │   INICIO     │
                          │   (Home)     │
                          └──────┬───────┘
                   ┌──────────────┼──────────────┐
                   ▼              ▼              ▼
            ┌──────────┐    ┌──────────┐  ┌──────────┐
            │ Destinos │    │ Nosotros │  │ Contacto │
            └─────┬────┘    └──────────┘  └──────────┘
                  │
         ┌────────┴──────────┐
         ▼                   ▼
    ┌─────────┐       ┌─────────────┐
    │ Listado │       │ Detalle de  │
    │ Completo│       │ Destino     │
    └────┬────┘       │ (ID específ)│
         │            └──────┬──────┘
         │                   │
         │         ┌─────────┴──────────┐
         │         ▼                    ▼
         │    [♥ Agregar]          [← Volver]
         │         │
         │         └──► localStorage (Favoritos guardados)
         │                           │
         └──────────────────┬────────┘
                            ▼
                      ┌──────────────┐
                      │    MIS       │
                      │  FAVORITOS   │
                      └──────────────┘
```

---

## Sistema de Almacenamiento (localStorage)

```
┌─────────────────────────────────────┐
│    localStorage DEL NAVEGADOR       │
│                                     │
│  KEY: 'favoritos'                   │
│  VALUE: JSON Array                  │
│                                     │
│  [                                  │
│    {                                │
│      "id": 1,                       │
│      "nombre": "Paris",             │
│      "descripcion": "La...",        │
│      "imagen": "url.jpg",           │
│      "imagenes": [                  │
│        "img1.jpg",                  │
│        "img2.jpg"                   │
│      ]                              │
│    },                               │
│    {                                │
│      "id": 2,                       │
│      "nombre": "Tokyo",             │
│      ...                            │
│    }                                │
│  ]                                  │
│                                     │
│  Almacenado en: Tu Dispositivo   │
│  Privacidad: Solo tú lo ves      │
│  Duración: Permanente             │
│  Compartible: NO                 │
└─────────────────────────────────────┘
```
---

## Rutas de la Aplicación

```
┌────────────────────────────────────────────────────────┐
│          TODAS LAS RUTAS DISPONIBLES                   │
├────────────────────────────────────────────────────────┤
│                                                        │
│  /                  → Home                 (index)    │
│  /destino           → Listado de destinos             │
│  /destino/:id       → Detalle de 1 destino (parámetro)
│  /favoritos         → Mis favoritos                   │
│  /nosotros          → Información nosotros           │
│  /contacto          → Formulario contacto            │
│                                                        │
│  Ruta no encontrada → Permanece en página actual      │
│                                                        │
└────────────────────────────────────────────────────────┘

Definidas en: src/app/app.routes.ts
```

---


## Validación de Favoritos

```
agregarFavorito(destino):
    │
    ├─ ¿Ya existe?
    │  ├─ Sí → No hacer nada ✖️
    │  └─ No → Continuar ✓
    │
    ├─ Crear objeto favorito
    │  ├─ id
    │  ├─ nombre
    │  ├─ descripción
    │  ├─ imagen (principal)
    │  └─ imagenes (array)
    │
    ├─ Agregar a array
    │
    └─ Guardar en localStorage
```

---


## Comandos Esenciales (Cheat Sheet)

```
# INSTALACIÓN
npm install                     ← Instalar dependencias

# DESARROLLO
npm start                       ← Iniciar servidor (puerto 4200)
npm run watch                   ← Compilar continuamente

# CONSTRUCCIÓN
npm run build                   ← Compilar para producción

# PRUEBAS
npm test                        ← Ejecutar tests

# INFORMACIÓN
ng version                      ← Ver versión de Angular
ng version --long              ← Ver detalles completos

# DEBUGGING (En navegador)
F12                            ← Abrir DevTools
Ctrl+Shift+I                   ← Abrir DevTools (alternativa)
Ctrl+Shift+J                   ← Abrir Console
```

---

## Resumen Visual

```
YO (Usuario)
    │
    ▼ (digito URL)
http://localhost:4200
    │
    ▼ (carga la página)
Bootstrap angular
    │
    ├─► Carga componentes
    ├─► Inyecta servicios
    ├─► Lee datos locales
    │
    ▼
 INTERFAZ BONITA Y FUNCIONAL
    │
    ├─► Puedo ver destinos
    ├─► Guardar favoritos
    ├─► Navegar fácilmente
    │
    ▼
 ¡A disfrutar turismo!
```

---

**Última actualización**: Abril 2026

_Para más detalles, consulta los otros documentos de documentación._
