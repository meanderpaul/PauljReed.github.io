document.addEventListener("DOMContentLoaded", function() {
    // Fetch and display short stories
    fetch('stories.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(stories => {
            const storyTilesContainer = document.getElementById('story-tiles');
            
            if (!storyTilesContainer) {
                console.error('Error: story-tiles element not found');
                return;
            }

            stories.forEach(story => {
                const storyTile = document.createElement('div');
                storyTile.className = 'story-tile';
                storyTile.innerHTML = `
                    <h3>${story.title}</h3>
                    <a href="${story.file}" class="read-now">Read Now</a>
                `;
                storyTilesContainer.appendChild(storyTile);
            });
        })
        .catch(error => {
            console.error('Error fetching stories:', error);
        });

    // Fetch and display books
    fetch('books.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(books => {
            const bookTilesContainer = document.getElementById('book-tiles');
            
            if (!bookTilesContainer) {
                console.error('Error: book-tiles element not found');
                return;
            }

            books.forEach(book => {
                const bookTile = document.createElement('div');
                bookTile.className = 'book-tile';
                bookTile.innerHTML = `
                    <h3>${book.title}</h3>
                `;
                bookTilesContainer.appendChild(bookTile);
            });
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });
});
