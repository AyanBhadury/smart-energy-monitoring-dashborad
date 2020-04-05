import moment from 'moment';
// carbon footprint data
// current day and previous day data
export var cdArr = [0.3, 0.2, 0.1, 0.3, 0.2, 0.2, 0.2, 0.1, 0.1, 0.1, 0.4, 0.4, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.5, 0.5, 0.5, 0.5];
export var pdArr = [0.3, 0.4, 0.3, 0.2, 0.1, 0.2, 0.2, 0.1, 0.3, 0.3, 0.3, 0.2, 0.2, 0.2, 0.2, 0.2, 0.3, 0.3, 0.1, 0.5, 0.5, 0.4, 0.3, 0.3];
export var cumm_pdArr = [0.3, 0.7, 1, 1.2, 1.3, 1.5, 1.7, 1.8, 2.1, 2.4, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 4, 4.3, 4.4, 4.9, 5.4, 5.8, 6.1, 6.4];
export var cumm_cdArr = [0.3, 0.5, 0.6, 0.9, 1.1, 1.3, 1.5, 1.6, 1.7, 1.8, 2.2, 2.6, 2.7, 2.8, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.4, 4.9, 5.4, 5.9];


// current month and previous month data
export var cmArr = [7.3, 6.2, 5.9, 6.4, 7.9, 5.4, 5.9, 6.9, 7.2, 7.1, 6.3, 7.1, 6.7, 7.1, 7.1, 5.7, 6.1, 7.1, 6.3, 7, 7.9, 6.7, 6.9, 6.1, 5.9, 8.6, 6.2, 7.3, 7.2, 7.1, 6.4];
export var pmArr = [5, 6.3, 5.9, 6.4, 5.8, 6.8, 5.4, 6.2, 5.6, 6.9, 6, 5.7, 6.3, 7, 6.2, 5.4, 5.2, 7, 6.9, 7, 6.6, 7.7, 5.8, 7.6, 6.5, 6.4, 6.6, 6, 6.3, 7.3, 6.2];
export var cumm_cmArr = [7.3, 13.5, 19.4, 25.8, 33.7, 39.1, 45, 51.9, 59.1, 66.2, 72.5, 79.6, 86.3, 93.4, 100.5, 106.2, 112.3, 119.4, 125.7, 132.7, 140.6, 147.3, 154.2, 160.3, 166.2, 174.8, 181, 188.3, 195.5, 202.6, 209];
export var cumm_pmArr = [5, 11.3, 17.2, 23.6, 29.4, 36.2, 41.6, 47.8, 53.4, 60.3, 66.3, 72, 78.3, 85.3, 91.5, 96.9, 102.1, 109.1, 116, 123, 129.6, 137.3, 143.1, 150.7, 157.2, 163.6, 170.2, 176.2, 182.5, 189.8, 196];

// current year and previous year data
export var cyArr = [195, 190, 162, 173, 167, 161, 155, 153, 162, 160, 209, 213];
export var pyArr = [200, 210, 173, 209, 189, 202, 209, 190, 190, 162, 203, 213];
export var cumm_cyArr = [195, 385, 547, 720, 887, 1048, 1203, 1356, 1518, 1678, 1887, 2100];
export var cumm_pyArr = [200, 410, 583, 792, 981, 1183, 1392, 1582, 1772, 1934, 2137, 2350];

// green energy data    

// today and yesterday's green energy data
export var cdgeArr = [0.3, 0.2, 0.2, 0.3, 0.2, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.2, 0.5, 0.5, 0.5, 0.5];
export var pdgeArr = [0.4, 0.3, 0.3, 0.3, 0.3, 0.3, 0.2, 0.3, 0.3, 0.3, 0.3, 0.2, 0.2, 0.2, 0.3, 0.4, 0.3, 0.3, 0.4, 0.3, 0.4, 0.4, 0.3, 0.2];
export var cumm_cdgeArr = [0.3, 0.5, 0.7, 1, 1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 4.6, 5, 5.2, 5.4, 5.6, 5.8, 6, 6.5, 7, 7.5, 8];
export var cumm_pdgeArr = [0.4, 0.7, 1, 1.3, 1.6, 1.9, 2.1, 2.4, 2.7, 3, 3.3, 3.5, 3.7, 3.9, 4.2, 4.6, 4.9, 5.2, 5.6, 5.9, 6.3, 6.7, 7, 7.2];

