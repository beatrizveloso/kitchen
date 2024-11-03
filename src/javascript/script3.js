document.getElementById("search").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll(".items .item, .items .card");
    let hasResults = false;

    items.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(searchTerm)) {
            item.style.display = "block";
            hasResults = true;
        } else {
            item.style.display = "none";
        }
    });

    // Mostra a mensagem "Nenhum resultado encontrado" apenas se não houver resultados
    document.getElementById("no_results").style.display = hasResults ? "none" : "block";
});
