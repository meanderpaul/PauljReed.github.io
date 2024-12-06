document.addEventListener("DOMContentLoaded", function() {
    // Fetch the latest short story
    fetch('stories.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(stories => {
            const latestStory = stories[stories.length - 1]; // Get the latest story
            const latestStoryContainer = document.getElementById('latest-story');
            
            if (!latestStoryContainer) {
                console.error('Error: latest-story element not found');
                return;
            }

            latestStoryContainer.innerHTML = `
                <h3>${latestStory.title}</h3>
                <p>${latestStory.description}</p>
                <a href="${latestStory.file}">Read More</a>
            `;
        })
        .catch(error => {
            console.error('Error fetching stories:', error);
        });

    // Fetch the latest book
    fetch('books.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(books => {
            const latestBook = books[books.length - 1]; // Get the latest book
            const latestBookContainer = document.getElementById('feature-book');
            
            if (!latestBookContainer) {
                console.error('Error: feature-book element not found');
                return;
            }

            latestBookContainer.innerHTML = `
                <h3>${latestBook.title}</h3>
                <p>${latestBook.description}</p>
                <a href="${latestBook.file}">Read More</a>
            `;
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });
});