// current and last month's green energy data
export var cmgeArr = [9, 6.2, 7.3, 8, 9.3, 9, 8, 6.9, 8.1, 7.8, 9, 8, 6.7, 8, 7.1, 9, 8, 8.1, 8.9, 7, 7.9, 8.9, 8.9, 6.9, 7.1, 8.6, 9, 7.3, 8.9, 8, 9.1];
export var pmgeArr = [7, 7, 7.2, 8, 7.3, 6.8, 7, 6.2, 7.7, 6.9, 6, 7.8, 7.3, 8, 6.2, 7.3, 7.3, 7, 6.9, 7, 6.6, 7.7, 6.9, 7.6, 6.5, 6.4, 6.6, 9, 6.6, 9.4, 9.8];
export var cumm_cmgeArr = [9, 15.2, 22.5, 30.5, 39.8, 48.8, 56.8, 63.7, 71.8, 79.6, 88.6, 96.6, 103.3, 111.3, 118.4, 127.4, 135.4, 143.5, 152.4, 159.4, 167.3, 176.2, 185.1, 192, 199.1, 207.7, 216.7, 224, 232.9, 240.9, 250];
export var cumm_pmgeArr = [7, 14, 21.2, 29.2, 36.5, 43.3, 50.3, 56.5, 64.2, 71.1, 77.1, 84.9, 92.2, 100.2, 106.4, 113.7, 121, 128, 134.9, 141.9, 148.5, 156.2, 163.1, 170.7, 177.2, 183.6, 190.2, 199.2, 205.8, 215.2, 225];

// current and last year's green energy data
export var cygeArr = [290, 230, 262, 273, 207, 213, 251, 200, 262, 273, 290, 219];
export var pygeArr = [220, 250, 213, 290, 230, 202, 229, 209, 210, 215, 209, 213];
export var cumm_cygeArr = [290, 520, 782, 1055, 1262, 1475, 1726, 1926, 2188, 2461, 2751, 2970];
export var cumm_pygeArr = [220, 470, 683, 973, 1203, 1405, 1634, 1843, 2053, 2268, 2477, 2690];

// yesterday's kpi

export var cpCalc = 0;
for (var i = 0; i < pdArr.length; i++) {
  cpCalc = cpCalc + pdArr[i];
}

// so far today kpi
// eslint-disable-next-line
var cHour = parseInt(moment().format('H'));
export var sftCalc = 0;
// eslint-disable-next-line
for (var i = 0; i < cHour; i++) {
  sftCalc = sftCalc + pdArr[i];
}


// predicted today kpi

export var ptcpCalc = 0;
// eslint-disable-next-line
for (var i = 0; i < cdArr.length; i++) {
  ptcpCalc = ptcpCalc + cdArr[i];
}

// emisson change kpi

// if (ptcpCalc > cpCalc) {
//   var cper = Math.round(([(ptcpCalc / cpCalc) * 100] - 100) * 100) / 100;

// } else if (ptcpCalc < cpCalc) {
//   var cper = Math.round((100 - [(ptcpCalc / cpCalc) * 100]) * 100) / 100;

// }


var catArr = [];
// eslint-disable-next-line
for (var i = 0; i < cdArr.length; i++) {
  catArr.push({ "label": i + ":00" });
  if (i !== 0) {
    catArr.push({ "vline": "true", "lineposition": "0", "color": "#979797", "alpha": "35" });
  }
}

var pdataArr = [];
// eslint-disable-next-line
for (var i = 0; i < cumm_pdArr.length; i++) {
  pdataArr.push({ "value": cumm_pdArr[i] });
}

