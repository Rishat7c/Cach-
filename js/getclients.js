<script language="javascript">
function ctrl($scope,$http) {
    // Запрос GET к RESTful web API
        $scope.getClients=function() {
       $http.get("/rest/clients").success(function(data) {
             // Помещаем ответ сервера в переменную companies
           $scope.clients=data.children;
       }).error(function(data, status) {
                 // Вывод информации об ошибке, если таковая возникнет
           alert("["+status+"] Ошибка при загрузке компаний! ["+data+"]");
       });
   };
  
      // Создать новую компанию
    $scope.create = function (client){
       $http.post("/rest/client",client)
       .success(function(data){$scope.getClients();$scope.alertzone="Добавили компанию "+client.Name;}).error(function(data,status){
        $scope.alertzone="["+status+"] Ошибка добавления компании :( ["+data+"]"; });
    }

    // Обновить существующую компанию
  $scope.update = function (client){
       $http.put("/rest/client/"+client.ID,client)
        .success(function(data){$scope.alertzone="Обновили компанию "+client.Name;}).error(function(data,status){ // поменял alert(....); на alertzone
        $scope.alertzone="["+status+"] Ошибка обновления имени компании :( ["+data+"]"; });
    }
            
    // Удалить компанию
    $scope.delete = function (client){
        $http.delete("/rest/client/"+client.ID)
        .success(function(data){$scope.getClients();$scope.alertzone="Удалили компанию "+client.Name;}).error(function(data,status){
            $scope.alertzone="["+status+"] Ошибка удаления компании :( ["+data+"]"; });
    }
};
</script>