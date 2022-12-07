const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


function clickLike(event){
    //eventDefaul() interrompe il comportamento base dell'elemento
    event.preventDefault();
    this.classList.add('like-button--liked');
}
//seleziono il contenitore
const postsContainer = document.getElementById('container');
//faccio il ciclo e clono il template lateral
for (let i = 0; i < posts.length; i++){
    const post = posts[i];
    const template = document.getElementById('template').content.cloneNode(true);
    //imagine autore 
    template.querySelector('.profile-pic').src = post.author.image;
    template.querySelector('.profile-pic').alt = post.author.name;
    //info autore
    template.querySelector('.post-meta__author').innerHTML = post.author.name;
    template.querySelector('.post-meta__time').innerHTML = post.created;
    //contenuto post
    template.querySelector('.post__text').innerHTML = post.content;
    template.querySelector('.post__image > img').src = post.media;
    //seleziono il tasto "mi piace"
    template.querySelector('.js-like-button').setAttribute('data-postid', post.id);
    template.querySelector('.js-like-button').addEventListener('click', clickLike)
    //totale "mi piace"
    template.querySelector('.js-likes-counter').innerHTML = post.likes;
    //inietto il template nel container
    postsContainer.append(template);
}
