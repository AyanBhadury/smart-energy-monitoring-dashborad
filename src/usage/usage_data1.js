import moment from 'moment';

// rows array
var rowArr = ["Master Bedroom", "Bedroom 1", "Drawing Room", "Living Room", "Kitchen", "Garage", "Others"];

// today data
var todayArr_MB = [0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.2, 0.2];
var todayArr_B1 = [0, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.2, 0.2];
var todayArr_DR = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1];
var todayArr_LR = [0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.25, 0.5];
var todayArr_K = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.1];
var todayArr_G = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0.3, 0, 0, 0, 0, 0, 0.3, 0, 0, 0, 0, 0, 0];
var todayArr_O = [0.5, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2];

// yesterday data    
var yDayArr_MB = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.2, 0.5];
var yDayArr_B1 = [0.5, 0.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.2, 0.5];
var yDayArr_DR = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.3];
var yDayArr_LR = [0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5];
var yDayArr_K = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.1];
var yDayArr_G = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var yDayArr_O = [0.5, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2];

// current month data
var monthArr_MB = [2, 2, 3, 2, 3.5, 3, 4, 3.9, 2, 2, 2, 2, 2, 2, 2.9, 2.6, 3, 3.3, 3.1, 3.6, 3.7, 2, 1.9, 1, 2, 2, 4, 2, 2, 3.4, 3];
var monthArr_B1 = [1.5, 1.5, 1.5, 2, 2.1, 2.2, 1, 1.4, 2.9, 1.8, 1.8, 2, 2.1, 1.6, 1.8, 2.1, 2.6, 2.9, 1.6, 1.7, 1.3, 1.9, 2, 2.1, 2.3, 2.6, 2.7, 2.9, 3, 1, 1.1];
var monthArr_DR = [1.5, 1.5, 2, 2, 2, 2, 2, 2, 1.5, 1.5, 1, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1.5, 1, 1];
var monthArr_LR = [2.9, 2.9, 3, 3, 3, 3, 4, 3.3, 3.7, 3.6, 3.9, 1, 3.9, 3.3, 2, 4.1, 3, 2.9, 2.9, 2.9, 3, 3.1, 3.3, 3.7, 3.9, 3.6, 4, 4.1, 3.3, 3.3, 1];
var monthArr_K = [1.9, 2, 2, 2, 2, 2, 2, 1.8, 1.8, 2, 1.7, 1.9, 2, 1.6, 1.3, 1.9, 1.3, 1.6, 1.7, 1.9, 2, 2, 1.7, 1.7, 1.7, 1.9, 2.1, 2.1, 2, 2, 1.3];
var monthArr_G = [0.9, 0.9, 0.8, 0.9, 0.7, 0.8, 0.6, 0.7, 0.9, 0.6, 0.7, 0.8, 0.6, 0.5, 0.7, 0.6, 0.8, 0.9, 0.8, 0.7, 0.6, 0.5, 0.8, 0.7, 0.6, 0.7, 0.9, 0.7, 0.6, 0.8, 0.7];
var monthArr_O = [2.5, 2.9, 2.3, 2.5, 2.5, 2.9, 2.5, 2.5, 2.9, 2.9, 2.5, 2.9, 2.9, 2.5, 2.9, 2.5, 2.9, 2.5, 2.9, 2.9, 2.9, 2.9, 2.9, 2.9, 2.9, 2.9, 2.5, 2.5, 2.9, 2.5, 2.5];

