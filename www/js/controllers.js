angular.module('starter.controllers', ['ionic', 'ngResource'])


.controller('ps3Controller', function($scope, $resource){

    var Ps3InscResources =$resource('http://sofia_henao.net23.net/apiw/Insps3.php');
    $scope.ps3 = new Ps3InscResources();
    $scope.ps3.nombre = '';
    $scope.ps3.correo = '';
    $scope.ps3.telefono = '';
    $scope.ps3.compra = '';
    $scope.ps3.medio = '';


    $scope.textoError = '';
    $scope.hayError = false;


    $scope.json = JSON.stringify($scope.ps3);

    $scope.guardarPS3In = function()
    {
        if($scope.ps3.nombre == '')
        {
            $scope.textoError ='Por favor ingrese el nombre'; 
            $scope.hayError = true;
            return;
        }

        if($scope.ps3.correo == '')
        {
            $scope.textoError ='Por favor ingrese el correo';
            $scope.hayError = true;
            return;
        }

        if($scope.ps3.telefono <= 0)
        {
            $scope.textoError ='Por favor ingrese un numero de telefono valido';
            $scope.hayError = true;         
            return;
        }
        if($scope.ps3.telefono == '')
        {
            $scope.textoError ='Por favor ingrese un numero telefonico';
            $scope.hayError = true;         
            return;
        } 

        if($scope.ps3.compra == '')
        {
            $scope.textoError ='Por favor seleccion un juego de compra';
            $scope.hayError = true;          
            return;
        }

        if($scope.ps3.medio == '')
	        {
	            $scope.textoError ='Por favor seleccion un medio de pago';
	            $scope.hayError = true;          
	            return;
	        }  
   	  

		if($scope.ps3.medio == 'BANCOLOMBIA' || $scope.ps3.medio == 'BANCOOCCIDENTE' || $scope.ps3.medio == 'VIABALOTO')
		{

	        if($scope.ps3.compra == 'SPLINTERCELL' || $scope.ps3.compra == 'MORTALKOMBAT' || $scope.ps3.compra == 'GTA5')
	        {

	       
	            $scope.ps3.$save(function(responseObj){
	            if(responseObj.resultado == 1)
	            {
	                alert('Se ha guardado la compra con éxito');
	            }
	            else
	            {
	                alert('Error al guardar la compra');
	            }

	            });
       		} 
        } 

        $scope.hayError = false;
    
    }

})

.controller('VerPs3Controller', function($scope, $resource, $ionicLoading){

    $scope.busquedaPs3 =
    {
        JuegoABuscar:""
    };

    $scope.$arregloPS3 = [];

    $scope.JuegoSeleccionado = null;

    var RegistroResource = $resource("http://sofia_henao.net23.net/apiw/Insps3.php");

    $scope.buscarJuego = function()
    {
        $ionicLoading.show({
            template: 'Espere un momento por favor...'
        });
        
        $scope.JuegoSeleccionado = null;
        //Esto si todo sale bien
        if($scope.busquedaPs3.JuegoABuscar != "")
        {
            var arregloPS3 = RegistroResource.query(
                {
                    compra: $scope.busquedaPs3.JuegoABuscar
                },
                function(){
                    $scope.arregloPS3 = arregloPS3;
                    $ionicLoading.hide();
                },
                function(){
                    $ionicLoading.hide();
                }
            );
        }
        //Esto solo si sale todo mal
        else
        {
            alert("Por favor seleccione un juego")
            var arregloPS3 = RegistroResource.query(              
                function(){
                    $scope.arregloPS3 = arregloPS3;
                    $ionicLoading.hide();
                },
                function(){
                    $ionicLoading.hide();
                }
            );            
        }

    }

    $scope.verJuego = function(ps3)
    {
        $scope.JuegoSeleccionado = ps3;
    }

})

.controller('ps4Controller', function($scope, $resource){

    var Ps3InscResources =$resource('http://sofia_henao.net23.net/apiw/Insps4.php');
    $scope.ps4 = new Ps3InscResources();
    $scope.ps4.nombre = '';
    $scope.ps4.correo = '';
    $scope.ps4.telefono = '';
    $scope.ps4.compra = '';
    $scope.ps4.medio = '';


    $scope.textoError = '';
    $scope.hayError = false;


    $scope.json = JSON.stringify($scope.ps4);

    $scope.guardarPS4In = function()
    {
        if($scope.ps4.nombre == '')
        {
            $scope.textoError ='Por favor ingrese el nombre'; 
            $scope.hayError = true;
            return;
        }

        if($scope.ps4.correo == '')
        {
            $scope.textoError ='Por favor ingrese el correo';
            $scope.hayError = true;
            return;
        }

        if($scope.ps4.telefono <= 0)
        {
            $scope.textoError ='Por favor ingrese un numero de telefono valido';
            $scope.hayError = true;         
            return;
        }
        if($scope.ps4.telefono == '')
        {
            $scope.textoError ='Por favor ingrese un numero telefonico';
            $scope.hayError = true;         
            return;
        } 

        if($scope.ps4.compra == '')
        {
            $scope.textoError ='Por favor seleccion un juego de compra';
            $scope.hayError = true;          
            return;
        }

        if($scope.ps4.medio == '')
	        {
	            $scope.textoError ='Por favor seleccion un medio de pago';
	            $scope.hayError = true;          
	            return;
	        }  
   	  


	    if($scope.ps4.compra == 'HORIZON' || $scope.ps4.compra == 'FIFA17' || $scope.ps4.compra == 'ASSASSINCREED')
	        {

			if($scope.ps4.medio == 'BANCOLOMBIA' || $scope.ps4.medio == 'BANCOOCCIDENTE' || $scope.ps4.medio == 'VIABALOTO')
			{
	       
	            $scope.ps4.$save(function(responseObj){
	            if(responseObj.resultado == 1)
	            {
	                alert('Se ha guardado la compra con éxito');
	            }
	            else
	            {
	                alert('Error al guardar la compra');
	            }

	            });
       		} 
        } 

        $scope.hayError = false;
    
    }

})

