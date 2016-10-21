// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
/* NOTES: 
	Use "typeof" on each item of the array to determine how to deal with it 
		typeof Undefined == "undefined"
		typeof Null == "object"
		typeof Boolean == "boolean"
		typeof Number == "number"
		typeof String == "string"
		typeof Symbol == "symbol"
		typeof Function == "function"
		typeof Any other object == "object"
	// use Array.isArray or Object.prototype.toString.call
	// to differentiate regular objects from arrays
*/
var stringifyJSON = function(obj) {
    if (typeof obj !== "object") { 
		//if not object/null/array
		if (typeof obj !== "string") {
			return obj.toString();
		} else {
			//put double quotes around string
			return '"'+obj+'"';
		}
	//if function is null/array/or object	
	} else if (typeof obj === "object"){
		//if null
		if (obj === null) {
			return 'null';
		} 
		//if array	
		if(Array.isArray(obj)) {
			var JSONedArray = [];
			obj.forEach(function(element){
				JSONedArray.push(stringifyJSON(element));
			})
			return '['+JSONedArray.toString()+']';
		//if object
		} else if (Object.prototype.toString.call(obj) === '[object Object]'){
			var JSONedArray = [];
			var JSONedObj = {};
			for (var key in obj){
				if (typeof obj[key] === "function" || typeof obj[key] === "undefined"){
					//do nothing if the value in an object is a function or undefined
				} else {
					var JSONKey = stringifyJSON(key);
					var JSONValue = stringifyJSON(obj[key])
					JSONedArray.push(JSONKey+':'+JSONValue);
				}
			}
			return '{'+JSONedArray.toString()+'}';
		}
	}
};
