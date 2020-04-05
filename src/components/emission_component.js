import React from 'react';
import ReactFC from 'react-fusioncharts';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { green_energy_stats_month_data, carbonfootprint_year_data, carbonfootprint_today_data, carbonfootprint_month_data, green_energy_stats_today_data, green_energy_stats_year_data, pdgeArr, cdgeArr, pmgeArr, cmgeArr, pygeArr, cygeArr } from '../emissions/emission_data';
import EmissionTableContent from './emission_table_component';
import { pdArr, cdArr, pmArr, cmArr, pyArr, cyArr } from '../emissions/emission_data';

class EmissionComponent extends React.Component {

    constructor(props) {

        super(props);

        this.onClickbutton1 = this.onClickbutton1.bind(this);
        this.onClickbutton2 = this.onClickbutton2.bind(this);
    }

    componentDidMount() {
        //  document.getElementById("month").click();
        document.getElementById("e1").click();
        setTimeout(function () {
            document.getElementById('e1').click();
        }, 500);


    }



    // Logic for Carbon FootPrint

    onClickbutton1() {


        window.b2selected = false;

        var cpCalc, cper;

        // document.getElementById("e2").style.borderBottom = "none";
        //document.getElementById("e1").style.borderBottom = "solid 3px white";

        document.getElementById("e2").style.borderBottom = "none";
        document.getElementById("e2").style.color = "#FDFDFD";
        document.getElementById("e2").style.opacity = "0.5";
        document.getElementById("e1").style.color = "#FDFDFD";
        document.getElementById("e1").style.opacity = "1";
        document.getElementById("e1").style.borderBottom = "solid 2px #FDFDFD";
        document.getElementById("e1").style.textTransform = "uppercase";
        document.getElementById("e2").style.textTransform = "uppercase";




        var dataSource;

        if (window.selectedperiod === "today") {

            cpCalc = 0;
            for (var i = 0; i < pdArr.length; i++) {
                cpCalc = cpCalc + pdArr[i];
            }

            // so far today kpi
            // eslint-disable-next-line
            var cHour = parseInt(moment().format('H'));
            var sftCalc = 0;
            // eslint-disable-next-line
            for (var i = 0; i < cHour; i++) {
                sftCalc = sftCalc + pdArr[i];
            }

            // predicted today kpi

            var ptcpCalc = 0;
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


            dataSource = carbonfootprint_today_data;

            document.getElementById("em-tablecell-title1").innerHTML = moment().subtract(1, 'day').format('MMMM D');
            document.getElementById("em-tablecell-value1").innerHTML = Math.round(cpCalc * 100) / 100 + "  kg";

            document.getElementById("em-tablecell-title2").innerHTML = "So Far Today";
            document.getElementById("em-tablecell-value2").innerHTML = Math.round(sftCalc * 100) / 100 + "  kg";

            document.getElementById("em-tablecell-title3").innerHTML = "Predicted Today";
            document.getElementById("em-tablecell-value3").innerHTML = Math.round(ptcpCalc * 100) / 100 + "  kg";

            document.getElementById("em-tablecell-title4").innerHTML = "Change in Emissions";


        }
        else if (window.selectedperiod === "month") {
            dataSource = carbonfootprint_month_data;

            cpCalc = 0;
            // eslint-disable-next-line
            for (var i = 0; i < moment().subtract(1, 'month').daysInMonth(); i++) {
                cpCalc = cpCalc + pmArr[i];
            }

            // so far this month kpi
            // eslint-disable-next-line
            var cDate = parseInt(moment().format('D'));
            var sfmCalc = 0;
            // eslint-disable-next-line
            for (var i = 0; i < cDate; i++) {
                sfmCalc = sfmCalc + cmArr[i];
            }


            // predicted this month kpi

            var pmcpCalc = 0;
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


            document.getElementById("em-tablecell-title1").innerHTML = moment().subtract(1, 'month').format('MMMM');
            document.getElementById("em-tablecell-value1").innerHTML = Math.round(cpCalc * 100) / 100 + "  kg";

            document.getElementById("em-tablecell-title2").innerHTML = "So Far This Month";
            document.getElementById("em-tablecell-value2").innerHTML = Math.round(sfmCalc * 100) / 100 + "  kg"

            document.getElementById("em-tablecell-title3").innerHTML = "Predicted This Month";
            document.getElementById("em-tablecell-value3").innerHTML = Math.round(pmcpCalc * 100) / 100 + "  kg"

            document.getElementById("em-tablecell-title4").innerHTML = "Change in Emissions";
        }
        else {

            // last year's kpi

            cpCalc = 0;
            // eslint-disable-next-line
            for (var i = 0; i < pyArr.length; i++) {
                cpCalc = cpCalc + pyArr[i];
            }


            // so far this year kpi
            // eslint-disable-next-line
            var cMonth = parseInt(moment().format('M'));
            var sfyCalc = 0;
            // eslint-disable-next-line
            for (var i = 0; i < cMonth; i++) {
                sfyCalc = sfyCalc + cyArr[i];
            }


            // predicted this year kpi

            var pycpCalc = 0;
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




            dataSource = carbonfootprint_year_data;



            document.getElementById("em-tablecell-title1").innerHTML = moment().subtract(1, 'year').format('YYYY');
            document.getElementById("em-tablecell-value1").innerHTML = Math.round(cpCalc * 100) / 100 + "  kg";

            document.getElementById("em-tablecell-title2").innerHTML = "So Far This Year";
            document.getElementById("em-tablecell-value2").innerHTML = Math.round(sfyCalc * 100) / 100 + "  kg";

            document.getElementById("em-tablecell-title3").innerHTML = "Predicted This Year";
            document.getElementById("em-tablecell-value3").innerHTML = Math.round(pycpCalc * 100) / 100 + "  kg";

            document.getElementById("em-tablecell-title4").innerHTML = "Change in Emissions";

        }
        var chartconfig = { ...this.props.emissionchart };
        chartconfig.dataSource = dataSource;

        //utils.disposeChart('mychart7');
        const chart = (<ReactFC {...chartconfig} />);

        ReactDOM.unmountComponentAtNode(document.getElementById('em-chart-container'));

        ReactDOM.render(
            chart,
            document.getElementById('em-chart-container')
        );


    }

