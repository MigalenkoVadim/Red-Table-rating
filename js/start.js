import {ratingPlayers, nonRatingPlayers, allGames, redWins, blackWins} from './players.js';
import {rolesStat} from './roles.js';
import {numberStat} from './numbers.js';
import {playersStat} from './playersStat.js';
import {gameBase} from './gameBase.js';
startingTable();


$(`.open-new-stat:nth-child(1)`).click(function(){
    $(`.open-new-stat:nth-child(1)`).addClass('active');
    $(`.open-new-stat:nth-child(2)`).removeClass('active');
    $(`.open-new-stat:nth-child(3)`).removeClass('active');
    $(`.open-new-stat:nth-child(4)`).removeClass('active');
    $(`.open-new-stat:nth-child(5)`).removeClass('active');
    startingTable();
});
$(`.open-new-stat:nth-child(2)`).click(function(){
    $(`.open-new-stat:nth-child(2)`).addClass('active');
    $(`.open-new-stat:nth-child(1)`).removeClass('active');
    $(`.open-new-stat:nth-child(3)`).removeClass('active');
    $(`.open-new-stat:nth-child(4)`).removeClass('active');
    $(`.open-new-stat:nth-child(5)`).removeClass('active');
    rolesStat();
});
$(`.open-new-stat:nth-child(3)`).click(function(){
    $(`.open-new-stat:nth-child(3)`).addClass('active');
    $(`.open-new-stat:nth-child(2)`).removeClass('active');
    $(`.open-new-stat:nth-child(1)`).removeClass('active');
    $(`.open-new-stat:nth-child(4)`).removeClass('active');
    $(`.open-new-stat:nth-child(5)`).removeClass('active');
    if ($("table").is(".popup-table")) {
        $('.shadow').css('visibility', 'hidden');
        $('.popup-table').remove();
    } else {playersStat()}
});
$(`.open-new-stat:nth-child(4)`).click(function(){
    $(`.open-new-stat:nth-child(4)`).addClass('active');
    $(`.open-new-stat:nth-child(2)`).removeClass('active');
    $(`.open-new-stat:nth-child(1)`).removeClass('active');
    $(`.open-new-stat:nth-child(3)`).removeClass('active');
    $(`.open-new-stat:nth-child(5)`).removeClass('active');
    numberStat();
});
$(`.open-new-stat:nth-child(5)`).click(function(){
    $(`.open-new-stat:nth-child(5)`).addClass('active');
    $(`.open-new-stat:nth-child(2)`).removeClass('active');
    $(`.open-new-stat:nth-child(1)`).removeClass('active');
    $(`.open-new-stat:nth-child(3)`).removeClass('active');
    $(`.open-new-stat:nth-child(4)`).removeClass('active');
    gameBase();
});


function startingTable() {
    $('.table-here').html(`
        <table class='table' >
            <tr class='head'>
                <td class='nick'>Игрок</td>
                <td class='games'>Игр</td>
                <td class='wins'>Побед</td>
                <td class='sher'>Игр шерифом</td>
                <td class='sher-wins'>Побед шерифом</td>
                <td class='mir'>Игр мирным</td>
                <td class='mir-wins'>Побед мирным</td>
                <td class='don'>Игр доном</td>
                <td class='don-wins'>Побед доном</td>
                <td class='maf'>Игр мафом</td>
                <td class='maf-wins'>Побед мафом</td>
                <td class='py'>ПУ</td>
                <td class='lx'>ЛХ</td>
                <td class='points'>Очки</td>
                <td class='result'>Итог</td>
            </tr>
        </table>
    `)

    for (let i = 1; i < ratingPlayers.length; i++) {
 
        for (let j = 1; j < ratingPlayers.length; j++) {
     
            if( ratingPlayers[j].value > ratingPlayers[j-1].value ){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            }
        }
    }
    for (let i = 1; i < nonRatingPlayers.length; i++) {
 
        for (let j = 1; j < nonRatingPlayers.length; j++) {
     
            if( nonRatingPlayers[j].games > nonRatingPlayers[j-1].games ){
                var temp = nonRatingPlayers[j];
                nonRatingPlayers[j] = nonRatingPlayers[j-1];
                nonRatingPlayers[j-1] = temp;
            }
        }
    }

    for (let i = 0; i < ratingPlayers.length; i++) {
        $('.table').append(ratingPlayers[i].code);
    }
    for (let i = 0; i < nonRatingPlayers.length; i++) {
        $('.table').append(nonRatingPlayers[i].code);
    };

    $('.table-here').append(`
        <table>
            <tr>
                <td style='background: yellow'>Всего игр: ${allGames}</td>
            </tr>
            <tr>
                <td style='background: lightcoral'>Побед мирных: ${Math.round(redWins*1000)/1000}</td>
            </tr>
            <tr>
                <td  style='background: rgb(32, 31, 31); color: white;'>Побед мафии:${blackWins}</td>
            </tr>
            <tr>
                <td style='background: lightgray'>Игр для попадания в рейтинг:${Math.floor(allGames/4)}</td>
            </tr>
        </table>
    `);
}



