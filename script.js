document.addEventListener("DOMContentLoaded", function() {
    // Fetch and display Stellar Universe stories
    fetch('stellar_universe_stories.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(stories => {
            const stellarUniverseContainer = document.getElementById('stellar-universe-stories');
            const latestStoryContainer = document.getElementById('latest-story');

            if (!stellarUniverseContainer || !latestStoryContainer) {
                console.error('Error: stellar-universe-stories or latest-story element not found');
                return;
            }

            // Sort stories by date to get the latest story
            stories.sort((a, b) => new Date(b.date) - new Date(a.date));
            const latestStory = stories[0];

            // Populate latest story
            latestStoryContainer.innerHTML = `
                <a href="${latestStory.file}" style="color: var(--text-color); text-decoration: none; display: block; padding: 1em; background-color: var(--light-color); border: 1px solid var(--dark-color); border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                    <h3 style="margin: 0;">${latestStory.title}</h3>
                </a>
            `;

            // Populate Stellar Universe stories
            stories.forEach(story => {
                const storyLink = document.createElement('a');
                storyLink.href = story.file;
                storyLink.textContent = story.title;
                storyLink.style = "display: block; text-decoration: none; color: var(--text-color);";
                stellarUniverseContainer.appendChild(storyLink);
            });
        })
        .catch(error => {
            console.error('Error fetching Stellar Universe stories:', error);
        });

    // Fetch and display separate stories
    fetch('separate_stories.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(stories => {
            const separateStoriesContainer = document.getElementById('separate-stories');

            if (!separateStoriesContainer) {
                console.error('Error: separate-stories element not found');
                return;
            }

            // Populate separate stories
            stories.forEach(story => {
                const storyLink = document.createElement('a');
                storyLink.href = story.file;
                storyLink.textContent = story.title;
                storyLink.style = "display: block; text-decoration: none; color: var(--text-color);";
                separateStoriesContainer.appendChild(storyLink);
            });
        })
        .catch(error => {
            console.error('Error fetching separate stories:', error);
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
                <a href="${latestBook.file}" style="color: var(--text-color); text-decoration: none; display: block; padding: 1em; background-color: var(--light-color); border: 1px solid var(--dark-color); border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                    <h3 style="margin: 0;">${latestBook.title}</h3>
                </a>
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