var cdataArr = [];
// eslint-disable-next-line
for (var i = 0; i < cumm_cdArr.length; i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('H'))) {
    cdataArr.push({ "value": cumm_cdArr[i] });
  } else {
    cdataArr.push({ "value": cumm_cdArr[i], "dashed": "1" });
  }
}

var carbonfootprint_today_data = {
  "chart": {
    "bgColor": "#1D1B41",
    "bgAlpha": "0",
    "canvasBgAlpha": "0",
    "showBorder": "0",
    "showCanvasBorder": "0",
    "drawAnchors": "0",
    "showValues": "0",
    "baseFontSize": "14",
    "baseFont": "Nunito Sans",
    "baseFontColor": "#FDFDFD",
    "baseFontBold": "0",
    "drawCustomLegendIcon": "1",
    "paletteColors": "#F2F14F, #2AD8A8",
    "legendBgAlpha": "0",
    "legendBorderAlpha": "0",
    "lineThickness": "2.5",
    "shadow": "0",
    "showAxisLines": "1",
    "yAxisLineColor": "#979797",
    "xAxisLineColor": "#979797",
    "xAxisLineThickness": "2",
    "yAxisLineThickness": "2",
    "showAlternateHGridColor": "0",
    "divLineColor": "#979797",
    "divLineAlpha": "60",
    "divLineThickness": "0.5",
    "divLineDashed": "1",
    "dashLen": "1",
    "dashGap": "200",
    "showZeroPlane": "0",
    "yAxisname": "CO2",
    "yAxisMaxValue": "1",
    "toolTipBgcolor": "#484E69",
    "toolTipPadding": "5",
    "toolTipBorderRadius": "2",
    "toolTipBorderAlpha": "30",
    "tooltipBorderThickness": "0.7",
    "toolTipColor": "#FDFDFD",
    "canvasPadding": "0",
    "drawCrossLine": "1",
    "numberSuffix": " kg",
    "chartLeftMargin": "0",
    "chartRightMargin": "0",
    "chartBottomMargin": "0",
    "canvasLeftMargin": "0",
    "canvasRightMargin": "0",
    "canvasBottomMargin": "0"
  },

  "categories": [{
    "category": catArr
  }],

  "dataset": [{
    "seriesname": moment().subtract(1, 'day').format('MMM D'),
    "anchorBgColor": "#F2F14F",
    "data": pdataArr
  }, {
    "seriesname": moment().format('MMM D'),
    "anchorBgColor": "#2AD8A8",
    "data": cdataArr
  }],

  "trendlines": [{
    "line": [{
      "startvalue": ptcpCalc + 0.5,
      "color": "#EF5052",
      "valueOnRight": "1",
      "displayvalue": "Threshold",
      "trendlineThickness": "2.5"
    }]
  }]
};

// last month's kpi

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

// if (pmcpCalc > cpCalc) {
//   var cper = Math.round(([(pmcpCalc / cpCalc) * 100] - 100) * 100) / 100;

// } else if (pmcpCalc < cpCalc) {
//   var cper = Math.round((100 - [(pmcpCalc / cpCalc) * 100]) * 100) / 100;

// }

 catArr = [];
// eslint-disable-next-line
for (var i = 0; i < moment().daysInMonth(); i++) {
  // eslint-disable-next-line
  catArr.push({ "label": "Day " + parseInt(i + 1) });
  if (i !== 0) {
    catArr.push({ "vline": "true", "lineposition": "0", "color": "#979797", "alpha": "35" });
  }
}

 pdataArr = [];
// eslint-disable-next-line
for (var i = 0; i < moment().subtract(1, 'month').daysInMonth(); i++) {
  pdataArr.push({ "value": cumm_pmArr[i] });
}

 cdataArr = [];
// eslint-disable-next-line
for (var i = 0; i < moment().daysInMonth(); i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('D')) - 1) {
    cdataArr.push({ "value": cumm_cmArr[i] });
  } else {
    cdataArr.push({ "value": cumm_cmArr[i], "dashed": "1" });
  }
}


