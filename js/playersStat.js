import { ratingPlayers, allGames } from "./players";
import obj from '../data/games.json';


export function playersStat() {
    for (let i = 1; i < ratingPlayers.length; i++) {

        for (let j = 1; j < ratingPlayers.length; j++) {

            if( ratingPlayers[j].value > ratingPlayers[j-1].value ){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            }
        }
    }

    $('.shadow').css('visibility', 'visible');
    $('.go-play-popup').html(`
        <table class='popup-table'>
        </table>
    `);

    for(let i = 0; i < ratingPlayers.length; i++) {
        $('.popup-table').append(`
            <tr><td>${ratingPlayers[i].nick}</td></tr>
        `);
    }
    $('.popup-table tr td').click(function() {
        let nick = $(this).text();
        $('.shadow').css('visibility', 'hidden');
        $('.popup-table').remove();
        $('.table-here').html(`
            <table class='players-table'>
                <tr>
                     <td class='nick' rowspan='2' style='background: yellow'>${nick}</td>
                     <td rowspan='2' style='background: red'>Вместе красные</td>
                     <td rowspan='2' style='background: black; color: white'>Вместе черные</td>
                     <td colspan='2' style='background: radial-gradient(ellipse, red, black); color: white'>Разноцвет</td>
                </tr>
                <tr>
                     <td style='background: radial-gradient(ellipse, red, black); color: white'>${nick} мир</td>
                     <td style='background: radial-gradient(ellipse, red, black); color: white'>${nick} маф</td>
                </tr>
            </table>
        `);

        for (let j = 0; j < ratingPlayers.length; j++) {
            if (ratingPlayers[j].nick == nick) {continue};
            let nick1 = ratingPlayers[j].nick;
            let mafs = 0, mafsWins = 0, mirs = 0, mirsWins = 0, mafMir = 0, mafMirWins = 0, mirMafWins = 0, mirMaf = 0;
            for (let i = 453; i <= allGames; i++) {
                if (Object.values(obj[i]).indexOf(nick) !== -1 && Object.values(obj[i]).indexOf(nick1) !== -1) {
                    let number = Object.values(obj[i]).indexOf(nick) + 1;
                    let number1 = Object.values(obj[i]).indexOf(nick1) + 1;
                    if (number == obj[i]['дон'] || number == obj[i]['маф2'] || number == obj[i]['маф1']) {
                        if (number1 == obj[i]['дон'] || number1 == obj[i]['маф2'] || number1 == obj[i]['маф1']) {
                            if (obj[i]['победа'] == 'маф') {
                                mafsWins++;
                                mafs++;
                            } else {
                                mafs++;
                            }
                        } else {
                            if (obj[i]['победа'] == 'маф') {
                                mafMirWins++;
                                mafMir++;
                            } else {
                                mafMir++;
                            }
                        }
                    } else {
                        if (number1 == obj[i]['дон'] || number1 == obj[i]['маф2'] || number1 == obj[i]['маф1']) {
                            if (obj[i]['победа'] == 'маф') {
                                mirMaf++;
                            } else {
                                mirMaf++;
                                mirMafWins++;
                            }
                        } else {
                            if (obj[i]['победа'] == 'маф') {
                                mirs++;
                            } else {
                                mirs++;
                                mirsWins++;
                            }
                        }
                    }
                }
            }

            $('.players-table').append(`
            <tr>
                <td>${nick1}</td>
                <td class='${nick1}'><p class='parity'>${mirsWins}/${mirs}</p><p class='percent'>${((+mirsWins / +mirs)*100).toFixed(1)}%</p></td>
                <td class='${nick1}'><p class='parity'>${mafsWins}/${mafs}</p><p class='percent'>${((+mafsWins / +mafs)*100).toFixed(1)}%</p></td>
                <td class='${nick1}'><p class='parity'>${mirMafWins}/${mirMaf}</p><p class='percent'>${((+mirMafWins / +mirMaf)*100).toFixed(1)}%</p></td>
                <td class='${nick1}'><p class='parity'>${mafMirWins}/${mafMir}</p><p class='percent'>${((+mafMirWins / +mafMir)*100).toFixed(1)}%</p></td>
            </tr>
            `)

            mirs == 0 ? $(`.${nick1}:nth-child(2) .percent`).html('-') : '';
            mafs == 0 ? $(`.${nick1}:nth-child(3) .percent`).html('-') : '';
            mirMaf == 0 ? $(`.${nick1}:nth-child(4) .percent`).html('-') : '';
            mafMir == 0 ? $(`.${nick1}:nth-child(5) .percent`).html('-') : '';

            for(let i = 2; i < 6; i++) {
                if (parseFloat($(`.${nick1}:nth-child(${i}) .percent`).text()) > 85) {
                    $(`.${nick1}:nth-child(${i})`).css('background', 'green');
                } else if (parseFloat($(`.${nick1}:nth-child(${i}) .percent`).text()) > 60) {
                    $(`.${nick1}:nth-child(${i})`).css('background', 'rgba(0,255,0,0.3');
                } else if (parseFloat($(`.${nick1}:nth-child(${i}) .percent`).text()) < 15) {
                    $(`.${nick1}:nth-child(${i})`).css('background', 'rgba(255,0,0,0.8');
                } else if (parseFloat($(`.${nick1}:nth-child(${i}) .percent`).text()) < 40) {
                    $(`.${nick1}:nth-child(${i})`).css('background', 'rgba(255,0,0,0.2');
                }
            }
        }
    });
}
