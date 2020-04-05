//import moment from 'moment';
var dayVal = "1.6";
//var dayDetail = moment().format('MMMM, Do YYYY');

var fifth_chart_today = {
    "chart": {
        "baseFont": "Nunito Sans",
        "setAdaptiveMin": "1",
        "baseFontColor": "#FFFFFF",
        "chartTopMargin": "0",
        "canvasTopMargin": "0",
        "chartBottomMargin": "70",
        "chartLeftMargin": "10",
        "chartRightMargin": "10",
        "showTickMarks": "0",
        "showTickValues": "0",
        "showLimits": "0",
        "majorTMAlpha": "0",
        "minorTMAlpha": "0",
        "pivotFillAlpha": "0",
        "showPivotBorder": "0",
        "pivotRadius": "0",
        "pivotborderthickness": "0",
        "gaugeouterradius": "150",
        "gaugeInnerradius": "125",
        "showGaugeBorder": "0",
        "gaugeFillMix": "{light+0}",
        "showBorder": "0",
        "bgColor": "#1D1B41",
        "bgAlpha": "0",
        "canvasBgAlpha": "0",
        "transposeAnimation":"1"

    },

    "annotations": {
        "groups": [{
            "items": [
            //     {
            //     "id": "1",
            //     "type": "text",
            //     "text": dayDetail,
            //     "align": "left",
            //     "font": "Nunito Sans",
            //     "bold": "0",
            //     "fontSize": "14",
            //     "color": "#FDFDFD",
            //     "x": "$chartStartX + 15",
            //     "y": "$chartEndY - 20"
            // }, 
            {
                "id": "2",
                "type": "text",
                "text": dayVal,
                "align": "center",
                "font": "Nunito Sans",
                "bold": "1",
                "fontSize": "45",
                "color": "#FDFDFD",
                "x": "$chartcenterX",
                "y": "$chartCenterY"
            },
             {
                "id": "3",
                "type": "text",
                "text": "kWh/Sqft",
                "align": "center",
                "font": "Nunito Sans",
                "bold": "0",
                "fontSize": "25",
                "color": "#FDFDFD",
                "x": "$chartcenterX",
                "y": "$chartCenterY + 45"
            }]
        }]
    },

    "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": dayVal,
            "code": "#58E2C2"
        },
        {
            "minValue": dayVal,
            "maxValue": "7",
            "code": "#48506E"
        }
        ]
    },

    "dials": {
        "dial": [{
            "value": dayVal,
            "alpha": "0",
            "borderAlpha": "0",
            "radius": "0",
            "baseRadius": "0",
            "rearExtension": "0",
            "baseWidth": "0",
            "showValue": "0"
        }]
    }
};

var monthVal = "47";
//var monthDetail = moment().format('MMMM YYYY');

var fifth_chart_month = {
    "chart": {
        "baseFont": "Nunito Sans",
        "setAdaptiveMin": "1",
        "baseFontColor": "#FFFFFF",
        "chartTopMargin": "0",
        "canvasTopMargin": "0",
        "chartBottomMargin": "70",
        "chartLeftMargin": "10",
        "chartRightMargin": "10",
        "showTickMarks": "0",
        "showTickValues": "0",
        "showLimits": "0",
        "majorTMAlpha": "0",
        "minorTMAlpha": "0",
        "pivotFillAlpha": "0",
        "showPivotBorder": "0",
        "gaugeouterradius": "150",
        "gaugeInnerradius": "125",
        //"gaugeouterradius": "160",
        //"gaugeInnerradius": "130",
        "showGaugeBorder": "0",
        "gaugeFillMix": "{light+0}",
        "showBorder": "0",
        "bgColor": "#1D1B41",
        "bgAlpha": "0",
        "canvasBgAlpha": "0",
        "transposeAnimation":"1"


    },

    "annotations": {
        "groups": [{
            "items": [
            //     {
            //     "id": "1",
            //     "type": "text",
            //     "text": monthDetail,
            //     "align": "left",
            //     "font": "Nunito Sans",
            //     "bold": "0",
            //     "fontSize": "14",
            //     "color": "#FDFDFD",
            //     "x": "$chartStartX + 15",
            //     "y": "$chartEndY - 20"
            // },
             {
                "id": "2",
                "type": "text",
                "text": monthVal,
                "align": "center",
                "font": "Nunito Sans",
                "bold": "1",
                "fontSize": "45",
                "color": "#FDFDFD",
                "x": "$chartcenterX",
                "y": "$chartCenterY"
            }, {
                "id": "3",
                "type": "text",
                "text": "kWh/Sqft",
                "align": "center",
                "font": "Nunito Sans",
                "bold": "0",
                "fontSize": "25",
                "color": "#FDFDFD",
                "x": "$chartcenterX",
                "y": "$chartCenterY + 45"
            }]
        }]
    },

    "colorRange": {
        "color": [{
            "minValue": "25",
            "maxValue": monthVal,
            "code": "#58E2C2"
        },
        {
            "minValue": monthVal,
            "maxValue": "60",
            "code": "#48506E"
        }
        ]
    },

    "dials": {
        "dial": [{
            "value": monthVal,
            "alpha": "0",
            "borderAlpha": "0",
            "radius": "0",
            "baseRadius": "0",
            "rearExtension": "0",
            "baseWidth": "0",
            "showValue": "0"
        }]
    }
};
var yearVal = "556";
//var yearDetail = moment().format('YYYY');

