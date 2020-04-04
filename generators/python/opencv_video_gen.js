/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Python for openCV video blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.opencv_video_gen');
//goog.require('Blockly.Python');

Blockly.Python['videocapture'] = function(block) {
    var number_no_of_camera = block.getFieldValue('no_of_camera');
    var code = "cv2.VideoCapture("+number_no_of_camera+")\n";
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['read_camera'] = function(block) {
    var value_cap = Blockly.Python.valueToCode(block, 'cap', Blockly.Python.ORDER_ATOMIC);
    var code = value_cap+".read()[1]\n";
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['videocapture_file'] = function(block) {
    var text_video_file = block.getFieldValue('video_file');
    var code = "cv2.VideoCapture('"+text_video_file+"')\n";
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['video_set'] = function(block) {
    var dropdown_attribute = block.getFieldValue('attribute');
    var number_video_value = block.getFieldValue('video_value');
    var value_capture = Blockly.Python.valueToCode(block, 'capture', Blockly.Python.ORDER_ATOMIC);
    var code = value_capture+".set("+dropdown_attribute+","+number_video_value+")\n";
    return code;
};

Blockly.Python['video_capture_simple'] = function(block) {
    var variable_img = Blockly.Python.variableDB_.getName(block.getFieldValue('IMG'), Blockly.Variables.NAME_TYPE);
    var number_camera = block.getFieldValue('camera');
    var variable_cap = Blockly.Python.variableDB_.getName(block.getFieldValue('CAP'), Blockly.Variables.NAME_TYPE);
    var statements_video_cap = Blockly.Python.statementToCode(block, 'video_cap');
    var code = variable_cap+" = cv2.VideoCapture("+number_camera+")\r\n"+
               "while True:\r\n"+
               "  ret,"+variable_img+" = "+variable_cap+".read()\r\n"+
               statements_video_cap+
               variable_cap+".release()\r\n"+
               "cv2.destroyAllWindows()\r\n";
    return code;
};

Blockly.Python['if_q_quit'] = function(block) {
    var text_quit = block.getFieldValue('QUIT');
    var code = "if cv2.waitKey(1) & 0xFF == ord("+text_quit+")\r\n"+
               "  break\r\n";
    return code;
};

Blockly.Python['read_bytearray_from_url'] = function(block) {
    var text_ip = block.getFieldValue('IP');
    var variable_byte_array = Blockly.Python.variableDB_.getName(block.getFieldValue('BYTE_ARRAY'), Blockly.Variables.NAME_TYPE);
    var variable_stream = Blockly.Python.variableDB_.getName(block.getFieldValue('STREAM'), Blockly.Variables.NAME_TYPE);
    var statements_stream = Blockly.Python.statementToCode(block, 'STREAM_IN');
    var code = variable_stream+"= urllib.request.urlopen(\"http://"+text_ip+":81/stream\")\r\n"+
               variable_byte_array+" = b''\r\n\n"+
               "while True:\r\n"+
               "  "+variable_byte_array+" += "+variable_stream+".read(4096)\r\n"+
               statements_stream+
               "cv2.destroyAllWindows()\r\n";
    return code;
};