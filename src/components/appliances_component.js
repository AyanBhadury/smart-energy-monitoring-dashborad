import React from 'react';
import ReactFC from 'react-fusioncharts';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './app.css';
import { buildDataThisMonth, buildDataThisYear, buildDataLastMonth, buildDataLastYear } from '../appliances/appliances_data';
import { buildDataToday } from '../appliances/appliances_data';
import { buildDataYesterday } from '../appliances/appliances_data';

class AppliancesComponent extends React.Component {
    constructor(props) {

        super(props);

        this.onClickbutton1 = this.onClickbutton1.bind(this);
        this.onClickbutton2 = this.onClickbutton2.bind(this);
    }

    componentDidMount() {

        document.getElementById("a1").click();
        window.selectedUsage = "all";


    }

    onClickbutton1() {
        window.b2selected = false;

        // document.getElementById("a2").style.borderBottom = "none";
        // document.getElementById("a1").style.borderBottom = "solid 3px white";

        document.getElementById("a2").style.borderBottom = "none";
        document.getElementById("a2").style.color = "#FDFDFD";
        document.getElementById("a2").style.opacity = "0.5";
        document.getElementById("a1").style.color = "#FDFDFD";
        document.getElementById("a1").style.opacity = "1";
        document.getElementById("a1").style.borderBottom = "solid 2px #FDFDFD";
        document.getElementById("a1").style.textTransform = "uppercase";
        document.getElementById("a2").style.textTransform = "uppercase";

        var dataSource;
        if (window.selectedperiod === "today" && window.selectedUsage === "refrigeration") {
            // eslint-disable-next-line
            var todayArr_4 = [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.3];
            // eslint-disable-next-line
            var dataArr = eval("todayArr_" + 4);

            var tecVal = 0;
            for (var i = 0; i < dataArr.length; i++) {
                tecVal = tecVal + dataArr[i];
            }
            var eVal = 0;
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataToday("Refrigeration");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "today" && window.selectedUsage === "heating and ac") {
            // eslint-disable-next-line
            var todayArr_1 = [0.1, 0.1, 0.2, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.3, 0.3, 0.1, 0.1, 0.2, 0.2, 0.2];
            // eslint-disable-next-line  
            var dataArr = eval("todayArr_" + 1);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataToday("Heating & AC");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "today" && window.selectedUsage === "all") {
            // eslint-disable-next-line
            var todayArr_0 = [0.9, 0.7, 0.8, 0.8, 0.6, 0.5, 0.5, 0.5, 0.9, 0.8, 0.7, 0.8, 0.3, 0.3, 0.3, 0.4, 0.7, 1, 1, 0.6, 0.8, 0.7, 0.7, 0.7];
            // eslint-disable-next-line
            var dataArr = eval("todayArr_" + 0);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }

            dataSource = buildDataToday("All");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "today" && window.selectedUsage === "lighting") {
             // eslint-disable-next-line
            var todayArr_2 = [0.2, 0, 0, 0, 0, 0, 0, 0, 0.4, 0.3, 0.3, 0.4, 0, 0, 0, 0, 0.3, 0.3, 0.3, 0.1, 0.1, 0, 0, 0];
            // eslint-disable-next-line
            var dataArr = eval("todayArr_" + 2);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataToday("Lighting");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }

