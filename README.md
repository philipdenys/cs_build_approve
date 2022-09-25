# cs_build_approve
User (builder) sends in a .glb file and system approves the build based on the requirements.

```node
$ node index.js
```

## REQUIREMENTS
[source cs docs](https://docs.cardastation.com/home/scenes/create-custom-scenes/3d-models)

## APPROACH
- [x] read .glb file and extract the json data
- [x] check amount meshes -> must be 30 or less.
- [ ] check dimensions -> is structure within the required measurements? -> 1 plot(15mx15m) build must be 12mx12m

## DEPENDANCIES/TOOLS/DOCS
 - nodejs
 - vscode extensions for debugging:
   - [gltf-vscode](https://marketplace.visualstudio.com/items?itemName=cesium.gltf-vscode)
   - [gltf-import-export](https://www.npmjs.com/package/gltf-import-export)
   - [The glTF 2.0 Specification](https://github.com/KhronosGroup/glTF/tree/main/specification/2.0)
   - [glTF-Transform](https://gltf-transform.donmccurdy.com/cli.html)
- https://dart.dev/get-dart
- 

# VERSION

1.0.2 return the amount of triangles
- [ ] get the triangles data (gltf-validator)
- [ ] 

1.0.1 return important parameters
- [x] amount of meshes
- [x] if has camera (not allowed)
- [x] if has lighting (not allowed)

1.0.0 Read out a .glb file:
- use node to check if file has json
- aim to extract data to auto approve a 3D build