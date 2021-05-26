const meme = document.querySelectorAll('.get-meme');

console.log(meme)
console.log(data)
let memeToShow;
let alreadyHaveMeme = false;

let filter = ["lol", "meme", "star-wars", "cat", "images", "random", "dog", "funny", "NSFW", "Girl", "WTF", "Cryptocurrency", "Anime", "Manga", "Random", "Animals", "Anime-Waifu", "Awesome", "Car", "Comic", "Cosplay", "Gaming", "GIF", "Politics"]


const randomMeme = (memelist) => {
    memeToShow = memelist[Math.floor((Math.random() * memelist.length))].link;

    if (alreadyHaveMeme) {
        let memeDelete = document.querySelector(".meme-image");
        console.log(memeDelete)
        memeDelete.remove();
    }

    let areaToShow = document.querySelector(".result");
    let image = document.createElement('img');
    image.setAttribute("src", `${memeToShow}`)
    image.setAttribute("class", "meme-image")
    areaToShow.appendChild(image)
    alreadyHaveMeme = true;

    return memeToShow;
}

const getMeme = (language) => {
    let memeIsPortuguese;
    let cx;
    let key = data.apiKey;
    let responseApi;
    let memeIsDev = false;


    if (language == "en") {
        console.log('Meme in english comming up!')
        memeIsPortuguese = false;
        console.log(filter)
        filter = ["lol", "meme", "star-wars", "cat", "images", "random", "dog", "funny", "NSFW", "Girl", "WTF", "Cryptocurrency", "Anime", "Manga", "Random", "Animals", "Anime-Waifu", "Awesome", "Car", "Comic", "Cosplay", "Gaming", "GIF", "Politics"]
    }

    if (language == "pt") {
        console.log('Meme in portuguese comming up!')
        memeIsPortuguese = true;
        filter = ["lol", "meme", "star-wars", "cat", "images", "random", "dog", "funny", "NSFW", "Girl", "WTF", "Cryptocurrency", "Anime", "Manga", "Random", "Animals", "Anime-Waifu", "Awesome", "Car", "Comic", "Cosplay", "Gaming", "GIF", "Politics"]
    }

    if (language == "dev") {
        console.log('Meme in dev')
        memeIsDev = true
        memeIsPortuguese = false;
        filter = ["coding+memes", "developer+memes", "meme", "competition"]
        console.log(filter)
 
    }

    if (!memeIsPortuguese && !memeIsDev) {
        console.log('en')
        cx = data.searchEngineIdEn
    } else if (memeIsDev) {
        console.log('dev meme')
        cx = data.searchEngineIdDevEn
    } else {
        console.log('pt')
        cx = data.searchEngineIdPt
    } 

    fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${filter[Math.floor((Math.random() * filter.length))]}&searchType=image`).then(function (response) {
        return response.json();
    }).then(function (data) {
        var value = data;
        responseApi = value.items
        console.log(value);
        console.log(randomMeme(responseApi), 'meme aleatorio')
        return value
    })

}


meme.forEach(element => {
    element.addEventListener('click', function () {

        if (element.classList.contains('get-en-meme')) {
            getMeme("en")
        }

        if (element.classList.contains('get-pt-meme')) {
            getMeme("pt")
        }

        if (element.classList.contains('get-dev-meme')) {
            getMeme("dev")
        }


    }, false);
});




