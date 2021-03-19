sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Device, JSONModel) {
        "use strict";

        return Controller.extend("EjercicioSplitApp.EjercicioSplitApp.controller.App", {
            onInit: function () {


                var oData = {
                    value: [
                        {
                            "nombre_producto": "Producto1",
                            "codigo_producto": "210605120522 1",
                            "desc_producto": "Descripción del producto 1",
                            "nombre_empresa": "CLIENTE Producto 1",
                            "origen": "Argentina"
                        },
                        {
                            "nombre_producto": "Producto2",
                            "codigo_producto": "210132099429 2",
                            "desc_producto": "Descripción del producto 2",
                            "nombre_empresa": "CLIENTE Producto 2",
                            "origen": "Mexico"
                        },
                        {
                            "nombre_producto": "Producto3",
                            "codigo_producto": "210131354329 3",
                            "desc_producto": "Descripción del producto 3",
                            "nombre_empresa": "CLIENTE Producto 3",
                            "origen": "Chile"
                        }]
                };

                let oModel = new JSONModel(oData);

                const oComponent = this.getOwnerComponent();
                oComponent.setModel(oModel, "modeloProductos");

                this.getOwnerComponent().getRouter().getRoute("RouteMaster").attachPatternMatched(this._onRouteMatched, this);
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