var carbonfootprint_month_data = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    drawAnchors: "0",
    showValues: "0",
    baseFontSize: "14",
    baseFont: "Nunito Sans",
    baseFontColor: "#FDFDFD",
    baseFontBold: "0",
    drawCustomLegendIcon: "1",
    paletteColors: "#F2F14F, #2AD8A8",
    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    lineThickness: "2.5",
    shadow: "0",
    showAxisLines: "1",
    yAxisLineColor: "#979797",
    xAxisLineColor: "#979797",
    xAxisLineThickness: "2",
    yAxisLineThickness: "2",
    showAlternateHGridColor: "0",
    divLineColor: "#979797",
    divLineAlpha: "60",
    divLineThickness: "0.5",
    divLineDashed: "1",
    dashLen: "1",
    dashGap: "200",
    showZeroPlane: "0",
    yAxisname: "CO2",
    numberSuffix: " kg",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    canvasPadding: "0",
    drawCrossLine: "1",

    yAxisMaxValue: "230",
    showLabels: "1",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    chartBottomMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    canvasBottomMargin: "0"
  },

  categories: [
    {
      category: catArr
    }
  ],

  dataset: [
    {
      seriesname: moment()
        .subtract(1, "month")
        .format("MMM"),
      anchorBgColor: "#F2F14F",
      data: pdataArr
    },
    {
      seriesname: moment().format("MMM"),
      anchorBgColor: "#2AD8A8",
      data: cdataArr
    }
  ],

  trendlines: [
    {
      line: [
        {
          startvalue: pmcpCalc,
          color: "#EF5052",
          valueOnRight: "1",
          displayvalue: "Threshold",
          trendlineThickness: "2.5"
        }
      ]
    }
  ]
};

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

// if (pycpCalc > cpCalc) {
//   var cper = Math.round(([(pycpCalc / cpCalc) * 100] - 100) * 100) / 100;

// } else if (pycpCalc < cpCalc) {
//   var cper = Math.round((100 - [(pycpCalc / cpCalc) * 100]) * 100) / 100;

// }

catArr = [];
// eslint-disable-next-line
for (var i = 0; i < 12; i++) {
  catArr.push({ "label": moment().month(i).format('MMM') });
  if (i !== 0) {
    catArr.push({ "vline": "true", "lineposition": "0", "color": "#979797", "alpha": "35" });
  }
}

pdataArr = [];
// eslint-disable-next-line
for (var i = 0; i < 12; i++) {
  pdataArr.push({ "value": cumm_pyArr[i] });
}

 cdataArr = [];
 // eslint-disable-next-line
for (var i = 0; i < 12; i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('M') - 1)) {
    cdataArr.push({ "value": cumm_cyArr[i] });
  } else {
    cdataArr.push({ "value": cumm_cyArr[i], "dashed": "1" });
  }
}



var carbonfootprint_year_data = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    drawAnchors: "0",
    showValues: "0",
    baseFontSize: "14",
    baseFont: "Nunito Sans",
    baseFontColor: "#FDFDFD",
    baseFontBold: "0",
    drawCustomLegendIcon: "1",
    paletteColors: "#F2F14F, #2AD8A8",
    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    lineThickness: "2.5",
    shadow: "0",
    showAxisLines: "1",
    yAxisLineColor: "#979797",
    xAxisLineColor: "#979797",
    xAxisLineThickness: "2",
    yAxisLineThickness: "2",
    showAlternateHGridColor: "0",
    divLineColor: "#979797",
    divLineAlpha: "60",
    divLineThickness: "0.5",
    divLineDashed: "1",
    dashLen: "1",
    dashGap: "200",
    showZeroPlane: "0",
    yAxisname: "CO2 in kgs",

    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    canvasPadding: "0",
    drawCrossLine: "1",
    numberSuffix: " kgs",
    yAxisMaxValue: "230",
    showLabels: "1",
    formatNumberScale: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    chartBottomMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    canvasBottomMargin: "0"
  },

  categories: [
    {
      category: catArr
    }
  ],

  dataset: [
    {
      seriesname: moment()
        .subtract(1, "year")
        .format("YYYY"),
      anchorBgColor: "#F2F14F",
      data: pdataArr
    },
    {
      seriesname: moment().format("YYYY"),
      anchorBgColor: "#2AD8A8",
      data: cdataArr
    }
  ],

  trendlines: [
    {
      line: [
        {
          startvalue: pycpCalc + 50,
          color: "#EF5052",
          valueOnRight: "1",
          displayvalue: "Threshold",
          trendlineThickness: "2.5"
        }
      ]
    }
  ]
};

