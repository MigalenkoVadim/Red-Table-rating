import {ratingPlayers } from "./players";
import {createRatedTable} from './roles.js';

export function rolesSortPY() {
    for (let i = 1; i < ratingPlayers.length; i++) {
        for (let j = 1; j < ratingPlayers.length; j++) {
            if (ratingPlayers[j-1].py == 0) {
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            } else if ((+ratingPlayers[j].py / (+ratingPlayers[j].mir + +ratingPlayers[j].sher) > +ratingPlayers[j-1].py / (+ratingPlayers[j-1].mir + +ratingPlayers[j-1].sher) )){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            } else if ((+ratingPlayers[j].py / (+ratingPlayers[j].mir + +ratingPlayers[j].sher) == +ratingPlayers[j-1].py / (+ratingPlayers[j-1].mir + +ratingPlayers[j-1].sher) )){
                if (ratingPlayers[j].py > ratingPlayers[j-1].py) { 
                    var temp = ratingPlayers[j];
                    ratingPlayers[j] = ratingPlayers[j-1];
                    ratingPlayers[j-1] = temp;
                }
            }
        }
    }
    $('.row').remove();
    createRatedTable();
    $('.down').removeClass('down').addClass('left');
    $('.up').removeClass('up').addClass('left');
    $('.fa-arrow-alt-circle-down').removeClass('fa-arrow-alt-circle-down').addClass('fa-arrow-alt-circle-left');
    $('.fa-arrow-alt-circle-up').removeClass('fa-arrow-alt-circle-up').addClass('fa-arrow-alt-circle-left');
    $('.PYSort').removeClass('left').addClass('down');
    $('.down').html(`<i class="far fa-arrow-alt-circle-down"></i>`);
}

export function rolesSortPYDown() {
    for (let i = 1; i < ratingPlayers.length; i++) {
        for (let j = ratingPlayers.length-2; j > -1; j--) {
            if (ratingPlayers[j+1].py == 0) {
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j+1];
                ratingPlayers[j+1] = temp;
            } else if ((+ratingPlayers[j].py / (+ratingPlayers[j].mir + +ratingPlayers[j].sher) > +ratingPlayers[j+1].py / (+ratingPlayers[j+1].mir + +ratingPlayers[j+1].sher) )){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j+1];
                ratingPlayers[j+1] = temp;
            } else if ((+ratingPlayers[j].py / (+ratingPlayers[j].mir + +ratingPlayers[j].sher) == +ratingPlayers[j+1].py / (+ratingPlayers[j+1].mir + +ratingPlayers[j+1].sher) )){
                if (ratingPlayers[j].py > ratingPlayers[j+1].py) { 
                    var temp = ratingPlayers[j];
                    ratingPlayers[j] = ratingPlayers[j+1];
                    ratingPlayers[j+1] = temp;
                }
            }
        }
    }
    $('.row').remove();
    createRatedTable();
    $('.PYSort').removeClass('down').addClass('up');
    $('.up').html(`<i class="far fa-arrow-alt-circle-up"></i>`);
}

export function rolesSortMir(){
    for (let i = 1; i < ratingPlayers.length; i++) {
        for (let j = 1; j < ratingPlayers.length; j++) {
            if (ratingPlayers[j-1].mir == 0) {
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            } else if ((+ratingPlayers[j].mirWins / +ratingPlayers[j].mir) > (+ratingPlayers[j-1].mirWins / +ratingPlayers[j-1].mir)){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            } else if ((+ratingPlayers[j].mirWins / +ratingPlayers[j].mir) == (+ratingPlayers[j-1].mirWins / +ratingPlayers[j-1].mir)){
                if (ratingPlayers[j].mirWins > ratingPlayers[j-1].mirWins) { 
                    var temp = ratingPlayers[j];
                    ratingPlayers[j] = ratingPlayers[j-1];
                    ratingPlayers[j-1] = temp;
                } else if (ratingPlayers[j].mirWins == 0) {
                    if (ratingPlayers[j].mir < ratingPlayers[j-1].mir) {
                        var temp = ratingPlayers[j];
                        ratingPlayers[j] = ratingPlayers[j-1];
                        ratingPlayers[j-1] = temp;
                    }
                }
            }
        }
    }
    $('.row').remove();
    createRatedTable();
    $('.down').removeClass('down').addClass('left');
    $('.up').removeClass('up').addClass('left');
    $('.fa-arrow-alt-circle-down').removeClass('fa-arrow-alt-circle-down').addClass('fa-arrow-alt-circle-left');
    $('.fa-arrow-alt-circle-up').removeClass('fa-arrow-alt-circle-up').addClass('fa-arrow-alt-circle-left');
    $('.mirSort').removeClass('left').addClass('down');
    $('.down').html(`<i class="far fa-arrow-alt-circle-down"></i>`);
}

