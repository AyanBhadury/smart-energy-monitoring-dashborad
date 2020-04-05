import moment from 'moment';
// today
export var todayArr = [7.3, 7.1, 6.2];
export var todayElecSplit = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.3, 0.4, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.3, 0.3, 0.5, 0.35, 0.2, 0.1];
export var todayGasSplit = [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.15, 0.2, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1, 0.3, 0.2, 0.1, 0];
export var yesterdayElecSplit = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.3, 0.4, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.3, 0.4, 0.4, 0.5, 0.6, 0.2, 0.1];
export var yesterdayGasSplit = [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.2, 0.2, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1, 0.2, 0.3, 0.3, 0.1, 0];

// month
export var monthArr = [209, 203, 214];
export var mElecSplit = [4.9, 4.2, 4.8, 4.1, 4.9, 4.7, 4.8, 4, 4.9, 4, 4.8, 4.3, 4.2, 4.1, 4.9, 4, 4.9, 4, 4.4, 4, 4.5, 4.4, 4.7, 4.9, 4.4, 4.3, 4.3, 4.7, 4.3, 4, 4.9];
export var mGasSplit = [2.1, 2.2, 2, 2.9, 2, 2.2, 2.8, 2.6, 2.7, 2, 2.4, 2, 2.9, 3, 3, 2, 2.9, 2.6, 2.1, 2, 2.1, 2.2, 2.4, 3.7, 2, 2, 2.9, 2, 3.3, 2, 2.7];
export var lmElecSplit = [4.4, 4.2, 4, 4.1, 4.3, 4.7, 4.1, 4, 4.9, 4, 4.8, 4.3, 4.2, 4.1, 4.2, 4, 4.2, 4, 4.4, 4, 4.5, 4.4, 4.3, 4.9, 4.4, 4.3, 4.3, 4.1, 4.1, 4, 4.1];
export var lmGasSplit = [2.1, 2.2, 2, 2.9, 2, 2.2, 2.8, 2.6, 2.7, 2, 2.4, 2, 2.1, 2.3, 3, 2, 2.1, 2.6, 2.1, 2, 2.1, 2.2, 2.4, 3.3, 2, 2, 2.1, 2, 2.3, 2, 2.2];

// year
export var yearArr = [1700, 1620, 1450];
export var yElecSplit = [97, 80, 95, 69, 62, 73, 60, 85, 66, 100, 106, 120];
export var yGasSplit = [30, 44, 35, 34, 35, 33, 37, 39, 41, 30, 39, 40];
export var lyElecSplit = [109, 92, 95, 80, 62, 73, 110, 95, 106, 100, 106, 120];
export var lyGasSplit = [49, 44, 35, 34, 35, 39, 37, 39, 41, 40, 39, 40];

//cost-this-day data
var catArr = [];
var electricityDataArr = [];
var gasDataArr = [];