// yesterday's kpi

cpCalc = 0;
// eslint-disable-next-line
for (var i = 0; i < pdgeArr.length; i++) {
  cpCalc = cpCalc + pdgeArr[i];
}


// so far today kpi
// eslint-disable-next-line
var cHour = parseInt(moment().format('H'));
sftCalc = 0;
// eslint-disable-next-line
for (var i = 0; i < cHour; i++) {
  sftCalc = sftCalc + cdgeArr[i];
}


// predicted today kpi

ptcpCalc = 0;
// eslint-disable-next-line
for (var i = 0; i < cdgeArr.length; i++) {
  ptcpCalc = ptcpCalc + cdgeArr[i];
}

// emisson change kpi

// if (ptcpCalc > cpCalc) {
//   var cper = Math.round(([(ptcpCalc / cpCalc) * 100] - 100) * 100) / 100;

// } else if (ptcpCalc < cpCalc) {
//   var cper = Math.round((100 - [(ptcpCalc / cpCalc) * 100]) * 100) / 100;

// }


catArr = [];
// eslint-disable-next-line
for (var i = 0; i < cdgeArr.length; i++) {
  catArr.push({ "label": i + ":00" });
  if (i !== 0) {
    catArr.push({ "vline": "true", "lineposition": "0", "color": "#979797", "alpha": "35" });
  }
}

pdataArr = [];
// eslint-disable-next-line
for (var i = 0; i < cumm_pdgeArr.length; i++) {
  pdataArr.push({ "value": cumm_pdgeArr[i] });
}

cdataArr = [];
// eslint-disable-next-line
for (var i = 0; i < cumm_cdgeArr.length; i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('H'))) {
    cdataArr.push({ "value": cumm_cdgeArr[i] });
  } else {
    cdataArr.push({ "value": cumm_cdgeArr[i], "dashed": "1" });
  }
}


var green_energy_stats_today_data = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    drawAnchors: "0",
    showValues: "0",
    baseFontSize: "14",
    baseFont: "Nunito Sans",
    baseFontColor: "#FDFDFD",
    baseFontBold: "0",
    drawCustomLegendIcon: "1",
    paletteColors: "#F2F14F, #2AD8A8",
    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    lineThickness: "2.5",
    shadow: "0",
    showAxisLines: "1",
    yAxisLineColor: "#979797",
    xAxisLineColor: "#979797",
    xAxisLineThickness: "2",
    yAxisLineThickness: "2",
    showAlternateHGridColor: "0",
    divLineColor: "#979797",
    divLineAlpha: "60",
    divLineThickness: "0.5",
    divLineDashed: "1",
    dashLen: "1",
    dashGap: "200",
    showZeroPlane: "0",
    yAxisname: "Energy Generated",
    numberSuffix: " kWh",
    yAxisMaxValue: "1",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    canvasPadding: "0",
    drawCrossLine: "1",

    numDivLines: "5",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    chartBottomMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    canvasBottomMargin: "0"
  },

  categories: [
    {
      category: catArr
    }
  ],

  dataset: [
    {
      seriesname: moment()
        .subtract(1, "day")
        .format("MMM D"),
      anchorBgColor: "#F2F14F",
      data: pdataArr
    },
    {
      seriesname: moment().format("MMM D"),
      anchorBgColor: "#2AD8A8",
      data: cdataArr
    }
  ],

  trendlines: [
    {
      line: [
        {
          startvalue: ptcpCalc - 1,
          color: "#EF5052",
          valueOnRight: "1",
          displayvalue: "Goal",
          trendlineThickness: "2.5"
        }
      ]
    }
  ]
};

