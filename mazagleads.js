$(document).ready(function() {
    let url_string = window.location.href;
    let param = new URL(url_string);
    let id = param.searchParams.get("id"); //pega o value
    let url = window.location.href;
    $("form").append("<input type='hidden' name='id' value='"+id+"'/>");
    $("form").append("<input type='hidden' name='url' value='"+url+"'/>");
    $("button").click(function() {
        let data = $("form").serializeArray();
        $.post('http://localhost:3001/api/v1', data);                
    });
});
