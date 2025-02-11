document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const language = document.querySelector('input[name="language"]:checked');
    if (!language) {
        alert('Please select an option.');
        return;
    }
    
    const votedLanguage = language.value;
    document.getElementById('pollResult').innerText = 'You voted for ' + votedLanguage;
});
