sap.ui.define(
  ["sap/ui/core/Control", "signtest2/libs/signature_pad"],
  (Control, SignaturePad) => {
    "use strict";

    return Control.extend("signtest2.control.mySignApp", {
      metadata: {
        properties: {
          width: { type: "sap.ui.core.CSSSize", defaultValue: "300px" },
          height: { type: "sap.ui.core.CSSSize", defaultValue: "100px" },
          thickness: { type: "int", defaultValue: 2 },
          bgcolor: { type: "sap.ui.core.CSSColor", defaultValue: "white" },
          signcolor: { type: "sap.ui.core.CSSColor", defaultValue: "black" },
        },
      },

      init() {},

      renderer(oRm, oControl) {
        var thickness = parseInt(oControl.getProperty("thickness"), 10);
        oRm.write("<div");
        oRm.writeControlData(oControl); // writes the Control ID and enables event handling - important!
        oRm.addStyle("width", oControl.getProperty("width")); // write the Control property size; the Control has validated it to be a CSS size
        oRm.addStyle("height", oControl.getProperty("height"));
        oRm.addStyle("background-color", oControl.getProperty("bgcolor"));
        oRm.writeStyles();
        //oRm.addClass("rpb");        // add a CSS class for styles common to all control instances
        oRm.writeClasses(); // this call writes the above class plus enables support for Square.addStyleClass(...)
        oRm.write(">");
        //TODO Write a canvas
        oRm.write(
          "<canvas width='" +
            oControl.getProperty("width") +
            "' " +
            "height='" +
            oControl.getProperty("height") +
            "'"
        );
        oRm.writeControlData(oControl); // writes the Control ID and enables event handling - important!
        oRm.addStyle("width", oControl.getProperty("width")); // write the Control property size; the Control has validated it to be a CSS size
        oRm.addStyle("height", oControl.getProperty("height"));
        oRm.writeStyles();
        oRm.write("></canvas>");
        oRm.write("</div>");
      },
      onAfterRendering: function () {
        var canvas = document.querySelector("canvas");
        try {
          this.signaturePad = new SignaturePad(canvas, {
            backgroundColor: "rgb(255, 255, 255)",
          });
        } catch (e) {
          console.error(e);
        }
      },
      clear: function () {
        this.signaturePad.clear();
      },
      save: function () {
        return this.signaturePad.toDataURL();
      },
    });
  }
);
