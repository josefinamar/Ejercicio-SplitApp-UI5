sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("EjercicioSplitApp.EjercicioSplitApp.controller.Master", {
            onInit: function () {
                
                this.getOwnerComponent().getRouter().getRoute("RouteMaster").attachPatternMatched(this._onRouteMatched, this);

            },

            onListItemPress: function(oEvent) {
                var sProductId = oEvent.getSource().getSelectedItem().getBindingContext("modeloProductos").getPath();

                let oModel = this.getOwnerComponent().getModel("modeloProductos");
                var oProductoSelec = oModel.getProperty(sProductId);

                let oModelProdSelec = new JSONModel();
                oModelProdSelec.setData(oProductoSelec);
                
                this.getOwnerComponent().setModel(oModelProdSelec, "productoSeleccionado");

                 this.getOwnerComponent().getRouter().navTo("RouteDetail");
            },

            _onRouteMatched: function (oEvent) {
                if (!Device.system.phone) {
                    var oModel = this.getOwnerComponent().getModel("modeloProductos");

                    var oProductoSelec = oModel.getProperty("/value/0");

                    let oModelProdSelec = new JSONModel(oProductoSelec);
                     oModelProdSelec.setData(oProductoSelec);
                     
                    this.getOwnerComponent().setModel(oModelProdSelec, "productoSeleccionado");

                    this.getOwnerComponent().getRouter().navTo("RouteDetail");
                }
            }

            
        });
    });
