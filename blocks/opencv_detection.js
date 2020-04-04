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
 * @fileoverview openCV basic blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_detection');  // Deprecated
goog.provide('Blockly.Constants.opencv_detection');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "get_cascade_class",
    "message0": "Get Haar cascade classifier %1 %2 save to %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "classifier",
        "options": [
          [
            "face",
            "FACE"
          ],
          [
            "traffic signal",
            "TRAFFIC"
          ],
          [
            "pedestrian",
            "PEDESTRIAN"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "HAAR",
        "variable": "haar_class"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "haar_detect_object",
    "message0": "Detect object %1  from image: %3 using Haar cascade: %2 save to %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "HAAR_CLASS"
      },
      {
        "type": "input_value",
        "name": "HAAR_IMAGE"
      },
      {
        "type": "field_variable",
        "name": "DETECT_OBJ",
        "variable": "detected_object"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "draw_enclosing_rect",
    "message0": "Draw enclosing rectangle for %1 detected object: %2 on image: %3 color: %4 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "DETECT_OBJECT"
      },
      {
        "type": "input_value",
        "name": "IMAGE"
      },
      {
        "type": "field_colour",
        "name": "COLOR",
        "colour": "#ff0000"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "LOOP"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
  }

]);  // END JSON EXTRACT (Do not delete this comment.)