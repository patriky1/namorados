app.controller('mainController', function($scope, $timeout) {
    $scope.startDate = new Date('2024', '04', '07'); // Data inicial (note que os meses em JavaScript são indexados de 0 a 11)

    countdown.setLabels(
        ' millisegundos| segundo| minuto| hora| dia| semana| mes| ano| decade| century| millennium',
        ' millisegundos| segundos| minutos| horas| dias| semanas| meses| anos| decades| centuries| millennia',
        ' e ', ', ', '',
        function(n) {
            return n.toString();
        });

    $scope.onTimeout = function() {
        const now = new Date();
        $scope.days = countdown($scope.startDate, now).toString(); // Contando do passado até agora
        mytimeout = $timeout($scope.onTimeout, 1000);
    };
    var mytimeout = $timeout($scope.onTimeout, 1000);

    $scope.showMessage = false;
    $scope.showMessageBox = function() {
        $scope.showMessage = true;
    };

});
