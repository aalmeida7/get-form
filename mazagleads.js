$(document).ready(function() {
    let url = window.location.href;
    $("form").append("<input type='hidden' name='url' value='"+url+"'/>");
    $("button").click(function() {
        let data = $("form").serializeArray();
        $.post('http://localhost:3001/api/v1', data);                
    });
});
