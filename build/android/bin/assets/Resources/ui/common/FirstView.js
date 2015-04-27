//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	var spot = Ti.UI.createImageView({
		backgroundColor: 'transparent',
		width:40, 
		height:40, 
		left:220,
		top:10
	});
	self.add(spot);
spot.addEventListener('click', function(e){
  var dialog = Ti.UI.createAlertDialog({
    message: 'Access the Tutorial with the Menu button in the top left corner!',
    ok: 'Okay',
    title: 'Need Help?'
  });
  dialog.show();
});
//add text field for input
var textField1 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  backgroundColor: 'white',
  color: '#336699',
  hintText: 'Input Current Location',
  top: 90, 
  align: 'center',
  width: 250, height: 40
});
self.add(textField1);

var textField2 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  backgroundColor: 'white',
  hintText: 'Input Destination',
  color: '#336699',
  top: 140, 
  align: 'center',
  width: 250, height: 40
});
self.add(textField2);

	//Add button
	var button1= Ti.UI.createButton({
		height : 40,
		width : 120,
		title : 'Route!',
		top : 185,
		backgroundColor : '#B18E5F'
	});
	self.add(button1);
	
	button1.addEventListener('click', function(e) { var routeWindow = Ti.UI.createWindow({
		backgroundColor: '#E7D69C'
	});
	var routeMap= Ti.UI.createImageView({
		image: '/images/mappic2.png', 
		width:240, 
		height:350, 
		bottom:5
	});
	var routebutton2= Ti.UI.createButton({
		height : 40,
		width : 40,
		title: '911',
		bottom : 10,
		left: 5,
		backgroundColor : '#DF0101'
	});
	routeWindow.add(routebutton2);
	
	routebutton2.addEventListener('click', function(e) {
		var routeemergency = Ti.UI.createWindow({
        backgroundColor: '#fff'
    });
    routeemergency.open();
	});
	
	var routebutton4= Ti.UI.createButton({
		backgroundImage: '/images/mapmarker.png',
		height : 40,
		width : 40,
		top : 20,
		left: 120,
		backgroundColor : '#B18E5F'
	});
	routeWindow.add(routebutton4);
	
	var routebutton5= Ti.UI.createButton({
		backgroundImage: '/images/buildingicon.png',
		height : 40,
		width : 40,
		top : 20,	
		left: 170,
		backgroundColor : '#B18E5F'
	});
	routeWindow.add(routebutton5);

	var routebutton6= Ti.UI.createButton({
		height : 40,
		backgroundImage:'/images/Menu.png',
		width : 45,
		top : 20,	
		left: 5,
		backgroundColor : '#B18E5F'
	});
	routeWindow.add(routebutton6);
	
	routebutton6.addEventListener('click', function() {
		self.containingTab.open();
	});
	
	var routetextField3 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  backgroundColor: 'white',
  hintText: 'Search',
  color: '#336699',
  top: 20, 
  right:5,
  width: 80, height: 40
});
routeWindow.add(routetextField3);
	routeWindow.add(routeMap);
