# WorldCards — Ciudades del Mundo

Aplicación web que muestra una galería de seis destinos turísticos del mundo. Cada ciudad se presenta en una tarjeta con imagen, descripción, datos de población y sus principales atracciones.

## Captura

![WorldCards](https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80)

## Tecnologías

- **React 19** — biblioteca de componentes UI
- **Vite 7** — bundler y servidor de desarrollo
- **CSS por componente** — estilos encapsulados en cada componente

## Componentes

| Componente | Descripción |
|-----------|-------------|
| `Navbar` | Barra de navegación con el logo WorldCards |
| `Tarjeta` | Tarjeta individual de cada ciudad con imagen, país, continente, descripción, población y curiosidades |
| `Footer` | Pie de página con el nombre del proyecto |

## Estructura del proyecto

```
src/
├── App.jsx
├── App.css
├── main.jsx
└── assets/
    ├── components/
    │   ├── Navbar.jsx / navbar.css
    │   ├── Tarjeta.jsx / Tarjeta.css
    │   └── Footer.jsx / Footer.css
    └── data/
        └── ciudades.js
```

## Instalación y uso

```bash
npm install
npm run dev
```

La app estará disponible en `http://localhost:5173`.

## Ciudades incluidas

| Ciudad | País | Continente | Conocida por |
|--------|------|------------|--------------|
| Kioto | Japón | Asia | Geishas · Templos · Bambú |
| Lisboa | Portugal | Europa | Fado · Pastéis · Tranvías |
| Marrakech | Marruecos | África | Souks · Especias · Riads |
| Buenos Aires | Argentina | América del Sur | Tango · Asado · Arquitectura |
| Praga | República Checa | Europa | Castillo · Puentes · Cerveza |
| Hanói | Vietnam | Asia | Pho · Templos · Colonialismo |

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Genera la build de producción
npm run preview  # Previsualiza la build de producción
npm run lint     # Ejecuta ESLint
```

## Autores

| Avatar | Usuario |
|--------|---------|
| ![Maria19761976](https://avatars.githubusercontent.com/u/243099421?v=4&s=40) | [@Maria19761976](https://github.com/Maria19761976) |
