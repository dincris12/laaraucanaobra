/* Carga el hilo de Disqus en opiniones.html una sola vez. */
(function () {
  const thread = document.getElementById('disqus_thread');
  const status = document.getElementById('commentSystemStatus');
  const cfg = window.LA_ARAUCANA_COMMENTS || {};
  if (!thread || !status) return;

  const say = (msg, state) => { status.textContent = msg; status.dataset.state = state || ''; };

  if (!cfg.shortname) { say('Los comentarios compartidos aún no están configurados.', 'error'); return; }
  if (location.protocol === 'file:') {
    say('Vista previa local: los comentarios compartidos se cargan solo cuando el sitio está publicado en Netlify.', 'info');
    return;
  }
  if (document.querySelector('script[data-disqus-embed]')) return;

  const pageUrl = location.origin + location.pathname;
  window.disqus_config = function () {
    this.page.url = pageUrl;
    this.page.identifier = cfg.identifier;
    this.page.title = cfg.title || document.title;
    this.language = 'es';
  };

  say('Cargando comentarios…', 'loading');
  const s = document.createElement('script');
  s.src = 'https://' + cfg.shortname + '.disqus.com/embed.js';
  s.async = true;
  s.dataset.disqusEmbed = 'true';
  s.setAttribute('data-timestamp', String(Date.now()));
  s.onload = () => { status.hidden = true; };
  s.onerror = () => say('No se pudieron cargar los comentarios. Si usas un bloqueador de anuncios o rastreadores, desactívalo para esta página e inténtalo de nuevo.', 'error');
  (document.head || document.body).appendChild(s);
})();
