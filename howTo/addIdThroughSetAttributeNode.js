/*
How to add an Id through setAttributeNode :collision:

*/  :collision:

//create an id
var id = document.getElementById('id');
=>id=''

//set value
id.value = 'myId';

//create a div
var div = document.createElement('div');

//append attribute
div.setAttributeNode(id);

div
=> <div id='myId'></div>
