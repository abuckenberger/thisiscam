// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

console.log('Hello, World!');

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyqGtSAOwpL9x1Tx'
});
var base = Airtable.base('appIp0fTdvnv7W5Bz');
console.log(base)

// Get Records
base('Cam').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    
    if (err) { console.error(err); return; }

    records.forEach(function(record) {
       
      // Check-Check 
    console.log(record.fields.Image[0].url);
    console.log(record.fields.Name);
    console.log(record.fields.Quote[0].url)

      // Display Data
      

    });
});

