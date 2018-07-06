import {ratingPlayers} from './players.js';
import {topRatePY, topRateMir, topRateMaf, topRateSher, topRateDon} from './rolesIndicate.js';
import {rolesSortPY, rolesSortPYDown, rolesSortMaf, rolesSortMafDown, rolesSortDon, rolesSortDonDown, rolesSortMir, rolesSortMirDown, rolesSortSher, rolesSortSherDown} from './rolesSort.js';


export function rolesStat() {
    $('.table-here').html(`
        <table class='roles-table'>
            <tr class='head'>
                <td style='background: yellow' class='nick'>Игрок</td>
                <td style='background: lightgray'><p>Самый стреляемый</p><div class='arrow PYSort left'><i class="far fa-arrow-alt-circle-left"></i></div></td>
                <td style='background: red'><p>Лучший шериф</p><div class='arrow sherSort left'><i class="far fa-arrow-alt-circle-left"></i></div></td>
                <td style='background: lightcoral'><p>Лучший мирный</p><div class='arrow mirSort left'><i class="far fa-arrow-alt-circle-left"></i></div></td>
                <td style='background: rgb(32, 31, 31); color: white'><p>Лучший дон</p><div class='arrow donSort left'><i class="far fa-arrow-alt-circle-left"></i></div></td>
                <td style='background: rgb(65, 60, 60); color: white'><p>Лучший черный</p><div class='arrow mafSort left'><i class="far fa-arrow-alt-circle-left"></i></div></td>
            </tr>
        </table>
    `);
    createRatedTable();
    $(`.PYSort`).click(function() {
        if ($(`.PYSort`).hasClass('down')) {
            rolesSortPYDown();
        } else if ($(`.PYSort`).hasClass('left')) {
            rolesSortPY();
        } else if ($(`.PYSort`).hasClass('up')) {
            rolesSortPY();
        }
    });
    $(`.mirSort`).click(function() {
        if ($(`.mirSort`).hasClass('down')) {
            rolesSortMirDown()
        } else if ($(`.mirSort`).hasClass('left')) {
            rolesSortMir()
        } else if ($(`.mirSort`).hasClass('up')) {
            rolesSortMir()
        }
    });
    $(`.donSort`).click(function() {
        if ($(`.donSort`).hasClass('down')) {
            rolesSortDonDown();
        } else if ($(`.donSort`).hasClass('left')) {
            rolesSortDon();
        } else if ($(`.donSort`).hasClass('up')) {
            rolesSortDon();
        }
    });
    $(`.mafSort`).click(function() {
        if ($(`.mafSort`).hasClass('down')) {
            rolesSortMafDown();
        } else if ($(`.mafSort`).hasClass('left')) {
            rolesSortMaf();
        } else if ($(`.mafSort`).hasClass('up')) {
            rolesSortMaf();
        }
    });
    $(`.sherSort`).click(function() {
        if ($(`.sherSort`).hasClass('down')) {
            rolesSortSherDown();
        } else if ($(`.sherSort`).hasClass('left')) {
            rolesSortSher();
        } else if ($(`.sherSort`).hasClass('up')) {
            rolesSortSher();
        }
    });
}

export function createRatedTable() {
    for (let i = 0; i < ratingPlayers.length; i++) {
        $('.roles-table').append(`
            <tr class='row'>
                <td class='${ratingPlayers[i].nick} nick'><p>${ratingPlayers[i].nick}</p><p class='num'>${ratingPlayers[i].num}</p></td>
                <td class='${ratingPlayers[i].nick}'><p class='parity'>${ratingPlayers[i].py}/${+ratingPlayers[i].mir + +ratingPlayers[i].sher}</p> <p class='percent'>${(Math.round((+ratingPlayers[i].py / (+ratingPlayers[i].mir + +ratingPlayers[i].sher))*1000)/10).toFixed(1)}%</p></td>
                <td class='${ratingPlayers[i].nick}'><p class='parity'>${ratingPlayers[i].sherWins}/${+ratingPlayers[i].sher}</p><p class='percent'>${(Math.round(+ratingPlayers[i].sherWins / (+ratingPlayers[i].sher)*10000)/100).toFixed(1)}%</p></td>
                <td class='${ratingPlayers[i].nick}'><p class='parity'>${ratingPlayers[i].mirWins}/${+ratingPlayers[i].mir}</p><p class='percent'>${(Math.round(+ratingPlayers[i].mirWins / (+ratingPlayers[i].mir)*10000)/100).toFixed(1)}%</p></td>
                <td class='${ratingPlayers[i].nick}'><p class='parity'>${ratingPlayers[i].donWins}/${+ratingPlayers[i].don}</p><p class='percent'>${(Math.round(+ratingPlayers[i].donWins / (+ratingPlayers[i].don)*10000)/100).toFixed(1)}%</p></td>
                <td class='${ratingPlayers[i].nick}'><p class='parity'>${ratingPlayers[i].mafWins}/${+ratingPlayers[i].maf}</p><p class='percent'>${(Math.round(+ratingPlayers[i].mafWins / (+ratingPlayers[i].maf)*10000)/100).toFixed(1)}%</p></td>
            </tr>
        `);
        ratingPlayers[i].don == 0 ? $(`.${ratingPlayers[i].nick}:nth-child(5) .percent`).html('-') : '';
        ratingPlayers[i].mir == 0 ? $(`.${ratingPlayers[i].nick}:nth-child(4) .percent`).html('-') : '';
        ratingPlayers[i].maf == 0 ? $(`.${ratingPlayers[i].nick}:nth-child(6) .percent`).html('-') : '';
        ratingPlayers[i].sher == 0 ? $(`.${ratingPlayers[i].nick}:nth-child(3) .percent`).html('-') : '';
        ratingPlayers[i].py == 0 ? $(`.${ratingPlayers[i].nick}:nth-child(2) .percent`).html('-') : '';
        ratingPlayers[i].num == undefined ? $(`.${ratingPlayers[i].nick}:nth-child(1)`).html(`<p>${ratingPlayers[i].nick}</p>`) : '';
    }
    topRatePY();
    topRateDon();
    topRateMir();
    topRateMaf();
    topRateSher();
}
