(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("AI",
{ "compressionlevel":-1,
 "height":7,
 "infinite":false,
 "layers":[
        {
         "data":[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         "height":7,
         "id":1,
         "name":"BackGround",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }, 
        {
         "data":[4, 0, 4, 0, 4, 0, 0, 0, 4, 4, 0, 4,
            4, 0, 4, 0, 4, 4, 4, 0, 4, 0, 0, 4,
            4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 0, 4,
            0, 4, 0, 0, 4, 0, 4, 0, 4, 0, 0, 4,
            0, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4,
            0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0,
            4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4],
         "height":7,
         "id":2,
         "name":"Path",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":7,
         "id":3,
         "name":"Start",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":7,
         "id":4,
         "name":"End",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":7,
         "id":5,
         "name":"Walk",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":6,
         "name":"Object Layer 1",
         "objects":[
                {
                 "height":0,
                 "id":1,
                 "name":"",
                 "polyline":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":-53,
                         "y":208.5
                        }, 
                        {
                         "x":112.333333333333,
                         "y":208.5
                        }, 
                        {
                         "x":112.333333333333,
                         "y":144.777506112469
                        }, 
                        {
                         "x":144,
                         "y":144.777506112469
                        }, 
                        {
                         "x":144,
                         "y":47.919315403423
                        }, 
                        {
                         "x":207.833333333333,
                         "y":47.919315403423
                        }, 
                        {
                         "x":207.833333333333,
                         "y":79.5256723716382
                        }, 
                        {
                         "x":271.666666666667,
                         "y":79.5256723716382
                        }, 
                        {
                         "x":271.166666666667,
                         "y":144.169519152404
                        }, 
                        {
                         "x":366.666666666667,
                         "y":143.659739201304
                        }, 
                        {
                         "x":367.5,
                         "y":15.2933985330073
                        },
                    
                        {
                         "x":418,
                         "y":15.2933985330073
                        }],
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":0,
                 "x":0,
                 "y":0
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":7,
 "nextobjectid":2,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.1",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"tileset.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.10",
 "width":12
});