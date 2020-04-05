import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import moment from 'moment';
import FusionCharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import widgets from 'fusioncharts/fusioncharts.widgets';
import powercharts from 'fusioncharts/fusioncharts.powercharts';
import theme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import ReactFC from 'react-fusioncharts';

import chartConfigs1, { first_chart_today, first_chart_month, first_chart_year } from '../chart-configs/dashboard_first_chart';
import chartConfigs2, { second_chart_today, second_chart_month, second_chart_year } from '../chart-configs/dashboard_second_chart';
import chartConfigs3, { third_chart_today, third_chart_month, third_chart_year } from '../chart-configs/dashboard_third_chart';
import chartConfigs4, { fourth_chart_today, fourth_chart_month, fourth_chart_year } from '../chart-configs/dashboard_fourth_chart';
import chartConfigs5, { fifth_chart_today, fifth_chart_month, fifth_chart_year } from '../chart-configs/dashboard_fifth_chart';
import chartConfigs6, { sixth_chart_today, sixth_chart_month, sixth_chart_year } from '../chart-configs/dashboard_sixth_chart';
import chartConfigs7, { seventh_chart_today, seventh_chart_month, seventh_chart_year } from '../chart-configs/dashboard_seventh_chart';

import emissionchart, { carbonfootprint_month_data, carbonfootprint_today_data, carbonfootprint_year_data, green_energy_stats_today_data, green_energy_stats_month_data, green_energy_stats_year_data } from '../emissions/emission_data';
import usagechart, { usage_today, usage_yesterday, usage_thismonth, usage_lastmonth, usage_thisyear, usage_lastyear } from '../usage/usage_data1';
import costchart, { cost_last_month, cost_this_month, cost_last_day, cost_this_day, cost_last_year, cost_this_year } from '../cost/cost_data1';
import UsageComponent from '../components/usage_component';
import { todayArr, todayElecSplit, todayGasSplit, monthArr, mElecSplit, mGasSplit, yearArr, yElecSplit, yGasSplit } from '../cost/cost_data1';
import EmissionComponent from '../components/emission_component';
import CostComponent from '../components/cost_component';
import AppliancesComponent from '../components/appliances_component';
import appliancechart, { buildDataYesterday, buildDataLastMonth, buildDataThisMonth, buildDataLastYear, buildDataThisYear } from '../appliances/appliances_data';
import { buildDataToday } from '../appliances/appliances_data';

import * as utils from '../utils/utils';
import { pdArr, cdArr, pmArr, cmArr, pyArr, cyArr, pdgeArr, cdgeArr, cmgeArr, pygeArr, cygeArr, pmgeArr } from '../emissions/emission_data';

charts(FusionCharts)
widgets(FusionCharts)
powercharts(FusionCharts)
theme(FusionCharts)

FusionCharts.options.creditLabel = false;

class ChartDetail extends Component {

    componentDidMount() {

        document.getElementById("month").click();
        setTimeout(function () {
            document.getElementById("month").click();
        }, 300);

    }

