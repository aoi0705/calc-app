if(sessionStorage.getItem('yourpartner') == "いる"){
    var partner_bool2 = true;
}
else if(sessionStorage.getItem('yourpartner') == "いない"){
    var partner_bool2 = false;
}

if(sessionStorage.getItem('children') == "いる"){
    var children_bool2 = true;
}
else if(sessionStorage.getItem('children') == "いない"){
    var children_bool2 = false;
}

if(sessionStorage.getItem('number-children') == "one"){
    var children_n = 1;
}
else if(sessionStorage.getItem('number-children') == "two"){
    var children_n = 2;
}
else if(sessionStorage.getItem('number-children') == "three"){
    var children_n = 3;
}
else if(sessionStorage.getItem('number-children') == "four"){
    var children_n = 4;
}
else if(sessionStorage.getItem('number-children') == "five"){
    var children_n = 5;
}
else if(sessionStorage.getItem('number-children') == "six"){
    var children_n = 6;
}
else if(sessionStorage.getItem('number-children') == "seven"){
    var children_n = 7;
}
else if(sessionStorage.getItem('number-children') == "eight"){
    var children_n = 8;
}
else if(sessionStorage.getItem('number-children') == "nine"){
    var children_n = 9;
}
else if(sessionStorage.getItem('number-children') == "ten"){
    var children_n = 10;
}

if(sessionStorage.getItem('house-class') == "rental"){
    var myhome = true;
}
else{
    var myhome = false;
}

var children_number = sessionStorage.getItem('number-children')

if(String(sessionStorage.getItem('Estate-Investment')) == "0"){
    var estate_bool = false;
}
else{
    var estate_bool = true;
}

$(function(){
    window.addEventListener('load', function(){
        if(sessionStorage.getItem('yourpartner') == "いる"){
            var partner_bool2 = true;
        }
        else if(sessionStorage.getItem('yourpartner') == "いない"){
            var partner_bool2 = false;
        }
        
        if(sessionStorage.getItem('children') == "いる"){
            var children_bool2 = true;
        }
        else if(sessionStorage.getItem('children') == "いない"){
            var children_bool2 = false;
        }
        
        if(sessionStorage.getItem('number-children') == "one"){
            var children_n = 1;
        }
        else if(sessionStorage.getItem('number-children') == "two"){
            var children_n = 2;
        }
        else if(sessionStorage.getItem('number-children') == "three"){
            var children_n = 3;
        }
        else if(sessionStorage.getItem('number-children') == "four"){
            var children_n = 4;
        }
        else if(sessionStorage.getItem('number-children') == "five"){
            var children_n = 5;
        }
        else if(sessionStorage.getItem('number-children') == "six"){
            var children_n = 6;
        }
        else if(sessionStorage.getItem('number-children') == "seven"){
            var children_n = 7;
        }
        else if(sessionStorage.getItem('number-children') == "eight"){
            var children_n = 8;
        }
        else if(sessionStorage.getItem('number-children') == "nine"){
            var children_n = 9;
        }
        else if(sessionStorage.getItem('number-children') == "ten"){
            var children_n = 10;
        }
        else if(children_bool2 == false){
            var children_n = 0;
        }
        
        if(sessionStorage.getItem('house-class') == "rental"){
            var myhome = true;
        }
        else{
            var myhome = false;
        }
        
        var houseclass = sessionStorage.getItem('house-class')

        if(sessionStorage.getItem('Estate-Investment') == "0"){
            var estate_bool = false;
        }
        else{
            var estate_bool = true;
        }

        if(partner_bool2 == true && myhome == true && children_bool2 == true){
            const stat = document.querySelector('.last-state-page');
            var s = (children_n * 4) + 12;
            stat.textContent = String(s);
        }
        else if(partner_bool2 == true && myhome == true && children_bool2 == false){
            const stat = document.querySelector('.last-state-page');
            var s = 12;
            stat.textContent = String(s);
        }
        else if(partner_bool2 == true && myhome == false && children_bool2 == true){
            const stat = document.querySelector('.last-state-page');
            var s = (children_n * 4) + 11;
            stat.textContent = String(s);
        }
        else if(partner_bool2 == true && myhome == false && children_bool2 == false){
            const stat = document.querySelector('.last-state-page');
            var s = 11;
            stat.textContent = String(s);
        }
        else if(partner_bool2 == false && myhome == true && children_bool2 == true){
            const stat = document.querySelector('.last-state-page');
            var s = (children_n * 4) + 8;
            stat.textContent = String(s);
        }
        else if(partner_bool2 == false && myhome == false && children_bool2 == true){
            const stat = document.querySelector('.last-state-page');
            var s = (children_n * 4) + 7;
            stat.textContent = String(s);
        }
        else if(partner_bool2 == false && myhome == true && children_bool2 == false){
            const stat = document.querySelector('.last-state-page');
            var s = 8;
            stat.textContent = String(s);
        }
        else if(partner_bool2 == false && myhome == false && children_bool2 == false){
            const stat = document.querySelector('.last-state-page');
            var s = 7;
            stat.textContent = String(s);
        }

        console.log(estate_bool);
        if(sessionStorage.getItem('house-class') == "myhouse"){
			// 次の項目を表示
			let box = document.querySelector('#yourhome');
			//styleのdisplayを変更する関数
			box.style.display='';
        }
        else if(estate_bool == true){
            // 次の項目を表示
			let box = document.querySelector('#yourestate');
			//styleのdisplayを変更する関数
			box.style.display='';
        }
        else{
            // 次の項目を表示
			let box = document.querySelector('#yoursavingsbalance');
			//styleのdisplayを変更する関数
			box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = Number(stat.textContent) - 1
        }
    });
});