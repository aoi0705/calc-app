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

$(function(){
    window.addEventListener('load', function(){
        if(sessionStorage.getItem('house-class') == "myhouse"){
			// 次の項目を表示
			let box = document.querySelector('#yourhome');
			//styleのdisplayを変更する関数
			box.style.display='';
        }
        else{
            // 次の項目を表示
			let box = document.querySelector('#yourestate');
			//styleのdisplayを変更する関数
			box.style.display='';
        }
    });
});

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
        
        if(sessionStorage.getItem('house-class') == "rental"){
            var myhome = true;
        }
        else{
            var myhome = false;
        }

        if(partner_bool2 == true && children_bool2 == true){
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "21"
        }
        else if(partner_bool2 == false && children_bool2 == false){
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "17"
        }
        else{
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "19"
        }
    });
});




