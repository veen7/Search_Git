class ApiCaller {

    handleErrors(response) {
	    if (!response.ok) {
	        throw Error(response.status);
	    }
		return response;
	}

	get(url){
		return fetch(url).then(this.handleErrors)
    	  .then(response => response.json() )
		  .catch(error => {
		  	console.log("this is error" + error)
		  	if(error.message === '404'){
		  		return 404;
		  	}else if(error.message === '500') {
		  		return 'Internal Server Error';
		  	}
		  });
	}
}
export default new ApiCaller();

