document.getElementById('github-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('User not found');
        
        const data = await response.json();
        displayUserCard(data);
    } catch (error) {
        alert(error.message);
    }
}); 
 
function displayUserCard(data) {
    const card = document.getElementById('user-card');
    
    card.innerHTML = `
        <img src="${data.avatar_url}" alt="${data.login}'s avatar" width="100">
        <h2>${data.name || 'No name provided'}</h2>
        <p>Username: ${data.login}</p>
        <p>Public Repos: ${data.public_repos}</p>
        <p>Public Gists: ${data.public_gists}</p>
        <p>Profile Created At: ${new Date(data.created_at).toISOString().split('T')[0]}</p>
    `;
    
    card.style.display = 'block';
}
