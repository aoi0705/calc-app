var elem_list = document.getElementsByClassName("form-group")

$(function(){
    elem_list.forEach(elem => {
        submit.addEventListener('change', (e) => {
            var cn = document.querySelector(".last-state-page").textContent
            
            if(String(cn) != '0'){
                let next_button = document.querySelector("#next_page2");
                $('#next_page2').prop('disabled', true);
                next_button.id = "next_page2-not"
            }
        });
    });
});