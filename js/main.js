let searchInput = document.querySelector('#searchInput');

let popular = [];
let nowPlaying = [];
let toprating = [];
let trending = [];
let upcoming = [];

let passInput = document.querySelector("#passInput");
let ageInput = document.querySelector("#ageInput");
let phoneInput = document.querySelector("#phoneInput");
let emailInput = document.querySelector("#emailInput");
let nameInput = document.querySelector("#nameInput");
let repassInput = document.querySelector("#repassInput");
let submitBtn = document.querySelector("#submitBtn");


function openSideNavBar() {
    $(".navbar-menu").animate({
        left: 0
    }, 500);
    $(".icon-open-close").removeClass("fa-align-justify").addClass("fa-x");
    for (let i = 0; i < 6; i++) {
        $(".links li").eq(i).animate({
            top: 0
        }, (i + 5) *100);
    }
}

function closeSideNavBar() {
    let navTabWidth = $(".nav-tab").outerWidth();
    $(".navbar-menu").animate({
        left: -navTabWidth
    }, 500);
    $(".icon-open-close").addClass("fa-align-justify").removeClass("fa-x");
    $(".links li").animate({
        top: 300
    }, 500);
}

closeSideNavBar();

$(".navbar-menu i.icon-open-close").on("click", function () {
    if ($(".navbar-menu").css("left") == "0px") {
        //nav bar is opened
        closeSideNavBar();
    } else {
        //nav bar is closed
        openSideNavBar();
    }
});

$(document).on("mouseenter", ".card", function () {
    setTimeout(hoverIn, 0);
});

function hoverIn() {
    $(".layer").removeClass("animate__slideOutLeft animate__animated");
    $(".nameOfMovie").addClass("animate__animated animate__fadeInDown");
    $(".descOfMovie").addClass("animate__animated animate__bounce");
    $(".releaseDate").addClass("animate__animated animate__slideInUp");
    $(".rate").addClass("animate__animated animate__slideInUp");
    $(".circleRate").addClass("animate__animated animate__slideInUp");
}

$(document).on("mouseleave", ".card", function () {
    setTimeout(hoverout, 0);
});

function hoverout() {
    $(".nameOfMovie").removeClass("animate__animated animate__fadeInDown");
    $(".descOfMovie").removeClass("animate__animated animate__bounce");
    $(".layer").addClass("animate__animated animate__slideOutLeft");
    $(".releaseDate").removeClass("animate__animated animate__slideInUp");
    $(".rate").removeClass("animate__animated animate__slideInUp");
    $(".circleRate").removeClass("animate__animated animate__slideInUp");
}



// loading

$(function (e) {
    $(".loader").fadeOut(1000);
    $(".loading").fadeOut(1000);
    $("body").removeClass("overflow-hidden")
})

//popular

async function getMoviesPopularty() {
    let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    let data = await response.json();
    popular = data.results;
    forLoop(data.results);

}


document.querySelector('#popular').addEventListener('click', function (e) {
    console.log('the link of popular is clicked');
    getMoviesPopularty();
})

//top rating

async function getTopRating() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGNlZGQxZGNkNTljMWU4NzYzNzFiOWFjMmJjMTczZCIsIm5iZiI6MTcyMTQyODgzOS43Mzc4MzQsInN1YiI6IjY2OTk0YjA4ZGQ5YTgyNjk1MWMxODZmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kjhn57dcXox5YCczLErpHzANu17OIM3-zCUit6BBWXI'
        }
    };
    let response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options);
    let data = await response.json();
    console.log('top rating is :', data.results);
    toprating = data.results
    forLoop(data.results)

}

document.querySelector("#topRating").addEventListener('click', function (e) {
    console.log('the link of top rating is clicked');
    getTopRating();
})

//upComing

