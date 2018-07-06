import {ratingPlayers} from './players.js';

export function topRatePY() {
    let min = 0;
    let max = 0;
    let maxCell;
    let minCell;
    let tempDoMin;
    let tempDoMax;
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((+ratingPlayers[i].py / (+ratingPlayers[i].mir + +ratingPlayers[i].sher))*10000)/100;
        if (i !== 0) {
            if (temp > max) {
                max = temp;
                maxCell = $(`.${ratingPlayers[i].nick}:nth-child(2)`);
                tempDoMax = ratingPlayers[i].py;
            } else if (temp < min) {
                min = temp;
                tempDoMin = ratingPlayers[i].py;
                minCell = $(`.${ratingPlayers[i].nick}:nth-child(2)`);
            } else if ( temp == max) {
                if (tempDoMax < ratingPlayers[i].py) {
                    max = temp;
                    maxCell = $(`.${ratingPlayers[i].nick}:nth-child(2)`);
                    tempDoMax = ratingPlayers[i].py;
                }
            } else if ( temp == min) {
                if (tempDoMin > ratingPlayers[i].py) {
                    min = temp;
                    tempDoMin = ratingPlayers[i].py;
                    minCell = $(`.${ratingPlayers[i].nick}:nth-child(2)`);
                }
            }
        } else {
            max = temp;
            min = temp;
            maxCell = $(`.${ratingPlayers[i].nick}:nth-child(2)`);
            minCell = $(`.${ratingPlayers[i].nick}:nth-child(2)`);
            tempDoMin = ratingPlayers[i].py;
            tempDoMax = ratingPlayers[i].py;
        }
    }
    maxCell.addClass('top');
    minCell.addClass('lox');
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((+ratingPlayers[i].py / (+ratingPlayers[i].mir + +ratingPlayers[i].sher))*10000)/100;
        if ( temp == max && ratingPlayers[i].py == tempDoMax) {
            $(`.${ratingPlayers[i].nick}:nth-child(2)`).addClass('top');
        }
    }
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((+ratingPlayers[i].py / (+ratingPlayers[i].mir + +ratingPlayers[i].sher))*10000)/100;
        if ( temp == min && ratingPlayers[i].py == tempDoMin) {
            $(`.${ratingPlayers[i].nick}:nth-child(2)`).addClass('lox');
        }
    }
};

export function topRateMaf() {
    let min = 0;
    let max = 0;
    let maxCell;
    let minCell;
    let tempDoMin;
    let tempDoMax;
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((ratingPlayers[i].mafWins / ratingPlayers[i].maf)*10000)/100;
        if (i !== 0) {
            if (temp > max) {
                max = temp;
                maxCell = $(`.${ratingPlayers[i].nick}:nth-child(6)`);
                tempDoMax = ratingPlayers[i].mafWins;
            } else if (temp < min) {
                min = temp;
                tempDoMin = ratingPlayers[i].py;
                minCell = $(`.${ratingPlayers[i].nick}:nth-child(6)`);
            } else if ( temp == max) {
                if (tempDoMax < ratingPlayers[i].mafWins) {
                    max = temp;
                    maxCell = $(`.${ratingPlayers[i].nick}:nth-child(6)`);
                    tempDoMax = ratingPlayers[i].mafWins;
                }
            } else if ( temp == min) {
                if (tempDoMin > ratingPlayers[i].mafWins) {
                    min = temp;
                    tempDoMin = ratingPlayers[i].mafWins;
                    minCell = $(`.${ratingPlayers[i].nick}:nth-child(6)`);
                }
            }
        } else {
            max = temp;
            min = temp;
            maxCell = $(`.${ratingPlayers[i].nick}:nth-child(6)`);
            minCell = $(`.${ratingPlayers[i].nick}:nth-child(6)`);
            tempDoMin = ratingPlayers[i].mafWins;
            tempDoMax = ratingPlayers[i].mafWins;
        }
    }
    maxCell.addClass('top');
    minCell.addClass('lox');
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((ratingPlayers[i].mafWins / ratingPlayers[i].maf)*10000)/100;
        if ( temp == max && ratingPlayers[i].mafWins == tempDoMax) {
            $(`.${ratingPlayers[i].nick}:nth-child(6)`).addClass('top');
        }
    }
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((ratingPlayers[i].mafWins / ratingPlayers[i].maf)*10000)/100;
        if ( temp == min && ratingPlayers[i].mafWins == tempDoMin) {
            $(`.${ratingPlayers[i].nick}:nth-child(6)`).addClass('lox');
        }
    }
};

