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
 * @fileoverview Generating Python for openCV color space converting blocks.
 * @author conner.jeong@gmail.com
 */
//'use strict';

//goog.provide('Blockly.Python.opencv_colorspace_gen');
//goog.require('Blockly.Python');


Blockly.Python['cvt_color'] = function(block) {
    var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
    var dropdown_option = block.getFieldValue('OPTION');
    var variable_img_cvt = Blockly.Python.variableDB_.getName(block.getFieldValue('IMG_CVT'), Blockly.Variables.NAME_TYPE);
    var code = variable_img_cvt+" =  cv2.cvtColor( "+value_image+", "+dropdown_option+")\n";
    return code;
  };

Blockly.Python['in_range'] = function(block) {
    var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
    var value_low_limit = Blockly.Python.valueToCode(block, 'low_limit', Blockly.Python.ORDER_ATOMIC);
    var value_up_limit = Blockly.Python.valueToCode(block, 'up_limit', Blockly.Python.ORDER_ATOMIC);
    var code = "cv2.inRange( "+value_image+", "+value_low_limit+", "+value_up_limit+")\n";
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['hsv_color_upper_limit'] = function(block) {
    var number_b = block.getFieldValue('B');
    var number_g = block.getFieldValue('G');
    var number_r = block.getFieldValue('R');
    var code = "np.array([ "+number_b+", "+number_g+", "+number_r+"])";
    return [code, Blockly.Python.ORDER_NONE];
  };

Blockly.Python['hsv_color_lower_limit'] = function(block) {
    var number_b = block.getFieldValue('B');
    var number_g = block.getFieldValue('G');
    var number_r = block.getFieldValue('R');
    var code = "np.array([ "+number_b+", "+number_g+", "+number_r+"])";
    return [code, Blockly.Python.ORDER_NONE];
};