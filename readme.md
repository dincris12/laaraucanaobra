# La Araucana — Sitio educativo (2026)

Sitio web multipágina sobre **La Araucana** de Tryo Teatro Banda, presentada en la retrospectiva del Teatro Nacional Chileno entre el **11 y el 14 de noviembre de 2026**, en el marco de una celebración de sus **más de 25 años de trayectoria**. La compañía fue fundada en el año 2000; no corresponde hablar de su 30.º aniversario en 2026.

## Cómo verlo

1. Descomprime la carpeta completa.
2. Haz doble clic en `index.html` para abrirla en tu navegador.
3. Navega por las pestañas superiores. También puedes publicarla gratuitamente con GitHub Pages o Netlify (subiendo el contenido completo de la carpeta).

## Estructura

- `index.html` — Portada.
- `obra.html` — Sinopsis y lenguaje escénico.
- `ficha.html` — Ficha técnica y artística.
- `elenco.html` — Integrantes del elenco de 2026 y personajes mencionados en las fuentes.
- `galeria.html` — Dos fotografías compartidas para este proyecto, registros externos de 2026 y 2016 y enlaces a otras galerías.
- `brecht.html` — Comparación de recursos teatrales con el teatro épico de Brecht.
- `opiniones.html` — Opiniones publicadas de Cristóbal Dinamarca, Rodrigo Paredes, Nicolás Spier y Lucas von der Forst, un espacio pendiente, y comentarios compartidos del público mediante Disqus.
- `fuentes.html` — Fuentes, créditos y notas metodológicas.
- `css/styles.css`, `js/*.js` — Diseño e interactividad.

## Opiniones del equipo y de visitantes

- **Cristóbal Dinamarca**, **Rodrigo Paredes**, **Nicolás Spier** y **Lucas von der Forst** ya tienen sus opiniones publicadas íntegras.
- **Cristóbal Pliscoff** tiene un espacio reservado. **Sebastián Puig** no tiene espacio de opinión porque no pudo ver la obra.
- La sección «¿Viste la obra? Cuéntanos qué te pareció» está preparada para mostrar **comentarios compartidos mediante Disqus**.
- **Disqus ya está conectado en el código** con el shortname `laaraucanaobra` proporcionado por el equipo. El sistema requiere que el sitio esté publicado en Netlify y que Disqus autorice su dominio. En archivos locales (`file://`) se muestra un aviso de vista previa.
- El plan Basic de Disqus es gratuito con publicidad; se puede activar la publicación como invitado, pero los mensajes de invitados requieren aprobación.
- Revisa **`GUIA_PUBLICACION_Y_COMENTARIOS.md`** para instrucciones de Netlify + Disqus paso a paso.

## Fotografías

Las dos fotografías proporcionadas en esta conversación se guardan como `assets/funcion-foto-01.jpg` y `assets/funcion-foto-02.jpg`, se muestran en `galeria.html` y como adelanto en `index.html`, y funcionan sin conexión. Su autoría corresponde a **Lucas von der Forst**, integrante del grupo; no se asegura una hora o fecha exacta de captura. Además, se mantienen dos fotografías externas enlazadas desde DondeVoy/TMO (2026) y El Mostrador (2016), con atribución y enlaces de origen. **La autoría está acreditada. Confirmar autorización de publicación con el fotógrafo antes de compartir el sitio públicamente.**

## Fuentes y precisión

Se incluye un listado de referencias con enlaces en `fuentes.html`. Se usan créditos del remontaje 2026; las fuentes no precisan una asignación individual actor → personaje, por lo que no se inventa esa información. El apartado de Brecht es un análisis comparativo y no una afirmación de influencia directa.

## Personalización

- Editar colores: `css/styles.css` → variables `:root`.
- Editar textos: los archivos `.html` respectivos.
- Reemplazar imágenes remotas por imágenes autorizadas guardadas en `assets/`: cambiar la ruta de los atributos `src` en `index.html` y `galeria.html`.
- Agregar la opinión restante directamente a `opiniones.html`, reemplazando su espacio reservado. Los comentarios de Disqus son independientes.

## Pendiente antes de la entrega

- Incorporar la opinión personal definitiva restante del grupo (Cristóbal Pliscoff).
- Verificar y, si es posible, completar la correspondencia individual entre artistas y personajes (las fuentes generales no identifican qué actor interpreta cada papel).
- Confirmar el consentimiento del fotógrafo para publicar los registros en un sitio público.
- Curso: **Problemas de las Artes Escénicas Hoy**. Profesor: **Luis Ureta**. Integrantes: **Cristóbal Dinamarca, Rodrigo Paredes, Cristóbal Pliscoff, Nicolás Spier, Sebastián Puig y Lucas von der Forst**. Datos publicados en el pie de página y en `fuentes.html`.
