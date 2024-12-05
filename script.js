document.addEventListener("DOMContentLoaded", function() {
    // List of story files
    const stories = [
        { file: 'story1.html', description: 'Brief description or excerpt of Story 1...' },
        { file: 'story2.html', description: 'Brief description or excerpt of Story 2...' }
        // Add more stories here
    ];

    const storyTilesContainer = document.getElementById('story-tiles');
    
    // Check if the storyTilesContainer exists
    if (!storyTilesContainer) {
        console.error('Error: story-tiles element not found');
        return;
    }

    stories.forEach(story => {
        // Extract the title from the file name
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
});
