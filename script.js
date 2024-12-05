document.addEventListener("DOMContentLoaded", function() {
    // List of story files and their titles
    const stories = [
        { file: 'story1.html', title: 'Story Title 1', description: 'Brief description or excerpt of Story 1...' },
        { file: 'story2.html', title: 'Story Title 2', description: 'Brief description or excerpt of Story 2...' },
        // Add more stories here
    ];

    const storyTilesContainer = document.getElementById('story-tiles');

    stories.forEach(story => {
        const storyTile = document.createElement('a');
        storyTile.href = `stories/${story.file}`;
        storyTile.className = 'story-tile';
        storyTile.innerHTML = `
            <h3>${story.title}</h3>
            <p>${story.description}</p>
        `;
        storyTilesContainer.appendChild(storyTile);
    });
});
