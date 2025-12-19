# 🚀 Instrucciones para Ejecutar el Proyecto

## Paso 1: Instalar Node.js

Si no tienes Node.js instalado, sigue estos pasos:

1. **Descarga Node.js:**
   - Ve a: https://nodejs.org/
   - Descarga la versión **LTS** (recomendada)
   - Ejecuta el instalador

2. **Verifica la instalación:**
   - Abre una nueva terminal/PowerShell
   - Ejecuta: `node --version`
   - Deberías ver algo como: `v20.x.x`

## Paso 2: Instalar las Dependencias

Una vez que tengas Node.js instalado:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias (Next.js, React, Tailwind, Framer Motion, etc.)

## Paso 3: Ejecutar el Servidor de Desarrollo

```bash
npm run dev
```

Verás un mensaje como:
```
  ▲ Next.js 14.0.4
  - Local:        http://localhost:3000
  - ready started server on 0.0.0.0:3000
```

## Paso 4: Ver la Página

1. Abre tu navegador
2. Ve a: **http://localhost:3000**
3. ¡Verás tu página con el fondo mexicano!

## 📝 Comandos Útiles

- `npm run dev` - Inicia el servidor de desarrollo (para ver cambios en tiempo real)
- `npm run build` - Construye el proyecto para producción
- `npm run start` - Inicia el servidor de producción (después de hacer build)
- `npm run lint` - Verifica errores en el código

## ⚠️ Notas Importantes

- **Mantén la terminal abierta** mientras ejecutas `npm run dev`
- Los cambios en el código se reflejan automáticamente (hot reload)
- Para detener el servidor, presiona `Ctrl + C` en la terminal

## 🆘 Si Tienes Problemas

1. **Asegúrate de tener Node.js instalado:**
   ```bash
   node --version
   npm --version
   ```

2. **Si hay errores, elimina node_modules y reinstala:**
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Verifica que estás en la carpeta correcta:**
   ```bash
   cd "C:\Users\dell\OneDrive\Documentos\trabajo IA"
   ```

