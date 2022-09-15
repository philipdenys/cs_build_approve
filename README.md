# cs_build_approve
User (builder) sends in a .glb file and system approves the build based on the requirements.

## REQUIREMENTS
[source cs docs](https://docs.cardastation.com/home/scenes/create-custom-scenes/3d-models)

## APPROACH
1. read .glb file and extract the json data
2. check amount meshes -> must be 30 or less.
3. check dimensions -> is structure within the required measurements? -> 1 plot(15mx15m) build must be 12mx12m

## DEPENDANCIES
 - nodejs
 - vscode extensions for debugging:
   - [gltf-vscode](https://marketplace.visualstudio.com/items?itemName=cesium.gltf-vscode)
   - 

# VERSION

1.0.0 Read out a .glb file:
- use node to check if file has json
- aim to extract data to auto approve a 3D build