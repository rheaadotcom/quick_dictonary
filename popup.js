document.getElementById('search').addEventListener('click', () => {
    const word = document.getElementById('word').value.trim();
    if (word) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
          const meaning = data[0]?.meanings[0]?.definitions[0]?.definition;
          document.getElementById('result').innerText = meaning || 'Definition not found';
        })
        .catch(() => {
          document.getElementById('result').innerText = 'Error retrieving definition';
        });
    } else {
      document.getElementById('result').innerText = 'Please enter a word';
    }
  });
  