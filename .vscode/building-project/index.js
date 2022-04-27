const container = [
    {
    id:1,
    img: "meme.png",
    },

    {
        id:2,
        img:'meme2.png',

    },
];

const inps = document.getElementById('top');
// const inps = document.getElementById('input');
const log = document.getElementById('Top');

const inp =  document.getElementById('bot');
const logged = document.getElementById('Bot')

const img  = document.getElementById('img');

const btn = document.querySelector(".btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
   console.log('hello');
   ShowMeme(currentItem);
});

function ShowMeme(){
    const item = container[currentItem];

//     //getting items from Array
    img.src = item.img;
}


//Button to allow to display random image 

btn.addEventListener('click', function() {
  currentItem =  Math.floor(Math.random() * container.length);
  ShowMeme(currentItem);
});

inps.addEventListener('change', function(e){
    log.textContent = e.target.value;
});

inp.addEventListener('change', function(e){
    logged.textContent = e.target.value;
})


//setting top Text


