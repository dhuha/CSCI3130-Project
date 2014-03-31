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
        $.get(("http://centi.cs.dal.ca:60000/user/twitter/" + username), function(user, textStatus, jhxfq) {
            //handle twitter here. 
            u = JSON.parse(user);
            $("#twitterbio").html(u.bio);
            $("#name").html(u.name);

        });
        $.get("http://centi.cs.dal.ca:60000/user/twitter/pic/" + username,
            function(data, textStatus, jhxfq) {
                $("#twitterpic").html('<img src="data:image/jpg;base64,' + data + '"/>');
            });
    });


    // //Function to request workout history data from server
    // function getUserWorkoutHistoryData() {
    //     //This function needs to be modified based on server endpoint for getting history
    //     return {
    //         pushups: [{
    //             date: new Date(2013, 10, 10),
    //             reps: 10
    //         }, {
    //             date: new Date(2013, 10, 11),
    //             reps: 15
    //         }, {
    //             date: new Date(2013, 10, 12),
    //             reps: 12
    //         }, {
    //             date: new Date(2013, 10, 13),
    //             reps: 10
    //         }, {
    //             date: new Date(2013, 10, 14),
    //             reps: 13
    //         }, {
    //             date: new Date(2013, 10, 15),
    //             reps: 9
    //         }, {
    //             date: new Date(2013, 10, 16),
    //             reps: 10
    //         }, {
    //             date: new Date(2013, 10, 17),
    //             reps: 15
    //         }, {
    //             date: new Date(2013, 10, 18),
    //             reps: 12
    //         }, {
    //             date: new Date(2013, 10, 19),
    //             reps: 10
    //         }, {
    //             date: new Date(2013, 10, 20),
    //             reps: 13
    //         }, {
    //             date: new Date(2013, 10, 21),
    //             reps: 9
    //         }, {
    //             date: new Date(2013, 10, 22),
    //             reps: 10
    //         }, {
    //             date: new Date(2013, 10, 23),
    //             reps: 15
    //         }, {
    //             date: new Date(2013, 10, 24),
    //             reps: 12
    //         }, {
    //             date: new Date(2013, 10, 25),
    //             reps: 10
    //         }, {
    //             date: new Date(2013, 10, 26),
    //             reps: 13
    //         }, {
    //             date: new Date(2013, 10, 27),
    //             reps: 9
    //         }],
    //         running: [{
    //             date: '2013-10-10',
    //             time: 30
    //         }, {
    //             date: '2013-10-11',
    //             time: 35
    //         }, {
    //             date: '2013-10-12',
    //             time: 25
    //         }, {
    //             date: '2013-10-15',
    //             time: 45
    //         }],
    //         barbell: [{
    //             date: '2013-10-10',
    //             wght: 25
    //         }, {
    //             date: '2013-10-11',
    //             wght: 15
    //         }, {
    //             date: '2013-10-12',
    //             wght: 20
    //         }, {
    //             date: '2013-10-13',
    //             wght: 25
    //         }, {
    //             date: '2013-10-14',
    //             wght: 25
    //         }, {
    //             date: '2013-10-15',
    //             wght: 30
    //         }]
    //     };
    // }

    // //Load the google visualization library
    // google.load("visualization", "1", {
    //     packages: ["corechart"]
    // });
    // google.setOnLoadCallback(drawChart);

    // //Function which renders charts for workout history
    // function drawChart() {
    //     //Call the function to get workout history
    //     var dataArr = getUserWorkoutHistoryData();

    //     //Checks if the pushups attribute is defined in the object
    //     if (dataArr.pushups != undefined) {
    //         //Format push up data
    //         var pushupsdata = Array();
    //         pushupsdata[0] = ['Date', 'Repititions'];
    //         for (var i = 0; i < dataArr.pushups.length; i++) {
    //             pushupsdata[i + 1] = [dataArr.pushups[i].date, dataArr.pushups[i].reps];
    //         }
    //         pushupsdata = google.visualization.arrayToDataTable(pushupsdata);

    //         //Draw pushup history chart
    //         var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
    //         chart.draw(pushupsdata, {
    //             title: 'Pushups',
    //             hAxis: {
    //                 title: 'Date',
    //                 format: 'yyyy-MM-dd'
    //             },
    //             vAxis: {
    //                 title: 'Repetitiions'
    //             }
    //         });
    //     }

    //     //Check if running history is available
    //     if (dataArr.running != undefined) {
    //         //Format running history
    //         var runningdata = Array();
    //         runningdata[0] = ['Date', 'Duration'];
    //         for (var i = 0; i < dataArr.running.length; i++) {
    //             runningdata[i + 1] = [dataArr.running[i].date, dataArr.running[i].time];
    //         }
    //         runningdata = google.visualization.arrayToDataTable(runningdata);

    //         //Draw running chart
    //         var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
    //         chart.draw(runningdata, {
    //             title: 'Running',
    //             hAxis: {
    //                 title: 'Date',
    //                 format: 'yyyy-MM-dd'
    //             },
    //             vAxis: {
    //                 title: 'Duration (mins)'
    //             }
    //         });
    //     }

    //     //Check if barbell history is available
    //     if (dataArr.barbell != undefined) {
    //         //Format barbell history
    //         var barbelldata = Array();
    //         barbelldata[0] = ['Date', 'Repititions'];
    //         for (var i = 0; i < dataArr.barbell.length; i++) {
    //             barbelldata[i + 1] = [dataArr.barbell[i].date, dataArr.barbell[i].wght];
    //         }
    //         barbelldata = google.visualization.arrayToDataTable(barbelldata);

    //         //Draw barbell chart
    //         var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
    //         chart.draw(barbelldata, {
    //             title: 'Barbell',
    //             hAxis: {
    //                 title: 'Date',
    //                 format: 'yyyy-MM-dd'
    //             },
    //             vAxis: {
    //                 title: 'Weight (lbs)'
    //             }
    //         });
    //     }
    // }
});