// last month's kpi

cpCalc = 0;
// eslint-disable-next-line
for (var i = 0; i < moment().subtract(1, 'month').daysInMonth(); i++) {
  cpCalc = cpCalc + pmgeArr[i];
}


// so far this month kpi
// eslint-disable-next-line
cDate = parseInt(moment().format('D'));
sfmCalc = 0;
// eslint-disable-next-line
for (var i = 0; i < cDate; i++) {
  sfmCalc = sfmCalc + cmgeArr[i];
}


// predicted this month kpi

pmcpCalc = 0;
// eslint-disable-next-line
for (var i = 0; i < moment().daysInMonth(); i++) {
  pmcpCalc = pmcpCalc + cmgeArr[i];
}


// emisson change kpi

// if (pmcpCalc > cpCalc) {
//   var cper = Math.round(([(pmcpCalc / cpCalc) * 100] - 100) * 100) / 100;

// } else if (pmcpCalc < cpCalc) {
//   var cper = Math.round((100 - [(pmcpCalc / cpCalc) * 100]) * 100) / 100;

// }



catArr = [];
// eslint-disable-next-line
for (var i = 0; i < moment().daysInMonth(); i++) {
  // eslint-disable-next-line
  catArr.push({ "label": "Day " + parseInt(i + 1) });
  if (i !== 0) {
    catArr.push({ "vline": "true", "lineposition": "0", "color": "#979797", "alpha": "35" });
  }
}

pdataArr = [];
// eslint-disable-next-line
for (var i = 0; i < moment().subtract(1, 'month').daysInMonth(); i++) {
  pdataArr.push({ "value": cumm_pmgeArr[i] });
}

cdataArr = [];
// eslint-disable-next-line
for (var i = 0; i < moment().daysInMonth(); i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('D')) - 1) {
    cdataArr.push({ "value": cumm_cmgeArr[i] });
  } else {
    cdataArr.push({ "value": cumm_cmgeArr[i], "dashed": "1" });
  }
}


var green_energy_stats_month_data = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    drawAnchors: "0",
    showValues: "0",
    baseFontSize: "14",
    baseFont: "Nunito Sans",
    baseFontColor: "#FDFDFD",
    baseFontBold: "0",
    drawCustomLegendIcon: "1",
    paletteColors: "#F2F14F, #2AD8A8",
    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    lineThickness: "2.5",
    shadow: "0",
    showAxisLines: "1",
    yAxisLineColor: "#979797",
    xAxisLineColor: "#979797",
    xAxisLineThickness: "2",
    yAxisLineThickness: "2",
    showAlternateHGridColor: "0",
    divLineColor: "#979797",
    divLineAlpha: "60",
    divLineThickness: "0.5",
    divLineDashed: "1",
    dashLen: "1",
    dashGap: "200",
    showZeroPlane: "0",
    yAxisname: "Energy Generated",

    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    canvasPadding: "0",
    drawCrossLine: "1",
    numberSuffix: " kWh",
    yAxisMaxValue: "230",
    showLabels: "1",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    chartBottomMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    canvasBottomMargin: "0"
  },

  categories: [
    {
      category: catArr
    }
  ],

  dataset: [
    {
      seriesname: moment()
        .subtract(1, "month")
        .format("MMM"),
      anchorBgColor: "#F2F14F",
      data: pdataArr
    },
    {
      seriesname: moment().format("MMM"),
      anchorBgColor: "#2AD8A8",
      data: cdataArr
    }
  ],

  trendlines: [
    {
      line: [
        {
          startvalue: pmcpCalc - 13,
          color: "#EF5052",
          valueOnRight: "1",
          displayvalue: "Goal",
          trendlineThickness: "2.5"
        }
      ]
    }
  ]
};