        else if (window.selectedperiod === "today" && window.selectedUsage === "plug loads") {
            // eslint-disable-next-line
            var todayArr_3 = [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2];
            // eslint-disable-next-line
            var dataArr = eval("todayArr_" + 3);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataToday("Plug Loads");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "today" && window.selectedUsage === "other") {
            // eslint-disable-next-line
            var todayArr_5 = [0.1, 0.1, 0.1, 0.1, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1, 0.1, 0, 0, 0];
            // eslint-disable-next-line 
            var dataArr = eval("todayArr_" + 5);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataToday("Other");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "month" && window.selectedUsage === "refrigeration") {
            // eslint-disable-next-line
            var monthDataArr_4 = [5, 5.1, 5, 5, 5.2, 5.1, 5, 5.1, 5, 5.2, 5, 5, 5, 5, 5.2, 5.1, 5, 5.1, 5.2, 5, 5, 5.1, 5.2, 5, 5, 5.2, 5, 5.1, 5.2, 5, 5];
            // eslint-disable-next-line  
            var dataArr = eval("monthDataArr_" + 4);
            // eslint-disable-next-line 
            var tecVal = 0;
            // eslint-disable-next-line 
            for (var i = 0; i < moment().daysInMonth(); i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataThisMonth("Refrigeration");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "month" && window.selectedUsage === "heating and ac") {
            // eslint-disable-next-line
            var monthDataArr_1 = [2, 2, 2.3, 2.3, 2.3, 2.1, 2.2, 2, 2.1, 2.3, 2.2, 2.1, 2, 2.4, 2, 2, 2, 2.2, 2.3, 2.1, 2, 2, 2.2, 2.1, 2, 2.2, 2.1, 2.1, 2, 2.2, 2.1];
            // eslint-disable-next-line  
            var dataArr = eval("monthDataArr_" + 1);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataThisMonth("Heating & AC");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "month" && window.selectedUsage === "all") {
            // eslint-disable-next-line
            var monthDataArr_0 = [14.8, 14.5, 15.4, 15.4, 14.9, 15.3, 15.1, 14.7, 14.8, 15.3, 14.9, 15.3, 14.3, 14.9, 15, 14.8, 14.7, 14.7, 14.9, 14.5, 14.4, 14.7, 15.1, 14.6, 14.7, 15.1, 14.5, 14.8, 14.7, 14.8, 14.4];
            // eslint-disable-next-line
            var dataArr = eval("monthDataArr_" + 0);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line 
            for (var i = 0; i < moment().daysInMonth(); i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataThisMonth("All");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "month" && window.selectedUsage === "lighting") {
            // eslint-disable-next-line
            var monthDataArr_2 = [2.7, 2.3, 2.5, 2.3, 2.3, 2.6, 2.5, 2.5, 2.3, 2.7, 2.6, 2.5, 2.2, 2.4, 2.4, 2.2, 2.3, 2.3, 2.2, 2.3, 2.3, 2.3, 2.6, 2.3, 2.3, 2.5, 2.2, 2.2, 2.2, 2.2, 2.2];
            // eslint-disable-next-line 
            var dataArr = eval("monthDataArr_" + 2);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataThisMonth("Lighting");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }

        else if (window.selectedperiod === "month" && window.selectedUsage === "plug loads") {
            // eslint-disable-next-line
            var monthDataArr_3 = [4.3, 4.3, 4.6, 4.8, 4.3, 4.7, 4.6, 4.3, 4.6, 4.3, 4.3, 4.8, 4.3, 4.3, 4.6, 4.5, 4.6, 4.3, 4.3, 4.3, 4.3, 4.5, 4.3, 4.3, 4.6, 4.3, 4.4, 4.6, 4.3, 4.6, 4.3];
            // eslint-disable-next-line
            var dataArr = eval("monthDataArr_" + 3);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataThisMonth("Plug Loads");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "month" && window.selectedUsage === "other") {
            // eslint-disable-next-line
            var monthDataArr_5 = [0.8, 0.8, 1, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.8, 0.8, 0.8, 1, 0.8, 0.8, 0.9, 0.8, 0.8, 0.8, 0.8, 0.9, 0.8, 0.9, 0.8, 0.8, 1, 0.8, 0.8];
            // eslint-disable-next-line
            var dataArr = eval("monthDataArr_" + 5);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataThisMonth("Other");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "year" && window.selectedUsage === "refrigeration") {
            // eslint-disable-next-line
            var yearDataArr_4 = [157.1, 155, 151, 157.7, 151, 155, 151, 151, 155, 151, 151, 155];
            // eslint-disable-next-line 
            var dataArr = eval("yearDataArr_" + 4);
            // eslint-disable-next-line 
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataThisYear("Refrigeration");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "year" && window.selectedUsage === "heating and ac") {
            // eslint-disable-next-line
            var yearDataArr_1 = [65.9, 62.2, 66.2, 65.9, 62.2, 65.9, 67.3, 62.2, 65.9, 62.2, 62.2, 62.2];
            // eslint-disable-next-line
            var dataArr = eval("yearDataArr_" + 1);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataThisYear("Heating & AC");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "year" && window.selectedUsage === "all") {
            // eslint-disable-next-line
            var yearDataArr_0 = [460, 440.6, 457.6, 460.1, 436.6, 451.9, 454.3, 441.6, 451.4, 447.6, 438.7, 442.6];
            // eslint-disable-next-line
            var dataArr = eval("yearDataArr_" + 0);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataThisYear("All");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "year" && window.selectedUsage === "lighting") {
            // eslint-disable-next-line
            var yearDataArr_2 = [73.4, 71.3, 76.2, 73.4, 71.3, 73.9, 73.4, 71.3, 73.4, 71.3, 73.4, 71.3];
            // eslint-disable-next-line  
            var dataArr = eval("yearDataArr_" + 2);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataThisYear("Lighting");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }

        else if (window.selectedperiod === "year" && window.selectedUsage === "plug loads") {
            // eslint-disable-next-line
            var yearDataArr_3 = [137.6, 129.1, 136.2, 138.1, 129.1, 134.1, 137.6, 129.1, 134.1, 138.1, 129.1, 129.1];
            // eslint-disable-next-line
            var dataArr = eval("yearDataArr_" + 3);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataThisYear("Plug Loads");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "year" && window.selectedUsage === "other") {
            // eslint-disable-next-line
            var yearDataArr_5 = [26, 23, 28, 25, 23, 23, 25, 28, 23, 25, 23, 25];
            // eslint-disable-next-line
            var dataArr = eval("yearDataArr_" + 5);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataThisYear("Other");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }

        var chartconfig = { ...this.props.appliancechart };
        chartconfig.dataSource = dataSource;

        const chart = (<ReactFC {...chartconfig} />);

        ReactDOM.unmountComponentAtNode(document.getElementById('app-chart-container'));

        ReactDOM.render(
            chart,
            document.getElementById('app-chart-container')
        );

    }

    onClickbutton2() {
        window.b2selected = true;

        //  document.getElementById("a1").style.borderBottom = "none";
        //  document.getElementById("a2").style.borderBottom = "solid 3px white";

        document.getElementById("a1").style.borderBottom = "none";
        document.getElementById("a1").style.color = "#FDFDFD";
        document.getElementById("a1").style.opacity = "0.5";
        document.getElementById("a2").style.color = "#FDFDFD";
        document.getElementById("a2").style.opacity = "1";
        document.getElementById("a2").style.borderBottom = "solid 2px #FDFDFD";

        var dataSource;

        if (window.selectedperiod === "today" && window.selectedUsage === "refrigeration") {
            // eslint-disable-next-line
            var yDayArr_4 = [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.3];
            // eslint-disable-next-line
            var dataArr = eval("yDayArr_" + 4);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataYesterday("Refrigeration");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "today" && window.selectedUsage === "heating and ac") {
            // eslint-disable-next-line
            var yDayArr_1 = [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.3, 0.3, 0.1, 0.2, 0.2, 0.2, 0.2];
            // eslint-disable-next-line
            var dataArr = eval("yDayArr_" + 1);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataYesterday("Heating & AC");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "today" && window.selectedUsage === "all") {
            // eslint-disable-next-line
            var yDayArr_0 = [1.1, 1.1, 0.9, 0.9, 0.7, 0.7, 0.7, 0.5, 1, 0.8, 0.7, 0.8, 0.4, 0.4, 0.4, 0.5, 0.7, 1, 1, 0.6, 1, 0.7, 0.7, 0.7];
            // eslint-disable-next-line
            var dataArr = eval("yDayArr_" + 0);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataYesterday("All");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "today" && window.selectedUsage === "lighting") {
            // eslint-disable-next-line
            var yDayArr_2 = [0.2, 0.2, 0, 0, 0, 0, 0, 0, 0.5, 0.3, 0.3, 0.4, 0, 0, 0, 0, 0.3, 0.3, 0.3, 0.1, 0.2, 0, 0, 0];
            // eslint-disable-next-line
            var dataArr = eval("yDayArr_" + 2);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataYesterday("Lighting");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }

        else if (window.selectedperiod === "today" && window.selectedUsage === "plug loads") {
            // eslint-disable-next-line
            var yDayArr_3 = [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2];
            // eslint-disable-next-line
            var dataArr = eval("yDayArr_" + 3);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataYesterday("Plug Loads");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "today" && window.selectedUsage === "other") {
            // eslint-disable-next-line
            var yDayArr_5 = [0.2, 0.2, 0.2, 0.2, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1, 0.1, 0, 0, 0];
            // eslint-disable-next-line 
            var dataArr = eval("yDayArr_" + 5);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < dataArr.length; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataYesterday("Other");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "month" && window.selectedUsage === "refrigeration") {
            // eslint-disable-next-line
            var lMonthDataArr_4 = [5.3, 5.1, 5, 5, 5.2, 5.1, 5.3, 5.1, 5, 5.2, 5, 5.3, 5, 5, 5.2, 5.1, 5.3, 5.1, 5.2, 5, 5.3, 5, 5.2, 5.3, 5, 5.2, 5, 5.1, 5.2, 5.3, 5.3];
            // eslint-disable-next-line  
            var dataArr = eval("lMonthDataArr_" + 4);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().subtract(1, 'month').daysInMonth(); i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataLastMonth("Refrigeration");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "month" && window.selectedUsage === "heating and ac") {
            // eslint-disable-next-line
            var lMonthDataArr_1 = [2, 2, 2.3, 2.3, 2.3, 2.1, 2.2, 2, 2.1, 2.3, 2.3, 2.1, 2, 2.4, 2, 2, 2, 2.2, 2.3, 2.3, 2, 2.3, 2.2, 2.3, 2, 2.2, 2.3, 2.3, 2, 2.3, 2.3];
            // eslint-disable-next-line
            var dataArr = eval("lMonthDataArr_" + 1);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().subtract(1, 'month').daysInMonth(); i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataLastMonth("Heating & AC");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "month" && window.selectedUsage === "all") {
            // eslint-disable-next-line
            var lMonthDataArr_0 = [15.8, 14.5, 15.7, 15.4, 15.1, 15.3, 15.6, 14.7, 14.7, 15.3, 15, 15.6, 15.3, 15.1, 15.3, 15.6, 15, 15.2, 16, 14.7, 15.6, 15, 15.7, 15.1, 15.3, 15.6, 15.1, 15.5, 15.2, 15.9, 16.1];
            // eslint-disable-next-line
            var dataArr = eval("lMonthDataArr_" + 0);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().subtract(1, 'month').daysInMonth(); i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataLastMonth("All");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "month" && window.selectedUsage === "lighting") {
            // eslint-disable-next-line
            var lMonthDataArr_2 = [2.7, 2.3, 2.5, 2.3, 2.3, 2.6, 2.5, 2.5, 2.7, 2.7, 2.6, 2.5, 2.7, 2.4, 2.7, 2.7, 2.3, 2.3, 2.7, 2.3, 2.7, 2.3, 2.7, 2.3, 2.7, 2.5, 2.2, 2.7, 2.7, 2.7, 2.7];
            // eslint-disable-next-line
            var dataArr = eval("lMonthDataArr_" + 2);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().subtract(1, 'month').daysInMonth(); i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataLastMonth("Lighting");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }

        else if (window.selectedperiod === "month" && window.selectedUsage === "plug loads") {
            // eslint-disable-next-line
            var lMonthDataArr_3 = [4.8, 4.3, 4.6, 4.8, 4.3, 4.7, 4.8, 4.3, 4.6, 4.3, 4.3, 4.8, 4.8, 4.3, 4.6, 4.8, 4.6, 4.8, 4.8, 4.3, 4.8, 4.5, 4.8, 4.3, 4.6, 4.8, 4.8, 4.6, 4.3, 4.8, 4.8];
            // eslint-disable-next-line 
            var dataArr = eval("lMonthDataArr_" + 3);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().subtract(1, 'month').daysInMonth(); i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataLastMonth("Plug Loads");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "month" && window.selectedUsage === "other") {
            // eslint-disable-next-line
            var lMonthDataArr_5 = [1, 0.8, 1, 1, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.8, 1, 0.8, 1, 0.8, 0.8, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 1, 0.9, 0.8, 0.8, 1, 0.8, 1];
            // eslint-disable-next-line  
            var dataArr = eval("lMonthDataArr_" + 5);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().daysInMonth(); i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().subtract(1, 'month').daysInMonth(); i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataLastMonth("Other");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "year" && window.selectedUsage === "refrigeration") {
            // eslint-disable-next-line
            var pYearDataArr_4 = [157.2, 155, 151, 158, 151, 155, 151, 151, 155, 151, 151, 155];
            // eslint-disable-next-line
            var dataArr = eval("pYearDataArr_" + 4);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataLastYear("Refrigeration");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }

        else if (window.selectedperiod === "year" && window.selectedUsage === "heating and ac") {
            // eslint-disable-next-line
            var pYearDataArr_1 = [58.9, 62.2, 66.2, 58.9, 62.2, 65.9, 67.3, 58.9, 58.9, 58.9, 62.2, 58.9];
            // eslint-disable-next-line
            var dataArr = eval("pYearDataArr_" + 1);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataLastYear("Heating & AC");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }

        else if (window.selectedperiod === "year" && window.selectedUsage === "all") {
            // eslint-disable-next-line
            var pYearDataArr_0 = [438.8, 435.7, 447, 442.6, 436.6, 451.9, 447.3, 427.4, 440.1, 437.8, 434.4, 435.4];
            // eslint-disable-next-line 
            var dataArr = eval("pYearDataArr_" + 0);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataLastYear("All");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "year" && window.selectedUsage === "lighting") {
            // eslint-disable-next-line
            var pYearDataArr_2 = [69.1, 66.4, 76.2, 69.1, 71.3, 73.9, 66.4, 66.4, 69.1, 71.3, 69.1, 66.4];
            // eslint-disable-next-line
            var dataArr = eval("pYearDataArr_" + 2);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataLastYear("Lighting");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }

        else if (window.selectedperiod === "year" && window.selectedUsage === "plug loads") {
            // eslint-disable-next-line
            var pYearDataArr_3 = [131.6, 129.1, 131.6, 131.6, 129.1, 134.1, 137.6, 129.1, 134.1, 131.6, 129.1, 129.1];
            // eslint-disable-next-line
            var dataArr = eval("pYearDataArr_" + 3);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataLastYear("Plug Loads");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }
        else if (window.selectedperiod === "year" && window.selectedUsage === "other") {
            // eslint-disable-next-line
            var pYearDataArr_5 = [22, 23, 22, 25, 23, 23, 25, 22, 23, 25, 23, 26];
            // eslint-disable-next-line
            var dataArr = eval("pYearDataArr_" + 5);
            // eslint-disable-next-line
            var tecVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                tecVal = tecVal + dataArr[i];
            }
            // eslint-disable-next-line
            var eVal = 0;
            // eslint-disable-next-line
            var gVal = 0;
            // eslint-disable-next-line
            for (var i = 0; i < 12; i++) {
                eVal = eVal + (0.6 * dataArr[i]);
                gVal = gVal + (0.4 * dataArr[i]);
            }
            dataSource = buildDataLastYear("Other");
            document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + " kWh";
            document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + " kWh";
            document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + " kWh";
        }

        var chartconfig = { ...this.props.appliancechart };
        chartconfig.dataSource = dataSource;

        const chart = (<ReactFC {...chartconfig} />);

        ReactDOM.unmountComponentAtNode(document.getElementById('app-chart-container'));
        ReactDOM.render(
            chart,
            document.getElementById('app-chart-container')
        );
    }

