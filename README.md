# El Cartel Taquería - Next.js

Sitio web moderno para El Cartel Taquería construido con Next.js, Tailwind CSS, shadcn/ui y Framer Motion.

## 🚀 Tecnologías

- **Next.js 14** - Framework React fullstack
- **Tailwind CSS** - Estilos utilitarios
- **shadcn/ui** - Componentes UI modernos y accesibles
- **Framer Motion** - Animaciones fluidas
- **TypeScript** - Tipado estático

## 📦 Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
.
├── app/
│   ├── globals.css      # Estilos globales
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── components/
│   ├── ui/              # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── Header.tsx       # Componente del header
│   ├── Navigation.tsx   # Navegación del menú
│   ├── MenuSection.tsx  # Sección de menú
│   ├── ContactSection.tsx # Sección de contacto
│   ├── Footer.tsx       # Footer
│   └── Decorations.tsx  # Elementos decorativos
└── lib/
    └── utils.ts         # Utilidades (cn function)
```

## 🎨 Características

- ✨ Animaciones suaves con Framer Motion
- 🎯 Navegación suave entre secciones
- 📱 Diseño completamente responsive
- 🌙 Tema oscuro con gradientes
- 🎭 Componentes reutilizables con shadcn/ui
- ⚡ Optimizado para rendimiento

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🎯 Próximos Pasos

Para personalizar el sitio:

1. Modifica los datos del menú en `app/page.tsx`
2. Ajusta los colores en `tailwind.config.ts`
3. Personaliza las animaciones en los componentes
4. Agrega más componentes de shadcn/ui según necesites

## 📄 Licencia

Copyright 2020 **El Cartel Taquería** – Design by **π2 Marketing Digital**
