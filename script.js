let btns = document.querySelectorAll('.btn');
let header = document.querySelector('.header h2');
let body = document.querySelector('.body');
let card = document.querySelector('.card');

let content = [
 {
     bg: 'background: url(assets/second.jpg), no-repeat; background-size: cover;',
     header: "Howdy Campers.. Welcome to your Personal lodgings",
     body: "This is the <span>first</span> type of lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima illo harum fugiat deleniti incidunt repudiandae vel repellat alias placeat",
 },
 {
     bg: 'background: url(assets/fifth.jpg), no-repeat; background-size: cover;',
     header: "Please kindly proceed to the next faction",
     body: "This is the <span>second</span> type of lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima illo harum fugiat deleniti incidunt repudiandae vel repellat alias placeat",
 },
 {
     bg: 'background: url(assets/first.jpg), no-repeat; background-size: cover;',
     header: "This is a safe space",
     body: "This is the <span>third</span> type of lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima illo harum fugiat deleniti incidunt repudiandae vel repellat alias placeat",
 },
 {
     bg: 'background: url(assets/fourth.jpg), no-repeat; background-size: cover;',
     header: "Do have a very pleasant experience",
     body: "This is the <span>fourth</span> type of lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima illo harum fugiat deleniti incidunt repudiandae vel repellat alias placeat",
 },
]

let counter = 0;

function display(){
 let current;
 if(counter > content.length - 1){
     counter = 0;
 }
 else if(counter < 0){
     counter = content.length - 1;
 }
 current = content[counter];
 header.innerHTML = current.header;
 body.innerHTML = current.body;
 card.style = current.bg;
}

btns.forEach(function(btn){
 btn.addEventListener('click', function(e){
     const classN = e.target.parentElement.className;
     if(classN.includes('next')){
         counter++
         display()
     }
     else{
         counter--
         display()
     }
 })
})