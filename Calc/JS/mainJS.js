var b=0;
var d=0;
var j=0;
var count=0;

function Pars () {
    g= prompt('Введите строку которую хотите подсчитать ', 0);
    var k= false;
    for ( i = 8; i >=1; i--){
        var c = $('#'+g+'_'+i).val();
        b = parseInt(c);
        if ((b==0) || (b==1)){
            d =d+( b * Math.pow(2, j));
            j++;
        }else {
            alert("Вы ввели не верное значение в ячейку № "+g+" "+i);
            k=true;
        }
	}
	if (k==false){
	    $('#'+g+"_9").html(d);
	    k=false;
	}
	if (d<=50) {

    }
	
	console.log(d);
    d=0;
    j=0;
	console.log('1'+'1')
};
function Add() {
    t = prompt(' ', 0);
	for (i = 1; i <= t; i++) {
        count++;
        $("#tab").last().append("<tr>\n" +
			"			 <td><input type=\"checkbox\" class=\"chek\" id=\"" + count + "_0\" ></td>\n"+
            "            <td><input type=\"text\" class=\"Cell\" maxlength=\"1\" name=\"checks\" id=\"" + count + "_1\"  value=\"0\"></td>\n" +
            "            <td><input type=\"text\" class=\"Cell\" maxlength=\"1\" name=\"checks\" id=\"" + count + "_2\"  value=\"0\"></td>\n" +
            "            <td><input type=\"text\" class=\"Cell\" maxlength=\"1\" name=\"checks\" id=\"" + count + "_3\"  value=\"0\"></td>\n" +
            "            <td><input type=\"text\" class=\"Cell\" maxlength=\"1\" name=\"checks\" id=\"" + count + "_4\"  value=\"0\"></td>\n" +
            "            <td><input type=\"text\" class=\"Cell\" maxlength=\"1\" name=\"checks\" id=\"" + count + "_5\"  value=\"0\"></td>\n" +
            "            <td><input type=\"text\" class=\"Cell\" maxlength=\"1\" name=\"checks\" id=\"" + count + "_6\"  value=\"0\"></td>\n" +
            "            <td><input type=\"text\" class=\"Cell\" maxlength=\"1\" name=\"checks\" id=\"" + count + "_7\"  value=\"0\"></td>\n" +
            "            <td><input type=\"text\" class=\"Cell\" maxlength=\"1\" name=\"checks\" id=\"" + count + "_8\"  value=\"0\"></td>\n" +
            "            <td id=\"" + count + "_9\"></td>" + 
            "        </tr>");
        //$('.Start').before('<input type="checkbox" class="chek" >')
    }
}
function Plus(a, h) {
    if (h == 0) return a;
    var sum = a ^ h;		// добавляем без переноса
    var carry = (a & h) << 1;	// перенос без суммирования
    return Plus(sum, carry);		// рекурсия
}
function Multiply(v, r) {
	e=prompt('Введите номера строк',)
    var mult = v & r;
}
$(document).ready(function() {
    $('#check_all').click(function () {
        e=false;
        if (e==false){
        $("input[type=checkbox]").prop('checked', true);
        e=true;
        }else{
            $("input[type=checkbox]").prop('checked', false);
            e=false;
        }

    });
});

/* сложение и умножение строк введеных пользователем, выделение цветом, excel, чекбоксы на выбор строк, удаление строк*/