sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/ui/model/BindingMode',
    'sap/viz/ui5/api/env/Format',
    './InitPage'  
], function(Controller, JSONModel,
    ChartFormatter, BindingMode, Format, InitPageUtil
    ) {
    "use strict";

        return Controller.extend("com.sap.chartdemo.chartdemo.controller.ViewChart", {
            dataPath1 : "https://sapui5.hana.ondemand.com/test-resources/sap/viz/demokit/dataset/milk_production_testing_data/revenue_cost_consume",
    
            settingsModel1 : {
                dataset : {
                    name: "Dataset",
                    defaultSelected : 1,
                    values : [{
                        name : "Small",
                        value : "/betterSmall.json"
                    },{
                        name : "Medium",
                        value : "/betterMedium.json"
                    },{
                        name : "Large",
                        value : "/betterLarge.json"
                    }]
                },
                series : {
                    name : "Series",
                    defaultSelected : 1,
                    enabled : false,
                    values : [{
                        name : "1 Series",
                        value : ["Revenue"]
                    }, {
                        name : '2 Series',
                        value : ["Revenue", "Cost"]
                    }]
                },
                dataLabel : {
                    name : "Value Label",
                    defaultState : false
                },
                axisTitle : {
                    name : "Axis Title",
                    defaultState : false
                },
                chartType : {
                    name : "Chart Type",
                    defaultSelected : 0,
                    values : [{
                        name : "Column + Line",
                        vizType : "combination",
                        value : ["Revenue", "Cost"]
                    }, {
                        name : 'Stacked Column + Line',
                        vizType : "stacked_combination",
                        value : ["Revenue", "Cost2", "Cost1"]
                    }]
                },
                dimensions: {
                    Small: [{
                        name: 'Seasons',
                        value: "{Seasons}"
                    }],
                    Medium: [{
                        name: 'Week',
                        value: "{Week}"
                    }],
                    Large: [{
                        name: 'Week',
                        value: "{Week}"
                    }]
                },
                measures: [{
                name: 'Cost',
                value: '{Cost}'
                },{
                name: 'Cost1',
                value: '{Cost1}'
                },{
                name: 'Cost2',
                value: '{Cost2}'
                },{
                name: 'Revenue',
                value: '{Revenue}'
                }]
            },        
        
            dataPath2 : "https://sapui5.hana.ondemand.com/test-resources/sap/viz/demokit/dataset/milk_production_testing_data/revenue_cost_consume",
        
            settingsModel2 : {
                dataset : {
                    name: "Dataset",
                    defaultSelected : 1,
                    values : [{
                        name : "Small",
                        value : "/small.json"
                    },{
                        name : "Medium",
                        value : "/medium.json"
                    }]
                },
                series : {
                    name : "Series",
                    defaultSelected : 0,
                    enabled : false,
                    values : [{
                        name : "1 Series"
                    }, {
                        name : '2 Series'
                    }]
                },
                dataLabel : {
                    name : "Value Label",
                    defaultState : false
                },
                axisTitle : {
                    name : "Axis Title",
                    defaultState : false,
                    enabled : false
                }
            },

            dataPath3 : "https://sapui5.hana.ondemand.com/test-resources/sap/viz/demokit/dataset/milk_production_testing_data/revenue_cost_consume",

            settingsModel3 : {
                dataset : {
                    name: "Dataset",
                    defaultSelected : 1,
                    values : [{
                        name : "Small",
                        value : "/betterSmall.json"
                    },{
                        name : "Medium",
                        value : "/betterMedium.json"
                    },{
                        name : "Large",
                        value : "/betterLarge.json"
                    }]
                },
                series : {
                    name : "Series",
                    defaultSelected : 1,
                    values : [{
                        name : "1 Series",
                        value : ["Revenue"]
                    }, {
                        name : '2 Series',
                        value : ["Revenue", "Cost"]
                    }]
                },
                dataLabel : {
                    name : "Value Label",
                    defaultState : false
                },
                axisTitle : {
                    name : "Axis Title",
                    defaultState : false
                },
                dimensions: {
                    Small: [{
                        name: 'Seasons',
                        value: "{Seasons}"
                    }],
                    Medium: [{
                        name: 'Week',
                        value: "{Week}"
                    }],
                    Large: [{
                        name: 'Week',
                        value: "{Week}"
                    }]
                },
                measures: [{
                name: 'Revenue',
                value: '{Revenue}'
                },{
                name: 'Cost',
                value: '{Cost}'
                }]
            },
            onInit: function () {
                Format.numericFormatter(ChartFormatter.getInstance());
                var formatPattern = ChartFormatter.DefaultPattern; 
                /**
                 *  First Chart
                 */
        
                Format.numericFormatter(ChartFormatter.getInstance());
                var formatPattern = ChartFormatter.DefaultPattern;            // set explored app's demo model on this sample
                var oModel1 = new JSONModel(this.settingsModel1);
                oModel1.setDefaultBindingMode(BindingMode.OneWay);
                this.getView().setModel(oModel1);
        
                var oVizFrame1 = this.oVizFrame1 = this.getView().byId("idVizFrame1");
                oVizFrame1.setVizProperties({
                    plotArea: {
                        dataLabel: {
                            formatString: formatPattern.SHORTFLOAT_MFD2,
                            visible: false
                        },
                        dataShape: {
                            primaryAxis: ["line", "bar", "bar"]
                        }
                    },
                    valueAxis: {
                        label: {
                            formatString: formatPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    categoryAxis: {
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false
                    }
                });
                var dataModel1 = new JSONModel(this.dataPath1 + "/betterSmall.json");
                oVizFrame1.setModel(dataModel1);
        
                /**
                 * Second Card
                 */
                var oModel2 = new JSONModel(this.settingsModel2);
                oModel2.setDefaultBindingMode(BindingMode.OneWay);
                this.getView().setModel(oModel2);
        
                var oVizFrame2 = this.oVizFrame2 = this.getView().byId("idVizFrame2");
                oVizFrame2.setVizProperties({
                    legend: {
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false
                    }
                });
                var dataModel2 = new JSONModel(this.dataPath2 + "/medium.json");
                oVizFrame2.setModel(dataModel2);
        
                //InitPageUtil.initPageSettings(this.getView());
        
                var that = this;
                dataModel2.attachRequestCompleted(function() {
                    that.dataSort(this.getData());
                });


                /**
                 * Third Card
                 */
                var oModel3 = new JSONModel(this.settingsModel3);
                oModel3.setDefaultBindingMode(BindingMode.OneWay);
                this.getView().setModel(oModel3);

                var oVizFrame3 = this.oVizFrame3 = this.getView().byId("idVizFrame3");
                oVizFrame3.setVizProperties({
                    plotArea: {
                        dataLabel: {
                            formatString:formatPattern.SHORTFLOAT_MFD2,
                            visible: false
                        }
                    },
                    valueAxis: {
                        label: {
                            formatString: formatPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    categoryAxis: {
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false,
                        text: 'Revenue by City and Store Name'
                    }
                });
                var dataModel3 = new JSONModel(this.dataPath3 + "/betterMedium.json");
                oVizFrame3.setModel(dataModel3);

                //InitPageUtil.initPageSettings(this.getView());
            },

            initCustomFormat : function(){
                CustomerFormat.registerCustomFormat();
            },
            
            dataSort: function(dataset) {
                //let data sorted by revenue
                if (dataset && dataset.hasOwnProperty("milk")) {
                    var arr = dataset.milk;
                    arr = arr.sort(function (a, b) {
                        return b.Revenue - a.Revenue;
                    });
                }
            }
        });
    });
