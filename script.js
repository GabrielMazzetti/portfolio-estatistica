const projetos = [
    {
        pasta: "estatistica-descritiva",
        titulo: "Estatística Descritiva",
        descricao: "Medidas de tendência central, dispersão, gráficos e análises básicas."
    },
    {
        pasta: "modelagem",
        titulo: "Modelagem Estatística",
        descricao: "Ajuste de modelos, regressão e técnicas preditivas."
    },
    {
        pasta: "inferencia",
        titulo: "Inferência Estatística",
        descricao: "Testes de hipóteses, intervalos de confiança e quantidades pivotais."
    }
];

const container = document.getElementById("projects-container");

projetos.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3 class="card-title">${p.titulo}</h3>
        <p class="card-desc">${p.descricao}</p>
        <a href="projetos/${p.pasta}/index.html">Ver Projeto</a>
    `;
    container.appendChild(card);
});