    componentDidUpdate() {
        var t = document.getElementById("today");
        var m = document.getElementById("month");
        var y = document.getElementById("year");


        if (this.props.user.id === 1) {

            setTimeout(function () {
                document.getElementById("month").click();
            }, 300);


            ReactDOM.unmountComponentAtNode(document.getElementById('chart1'));

            document.getElementById("parent1").setAttribute("class", "col-lg-6 col-xl-4");
            document.getElementById("text1").innerHTML = "COST PREDICTED"

            document.getElementById("Dashboard").setAttribute("class", "left-option active");
            document.getElementById("Cost").setAttribute("class", "left-option");
            document.getElementById("Appliances").setAttribute("class", "left-option");
            document.getElementById("Usage-by-rooms").setAttribute("class", "left-option");
            document.getElementById("Emissions").setAttribute("class", "left-option");

            document.getElementById("bd-docs-nav").setAttribute("class", "bd-links collapse");

            ReactDOM.unmountComponentAtNode(document.getElementById('chart2'));
            document.getElementById("parent2").style.display = "block";
            document.getElementById("parent2").style.width = "auto";
            document.getElementById("parent2").style.height = "auto";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart3'));
            document.getElementById("parent3").style.display = "block";
            document.getElementById("parent3").style.width = "auto";
            document.getElementById("parent3").style.height = "auto";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart4'));
            document.getElementById("parent4").style.display = "block";
            document.getElementById("parent4").style.width = "auto";
            document.getElementById("parent4").style.height = "auto";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart5'));
            document.getElementById("parent5").style.display = "block";
            document.getElementById("parent5").style.width = "auto";
            document.getElementById("parent5").style.height = "auto";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart6'));
            document.getElementById("parent6").style.display = "block";
            document.getElementById("parent6").style.width = "auto";
            document.getElementById("parent6").style.height = "auto";




            ReactDOM.render(
                <ReactFC {...chartConfigs1} />,
                document.getElementById('chart1'));

            ReactDOM.render(
                <ReactFC {...chartConfigs2} />,
                document.getElementById('chart2'));

            ReactDOM.render(
                <ReactFC {...chartConfigs3} />,
                document.getElementById('chart3'));

            ReactDOM.render(
                <ReactFC {...chartConfigs4} />,
                document.getElementById('chart4'));

            ReactDOM.render(
                <ReactFC {...chartConfigs5} />,
                document.getElementById('chart5'));
            ReactDOM.render(
                <ReactFC {...chartConfigs6} />,
                document.getElementById('chart6'));

            ReactDOM.render(
                <ReactFC {...chartConfigs7} />,
                document.getElementById('chart7'));

            // logic for today button when the user is on dashboard

            // var t = document.getElementById("today");

            t.onclick = function () {

                document.getElementById("date").innerHTML = moment().format('MMMM, Do YYYY');


                var todaynewdata1 = first_chart_today;
                var todaynewdata2 = second_chart_today;
                var todaynewdata3 = third_chart_today;
                var todaynewdata4 = fourth_chart_today;
                var todaynewdata5 = fifth_chart_today;
                var todaynewdata6 = sixth_chart_today;
                var todaynewdata7 = seventh_chart_today;

                FusionCharts.items['mychart1'].setJSONData(todaynewdata1);
                FusionCharts.items['mychart2'].setJSONData(todaynewdata2);
                FusionCharts.items['mychart3'].setJSONData(todaynewdata3);
                FusionCharts.items['mychart4'].setJSONData(todaynewdata4);
                FusionCharts.items['mychart5'].setJSONData(todaynewdata5);
                FusionCharts.items['mychart6'].setJSONData(todaynewdata6);
                FusionCharts.items['mychart10'].setJSONData(todaynewdata7);

            };


            //logic for month button when the user is on dashboard 
            // var m = document.getElementById("month");

            m.onclick = function () {
                document.getElementById("date").innerHTML = moment().format('MMMM YYYY');

                var monthnewdata1 = first_chart_month;
                var monthnewdata2 = second_chart_month;
                var monthnewdata3 = third_chart_month;
                var monthnewdata4 = fourth_chart_month;
                var monthnewdata5 = fifth_chart_month;
                var monthnewdata6 = sixth_chart_month;
                var monthnewdata7 = seventh_chart_month;

                FusionCharts.items['mychart1'].setJSONData(monthnewdata1);
                FusionCharts.items['mychart2'].setJSONData(monthnewdata2);
                FusionCharts.items['mychart3'].setJSONData(monthnewdata3);
                FusionCharts.items['mychart4'].setJSONData(monthnewdata4);
                FusionCharts.items['mychart5'].setJSONData(monthnewdata5);
                FusionCharts.items['mychart6'].setJSONData(monthnewdata6);
                FusionCharts.items['mychart10'].setJSONData(monthnewdata7);
            };

            setTimeout(function () {
                document.getElementById("month").click();
            });
            //logic for year button when the user is on dashboard



            y.onclick = function () {
                document.getElementById("date").innerHTML = moment().format('YYYY');

                var yearnewdata1 = first_chart_year;
                var yearnewdata2 = second_chart_year;
                var yearnewdata3 = third_chart_year;
                var yearnewdata4 = fourth_chart_year;
                var yearnewdata5 = fifth_chart_year;
                var yearnewdata6 = sixth_chart_year;
                var yearnewdata7 = seventh_chart_year;


                FusionCharts.items['mychart1'].setJSONData(yearnewdata1);
                FusionCharts.items['mychart2'].setJSONData(yearnewdata2);
                FusionCharts.items['mychart3'].setJSONData(yearnewdata3);
                FusionCharts.items['mychart4'].setJSONData(yearnewdata4);
                FusionCharts.items['mychart5'].setJSONData(yearnewdata5);
                FusionCharts.items['mychart6'].setJSONData(yearnewdata6);
                FusionCharts.items['mychart10'].setJSONData(yearnewdata7);
            };


        }

        else if (this.props.user.id === 2) {

            utils.disposeChart(FusionCharts, "mychart8")

            ReactDOM.unmountComponentAtNode(document.getElementById('chart1'));

            document.getElementById("Dashboard").setAttribute("class", "left-option");
            document.getElementById("Cost").setAttribute("class", "left-option active");
            document.getElementById("Appliances").setAttribute("class", "left-option");
            document.getElementById("Usage-by-rooms").setAttribute("class", "left-option");
            document.getElementById("Emissions").setAttribute("class", "left-option");

            document.getElementById("bd-docs-nav").setAttribute("class", "bd-links collapse");



            document.getElementById("parent1").setAttribute("class", "chart1-co col-lg-12 col-xl-12");
            document.getElementById("text1").innerHTML = "Cost";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart2'));

            document.getElementById("parent2").style.display = "none";
            document.getElementById("parent2").style.width = "0px";
            document.getElementById("parent2").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart3'));
            document.getElementById("parent3").style.display = "none";
            document.getElementById("parent3").style.width = "0px";
            document.getElementById("parent3").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart4'));
            document.getElementById("parent4").style.display = "none";
            document.getElementById("parent4").style.width = "0px";
            document.getElementById("parent4").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart5'));
            document.getElementById("parent5").style.display = "none";
            document.getElementById("parent5").style.width = "0px";
            document.getElementById("parent5").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart6'));
            document.getElementById("parent6").style.display = "none";
            document.getElementById("parent6").style.width = "0px";
            document.getElementById("parent6").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart7'));
            document.getElementById("parent6").style.display = "none";
            document.getElementById("parent6").style.width = "0px";
            document.getElementById("parent6").style.height = "0px";


            ReactDOM.render(
                <CostComponent costchart={costchart} />,
                document.getElementById('chart1'));

            // logic for today button       

            t.onclick = function () {
                window.selectedperiod = "today";
                document.getElementById("date").innerHTML = moment().format('MMMM, Do YYYY');

                document.getElementById("c2").innerHTML = "Yesterday";
                document.getElementById("c1").innerHTML = "Today";
                if (window.b2selected) {

                    var cotoday2 = cost_last_day;
                    FusionCharts.items['mychart8'].setJSONData(cotoday2);
                    // document.getElementById("cost-elements").style.paddingLeft = "200px";

                    document.getElementById("co-tablecell-title1").innerHTML = moment().subtract(2, 'day').format('MMM Do YYYY');
                    document.getElementById("co-tablecell-value1").innerHTML = "$" + todayArr[0];

                    document.getElementById("co-tablecell-title2").innerHTML = moment().subtract(1, 'day').format('MMM Do YYYY');
                    document.getElementById("co-tablecell-value2").innerHTML = "$" + todayArr[1];

                    document.getElementById("co-tablecell-title3").innerHTML = "Savings";
                    document.getElementById("co-tablecell-value3").innerHTML = "$" + Math.round((todayArr[0] - todayArr[1]) * 100) / 100;

                    document.getElementById("co-tablecell-title4").style.display = 'none';
                    document.getElementById("co-tablecell-value4").style.display = 'none';
                }
                else {

                    var cotoday = cost_this_day;
                    FusionCharts.items['mychart8'].setJSONData(cotoday);
                    //  document.getElementById("cost-elements").style.paddingLeft = "0px";

                    document.getElementById("co-tablecell-title1").innerHTML = moment().subtract(1, 'day').format('MMM Do YYYY');
                    document.getElementById("co-tablecell-value1").innerHTML = "$" + todayArr[1];

                    var sftVal = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < parseInt(moment().format('H')); i++) {
                        sftVal = sftVal + parseFloat(todayElecSplit[i]) + parseFloat(todayGasSplit[i]);
                    }
                    sftVal = Math.round(sftVal * 100) / 100;

                    document.getElementById("co-tablecell-title2").innerHTML = "So Far Today";
                    document.getElementById("co-tablecell-value2").innerHTML = "$" + sftVal;



                    document.getElementById("co-tablecell-title3").innerHTML = "Predicted Today";
                    document.getElementById("co-tablecell-value3").innerHTML = "$" + todayArr[2];

                    document.getElementById("co-tablecell-title4").style.display = 'block';
                    document.getElementById("co-tablecell-value4").style.display = 'block';

                    document.getElementById("co-tablecell-title4").innerHTML = "Estimated Savings";
                    document.getElementById("co-tablecell-value4").innerHTML = "$" + Math.round((todayArr[1] - todayArr[2]) * 100) / 100;
                }
            };

            // var m1 = document.getElementById("month");

            m.onclick = function () {

                window.selectedperiod = "month";

                document.getElementById("date").innerHTML = moment().format('MMMM YYYY');

                document.getElementById("c2").innerHTML = "Last Month";
                document.getElementById("c1").innerHTML = "This Month";

                if (window.b2selected) {
                    var comonth2 = cost_last_month;
                    FusionCharts.items['mychart8'].setJSONData(comonth2);
                    //  document.getElementById("cost-elements").style.paddingLeft = "200px";

                    document.getElementById("co-tablecell-title1").innerHTML = moment().subtract(2, 'month').format('MMMM');
                    document.getElementById("co-tablecell-value1").innerHTML = "$" + monthArr[0];

                    document.getElementById("co-tablecell-title2").innerHTML = moment().subtract(1, 'month').format('MMMM');
                    document.getElementById("co-tablecell-value2").innerHTML = "$" + monthArr[1];

                    var savings_value = Math.round((monthArr[1] - monthArr[0]) * 100) / 100;

                    if (savings_value < 0) {
                        savings_value = Math.abs(savings_value);
                        document.getElementById("co-tablecell-title3").innerHTML = "Savings";
                        document.getElementById("co-tablecell-value3").innerHTML = "-$" + savings_value;
                    }

                    else {
                        document.getElementById("co-tablecell-title3").innerHTML = "Savings";
                        document.getElementById("co-tablecell-value3").innerHTML = "$" + savings_value;
                    }

                    document.getElementById("co-tablecell-title4").style.display = "none";
                    document.getElementById("co-tablecell-value4").style.display = "none";

                }
                else {
                    var comonth = cost_this_month;

                    FusionCharts.items['mychart8'].setJSONData(comonth);

                    //  document.getElementById("cost-elements").style.paddingLeft = "0px";
                    document.getElementById("co-tablecell-title1").innerHTML = moment().subtract(1, 'month').format('MMMM');
                    document.getElementById("co-tablecell-value1").innerHTML = "$" + monthArr[1];

                    var sfmVal = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < parseInt(moment().format('D')); i++) {
                        sfmVal = sfmVal + parseFloat(mElecSplit[i]) + parseFloat(mGasSplit[i]);
                    }
                    sfmVal = Math.round(sfmVal * 100) / 100;

                    document.getElementById("co-tablecell-title2").innerHTML = "So Far This Month";
                    document.getElementById("co-tablecell-value2").innerHTML = "$" + sfmVal;

                    document.getElementById("co-tablecell-title3").innerHTML = "Predicted This Month";
                    document.getElementById("co-tablecell-value3").innerHTML = "$" + monthArr[2];

                    document.getElementById("co-tablecell-title4").style.display = "block";
                    document.getElementById("co-tablecell-value4").style.display = "block";

                    document.getElementById("co-tablecell-title4").innerHTML = "Estimated savings";
                    document.getElementById("co-tablecell-value4").innerHTML = "$" + Math.round((monthArr[2] - monthArr[1]) * 100) / 100;

                }
            };
            setTimeout(function () {
                document.getElementById("month").click();
            });
            // var y1 = document.getElementById("year");

