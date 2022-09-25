// gltf-vscode converted the .glb file to .gltf
const fs = require('fs');
const validator = require('gltf-validator');
// const fetch = require('node-fetch');



let baseStyles = [
   "color: #fff",
   "background-color: red",
   "padding: 2px 4px",
   "border-radius: 2px"
].join(";");

var arguments = process.argv;
var gtlffile = arguments[2]

// console.log(arguments.length)

// add file location to the node parameter in the terminal
// node index.js ./cardano.glb
// console.log(typeof gtlffile)
// check if the file is passed in the terminal
if (arguments.length = 3) {
   // console.log("Usage: " + __filename + " " + gtlffile);
   // process.exit();
   fs.readFile(gtlffile, 'utf8', function (err, data) {
      if (err) {
         return console.log(err);
      }
      //console.log(typeof data);

      // convert string to JSON
      var jsondata = JSON.parse(data)
      // console.log(jsondata);

      // get length meshes
      var qtyMeshes = jsondata.meshes.length
      console.log('amount of meshes: ' + qtyMeshes)



      // get length cameras
      var qtyCameras = jsondata.cameras.length
      console.log('amount of cameras: ' + qtyCameras)

      // get length lights
      var qtyLights = jsondata.extensions.KHR_lights_punctual.lights.length
      console.log('amount of lights: ' + qtyLights)

      // get length triangles
      // var qtyTriangles = jsondata.meshes[0].primitives[0].attributes.TANGENT.count
      // console.log('amount of triangles: ' + qtyTriangles)


      // fetch(gtlffile)
      //    .then((response) => response.arrayBuffer())
      //    .then((asset) => validator.validateBytes(new Uint8Array(asset)))
      //    .then((report) => console.info('Validation succeeded: ', report))
      //    .catch((error) => console.error('Validation failed: ', error));

      const asset = fs.readFileSync(gtlffile);

      validator.validateBytes(new Uint8Array(asset))
         // .then((report) => console.info('Validation succeeded: ', report))
         .then((report) => console.info('amount of triangles: ', report.info.totalTriangleCount))
         .catch((error) => console.error('Validation failed: ', error));

   });

   // validate the format



} else {
   console.log('file location is not passed in the terminal')
}