/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview openCV contour blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_contour');  // Deprecated
goog.provide('Blockly.Constants.opencv_contour');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "find_contour",
    "message0": "Find all contour lines on image:  %1 mode: %2 %3 method:  %4",
    "args0": [
      {
        "type": "input_value",
        "name": "image"
      },
      {
        "type": "field_dropdown",
        "name": "mode",
        "options": [
          [
            "external line only",
            "cv2.RETR_EXTERNAL"
          ],
          [
            "all lines(no hierachy)",
            "cv2.RETR_LIST"
          ],
          [
            "all lines(2 hierachy)",
            "cv2.RETR_CCOMP"
          ],
          [
            "all lines(all hierachy)",
            "cv2.RETR_TREE"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "method",
        "options": [
          [
            "save all contours points",
            "cv2.CHAIN_APPROX_NONE"
          ],
          [
            "save only effective points",
            "cv2.CHAIN_APPROX_SIMPLE"
          ],
          [
            "using TC89_l1 algorithm",
            "cv2.CHAIN_APPROX_TC89_L1"
          ],
          [
            "using TC89_KC05 algorithm",
            "cv2.CHAIN_APPROX_TC89_KC05"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "find_contour_v3",
    "message0": "(OpenCV 3.0) Find all contour lines on image:  %1 mode: %2 %3 method:  %4",
    "args0": [
        {
        "type": "input_value",
        "name": "image"
        },
        {
        "type": "field_dropdown",
        "name": "mode",
        "options": [
            [
            "external line only",
            "cv2.RETR_EXTERNAL"
            ],
            [
            "all lines(no hierachy)",
            "cv2.RETR_LIST"
            ],
            [
            "all lines(2 hierachy)",
            "cv2.RETR_CCOMP"
            ],
            [
            "all lines(all hierachy)",
            "cv2.RETR_TREE"
            ]
        ]
        },
        {
        "type": "input_dummy"
        },
        {
        "type": "field_dropdown",
        "name": "method",
        "options": [
            [
            "save all contours points",
            "cv2.CHAIN_APPROX_NONE"
            ],
            [
            "save only effective points",
            "cv2.CHAIN_APPROX_SIMPLE"
            ],
            [
            "using TC89_l1 algorithm",
            "cv2.CHAIN_APPROX_TC89_L1"
            ],
            [
            "using TC89_KC05 algorithm",
            "cv2.CHAIN_APPROX_TC89_KC05"
            ]
        ]
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "get_len_cont_list",
    "message0": "Get length of contour lines list: %1",
    "args0": [
      {
        "type": "input_value",
        "name": "length"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "draw_contour",
    "message0": "On image: %1 draw contour line of index %3 from contour list %2 color: %4 thick: %5",
    "args0": [
      {
        "type": "input_value",
        "name": "image"
      },
      {
        "type": "input_value",
        "name": "contour"
      },
      {
        "type": "field_number",
        "name": "index",
        "value": -1,
        "min": -1,
        "precision": 1
      },
      {
        "type": "field_colour",
        "name": "color",
        "colour": "#ff0000"
      },
      {
        "type": "field_number",
        "name": "thick",
        "value": 1,
        "min": 1,
        "max": 10,
        "precision": 1
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "get_cont_line",
    "message0": "Get contour line from contour line list:  %1 index: %2",
    "args0": [
      {
        "type": "input_value",
        "name": "contour"
      },
      {
        "type": "field_number",
        "name": "NAME",
        "value": -1,
        "min": -1,
        "max": 100,
        "precision": 1
      }
    ],
    "output": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "get_contour_center",
    "message0": "Get center of contour line X: %1 Y: %2 %3 contour line: %4",
    "args0": [
      {
        "type": "field_variable",
        "name": "X",
        "variable": "cx"
      },
      {
        "type": "field_variable",
        "name": "Y",
        "variable": "cy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "contour"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "draw_bounding_rect",
    "message0": "Draw contour line bounding rectangle x: %1 y: %2 w: %3 h: %4 %5 contour line: %6",
    "args0": [
      {
        "type": "field_variable",
        "name": "X",
        "variable": "x"
      },
      {
        "type": "field_variable",
        "name": "Y",
        "variable": "y"
      },
      {
        "type": "field_variable",
        "name": "W",
        "variable": "w"
      },
      {
        "type": "field_variable",
        "name": "H",
        "variable": "h"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "contour"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "draw_min_circle",
    "message0": "Draw contour line minimum enclosing circle x: %1 y: %2 radius: %3 %4 contour line: %5",
    "args0": [
      {
        "type": "field_variable",
        "name": "X",
        "variable": "x"
      },
      {
        "type": "field_variable",
        "name": "Y",
        "variable": "y"
      },
      {
        "type": "field_variable",
        "name": "RAD",
        "variable": "radius"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "cont"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  }
]);  // END JSON EXTRACT (Do not delete this comment.)