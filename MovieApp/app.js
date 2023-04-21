const main = document.querySelector("#main");
const search = document.querySelector("#search");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e021cc096emsh82b5756aaff39d9p1a2c55jsn19e62f8fddc8',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
fetchData("Movie");
function fetchData(valSearch) {
    main.innerHTML = "";
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${valSearch}`, options)
	.then(response => response.json())
	.then(data=> {
        const list = data.d;
        list.map((item)=> {
            let class_rank;
            const name = item.l;
            const poster = item.i.imageUrl;
            let rank = item.rank;
            const years = item.yt;
            const authors = item.s;
            const category = item.q;
            if(rank == undefined) rank = "No Rank";
            if(rank == undefined) class_rank = "none";
            else if(rank < 250) class_rank = "green";
            else if(rank < 1000 && rank > 250) class_rank = "orange";
            else if(rank > 1000) class_rank = "red";
            const movie = document.createElement("div");
            movie.classList.add("movie");
            movie.innerHTML = `
            <img src="${poster}" alt="">
                <div class="movie-info">
                    <h2>${name}</h2>
                    <span class="${class_rank}">${rank}</span>
                </div>
                <div class="overview">
                    <h2>Overview</h2>
                    Years : ${years} <br>
                    Authors : ${authors} <br>
                    Category : ${category}
                </div>
            `;
            main.appendChild(movie);
        })
    })
	.catch(err => console.error(err));
}

search.addEventListener("keydown",(e)=> {

    if(e.key.lenght <= 1) {
        search.value += e.key;
    }

    if(e.code == "Enter") {
        const valSearch = search.value.trim("");
        if(valSearch == "") valSearch = "Movie";
        fetchData(valSearch);
    }
})