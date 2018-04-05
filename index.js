var query = require('./searchSong')
var addSong = require('./addSong')
var songList = require('./songs')
async function x() {

    for (var i = 0; i < songList.length; i++) {
        try {
            var entry = songList[i];

            var queryString = entry["Track Name"] + ' ' + entry["Artist Name"]
            let res = await query(queryString)
            res = JSON.parse(res)
            var asin = res.results[0].hits[0].document.asin
            console.log(queryString + ' Done')
            await addSong(asin)
        } catch (e) {
            console.log("Error:")
            console.log(e)
        }
    }
}

x()