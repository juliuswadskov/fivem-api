/**
 * @maker {Raag2005}
 * @license {GNU}
 * @dependencies {request}
 * Man skal have ES6 for at bruge denne her fil!
 */


// FiveM({port: 30120, host: 'dedicated.raag2005.dk'}, (info, players) => {
//     console.log(info);
//     console.log(players);
//

const request = require('request');

export const FiveM = (json, cb) => {
    if (json.host == undefined) {console.log(err); return}
    let port = json.port || 30120

    request(`http://${json.host}:${port}/info.json`, (err, res, body) => {
        if (err) {return};
        let info = JSON.parse(body);
        request(`http://${json.host}:${port}/players.json`, (err, res, body) => {
            if (err) {return};
            let players = JSON.parse(body);
            cb(info, players)
        })
    })
}