export function rolesSortMirDown() {
    for (let i = 1; i < ratingPlayers.length; i++) {
        for (let j = ratingPlayers.length-2; j > -1; j--) {
            if (ratingPlayers[j+1].mir == 0) {
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j+1];
                ratingPlayers[j+1] = temp;
            } else if ((+ratingPlayers[j].mirWins / +ratingPlayers[j].mir) > (+ratingPlayers[j+1].mirWins / +ratingPlayers[j+1].mir)){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j+1];
                ratingPlayers[j+1] = temp;
            } else if ((+ratingPlayers[j].mirWins / +ratingPlayers[j].mir) == (+ratingPlayers[j+1].mirWins / +ratingPlayers[j+1].mir)){
                if (ratingPlayers[j].mirWins > ratingPlayers[j+1].mirWins) { 
                    var temp = ratingPlayers[j];
                    ratingPlayers[j] = ratingPlayers[j+1];
                    ratingPlayers[j+1] = temp;
                } else if (ratingPlayers[j].mirWins == 0) {
                    if (ratingPlayers[j].mir < ratingPlayers[j+1].mir) {
                        var temp = ratingPlayers[j];
                        ratingPlayers[j] = ratingPlayers[j+1];
                        ratingPlayers[j+1] = temp;
                    }
                }
            }
        }
    }
    $('.row').remove();
    createRatedTable();
    $('.mirSort').removeClass('down').addClass('up');
    $('.up').html(`<i class="far fa-arrow-alt-circle-up"></i>`);
}

export function rolesSortMaf(){
    for (let i = 1; i < ratingPlayers.length; i++) {
        for (let j = 1; j < ratingPlayers.length; j++) {
            if (ratingPlayers[j-1].maf == 0) {
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            } else if ((+ratingPlayers[j].mafWins / +ratingPlayers[j].maf) > (+ratingPlayers[j-1].mafWins / +ratingPlayers[j-1].maf)){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            } else if ((+ratingPlayers[j].mafWins / +ratingPlayers[j].maf) == (+ratingPlayers[j-1].mafWins / +ratingPlayers[j-1].maf)){
                if (ratingPlayers[j].mafWins > ratingPlayers[j-1].mafWins) { 
                    var temp = ratingPlayers[j];
                    ratingPlayers[j] = ratingPlayers[j-1];
                    ratingPlayers[j-1] = temp;
                } else if (ratingPlayers[j].mafWins == 0) {
                    if (ratingPlayers[j].maf < ratingPlayers[j-1].maf) {
                        var temp = ratingPlayers[j];
                        ratingPlayers[j] = ratingPlayers[j-1];
                        ratingPlayers[j-1] = temp;
                    }
                }
            }
        }
    }
    $('.row').remove();
    createRatedTable();
    $('.down').removeClass('down').addClass('left');
    $('.up').removeClass('up').addClass('left');
    $('.fa-arrow-alt-circle-down').removeClass('fa-arrow-alt-circle-down').addClass('fa-arrow-alt-circle-left');
    $('.fa-arrow-alt-circle-up').removeClass('fa-arrow-alt-circle-up').addClass('fa-arrow-alt-circle-left');
    $('.mafSort').removeClass('left').addClass('down');
    $('.down').html(`<i class="far fa-arrow-alt-circle-down"></i>`);
}

