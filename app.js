const searchBtn = document.getElementById("search-btn");
const inputBar = document.getElementById("input-bar");
const songsBody = document.getElementById("songs-body");
searchBtn.addEventListener("click", () => {
    const inputedSongName = inputBar.value;
    console.log(inputedSongName);
    getSongInfo(inputedSongName);

})
let divs = "";
const getSongInfo = (songName) => {
    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
        .then(res => res.json())
        .then(datas => {
            console.log(datas);
            datas.data.forEach(song => {
                let div = `
                <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        <audio controls>
                        <source src= "${song.preview}">
                        </audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button class="btn btn-success">Get Lyrics</button>
                    </div>
                </div>`
               divs+=div;
            });
            songsBody.innerHTML = divs;    
        })
}