async function getUpComingMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGNlZGQxZGNkNTljMWU4NzYzNzFiOWFjMmJjMTczZCIsIm5iZiI6MTcyMTQyODgzOS43Mzc4MzQsInN1YiI6IjY2OTk0YjA4ZGQ5YTgyNjk1MWMxODZmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kjhn57dcXox5YCczLErpHzANu17OIM3-zCUit6BBWXI'
        }
    };
    let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
    let data = await response.json();
    console.log('upcoming movies is :', data.results);
    upcoming = data.results
    forLoop(data.results)

}


document.querySelector("#upcoming").addEventListener("click", function (e) {

    getUpComingMovies();
})

//trending

async function getTrendingMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGNlZGQxZGNkNTljMWU4NzYzNzFiOWFjMmJjMTczZCIsIm5iZiI6MTcyMTQyODgzOS43Mzc4MzQsInN1YiI6IjY2OTk0YjA4ZGQ5YTgyNjk1MWMxODZmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kjhn57dcXox5YCczLErpHzANu17OIM3-zCUit6BBWXI'
        }
    };

    let response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);
    let data = await response.json();
    console.log('trending movies is', data.results);
    trending = data.results;
    forLoop(data.results)

}


document.querySelector('#trending').addEventListener("click", function (e) {
    getTrendingMovies();
})

//NOW PLAYING
async function getNowPlayingMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGNlZGQxZGNkNTljMWU4NzYzNzFiOWFjMmJjMTczZCIsIm5iZiI6MTcyMTQyODgzOS43Mzc4MzQsInN1YiI6IjY2OTk0YjA4ZGQ5YTgyNjk1MWMxODZmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kjhn57dcXox5YCczLErpHzANu17OIM3-zCUit6BBWXI'
        }
    };

    let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    let data = await response.json();
    nowPlaying = data.results;
    forLoop(data.results)

}
getNowPlayingMovies();

document.querySelector("#nowPlaying").addEventListener("click", function (e) {
    getNowPlayingMovies();
})

