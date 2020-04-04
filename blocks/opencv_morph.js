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
 * @fileoverview openCV imagemorphing blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_morph');  // Deprecated
goog.provide('Blockly.Constants.opencv_morph');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "get_struct_element",
        "message0": "Get kernel (structured element) %1 element size: %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "elelment",
            "options": [
              [
                "rectangle",
                "cv2.MORPH_RECT"
              ],
              [
                "ellipse",
                "cv2.MORPH_ELLIPSE"
              ],
              [
                "cross",
                "cv2.MORPH_CROSS"
              ]
            ]
          },
          {
            "type": "field_number",
            "name": "NAME",
            "value": 5,
            "min": 1,
            "max": 10,
            "precision": 1
          }
        ],
        "output": null,
        "colour": 200,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "dilation",
        "message0": "Fill up small hole of image: %1 using kernel: %2 fill up count: %3",
        "args0": [
          {
            "type": "input_value",
            "name": "source"
          },
          {
            "type": "input_value",
            "name": "kernel"
          },
          {
            "type": "field_number",
            "name": "count",
            "value": 1,
            "min": 1,
            "max": 5,
            "precision": 1
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 200,
        "tooltip": "",
        "helpUrl": ""
    },
    {
      "type": "erode",
      "message0": "Remove small object of image: %1 using kernel: %2 run count: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "source"
        },
        {
          "type": "input_value",
          "name": "kernel"
        },
        {
          "type": "field_number",
          "name": "iteration",
          "value": 1,
          "min": 1,
          "max": 5,
          "precision": 1
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 200,
      "tooltip": "",
      "helpUrl": ""
    }
]);