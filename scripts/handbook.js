for (var i in sections) {
    var section = sections[i];
    $.ajax({
        type: 'GET',
        async: false,
        url: section + '.html',
        error: function() {
        },
        success: function(data) {
            $('#' + section).html(data);
        }
    });
}
$('#loading').fadeOut(200);


$('a').click(function() {
    var adjustment = 73;
    var speed = 1;
    var header = this.hash;
    $('html,body').animate({
        scrollTop: $(header).offset().top - adjustment
    }, speed);
});