export function topRateDon() {
    let min = 0;
    let max = 0;
    let maxCell;
    let minCell;
    let tempDoMin;
    let tempDoMax;
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((ratingPlayers[i].donWins / ratingPlayers[i].don)*10000)/100;
        if (i !== 0) {
            if (temp > max) {
                max = temp;
                maxCell = $(`.${ratingPlayers[i].nick}:nth-child(5)`);
                tempDoMax = ratingPlayers[i].donWins;
            } else if (temp < min) {
                min = temp;
                tempDoMin = ratingPlayers[i].py;
                minCell = $(`.${ratingPlayers[i].nick}:nth-child(5)`);
            } else if ( temp == max) {
                if (tempDoMax < ratingPlayers[i].donWins) {
                    max = temp;
                    maxCell = $(`.${ratingPlayers[i].nick}:nth-child(5)`);
                    tempDoMax = ratingPlayers[i].donWins;
                }
            } else if ( temp == min) {
                if (tempDoMin > ratingPlayers[i].donWins) {
                    min = temp;
                    tempDoMin = ratingPlayers[i].donWins;
                    minCell = $(`.${ratingPlayers[i].nick}:nth-child(5)`);
                }
            }
        } else {
            max = temp;
            min = temp;
            maxCell = $(`.${ratingPlayers[i].nick}:nth-child(5)`);
            minCell = $(`.${ratingPlayers[i].nick}:nth-child(5)`);
            tempDoMin = ratingPlayers[i].donWins;
            tempDoMax = ratingPlayers[i].donWins;
        }
    }
    maxCell.addClass('top');
    minCell.addClass('lox');
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((ratingPlayers[i].donWins / ratingPlayers[i].don)*10000)/100;
        if ( temp == max && ratingPlayers[i].donWins == tempDoMax) {
            $(`.${ratingPlayers[i].nick}:nth-child(5)`).addClass('top');
        }
    }
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((ratingPlayers[i].donWins / ratingPlayers[i].don)*10000)/100;
        if ( temp == min && ratingPlayers[i].donWins == tempDoMin) {
            $(`.${ratingPlayers[i].nick}:nth-child(5)`).addClass('lox');
        }
    }
}

 export function topRateSher() {
    let min = 0;
    let max = 0;
    let maxCell;
    let minCell;
    let tempDoMin;
    let tempDoMax;
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((ratingPlayers[i].sherWins / ratingPlayers[i].sher)*10000)/100;
        if (i !== 0) {
            if (temp > max) {
                max = temp;
                maxCell = $(`.${ratingPlayers[i].nick}:nth-child(3)`);
                tempDoMax = ratingPlayers[i].sherWins;
            } else if (temp < min) {
                min = temp;
                tempDoMin = ratingPlayers[i].py;
                minCell = $(`.${ratingPlayers[i].nick}:nth-child(3)`);
            } else if ( temp == max) {
                if (tempDoMax < ratingPlayers[i].sherWins) {
                    max = temp;
                    maxCell = $(`.${ratingPlayers[i].nick}:nth-child(3)`);
                    tempDoMax = ratingPlayers[i].sherWins;
                }
            } else if ( temp == min) {
                if (tempDoMin > ratingPlayers[i].sherWins) {
                    min = temp;
                    tempDoMin = ratingPlayers[i].shernWins;
                    minCell = $(`.${ratingPlayers[i].nick}:nth-child(3)`);
                }
            }
        } else {
            max = temp;
            min = temp;
            maxCell = $(`.${ratingPlayers[i].nick}:nth-child(3)`);
            minCell = $(`.${ratingPlayers[i].nick}:nth-child(3)`);
            tempDoMin = ratingPlayers[i].sherWins;
            tempDoMax = ratingPlayers[i].sherWins;
        }
    }
    maxCell.addClass('top');
    minCell.addClass('lox');
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((ratingPlayers[i].sherWins / ratingPlayers[i].sher)*10000)/100;
        if ( temp == max && ratingPlayers[i].sherWins == tempDoMax) {
            $(`.${ratingPlayers[i].nick}:nth-child(3)`).addClass('top');
        }
    }
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((ratingPlayers[i].sherWins / ratingPlayers[i].sher)*10000)/100;
        if ( temp == min && ratingPlayers[i].sherWins == tempDoMin) {
            $(`.${ratingPlayers[i].nick}:nth-child(3)`).addClass('lox');
        }
    }
}

export function topRateMir() {
    let min = 0;
    let max = 0;
    let maxCell;
    let minCell;
    let tempDoMin;
    let tempDoMax;
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((ratingPlayers[i].mirWins / ratingPlayers[i].mir)*10000)/100;
        if (i !== 0) {
            if (temp > max) {
                max = temp;
                maxCell = $(`.${ratingPlayers[i].nick}:nth-child(4)`);
                tempDoMax = ratingPlayers[i].mirWins;
            } else if (temp < min) {
                min = temp;
                tempDoMin = ratingPlayers[i].py;
                minCell = $(`.${ratingPlayers[i].nick}:nth-child(4)`);
            } else if ( temp == max) {
                if (tempDoMax < ratingPlayers[i].mirWins) {
                    max = temp;
                    maxCell = $(`.${ratingPlayers[i].nick}:nth-child(4)`);
                    tempDoMax = ratingPlayers[i].mirWins;
                }
            } else if ( temp == min) {
                if (tempDoMin > ratingPlayers[i].mirWins) {
                    min = temp;
                    tempDoMin = ratingPlayers[i].mirnWins;
                    minCell = $(`.${ratingPlayers[i].nick}:nth-child(4)`);
                }
            }
        } else {
            max = temp;
            min = temp;
            maxCell = $(`.${ratingPlayers[i].nick}:nth-child(4)`);
            minCell = $(`.${ratingPlayers[i].nick}:nth-child(4)`);
            tempDoMin = ratingPlayers[i].mirWins;
            tempDoMax = ratingPlayers[i].mirWins;
        }
    }
    maxCell.addClass('top');
    minCell.addClass('lox');
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((ratingPlayers[i].mirWins / ratingPlayers[i].mir)*10000)/100;
        if ( temp == max && ratingPlayers[i].mirWins == tempDoMax) {
            $(`.${ratingPlayers[i].nick}:nth-child(4)`).addClass('top');
        }
    }
    for (let i = 0; i < ratingPlayers.length; i++) {
        let temp = Math.round((ratingPlayers[i].mirWins / ratingPlayers[i].mir)*10000)/100;
        if ( temp == min && ratingPlayers[i].mirWins == tempDoMin) {
            $(`.${ratingPlayers[i].nick}:nth-child(4)`).addClass('lox');
        }
    }
}