var routeInput= Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  backgroundColor: 'white',
  hintText: 'Destination',
  color: '#336699',
  top: 70, 
  align: 'center',
  width: 250, height: 40
});
routeWindow.add(routeInput);
var routeText= Ti.UI.createLabel ({
	text: 'Directions: Turn right onto College St.',
	color: 'black', 
	textAlign: 'left', 
	top:115,
	
});
routeWindow.add(routeText);
var arrow= Ti.UI.createImageView ({
	image: '/images/left.png',
	width: 40,
	height:40,
	top:115,
	right:10
});
routeWindow.add(arrow);
routeWindow.open(); 
});
	var button2= Ti.UI.createButton({
		height : 40,
		width : 40,
		title: '911',
		bottom : 10,
		left: 5,
		backgroundColor : '#DF0101'
	});
	self.add(button2);
	
	button2.addEventListener('click', function(e) { var emergencyWin= Ti.UI.createWindow({
		backgroundColor:'#E7D69C'});
	var timer= Ti.UI.createImageView({
		image: '/images/5.jpg', 
		width:100, 
		height:170, 
		align: 'center',
		top:90 
	});
	emergencyWin.add(timer);
	
	var emergencyLabel1= Ti.UI.createLabel({
		text: 'EMERGENCY SERVICES WILL BE CONTACTED IN', 
		align: 'center', 
		color: 'black',
		top:70
	});
	emergencyWin.add(emergencyLabel1);
	
	var emergencyLabel2= Ti.UI.createLabel({
		text: '         SECONDS!!!\n\PRESS BELOW TO STOP', 
		color:'black',
		align: 'center', 
		top:265
	});
	emergencyWin.add(emergencyLabel2);
	
	var stopButton= Ti.UI.createButton({
		height:100,
		width:100,
		align: 'center',
		top:400,
		backgroundColor: '#DF0101',
		title: 'STOP!'	
		});
	emergencyWin.add(stopButton);
		
	stopButton.addEventListener('click', function() {
		emergencyWin.open(self);
	});
	
	var emergencybutton6= Ti.UI.createButton({
		height : 40,
		backgroundImage: '/images/Menu.png',
		width : 45,
		top : 20,	
		left: 5,
		backgroundColor : '#B18E5F'
	});
	emergencyWin.add(emergencybutton6);
	
	emergencybutton6.addEventListener('click', function() {
		self.containingTab.open();
	});
	var emergencytextField3 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  backgroundColor: 'white',
  hintText: 'Search',
  color: '#336699',
  top: 20, 
  right:5,
  width: 80, height: 40
});
emergencyWin.add(emergencytextField3);
	emergencyWin.open();
	});
	
	var button4= Ti.UI.createButton({
		backgroundImage: '/images/mapmarker.png',
		height : 40,
		width : 40,
		top : 20,
		left: 120,
		backgroundColor : '#B18E5F'
	});
	self.add(button4);
	
	button4.addEventListener('click', function() {
		self.containingTab.open();
	});
	var button5= Ti.UI.createButton({
		backgroundImage: '/images/buildingicon.png',
		height : 40,
		width : 40,
		top : 20,	
		left: 170,
		backgroundColor : '#B18E5F'
	});
	self.add(button5);
	
	button5.addEventListener('click', function(e) {var buildingView= Ti.UI.createWindow({
		backgroundColor:'#E7D69C'
	});
	var textField1 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  backgroundColor: 'white',
  color: '#336699',
  hintText: 'Input Current Location',
  top: 90, 
  align: 'center',
  width: 250, height: 40
});
buildingView.add(textField1);

var textField2 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  backgroundColor: 'white',
  hintText: 'Input Destination',
  color: '#336699',
  top: 140, 
  align: 'center',
  width: 250, height: 40
});
buildingView.add(textField2);

var map= Ti.UI.createImageView({
	image: '/images/buildingmap.png',
	width:270, 
	height:270, 
	align:'center', 
	bottom: 10
});
buildingView.add(map);
	
	var buildingbutton2= Ti.UI.createButton({
		height : 40,
		width : 40,
		title: '911',
		bottom : 10,
		left: 5,
		backgroundColor : '#DF0101'
	});
	buildingView.add(buildingbutton2);
	
	buildingbutton2.addEventListener('click', function() {
		buildingView.containingTab.open();
	});
	
	var buildingbutton4= Ti.UI.createButton({
		backgroundImage: '/images/mapmarker.png',
		height : 40,
		width : 40,
		top : 20,
		left: 120,
		backgroundColor : '#B18E5F'
	});
	buildingView.add(buildingbutton4);
	
	var buildingbutton5= Ti.UI.createButton({
		backgroundImage:'/images/buildingicon.png',
		height : 40,
		width : 40,
		top : 20,	
		left: 170,
		backgroundColor : '#B18E5F'
	});
	buildingView.add(buildingbutton5);
	
	var buildingbutton6= Ti.UI.createButton({
		height : 40,
		backgroundImage: '/images/Menu.png',
		width : 45,
		top : 20,	
		right: 10,
		backgroundColor : '#B18E5F'
	});
	buildingView.add(buildingbutton6);
	
	buildingbutton6.addEventListener('click', function() {
		self.containingTab.open();
	});
	var buildingbutton6= Ti.UI.createButton({
		height : 40,
		backgroundImage: '/images/Menu.png',
		width : 40,
		top : 20,	
		left: 5,
		backgroundColor : '#B18E5F'
		});
		buildingView.add(buildingbutton6);
		
	
	var buildingtextField3 = Ti.UI.createTextField({
  	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  	backgroundColor: 'white',
  	hintText: 'Search',
  	color: '#336699',
  	top: 20, 
  	right:10,
	 width: 80, height: 40
	});
	buildingView.add(buildingtextField3);
	buildingView.open();
