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

goog.provide('Blockly.Blocks.opencv_image');  // Deprecated
goog.provide('Blockly.Constants.opencv_image');

goog.require('Blockly.Blocks');
goog.require('Blockly');
goog.require('Blockly.FieldDropdown');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    // Block for openCV cv2.imread()
    {
      "type": "imread",
      //"message0": "Read image file  %1 %2 save it to %3 %4 attribute %5",
      "message0": "%{BKY_CV_IMAGE_READ}",
      "args0": [
        {
          "type": "field_input",
          "name": "IMAGE_FILE",
          "text": "lena.jpg"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_variable",
          "name": "IMAGE",
          "variable": "img"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_dropdown",
          "name": "ATTRIBUTE",
          "options": [
            [
              //"without alpha",
              "%{BKY_CV_IMAGE_READ_WITHOUT_ALPHA}",
              "cv2.IMREAD_COLOR"
            ],
            [
              //"as gray scale",
              "%{BKY_CV_IMAGE_READ_GRAYSCALE}",
              "cv2.IMREAD_GRAYSCALE"
            ],
            [
              //"unchanged",
              "%{BKY_CV_IMAGE_READ_UNCHANGED}",
              "cv2.IMREAD_UNCHANGED"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "%{BKY_CV_IMAGE_READ_TOOLTIP}",
      "helpUrl": "%{BKY_CV_IMAGE_READ_HELPURL}"
    },
    // Block for openCV cv2.imshow()
    {
        "type": "imshow",
        //"message0": "Show a image on window  name: %1 image: %2 %3",
        "message0": "%{BKY_CV_IMAGE_SHOW}",
        "args0": [
            {
            "type": "field_input",
            "name": "NAME",
            "text": "my win"
            },
            {
            "type": "input_dummy"
            },
            {
            "type": "input_value",
            "name": "NAME"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_CV_IMAGE_SHOW_TOOLTIP}",
        "helpUrl": "%{BKY_CV_IMAGE_SHOW_HELPURL}"
    },
    {
      "type": "waitkey",
      //"message0": "Wait key during %1 milisecond %2 and if getting a key, save it to %3",
      "message0": "%{BKY_CV_WAIT_KEY_RETURN}",
      "args0": [
        {
          "type": "field_number",
          "name": "MILISEC",
          "value": 0,
          "min": 0,
          "precision": 1
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_variable",
          "name": "KEY",
          "variable": "key"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "%{BKY_CV_WAIT_KEY_RETURN_TOOLTIP}",
      "helpUrl": "%{BKY_CV_WAIT_KEY_RETURN_HELPURL}"
    },
    // Block for openCV cv2.waitkey() without return 
    {
        "type": "waitkey_noret",
        //"message0": "Wait key input %1 milisecond",
        "message0": "%{BKY_CV_WAIT_KEY_NO_RET}",
        "args0": [
        {
            "type": "field_number",
            "name": "time",
            "value": 0,
            "precision": 1
        }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_CV_WAIT_KEY_NO_RET_TOOLTIP}",
        "helpUrl": "%{BKY_CV_WAIT_KEY_NO_RET_HELPURL}"
    },
    // Block for openCV cv2.destroyAllWindows()
    {
        "type": "destroyallwindow",
        //"message0": "Destroy all window",
        "message0": "%{BKY_CV_DESTROY_ALL_WINDOW}",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_CV_DESTROY_ALL_WINDOW_TOOLTIP}",
        "helpUrl": "%{BKY_CV_DESTROY_ALL_WINDOW_HELPURL}"
    },
    // Block for opneCV cv2.imwrite()
    {
        "type": "imwrite",
        //"message0": "Save image %1 as  %2",
        "message0": "%{BKY_CV_IMAGE_WRITE}",
        "args0": [
          {
            "type": "input_value",
            "name": "IMG_NAME"
          },
          {
            "type": "field_input",
            "name": "FILE_NAME",
            "text": "image.jpg"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_CV_IMAG_WRITE_TOOLTOP}",
        "helpUrl": "%{BKY_CV_IMAG_WRITE_HELPURL}"
    },
    {
      "type": "threshold",
      //"message0": "Get threshold image from  %1 save it to  %2 %3 threshold  value %4 option %5",
      "message0": "%{BKY_CV_IMAGE_THRESHOLD}",
      "args0": [
        {
          "type": "input_value",
          "name": "IMAGE"
        },
        {
          "type": "field_variable",
          "name": "IMG_THRESH",
          "variable": "img_thresh"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_number",
          "name": "THRESH_VALUE",
          "value": 10,
          "min": 0,
          "max": 255,
          "precision": 1
        },
        {
          "type": "field_dropdown",
          "name": "OPTION",
          "options": [
            [
              //"binary",
              "%{BKY_CV_IMAGE_THRESH_ATTR_BINARY}",
              "cv2.THRESH_BINARY"
            ],
            [
              //"binary inverse",
              "%{BKY_CV_IMAGE_THRESH_ATTR_BINARY_INV}",
              "cv2.THRESH_BINARY_INV"
            ],
            [
              //"truncation",
              "%{BKY_CV_IMAGE_THRESH_ATTR_TRUNC}",
              "cv2.THRESH_TRUNC"
            ],
            [
              //"to zero",
              "%{BKY_CV_IMAGE_THRESH_ATTR_TOZERO}",
              "cv2.THRESH_TOZERO"
            ],
            [
              //"to zero inverse",
              "%{BKY_CV_THRESH_ATTR_BINARINV}",
              "cv2.THRESH_TOZERO_INV"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 45,
      "tooltip": "%{BKY_CV_IMAGE_THRESHOLD_TOOLTIP}",
      "helpUrl": "%{BKY_CV_IMAGE_THRESHOLD_HELPURL}"
    },
    {
        "type": "bitwise_and",
        //"message0": "Image bit AND operation   source 1: %1 source 2: %2 mask: %3",
        "message0": "%{BKY_CV_BIT_WISE_AND}",
        "args0": [
          {
            "type": "input_value",
            "name": "source_1"
          },
          {
            "type": "input_value",
            "name": "source_2"
          },
          {
            "type": "input_value",
            "name": "mask"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 45,
        "tooltip": "%{CV_BIT_WISE_AND_TOOLTIP}",
        "helpUrl": "%{CV_BIT_WISE_AND_HELPURL}"
    },
    {
        "type": "bitwise_not",
        //"message0": "Image bit NOT operation    source: %1",
        "message0": "%{BKY_CV_BIT_WISE_NOT}",
        "args0": [
          {
            "type": "input_value",
            "name": "image"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 45,
        "tooltip": "%{BKY_CV_BIT_WISE_NOT_TOOLTIP}",
        "helpUrl": "%{BKY_CV_BIT_WISE_NOT_HELPURL}"
    },
    /*{
        "type": "image_shape",
        "message0": "%1 %2 info:  %3 %4 %5",
        "args0": [
          {
            "type": "field_label_serializable",
            "name": "shape",
            "text": "Get shape info of image:"
          },
          {
            "type": "input_value",
            "name": "image"
          },
          {
            "type": "field_variable",
            "name": "rows",
            "variable": "rows"
          },
          {
            "type": "field_variable",
            "name": "cols",
            "variable": "columns"
          },
          {
            "type": "field_variable",
            "name": "chann",
            "variable": "channels"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 45,
        "tooltip": "",
        "helpUrl": ""
      },*/
      {
        "type": "decode_jpeg",
        //"message0": "Decode JPEG image %1 save to  %2",
        "message0": "%{BKY_DECODE_JPG}",
        "args0": [
          {
            "type": "input_value",
            "name": "JPEG_IMAGE"
          },
          {
            "type": "field_variable",
            "name": "IMAGE",
            "variable": "image"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 170,
        "tooltip": "%{BKY_DECODE_JPG_TOOLTIP}",
        "helpUrl": "%{BKY_DECODE_JPG_HELPURL}"
      },
      {
        "type": "is_jpeg",
        //"message0": "Is byte array JPEG? %1 byte array: %2 result: %3",
        "message0": "%{BKY_IS_JPEG}",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "BYTE_ARRAY"
          },
          {
            "type": "field_variable",
            "name": "IS_JPEG",
            "variable": "is_jpeg"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 170,
        "tooltip": "%{BKY_IS_JPEG_TOOLTIP}",
        "helpUrl": "%{BKY_IS_JPEG_HELPURL}"
    },
    {
        "type": "get_jpeg_img",
        //"message0": "Get JPEG image from %1 byte array: %2 save JPEG image to: %3 %4 result %5",
        "message0": "%{BKY_GET_JPEG_IMAGE}",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "BYTE_ARRAY"
          },
          {
            "type": "field_variable",
            "name": "JPEG_IMAGE",
            "variable": "jpeg_img"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_variable",
            "name": "IS_OK",
            "variable": "is_OK"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 170,
        "tooltip": "%{BKY_GET_JPEG_IMAGE_TOOLTIP}",
        "helpUrl": "%{BKY_GET_JPEG_IMAGE_HELPURL}"
      }
]);  // END JSON EXTRACT (Do not delete this comment.)