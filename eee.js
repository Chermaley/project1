'use strict';
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {       
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
                   
    if(a != null && b != null && a.length < 50 && a != '' && b != '') {
        personalMovieDB.movies[a] = b; 
     
            
    }else{
        i--;
     }
    
            
}
console.log(personalMovieDB);
if (personalMovieDB.count < 10){
    console.log("Просмотрено мало фильмов!");    
}    else if(personalMovieDB.count > 10 && personalMovieDB.count<30) {
    console.log("Стандарт!!");        
}    else if(personalMovieDB.count > 30) {
    console.log("Задрот!!");    
     
}    else{
     console.log("Ошибка")
}