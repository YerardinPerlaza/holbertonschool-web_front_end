let globalVariable;
globalVariable = 'Welcome';
function outer () {
    alert(globalVariable);
    let course;
    course = 'Holberton';
    function inner () {
	alert(globalVariable+ " " + course);
	let exclamation;
	exclamation = '!';
	function inception () {
	    alert(globalVariable + " " + course + exclamation);
	            
	}
	inception();
	    
    }
    inner();
    
}
outer();
