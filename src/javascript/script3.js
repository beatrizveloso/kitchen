document.getElementById("search").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const searchWords = searchTerm.split(" ").filter(word => word); // Divide o termo de pesquisa em palavras e remove espaços em branco
    const items = document.querySelectorAll(".items .item, .items .card");
    let hasResults = false;

    // Função para remover acentos
    const normalizeText = text => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    items.forEach(item => {
        const itemText = normalizeText(item.textContent.toLowerCase());
        // Verifica se todas as palavras de busca estão no texto do item
        const match = searchWords.every(word => itemText.includes(normalizeText(word)));
        
        if (match) {
            item.style.display = "block";
            hasResults = true;
        } else {
            item.style.display = "none";
        }
    });

    // Mostra a mensagem "Nenhum resultado encontrado" apenas se não houver resultados
    document.getElementById("no_results").style.display = hasResults ? "none" : "block";
});
