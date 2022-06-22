/*global QUnit*/

sap.ui.define([
	"comsapchartdemo/chartdemo/controller/ViewChart.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewChart Controller");

	QUnit.test("I should test the ViewChart controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
