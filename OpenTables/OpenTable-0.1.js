/*!OpenTables v0.1 | (c) 2014 Kasimir Blust| opentables.org/?license */

var OpenTable = {
    type: "opt",
    id: "#none",
    Init: function (divContainer) 
    {
    	this.id = divContainer;
    	$(this.id).click(this.MouseAction);
    },
    KeyPressed: function (evt) 
    {
    	Console.log("Key was pressed. Event:");
		Console.log(evt);
    }
}