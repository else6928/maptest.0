//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');

	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#E7D69C',
		navBarHidden:true,
		exitOnClose:true
	});

	//construct UI
	var firstView = new FirstView();
	self.add(firstView);

	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
