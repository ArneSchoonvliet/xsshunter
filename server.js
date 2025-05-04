'use strict';

require('dotenv').config()
const get_app_server = require('./app.js');
const database = require('./database.js');
const https = require('https');
const fs = require('fs');
const database_init = database.database_init;

(async () => {
	// Ensure database is initialized.
	await database_init();

	const app = await get_app_server();
	const port = process.env.PORT;

	// const httpsOptions = {
	// 	pfx: fs.readFileSync('./localhost.pfx'),
	// 	passphrase: 'yourpassword' // same as used in the export
	//   };
	  
	//   // Create HTTPS server
	//   https.createServer(httpsOptions, app).listen(port, 'xsshunter.tools.intigriti.io', () => {
	// 	console.log(`XSS Hunter listening on port https://localhost:${port}`);
	//   });

	  app.listen(port, 'localhost', () => {
		console.log(`XSS Hunter listening on port http://localhost:${port}`);
	  });
})();