.controller('VerPs4Controller', function($scope, $resource, $ionicLoading){

    $scope.busquedaPs4 =
    {
        MedioABuscar:""
    };

    $scope.$arregloPS4 = [];

    $scope.MedioSeleccionado = null;

    var RegistroResource = $resource("http://sofia_henao.net23.net/apiw/Insps4.php");

    $scope.buscarMedio = function()
    {
        $ionicLoading.show({
            template: 'Espere un momento por favor...'
        });
        
        $scope.MedioSeleccionado = null;
        //Esto si todo sale bien
        if($scope.busquedaPs4.MedioABuscar != "")
        {
            var arregloPS4 = RegistroResource.query(
                {
                    medio: $scope.busquedaPs4.MedioABuscar
                },
                function(){
                    $scope.arregloPS4 = arregloPS4;
                    $ionicLoading.hide();
                },
                function(){
                    $ionicLoading.hide();
                }
            );
        }
        //Esto solo si sale todo mal
        else
        {
            alert("Por favor seleccione un medio de pago")
            var arregloPS4 = RegistroResource.query(              
                function(){
                    $scope.arregloPS4 = arregloPS4;
                    $ionicLoading.hide();
                },
                function(){
                    $ionicLoading.hide();
                }
            );            
        }

    }

    $scope.verMedio = function(ps4)
    {
        $scope.MedioSeleccionado = ps4;
    }

})

.controller('comentariosController', function($scope, $resource){

    var ComentarResources =$resource('http://sofia_henao.net23.net/apiw/Comentarios.php');
    $scope.comentar = new ComentarResources();
    $scope.comentar.nombre = '';
    $scope.comentar.correo = '';
    $scope.comentar.comentario = '';
   


    $scope.textoError = '';
    $scope.hayError = false;


    $scope.json = JSON.stringify($scope.comentar);

    $scope.guardarComentarios = function()
    {
        if($scope.comentar.nombre == '')
        {
            $scope.textoError ='Por favor ingrese el nombre'; 
            $scope.hayError = true;
            return;
        }

        if($scope.comentar.correo == '')
        {
            $scope.textoError ='Por favor ingrese el correo';
            $scope.hayError = true;
            return;
        }

        if($scope.comentar.comentario == '')
        {
            $scope.textoError ='Por favor ingrese un comentario';
            $scope.hayError = true;         
            return;
        }

        else 
         $scope.comentar.$save(function(responseObj){
	            if(responseObj.resultado == 1)
	            {
	                alert('Se ha guardado el comentario con éxito');
	            }
	            else
	            {
	                alert('Error al guardar el comentario');
	            }

	            });

  
        $scope.hayError = false;
    
    }

})

.controller('VerComentarioController', function($scope, $resource, $ionicLoading){

    $scope.busquedaComentario =
    {
        ComentarioABuscar:""
    };

    $scope.$arregloComentario = [];

    $scope.ComentarioSeleccionado = null;

    var RegistroResource = $resource("http://sofia_henao.net23.net/apiw/Comentarios.php");

    $scope.buscarComentario = function()
    {
        $ionicLoading.show({
            template: 'Espere un momento por favor...'
        });
        
        $scope.ComentarioSeleccionado = null;
        //Esto si todo sale bien
        if($scope.busquedaComentario.ComentarioABuscar != "")
        {
            var arregloComentario = RegistroResource.query(
                {
                    nombre: $scope.busquedaComentario.ComentarioABuscar
                },
                function(){
                    $scope.arregloComentario = arregloComentario;
                    $ionicLoading.hide();
                },
                function(){
                    $ionicLoading.hide();
                }
            );
        }
        //Esto solo si sale todo mal
        else
        {
            alert("Por favor escribe un nombre para la busqueda")
            var arregloComentario = RegistroResource.query(              
                function(){
                    $scope.arregloComentario = arregloComentario;
                    $ionicLoading.hide();
                },
                function(){
                    $ionicLoading.hide();
                }
            );            
        }

    }

    $scope.verComentario = function(comentar)
    {
        $scope.ComentarioSeleccionado = comentar;
    }

});