// previous month data
var pMonthArr_MB = [4, 2, 3, 3, 3.5, 3, 4, 3.9, 3, 2, 2, 3, 2, 2, 2.9, 2.6, 3, 3.3, 3.9, 3.6, 3.7, 2, 1.9, 2, 2, 2, 4, 2, 2.9, 3.4, 4];
var pMonthArr_B1 = [1.5, 1.5, 1.5, 2, 2.1, 2.2, 1, 1.4, 2.9, 1.8, 1.8, 2, 2.1, 1.6, 1.8, 2.1, 2.6, 2.9, 1.6, 1.7, 1.3, 1.9, 2, 2.1, 2.3, 2.6, 2.7, 2.9, 3, 2, 1.1];
var pMonthArr_DR = [1.5, 1.5, 2, 2, 2, 2, 2, 2, 1.5, 1.5, 1, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2, 2, 1, 2, 1, 1, 2, 2, 2, 2, 1.5, 1, 1];
var pMonthArr_LR = [2.9, 2.9, 3, 3, 3, 3, 4, 3.3, 3.7, 3.6, 3.9, 1, 3.9, 3.3, 2, 4.1, 3, 2.9, 2.9, 2.9, 3, 3.1, 3.3, 3.7, 3.9, 3.6, 4, 4.1, 3.3, 3.3, 2];
var pMonthArr_K = [1.9, 2, 2, 2, 2, 2, 2, 1.8, 1.8, 2, 1.7, 1.9, 2, 1.6, 1.3, 1.9, 1.3, 1.6, 1.7, 1.9, 2, 2.3, 1.7, 1.7, 2.3, 1.9, 2.1, 2.1, 2, 2, 2.9];
var pMonthArr_G = [0.9, 0.9, 0.8, 0.9, 0.7, 0.8, 0.6, 0.7, 0.9, 0.6, 0.7, 0.8, 0.6, 0.5, 0.7, 0.6, 0.8, 0.9, 0.8, 0.7, 0.6, 0.5, 0.8, 0.9, 0.6, 0.7, 0.9, 0.9, 0.6, 0.8, 0.7];
var pMonthArr_O = [2.5, 2.9, 2.3, 2.5, 2.5, 2.9, 2.5, 2.5, 2.9, 2.9, 2.5, 2.9, 2.9, 2.5, 2.9, 2.5, 2.9, 2.5, 2.9, 2.9, 2.9, 2.9, 2.9, 2.9, 2.9, 2.9, 2.5, 2.5, 2.9, 2.9, 2.5];

// current year data
var yearArr_MB = [80, 88, 89.6, 93, 90, 80.6, 88, 23, 80, 89.3, 80, 79.3];
var yearArr_B1 = [62, 73, 62, 62, 65, 73, 62, 21, 62, 66, 62, 68];
var yearArr_DR = [62, 62, 57, 63, 57, 73, 57, 20, 57, 57, 60, 81];
var yearArr_LR = [83, 88, 99.6, 89, 81, 90.6, 91, 40, 98, 90, 88.6, 120];
var yearArr_K = [59.4, 62, 59.4, 65, 57, 68, 56, 21.4, 73, 65, 64, 59.4];
var yearArr_G = [21, 22.9, 22.9, 23, 22.9, 21, 22.9, 7, 20, 22.9, 21, 22.9];
var yearArr_O = [84.5, 85, 84.5, 87, 85, 84.5, 83, 19.4, 85, 88, 84.5, 89];

// previous year data
var pYearArr_MB = [75, 82, 83, 88, 83, 80.5, 88, 80, 80, 73, 78, 79.5];
var pYearArr_B1 = [62, 73, 59, 55, 57, 55, 62, 56, 50, 51, 52, 53];
var pYearArr_DR = [56, 56, 55, 56, 59, 55, 58, 50, 50, 51, 50, 53];
var pYearArr_LR = [93, 81, 83, 89, 81, 83, 91, 88, 98, 90, 113, 118];
var pYearArr_K = [55, 59, 57, 50, 57, 68, 56, 55, 73, 62, 55, 59];
var pYearArr_G = [20, 21, 20, 20, 21, 20, 21, 20, 21, 21, 20, 20];
var pYearArr_O = [80, 75, 76, 80, 80, 73, 70, 70, 70, 70, 71, 72];

