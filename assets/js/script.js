var arrTodo = ["seguire la lezione", "svolgere gli esercizi", "fare ginnastica", "guardare un film"];

for (var i = 0; i < arrTodo.length; i++) {
    var strTodo = arrTodo[i];
    console.log(strTodo);

    var strHtml = '<li><p> ' + strTodo + ' </p><i class="fas fa-trash-alt"></i></li>';
    $(".app ul").append(strHtml);
}

/* 
$(document).on('click', 'fa-trash-alt', function() {
    console.log(this);
}); 
*/