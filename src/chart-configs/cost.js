
var second_chart_today = {
    "chart": {
        "caption": "By today",
        //"subCaption": "Last month",
        "bgcolor": "1A234B",
        "divlinealpha":"0",
        "bgalpha": "100",
        "theme": "ocean",
        "basefontcolor": "#ffffff",
        "canvasbgcolor": "1A234B"
    },

    "data": [{
        "label": "Bakersfield Central",
        "value": "880000"
    }, {
        "label": "Garden Groove harbour",
        "value": "730000"
    }, {
        "label": "Los Angeles Topanga",
        "value": "590000"
    }, {
        "label": "Compton-Rancho Dom",
        "value": "520000"
    }, {
        "label": "Daly City Serramonte",
        "value": "330000"
    }]
};

var second_chart_month = {
    "chart": {
        "caption": "By month",
        // "subCaption": "Last year",
        "bgcolor": "1A234B",
        "divlinealpha":"0",
        "bgalpha": "100",
        "theme": "ocean",
        "basefontcolor": "#ffffff",
        "canvasbgcolor": "1A234B"
    },
    "data": [{
        "label": "Food",
        "value": "28504"
    }, {
        "label": "Apparels",
        "value": "14633"
    }, {
        "label": "Electronics",
        "value": "10507"
    }, {
        "label": "Household",
        "value": "4910"
    }]
};

var second_chart_year = {
    "chart": {
        "caption": "By Year",
        // "subCaption": "Last week",
        "bgcolor": "1A234B",
        "divlinealpha":"0",
        "bgalpha": "100",
        "theme": "ocean",
        "basefontcolor": "#ffffff",
        "canvasbgcolor": "1A234B"

    },
    "data": [{
        "label": "Mon",
        "value": "15123"
    }, {
        "label": "Tue",
        "value": "14233"
    }, {
        "label": "Wed",
        "value": "23507"
    }, {
        "label": "Thu",
        "value": "9110"
    }, {
        "label": "Fri",
        "value": "15529"
    }, {
        "label": "Sat",
        "value": "20803"
    }, {
        "label": "Sun",
        "value": "19202"
    }]
};



var chartConfigs2 = {
    type: "Column2d",
    className: "fc-column2d",
    id: "mychart2",
    dataFormat: "JSON",
    width: "100%",
    dataSource: second_chart_month
};

export default chartConfigs2;
export { second_chart_today };
export { second_chart_month };
export { second_chart_year };