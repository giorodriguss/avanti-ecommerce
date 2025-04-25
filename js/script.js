// Mecanismo de busca
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const searchResult = document.getElementById('searchResult');
    const searchTerm = document.getElementById('searchTerm');
    
    searchButton.addEventListener('click', function() {
        handleSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    function handleSearch() {
        const term = searchInput.value.trim();
        if (term) {
            searchTerm.textContent = term;
            searchResult.classList.remove('hidden');
        } else {
            searchResult.classList.add('hidden');
        }
    }
});