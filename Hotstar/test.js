let movies = [
    {
        name: "falcon and the winter soldier",
        des: 
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, eligendi. Inventore corporis neque earum commodi aliquid libero maiores aut ducimus!",
        image: "images/slider 2.png"
    },
    {
        name: "loki",
        des: 
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, eligendi. Inventore corporis neque earum commodi aliquid libero maiores aut ducimus!",
        image: "images/slider 1.png"
    },
    {
        name: "wanda vision",
        des: 
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, eligendi. Inventore corporis neque earum commodi aliquid libero maiores aut ducimus!",
        image: "images/slider 3.png"
    },
    {
        name: "raya and the last dragon",
        des: 
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, eligendi. Inventore corporis neque earum commodi aliquid libero maiores aut ducimus!",
        image: "images/slider 4.png"
    },
    {
        name: "luca",
        des: 
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, eligendi. Inventore corporis neque earum commodi aliquid libero maiores aut ducimus!",
        image: "images/slider 5.png"
    }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the current slide index

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    //create DOM Elements
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let carousel = document.createElement("div");

    //attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting elements classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if(sliders.length)
    {
        sliders[0].style.marginLeft = 'calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)';
    }
};

for(let i=0; i<3; i++)
{
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disney+ Clone</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
    <nav class="navbar">
        <img src="images/logo.png" class="brand-logo" alt="" />
        <ul class="nav-links">
            <li class="nav-items"><a href="tv.html">TV</a></li>
            <li class="nav-items"><a href="#">Movies</a></li>
            <li class="nav-items"><a href="#">Sports</a></li>
            <li class="nav-items"><a href="#">Premium</a></li>
        </ul>
        <div class="right-container">
            <input type="text" class="search-box" placeholder="search"/>
            <button class="sub-btn">subscribe</button>
            <a href="#" class="login-link">Login</a>
        </div>
    </nav>

    <div class="caraousel-container">
        <div class="caraousel">
            <div class="slider">
                <div class="slide-content">
                    <h1 class="movie-title">Loki</h1>
                    <p class="movie-des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nesciunt, nihil praesentium esse dolores ullam?</p>

                </div>
                <img src="images/slider 1.PNG" alt="">
            </div>
        </div>
    </div>
    <div class="video-card-container">
        <div class="video-card">
            <img src="images/disney.PNG" class="video-card-image" alt="">
            <video src="videos/disney.mp4" muted loop class="card-video"></video>
        </div>
        <div class="video-card">
            <img src="images/pixar.PNG" class="video-card-image" alt="">
            <video src="videos/pixar.mp4" muted loop class="card-video"></video>
        </div>
        <div class="video-card">
            <img src="images/marvel.PNG" class="video-card-image" alt="">
            <video src="videos/marvel.mp4" muted loop class="card-video"></video>
        </div>
        <div class="video-card">
            <img src="images/disney.PNG" class="video-card-image" alt="">
            <video src="videos/disney.mp4" muted loop class="card-video"></video>
        </div>
        <div class="video-card">
            <img src="images/geographic.PNG" class="video-card-image" alt="">
            <video src="videos/geographic.mp4" muted loop class="card-video"></video>
        </div>
    </div>
    <h1 class="title">Recommended For You</h1>
    <div class="movies-list">
        <button class="pre-btn" title="btn"><img src="images/pre.png" alt=""></button>
        <button class="nxt-btn" title="btn"><img src="images/nxt.png" alt=""></button>
        <div class="card-container">
            <div class="card">
                <img src="images/poster 1.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 2.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>

            <div class="card">
                <img src="images/poster 3.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 4.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 5.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 6.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 7.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 8.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 9.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 10.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 11.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
            <img src="images/poster 12.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
        </div>
    </div>
<h1 class="title">Popular Shows</h1>
<div class="movies-list">
    <button class="pre-btn" title="btn"><img src="images/pre.png" alt=""></button>
    <button class="nxt-btn" title="btn"><img src="images/nxt.png" alt=""></button>
    <div class="card-container">
        <div class="card">
            <img src="images/poster 12.png" class="card-img" alt="">
            <div class="card-body">
                <h2 class="name">movie name</h2>
                <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                <button class="watchlist-btn">add to watchlist</button>
            </div>
        </div>
        <div class="card">
            <img src="images/poster 11.png" class="card-img" alt="">
            <div class="card-body">
                <h2 class="name">movie name</h2>
                <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                <button class="watchlist-btn">add to watchlist</button>
            </div>
        </div>
        <div class="card">
            <img src="images/poster 10.png" class="card-img" alt="">
            <div class="card-body">
                <h2 class="name">movie name</h2>
                <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                <button class="watchlist-btn">add to watchlist</button>
            </div>
        </div>
        <div class="card">
            <img src="images/poster 9.png" class="card-img" alt="">
            <div class="card-body">
                <h2 class="name">movie name</h2>
                <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                <button class="watchlist-btn">add to watchlist</button>
            </div>
        </div>
        <div class="card">
            <img src="images/poster 8.png" class="card-img" alt="">
            <div class="card-body">
                <h2 class="name">movie name</h2>
                <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                <button class="watchlist-btn">add to watchlist</button>
            </div>
        </div>
        <div class="card">
            <img src="images/poster 7.png" class="card-img" alt="">
            <div class="card-body">
                <h2 class="name">movie name</h2>
                <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                <button class="watchlist-btn">add to watchlist</button>
            </div>
        </div>
        <div class="card">
            <img src="images/poster 6.png" class="card-img" alt="">
            <div class="card-body">
                <h2 class="name">movie name</h2>
                <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                <button class="watchlist-btn">add to watchlist</button>
            </div>
        </div>
        <div class="card">
            <img src="images/poster 5.png" class="card-img" alt="">
            <div class="card-body">
                <h2 class="name">movie name</h2>
                <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                <button class="watchlist-btn">add to watchlist</button>
            </div>
        </div>
        <div class="card">
            <img src="images/poster 4.png" class="card-img" alt="">
            <div class="card-body">
                <h2 class="name">movie name</h2>
                <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                <button class="watchlist-btn">add to watchlist</button>
            </div>
        </div>
        <div class="card">
            <img src="images/poster 3.png" class="card-img" alt="">
            <div class="card-body">
                <h2 class="name">movie name</h2>
                <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                <button class="watchlist-btn">add to watchlist</button>
            </div>
        </div>
        <div class="card">
            <img src="images/poster 2.png" class="card-img" alt="">
            <div class="card-body">
                <h2 class="name">movie name</h2>
                <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                <button class="watchlist-btn">add to watchlist</button>
            </div>
        </div>
        <div class="card">
            <img src="images/poster 1.png" class="card-img" alt="">
            <div class="card-body">
                <h2 class="name">movie name</h2>
                <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                <button class="watchlist-btn">add to watchlist</button>
            </div>
        </div>
    </div>
</div>

<h1 class="title">Top Picks For You</h1>
    <div class="movies-list">
        <button class="pre-btn" title="btn"><img src="images/pre.png" alt=""></button>
        <button class="nxt-btn" title="btn"><img src="images/nxt.png" alt=""></button>
        <div class="card-container">
            <div class="card">
                <img src="imagesn/baaghi3.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="imagesn/hatestory2.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="imagesn/chichore.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="imagesn/housefull4.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="imagesn/totaldhamaal.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="imagesn/tanhaji.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="imagesn/bhool bhulaiyaa.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="imagesn/missionmangal.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="imagesn/msdhoni.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="imagesn/badhaiho.webp class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
                <img src="imagesn/super30.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
            <div class="card">
            <img src="imagesn/hatestory3.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Movie Name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet.</h6>
                    <button class="watchlist-btn">add to wishlist</button>
                </div>
            </div>
        </div>
    </div>

    <h1 class="title">New On Disney+ Hotstar</h1>
    <div class="movies-list">
        <button class="pre-btn" title="btn"><img src="images/pre.png" alt=""></button>
        <button class="nxt-btn" title="btn"><img src="images/nxt.png" alt=""></button>
        <div class="card-container">
            <div class="card">
                <img src="images/p1.webp" class="card-img" alt="">
                <div class="card-body">
                    <h2 class="name">movie name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/p2.webp" class="card-img" alt="">
                <div class="card-body">
                    <h2 class="name">movie name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 3.png" class="card-img" alt="">
                <div class="card-body">
                    <h2 class="name">movie name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 9.png" class="card-img" alt="">
                <div class="card-body">
                    <h2 class="name">movie name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 8.png" class="card-img" alt="">
                <div class="card-body">
                    <h2 class="name">movie name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 7.png" class="card-img" alt="">
                <div class="card-body">
                    <h2 class="name">movie name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 6.png" class="card-img" alt="">
                <div class="card-body">
                    <h2 class="name">movie name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 5.png" class="card-img" alt="">
                <div class="card-body">
                    <h2 class="name">movie name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 4.png" class="card-img" alt="">
                <div class="card-body">
                    <h2 class="name">movie name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 3.png" class="card-img" alt="">
                <div class="card-body">
                    <h2 class="name">movie name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 2.png" class="card-img" alt="">
                <div class="card-body">
                    <h2 class="name">movie name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="images/poster 1.png" class="card-img" alt="">
                <div class="card-body">
                    <h2 class="name">movie name</h2>
                    <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
        </div>
    </div>
    
<script src="index.js" async></script>
</body>
</html>


