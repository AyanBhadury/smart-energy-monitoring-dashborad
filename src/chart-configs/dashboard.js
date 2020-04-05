
var first_chart_today = {
    "chart": {
        "caption": "By Today",
        //"subCaption": "Last year",
        "bgcolor": "1A234B",
        "bgalpha":"100",
        "divlinealpha":"0",
        "theme":"ocean",
        "basefontcolor":"#ffffff",
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

var first_chart_month = {
    "chart": {
        "caption": "By Month",
        "bgcolor": "1A234B",
        "bgalpha":"100",
        "divlinealpha":"0",
        "theme":"ocean",
        "basefontcolor":"#ffffff",
        "canvasbgcolor": "1A234B"
    },
    "data": [{
        "label": "aaa",
        "value": "78"
    }, {
        "label": "Apparels",
        "value": "14633"
    }, {
        "label": "Electronics",
        "value": "1000"
    }, {
        "label": "Household",
        "value": "20000"
    }]
};

var first_chart_year = {
    "chart": {
        "caption": "By Year",
        "bgcolor": "1A234B",
        "divlinealpha":"0",
        "bgalpha":"100",
        "theme":"ocean",
        "basefontcolor":"#ffffff",
        "canvasbgcolor": "1A234B"
    },

    "data": [
        {
            "label": "Mon",
            "value": "4123"
        },
        {
            "label": "Tue",
            "value": "4633"
        },
        {
            "label": "Wed",
            "value": "5507"
        },
        {
            "label": "Thu",
            "value": "4910"
        },
        {
            "label": "Fri",
            "value": "5529"
        },
        {
            "label": "Sat",
            "value": "5803"
        },
        {
            "label": "Sun",
            "value": "6202"
        }
    ]
};



var chartConfigs1 = {
    type: "Column2D",
    className: "fc-column2d", // ReactJS attribute-name for DOM classes
    dataFormat: "JSON",
    width: "100%",
    id: "mychart1",
    dataSource: first_chart_month
};

export default chartConfigs1;
export { first_chart_month };
export { first_chart_today };
export { first_chart_year };