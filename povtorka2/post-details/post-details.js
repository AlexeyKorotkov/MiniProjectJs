const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const postDiv = document.getElementById('post');
        postDiv.innerHTML = JSON.stringify(post);
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        const commentsDiv = document.getElementById('comments');
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.innerHTML = JSON.stringify(comment);
            commentsDiv.appendChild(commentDiv);
        });
    });