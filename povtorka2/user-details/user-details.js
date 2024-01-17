const params = new URLSearchParams(window.location.search);
const userId = params.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userDiv = document.getElementById('user');
        userDiv.innerHTML = JSON.stringify(user);
    });

document.getElementById('loadPosts').addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/post`)
        .then(response => response.json())
        .then(posts => {
            const postsDiv = document.getElementById('posts');
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.innerHTML = `
                            <h2>${post.title}</h2>
                            <a href="../post-details/post-details.html?id=${post.id}">Details</a>
                        `;
                postsDiv.appendChild(postDiv);
            });
        });
});