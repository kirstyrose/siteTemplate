$(function(){

	function runScripts(){

		var setup = {

			init: function(){

				for(var funcs in readyFunctions) {

					try {

						readyFunctions[funcs]();

					} catch(error) {

						console.group('[Hey noob, you broke '+funcs+'... look below] - ' + error['message']);
						console.info(error['stack'].split('\n')[1]);
						console.groupEnd();

					}

				}

				$(window).load(function(){

					for(var funcs in loadFunctions) {

						try {

							loadFunctions[funcs]();

						} catch(error) {

							console.group('[Hey noob, you broke '+funcs+'... look below]');
							console.info(error['stack'].split('\n')[1]);
							console.groupEnd();

						}

					}

				});

				$(window).resize(function(){

					for(var funcs in resizeFunctions) {

						try {

							resizeFunctions[funcs]();

						} catch(error) {

							console.group('[Hey noob, you broke '+funcs+'... look below]');
							console.info(error['stack'].split('\n')[1]);
							console.groupEnd();

						}

					}

				});

				$(window).scroll(function(){

					for(var funcs in scrollFunctions) {

						try {

							scrollFunctions[funcs]();

						} catch(error) {

							console.group('[Hey noob, you broke '+funcs+'... look below]');
							console.info(error['stack'].split('\n')[1]);
							console.groupEnd();

						}

					}

				});

			}

		}

		setup.init();

	}

	window.loadFunctions = {

		method1: function(){
			console.log('loadFunctions ready');
		}

	}

	window.scrollFunctions = {
		
		method2: function(){
			console.log('scrollFunctions ready');
		}

	}

	window.resizeFunctions = {
		
		method3: function(){
			console.log('resizeFunctions ready');
		}

    }
	
	window.readyFunctions  = {

		method4: function(){
			console.log('readyFunctions ready');
		}

	}

	runScripts();

});