var button1= Ti.UI.createButton({
		height : 40,
		width : 120,
		title : 'Route!',
		top : 185,
		backgroundColor : '#B18E5F'
	});
	buildingView.add(button1);
	
	button1.addEventListener('click', function(e) { var buildingrouteWindow = Ti.UI.createWindow({
		backgroundColor: '#E7D69C'
		});
		var routeMap= Ti.UI.createImageView({
		image: '/images/buildingmap.png', 
		width:240, 
		height:350, 
		bottom:5
		});
		var routebutton2= Ti.UI.createButton({
		height : 40,
		width : 40,
		title: '911',
		bottom : 10,
		left: 5,
		backgroundColor : '#DF0101'
		});
		buildingrouteWindow.add(routebutton2);
	
		routebutton2.addEventListener('click', function() {
		var routeemergency = Ti.UI.createWindow({
        url : "maptest/Resources/ui/handheld/android/emergencyWin.js",//Provide the correct path here
        fullscreen: true
    	});
    	routeemergency.open();
		});
	
		var routebutton4= Ti.UI.createButton({
		backgroundImage: '/images/mapmarker.png',
		height : 40,
		width : 40,
		top : 20,
		left: 120,
		backgroundColor : '#B18E5F'
		});
		buildingrouteWindow.add(routebutton4);
	
		var routebutton5= Ti.UI.createButton({
		backgroundImage: '/images/buildingicon.png',
		height : 40,
		width : 40,
		top : 20,	
		left: 165,
		backgroundColor : '#B18E5F'
		});
		buildingrouteWindow.add(routebutton5);
		routebutton5.addEventListener('click', function(){buildingrouteWindow.open(buildingWin);
		});
	
		var routebutton6= Ti.UI.createButton({
		height : 40,
		backgroundImage:'/images/Menu.png',
		width : 45,
		top : 20,	
		left: 5,
		backgroundColor : '#B18E5F'
		});
		buildingrouteWindow.add(routebutton6);
	
		routebutton6.addEventListener('click', function() {
		self.containingTab.open();
		});
	
		var routetextField3 = Ti.UI.createTextField({
  		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		 backgroundColor: 'white',
 		 hintText: 'Search',
  		color: '#336699',
  		top: 20, 
 		 right:5,
 		 width: 80, height: 40
		});
		buildingrouteWindow.add(routetextField3);
		buildingrouteWindow.add(routeMap);
		var routeInput= Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  		backgroundColor: 'white',
 		 hintText: 'Destination',
  		color: '#336699',
  		top: 70, 
 		align: 'center',
 		 width: 250, height: 40
		});
		buildingrouteWindow.add(routeInput);
		var routeText= Ti.UI.createLabel ({
		text: 'Directions: Turn left at Main Street in .25 miles.',
		color: 'black', 
		textAlign: 'left', 
		top:115
		});
		buildingrouteWindow.add(routeText);
		buildingrouteWindow.open(); 
		});
	});