// colors
var clr1 = "#0C6C7F";
var clr2 = "#1E7E9E";
var clr3 = "#39ADBD";
var clr4 = "#98CEC2";
var clr5 = "#BAE0CF";

var cRowArr = [];
for (var i = 0; i < rowArr.length; i++) {
  cRowArr.push({ "id": i.toString(), "label": rowArr[i] });
}

var cColumnArr = [];
// eslint-disable-next-line
for (var i = 0; i < 24; i++) {
  cColumnArr.push({ "id": i.toString(), "label": i + " hrs" })
}

var cDataArr = [];
// eslint-disable-next-line
for (var i = 0; i < 24; i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('H'))) {
    cDataArr.push({ "rowid": "0", "columnid": i.toString(), "value": todayArr_MB[i].toString() });
    cDataArr.push({ "rowid": "1", "columnid": i.toString(), "value": todayArr_B1[i].toString() });
    cDataArr.push({ "rowid": "2", "columnid": i.toString(), "value": todayArr_DR[i].toString() });
    cDataArr.push({ "rowid": "3", "columnid": i.toString(), "value": todayArr_LR[i].toString() });
    cDataArr.push({ "rowid": "4", "columnid": i.toString(), "value": todayArr_K[i].toString() });
    cDataArr.push({ "rowid": "5", "columnid": i.toString(), "value": todayArr_G[i].toString() });
    cDataArr.push({ "rowid": "6", "columnid": i.toString(), "value": todayArr_O[i].toString() });
  } else {
    cDataArr.push({ "rowid": "0", "columnid": i.toString(), "value": todayArr_MB[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr.push({ "rowid": "1", "columnid": i.toString(), "value": todayArr_B1[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr.push({ "rowid": "2", "columnid": i.toString(), "value": todayArr_DR[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr.push({ "rowid": "3", "columnid": i.toString(), "value": todayArr_LR[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr.push({ "rowid": "4", "columnid": i.toString(), "value": todayArr_K[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr.push({ "rowid": "5", "columnid": i.toString(), "value": todayArr_G[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr.push({ "rowid": "6", "columnid": i.toString(), "value": todayArr_O[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
  }

}

var usage_today = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    baseFontColor: "#FDFDFD",
    baseFontSize: "14",
    baseFont: "Nunito Sans Light",
    baseFontBold: "0",
    showLegend: "1",
    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendItemFontSize: "18",
    legendIconBorderThickness: "0",
    legendIconBorderAlpha: "0",
    showValues: "0",
    plotBorderColor: "#FDFDFD",
    plotBorderAlpha: "50",
    plotBorderThickness: "0.3",
    xAxisLabelsOnTop: "1",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    plotToolText: "$rowLabel<br>$columnLabel: $dataValue",
    numberSuffix: " kWh",
    labelDisplay: "ROTATE",
    legendPosition: "bottom",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    chartBottomMargin: "0",
    canvasBottomMargin: "0"
  },
  rows: {
    row: cRowArr
  },
  columns: {
    column: cColumnArr
  },
  dataset: [
    {
      data: cDataArr
    }
  ],
  colorrange: {
    gradient: "0",
    minValue: "0",
    code: clr1,
    color: [
      {
        code: clr1,
        minValue: "0",
        maxValue: "0.1",
        label: "0 - 0.1kWh"
      },
      {
        code: clr2,
        minValue: "0.1",
        maxValue: "0.2",
        label: "0.1 - 0.2kWh"
      },
      {
        code: clr3,
        minValue: "0.2",
        maxValue: "0.3",
        label: "0.2 - 0.3kWh"
      },
      {
        code: clr4,
        minValue: "0.3",
        maxValue: "0.4",
        label: "0.3 - 0.4kWh"
      },
      {
        code: clr5,
        minValue: "0.4",
        maxValue: "0.5",
        label: ">0.4kWh"
      }
    ]
  }
};

var cDataArr2 = [];
// eslint-disable-next-line
for (var i = 0; i < 24; i++) {
  cDataArr2.push({ "rowid": "0", "columnid": i.toString(), "value": yDayArr_MB[i].toString() });
  cDataArr2.push({ "rowid": "1", "columnid": i.toString(), "value": yDayArr_B1[i].toString() });
  cDataArr2.push({ "rowid": "2", "columnid": i.toString(), "value": yDayArr_DR[i].toString() });
  cDataArr2.push({ "rowid": "3", "columnid": i.toString(), "value": yDayArr_LR[i].toString() });
  cDataArr2.push({ "rowid": "4", "columnid": i.toString(), "value": yDayArr_K[i].toString() });
  cDataArr2.push({ "rowid": "5", "columnid": i.toString(), "value": yDayArr_G[i].toString() });
  cDataArr2.push({ "rowid": "6", "columnid": i.toString(), "value": yDayArr_O[i].toString() });
}




var usage_yesterday = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    baseFontColor: "#FDFDFD",
    baseFontSize: "14",
    baseFont: "Nunito Sans Light",
    baseFontBold: "0",
    showLegend: "1",

    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendItemFontSize: "18",
    legendIconBorderThickness: "0",
    legendIconBorderAlpha: "0",
    showValues: "0",
    plotBorderColor: "#FDFDFD",
    plotBorderAlpha: "50",
    plotBorderThickness: "0.3",
    xAxisLabelsOnTop: "1",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    plotToolText: "$rowLabel<br>$columnLabel: $dataValue",
    numberSuffix: " kWh",
    labelDisplay: "ROTATE",
    legendPosition: "bottom",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    chartBottomMargin: "0",
    canvasBottomMargin: "0"
  },
  rows: {
    row: cRowArr
  },
  columns: {
    column: cColumnArr
  },
  dataset: [
    {
      data: cDataArr2
    }
  ],
  colorrange: {
    gradient: "0",
    minValue: "0",
    code: clr1,
    color: [
      {
        code: clr1,
        minValue: "0",
        maxValue: "0.1",
        label: "0 - 0.1kWh"
      },
      {
        code: clr2,
        minValue: "0.1",
        maxValue: "0.2",
        label: "0.1 - 0.2kWh"
      },
      {
        code: clr3,
        minValue: "0.2",
        maxValue: "0.3",
        label: "0.2 - 0.3kWh"
      },
      {
        code: clr4,
        minValue: "0.3",
        maxValue: "0.4",
        label: "0.3 - 0.4kWh"
      },
      {
        code: clr5,
        minValue: "0.4",
        maxValue: "0.5",
        label: ">0.4kWh"
      }
    ]
  }
};

var cColumnArr2 = [];
// eslint-disable-next-line
for (var i = 0; i < moment().daysInMonth(); i++) {
  // eslint-disable-next-line
  cColumnArr2.push({ "id": i.toString(), "label": moment().format('MMM') + " " + (i + 1) });
}

var cDataArr3 = [];
// eslint-disable-next-line
for (var i = 0; i < moment().daysInMonth(); i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('D'))) {
    cDataArr3.push({ "rowid": "0", "columnid": i.toString(), "value": monthArr_MB[i].toString() });
    cDataArr3.push({ "rowid": "1", "columnid": i.toString(), "value": monthArr_B1[i].toString() });
    cDataArr3.push({ "rowid": "2", "columnid": i.toString(), "value": monthArr_DR[i].toString() });
    cDataArr3.push({ "rowid": "3", "columnid": i.toString(), "value": monthArr_LR[i].toString() });
    cDataArr3.push({ "rowid": "4", "columnid": i.toString(), "value": monthArr_K[i].toString() });
    cDataArr3.push({ "rowid": "5", "columnid": i.toString(), "value": monthArr_G[i].toString() });
    cDataArr3.push({ "rowid": "6", "columnid": i.toString(), "value": monthArr_O[i].toString() });
  } else {
    cDataArr3.push({ "rowid": "0", "columnid": i.toString(), "value": monthArr_MB[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr3.push({ "rowid": "1", "columnid": i.toString(), "value": monthArr_B1[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr3.push({ "rowid": "2", "columnid": i.toString(), "value": monthArr_DR[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr3.push({ "rowid": "3", "columnid": i.toString(), "value": monthArr_LR[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr3.push({ "rowid": "4", "columnid": i.toString(), "value": monthArr_K[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr3.push({ "rowid": "5", "columnid": i.toString(), "value": monthArr_G[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr3.push({ "rowid": "6", "columnid": i.toString(), "value": monthArr_O[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
  }
}


var usage_thismonth = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    baseFontColor: "#FDFDFD",
    baseFontSize: "14",
    baseFont: "Nunito Sans Light",
    baseFontBold: "0",
    showLegend: "1",

    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendItemFontSize: "18",
    legendIconBorderThickness: "0",
    legendIconBorderAlpha: "0",
    showValues: "0",
    plotBorderColor: "#FDFDFD",
    plotBorderAlpha: "50",
    plotBorderThickness: "0.3",
    xAxisLabelsOnTop: "1",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    plotToolText: "$rowLabel<br>$columnLabel: $dataValue",
    numberSuffix: " kWh",
    legendPosition: "bottom",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    chartBottomMargin: "0",
    canvasBottomMargin: "0"
  },
  rows: {
    row: cRowArr
  },
  columns: {
    column: cColumnArr2
  },
  dataset: [
    {
      data: cDataArr3
    }
  ],
  colorrange: {
    gradient: "0",
    minValue: "0",
    code: clr1,
    color: [
      {
        code: clr1,
        minValue: "0",
        maxValue: "1",
        label: "0 - 1kWh"
      },
      {
        code: clr2,
        minValue: "1",
        maxValue: "2",
        label: "1 - 2kWh"
      },
      {
        code: clr3,
        minValue: "2",
        maxValue: "3",
        label: "2 - 3kWh"
      },
      {
        code: clr4,
        minValue: "3",
        maxValue: "4",
        label: "3 - 4kWh"
      },
      {
        code: clr5,
        minValue: "4",
        maxValue: "5",
        label: ">4kWh"
      }
    ]
  }
};

var cColumnArr3 = [];
// eslint-disable-next-line
for (var i = 0; i < moment().subtract(1, 'month').daysInMonth(); i++) {
  // eslint-disable-next-line
  cColumnArr3.push({ "id": i.toString(), "label": moment().subtract(1, 'month').format('MMM') + " " + (i + 1) });
}

var cDataArr4 = [];
// eslint-disable-next-line
for (var i = 0; i < moment().daysInMonth(); i++) {
  cDataArr4.push({ "rowid": "0", "columnid": i.toString(), "value": pMonthArr_MB[i].toString() });
  cDataArr4.push({ "rowid": "1", "columnid": i.toString(), "value": pMonthArr_B1[i].toString() });
  cDataArr4.push({ "rowid": "2", "columnid": i.toString(), "value": pMonthArr_DR[i].toString() });
  cDataArr4.push({ "rowid": "3", "columnid": i.toString(), "value": pMonthArr_LR[i].toString() });
  cDataArr4.push({ "rowid": "4", "columnid": i.toString(), "value": pMonthArr_K[i].toString() });
  cDataArr4.push({ "rowid": "5", "columnid": i.toString(), "value": pMonthArr_G[i].toString() });
  cDataArr4.push({ "rowid": "6", "columnid": i.toString(), "value": pMonthArr_O[i].toString() });
}

var usage_lastmonth = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    baseFontColor: "#FDFDFD",
    baseFontSize: "14",
    baseFont: "Nunito Sans Light",
    baseFontBold: "0",
    showLegend: "1",
 
    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendItemFontSize: "18",
    legendIconBorderThickness: "0",
    legendIconBorderAlpha: "0",
    showValues: "0",
    plotBorderColor: "#FDFDFD",
    plotBorderAlpha: "50",
    plotBorderThickness: "0.3",
    xAxisLabelsOnTop: "1",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    plotToolText: "$rowLabel<br>$columnLabel: $dataValue",
    numberSuffix: " kWh",
    legendPosition: "bottom",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    chartBottomMargin: "0",
    canvasBottomMargin: "0"
  },
  rows: {
    row: cRowArr
  },
  columns: {
    column: cColumnArr3
  },
  dataset: [
    {
      data: cDataArr4
    }
  ],
  colorrange: {
    gradient: "0",
    minValue: "0",
    code: clr1,
    color: [
      {
        code: clr1,
        minValue: "0",
        maxValue: "1",
        label: "0 - 1kWh"
      },
      {
        code: clr2,
        minValue: "1",
        maxValue: "2",
        label: "1 - 2kWh"
      },
      {
        code: clr3,
        minValue: "2",
        maxValue: "3",
        label: "2 - 3kWh"
      },
      {
        code: clr4,
        minValue: "3",
        maxValue: "4",
        label: "3 - 4kWh"
      },
      {
        code: clr5,
        minValue: "4",
        maxValue: "5",
        label: ">4kWh"
      }
    ]
  }
};

var cColumnArr4 = [];
// eslint-disable-next-line
for (var i = 0; i < 12; i++) {
  // eslint-disable-next-line
  cColumnArr4.push({ "id": i.toString(), "label": moment().month(i).format('MMM') });
}

var cDataArr5 = [];
// eslint-disable-next-line
for (var i = 0; i < 12; i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('M'))) {
    cDataArr5.push({ "rowid": "0", "columnid": i.toString(), "value": yearArr_MB[i].toString() });
    cDataArr5.push({ "rowid": "1", "columnid": i.toString(), "value": yearArr_B1[i].toString() });
    cDataArr5.push({ "rowid": "2", "columnid": i.toString(), "value": yearArr_DR[i].toString() });
    cDataArr5.push({ "rowid": "3", "columnid": i.toString(), "value": yearArr_LR[i].toString() });
    cDataArr5.push({ "rowid": "4", "columnid": i.toString(), "value": yearArr_K[i].toString() });
    cDataArr5.push({ "rowid": "5", "columnid": i.toString(), "value": yearArr_G[i].toString() });
    cDataArr5.push({ "rowid": "6", "columnid": i.toString(), "value": yearArr_O[i].toString() });
  } else {
    cDataArr5.push({ "rowid": "0", "columnid": i.toString(), "value": yearArr_MB[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr5.push({ "rowid": "1", "columnid": i.toString(), "value": yearArr_B1[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr5.push({ "rowid": "2", "columnid": i.toString(), "value": yearArr_DR[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr5.push({ "rowid": "3", "columnid": i.toString(), "value": yearArr_LR[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr5.push({ "rowid": "4", "columnid": i.toString(), "value": yearArr_K[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr5.push({ "rowid": "5", "columnid": i.toString(), "value": yearArr_G[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
    cDataArr5.push({ "rowid": "6", "columnid": i.toString(), "value": yearArr_O[i].toString(), "alpha": "35", "toolText": "<div><i>Predicted: $rowLabel<br>$columnLabel: $dataValue</i></div>" });
  }
}

var usage_thisyear = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    baseFontColor: "#FDFDFD",
    baseFontSize: "14",
    baseFont: "Nunito Sans Light",
    baseFontBold: "0",
    showLegend: "1",
  
    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendItemFontSize: "18",
    legendIconBorderThickness: "0",
    legendIconBorderAlpha: "0",
    showValues: "0",
    plotBorderColor: "#D8D8D8",
    plotBorderAlpha: "30",
    plotBorderThickness: "0.7",
    xAxisLabelsOnTop: "1",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    plotToolText: "$rowLabel<br>$columnLabel: $dataValue",
    numberSuffix: " kWh",
    legendPosition: "bottom",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    chartBottomMargin: "0",
    canvasBottomMargin: "0"
  },
  rows: {
    row: cRowArr
  },
  columns: {
    column: cColumnArr4
  },
  dataset: [
    {
      data: cDataArr5
    }
  ],
  colorrange: {
    gradient: "0",
    minValue: "0",
    code: clr1,
    color: [
      {
        code: clr1,
        minValue: "0",
        maxValue: "25",
        label: "0 - 25kWh"
      },
      {
        code: clr2,
        minValue: "25",
        maxValue: "50",
        label: "25 - 50kWh"
      },
      {
        code: clr3,
        minValue: "50",
        maxValue: "75",
        label: "50 - 75kWh"
      },
      {
        code: clr4,
        minValue: "75",
        maxValue: "100",
        label: "75 - 100kWh"
      },
      {
        code: clr5,
        minValue: "100",
        maxValue: "150",
        label: ">100kWh"
      }
    ]
  }
};


var cDataArr6 = [];
// eslint-disable-next-line
for (var i = 0; i < 12; i++) {
  cDataArr6.push({ "rowid": "0", "columnid": i.toString(), "value": pYearArr_MB[i].toString() });
  cDataArr6.push({ "rowid": "1", "columnid": i.toString(), "value": pYearArr_B1[i].toString() });
  cDataArr6.push({ "rowid": "2", "columnid": i.toString(), "value": pYearArr_DR[i].toString() });
  cDataArr6.push({ "rowid": "3", "columnid": i.toString(), "value": pYearArr_LR[i].toString() });
  cDataArr6.push({ "rowid": "4", "columnid": i.toString(), "value": pYearArr_K[i].toString() });
  cDataArr6.push({ "rowid": "5", "columnid": i.toString(), "value": pYearArr_G[i].toString() });
  cDataArr6.push({ "rowid": "6", "columnid": i.toString(), "value": pYearArr_O[i].toString() });
}



var usage_lastyear = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    baseFontColor: "#FDFDFD",
    baseFontSize: "14",
    baseFont: "Nunito Sans Light",
    baseFontBold: "0",
    showLegend: "1",
  
    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendItemFontSize: "18",
    legendIconBorderThickness: "0",
    legendIconBorderAlpha: "0",
    showValues: "0",
    plotBorderColor: "#D8D8D8",
    plotBorderAlpha: "30",
    plotBorderThickness: "0.7",
    xAxisLabelsOnTop: "1",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    plotToolText: "$rowLabel<br>$columnLabel: $dataValue",
    numberSuffix: " kWh",
    legendPosition: "bottom",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0"
  },
  rows: {
    row: cRowArr
  },
  columns: {
    column: cColumnArr4
  },
  dataset: [
    {
      data: cDataArr6
    }
  ],
  colorrange: {
    gradient: "0",
    minValue: "0",
    code: clr1,
    color: [
      {
        code: clr1,
        minValue: "0",
        maxValue: "25",
        label: "0 - 25kWh"
      },
      {
        code: clr2,
        minValue: "25",
        maxValue: "50",
        label: "25 - 50kWh"
      },
      {
        code: clr3,
        minValue: "50",
        maxValue: "75",
        label: "50 - 75kWh"
      },
      {
        code: clr4,
        minValue: "75",
        maxValue: "100",
        label: "75 - 100kWh"
      },
      {
        code: clr5,
        minValue: "100",
        maxValue: "150",
        label: ">100kWh"
      }
    ]
  }
};


var usagechart = {
  type: "heatmap",
  className: "fc-heatmap",
  width: "100%",
  height: 500,
  id: "mychart9",
  dataSource: usage_thismonth
};

export default usagechart;
export { usage_yesterday };
export { usage_thismonth };
export { usage_lastmonth };
export { usage_thisyear };
export { usage_lastyear };
export { usage_today };