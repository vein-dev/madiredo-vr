(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_B2C03BBB_A5C5_4E3A_41DB_0FFCE60ADD36], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist,this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_B2C02BBB_A5C5_4E3A_41E0_E0A61707EE37,this.Button_B2C0EBC1_A5C5_4E47_41D8_CCEF7D3E0E14].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_AF95B013_A345_59CA_41D1_C39DEABA0687"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.Button_B2C00BBB_A5C5_4E3A_41DA_16A41F384C0C",
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "buttonToggleHotspots": "this.Button_B2C01BC1_A5C5_4E47_41E2_4D54B5B47611",
 "buttonToggleGyroscope": "this.Button_B2C03BBB_A5C5_4E3A_41DB_0FFCE60ADD36",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_CE0A1686_C501_0136_41DB_3A8429491C8F",
   "camera": "this.panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD",
   "camera": "this.panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE010442_C501_012E_41BD_42623DFCA55A",
   "camera": "this.panorama_CE010442_C501_012E_41BD_42623DFCA55A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE0DB88C_C501_013A_41D7_8CE335F95930",
   "camera": "this.panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB",
   "camera": "this.panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1",
   "camera": "this.panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC",
   "camera": "this.panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC",
   "camera": "this.panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0",
   "camera": "this.panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1",
   "camera": "this.panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_CE0DB88C_C501_013A_41D7_8CE335F95930",
 "class": "Panorama",
 "label": "DENAH TELAGA MADIREDO",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "duration": 1000,
 "id": "effect_B0F9B51A_A5C4_DBFA_41E0_57D536525ED7",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB",
 "class": "Panorama",
 "label": "AREAL PERTANIAN",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CE010442_C501_012E_41BD_42623DFCA55A_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_CE010442_C501_012E_41BD_42623DFCA55A",
 "class": "Panorama",
 "label": "JALAN MENUJU TELAGA MADIREDO",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_CE010442_C501_012E_41BD_42623DFCA55A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_CE0A1686_C501_0136_41DB_3A8429491C8F",
 "class": "Panorama",
 "label": "GERBANG TELAGA MADIREDO",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC",
 "class": "Panorama",
 "label": "CAFE ARTISTIK",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_CE0A1686_C501_0136_41DB_3A8429491C8F",
   "camera": "this.panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD",
   "camera": "this.panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE010442_C501_012E_41BD_42623DFCA55A",
   "camera": "this.panorama_CE010442_C501_012E_41BD_42623DFCA55A_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE0DB88C_C501_013A_41D7_8CE335F95930",
   "camera": "this.panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB",
   "camera": "this.panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1",
   "camera": "this.panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC",
   "camera": "this.panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC",
   "camera": "this.panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0",
   "camera": "this.panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1",
   "camera": "this.panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD",
   "camera": "this.panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_CE0A1686_C501_0136_41DB_3A8429491C8F",
   "camera": "this.panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD",
   "camera": "this.panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE010442_C501_012E_41BD_42623DFCA55A",
   "camera": "this.panorama_CE010442_C501_012E_41BD_42623DFCA55A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE0DB88C_C501_013A_41D7_8CE335F95930",
   "camera": "this.panorama_CE0DB88C_C501_013A_41D7_8CE335F95930_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB",
   "camera": "this.panorama_CEC6CD04_C501_032A_41D3_92ABECED09AB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1",
   "camera": "this.panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC",
   "camera": "this.panorama_CE022AC0_C501_012A_41E8_19C3E1CFD1FC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC",
   "camera": "this.panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0",
   "camera": "this.panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1",
   "camera": "this.panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD",
   "camera": "this.panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_B253B30E_A5C3_7FDA_41D8_DB27CBA99635",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_CFFA74E6_C501_02F6_41BC_E06E914C10D1",
 "class": "Panorama",
 "label": "SAND PLAYGROUND",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_CE047EFF_C501_1ED6_41E2_B3D2A7DFD3AD",
 "class": "Panorama",
 "label": "LOKET PEMBAYARAN DAN TEMPAT PARKIR",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "duration": 1000,
 "id": "effect_B0F9851A_A5C4_DBFA_41E2_3E5F709AB3B3",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_CBE5300B_C503_013E_41D4_66856BA83051",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_CE0EC9EB_C501_02FE_41E4_EA5FE52921B1",
 "class": "Panorama",
 "label": "PEMANDIAN",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "duration": 1000,
 "id": "effect_CBE5100B_C503_013E_41E5_4C6949BCB675",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_CE062749_C501_0F3A_41DB_4E01676DBEF0",
 "class": "Panorama",
 "label": "PEMANDIAN AIR PANAS",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90,
  "stereographicFactor": 1
 },
 "id": "panorama_CE0A1686_C501_0136_41DB_3A8429491C8F_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_B253A30E_A5C3_7FDA_41D1_1D242B0CBDE6",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_CE0CFC7D_C501_01DA_41E3_C9CFEB0AF0AD",
 "class": "Panorama",
 "label": "PATUNG TELAGA MADIREDO",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_CE0FE1C0_C501_032A_41BC_DC094606A3FC",
 "class": "Panorama",
 "label": "KOLAM TERAPI",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_AF95B013_A345_59CA_41D1_C39DEABA0687",
 "left": "0%",
 "children": [
  "this.Container_AA546A9E_A543_4EFA_41D8_B03343CDD6D6",
  "this.Container_ABDDC9C0_A544_CA46_41BD_D0A91ED5C10C",
  "this.Container_B59162AE_A544_BEDD_41CA_4DF3F9539A61"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "main"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "Button_B2C00BBB_A5C5_4E3A_41DA_16A41F384C0C",
 "backgroundOpacity": 0,
 "width": 60,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "gap": 5,
 "iconHeight": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 60,
 "pressedIconWidth": 30,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "pressedIconHeight": 30,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontSize": 12,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "pressedIconURL": "skin/Button_B2C00BBB_A5C5_4E3A_41DA_16A41F384C0C_pressed.png",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "iconURL": "skin/Button_B2C00BBB_A5C5_4E3A_41DA_16A41F384C0C.png",
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button Settings Mute"
 },
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "Button_B2C02BBB_A5C5_4E3A_41E0_E0A61707EE37",
 "backgroundOpacity": 0,
 "width": 60,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "gap": 5,
 "iconHeight": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 60,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#F7931E"
 ],
 "fontSize": 12,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "pressedIconURL": "skin/Button_B2C02BBB_A5C5_4E3A_41E0_E0A61707EE37_pressed.png",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "iconURL": "skin/Button_B2C02BBB_A5C5_4E3A_41E0_E0A61707EE37.png",
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button settings VR"
 },
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "Button_B2C0EBC1_A5C5_4E47_41D8_CCEF7D3E0E14",
 "backgroundOpacity": 0,
 "width": 60,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "gap": 5,
 "iconHeight": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 60,
 "pressedIconWidth": 30,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "pressedIconHeight": 30,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontSize": 12,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "pressedIconURL": "skin/Button_B2C0EBC1_A5C5_4E47_41D8_CCEF7D3E0E14_pressed.png",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "iconURL": "skin/Button_B2C0EBC1_A5C5_4E47_41D8_CCEF7D3E0E14.png",
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "Button_B2C01BC1_A5C5_4E47_41E2_4D54B5B47611",
 "backgroundOpacity": 0,
 "width": 60,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "gap": 5,
 "iconHeight": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 60,
 "pressedIconWidth": 30,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "pressedIconHeight": 30,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontSize": 12,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "pressedIconURL": "skin/Button_B2C01BC1_A5C5_4E47_41E2_4D54B5B47611_pressed.png",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "iconURL": "skin/Button_B2C01BC1_A5C5_4E47_41E2_4D54B5B47611.png",
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button Settings HS"
 },
 "rollOverIconHeight": 30,
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "rollOverIconWidth": 30,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "Button_B2C03BBB_A5C5_4E3A_41DB_0FFCE60ADD36",
 "backgroundOpacity": 0,
 "width": 60,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "gap": 5,
 "iconHeight": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 60,
 "pressedIconWidth": 30,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "pressedIconHeight": 30,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontSize": 12,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "pressedIconURL": "skin/Button_B2C03BBB_A5C5_4E3A_41DB_0FFCE60ADD36_pressed.png",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "iconURL": "skin/Button_B2C03BBB_A5C5_4E3A_41DB_0FFCE60ADD36.png",
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button Settings Gyro"
 },
 "rollOverIconHeight": 30,
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "rollOverIconWidth": 30,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_AA546A9E_A543_4EFA_41D8_B03343CDD6D6",
 "left": "0%",
 "children": [
  "this.Container_AB11FF15_A55F_47CE_41D5_2FFC3BA74293",
  "this.Container_AB22061B_A55C_F9FB_41DE_FB3A0C7B0163",
  "this.Container_ABE3B921_A55C_CBC7_41E2_9A30CBA98350"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "6%",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "bar"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_ABDDC9C0_A544_CA46_41BD_D0A91ED5C10C",
 "left": "0%",
 "children": [
  "this.Container_B4ED032F_A543_5FD9_41E0_56F11C5DD92E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "6%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "nav"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_B59162AE_A544_BEDD_41CA_4DF3F9539A61",
 "left": "0%",
 "children": [
  "this.TabPanel_B5C9D026_A547_59CA_41B9_7E3048139564",
  "this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693",
  "this.Container_B2C0FBC1_A5C5_4E47_41E1_0E38BA9CB9F0"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "5.95%",
 "paddingRight": 0,
 "height": "88%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "popup"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_AB11FF15_A55F_47CE_41D5_2FFC3BA74293",
 "backgroundOpacity": 1,
 "children": [
  "this.IconButton_B5EBCC88_A543_CAC6_41D3_CBC4BA488AE0"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "20%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "right"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "Container_AB22061B_A55C_F9FB_41DE_FB3A0C7B0163",
 "left": "20%",
 "children": [
  "this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "right": "20%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "drop"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_ABE3B921_A55C_CBC7_41E2_9A30CBA98350",
 "left": "0%",
 "children": [
  "this.IconButton_B544D606_A54C_D9CA_41BE_2EF84E67F6C3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "width": "20%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_B4ED032F_A543_5FD9_41E0_56F11C5DD92E",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_B5C682D5_A545_DE4F_41D3_D3FCA7C11DA6"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "20%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container13487"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "tabsRollOverBackgroundColorRatios": [
  0
 ],
 "id": "TabPanel_B5C9D026_A547_59CA_41B9_7E3048139564",
 "left": "10%",
 "tabsPosition": "top",
 "selectedTabBackgroundColor": [
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "tabsAlign": "normal",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "selectedTabFontSize": "16px",
 "selectedTabBackgroundOpacity": 1,
 "creationPolicy": "inAdvance",
 "overflow": "visible",
 "tabsFontFamily": "Montserrat",
 "minHeight": 1,
 "borderColor": "#FFFFFF",
 "pages": [
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "backgroundOpacity": 1,
   "children": [
    "this.HTMLText_BBF93F09_A5C3_47C6_41E0_E421354CB13D"
   ],
   "scrollBarVisible": "rollOver",
   "overflow": "scroll",
   "width": "100%",
   "scrollBarMargin": 2,
   "borderRadius": 0,
   "backgroundColorRatios": [
    0
   ],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 10,
   "paddingRight": 0,
   "backgroundColor": [
    "#000000"
   ],
   "verticalAlign": "top",
   "minWidth": 20,
   "layout": "absolute",
   "height": "100%",
   "class": "TabPanelPage",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "paddingLeft": 0,
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "informasi"
   },
   "shadow": false,
   "label": "Profil"
  },
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "backgroundOpacity": 1,
   "children": [
    "this.HTMLText_BB700347_A545_BE4B_41E0_B18CD9FB2819",
    "this.WebFrame_BB3F29DD_A545_CA7E_41E3_1F765675DC17"
   ],
   "scrollBarVisible": "rollOver",
   "overflow": "scroll",
   "width": "100%",
   "scrollBarMargin": 2,
   "borderRadius": 0,
   "backgroundColorRatios": [
    0
   ],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 10,
   "paddingRight": 0,
   "backgroundColor": [
    "#000000"
   ],
   "verticalAlign": "top",
   "minWidth": 20,
   "layout": "absolute",
   "height": "100%",
   "class": "TabPanelPage",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "paddingLeft": 0,
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "lokasi"
   },
   "shadow": false,
   "label": "Lokasi"
  },
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "backgroundOpacity": 1,
   "children": [
    "this.HTMLText_84F8F2E7_A544_DE4B_41DF_B1545DD0F4EC"
   ],
   "scrollBarVisible": "rollOver",
   "overflow": "scroll",
   "width": "100%",
   "scrollBarMargin": 2,
   "borderRadius": 0,
   "backgroundColorRatios": [
    0
   ],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 10,
   "paddingRight": 0,
   "backgroundColor": [
    "#000000"
   ],
   "verticalAlign": "top",
   "minWidth": 20,
   "layout": "absolute",
   "height": "100%",
   "class": "TabPanelPage",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "paddingLeft": 0,
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "tentang"
   },
   "shadow": false,
   "label": "Tentang"
  }
 ],
 "tabsFontColor": "#FFFFFF",
 "top": "0%",
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "tabsRollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "pagePaddingBottom": 0,
 "tabsBackgroundColor": [
  "#000000"
 ],
 "tabsTextDecoration": "none",
 "tabsFontWeight": "normal",
 "class": "TabPanel",
 "tabsBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "tabsFontStyle": "normal",
 "paddingBottom": 0,
 "pagePaddingLeft": 0,
 "borderSize": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "selectedTabFontWeight": "bold",
 "scrollBarColor": "#000000",
 "pagePaddingRight": 0,
 "data": {
  "name": "TabPanel74479"
 },
 "selectedTabBackgroundColorRatios": [
  0
 ],
 "tabsFontSize": "16px",
 "shadow": false,
 "visible": false,
 "tabsRollOverFontWeight": "normal",
 "selectedTabFontColor": "#000000",
 "tabsRollOverFontColor": "#000000",
 "tabsRollOverFontSize": "16px",
 "tabsBackgroundOpacity": 1,
 "pagePaddingTop": 0,
 "tabsSize": 40
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693",
 "left": "10%",
 "itemMinHeight": 50,
 "itemBorderRadius": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 30,
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "class": "ThumbnailGrid",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "backgroundColorDirection": "vertical",
 "itemThumbnailShadowOpacity": 0.27,
 "rollOverItemLabelFontWeight": "bold",
 "scrollBarColor": "#FFFFFF",
 "itemHeight": 120,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#FFCC00",
 "scrollBarOpacity": 0.5,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": "10px",
 "itemThumbnailShadowBlurRadius": 8,
 "borderRadius": 5,
 "itemLabelGap": 8,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "top": "5%",
 "itemThumbnailShadowVerticalLength": 3,
 "bottom": "5%",
 "itemThumbnailWidth": 100,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 13,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 150,
 "paddingLeft": 30,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList35762"
 },
 "visible": false,
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontFamily": "Arial"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_B2C0FBC1_A5C5_4E47_41E1_0E38BA9CB9F0",
 "left": "20%",
 "children": [
  "this.Button_B2C02BBB_A5C5_4E3A_41E0_E0A61707EE37",
  "this.Button_B2C03BBB_A5C5_4E3A_41DB_0FFCE60ADD36",
  "this.Button_B2C00BBB_A5C5_4E3A_41DA_16A41F384C0C",
  "this.Button_B2C01BC1_A5C5_4E47_41E2_4D54B5B47611",
  "this.Button_B2C0EBC1_A5C5_4E47_41D8_CCEF7D3E0E14"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "20%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "minHeight": 1,
 "top": "90%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 64,
 "id": "IconButton_B5EBCC88_A543_CAC6_41D3_CBC4BA488AE0",
 "left": "25%",
 "maxHeight": 64,
 "backgroundOpacity": 0,
 "right": "25%",
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 1,
 "top": "20%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "20%",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "click": "if(!this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693.get('visible')){ this.setComponentVisibility(this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693, true, 0, this.effect_CBE5300B_C503_013E_41D4_66856BA83051, 'showEffect', false) } else { this.setComponentVisibility(this.ThumbnailList_B0C42D1F_A5BD_CBFA_41C8_FCA724F84693, false, 0, this.effect_CBE5100B_C503_013E_41E5_4C6949BCB675, 'hideEffect', false) }",
 "iconURL": "skin/IconButton_B5EBCC88_A543_CAC6_41D3_CBC4BA488AE0.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton10308"
 },
 "cursor": "hand"
},
{
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "height": "100%",
 "id": "DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A",
 "backgroundOpacity": 1,
 "width": "100%",
 "popUpBackgroundOpacity": 1,
 "right": "-0.02%",
 "popUpFontColor": "#000000",
 "rollOverPopUpBackgroundColor": "#FFFFFF",
 "borderRadius": 4,
 "popUpShadow": false,
 "backgroundColorRatios": [
  1
 ],
 "propagateClick": false,
 "minHeight": 20,
 "arrowColor": "#FFFFFF",
 "top": "0%",
 "popUpPaddingTop": 20,
 "paddingRight": 5,
 "popUpShadowSpread": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.DropDown_AB86841D_A543_B9F9_41CA_BA0C02B3B86A_playlist",
 "borderColor": "#FFFFFF",
 "minWidth": 200,
 "selectedPopUpFontColor": "#FFFFFF",
 "popUpShadowBlurRadius": 6,
 "fontSize": 14,
 "popUpShadowOpacity": 0,
 "borderSize": 1,
 "class": "DropDown",
 "popUpBorderRadius": 0,
 "popUpPaddingLeft": 20,
 "popUpGap": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "fontStyle": "normal",
 "arrowBeforeLabel": false,
 "popUpShadowColor": "#000000",
 "paddingLeft": 5,
 "popUpPaddingBottom": 20,
 "shadow": false,
 "selectedPopUpBackgroundColor": "#333333",
 "fontWeight": "bold",
 "textDecoration": "none",
 "popUpPaddingRight": 20,
 "popUpBackgroundColor": "#999999",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "DropDown1204"
 }
},
{
 "horizontalAlign": "center",
 "maxWidth": 64,
 "id": "IconButton_B544D606_A54C_D9CA_41BE_2EF84E67F6C3",
 "left": "25%",
 "maxHeight": 64,
 "backgroundOpacity": 0,
 "right": "25%",
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 1,
 "top": "20%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "20%",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "click": "if(!this.Container_B2C0FBC1_A5C5_4E47_41E1_0E38BA9CB9F0.get('visible')){ this.setComponentVisibility(this.Container_B2C0FBC1_A5C5_4E47_41E1_0E38BA9CB9F0, true, 0, this.effect_B253A30E_A5C3_7FDA_41D1_1D242B0CBDE6, 'showEffect', false) } else { this.setComponentVisibility(this.Container_B2C0FBC1_A5C5_4E47_41E1_0E38BA9CB9F0, false, 0, this.effect_B253B30E_A5C3_7FDA_41D8_DB27CBA99635, 'hideEffect', false) }",
 "iconURL": "skin/IconButton_B544D606_A54C_D9CA_41BE_2EF84E67F6C3.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton11827"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 64,
 "id": "IconButton_B5C682D5_A545_DE4F_41D3_D3FCA7C11DA6",
 "left": "25%",
 "maxHeight": 64,
 "backgroundOpacity": 0,
 "right": "25%",
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 1,
 "top": "20%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "20%",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_B5C682D5_A545_DE4F_41D3_D3FCA7C11DA6_pressed.png",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "click": "if(!this.TabPanel_B5C9D026_A547_59CA_41B9_7E3048139564.get('visible')){ this.setComponentVisibility(this.TabPanel_B5C9D026_A547_59CA_41B9_7E3048139564, true, 0, this.effect_B0F9851A_A5C4_DBFA_41E2_3E5F709AB3B3, 'showEffect', false) } else { this.setComponentVisibility(this.TabPanel_B5C9D026_A547_59CA_41B9_7E3048139564, false, 0, this.effect_B0F9B51A_A5C4_DBFA_41E0_57D536525ED7, 'hideEffect', false) }",
 "iconURL": "skin/IconButton_B5C682D5_A545_DE4F_41D3_D3FCA7C11DA6.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton14286"
 },
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_BBF93F09_A5C3_47C6_41E0_E421354CB13D",
 "left": "0%",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 20,
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "paddingTop": 20,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:30px;font-family:'Montserrat';\"><B>TELAGA MADIREDO</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:24px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:21px;font-family:'Montserrat';\">Telaga Madiredo merupakan agrowisata di Desa Madiredo, Kecamatan Pujon, Kabupaten Malang, Jawa Timur yang menawarkan pengalaman off grid travelling tak terlupakan. Agrowisata Telaga Madiredo bukan sekadar tempat wisata biasa karena di sini, pengunjung diajak untuk menyelami kehidupan pedesaan yang autentik, berbaur dengan alam, dan menemukan kedamaian yang jauh dari hiruk pikuk kehidupan modern.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:21px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:21px;font-family:'Montserrat';\">Pemandangan alam yang memukau menjadi daya tarik utama Agrowisata Telaga Madiredo. Telaga Madiredo, danau alami dengan air jernih dikelilingi pepohonan rindang, menjadi ikon wisata ini. Lebih dari keindahan alam, Agrowisata Telaga Madiredo menawarkan pengalaman budaya yang kaya. Pengunjung dapat belajar tentang budidaya tanaman, peternakan, dan pengolahan hasil panen. Bagi pecinta off grid travelling, Agrowisata Telaga Madiredo adalah surga tersembunyi. Di sini, Anda dapat berkemah di bawah bintang-bintang, membakar api unggun, dan menikmati suasana malam yang tenang.</SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText53815"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_BB700347_A545_BE4B_41E0_B18CD9FB2819",
 "left": "0%",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 20,
 "height": "20%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "paddingTop": 20,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:26px;font-family:'Montserrat';\"><B>AGROWISATA TELAGA MADIREDO</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:21px;font-family:'Montserrat';\">KABUPATEN MALANG, JAWA TIMUR</SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText53815"
 },
 "shadow": false
},
{
 "id": "WebFrame_BB3F29DD_A545_CA7E_41E3_1F765675DC17",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "insetBorder": false,
 "url": "https://maps.google.com/maps?output=embed&center=-7.8249722,112.4598137&z=17&q=Agrowisata+Telaga+Madiredo",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "80%",
 "borderSize": 0,
 "class": "WebFrame",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollEnabled": true,
 "paddingLeft": 0,
 "data": {
  "name": "WebFrame31220"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_84F8F2E7_A544_DE4B_41DF_B1545DD0F4EC",
 "left": "0%",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 20,
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "paddingTop": 20,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:26px;font-family:'Montserrat';\"><B>AGROWISATA TELAGA MADIREDO</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:21px;font-family:'Montserrat';\">KABUPATEN MALANG, JAWA TIMUR</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:21px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:26px;font-family:'Montserrat';\"><B>TIM PENGEMBANG</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:21px;font-family:'Montserrat';\">Yunika Dwi Pramudita</SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:21px;font-family:'Montserrat';\">Jordi Dermawan</SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:21px;font-family:'Montserrat';\">Robby Hilmi Rachmadian </SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:21px;font-family:'Montserrat';\">Ifadia Lailia Elissa</SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:21px;font-family:'Montserrat';\">Alvito</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:21px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:26px;font-family:'Montserrat';\"><B>UNIVERSITAS NEGERI MALANG</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:21px;font-family:'Montserrat';\">Copyright 2024</SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText53815"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scripts": {
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "existsKey": function(key){  return key in window; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "buttonToggleFullscreen": [
  "this.Button_B2C02BBB_A5C5_4E3A_41E0_E0A61707EE37",
  "this.Button_B2C0EBC1_A5C5_4E47_41D8_CCEF7D3E0E14"
 ],
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player781"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