    //Logic for Green Energy Stats

    onClickbutton2() {


        window.b2selected = true;
        var cpCalc, cper;

        // document.getElementById("e1").style.borderBottom = "none";
        // document.getElementById("e2").style.borderBottom = "solid 3px white";

        document.getElementById("e1").style.borderBottom = "none";
        document.getElementById("e1").style.color = "#FDFDFD";
        document.getElementById("e1").style.opacity = "0.5";
        document.getElementById("e2").style.color = "#FDFDFD";
        document.getElementById("e2").style.opacity = "1";
        document.getElementById("e2").style.borderBottom = "solid 2px #FDFDFD";
        document.getElementById("e1").style.textTransform = "uppercase";
        document.getElementById("e2").style.textTransform = "uppercase";



        var dataSource;

        if (window.selectedperiod === "today") {

            cpCalc = 0;
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
                cper = Math.round(([(ptcpCalc / cpCalc) * 100] - 100) * 100) / 100;
                document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #B4F9A1;'>▲</span>";
            } else if (ptcpCalc < cpCalc) {
                cper = Math.round((100 - [(ptcpCalc / cpCalc) * 100]) * 100) / 100;
                document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #EF5052;'>▼</span>";
            }


            dataSource = green_energy_stats_today_data;

            document.getElementById("em-tablecell-title1").innerHTML = moment().subtract(1, 'day').format('MMMM D');
            document.getElementById("em-tablecell-value1").innerHTML = Math.round(cpCalc * 100) / 100 + " kWh";

            document.getElementById("em-tablecell-title2").innerHTML = "So Far Today";
            document.getElementById("em-tablecell-value2").innerHTML = Math.round(sftCalc * 100) / 100 + " kWh";

            document.getElementById("em-tablecell-title3").innerHTML = "Predicted Today";
            document.getElementById("em-tablecell-value3").innerHTML = Math.round(ptcpCalc * 100) / 100 + " kWh";

            document.getElementById("em-tablecell-title4").innerHTML = "Change in Emissions";



        }
        else if (window.selectedperiod === "month") {

            cpCalc = 0;
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
                cper = Math.round(([(pmcpCalc / cpCalc) * 100] - 100) * 100) / 100;
                document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #B4F9A1;'>▲</span>";
            } else if (pmcpCalc < cpCalc) {
                cper = Math.round((100 - [(pmcpCalc / cpCalc) * 100]) * 100) / 100;
                document.getElementById("em-tablecell-value4").innerHTML = cper + "% <span style='color: #EF5052;'>▼</span>";
            }

