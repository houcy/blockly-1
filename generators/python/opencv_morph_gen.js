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
 * @fileoverview Generating Python for openCV morphing blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.opencv_morph_gen');
//goog.require('Blockly.Python');

Blockly.Python['get_struct_element'] = function(block) {
    var dropdown_elelment = block.getFieldValue('elelment');
    var number_name = block.getFieldValue('NAME');
    var code = "cv2.getStructuringElement("+dropdown_elelment+", ("+number_name+","+number_name+"))\n";
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['erode'] = function(block) {
    var value_source = Blockly.Python.valueToCode(block, 'source', Blockly.Python.ORDER_ATOMIC);
    var value_kernel = Blockly.Python.valueToCode(block, 'kernel', Blockly.Python.ORDER_ATOMIC);
    var number_iteration = block.getFieldValue('iteration');
    var code = "cv2.erode("+value_source+", "+value_kernel+", iterations = "+number_iteration+")\n" 
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['dilation'] = function(block) {
    var value_source = Blockly.Python.valueToCode(block, 'source', Blockly.Python.ORDER_ATOMIC);
    var value_kernel = Blockly.Python.valueToCode(block, 'kernel', Blockly.Python.ORDER_ATOMIC);
    var number_count = block.getFieldValue('count');
    var code = "cv2.dilate("+value_source+", "+value_kernel+", iterations = "+number_count+")\n" 
    return [code, Blockly.Python.ORDER_NONE];
};