function forLoop(arr) {
    let cartoona = '';
    for (let i = 0; i < arr.length; i++) {
        let voteAverage = parseFloat(arr[i].vote_average.toFixed(1));
        cartoona += `<div class="col-lg-4 mb-5 rounded-1">
                        <div class="card position-relative overflow-hidden">
                            <img src="https://image.tmdb.org/t/p/w1280${arr[i].backdrop_path}" alt="Image of ${arr[i].title || arr[i].name}">
                            <div class="layer position-absolute p-3">
                                <p class="nameOfMovie text-center">${arr[i].title || arr[i].name}</p>
                                <p class="descOfMovie">${arr[i].overview}</p>
                                <p class="releaseDate py-2">Release date: ${arr[i].release_date || arr[i].first_air_date}</p>
                                <div class="rate d-flex">
                                    <i class="fa-solid fa-star pe-1"></i>
                                    <i class="fa-solid fa-star pe-1"></i>
                                    <i class="fa-solid fa-star pe-1"></i>
                                    <i class="fa-solid fa-star-half-stroke pe-1"></i>
                                </div>
                                <div class="circleRate my-3">
                                    <p class="NumberRate  p-1 m-0">${voteAverage}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
        
    }

    document.querySelector(".row").innerHTML = cartoona;

}

//formmmmmmmmmmmmmmmmmmmmmmm


nameInput.addEventListener("input", function (e) {
    validation(nameInput);
});
passInput.addEventListener("input", function (e) {
    validation(passInput);
});
ageInput.addEventListener("input", function (e) {
    validation(ageInput);
});
phoneInput.addEventListener("input", function (e) {
    validation(phoneInput);
});
emailInput.addEventListener("input", function (e) {
    validation(emailInput);
});
repassInput.addEventListener("input", function (e) {
    validation(repassInput);
});

function validation(element) {
    var regex = {
        nameInput: /^[A-Za-z\s]{1,50}$/,
        emailInput: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phoneInput: /^01[0125][0-9]{8}$/,
        passInput: /^[a-zA-Z0-9!@#$%^&*]{8,}$/,
        repassInput: /^[a-zA-Z0-9!@#$%^&*]{8,}$/,
        ageInput: /^(?:1[7-9]|[2-5][0-9])$/
    };

    if (regex[element.id].test(element.value)) {
        if (element.id === "passInput") {
            passInput.nextElementSibling.classList.add('d-none');
            $(submitBtn).removeClass('bg-danger');
        }
        if (element.id === "emailInput") {
            emailInput.nextElementSibling.classList.add('d-none');
            $(submitBtn).removeClass('bg-danger');
        }
        if (element.id === "nameInput") {
            nameInput.nextElementSibling.classList.add('d-none');
            $(submitBtn).removeClass('bg-danger');
        }
        if (element.id === "phoneInput") {
            phoneInput.nextElementSibling.classList.add('d-none');
            $(submitBtn).removeClass('bg-danger');
        }
        if (element.id === "ageInput") {
            ageInput.nextElementSibling.classList.add('d-none');
            $(submitBtn).removeClass('bg-danger');
        }


        if (passInput.value !== '' && repassInput.value !== '' && passInput.value === repassInput.value) {
            passInput.classList.remove('border-danger');
            repassInput.classList.remove('border-danger');
            passInput.nextElementSibling.classList.add('d-none');
            $(submitBtn).removeClass('bg-danger')
        } else if (passInput.value !== '' && repassInput.value !== '' && passInput.value !== repassInput.value) {
            passInput.classList.add('border-danger');
            repassInput.classList.add('border-danger');
            passInput.nextElementSibling.classList.remove('d-none');
            repassInput.nextElementSibling.classList.remove("d-none")
            $(submitBtn).addClass('bg-danger');
        }


    } else {
        if (element.id === "passInput") {
            passInput.nextElementSibling.classList.remove('d-none');
        }

        if (element.id === 'emailInput') {
            emailInput.nextElementSibling.classList.remove("d-none");
        }
        if (element.id === 'nameInput') {
            nameInput.nextElementSibling.classList.remove("d-none");
        }
        if (element.id === 'phoneInput') {
            phoneInput.nextElementSibling.classList.remove("d-none");
        }
        if (element.id === 'ageInput') {
            ageInput.nextElementSibling.classList.remove("d-none");
        }

        $(submitBtn).addClass('bg-danger');
        $(submitBtn).addClass('animate__animated animate__shakeX')


    }
}


function clearForm() {
    nameInput.value = ''
    emailInput.value = ''
    phoneInput.value = ''
    ageInput.value = ''
    passInput.value = ''
    repassInput.value = ''

    submitBtn.classList.remove("bg-success");
}


function validateForm() {
    let isValid = true;
    [nameInput, emailInput, phoneInput, ageInput, passInput, repassInput].forEach(input => {
        validation(input);
        if (!input.nextElementSibling.classList.contains('d-none') ||
            (input.id === 'passInput' && passInput.value !== repassInput.value)) {
            isValid = false;
        }
    });

    if (isValid) {
        console.log('succcccc');
        submitBtn.classList.add("bg-success");
        setTimeout(clearForm, 500)



    }
}

submitBtn.addEventListener("click", function (e) {

    validateForm();


});


//search


async function search() {
    const query = searchInput.value ;
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${encodeURIComponent(query)}`);
    let data = await response.json();
    let searchResult = data.results;
    // console.log(searchResult);
    forLoop(searchResult);
}


searchInput.addEventListener('input', search);



//scroll



$(window).on('scroll',function(e){
    wScroll=$(window).scrollTop();
    console.log(wScroll);
    if(wScroll>150){
        $(".back").fadeIn(1000);
    }else{
        $(".back").fadeOut(500);
    }
 
})

$(".back").on('click',function(e){
  
    $('html').scrollTop(0);
})


$("#contactUs").on('click',function(e){
    let contactOFF=$("#contactUs").offset().top;
    console.log(contactOFF);
    $('html').scrollTop(contactOFF*16.9);

})
$(".link").on('click',function(e){
   
    $('html').scrollTop(0);

})