            dataSource = green_energy_stats_month_data;

            document.getElementById("em-tablecell-title1").innerHTML = moment().subtract(1, 'month').format('MMMM');
            document.getElementById("em-tablecell-value1").innerHTML = Math.round(cpCalc * 100) / 100 + " kWh";

            document.getElementById("em-tablecell-title2").innerHTML = "So Far This Month";
            document.getElementById("em-tablecell-value2").innerHTML = Math.round(sfmCalc * 100) / 100 + " kWh"

            document.getElementById("em-tablecell-title3").innerHTML = "Predicted This Month";
            document.getElementById("em-tablecell-value3").innerHTML = Math.round(pmcpCalc * 100) / 100 + " kWh"

            document.getElementById("em-tablecell-title4").innerHTML = "Change in Emissions";
        }
        else {

            cpCalc = 0;
            // eslint-disable-next-line
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



            dataSource = green_energy_stats_year_data;

            document.getElementById("em-tablecell-title1").innerHTML = moment().subtract(1, 'year').format('YYYY');
            document.getElementById("em-tablecell-value1").innerHTML = Math.round(cpCalc * 100) / 100 + " kWh";

            document.getElementById("em-tablecell-title2").innerHTML = "So Far This Year";
            document.getElementById("em-tablecell-value2").innerHTML = Math.round(sfyCalc * 100) / 100 + " kWh";

            document.getElementById("em-tablecell-title3").innerHTML = "Predicted This Year";
            document.getElementById("em-tablecell-value3").innerHTML = Math.round(pycpCalc * 100) / 100 + "kWh";

            document.getElementById("em-tablecell-title4").innerHTML = "Change in Emissions";
        }

        var chartconfig = { ...this.props.emissionchart };
        chartconfig.dataSource = dataSource;


        // utils.disposeChart('mychart7');

        const chart = (<ReactFC {...chartconfig} />);
        ReactDOM.unmountComponentAtNode(document.getElementById('em-chart-container'));
        ReactDOM.render(
            chart,
            document.getElementById('em-chart-container')
        );




    }

    render() {
        return <div>
            <div className="container-fluid">
                <div className="row pl-5 pr-5 pt-5 pb-0 time-control">
                    <div className="col-xs-6 mr-4 ml-4 pl-1 pr-1" id="e1" onClick={this.onClickbutton1}>
                        CARBON FOOTPRINT
                </div>

                    <div className="col-xs-6 mr-4 ml-4 pl-1 pr-1" id="e2" onClick={this.onClickbutton2}>
                        GREEN ENERGY STATS
                </div>
                </div>
            </div>
            <br />
            <EmissionTableContent />
            <br />
            <div className="res-chart--parent pt-1 pb-5 pr-5 pl-5">
                <div className="res-chart">
                    <div id="em-chart-container" className="pt-1 pr-2 pl-2 pb-3" /></div></div>
        </div>;
    }

}

export default EmissionComponent;