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

function colorMatch(one, two, three, four){
    return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined );
}

function checkHorizontal(){
    for(var row = 0; row < 6; row++){
        for(var col = 0; col < 4; col++){
            if(colorMatch(returnColor(row, col), returnColor(row, col + 1), returnColor(row, col + 2), returnColor(row, col + 3))){
                return true;
            }
        }
    }
    return false;
}

function gameEnd(winner){
    $('h3').fadeOut('fast');
    $('h1').text(winner + "has won!, refresh browser for play again!")
    alert('browser refresh');

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
    if(checkHorizontal()){
        console.log("gameend");
        gameEnd(currentPlayerName);
        
    }
    currentPlayer = currentPlayer * -1;
    if(currentPlayer < 0){
        currentPlayerName = player2;
        currentColor = player2Color;
    }else{
        currentPlayerName = player1;
        currentColor = player1Color;
    }

    $('h3').text(currentPlayerName + ": it's your turn, please pick a column to drop your blue chip");

});