            y.onclick = function () {
                window.selectedperiod = "year";
                document.getElementById("date").innerHTML = moment().format('YYYY');

                document.getElementById("c2").innerHTML = "Previous Year";
                document.getElementById("c1").innerHTML = "This Year";


                // document.getElementById("co-tablecell-value1").style.paddingLeft = "20px";
                // document.getElementById("co-tablecell-value2").style.paddingLeft = "20px";



                if (window.b2selected) {
                    var coyear2 = cost_last_year;
                    FusionCharts.items['mychart8'].setJSONData(coyear2);

                    //  document.getElementById("cost-elements").style.paddingLeft = "200px";

                    document.getElementById("co-tablecell-title1").innerHTML = moment().subtract(2, 'year').format('YYYY');
                    document.getElementById("co-tablecell-value1").innerHTML = "$" + yearArr[0];

                    document.getElementById("co-tablecell-title2").innerHTML = moment().subtract(1, 'year').format('YYYY');
                    document.getElementById("co-tablecell-value2").innerHTML = "$" + yearArr[1];

                    document.getElementById("co-tablecell-title3").innerHTML = "Savings";
                    document.getElementById("co-tablecell-value3").innerHTML = "$" + Math.round((yearArr[0] - yearArr[1]) * 100) / 100;

                    document.getElementById("co-tablecell-title4").style.display = "none";
                    document.getElementById("co-tablecell-value4").style.display = "none";
                }
                else {
                    var coyear = cost_this_year;
                    FusionCharts.items['mychart8'].setJSONData(coyear);

                    //   document.getElementById("cost-elements").style.paddingLeft = "0px";

                    document.getElementById("co-tablecell-title1").innerHTML = moment().subtract(1, 'year').format('YYYY');
                    document.getElementById("co-tablecell-value1").innerHTML = "$" + yearArr[1];

                    var styVal = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < parseInt(moment().format('M')); i++) {
                        styVal = styVal + parseFloat(yElecSplit[i]) + parseFloat(yGasSplit[i]);
                    }
                    styVal = Math.round(styVal * 100) / 100;

                    document.getElementById("co-tablecell-title2").innerHTML = "So Far This Year";
                    document.getElementById("co-tablecell-value2").innerHTML = "$" + styVal;


                    document.getElementById("co-tablecell-title3").innerHTML = "Predicted This Year";
                    document.getElementById("co-tablecell-value3").innerHTML = "$" + yearArr[2];

                    document.getElementById("co-tablecell-title4").style.display = "block";
                    document.getElementById("co-tablecell-value4").style.display = "block";

                    document.getElementById("co-tablecell-title4").innerHTML = "Estimated Savings";
                    document.getElementById("co-tablecell-value4").innerHTML = "$" + Math.round((yearArr[1] - yearArr[2]) * 100) / 100;
                }

            };


        }

        else if (this.props.user.id === 3) {
            utils.disposeChart(FusionCharts, "mychart12")

            ReactDOM.unmountComponentAtNode(document.getElementById('chart1'));

            document.getElementById("parent1").setAttribute("class", "chart1-app col-lg-12 col-xl-12");
            document.getElementById("text1").innerHTML = "APPLIANCES";

            document.getElementById("Dashboard").setAttribute("class", "left-option");
            document.getElementById("Cost").setAttribute("class", "left-option");
            document.getElementById("Appliances").setAttribute("class", "left-option active");
            document.getElementById("Usage-by-rooms").setAttribute("class", "left-option");
            document.getElementById("Emissions").setAttribute("class", "left-option");

            document.getElementById("bd-docs-nav").setAttribute("class", "bd-links collapse");


            ReactDOM.unmountComponentAtNode(document.getElementById('chart2'));
            document.getElementById("parent2").style.display = "none";
            document.getElementById("parent2").style.width = "0px";
            document.getElementById("parent2").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart3'));
            document.getElementById("parent3").style.display = "none";
            document.getElementById("parent3").style.width = "0px";
            document.getElementById("parent3").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart4'));
            document.getElementById("parent4").style.display = "none";
            document.getElementById("parent4").style.width = "0px";
            document.getElementById("parent4").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart5'));
            document.getElementById("parent5").style.display = "none";
            document.getElementById("parent5").style.width = "0px";
            document.getElementById("parent5").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart6'));
            document.getElementById("parent6").style.display = "none";
            document.getElementById("parent6").style.width = "0px";
            document.getElementById("parent6").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart7'));
            document.getElementById("parent6").style.display = "none";
            document.getElementById("parent6").style.width = "0px";
            document.getElementById("parent6").style.height = "0px";

            // to be written

            ReactDOM.render(
                <AppliancesComponent appliancechart={appliancechart} />,
                document.getElementById('chart1'));

            t.onclick = function () {
                window.selectedperiod = "today";
                document.getElementById("date").innerHTML = moment().format('MMMM, Do YYYY');
                document.getElementById("a1").innerHTML = "TODAY";
                document.getElementById("a2").innerHTML = "YESTERDAY";


                if (window.b2selected) {

                    if (window.selectedUsage === "refrigeration") {
                        // eslint-disable-next-line
                         var yDayArr_4 = [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.3];
                        // eslint-disable-next-line 
                        var dataArr = eval("yDayArr_" + 4);
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
                        var reflastday = buildDataYesterday("Refrigeration");
                        FusionCharts.items['mychart12'].setJSONData(reflastday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "   kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "   kWh";
                    }

                    else if (window.selectedUsage === "heating and ac") {
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
                        var hclastday = buildDataYesterday("Heating & AC");
                        FusionCharts.items['mychart12'].setJSONData(hclastday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }
                    else if (window.selectedUsage === "all") {
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
                        var alllastday = buildDataYesterday("All");
                        FusionCharts.items['mychart12'].setJSONData(alllastday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "lighting") {
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
                        var lightinglastday = buildDataYesterday("Lighting");
                        FusionCharts.items['mychart12'].setJSONData(lightinglastday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "plug loads") {
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
                        var pllastday = buildDataYesterday("Plug Loads");
                        FusionCharts.items['mychart12'].setJSONData(pllastday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }
                    else if (window.selectedUsage === "other") {
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
                        var otherlastday = buildDataYesterday("Other");
                        FusionCharts.items['mychart12'].setJSONData(otherlastday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                }
                else {
                    if (window.selectedUsage === "refrigeration") {
                         // eslint-disable-next-line   
                        var todayArr_4 = [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.3];
                        // eslint-disable-next-line
                        var dataArr = eval("todayArr_" + 4);
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
                        var refthisday = buildDataToday("Refrigeration");
                        FusionCharts.items['mychart12'].setJSONData(refthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }
                    else if (window.selectedUsage === "heating and ac") {
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
                        var hcthisday = buildDataToday("Heating & AC");
                        FusionCharts.items['mychart12'].setJSONData(hcthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }
                    else if (window.selectedUsage === "all") {
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
                        var allthisday = buildDataToday("All");
                        FusionCharts.items['mychart12'].setJSONData(allthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "lighting") {
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
                        var lightthisday = buildDataToday("Lighting");
                        FusionCharts.items['mychart12'].setJSONData(lightthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "plug loads") {
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
                        var plthisday = buildDataToday("Plug Loads");
                        FusionCharts.items['mychart12'].setJSONData(plthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }
                    else if (window.selectedUsage === "other") {
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
                        var otherthisday = buildDataToday("Other");
                        FusionCharts.items['mychart12'].setJSONData(otherthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }
                }
            }

            m.onclick = function () {

                window.selectedperiod = "month";

                document.getElementById("date").innerHTML = moment().format('MMMM YYYY');

                document.getElementById("a1").innerHTML = "THIS MONTH";
                document.getElementById("a2").innerHTML = "LAST MONTH";

                if (window.b2selected) {

                    if (window.selectedUsage === "refrigeration") {
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
                        var reflastmonth = buildDataLastMonth("Refrigeration");
                        FusionCharts.items['mychart12'].setJSONData(reflastmonth);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }
                    else if (window.selectedUsage === "heating and ac") {
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
                        var hclastmonth = buildDataLastMonth("Heating & AC");
                        FusionCharts.items['mychart12'].setJSONData(hclastmonth);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "all") {
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
                        var alllastmonth = buildDataLastMonth("All");
                        FusionCharts.items['mychart12'].setJSONData(alllastmonth);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "lighting") {
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
                        var lightinglastmonth = buildDataLastMonth("Lighting");
                        FusionCharts.items['mychart12'].setJSONData(lightinglastmonth);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "plug loads") {
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
                        var pllastmonth = buildDataLastMonth("Plug Loads");
                        FusionCharts.items['mychart12'].setJSONData(pllastmonth);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }
                    else if (window.selectedUsage === "other") {
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
                        var otherlastmonth = buildDataLastMonth("Other");
                        FusionCharts.items['mychart12'].setJSONData(otherlastmonth);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }
                }
                else {
                    if (window.selectedUsage === "refrigeration") {
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
                        var refthismonth = buildDataThisMonth("Refrigeration");
                        FusionCharts.items['mychart12'].setJSONData(refthismonth);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "heating and ac") {
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
                        var hcthismonth = buildDataThisMonth("Heating & AC");
                        FusionCharts.items['mychart12'].setJSONData(hcthismonth);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }
                    else if (window.selectedUsage === "all") {
                        
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
                        var allthisday = buildDataThisMonth("All");

                        FusionCharts.items['mychart12'].setJSONData(allthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "lighting") {
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
                        var lightthisday = buildDataThisMonth("Lighting");
                        FusionCharts.items['mychart12'].setJSONData(lightthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "plug loads") {
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
                        var plthisday = buildDataThisMonth("Plug Loads");
                        FusionCharts.items['mychart12'].setJSONData(plthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }
                    else if (window.selectedUsage === "other") {
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
                        var otherthisday = buildDataThisMonth("Other");
                        FusionCharts.items['mychart12'].setJSONData(otherthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                }
            }

            setTimeout(function () {
                document.getElementById("month").click();
            });

            y.onclick = function () {
                window.selectedperiod = "year";

                document.getElementById("date").innerHTML = moment().format('YYYY');

                document.getElementById("a1").innerHTML = "THIS YEAR";
                document.getElementById("a2").innerHTML = "LAST YEAR";


                if (window.b2selected) {

                    if (window.selectedUsage === "refrigeration") {
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
                        var reflastmonth = buildDataLastYear("Refrigeration");
                        FusionCharts.items['mychart12'].setJSONData(reflastmonth);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "heating and ac") {
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
                        var hclastmonth = buildDataLastYear("Heating & AC");
                        FusionCharts.items['mychart12'].setJSONData(hclastmonth);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "all") {
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
                        var hclastday = buildDataLastYear("All");
                        FusionCharts.items['mychart12'].setJSONData(hclastday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "lighting") {
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
                        var lightinglastday = buildDataLastYear("Lighting");
                        FusionCharts.items['mychart12'].setJSONData(lightinglastday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "plug loads") {
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
                        var pllastday = buildDataLastYear("Plug Loads");
                        FusionCharts.items['mychart12'].setJSONData(pllastday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }
                    else if (window.selectedUsage === "other") {
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
                        var otherlastday = buildDataLastYear("Other");
                        FusionCharts.items['mychart12'].setJSONData(otherlastday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                }
                else {
                    if (window.selectedUsage === "refrigeration") {
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
                        var refthismonth = buildDataThisYear("Refrigeration");
                        FusionCharts.items['mychart12'].setJSONData(refthismonth);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "heating and ac") {
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
                        var hcthismonth = buildDataThisYear("Heating & AC");
                        FusionCharts.items['mychart12'].setJSONData(hcthismonth);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "all") {
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
                        var allthisday = buildDataThisYear("All");
                        FusionCharts.items['mychart12'].setJSONData(allthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "lighting") {
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
                        var lightthisday = buildDataThisYear("Lighting");
                        FusionCharts.items['mychart12'].setJSONData(lightthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                    else if (window.selectedUsage === "plug loads") {
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
                        var plthisday = buildDataThisYear("Plug Loads");
                        FusionCharts.items['mychart12'].setJSONData(plthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }
                    else if (window.selectedUsage === "other") {
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
                        var otherthisday = buildDataThisYear("Other");
                        FusionCharts.items['mychart12'].setJSONData(otherthisday);
                        document.getElementById("stats").innerHTML = Math.round(tecVal * 100) / 100 + "  kWh";
                        document.getElementById("elecvalue").innerHTML = Math.round(eVal * 100) / 100 + "  kWh";
                        document.getElementById("gasvalue").innerHTML = Math.round(gVal * 100) / 100 + "  kWh";
                    }

                }
            }




        }


        else if (this.props.user.id === 4) {
            utils.disposeChart(FusionCharts, "mychart9")
            ReactDOM.unmountComponentAtNode(document.getElementById('chart1'));
            //document.getElementById("date").style.display = "none";
            document.getElementById("parent1").setAttribute("class", "chart1-us col-lg-12 col-xl-12");
            document.getElementById("text1").innerHTML = "USAGE BY ROOMS";

            document.getElementById("Dashboard").setAttribute("class", "left-option");
            document.getElementById("Cost").setAttribute("class", "left-option");
            document.getElementById("Appliances").setAttribute("class", "left-option");
            document.getElementById("Usage-by-rooms").setAttribute("class", "left-option active");
            document.getElementById("Emissions").setAttribute("class", "left-option");

            document.getElementById("bd-docs-nav").setAttribute("class", "bd-links collapse");


            ReactDOM.unmountComponentAtNode(document.getElementById('chart2'));
            document.getElementById("parent2").style.display = "none";
            document.getElementById("parent2").style.width = "0px";
            document.getElementById("parent2").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart3'));
            document.getElementById("parent3").style.display = "none";
            document.getElementById("parent3").style.width = "0px";
            document.getElementById("parent3").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart4'));
            document.getElementById("parent4").style.display = "none";
            document.getElementById("parent4").style.width = "0px";
            document.getElementById("parent4").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart5'));
            document.getElementById("parent5").style.display = "none";
            document.getElementById("parent5").style.width = "0px";
            document.getElementById("parent5").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart6'));
            document.getElementById("parent6").style.display = "none";
            document.getElementById("parent6").style.width = "0px";
            document.getElementById("parent6").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart7'));
            document.getElementById("parent6").style.display = "none";
            document.getElementById("parent6").style.width = "0px";
            document.getElementById("parent6").style.height = "0px";

            ReactDOM.render(
                <UsageComponent usagechart={usagechart} />,
                document.getElementById('chart1'));

            t.onclick = function () {
                document.getElementById("date").innerHTML = moment().format('MMMM, Do YYYY');
                window.selectedperiod = "today";

                document.getElementById("u1").innerHTML = "TODAY";
                document.getElementById("u2").innerHTML = "YESTERDAY";


                if (window.b2selected) {

                    var usageyesterday = usage_yesterday;
                    FusionCharts.items['mychart9'].setJSONData(usageyesterday);
                }
                else {

                    var usagetoday = usage_today;
                    FusionCharts.items['mychart9'].setJSONData(usagetoday);
                }
            }

            m.onclick = function () {

                window.selectedperiod = "month";
                document.getElementById("date").innerHTML = moment().format('MMMM YYYY');
                document.getElementById("u1").innerHTML = "THIS MONTH";
                document.getElementById("u2").innerHTML = "LAST MONTH";

                if (window.b2selected) {
                    var usagelastmonth = usage_lastmonth;
                    FusionCharts.items['mychart9'].setJSONData(usagelastmonth);
                }
                else {

                    var usagethismonth = usage_thismonth;
                    FusionCharts.items['mychart9'].setJSONData(usagethismonth);
                }
            }

            setTimeout(function () {
                document.getElementById("month").click();
            });


            y.onclick = function () {
                window.selectedperiod = "year";
                document.getElementById("date").innerHTML = moment().format('YYYY');
                document.getElementById("u1").innerHTML = "THIS YEAR";
                document.getElementById("u2").innerHTML = "LAST YEAR";


                if (window.b2selected) {

                    var usagelastyear = usage_lastyear;
                    FusionCharts.items['mychart9'].setJSONData(usagelastyear);
                }
                else {
                    var usagethisyear = usage_thisyear;
                    FusionCharts.items['mychart9'].setJSONData(usagethisyear);
                }
            }




        }

        // Emission Option Logic.

        else if (this.props.user.id === 5) {
            utils.disposeChart(FusionCharts, "mychart7")
            ReactDOM.unmountComponentAtNode(document.getElementById('chart1'));
            // document.getElementById("date").style.display = "none";
            document.getElementById("parent1").setAttribute("class", "chart1-em col-lg-12 col-xl-12");
            document.getElementById("text1").innerHTML = "EMISSIONS";

            var cper;
            document.getElementById("Dashboard").setAttribute("class", "left-option");
            document.getElementById("Cost").setAttribute("class", "left-option");
            document.getElementById("Appliances").setAttribute("class", "left-option");
            document.getElementById("Usage-by-rooms").setAttribute("class", "left-option");
            document.getElementById("Emissions").setAttribute("class", "left-option active");

            document.getElementById("bd-docs-nav").setAttribute("class", "bd-links collapse");


            ReactDOM.unmountComponentAtNode(document.getElementById('chart2'));
            document.getElementById("parent2").style.display = "none";
            document.getElementById("parent2").style.width = "0px";
            document.getElementById("parent2").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart3'));
            document.getElementById("parent3").style.display = "none";
            document.getElementById("parent3").style.width = "0px";
            document.getElementById("parent3").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart4'));
            document.getElementById("parent4").style.display = "none";
            document.getElementById("parent4").style.width = "0px";
            document.getElementById("parent4").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart5'));
            document.getElementById("parent5").style.display = "none";
            document.getElementById("parent5").style.width = "0px";
            document.getElementById("parent5").style.height = "0px";

            ReactDOM.unmountComponentAtNode(document.getElementById('chart6'));
            document.getElementById("parent6").style.display = "none";
            document.getElementById("parent6").style.width = "0px";
            document.getElementById("parent6").style.height = "0px";


            //utils.disposeChart('mychart7');
            ReactDOM.render(

                <EmissionComponent emissionchart={emissionchart} />,
                document.getElementById('chart1'));

            // logic for today button       
            // var t1 = document.getElementById("today");


            t.onclick = function () {
                window.selectedperiod = "today";
                document.getElementById("date").innerHTML = moment().format('MMMM, Do YYYY');
                if (window.b2selected) {
                    var cpCalc = 0;
                    for (var i = 0; i < pdgeArr.length; i++) {
                        cpCalc = cpCalc + pdgeArr[i];
                    }

                    // so far today kpi
                    // eslint-disable-next-line
                    var cHour = parseInt(moment().format('H'));
                    var sftCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < cHour; i++) {
                        sftCalc = sftCalc + cdgeArr[i];
                    }

                    // predicted today kpi

                    var ptcpCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < cdgeArr.length; i++) {
                        ptcpCalc = ptcpCalc + cdgeArr[i];
                    }

                    // emisson change kpi

                    if (ptcpCalc > cpCalc) {
                        var cper = Math.round(([(ptcpCalc / cpCalc) * 100] - 100) * 100) / 100;
                        document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #B4F9A1;'>▲</span>";
                    } else if (ptcpCalc < cpCalc) {
                        cper = Math.round((100 - [(ptcpCalc / cpCalc) * 100]) * 100) / 100;
                        document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #EF5052;'>▼</span>";
                    }

                    var emtoday2 = green_energy_stats_today_data;
                    FusionCharts.items['mychart7'].setJSONData(emtoday2);


                    document.getElementById("em-tablecell-title1").innerHTML = moment().subtract(1, 'day').format('MMMM D');
                    document.getElementById("em-tablecell-value1").innerHTML = Math.round(cpCalc * 100) / 100 + "   kWh";

                    document.getElementById("em-tablecell-title2").innerHTML = "So Far Today";
                    document.getElementById("em-tablecell-value2").innerHTML = Math.round(sftCalc * 100) / 100 + "   kWh";

                    document.getElementById("em-tablecell-title3").innerHTML = "Predicted Today";
                    document.getElementById("em-tablecell-value3").innerHTML = Math.round(ptcpCalc * 100) / 100 + "   kWh";

                    document.getElementById("em-tablecell-title4").innerHTML = "Change in Emissions";
                }
                else {
                    var emtoday = carbonfootprint_today_data;
                    FusionCharts.items['mychart7'].setJSONData(emtoday);


                    cpCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < pdArr.length; i++) {
                        cpCalc = cpCalc + pdArr[i];
                    }

                    // so far today kpi
                    // eslint-disable-next-line
                    var cHour = parseInt(moment().format('H'));
                    sftCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < cHour; i++) {
                        sftCalc = sftCalc + pdArr[i];
                    }

                    ptcpCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < cdArr.length; i++) {
                        ptcpCalc = ptcpCalc + cdArr[i];
                    }


                    // emisson change kpi

                    if (ptcpCalc > cpCalc) {
                        cper = Math.round(([(ptcpCalc / cpCalc) * 100] - 100) * 100) / 100;
                        document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #EF5052;'>▲</span>";
                    } else if (ptcpCalc < cpCalc) {
                        cper = Math.round((100 - [(ptcpCalc / cpCalc) * 100]) * 100) / 100;
                        document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #B4F9A1;'>▼</span>";
                    }


                    document.getElementById("em-tablecell-title1").innerHTML = moment().subtract(1, 'day').format('MMMM D');
                    document.getElementById("em-tablecell-value1").innerHTML = Math.round(cpCalc * 100) / 100 + "  kg";

                    document.getElementById("em-tablecell-title2").innerHTML = "So Far Today";
                    document.getElementById("em-tablecell-value2").innerHTML = Math.round(sftCalc * 100) / 100 + "  kg";

                    document.getElementById("em-tablecell-title3").innerHTML = "Predicted Today";
                    document.getElementById("em-tablecell-value3").innerHTML = Math.round(ptcpCalc * 100) / 100 + "  kg";

                    document.getElementById("em-tablecell-title4").innerHTML = "Change in Emissions";


                }
            };

            // logic for month

            // var m1 = document.getElementById("month");

            m.onclick = function () {

                window.selectedperiod = "month";
                document.getElementById("date").innerHTML = moment().format('MMMM YYYY');

                if (window.b2selected) {

                    var cpCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < moment().subtract(1, 'month').daysInMonth(); i++) {
                        cpCalc = cpCalc + pmgeArr[i];
                    }

                    // so far this month kpi
                    // eslint-disable-next-line
                    var cDate = parseInt(moment().format('D'));
                    var sfmCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < cDate; i++) {
                        sfmCalc = sfmCalc + cmgeArr[i];
                    }


                    // predicted this month kpi

                    var pmcpCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < moment().daysInMonth(); i++) {
                        pmcpCalc = pmcpCalc + cmgeArr[i];
                    }


                    // emisson change kpi

                    if (pmcpCalc > cpCalc) {
                        var cper = Math.round(([(pmcpCalc / cpCalc) * 100] - 100) * 100) / 100;
                        document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #B4F9A1;'>▲</span>";
                    } else if (pmcpCalc < cpCalc) {
                        cper = Math.round((100 - [(pmcpCalc / cpCalc) * 100]) * 100) / 100;
                        document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #EF5052;'>▼</span>";
                    }

                    var emmonth2 = green_energy_stats_month_data;
                    FusionCharts.items['mychart7'].setJSONData(emmonth2);

                    document.getElementById("em-tablecell-title1").innerHTML = moment().subtract(1, 'month').format('MMMM');
                    document.getElementById("em-tablecell-value1").innerHTML = Math.round(cpCalc * 100) / 100 + "   kWh";

                    document.getElementById("em-tablecell-title2").innerHTML = "So Far This Month";
                    document.getElementById("em-tablecell-value2").innerHTML = Math.round(sfmCalc * 100) / 100 + "   kWh"

                    document.getElementById("em-tablecell-title3").innerHTML = "Predicted This Month";
                    document.getElementById("em-tablecell-value3").innerHTML = Math.round(pmcpCalc * 100) / 100 + "  kWh"

                    document.getElementById("em-tablecell-title4").innerHTML = "Change in Emissions";

                }
                else {
                    var emmonth = carbonfootprint_month_data;

                    // last month's kpi

                    cpCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < moment().subtract(1, 'month').daysInMonth(); i++) {
                        cpCalc = cpCalc + pmArr[i];
                    }

                    // so far this month kpi
                    // eslint-disable-next-line
                    var cDate = parseInt(moment().format('D'));
                    sfmCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < cDate; i++) {
                        sfmCalc = sfmCalc + cmArr[i];
                    }


                    // predicted this month kpi

                    pmcpCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < moment().daysInMonth(); i++) {
                        pmcpCalc = pmcpCalc + cmArr[i];
                    }


                    // emisson change kpi

                    if (pmcpCalc > cpCalc) {
                        cper = Math.round(([(pmcpCalc / cpCalc) * 100] - 100) * 100) / 100;
                        document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #EF5052;'>▲</span>"
                    } else if (pmcpCalc < cpCalc) {
                        cper = Math.round((100 - [(pmcpCalc / cpCalc) * 100]) * 100) / 100;
                        document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #B4F9A1;'>▼</span>"
                    }



                    FusionCharts.items['mychart7'].setJSONData(emmonth);



                    document.getElementById("em-tablecell-title1").innerHTML = moment().subtract(1, 'month').format('MMMM');
                    document.getElementById("em-tablecell-value1").innerHTML = Math.round(cpCalc * 100) / 100 + "  kg";

                    document.getElementById("em-tablecell-title2").innerHTML = "So Far This Month";
                    document.getElementById("em-tablecell-value2").innerHTML = Math.round(sfmCalc * 100) / 100 + "  kg"

                    document.getElementById("em-tablecell-title3").innerHTML = "Predicted This Month";
                    document.getElementById("em-tablecell-value3").innerHTML = Math.round(pmcpCalc * 100) / 100 + "  kg"

                    document.getElementById("em-tablecell-title4").innerHTML = "Change in Emissions";

                }
            };

            setTimeout(function () {
                document.getElementById("month").click();
            });


            //logic for year

            // var y1 = document.getElementById("year");

            y.onclick = function () {
                window.selectedperiod = "year";
                document.getElementById("date").innerHTML = moment().format('YYYY');
                if (window.b2selected) {

                    var cpCalc = 0;
                    for (var i = 0; i < pygeArr.length; i++) {
                        cpCalc = cpCalc + pygeArr[i];
                    }


                    // so far this year kpi
                    // eslint-disable-next-line
                    var cMonth = parseInt(moment().format('M'));
                    var sfyCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < cMonth; i++) {
                        sfyCalc = sfyCalc + cygeArr[i];
                    }


                    // predicted this year kpi

                    var pycpCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < 12; i++) {
                        pycpCalc = pycpCalc + cygeArr[i];
                    }


                    // emisson change kpi

                    if (pycpCalc > cpCalc) {
                        cper = Math.round(([(pycpCalc / cpCalc) * 100] - 100) * 100) / 100;
                        document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #B4F9A1;'>▲</span>";
                    } else if (pycpCalc < cpCalc) {
                        cper = Math.round((100 - [(pycpCalc / cpCalc) * 100]) * 100) / 100;
                        document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #EF5052;'>▼</span>";
                    }

                    var emyear2 = green_energy_stats_year_data;
                    FusionCharts.items['mychart7'].setJSONData(emyear2);

                    document.getElementById("em-tablecell-title1").innerHTML = moment().subtract(1, 'year').format('YYYY');
                    document.getElementById("em-tablecell-value1").innerHTML = Math.round(cpCalc * 100) / 100 + "  kWh";

                    document.getElementById("em-tablecell-title2").innerHTML = "So Far This Year";
                    document.getElementById("em-tablecell-value2").innerHTML = Math.round(sfyCalc * 100) / 100 + "  kWh";

                    document.getElementById("em-tablecell-title3").innerHTML = "Predicted This Year";
                    document.getElementById("em-tablecell-value3").innerHTML = Math.round(pycpCalc * 100) / 100 + "  kWh";

                    document.getElementById("em-tablecell-title4").innerHTML = "Change in Emissions";
                }
                else {
                    var emyear = carbonfootprint_year_data;

                    // last year's kpi

                    cpCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < pyArr.length; i++) {
                        cpCalc = cpCalc + pyArr[i];
                    }


                    // so far this year kpi
                    // eslint-disable-next-line
                    cMonth = parseInt(moment().format('M'));
                    sfyCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < cMonth; i++) {
                        sfyCalc = sfyCalc + cyArr[i];
                    }


                    // predicted this year kpi

                    pycpCalc = 0;
                    // eslint-disable-next-line
                    for (var i = 0; i < 12; i++) {
                        pycpCalc = pycpCalc + cyArr[i];
                    }


                    // emisson change kpi

                    if (pycpCalc > cpCalc) {
                        cper = Math.round(([(pycpCalc / cpCalc) * 100] - 100) * 100) / 100;
                        document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #EF5052;'>▲</span>"
                    } else if (pycpCalc < cpCalc) {
                        cper = Math.round((100 - [(pycpCalc / cpCalc) * 100]) * 100) / 100;
                        document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #B4F9A1;'>▼</span>"
                    }


                    FusionCharts.items['mychart7'].setJSONData(emyear);

                    document.getElementById("em-tablecell-title1").innerHTML = moment().subtract(1, 'year').format('YYYY');
                    document.getElementById("em-tablecell-value1").innerHTML = Math.round(cpCalc * 100) / 100 + "  kg";

                    document.getElementById("em-tablecell-title2").innerHTML = "So Far This Year";
                    document.getElementById("em-tablecell-value2").innerHTML = Math.round(sfyCalc * 100) / 100 + "  kg";

                    document.getElementById("em-tablecell-title3").innerHTML = "Predicted This Year";
                    document.getElementById("em-tablecell-value3").innerHTML = Math.round(pycpCalc * 100) / 100 + "  kg";

                    document.getElementById("em-tablecell-title4").innerHTML = "Change in Emissions";
                }
            };



        }

        else {
            var defaultElement = (
                <div>

                    <h2>{this.props.user.name}</h2>

                </div>
            );
            ReactDOM.unmountComponentAtNode(document.getElementById('chart1'));
            ReactDOM.unmountComponentAtNode(document.getElementById('chart2'));

            // utils.disposeChart('mychart7');

            ReactDOM.render(
                defaultElement,
                document.getElementById('chart1'));
        }
    }


    render() {
        return (
            <div></div>
        );

    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(ChartDetail);
