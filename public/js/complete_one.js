$(function(){
    var input_list =  document.getElementsByClassName("form-control");
    let ele = document.getElementsByName("spouse");
    let len = ele.length;
    let checkValue = '';
    for (let i = 0; i < len; i++){
        if (ele.item(i).checked){
            checkValue = ele.item(i).value;
        }
    }
    if(checkValue == "いる"){
        var partner_bool = true;
    }
    else if(checkValue == "いない"){
        var partner_bool = false;
    }

    let ele2 = document.getElementsByName("children");
    let len2 = ele.length;
    let checkValue2 = '';
    for (let i = 0; i < len2; i++){
        if (ele2.item(i).checked){
            checkValue2 = ele2.item(i).value;
        }
    }
    if(checkValue2 == "いる"){
        var children_bool = true;
    }
    else if(checkValue2 == "いない"){
        var  children_bool = false;
    }

    var select = document.getElementById("number-children");
    children_num = select.value;

    if(children_num == "one"){
        var children_number_int = 1;
    }
    else if(children_num == "two"){
        var children_number_int = 2;
    }
    else if(children_num == "three"){
        var children_number_int = 3;
    }
    else if(children_num == "four"){
        var children_number_int = 4;
    }
    else if(children_num == "five"){
        var children_number_int = 5;
    }
    else if(children_num == "six"){
        var children_number_int = 6;
    }
    else if(children_num == "seven"){
        var children_number_int = 7;
    }
    else if(children_num == "eight"){
        var children_number_int = 8;
    }
    else if(children_num == "nine"){
        var children_number_int = 9;
    }
    else if(children_num == "ten"){
        var children_number_int = 10;
    }

    for(let i = 0; i < input_list.length; i++) {
        input_list[i].addEventListener("input",()=>{
            if(children_bool == true){
                var none_class = document.getElementsByClassName("form-group");
                var children_number_int_max = children_number_int * 2;

                for(let i = 10;i <= 10+children_number_int_max;i++){
                    if(none_class[i].style.display == 'none'){
                        break
                    }
                }

                if(i = 10+children_number_int_max){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        });
    }
});