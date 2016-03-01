'use strict';
routerApp
  .controller('ordersCTRL', function($cookies,$rootScope,$state,$scope,ergastAPIservice,$location,$window) {
  	if(angular.isUndefined($cookies.get('token'))){
        $state.go('login');
        alert("Please login to continue");
        return;
      }
  	if(!$rootScope.orderid){
  		$state.go("precheck");
  		return;
  	}
  	else{
  		$scope.orderid=$rootScope.orderid;
  	}
  	var cloth_data=[];
    $scope.formData = {};
    $scope.selectedTestAccount = null;
    $scope.testAccounts = [];
    
    $scope.selectedColor = null;
    $scope.colors = [];
    
    $scope.selectedSize = null;
    $scope.sizes = [];

    $scope.selectedBrand = null;
    $scope.brands = [];
    $scope.selectedGender = null;
    $scope.genders = [ {"gender_id":"male","gender_name":"Male"},{"gender_id":"female","gender_name":"Female"}, ];

    $scope.selectedDamaged = null;
    $scope.damaged = [ {"damage_id":"true","damage_name":"Yes"},{"damage_id":"false","damage_name":"No"}, ];

    ergastAPIservice.getClothSize()
    .then(
    function(response){
      
      $scope.sizes = response;
	       //alert($scope.sizes)
      },
    function(httpError){
        alert("size not available");
      throw httpError.status;
    }
  );
    var rows=1;

    ergastAPIservice.getClothColor()
    .then(
    function(response){
      
      $scope.colors = response;

      },
    function(httpError){
        alert("Colors not available");
      throw httpError.status;
    }
  );

//Brand
ergastAPIservice.getClothBrand()
    .then(
    function(response){
      
      $scope.brands = response;
      },
    function(httpError){
        alert("Brand not available");
      throw httpError.status;
    }
  );

    ergastAPIservice.getClothType($scope.amount,$scope.id,$scope.weight,$scope.quantity)
    .then(
    function(response){
      $scope.testAccounts = response;
      },
    function(httpError){
        alert("type not available");
      throw httpError.status;
    }
  );

    $scope.submitCloth = function(){
    	cloth_data=[];
    	var data = {
        "color": $scope.selectedColor,
        "gender": $scope.selectedGender,
        "type": $scope.selectedTestAccount,
        "brand": $scope.selectedBrand,
        "size": $scope.selectedSize,
        "damage": $scope.selectedDamaged

      };
      data.order=$scope.orderid;
      cloth_data.push(data);
      
      var table = document.getElementById("table1");
      for(var i=2;i<=rows;i++){
      	data = {
	        "color": document.getElementById("color"+i.toString()).value,
	        "gender": document.getElementById("gender"+i.toString()).value,
	        "type": document.getElementById("type"+i.toString()).value,
	        "brand": document.getElementById("brand"+i.toString()).value,
	        "size": document.getElementById("size"+i.toString()).value,
	        "damage": document.getElementById("damage"+i.toString()).value

      	};
      	data.order=$scope.orderid;
      	cloth_data.push(data);
      }
      console.log(cloth_data);

      ergastAPIservice.setCloths(cloth_data)
      .then(function(response){
        alert("success ");
        $state.go($state.current, {}, {reload: true});
      },function(httpError){
        throw httpError.status;
      }
      );
    };

    $scope.submit = function() {
    ergastAPIservice.setAmount($scope.amount,$scope.orderid,$scope.weight,$scope.quantity)
    .then(
		function(response){
			alert("Shipment Added to operations");
			ergastAPIservice.updateOrderStatus($scope.orderid,5)
	      .then(function(reponse){

	      },function(error){
	      })
			$state.go('precheck');
		},
		function(httpError){
		    alert("Error Adding Coloths Informations");
			throw httpError.status;
		}
	);
  };
  





  
	$scope.myFunction=function() {
		rows=rows+1;
		var i = 0;
	    var table = document.getElementById("table1");
	    var row = table.insertRow(rows);
	
	    var cell = row.insertCell();
	    cell.innerHTML = rows;

	    var cell = row.insertCell();

		

		//Create and append select list
		var selectList = document.createElement("select");
		selectList.id = "type"+rows.toString();
		cell.appendChild(selectList);

		var array = $scope.testAccounts;
		for(var i = 0; i < array.length; i++) {
		    var option = document.createElement("option");
		    option.value = array[i].type_id;
		    option.text = array[i].type_name;
		    option.name="assda";
		    selectList.appendChild(option);
		}
		var cell = row.insertCell();
		var array = $scope.colors;



		//Create and append select list
		var selectList = document.createElement("select");
		selectList.id = "color"+rows.toString();
		cell.appendChild(selectList);

		for(var i = 0; i < array.length; i++) {
		    var option = document.createElement("option");
		    option.value = array[i].color_id;
		    option.text = array[i].color_name;
		    selectList.appendChild(option);
		}
		  var cell = row.insertCell();
		var array = $scope.brands;



		//Create and append select list
		var selectList = document.createElement("select");
		selectList.id = "brand"+rows.toString();
		cell.appendChild(selectList);

		for(var i = 0; i < array.length; i++) {
		    var option = document.createElement("option");
		    option.value = array[i].brand_id;
		    option.text = array[i].brand_name;
		    selectList.appendChild(option);
		}
		  var cell = row.insertCell();
		var array = $scope.sizes;




		//Create and append select list
		var selectList = document.createElement("select");
		selectList.id = "size"+rows.toString();
		cell.appendChild(selectList);

		for(var i = 0; i < array.length; i++) {
		    var option = document.createElement("option");
		    option.value = array[i].size_id;
		    option.text = array[i].size_name;
		    selectList.appendChild(option);
		}
		  var cell = row.insertCell();
		var array = $scope.genders;

		

		//Create and append select list
		var selectList = document.createElement("select");
		selectList.id = "gender"+rows.toString();
		cell.appendChild(selectList);

		for(var i = 0; i < array.length; i++) {
		    var option = document.createElement("option");
		    option.value = array[i].gender_id;
		    option.text = array[i].gender_name;
		    selectList.appendChild(option);
		}
		  var cell = row.insertCell();
		var array = $scope.damaged;

		

		//Create and append select list
		var selectList = document.createElement("select");
		selectList.id = "damage"+rows.toString();;
		cell.appendChild(selectList);

		for(var i = 0; i < array.length; i++) {
		    var option = document.createElement("option");
		    option.value = array[i].damage_id;
		    option.text = array[i].damage_name;
		    selectList.appendChild(option);
		}
	};


	$scope.deleteRow=function()  {
		if(rows>1){
			var table = document.getElementById("table1");
			table.deleteRow(rows);
			rows=rows-1;
		}
    };

});
