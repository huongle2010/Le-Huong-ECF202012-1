//  menu-scroll-down
 // Séléctionner l'éléments HTML 'menu' avec querySelector et le mettre dans une variable.
const menu = document.querySelector('.navbar');
 // créer une fonction qui se fixe en haut de la page lorsqu'on scroll-down au dela de 70 px
 function myfuntion(){
   // si on scroll-down le page au dela de 70px
   if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
     // le menu se fixe
     menu.classList.add('fixed-position');
   } else {
    menu.classList.remove('fixed-position');
   }
 }
 // Placer un 'micro' avec un addEventListener (click) sur document de HTML qui lancer la fonction
 document.addEventListener('scroll', myfuntion);

//  page de mesArtistes
const contents =[
    {
        id: '1',
        img: 'file:///C:/Users/Le%20Huong/Documents/Formation/certification/Le-Huong-ECF202012-1/image/joshGrobanHarmony.jpg',
        infor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        title: 'JoshGrobanHarmony',
        date: 'dd/mm/yy',
        place: 'Lorem ipsum dolor'
    },
    {
        id: '2',
        img: 'file:///C:/Users/Le%20Huong/Documents/Formation/certification/Le-Huong-ECF202012-1/image/samSmithAlbum.jpg',
        infor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
        title: 'Sam Smith',
        date: 'dd/mm/yy',
        place: 'Lorem ipsum dolor'
    },
    {
        id: '3',
        img: 'file:///C:/Users/Le%20Huong/Documents/Formation/certification/Le-Huong-ECF202012-1/image/nakamura.jpg',
        infor: 'Artiste française la plus écoutée hors de France, Aya Nakamura sort aujourdhui son nouvel album titré "AYA".  Et alors que son titre le plus connu, Djadja, flirte avec le milliard de vue sur internet, on imagine que ce troisième opus va faire danser la planéte avec ses tubes spontanés. Mais si on va pouvoir danser chacun chez soi sur ses nouveaux titres, annonce (attendue) de concerts à venir donnerait du baume au choeur à tous ceux qui rêvent de la voir en live et éclater sur ses musiques entêtantes et addictives.', 
        title: 'AYA NAKAMURA',
        date: 'dd/mm/yy',
        place: 'Lorem ipsum dolor'
    },
    {
        id: '4',
        img: 'file:///C:/Users/Le%20Huong/Documents/Formation/certification/Le-Huong-ECF202012-1/image/marialCarey.jpg',
        infor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        title: 'Marial Carey',
        date: 'dd/mm/yy',
        place: 'Lorem ipsum dolor'
    },
    {
        id: '5',
        img: 'file:///C:/Users/Le%20Huong/Documents/Formation/certification/Le-Huong-ECF202012-1/image/shay.jpg',
        infor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
        title: 'Shay',
        date: 'dd/mm/yy',
        place: 'Lorem ipsum dolor'
    },

]
const biographie = document.querySelector('.biographie')
const concert = document.querySelector('.concert')
const images = document.querySelectorAll('.imageFavourite img');

images.forEach ((image)=>{
    console.log(image.src);
    contents.forEach ((content) => {
        if (image.src === content.img){
               image.addEventListener ('click', (even) =>{
                biographie.innerHTML = "";
                concert.innerHTML ="";
                const card_biographie = `
                <img src=${content.img} alt="">
                <p>${content.infor}</p>
                `
                const card_concert = `
                <h5>Ses concerts</h5>
                <p>${content.title}
                        <br><span>${content.place}
                        <br>Le ${content.date}</span>
                        <br>${content.title}
                        <br><span>À ${content.place}
                        <br> Le ${content.date}</span>
                        <br>${content.title}
                        <br><span>À ${content.place}
                        <br>Le ${content.date}</span>
                    </p>
                `
                biographie.insertAdjacentHTML('beforeend', card_biographie);
                concert.insertAdjacentHTML('afterbegin', card_concert);
           });
        };
        });
    });
    
       


