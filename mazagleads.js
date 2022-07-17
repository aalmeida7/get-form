$(document).ready(function() {
    let host = window.location.host;
    let pathname = window.location.pathname;
    $("form").append("<input type='hidden' name='host' value='"+host+"'/>");
    $("form").append("<input type='hidden' name='pathname' value='"+pathname+"'/>");
    $("button").click(function() {
        let data = $("form").serializeArray();
        $.post('http://localhost:3001/api/v1', data);                
    });
});
