import obj from '../data/games.json';
let allGames = 165;
let ratingPlayers = [];
let nonRatingPlayers = [];
let redWins = 0;
let blackWins = 0;

playerRow("Аврора", 4);
playerRow("Янг", 43);
playerRow("Ворон", 7);
playerRow("Лион", 75);
playerRow("Флэш", 95);
playerRow("Валерун-Балерун", 69);
playerRow("awd2", 2);
playerRow("Хулиган", 11);
playerRow("Герда");
playerRow("Шут", 10);
playerRow("Бильбо");
playerRow("Крис", 18);
playerRow("Зверь", 13);
playerRow("Крузенштерн");
playerRow("Артик", 22);
playerRow("Архи", 1);
playerRow("Remedy", 9);
playerRow("Кошка");
playerRow("Алиот", 88);
playerRow("Киндер", 5);
playerRow("Сова");
playerRow("ВМТ");
playerRow("Тихий", 96);
playerRow("Жнец");
playerRow("Маг");
playerRow("Физик");
playerRow("Зодиак");
playerRow("Алекс");
playerRow("Арбузик");
playerRow("Хорист");
playerRow("Classika");
playerRow("Шарлотта");
playerRow("Плесень");
playerRow("Маузер");
playerRow("Шико");
playerRow("Пиковый валет");
playerRow("Блэйн");

export function playerRow(nick, num) {
    let player = {};
    let number = 0, games = 0, wins = 0, sher = 0, sherWins = 0, mir = 0, mirWins = 0, don = 0, donWins = 0, maf = 0, mafWins = 0, py = 0, lx = 0, points = 0, result = 0;
    for (let i = 1; i <= allGames; i++) {
        if (Object.values(obj[i]).indexOf(nick) !== -1) {
            number = Object.values(obj[i]).indexOf(nick) + 1;
            games++;
            if (number == obj[i]["дон"]) {
                don++;
                obj[i]["победа"] == "маф" ? donWins++ : '';
                obj[i]["победа"] == "маф" ? wins++ : '';
                obj[i]["победа"] == "маф" ? blackWins+=0.5 : '';
            } else if (number == obj[i]["маф1"] || number == obj[i]["маф2"]) {
                maf++;
                obj[i]["победа"] == "маф" ? mafWins++ : '';
                obj[i]["победа"] == "маф" ? wins++ : '';
                obj[i]["победа"] == "маф" ? blackWins+=0.25 : '';
            } else if (number == obj[i]["шериф"]) {
                sher++;
                obj[i]["победа"] == "мир" ? sherWins++ : '';
                obj[i]["победа"] == "мир" ? wins++ : '';
                obj[i]["победа"] == "мир" ? redWins+=0.5 : '';
            } else {
                mir++;
                obj[i]["победа"] == "мир" ? mirWins++ : '';
                obj[i]["победа"] == "мир" ? wins++ : '';
                obj[i]["победа"] == "мир" ? redWins+=1/12 : '';
            }
            if (obj[i]["пу"] == number) {
                py++;
                lx += +(obj[i]["лх"]);
            }
        }
        points = wins + +(lx);
        result = Math.round(points/games * 10000)/100;
    }
    if (num && allGames/5 > games) {
        player.code = `<tr class='gray'>
            <td class='nick'><p>${nick}</p><p class='num gray'>${num}</p></td>
            <td class='games'>${games}</td>
            <td class='wins'>${wins}</td>
            <td class='sher'>${sher}</td>
            <td class='sher-wins'>${sherWins}</td>
            <td class='mir'>${mir}</td>
            <td class='mir-wins'>${mirWins}</td>
            <td class='don'>${don}</td>
            <td class='don-wins'>${donWins}</td>
            <td class='maf'>${maf}</td>
            <td class='maf-wins'>${mafWins}</td>
            <td class='py'>${py}</td>
            <td class='lx'>${lx}</td>
            <td class='points'>${points}</td>
            <td class='result'>${result}</td>
        </tr>`;
    } else if (num){
        player.code = `<tr>
            <td class='nick'><p>${nick}</p><p class='num'>${num}</p></td>
            <td class='games'>${games}</td>
            <td class='wins'>${wins}</td>
            <td class='sher'>${sher}</td>
            <td class='sher-wins'>${sherWins}</td>
            <td class='mir'>${mir}</td>
            <td class='mir-wins'>${mirWins}</td>
            <td class='don'>${don}</td>
            <td class='don-wins'>${donWins}</td>
            <td class='maf'>${maf}</td>
            <td class='maf-wins'>${mafWins}</td>
            <td class='py'>${py}</td>
            <td class='lx'>${lx}</td>
            <td class='points'>${points}</td>
            <td class='result'>${result}</td>
        </tr>`;
    } else if (allGames/5 > games){
        player.code = `<tr class='gray'>
            <td class='nick'>${nick}</td>
            <td class='games'>${games}</td>
            <td class='wins'>${wins}</td>
            <td class='sher'>${sher}</td>
            <td class='sher-wins'>${sherWins}</td>
            <td class='mir'>${mir}</td>
            <td class='mir-wins'>${mirWins}</td>
            <td class='don'>${don}</td>
            <td class='don-wins'>${donWins}</td>
            <td class='maf'>${maf}</td>
            <td class='maf-wins'>${mafWins}</td>
            <td class='py'>${py}</td>
            <td class='lx'>${lx}</td>
            <td class='points'>${points}</td>
            <td class='result'>${result}</td>
        </tr>`;
    } else {
        player.code = `<tr>
            <td class='nick'>${nick}</td>
            <td class='games'>${games}</td>
            <td class='wins'>${wins}</td>
            <td class='sher'>${sher}</td>
            <td class='sher-wins'>${sherWins}</td>
            <td class='mir'>${mir}</td>
            <td class='mir-wins'>${mirWins}</td>
            <td class='don'>${don}</td>
            <td class='don-wins'>${donWins}</td>
            <td class='maf'>${maf}</td>
            <td class='maf-wins'>${mafWins}</td>
            <td class='py'>${py}</td>
            <td class='lx'>${lx}</td>
            <td class='points'>${points}</td>
            <td class='result'>${result}</td>
        </tr>`;
    }
    player.value = result;
    player.nick = nick;
    player.games = games;
    player.sher = sher;
    player.sherWins = sherWins;
    player.sher = sher;
    player.mir = mir;
    player.mirWins = mirWins;
    player.don = don;
    player.donWins = donWins;
    player.maf = maf;
    player.mafWins = mafWins;
    player.py = py;
    player.lx = lx;
    player.points = points;
    player.result = result;
    player.num = num;
    if (allGames/5 <= games) {
        ratingPlayers.push(player);
    } else if (allGames/20 <= games){
        nonRatingPlayers.push(player);
    }

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
}

export {ratingPlayers, nonRatingPlayers, allGames, redWins, blackWins};