var fifth_chart_year = {
    "chart": {
        "baseFont": "Nunito Sans",
        "setAdaptiveMin": "1",
        "baseFontColor": "#FFFFFF",
        "chartTopMargin": "0",
        "canvasTopMargin": "0",
        "chartBottomMargin": "70",
        "chartLeftMargin": "10",
        "chartRightMargin": "10",
        "showTickMarks": "0",
        "showTickValues": "0",
        "showLimits": "0",
        "majorTMAlpha": "0",
        "minorTMAlpha": "0",
        "pivotFillAlpha": "0",
        "showPivotBorder": "0",
        "gaugeouterradius": "150",
        "gaugeInnerradius": "125",
       // "gaugeouterradius": "160",
      //  "gaugeInnerradius": "130",
        "showGaugeBorder": "0",
        "gaugeFillMix": "{light+0}",
        "showBorder": "0",
        "bgColor": "#1D1B41",
        "bgAlpha": "0",
        "canvasBgAlpha": "0",
        "transposeAnimation":"1"


    },

    "annotations": {
        "groups": [{
            "items": [
            //     {
            //     "id": "1",
            //     "type": "text",
            //     "text": yearDetail,
            //     "align": "left",
            //     "font": "Nunito Sans",
            //     "bold": "0",
            //     "fontSize": "14",
            //     "color": "#FDFDFD",
            //     "x": "$chartStartX + 15",
            //     "y": "$chartEndY - 20"
            // }, 
            {
                "id": "2",
                "type": "text",
                "text": yearVal,
                "align": "center",
                "font": "Nunito Sans",
                "bold": "1",
                "fontSize": "45",
                "color": "#FDFDFD",
                "x": "$chartcenterX",
                "y": "$chartCenterY"
            }, {
                "id": "3",
                "type": "text",
                "text": "kWh/Sqft",
                "align": "center",
                "font": "Nunito Sans",
                "bold": "0",
                "fontSize": "25",
                "color": "#FDFDFD",
                "x": "$chartcenterX",
                "y": "$chartCenterY + 45"
            }]
        }]
    },

    "colorRange": {
        "color": [{
            "minValue": "480",
            "maxValue": yearVal,
            "code": "#58E2C2"
        },
        {
            "minValue": yearVal,
            "maxValue": "650",
            "code": "#48506E"
        }
        ]
    },

    "dials": {
        "dial": [{
            "value": yearVal,
            "alpha": "0",
            "borderAlpha": "0",
            "radius": "0",
            "baseRadius": "0",
            "rearExtension": "0",
            "baseWidth": "0",
            "showValue": "0"
        }]
    }
};



var chartConfigs5 = {
    type: "angulargauge",
    className: "fc-angulargauge",
    id: "mychart5",
    dataFormat: "JSON",
    width: "100%",
    height: "300",
    dataSource: fifth_chart_month
};

export default chartConfigs5;
export { fifth_chart_today };
export { fifth_chart_month };
export { fifth_chart_year };