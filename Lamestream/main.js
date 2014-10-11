//Enter Stopper
$(document).ready(function() {
    $(window).keydown(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
});
var shit = new Array('rebecca black', 'black dice', 'j dash');
var random = Math.floor(Math.random() * shit.length);
random = shit[random]; // 2
var band_input = "nickelback";
var song = " lsnflg";

function findVid(origBand, seedBand) {
    var ind = Math.random() * 20;
    var songURL;
    var newBand;
    //song from the seed band
    $.ajax({
        url: 'http://developer.echonest.com/api/v4/artist/video',
        data: {
            api_key: 'W9CSEGPKN4RQJBFQW',
            name: seedBand,
            format: 'json',
            results: 1,
            start: 0
        },
        type: 'GET',
        dataType: 'json',
        success: function(result) {
            console.log(result);
            songURL = result.response.video[0].url;
            console.log(songURL);
            //document.getElementById("url-vid").innerHTML= songURL;
        }
    })
    //find band
    $.ajax({
        url: 'http://developer.echonest.com/api/v4/artist/similar',
        data: {
            api_key: 'W9CSEGPKN4RQJBFQW',
            name: origBand,
            format: 'json',
            artist_start_year_after: 2002,
            results: 20,
            start: 0,
        },
        async: false,
        type: 'GET',
        dataType: 'json',
        success: function(result) {
            newBand = result.response.artists[Math.floor(ind)].name;
            //document.getElementById("similar-band").innerHTML = newBand;
            //find song
            $.ajax({
                url: 'http://developer.echonest.com/api/v4/artist/video',
                data: {
                    api_key: 'W9CSEGPKN4RQJBFQW',
                    name: newBand,
                    format: 'json',
                    results: 1,
                    start: 0
                },
                async: false,
                type: 'GET',
                dataType: 'json',
                success: function(result) {
                    console.log(result.response.video[0].url);
                    if (result.response.video[0].url != undefined) songURL = result.response.video[0].url;
                    song = result.response.video[0].url;
                    //song = songURL;
                    console.log(song);
                    //return songURL;
                    //document.getElementById("similar-band-song").innerHTML= name_similar_song;
                }
            })
        }
    })
    document.getElementById("submit_button").setAttribute("href", song);
}

function setBand() {
    band_input = document.getElementById("input").value;
    console.log(band_input);
}