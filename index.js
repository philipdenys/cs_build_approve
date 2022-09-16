// gltf-vscode converted the .glb file to .gltf

// use fs to call in the file
fs = require('fs')
fs.readFile('./cardano.gltf', 'utf8', function (err, data) {
   if (err) {
      return console.log(err);
   }
   //console.log(typeof data);
   // convert string to JSON
   var jsondata = JSON.parse(data)
   console.log(jsondata);

   // get length meshes
   var qtyMeshes = jsondata.meshes.length
   console.log('amount of meshes: ' + qtyMeshes)
   // get 

});

// validate the format