// last year's kpi

 //var pCalc = 0;
 // eslint-disable-next-line
for (var i = 0; i < pygeArr.length; i++) {
  cpCalc = cpCalc + pygeArr[i];
}

// so far this year kpi
// eslint-disable-next-line
cMonth = parseInt(moment().format('M'));
sfyCalc = 0;
// eslint-disable-next-line
for (var i = 0; i < cMonth; i++) {
  sfyCalc = sfyCalc + cygeArr[i];
}


// predicted this year kpi

pycpCalc = 0;
// eslint-disable-next-line
for (var i = 0; i < 12; i++) {
  pycpCalc = pycpCalc + cygeArr[i];
}


// emisson change kpi

// if (pycpCalc > cpCalc) {
//   var cper = Math.round(([(pycpCalc / cpCalc) * 100] - 100) * 100) / 100;

// } else if (pycpCalc < cpCalc) {
//   var cper = Math.round((100 - [(pycpCalc / cpCalc) * 100]) * 100) / 100;

// }


catArr = [];
// eslint-disable-next-line
for (var i = 0; i < 12; i++) {
  // eslint-disable-next-line
  catArr.push({ "label": moment().month(i).format('MMM') });
  if (i !== 0) {
    catArr.push({ "vline": "true", "lineposition": "0", "color": "#979797", "alpha": "35" });
  }
}

pdataArr = [];
// eslint-disable-next-line
for (var i = 0; i < 12; i++) {
  pdataArr.push({ "value": cumm_pygeArr[i] });
}

cdataArr = [];
// eslint-disable-next-line
for (var i = 0; i < 12; i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('M') - 1)) {
    cdataArr.push({ "value": cumm_cygeArr[i] });
  } else {
    cdataArr.push({ "value": cumm_cygeArr[i], "dashed": "1" });
  }
}

var green_energy_stats_year_data = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    drawAnchors: "0",
    showValues: "0",
    baseFontSize: "14",
    baseFont: "Nunito Sans",
    baseFontColor: "#FDFDFD",
    baseFontBold: "0",
    drawCustomLegendIcon: "1",
    paletteColors: "#F2F14F, #2AD8A8",
    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    lineThickness: "2.5",
    shadow: "0",
    showAxisLines: "1",
    yAxisLineColor: "#979797",
    xAxisLineColor: "#979797",
    xAxisLineThickness: "2",
    yAxisLineThickness: "2",
    showAlternateHGridColor: "0",
    divLineColor: "#979797",
    divLineAlpha: "60",
    divLineThickness: "0.5",
    divLineDashed: "1",
    dashLen: "1",
    dashGap: "200",
    showZeroPlane: "0",
    yAxisname: "Energy Generated",
    numberSuffix: " kWh",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    canvasPadding: "0",
    drawCrossLine: "1",

    yAxisMaxValue: "230",
    showLabels: "1",
    formatNumberScale: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    chartBottomMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    canvasBottomMargin: "0"
  },

  categories: [
    {
      category: catArr
    }
  ],

  dataset: [
    {
      seriesname: moment()
        .subtract(1, "year")
        .format("YYYY"),
      anchorBgColor: "#F2F14F",
      data: pdataArr
    },
    {
      seriesname: moment().format("YYYY"),
      anchorBgColor: "#2AD8A8",
      data: cdataArr
    }
  ],

  trendlines: [
    {
      line: [
        {
          startvalue: pycpCalc - 50,
          color: "#EF5052",
          valueOnRight: "1",
          displayvalue: "Goal",
          trendlineThickness: "2.5"
        }
      ]
    }
  ]
};



var emissionchart = {
  type: "msline",
  className: "fc-msline",
  id: "mychart7",
  width: "100%",
  height: 400,

  dataSource: carbonfootprint_month_data
};

export default emissionchart;

export { carbonfootprint_month_data };
export { carbonfootprint_year_data };
export { carbonfootprint_today_data };
export { green_energy_stats_month_data };
export { green_energy_stats_today_data };
export { green_energy_stats_year_data };