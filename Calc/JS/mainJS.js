var b=0;
var d=0;

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
            "        </tr>"
        );
	}
}
function Plus(a, h) {
    if (h == 0) return a;
    var sum = a ^ h;		// добавляем без переноса
    var carry = (a & h) << 1;	// перенос без суммирования
    return Plus(sum, carry);		// рекурсия
}
function Multiply(v, r) {
    q = "";

	var gal=0;
    for (j = 0; j <= count; j++) {
        var check = $('#' + j + '_0').prop("checked");
		if (check == true){
			gal++;
			//console.log(gal);
		}
		var arr=new Array(gal);
		if (check == true) {
		    for (u=1;u<=gal;u++){
                for (i = 1; i <= 8; i++) {
                    w = $('#' + j + '_' + i).val();                   
                    q = q + w;                   
                    
                };
                arr[u]=q;
                q=0;
		    };

		};
				console.log(arr);
				//alert("Результат умножения:"+q+"="+p);
    }
    ;
}
;
    /*for (i = 8; i >= 1; i--) {
        o = $('#' + e + '_' + i).val();
        arry[i]=parseInt(w);
    };*/

       /* if ((b == 0) || (b == 1)) {
        }
        v= parseInt(q);
        r= parseInt(l);
        var mult = v & r;
        alert()*/


$(document).ready(function() {
    $('#check_all').change(function () {
        e=false;
        if (this.checked){
        $("input[type=checkbox]").prop('checked', true);

        }else{
            $("input[type=checkbox]").prop('checked', false);

        }

    });
});

/* сложение и умножение строк введеных пользователем, выделение цветом, excel, чекбоксы на выбор строк, удаление строк*/