    onChange(e) {

        window.selectedUsage = e.currentTarget.value.toString().toLowerCase();


        document.getElementById("a1").click();

    }

    render() {
        return (<div>
            <div className="container-fluid">
                <div className="row pl-5 pr-5 pt-5 pb-0 mb-4 time-control">
                    <div className="col-xs-6 mr-4 ml-4 pl-1 pr-1" id="a1" onClick={this.onClickbutton1}>
                        THIS MONTH
                </div>

                    <div className="col-xs-6 mr-4 ml-4 pl-1 pr-1" id="a2" onClick={this.onClickbutton2}>
                        LAST MONTH
                </div>
                </div>
                <div className="row pl-5 pr-5 pt-0 pb-0">
                    <div className="col-xl-4 offset-xl-4 col-lg-6 mb-3 text-center">
                        <label className="label-info">Usage By: &nbsp;</label>
                        <select id="appliance-select" onChange={this.onChange}>
                            <option>All</option>
                            <option>Heating and AC</option>
                            <option>Lighting</option>
                            <option>Plug Loads</option>
                            <option>Refrigeration</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div id="usage-power-info" className="card-block">
                            <div><p id="stats" className="t-head">21 kwh</p></div>
                            <div><p className="t-title">Electricity<span id="elecvalue" className="t-content">12 kWh</span></p>
                                <p className="t-title">Gas<span id="gasvalue" className="t-content">5 kWh</span></p></div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div id="app-chart-container" className="pt-3 pb-3 pr-5 pl-5" />
        </div>);
    }


}

export default AppliancesComponent;