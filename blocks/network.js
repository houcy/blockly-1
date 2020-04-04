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
 * @fileoverview network for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.network');  // Deprecated
goog.provide('Blockly.Constants.network');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT

    {
      "type": "create_socket",
      "message0": "Create socket  %1 with IP: %2 port: %3",
      "args0": [
        {
          "type": "field_variable",
          "name": "SOCKET",
          "variable": "sock"
        },
        {
          "type": "field_input",
          "name": "SOCKET_IP",
          "text": "192.168.0.10"
        },
        {
          "type": "field_input",
          "name": "SOCKET_PORT",
          "text": "82"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 90,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "send_text_to_socket",
      "message0": "Send text %1 to socket %2",
      "args0": [
        {
          "type": "field_input",
          "name": "CMD",
          "text": "start"
        },
        {
          "type": "field_variable",
          "name": "SOCKET",
          "variable": "sock"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 90,
      "tooltip": "",
      "helpUrl": ""
    }
]);  // END JSON EXTRACT (Do not delete this comment.)