var button6= Ti.UI.createButton({
		height : 40,
		backgroundImage: '/images/Menu.png',
		width : 45,
		top : 20,	
		left: 5,
		backgroundColor : '#B18E5F'
	});
	self.add(button6);
	
	button6.addEventListener('click', function(e) { var mainMenu= Ti.UI.createWindow({
		backgroundColor:'#E7D69C'});
	var university= Ti.UI.createImageView({
		image: '/images/ID_BLACK.jpg',
		width:320,
		height:73, 
		align: 'center',
		top:10
	});
	mainMenu.add(university);
	var menuTitle = Ti.UI.createLabel({
		text:'MENU', 
		color:'black',
		top:140
	});
	mainMenu.add(menuTitle);
	var menuButton1= Ti.UI.createButton({
		backgroundColor: '#B18E5F', 
		title: 'Home', 
		color: '#fff',
		width:200,
		height:50,
		align:'center',
		top:180
	});
	mainMenu.add(menuButton1);
	var menuButton2= Ti.UI.createButton({
		backgroundColor: '#B18E5F', 
		title: 'Fullscreen Map', 
		color: '#fff',
		width:200,
		height:50,
		align:'center',
		top:240
	});
	mainMenu.add(menuButton2);
	var menuButton3= Ti.UI.createButton({
		backgroundColor: '#B18E5F', 
		title: 'Building Map', 
		color:'#fff',
		width:200,
		height:50,
		align:'center',
		top:300
	});
	mainMenu.add(menuButton3);
	menuButton3.addEventListener('click', function(e) {	var building= Ti.UI.createWindow({
		backgroundColor:'#E7D69C'
	});
	var buildingMap= Ti.UI.createImageView({
		image: '/images/buildingmap.png', 
		width:250, 
		height:350, 
		bottom:5
	});
	building.add(buildingMap);
	
	var buildingbutton2= Ti.UI.createButton({
		height : 40,
		width : 40,
		title: '911',
		bottom : 10,
		left: 5,
		backgroundColor : '#DF0101'
	});
	building.add(buildingbutton2);
	
	buildingbutton2.addEventListener('click', function() {
		building.containingTab.open();
	});
	
	var buildingbutton4= Ti.UI.createButton({
		backgroundImage: '/images/mapmarker.png',
		height : 40,
		width : 40,
		top : 20,
		left: 120,
		backgroundColor : '#B18E5F'
	});
	building.add(buildingbutton4);
	
	var buildingbutton5= Ti.UI.createButton({
		backgroundImage:'/images/buildingicon.png',
		height : 40,
		width : 40,
		top : 20,	
		left: 170,
		backgroundColor : '#B18E5F'
	});
	building.add(buildingbutton5);
	
	var buildingbutton6= Ti.UI.createButton({
		height : 40,
		backgroundImage: '/images/Menu.png',
		width : 45,
		top : 20,	
		right: 10,
		backgroundColor : '#B18E5F'
	});
	building.add(buildingbutton6);
	
	buildingbutton6.addEventListener('click', function() {
		self.containingTab.open();
	});
	
	var buildingtextField3 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  backgroundColor: 'white',
  hintText: 'Search',
  color: '#336699',
  top: 20, 
  left:220,
  width: 80, height: 40
});
building.add(buildingtextField3);
	
var buildingInput= Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  backgroundColor: 'white',
  hintText: 'Destination',
  color: '#336699',
  top: 70, 
  align: 'center',
  width: 250, height: 40
});
building.add(buildingInput);
var buildingtext= Ti.UI.createLabel ({
	text: 'Directions: Turn left at Main Street in .25 miles.',
	color: 'black', 
	textAlign: 'left', 
	top:115
});
building.add(buildingtext);
building.open();
	});
	var menuButton4= Ti.UI.createButton({
		backgroundColor: '#B18E5F', 
		title: 'Tutorial', 
		color: '#fff',
		width:200,
		height:50,
		align:'center',
		top:360
	});
	mainMenu.add(menuButton4);
	mainMenu.open();
});
	var textField3 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  backgroundColor: 'white',
  hintText: 'Search',
  color: '#336699',
  top: 20, 
  right:10,
  width: 80, height: 40
});
self.add(textField3);
//add map
var map= Ti.UI.createImageView({
	image: '/images/mappic.png',
	width:270, 
	height:270, 
	align:'center', 
	bottom: 10
});
self.add(map);


	return self;
};

module.exports = FirstView;
