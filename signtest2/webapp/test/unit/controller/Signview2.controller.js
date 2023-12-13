/*global QUnit*/

sap.ui.define([
	"signtest2/controller/Signview2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Signview2 Controller");

	QUnit.test("I should test the Signview2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
