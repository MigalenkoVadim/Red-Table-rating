import {ratingPlayers, allGames} from "./players";
import obj from '../data/games.json';

export function numberStat() {
    for (let i = 1; i < ratingPlayers.length; i++) {

        for (let j = 1; j < ratingPlayers.length; j++) {

            if( ratingPlayers[j].value > ratingPlayers[j-1].value ){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            }
        }
    }
    $('.table-here').html(`
        <table class='numbers'>
            <tr class='head' style='background: lightyellow'>
                <td class='nick'>Игрок</td>
                <td>1 бокс</td>
                <td>2 бокс</td>
                <td>3 бокс</td>
                <td>4 бокс</td>
                <td>5 бокс</td>
                <td>6 бокс</td>
                <td>7 бокс</td>
                <td>8 бокс</td>
                <td>9 бокс</td>
                <td>10 бокс</td>
            </tr>
        </table>
    `);
    for (let i = 0; i < ratingPlayers.length; i++) {
        let nick = ratingPlayers[i].nick;
        let winsArr = [0,0,0,0,0,0,0,0,0,0];
        let gamesArr = [0,0,0,0,0,0,0,0,0,0];
        for (let i = 360; i <= allGames; i++) {
            if (Object.values(obj[i]).indexOf(nick) !== -1) {
                let number = Object.values(obj[i]).indexOf(nick) + 1;
                gamesArr[number-1]++;
                if (number == obj[i]['дон'] || number == obj[i]['маф2'] || number == obj[i]['маф1']) {
                    if (obj[i]['победа'] == 'маф') {
                        winsArr[number-1]++;
                    }
                } else {
                    if (obj[i]['победа'] == 'мир') {
                        winsArr[number-1]++;
                    }
                }
            }
        }
        $('.numbers').append(`
            <tr class='row ${nick}'>
                <td class='${ratingPlayers[i].nick} nick'><p>${ratingPlayers[i].nick}</p><p class='num'>${ratingPlayers[i].num}</p></td>
                <td>${winsArr[0]}/${gamesArr[0]}</td>
                <td>${winsArr[1]}/${gamesArr[1]}</td>
                <td>${winsArr[2]}/${gamesArr[2]}</td>
                <td>${winsArr[3]}/${gamesArr[3]}</td>
                <td>${winsArr[4]}/${gamesArr[4]}</td>
                <td>${winsArr[5]}/${gamesArr[5]}</td>
                <td>${winsArr[6]}/${gamesArr[6]}</td>
                <td>${winsArr[7]}/${gamesArr[7]}</td>
                <td>${winsArr[8]}/${gamesArr[8]}</td>
                <td>${winsArr[9]}/${gamesArr[9]}</td>
            </tr>
        `)
        for (let i = 0; i < 10; i++) {
            let box = i+2
            if (gamesArr[i] == 0) {
                $(`.${nick} td:nth-child(${box})`).html('-');
            } else if (winsArr[i]/gamesArr[i] == 0) {
                $(`.${nick} td:nth-child(${box})`).css('background', 'rgba(255, 0, 0, 1)');
            } else if (0.25 > winsArr[i]/gamesArr[i] && winsArr[i]/gamesArr[i] > 0) {
                $(`.${nick} td:nth-child(${box})`).css('background', 'rgba(255, 0, 0, 0.5)');
            } else if (0.5> winsArr[i]/gamesArr[i] && winsArr[i]/gamesArr[i] >= 0.25) {
                $(`.${nick} td:nth-child(${box})`).css('background', 'rgba(255, 0, 0, 0.2)');
            } else if (0.75 > winsArr[i]/gamesArr[i] && winsArr[i]/gamesArr[i] > 0.5) {
                $(`.${nick} td:nth-child(${box})`).css('background', 'rgba(0, 255, 0, 0.2)');
            } else if (1 > winsArr[i]/gamesArr[i] && winsArr[i]/gamesArr[i] >= 0.75) {
                $(`.${nick} td:nth-child(${box})`).css('background', 'rgba(0, 255, 0, 0.5)');
            } else if (winsArr[i]/gamesArr[i] == 1) {
                $(`.${nick} td:nth-child(${box})`).css('background', 'rgba(0, 255, 0, 1)');
            }

        }
        ratingPlayers[i].num == undefined ? $(`.${ratingPlayers[i].nick}:nth-child(1)`).html(`<p>${ratingPlayers[i].nick}</p>`) : '';
    }
}