export function rolesSortMafDown() {
    for (let i = 1; i < ratingPlayers.length; i++) {
        for (let j = ratingPlayers.length-2; j > -1; j--) {
            if (ratingPlayers[j+1].maf == 0) {
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j+1];
                ratingPlayers[j+1] = temp;
            } else if ((+ratingPlayers[j].mafWins / +ratingPlayers[j].maf) > (+ratingPlayers[j+1].mafWins / +ratingPlayers[j+1].maf)){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j+1];
                ratingPlayers[j+1] = temp;
            } else if ((+ratingPlayers[j].mafWins / +ratingPlayers[j].maf) == (+ratingPlayers[j+1].mafWins / +ratingPlayers[j+1].maf)){
                if (ratingPlayers[j].mafWins > ratingPlayers[j+1].mafWins) { 
                    var temp = ratingPlayers[j];
                    ratingPlayers[j] = ratingPlayers[j+1];
                    ratingPlayers[j+1] = temp;
                } else if (ratingPlayers[j].mafWins == 0) {
                    if (ratingPlayers[j].maf < ratingPlayers[j+1].maf) {
                        var temp = ratingPlayers[j];
                        ratingPlayers[j] = ratingPlayers[j+1];
                        ratingPlayers[j+1] = temp;
                    }
                }
            }
        }
    }
    $('.row').remove();
    createRatedTable();
    $('.mafSort').removeClass('down').addClass('up');
    $('.up').html(`<i class="far fa-arrow-alt-circle-up"></i>`);
}

export function rolesSortDon(){
    for (let i = 1; i < ratingPlayers.length; i++) {
        for (let j = 1; j < ratingPlayers.length; j++) {
            if (ratingPlayers[j-1].don == 0) {
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            } else if ((+ratingPlayers[j].donWins / +ratingPlayers[j].don) > (+ratingPlayers[j-1].donWins / +ratingPlayers[j-1].don)){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            } else if ((+ratingPlayers[j].donWins / +ratingPlayers[j].don) == (+ratingPlayers[j-1].donWins / +ratingPlayers[j-1].don)){
                if (ratingPlayers[j].donWins > ratingPlayers[j-1].donWins) { 
                    var temp = ratingPlayers[j];
                    ratingPlayers[j] = ratingPlayers[j-1];
                    ratingPlayers[j-1] = temp;
                } else if (ratingPlayers[j].donWins == 0) {
                    if (ratingPlayers[j].don < ratingPlayers[j-1].don) {
                        var temp = ratingPlayers[j];
                        ratingPlayers[j] = ratingPlayers[j-1];
                        ratingPlayers[j-1] = temp;
                    }
                }
            }
        }
    }
    $('.row').remove();
    createRatedTable();
    $('.down').removeClass('down').addClass('left');
    $('.up').removeClass('up').addClass('left');
    $('.fa-arrow-alt-circle-down').removeClass('fa-arrow-alt-circle-down').addClass('fa-arrow-alt-circle-left');
    $('.fa-arrow-alt-circle-up').removeClass('fa-arrow-alt-circle-up').addClass('fa-arrow-alt-circle-left');
    $('.donSort').removeClass('left').addClass('down');
    $('.down').html(`<i class="far fa-arrow-alt-circle-down"></i>`);
}

export function rolesSortDonDown() {
    for (let i = 1; i < ratingPlayers.length; i++) {
        for (let j = ratingPlayers.length-2; j > -1; j--) {
            if (ratingPlayers[j+1].don == 0) {
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j+1];
                ratingPlayers[j+1] = temp;
            } else if ((+ratingPlayers[j].donWins / +ratingPlayers[j].don) > (+ratingPlayers[j+1].donWins / +ratingPlayers[j+1].don)){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j+1];
                ratingPlayers[j+1] = temp;
            } else if ((+ratingPlayers[j].donWins / +ratingPlayers[j].don) == (+ratingPlayers[j+1].donWins / +ratingPlayers[j+1].don)){
                if (ratingPlayers[j].donWins > ratingPlayers[j+1].donWins) { 
                    var temp = ratingPlayers[j];
                    ratingPlayers[j] = ratingPlayers[j+1];
                    ratingPlayers[j+1] = temp;
                } else if (ratingPlayers[j].donWins == 0) {
                    if (ratingPlayers[j].don < ratingPlayers[j+1].don) {
                        var temp = ratingPlayers[j];
                        ratingPlayers[j] = ratingPlayers[j-1];
                        ratingPlayers[j+1] = temp;
                    }
                }
            }
        }
    }
    $('.row').remove();
    createRatedTable();
    $('.donSort').removeClass('down').addClass('up');
    $('.up').html(`<i class="far fa-arrow-alt-circle-up"></i>`);
}

