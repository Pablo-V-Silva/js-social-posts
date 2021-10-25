const cards = [
  {
    id: 1,
    accountImage: 'https://picsum.photos/50/50',
    accountName: 'Olivia Rodrigo',
    imagePost: 'https://picsum.photos/880/330',
    likes: 80
  },
  {
    id: 2,
    accountImage: 'https://picsum.photos/51/51',
    accountName: 'Nasus il Gattopardo',
    imagePost: 'https://picsum.photos/880/331',
    likes: 20
  },
  {
    id: 3,
    accountImage: 'https://picsum.photos/49/49',
    accountName: 'Yoda il Temibile',
    imagePost: 'https://picsum.photos/880/329',
    likes: 12
  },
  {
    id: 4,
    accountImage: 'https://picsum.photos/52/52',
    accountName: "Stark l'Ineluttabile",
    imagePost: 'https://picsum.photos/881/330',
    likes: 123
  },
  {
    id: 5,
    accountImage: 'https://picsum.photos/48/48',
    accountName: "Bubba dal'Uganda",
    imagePost: 'https://picsum.photos/880/333',
    likes: 45
  },
]

const likedPost = []


for (let i = 0; i < cards.length; i++) {
  let card = cards[i];
  let post = `
  <div class="card w-50 mx-auto my-4 p-3">

      <div class="accountInfo d-flex align-items-center">
        <img class="rounded-circle" src="${card.accountImage}" alt="accountImage">
        <div class="px-4">
        <div>${card.accountName}</div>
        <div>4 mesi fa</div>
      </div>
      </div>

      <div class="post my-3 w-100 text-center">
        <img class=" rounded-3" src="${card.imagePost}" alt="post">
      </div>

      <div class="buttons d-flex justify-content-around align-items-center fs-3">
        <div class="like pointer">
          <i class="fas fa-thumbs-up"></i>
          <span>Like</span>
        </div>

        <div class="likeCounter">
          <span>Piace a ${card.likes} Persone</span>
        </div>
      </div>
  </div>`

  document.querySelector('main').insertAdjacentHTML('beforeend', post);

  const likeBtn = document.getElementsByClassName('like');

  like(likeBtn, card);

}

function like(button, card) {
  for (let i = 0; i < button.length; i++) {
    const like = button[i];
    like.addEventListener('click', function () {
      like.classList.add('liked');
      likedPost.push(card.id);
      console.log(likedPost);
    })
  }
}