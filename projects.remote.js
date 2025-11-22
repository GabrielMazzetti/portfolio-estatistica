// Carrega `projetos/projects.json` e renderiza os cards na página
(async function() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  try {
    const res = await fetch('projetos/projects.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('projects.json não encontrado');
    const projects = await res.json();

    if (!Array.isArray(projects) || projects.length === 0) {
      container.innerHTML = '<p>Nenhum projeto encontrado.</p>';
      return;
    }

    container.innerHTML = projects.map(p => {
      const chips = (p.tags || []).map(c => `<span>${escapeHtml(c)}</span>`).join('');
      const thumb = p.thumb ? `<div class="project-thumb"><img src="${p.thumb}" alt="${escapeHtml(p.title)}" /></div>` : '';
      return `
        <a class="project-card" href="${p.path}" target="_blank" rel="noopener">
          ${thumb}
          <div class="project-content">
            <h3>${escapeHtml(p.title)}</h3>
            <p>${escapeHtml(p.description || '')}</p>
            <div class="chips">${chips}</div>
          </div>
          <div class="pin">📌</div>
        </a>
      `;
    }).join('\n');

  } catch (err) {
    console.error(err);
    container.innerHTML = '<p>Erro ao carregar projetos.</p>';
  }

  function escapeHtml(s) {
    if (!s) return '';
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
})();
