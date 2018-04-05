var request = require('request')

module.exports =  (query) => {

    return new Promise((resolve, reject) => {
        var options = {
            method: 'POST',
            url: 'https://music.amazon.in/EU/api/search/v1_1/',
            headers:
                {
                    'Postman-Token': '4a6ae489-87fe-e17d-3a1d-40e7dfb3da56',
                    'Cache-Control': 'no-cache',
                    'Content-Encoding': 'amz-1.0',
                    'csrf-ts': '1522953779',
                    'X-Amz-Target': 'com.amazon.tenzing.v1_1.TenzingServiceExternalV1_1.search',
                    'csrf-token': 'FOCuLZy4482BOC6xguqTEPQmiSVNug0bW4Z84k/mqD4=',
                    'content-type': 'application/json',
                    'csrf-rnd': '476722610'
                },
            body: '{"deviceId":"26196643314376709","deviceType":"A16ZV8BU3SN1N3","musicTerritory":"IN","customerId":"A35EKV0T3VBQM2","languageLocale":"en_IN","requestContext":{"customerInitiated":true},"query":{"__type":"com.amazon.music.search.model#BooleanQuery","must":[{"__type":"com.amazon.music.search.model#MatchQuery","query":"'+ query +'"},{"__type":"com.amazon.music.search.model#TermQuery","fieldName":"primeStatus","term":"PRIME"}]},"resultSpecs":[{"label":"catalog_tracks","documentSpecs":[{"type":"catalog_track","fields":["__DEFAULT","artOriginal","artMedium","artLarge","artFull","isMusicSubscription","primeStatus","parentalControls.hasExplicitLanguage"]}],"maxResults":30},{"label":"catalog_albums","documentSpecs":[{"type":"catalog_album","fields":["__DEFAULT","artOriginal","artMedium","artLarge","artFull","isMusicSubscription","primeStatus","parentalControls.hasExplicitLanguage"]}],"maxResults":30},{"label":"catalog_playlists","documentSpecs":[{"type":"catalog_playlist","fields":["__DEFAULT","artOriginal","artMedium","artLarge","artFull","isMusicSubscription","primeStatus","parentalControls.hasExplicitLanguage"]}],"maxResults":30},{"label":"catalog_artists","documentSpecs":[{"type":"catalog_artist","fields":["__DEFAULT","artOriginal","artMedium","artLarge","artFull","isMusicSubscription","primeStatus","parentalControls.hasExplicitLanguage"]}],"maxResults":30},{"label":"catalog_stations","documentSpecs":[{"type":"catalog_station","fields":["__DEFAULT","artOriginal","artMedium","artLarge","artFull","isMusicSubscription","primeStatus","parentalControls.hasExplicitLanguage"]}],"maxResults":30},{"label":"catalog_tophit","documentSpecs":[{"type":"catalog_track","fields":["__DEFAULT","artOriginal","artMedium","artLarge","artFull","isMusicSubscription","primeStatus","parentalControls.hasExplicitLanguage"]},{"type":"catalog_album","fields":["__DEFAULT","artOriginal","artMedium","artLarge","artFull","isMusicSubscription","primeStatus","parentalControls.hasExplicitLanguage"]},{"type":"catalog_artist","fields":["__DEFAULT","artOriginal","artMedium","artLarge","artFull","isMusicSubscription","primeStatus","parentalControls.hasExplicitLanguage"]},{"type":"catalog_playlist","fields":["__DEFAULT","artOriginal","artMedium","artLarge","artFull","isMusicSubscription","primeStatus","parentalControls.hasExplicitLanguage"]},{"type":"catalog_station","fields":["__DEFAULT","artOriginal","artMedium","artLarge","artFull","isMusicSubscription","primeStatus","parentalControls.hasExplicitLanguage"]}],"maxResults":5,"topHitSpec":{"shouldUpsellMusicSubscription":false}}]}'
        };

        request(options, function (error, response, body) {
            console.log('Done for query' + query)
            if (error) reject(new Error(error));
            else resolve(body)
        });
    })
}

