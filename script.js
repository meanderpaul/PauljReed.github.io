document.addEventListener("DOMContentLoaded", function() {
    fetch('stories.json')
        .then(response => response.json())
        .then(stories => {
            const storyTilesContainer = document.getElementById('story-tiles');
            
            if (!storyTilesContainer) {
                console.error('Error: story-tiles element not found');
                return;
            }

            stories.forEach(story => {
                const title = story.file.replace('.html', '').replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
                
                const storyTile = document.createElement('a');
                storyTile.href = `stories/${story.file}`;
                storyTile.className = 'story-tile';
                storyTile.innerHTML = `
                    <h3>${title}</h3>
                    <p>${story.description}</p>
                `;
                storyTilesContainer.appendChild(storyTile);
            });
        })
        .catch(error => {
            console.error('Error fetching stories:', error);
        });
});
