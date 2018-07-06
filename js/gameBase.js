import { allGames } from "./players";
import obj from '../data/games.json';


export function gameBase() {
    $('.table-here').html(`<section class='games-wrapper'></section>`);
    for(let i = 1; i < allGames; i++ ) {
        $('.games-wrapper').append(`
            <div class='game-wrapper'>
                <table class='game head ${i}'>
                    <tr><td>${obj[i]["1"]}</td></tr>
                    <tr><td>${obj[i]["2"]}</td></tr>
                    <tr><td>${obj[i]["3"]}</td></tr>
                    <tr><td>${obj[i]["4"]}</td></tr>
                    <tr><td>${obj[i]["5"]}</td></tr>
                    <tr><td>${obj[i]["6"]}</td></tr>
                    <tr><td>${obj[i]["7"]}</td></tr>
                    <tr><td>${obj[i]["8"]}</td></tr>
                    <tr><td>${obj[i]["9"]}</td></tr>
                    <tr><td>${obj[i]["10"]}</td></tr>
                    <tr><td></td></tr>
                    <tr><td></td></tr>
                    <tr><td></td></tr>
                    <tr><td></td></tr>
                    <tr><td></td></tr>
                </table>
            </div>
        `)
        for (let j = 1; j < 16; j++) {
            if (j < 11) {
                if (obj[i]["дон"] == j) {
                    $(`.game.${i} tr:nth-child(${j}) td`).addClass('don');
                } else if (obj[i]["маф1"] == j || obj[i]["маф2"] == j) {
                    $(`.game.${i} tr:nth-child(${j}) td`).addClass('maf');
                } else if (obj[i]["шериф"] == j) {
                    $(`.game.${i} tr:nth-child(${j}) td`).addClass('sher');
                } else {
                    $(`.game.${i} tr:nth-child(${j}) td`).addClass('mir');
                }
            }
        }
    }
}