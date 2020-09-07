'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
 
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function showMyDB(hidden){
    if (!hidden){
    console.log(personalMovieDB);
    }}

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {       
        const a = prompt('Один из последних просмотренных фильмов?', ''),
             b = prompt('На сколько оцените его?', '');
                           
             if(a != null && b != null && a.length < 50 && a != '' && b != '') {
                personalMovieDB.movies[a] = b; 
             
                    
          }else{
           i--;
            }
            
                    
        }
    }
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено мало фильмов!");    
    }    else if(personalMovieDB.count > 10 && personalMovieDB.count<30) {
        console.log("Стандарт!!");        
    }    else if(personalMovieDB.count > 30) {
        console.log("Задрот!!");    
         
    }    else{
         console.log("Ошибка");
    }
    
}
function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre; 
    }
    
}
detectPersonalLevel();

rememberMyFilms();
start();
showMyDB(personalMovieDB.privat);
writeYourGenres();