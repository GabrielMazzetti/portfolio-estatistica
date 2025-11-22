// Lista dos projetos com título e descrição
// Você pode editar aqui sempre que adicionar um novo projeto
const projetos = [
    {
        pasta: "estatistica-descritiva",
        titulo: "Estatística Descritiva",
        descricao: "Medidas de tendência central, dispersão, gráficos e análise básica de dados."
    },
    {
        pasta: "modelagem",
        titulo: "Modelagem Estatística",
        descricao: "Ajuste de modelos, regressão e técnicas preditivas."
    },
    {
        pasta: "inferencia",
        titulo: "Inferência Estatística",
        descricao: "Intervalos de confiança, testes de hipóteses e quantidades pivotais."
    }
];

// Renderização
const container = document.getElementById("projects-container");

projetos.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3 class="card-title">${p.titulo}</h3>
        <p class="card-desc">${p.descricao}</p>
        <a href="projetos/${p.pasta}/index.html">Acessar Projeto</a>
    `;
    container.appendChild(card);
});
