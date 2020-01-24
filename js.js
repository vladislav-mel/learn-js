/* var userNum = +prompt('Введите номер квартиры'); */

/* if (userNum > 0 && userNum < 21) {

    alert('Подъезд первый')

} else if (userNum > 20 && userNum < 49) {

    alert('Второй подъезд')

} else if (userNum > 48 && userNum < 91) {

    alert('Третий подъезд')

} else {

    alert('Такой квартиры нет')

} */


function searchPorch(flat, numPorchs, flatsInOnePorch) {
    for (var numPorch = 1; numPorch <= numPorchs; numPorch++) {
        var minInPorchFlat = numPorch * flatsInOnePorch - flatsInOnePorch + 1 /* Минимальное число квартир в подъезде */
        var maxInPorchFlat = numPorch * flatsInOnePorch - flatsInOnePorch /* Максимальное число квартир в подъезде */
        if (minInPorchFlat <= flat && maxInPorchFlat >= flat) {
            return numPorch
        }

    }

}


var users = [['john', 123456], ['jane', 654321], ['alex', 987654], ['vlad', 123]]

function checkUser(user, baseUsers) {
    for (var i = 0; i < baseUsers.lenght; i++) {
        if (baseUsers[i][0] == user[0] && baseUsers[i][1] == user[1]) {
            return true
        }
    }
    return false
}


var User = prompt('введите имя!')
var UserPass = prompt('введите пароль!')

var userArr = [User, UserPass]

var check = checkUser(userArr, users)

if (check) {
    alert('Вы не в системе!')
} else {
    alert('Вы не в системе!')
}