for (var i = 0; i < todayElecSplit.length; i++) {
  catArr.push({ "label": i + " hrs" });
}
// eslint-disable-next-line
for (var i = 0; i < todayElecSplit.length; i++) {
  // eslint-disable-next-line
  if (i <= parseInt(moment().format('H'))) {
    electricityDataArr.push({ "value": todayElecSplit[i] });
  } else {
    electricityDataArr.push({
      value: todayElecSplit[i],
      alpha: "30",
      toolText: "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}
// eslint-disable-next-line
for (var i = 0; i < todayGasSplit.length; i++) {
  // eslint-disable-next-line
  if (i <= parseInt(moment().format('H'))) {
    gasDataArr.push({
      value: todayGasSplit[i]
    });
  } else {
    gasDataArr.push({
      value: todayGasSplit[i],
      alpha: "30",
      toolText: "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}

var cost_this_day = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#48DFBA, #F7E332",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0"
  },
  categories: [
    {
      category: catArr
    }
  ],
  dataset: [
    {
      seriesname: "Electricity",
      data: electricityDataArr
    },
    {
      seriesname: "Gas",
      data: gasDataArr
    }
  ]
};

//cost-last-day data

catArr = [];
electricityDataArr = [];
gasDataArr = [];
// eslint-disable-next-line
for (var i = 0; i < yesterdayElecSplit.length; i++) {
  catArr.push({ "label": i + " hrs" });
}
// eslint-disable-next-line
for (var i = 0; i < yesterdayElecSplit.length; i++) {
  electricityDataArr.push({ "value": yesterdayElecSplit[i] });
}
// eslint-disable-next-line
for (var i = 0; i < yesterdayGasSplit.length; i++) {
  gasDataArr.push({ "value": yesterdayGasSplit[i] });
}

var cost_last_day = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#48DFBA, #F7E332",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0"
  },
  categories: [
    {
      category: catArr
    }
  ],
  dataset: [
    {
      seriesname: "Electricity",
      data: electricityDataArr
    },
    {
      seriesname: "Gas",
      data: gasDataArr
    }
  ]
};

//cost-this-month-data

catArr = [];
electricityDataArr = [];
gasDataArr = [];
// eslint-disable-next-line
for (var i = 1; i <= moment().daysInMonth(); i++) {
  catArr.push({ "label": moment().format('MMM') + " " + i });
}
// eslint-disable-next-line
for (var i = 0; i <= moment().daysInMonth(); i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('D'))) {
    electricityDataArr.push({ "value": mElecSplit[i] });
  } else {
    electricityDataArr.push({
      value: mElecSplit[i],
      alpha: "30",
      toolText:
        "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}
// eslint-disable-next-line
for (var i = 0; i <= moment().daysInMonth(); i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('D'))) {
    gasDataArr.push({ "value": mGasSplit[i] });
  } else {
    gasDataArr.push({
      value: mGasSplit[i],
      alpha: "30",
      toolText:
        "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}

var cost_this_month = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#48DFBA, #F7E332",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    labelDisplay: "ROTATE",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0"
  },
  categories: [
    {
      category: catArr
    }
  ],
  dataset: [
    {
      seriesname: "Electricity",
      data: electricityDataArr
    },
    {
      seriesname: "Gas",
      data: gasDataArr
    }
  ]
};

//cost-last-month-data

catArr = [];
electricityDataArr = [];
gasDataArr = [];
// eslint-disable-next-line
for (var i = 1; i <= moment().subtract(1, 'month').daysInMonth(); i++) {
  catArr.push({ "label": moment().subtract(1, 'month').format('MMM') + " " + i });
}
// eslint-disable-next-line
for (var i = 0; i <= moment().subtract(1, 'month').daysInMonth(); i++) {
  electricityDataArr.push({ "value": lmElecSplit[i] });
}
// eslint-disable-next-line
for (var i = 0; i <= moment().subtract(1, 'month').daysInMonth(); i++) {
  gasDataArr.push({ "value": lmGasSplit[i] });
}

var cost_last_month = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#48DFBA, #F7E332",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    labelDisplay: "ROTATE",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0"
  },
  categories: [
    {
      category: catArr
    }
  ],
  dataset: [
    {
      seriesname: "Electricity",
      data: electricityDataArr
    },
    {
      seriesname: "Gas",
      data: gasDataArr
    }
  ]
};

//cost-this-year-data

catArr = [];
electricityDataArr = [];
gasDataArr = [];
// eslint-disable-next-line
for (var i = 0; i < yElecSplit.length; i++) {
  catArr.push({ "label": moment().month(i).format('MMM') });
}
// eslint-disable-next-line
for (var i = 0; i < yElecSplit.length; i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('M'))) {
    electricityDataArr.push({ "value": yElecSplit[i] });
  } else {
    electricityDataArr.push({
      value: yElecSplit[i],
      alpha: "30",
      toolText:
        "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}
// eslint-disable-next-line
for (var i = 0; i < yElecSplit.length; i++) {
  // eslint-disable-next-line
  if (i < parseInt(moment().format('M'))) {
    gasDataArr.push({ "value": yGasSplit[i] });
  } else {
    gasDataArr.push({
      value: yGasSplit[i],
      alpha: "30",
      toolText:
        "<div><i>Predicted: $seriesName<br>$label: $dataValue<i><div>"
    });
  }
}

var cost_this_year = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#48DFBA, #F7E332",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0"
  },
  categories: [
    {
      category: catArr
    }
  ],
  dataset: [
    {
      seriesname: "Electricity",
      data: electricityDataArr
    },
    {
      seriesname: "Gas",
      data: gasDataArr
    }
  ]
};

//cost-last-year-data

catArr = [];
electricityDataArr = [];
gasDataArr = [];
// eslint-disable-next-line
for (var i = 0; i < lyElecSplit.length; i++) {
  catArr.push({ "label": moment().month(i).format('MMM') });
}
// eslint-disable-next-line
for (var i = 0; i < lyElecSplit.length; i++) {
  electricityDataArr.push({ "value": lyElecSplit[i] });
}
// eslint-disable-next-line
for (var i = 0; i < lyElecSplit.length; i++) {
  gasDataArr.push({ "value": lyGasSplit[i] });
}

var cost_last_year = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#48DFBA, #F7E332",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0"
  },
  categories: [
    {
      category: catArr
    }
  ],
  dataset: [
    {
      seriesname: "Electricity",
      data: electricityDataArr
    },
    {
      seriesname: "Gas",
      data: gasDataArr
    }
  ]
};


var costchart = {
  type: "scrollstackedcolumn2d",
  className: "fc-column2d",
  width: "100%",
  id: "mychart8",
  height: 500,

  dataSource: cost_this_month
};

export default costchart;

export { cost_last_month };
export { cost_this_month };

export { cost_this_day };
export { cost_last_day };

export { cost_this_year };
export { cost_last_year };