export function rolesSortSher(){
    for (let i = 1; i < ratingPlayers.length; i++) {
        for (let j = 1; j < ratingPlayers.length; j++) {
            if (ratingPlayers[j-1].sher == 0) {
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            } else if ((+ratingPlayers[j].sherWins / +ratingPlayers[j].sher) > (+ratingPlayers[j-1].sherWins / +ratingPlayers[j-1].sher)){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j-1];
                ratingPlayers[j-1] = temp;
            } else if ((+ratingPlayers[j].sherWins / +ratingPlayers[j].sher) == (+ratingPlayers[j-1].sherWins / +ratingPlayers[j-1].sher)){
                if (ratingPlayers[j].sherWins > ratingPlayers[j-1].sherWins) { 
                    var temp = ratingPlayers[j];
                    ratingPlayers[j] = ratingPlayers[j-1];
                    ratingPlayers[j-1] = temp;
                } else if (ratingPlayers[j].sherWins == 0) {
                    if (ratingPlayers[j].sher < ratingPlayers[j-1].sher) {
                        var temp = ratingPlayers[j];
                        ratingPlayers[j] = ratingPlayers[j-1];
                        ratingPlayers[j-1] = temp;
                    }
                }
            }
        }
    }
    $('.row').remove();
    createRatedTable();
    $('.down').removeClass('down').addClass('left');
    $('.up').removeClass('up').addClass('left');
    $('.fa-arrow-alt-circle-down').removeClass('fa-arrow-alt-circle-down').addClass('fa-arrow-alt-circle-left');
    $('.fa-arrow-alt-circle-up').removeClass('fa-arrow-alt-circle-up').addClass('fa-arrow-alt-circle-left');
    $('.sherSort').removeClass('left').addClass('down');
    $('.down').html(`<i class="far fa-arrow-alt-circle-down"></i>`);
}

export function rolesSortSherDown() {
    for (let i = 1; i < ratingPlayers.length; i++) {
        for (let j = ratingPlayers.length-2; j > -1; j--) {
            if (ratingPlayers[j+1].sher == 0) {
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j+1];
                ratingPlayers[j+1] = temp;
            } else if ((+ratingPlayers[j].sherWins / +ratingPlayers[j].sher) > (+ratingPlayers[j+1].sherWins / +ratingPlayers[j+1].sher)){
                var temp = ratingPlayers[j];
                ratingPlayers[j] = ratingPlayers[j+1];
                ratingPlayers[j+1] = temp;
            } else if ((+ratingPlayers[j].sherWins / +ratingPlayers[j].sher) == (+ratingPlayers[j+1].sherWins / +ratingPlayers[j+1].sher)){
                if (ratingPlayers[j].sherWins > ratingPlayers[j+1].sherWins) { 
                    var temp = ratingPlayers[j];
                    ratingPlayers[j] = ratingPlayers[j+1];
                    ratingPlayers[j+1] = temp;
                } else if (ratingPlayers[j].sherWins == 0) {
                    if (ratingPlayers[j].sher < ratingPlayers[j+1].sher) {
                        var temp = ratingPlayers[j];
                        ratingPlayers[j] = ratingPlayers[j+1];
                        ratingPlayers[j+1] = temp;
                    }
                }
            }
        }
    }
    $('.row').remove();
    createRatedTable();
    $('.sherSort').removeClass('down').addClass('up');
    $('.up').html(`<i class="far fa-arrow-alt-circle-up"></i>`);
}


