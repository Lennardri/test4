var app = angular.module("ta", [])

app.controller("tc", function ($scope) {
    $scope.counter = 0;
    $scope.count = function() {
        console.log($scope)
        $scope.counter = $scope.counter + 1;
    }
$scope.alert = function () {
  alert('ich bin ein alert')
    };
});

app.controller("test", function ($scope) {
    $scope.open = function () {
        alert('dialog')
    };
});


/*
app.controller("dialog", function ($mdDialog) {



function DemoCtrl($mdDialog) {
    var self = this;

    self.openDialog = function($event) {
        $mdDialog.show({
            controller: DialogCtrl,
            controllerAs: 'ctrl',
            templateUrl: 'dialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: $event,
            clickOutsideToClose:true
        });
    };
}
});























   /* (function(angular, undefined){
        "use strict";

        angular
            .module('demoApp', ['ngMaterial'])
            .controller('AppCtrl', AppController);

    app.controller("dialog", function($scope, $mdDialog) {
        var alert;
        $scope.showAlert = showAlert;
        $scope.showDialog = showDialog;
        $scope.items = [1, 2, 3];

        // Internal method
        function showAlert() {
            alert = $mdDialog.alert({
                title: 'Attention',
                textContent: 'This is an example of how easy dialogs can be!',
                ok: 'Close'
            });

            $mdDialog
                .show( alert )
                .finally(function() {
                    alert = undefined;
                });
        }

        function showDialog($event) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                template:
                    '<md-dialog aria-label="List dialog">' +
                    '  <md-dialog-content>'+
                    '    <md-list>'+
                    '      <md-list-item ng-repeat="item in items">'+
                    '       <p>Number {{item}}</p>' +
                    '      '+
                    '    </md-list-item></md-list>'+
                    '  </md-dialog-content>' +
                    '  <md-dialog-actions>' +
                    '    <md-button ng-click="closeDialog()" class="md-primary">' +
                    '      Close Dialog' +
                    '    </md-button>' +
                    '  </md-dialog-actions>' +
                    '</md-dialog>',
                locals: {
                    items: $scope.items
                },
                controller: DialogController
            });
            function DialogController($scope, $mdDialog, items) {
                $scope.items = items;
                $scope.closeDialog = function() {
                    $mdDialog.hide();
                }
            }
        }*/
//});









