//Function to request workout history data from server
function getUserWorkoutHistoryData() {
    //This function needs to be modified based on server endpoint for getting history
    return {
        pushups: [{
            date: new Date(2013, 10, 10),
            reps: 10
        }, {
            date: new Date(2013, 10, 11),
            reps: 15
        }, {
            date: new Date(2013, 10, 12),
            reps: 12
        }, {
            date: new Date(2013, 10, 13),
            reps: 10
        }, {
            date: new Date(2013, 10, 14),
            reps: 13
        }, {
            date: new Date(2013, 10, 15),
            reps: 9
        }, {
            date: new Date(2013, 10, 16),
            reps: 10
        }, {
            date: new Date(2013, 10, 17),
            reps: 15
        }, {
            date: new Date(2013, 10, 18),
            reps: 12
        }, {
            date: new Date(2013, 10, 19),
            reps: 10
        }, {
            date: new Date(2013, 10, 20),
            reps: 13
        }, {
            date: new Date(2013, 10, 21),
            reps: 9
        }, {
            date: new Date(2013, 10, 22),
            reps: 10
        }, {
            date: new Date(2013, 10, 23),
            reps: 15
        }, {
            date: new Date(2013, 10, 24),
            reps: 12
        }, {
            date: new Date(2013, 10, 25),
            reps: 10
        }, {
            date: new Date(2013, 10, 26),
            reps: 13
        }, {
            date: new Date(2013, 10, 27),
            reps: 9
        }],
        running: [{
            date: '2013-10-10',
            time: 30
        }, {
            date: '2013-10-11',
            time: 35
        }, {
            date: '2013-10-12',
            time: 25
        }, {
            date: '2013-10-15',
            time: 45
        }],
        barbell: [{
            date: '2013-10-10',
            wght: 25
        }, {
            date: '2013-10-11',
            wght: 15
        }, {
            date: '2013-10-12',
            wght: 20
        }, {
            date: '2013-10-13',
            wght: 25
        }, {
            date: '2013-10-14',
            wght: 25
        }, {
            date: '2013-10-15',
            wght: 30
        }]
    };
}

//Load the google visualization library
google.load("visualization", "1", {
    packages: ["corechart"]
});
google.setOnLoadCallback(drawChart);

//Function which renders charts for workout history
function drawChart() {
    //Call the function to get workout history
    var dataArr = getUserWorkoutHistoryData();
    //Checks if the pushups attribute is defined in the object
    if (dataArr.pushups != undefined) {
        //Format push up data
        var pushupsdata = Array();
        pushupsdata[0] = ['Date', 'Repititions'];
        for (var i = 0; i < dataArr.pushups.length; i++) {
            pushupsdata[i + 1] = [dataArr.pushups[i].date, dataArr.pushups[i].reps];
        }
        pushupsdata = google.visualization.arrayToDataTable(pushupsdata);

        //Draw pushup history chart
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
        chart.draw(pushupsdata, {
            title: 'Pushups',
            hAxis: {
                title: 'Date',
                format: 'yyyy-MM-dd'
            },
            vAxis: {
                title: 'Repetitiions'
            }
        });
    }

    //Check if running history is available
    if (dataArr.running != undefined) {
        //Format running history
        var runningdata = Array();
        runningdata[0] = ['Date', 'Duration'];
        for (var i = 0; i < dataArr.running.length; i++) {
            runningdata[i + 1] = [dataArr.running[i].date, dataArr.running[i].time];
        }
        runningdata = google.visualization.arrayToDataTable(runningdata);
        //Draw running chart
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
        chart.draw(runningdata, {
            title: 'Cardio',
            hAxis: {
                title: 'Date',
                format: 'yyyy-MM-dd'
            },
            vAxis: {
                title: 'Duration (mins)'
            }
        });
    }

    //Check if barbell history is available
    if (dataArr.barbell != undefined) {
        //Format barbell history
        var barbelldata = Array();
        barbelldata[0] = ['Date', 'Repititions'];
        for (var i = 0; i < dataArr.barbell.length; i++) {
            barbelldata[i + 1] = [dataArr.barbell[i].date, dataArr.barbell[i].wght];
        }
        barbelldata = google.visualization.arrayToDataTable(barbelldata);
        //Draw barbell chart
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
        chart.draw(barbelldata, {
            title: 'Weight Lifting',
            hAxis: {
                title: 'Date',
                format: 'yyyy-MM-dd'
            },
            vAxis: {
                title: 'Weight (lbs)'
            }
        });
    }
}