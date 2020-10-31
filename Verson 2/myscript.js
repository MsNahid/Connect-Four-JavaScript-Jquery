var player1 = prompt("Enter you name, your color will be blue!")
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Enter you name, your color will be red!")
var player2Color = 'rgb(237, 45, 37)';

var table = $('table tr');

function returnColor(rowIndex, colIndex){
     return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function changeColor(rowIndex, colIndex, color){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);

}

function bottomButtonAvaible(colIndex){
    for(var row = 5; row >= 0; row--){
        var backgroundColor = returnColor(row, colIndex);
        if(backgroundColor === 'rgb(128, 128, 128)'){
            return row;
        }
    }
}

var currentPlayer = 1;
var currentPlayerName = player1;
var currentColor = player1Color;

$('h3').text(player1 + ": it's your turn, please pick a column to drop your blue chip");

$('.board button').on('click', function() {
    var col = $(this).closest("td").index();
    //console.log(col);
    var row = bottomButtonAvaible(col);
    changeColor(row, col, currentColor);

    currentPlayer = currentPlayer * -1;
    if(currentPlayer < 0){
        currentPlayerName = player2;
        currentColor = player2Color;
    }else{
        currentPlayerName = player1;
        currentColor = player1Color;
    }

    $('h3').text(currentPlayer + ": it's your turn, please pick a column to drop your blue chip");

});



