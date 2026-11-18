# La Araucana — Publicación en Netlify y comentarios Disqus (versión 5)

**El foro de Disqus ya está configurado en el código con el shortname `laaraucanaobra`.** No vuelvas a pegar el script universal, ya que incluirlo dos veces puede provocar problemas.

## Publicar gratuitamente

1. Entra en https://app.netlify.com/drop (inicia sesión si quieres administrar el sitio).
2. Sube el archivo ZIP **La_Araucana_Tryo_Teatro_Banda_Web_V5_Disqus_Config.zip** o descomprime y arrastra la carpeta que contiene directamente `index.html`.
3. Si ya publicaste la versión anterior, entra en **ese mismo sitio → Deploys** y arrastra allí el ZIP/la carpeta actualizada, para conservar la URL.
4. Copia la URL pública que te genere Netlify (termina en `.netlify.app`).
5. Abre `https://TU-DOMINIO.netlify.app/opiniones.html` y baja hasta **Comentarios de quienes vieron la obra**. El espacio de Disqus debe cargar bajo las opiniones del grupo.

## Verificar la configuración en Disqus

1. Entra en https://disqus.com/admin/ y selecciona el foro **laaraucanaobra**.
2. En la configuración de tu foro añade/confirma el dominio final de Netlify como URL del sitio (y como dominio de confianza si esa opción aparece). Esto evita bloqueos por dominio no autorizado.
3. En moderación decide si permitirás invitados; ten presente que quizá debas aprobar sus mensajes.
4. Publica un comentario de prueba y comprueba su visibilidad en otra pestaña o dispositivo; si está en moderación, apruébalo en Disqus Admin.
5. Si usas bloqueadores de publicidad, prueba también con ellos desactivados: pueden impedir la carga de Disqus.

## Datos técnicos

- Foro: `https://laaraucanaobra.disqus.com/embed.js`
- Archivo de configuración: `js/comentarios-config.js`
- Página que aloja los comentarios: `opiniones.html`.
- Identificador de hilo constante: `la-araucana-tryo-2026-opiniones-publico`.
- Las opiniones del equipo no dependen de Disqus y se mantienen al actualizar la web.
- Los comentarios del público se gestionan externamente en Disqus; no se almacenan en el ZIP.
- Si abres la página haciendo doble clic desde tu computador (`file://`), los comentarios compartidos no cargarán; la prueba se hace con el enlace de Netlify.
- Disqus puede mostrar anuncios y procesa datos de usuarios según sus propias condiciones.

## Cuando recibas las opiniones restantes

Actualiza las tarjetas reservadas de `opiniones.html`, y sube la nueva carpeta al **mismo sitio de Netlify**. Los comentarios compartidos seguirán asociados al mismo hilo.
