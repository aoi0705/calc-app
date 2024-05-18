$(function(){
    window.addEventListener('load', function(){

        var ele_arr = document.getElementsByClassName("form-group");

        var finish_flg = false;
        for(var i=0;i<30;i++){
            if(sessionStorage.getItem("spone-"+String(i)) == 'y'){
                finish_flg = true;
                console.log("ihhh")
                if(ele_arr[i].style.display == 'none'){
                    ele_arr[i].style.display = '';
                }
            }
        }

        if(finish_flg == true){
            document.querySelector(".last-state-page").textContent = "0";
            let next_button = document.querySelector("#next_page2-not");
            $('#next_page2-not').prop('disabled', false);
            next_button.id = "next_page2"
        }
    
    })
})