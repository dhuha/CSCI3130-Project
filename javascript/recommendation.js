/**
 * controls recommendations in the user page
 * @module recommendaion
 * @requires jquery
 */

//run on document load
/**
 * populate reccomendations on page load
 * @class ready
 */

$(document).ready(function() {
    //get the tags cookie
    var user = $.cookie('username');
    console.log("user: " + user);

    $.get("http://centi.cs.dal.ca:60000/user/", function(username, textStatus, jhxfq) {
        if (!username) {
            username = $.cookie('username');
        }

        /**
         * sends a get request to the server for the useres tags
         * @method  get
         * @param {String} url server reqest URL
         * @param {function} callback once the tags have been fetched
         * @return {Strinf} the tags of the user
         */
        $.get("http://centi.cs.dal.ca:60000/user/tags/" + username, function(tags, textStatus, jhxfq) {
            console.log("server returned: " + tags);
            if (tags == null) {
                window.location = "user_login.html";
            }
            //hide reccomendations that havent been tagged
            console.log(lowCardio());
            if (tags.indexOf("lowCardio") != -1) {
                var curr = $("#whiteBox").html();
                console.log("showing lowCardio: " + curr)
                $("#whiteBox").html(curr + (lowCardio() + "<br/><br/>"));
            }

            if (tags.indexOf("lowStrength") != -1) {
                console.log("showing lowStrength")
                var curr = $("#whiteBox").html();
                $("#whiteBox").html(curr + (lowStrength() + "<br/><br/>"));
            }

            if (tags.indexOf("highCardio") != -1) {
                console.log("showing highCardio");
                var curr = $("#whiteBox").html();
                $("#whiteBox").html(curr + (highCardio() + "<br/><br/>"));
            }

            if (tags.indexOf("highStrength") != -1) {
                console.log("showing highStrength");
                var curr = $("#whiteBox").html();
                $("#whiteBox").html(curr + (highStrength() + "<br/><br/>"));
            }

            if (tags.indexOf("lowIntensity") != -1) {
                console.log("showing lowIntensity")
                var curr = $("#whiteBox").html();
                $("#whiteBox").html(curr + (lowIntensity() + "<br/><br/>"));

            }

            if (tags.indexOf("highIntensity") != -1) {
                console.log("showing highIntensity");
                var curr = $("#whiteBox").html();
                $("#whiteBox").html(curr + (highIntensity() + "<br/><br/>"));
            }

        });

        $.get(("http://centi.cs.dal.ca:60000/user/ntags/" + username), function(ntags, textStatus, jhxfq) {

            if (ntags.indexOf("strength") != -1) {
                console.log("showing nutri recommendation for strength");
                var curr = $("#whiteBox1").html();
                $("#whiteBox1").html(curr + (lowStrengthNutrition() + "<br/><br/>"));
            }
            if (ntags.indexOf("intensity") != -1) {
                console.log("showing nutri recommendation for intensity");
                var curr = $("#whiteBox1").html();
                $("#whiteBox1").html(curr + (lowStrengthNutrition() + "<br/><br/>"));
            }
            if (ntags.indexOf("cardio") != -1) {
                console.log("showing nutri recommendation for cardio");
                var curr = $("#whiteBox1").html();
                $("#whiteBox1").html(curr + (lowCardioNutrition() + "<br/><br/>"));
            }
        });
        $.get("http://centi.cs.dal.ca:60000/user/twitter/" + username, function(user, textStatus, jhxfq) {
            //handle twitter here.
            u = JSON.parse(user);
            console.log(u);
            $("#twitterpic").attr("src", "new_image/" + username + '.jpg');
            $("#twitterbio").html(u.bio);
            $("#name").html(u.name);
            if (u.result == "Yes") {
                $("#badge").attr("src", "pics/badge.jpg");
            } else {
                $("#badge").attr("src", "pics/burger.jpg");
            }

        });
        $.get("http://centi.cs.dal.ca:60000/user/twitter/pic/" + username,
            function(data, textStatus, jhxfq) {
                console.log('attempting to display image');
                // $("#twitterpic").html('<img src="data:image/jpg;base64,' + data + '"/>');
            });
    });


});