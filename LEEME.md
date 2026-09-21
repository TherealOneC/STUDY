# 📱 Cómo tener el Repaso Dominical en el iPhone (PWA)

`build.py` deja en `publicar/` una copia de la app lista para publicarse como PWA:
`index.html`, `manifest.webmanifest`, `sw.js` (funciona sin internet) e íconos.
Solo hace falta que esté en una URL https. La opción gratis y sencilla es GitHub Pages.

## Primera vez (unos 10 minutos)

1. Crea un repositorio en GitHub (puede ser **privado**: GitHub Pages funciona con repos privados
   en planes de pago; en el plan gratis el repo debe ser **público**. Si te preocupa, recuerda que
   el archivo solo contiene tus fichas de estudio, nunca tu progreso).
2. Sube **el contenido** de `publicar/` a la raíz del repositorio (index.html, manifest, sw.js, íconos).
3. En el repo: *Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save*.
4. En un minuto tendrás una URL tipo `https://TU_USUARIO.github.io/NOMBRE_DEL_REPO/`.
5. En el iPhone, abre esa URL en **Safari** → botón Compartir → **"Añadir a pantalla de inicio"**.
   Queda con ícono, pantalla completa y funciona sin conexión.

## Cada vez que actualices el dashboard

Corre `python3 build.py` y vuelve a subir el contenido de `publicar/` (con GitHub Desktop
o arrastrando los archivos en la web). El teléfono descarga la versión nueva la próxima vez
que abras la app con internet.

## El progreso

Cada dispositivo guarda su propio progreso (en el navegador). Para pasar el del Mac al iPhone:
Exportar en el Mac → mándate el `.json` (AirDrop, correo) → Importar en el iPhone. Y al revés.
Más adelante se puede sincronizar automáticamente; de momento este intercambio es suficiente.
