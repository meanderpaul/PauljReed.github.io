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
            const latestStoryContainer = document.getElementById('latest-story');

            if (!storyTilesContainer || !latestStoryContainer) {
                console.error('Error: story-tiles or latest-story element not found');
                return;
            }

            // Sort stories by date to get the latest story
            stories.sort((a, b) => new Date(b.date) - new Date(a.date));
            const latestStory = stories[0];

            // Populate latest story
            latestStoryContainer.innerHTML = `
                <h3>${latestStory.title}</h3>
                <a href="${latestStory.file}" class="read-now">Read Now</a>
            `;

            // Populate story tiles
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
            const latestBookContainer = document.getElementById('feature-book');

            if (!bookTilesContainer || !latestBookContainer) {
                console.error('Error: book-tiles or feature-book element not found');
                return;
            }

            // Sort books by date to get the latest book
            books.sort((a, b) => new Date(b.date) - new Date(a.date));
            const latestBook = books[0];

            // Populate latest book
            latestBookContainer.innerHTML = `
                <h3>${latestBook.title}</h3>
                <a href="${latestBook.file}" class="read-now">Read Now</a>
            `;

            // Populate book tiles
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
