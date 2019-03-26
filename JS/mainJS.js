var b=0;
var d=0;
var j=0;
function Pars () {

    for (var i = 7; i >=0; i--){
       var c = $('#'+i).val();
       b = parseInt(c);
       d =d+( b * Math.pow(2, j));
       j++;
    }
    console.log(d);
    $('#8').html('<p>'+d+'</p>');
};
