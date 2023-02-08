document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('btn').style.display='none';
    document.getElementById("infoextra").innerHTML="12/6/1976";
    document.getElementById('btn-').style.display='inline';
});
document.getElementById('btn-').addEventListener('click', function(){
    document.getElementById('btn-').style.display='none';
    document.getElementById("infoextra").innerHTML="";
    document.getElementById('btn').style.display='inline';
});

document.getElementById('btn2').addEventListener('click', function(){
    document.getElementById('btn2').style.display='none';
    document.getElementById("infoextra2").innerHTML="207 Bollinger Rd";
    document.getElementById('btn2-').style.display='inline';
});
document.getElementById('btn2-').addEventListener('click', function(){
    document.getElementById('btn2-').style.display='none';
    document.getElementById("infoextra2").innerHTML="";
    document.getElementById('btn2').style.display='inline';
});

