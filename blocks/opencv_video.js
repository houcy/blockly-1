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
 * @fileoverview openCV video blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_video');  // Deprecated
goog.provide('Blockly.Constants.opencv_video');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    // Block for openCV cv2.VideoCapture() 
    {
        "type": "videocapture",
        "lastDummyAlign0": "RIGHT",
        "message0": "Create video capture  %1 using camera %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_number",
            "name": "no_of_camera",
            "value": 0,
            "min": 0,
            "max": 10,
            "precision": 1
          }
        ],
        "output": null,
        "colour": 200,
        "tooltip": "",
        "helpUrl": "http://cobit.kr"
    },
    // Block for openCV cap.read()
    {
        "type": "read_camera",
        "message0": "Read a image from %1 video capture:  %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "cap",
            "align": "RIGHT"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 200,
        "tooltip": "",
        "helpUrl": "http://cobit.kr"
      },

      // Block for opneCV cv.VideoCapture() from video file
      {
        "type": "videocapture_file",
        "lastDummyAlign0": "RIGHT",
        "message0": "Create video capture  %1 from video file %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_input",
            "name": "video_file",
            "text": "video.avi"
          }
        ],
        "output": null,
        "colour": 200,
        "tooltip": "",
        "helpUrl": "http://cobit.kr"
      },
      // Block for opneCV cap.set() width height
      {
        "type": "video_set",
        "message0": "set %1 as %2 %3 from video capture: %4",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "attribute",
            "options": [
              [
                "video width",
                "cv2.CAP_PROP_FRAME_WIDTH"
              ],
              [
                "video height",
                "cv2.CAP_PROP_FRAME_HEIGHT"
              ]
            ]
          },
          {
            "type": "field_number",
            "name": "video_value",
            "value": 0,
            "min": 0,
            "max": 10000,
            "precision": 1
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "capture"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 200,
        "tooltip": "",
        "helpUrl": "http://cobit.kr"
    },
    {
      "type": "video_capture_simple",
      "message0": "Read video image: %1 from camera %2 %3 video capture %4 %5 %6",
      "args0": [
        {
          "type": "field_variable",
          "name": "IMG",
          "variable": "img"
        },
        {
          "type": "field_number",
          "name": "camera",
          "value": 0,
          "min": 0,
          "max": 10,
          "precision": 1
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_variable",
          "name": "CAP",
          "variable": "cap"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "video_cap"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 200,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "if_q_quit",
      "message0": "If  %1 key pressed, finish program",
      "args0": [
        {
          "type": "field_input",
          "name": "QUIT",
          "text": "'q'"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "read_bytearray_from_url",
      "message0": "Read byte data from URL: %1 save to %2 %3 Using stream:  %4 %5 %6",
      "args0": [
        {
          "type": "field_input",
          "name": "IP",
          "text": "192.168.0.10"
        },
        {
          "type": "field_variable",
          "name": "BYTE_ARRAY",
          "variable": "byte_array"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_variable",
          "name": "STREAM",
          "variable": "stream"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "STREAM_IN"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 200,
      "tooltip": "",
      "helpUrl": ""
    }
]);  // END JSON EXTRACT (Do not delete this comment.)