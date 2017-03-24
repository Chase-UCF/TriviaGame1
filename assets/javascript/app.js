window.onload = function() {
    $("#start").click(clock.start);
};

$(function() {
    $("#main").hide();
    $("#results").hide();
    $("#start-button").on("click", function() {
        $("#start-button, #main").toggle();
    });
});

var clock = {
    time: 90,

    start: function() {
        intervalId = setInterval(function() {
            clock.time--;
            var converted = clock.timeConverter(clock.time);
            console.log(converted);
            $('#time').html(converted);
            if (clock.time == 0) {
                $("#results").toggle();
                $("#main").toggle();
                clearInterval(intervalId);
            };
        }, 1000);
    },

    timeConverter: function(t) {


        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
        
    },
};

$(function() {
    
    $("#reset-button").on("click", function() {
        $("#results").toggle();
        $("#start-button").toggle();
        clock.time = 10;
        $('#time').html(clock.timeConverter(90));
    });
});
