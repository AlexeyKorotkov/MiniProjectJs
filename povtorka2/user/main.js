// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)


// fetch('https://jsonplaceholder.typicode.com/users')
//     // .then(res=>res.json())
//     // .then(user=>console.log(user))
//     .then(res=>res.json())
//     .then((usersResponse)=>{
//         console.log(usersResponse);
//         let {users}=usersResponse
//         console.log(users);
//         for (const user of usersResponse) {
//
//
//             let div=document.createElement('div');
//             let name=document.createElement('h2');
//             name.innerText=user.name;
//             div.appendChild(name);
//             let id=document.createElement('p');
//             id.innerText=user.id;
//             div.appendChild(id)
//
//             document.body.appendChild(div);
//
//         }
//     });


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(user => console.log(user))
//     .then(value => value.json())
//     .then(({users}) => {
//
//         for (const user of users) {
//             let ul=document.getElementById('List');
//             let li=document.createElement('li');
//             let a=document.createElement('a');
//             a.innerText=`${user.name}-${user.id}`;
//             a.href='./user-details.html?value='+JSON.stringify(user);
//
//
//             ul.appendChild(li);
//         }
//
//     });


fetch('https://jsonplaceholder.typicode.com/users')

    .then(response => response.json())
    .then(users => {


        const usersContainer = document.getElementById('users');
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'user';
            userDiv.innerHTML = `
                        <h2>${user.id}: ${user.name}</h2>

                        <a href="../user-details/user-details.html?id/..=${user.id}">Details</a>
                    `;
            usersContainer.appendChild(userDiv);

        });
    });
