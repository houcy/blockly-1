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

goog.provide('Blockly.Blocks.opencv_draw');  // Deprecated
goog.provide('Blockly.Constants.opencv_draw');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
    "type": "draw_line",
    "message0": "Draw line on image %1 start: %2 end: %3 color: %4 %5 thick: %6",
    "args0": [
        {
        "type": "input_value",
        "name": "image"
        },
        {
        "type": "input_value",
        "name": "start"
        },
        {
        "type": "input_value",
        "name": "end"
        },
        {
        "type": "field_colour",
        "name": "color",
        "colour": "#ff0000"
        },
        {
        "type": "input_dummy"
        },
        {
        "type": "field_number",
        "name": "thick",
        "value": 1,
        "min": 1,
        "max": 5,
        "precision": 1
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
        "type": "draw_rect",
        "message0": "Draw rectangle on image %1 start: %2 end: %3 color: %4 %5 thick: %6",
        "args0": [
          {
            "type": "input_value",
            "name": "image"
          },
          {
            "type": "input_value",
            "name": "start"
          },
          {
            "type": "input_value",
            "name": "end:"
          },
          {
            "type": "field_colour",
            "name": "color",
            "colour": "#ff0000"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_number",
            "name": "thick",
            "value": 1,
            "min": 1,
            "max": 5,
            "precision": 1
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
        "type": "draw_circle",
        "message0": "Draw circle on image %1 center: %2 radian: %3 color: %4 %5 thick: %6",
        "args0": [
          {
            "type": "input_value",
            "name": "image"
          },
          {
            "type": "input_value",
            "name": "center"
          },
          {
            "type": "input_value",
            "name": "radian"
          },
          {
            "type": "field_colour",
            "name": "color",
            "colour": "#ff0000"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_number",
            "name": "thick",
            "value": 1,
            "min": 1,
            "max": 5,
            "precision": 1
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
        "type": "start",
        "message0": "start: %1 , %2",
        "args0": [
          {
            "type": "field_number",
            "name": "x",
            "value": 0,
            "min": 0,
            "precision": 1
          },
          {
            "type": "field_number",
            "name": "y",
            "value": 0,
            "min": 0,
            "precision": 1
          }
        ],
        "output": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "end",
        "message0": "end: %1 , %2",
        "args0": [
          {
            "type": "field_number",
            "name": "x",
            "value": 0,
            "min": 0,
            "precision": 1
          },
          {
            "type": "field_number",
            "name": "y",
            "value": 0,
            "min": 0,
            "precision": 1
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "radian",
        "message0": "radian: %1",
        "args0": [
          {
            "type": "field_number",
            "name": "radian",
            "value": 0,
            "min": 0,
            "max": 1000,
            "precision": 1
          }
        ],
        "output": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "center",
        "message0": "center: %1 , %2",
        "args0": [
          {
            "type": "field_number",
            "name": "x",
            "value": 0,
            "min": 0,
            "max": 1000,
            "precision": 1
          },
          {
            "type": "field_number",
            "name": "y",
            "value": 0,
            "min": 0,
            "max": 1000,
            "precision": 1
          }
        ],
        "output": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "put_text",
        "message0": "Put text of %1 on image %2 origin: %3 scale: %4 %5 colour: %6",
        "args0": [
          {
            "type": "field_input",
            "name": "text",
            "text": "OpenCV"
          },
          {
            "type": "input_value",
            "name": "text"
          },
          {
            "type": "input_value",
            "name": "origin"
          },
          {
            "type": "field_number",
            "name": "scale",
            "value": 1,
            "min": 0.1,
            "max": 10,
            "precision": 0.1
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_colour",
            "name": "colour",
            "colour": "#ff0000"
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
        "type": "origin",
        "message0": "origin: %1 , %2",
        "args0": [
          {
            "type": "field_number",
            "name": "x",
            "value": 0,
            "min": 0,
            "max": 1000,
            "precision": 1
          },
          {
            "type": "field_number",
            "name": "y",
            "value": 0,
            "min": 0,
            "max": 1000,
            "precision": 1
          }
        ],
        "output": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
      }
      
]);  // END JSON EXTRACT (Do not delete this comment.)