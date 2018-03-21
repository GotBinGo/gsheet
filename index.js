var GoogleSpreadsheet = require("google-spreadsheet");
var my_sheet = new GoogleSpreadsheet('1eaPxcqu9a7uiTOMP6cPWy_oEcsku6POcNdi8AjU6VzI');
var login = require("facebook-chat-api");
// without auth -- read only
// # is worksheet id - IDs start at 1
/*
my_sheet.getRows( 1, function(err, row_data){
 console.log( 'pulled in '+row_data.length + ' rows ')
})
*/
// set auth to be able to edit/add/delete
function doit()
{

my_sheet.setAuth('<google email/username>','<google pass>', function(err){
 my_sheet.getInfo( function( err, sheet_info ){
 console.log( sheet_info.title + ' is loaded' );
 // use worksheet object if you want to forget about ids

sheet_info.worksheets[0].getRows( function( err, rows ){
    	rows = rows.filter(x => x["neptunkód"] == "ABC123")
//	for(a in rows)
  	var res = rows[0]["javzh3"];
   	if(res != "")
	login({email: "fbmail", password: "fbpass"}, function callback (err, api) 
	{
		if(err) return console.error(err);
		//api.listen(function callback(err, message) 
		//{
		//});
		 api.getFriendsList(function(err, data) 
		 {
		     if(err) return console.error(err);
		 	console.log(data[0].userID)
	        	api.sendMessage("<"+res+">", data[0].userID,x=>process.exit());
			
		});
	});
})

})
})
}
setInterval(function() {
    doit();
    console.log("did it")
    }, 5000);
 
 // Create simple echo bot 

