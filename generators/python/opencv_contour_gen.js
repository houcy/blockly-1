
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
 * @fileoverview Generating Python for openCV contour blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.opencv_contour_gen');
//goog.require('Blockly.Python');

Blockly.Python['find_contour'] = function(block) {
    var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
    var dropdown_mode = block.getFieldValue('mode');
    var dropdown_method = block.getFieldValue('method');
    var code = "cv2.findContours("+value_image+", "+dropdown_mode+", "+dropdown_method+")[0]"; 
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['find_contour_v3'] = function(block) {
    var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
    var dropdown_mode = block.getFieldValue('mode');
    var dropdown_method = block.getFieldValue('method');
    var code = "cv2.findContours("+value_image+", "+dropdown_mode+", "+dropdown_method+")[1]"; 
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['draw_contour'] = function(block) {
    var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
    var value_contour = Blockly.Python.valueToCode(block, 'contour', Blockly.Python.ORDER_ATOMIC);
    var number_index = block.getFieldValue('index');
    var colour_color = block.getFieldValue('color');
    var number_thick = block.getFieldValue('thick');
    var rgb = hex2num(colour_color);
    var code = "cv2.drawContours("+value_image+", "+value_contour+", "+number_index+", ("+rgb+"), "+number_thick+")\n";
    return code;
};

Blockly.Python['get_contour_center'] = function(block) {
    var variable_x = Blockly.Python.variableDB_.getName(block.getFieldValue('X'), Blockly.Variables.NAME_TYPE);
    var variable_y = Blockly.Python.variableDB_.getName(block.getFieldValue('Y'), Blockly.Variables.NAME_TYPE);
    var value_contour = Blockly.Python.valueToCode(block, 'contour', Blockly.Python.ORDER_ATOMIC);
    var code = "M = cv2.moments("+value_contour+")\n"+
               variable_x+" = int(M['m10']/M['m00'])\n"+ 
               variable_y+" = int(M['m01']/M['m00'])\n"
    return code;  
};

Blockly.Python['get_len_cont_list'] = function(block) {
    var value_length = Blockly.Python.valueToCode(block, 'length', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_cont_line'] = function(block) {
    var value_contour = Blockly.Python.valueToCode(block, 'contour', Blockly.Python.ORDER_ATOMIC);
    var number_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

function hex2num(hex) {
    if(hex.charAt(0) == "#") hex = hex.slice(1); //Remove the '#' char - if there is one.
    hex = hex.toUpperCase();
    var hex_alphabets = "0123456789ABCDEF";
    var value = new Array(3);
    var k = 0;
    var int1,int2;
    for(var i=0;i<6;i+=2) {
      int1 = hex_alphabets.indexOf(hex.charAt(i));
      int2 = hex_alphabets.indexOf(hex.charAt(i+1)); 
      value[k] = (int1 * 16) + int2;
      k++;
    }
    var temp1 = value[2];
    var temp2 = value[0];
    value[0] = temp1;
    value[2] = temp2;
    return(value);
};

Blockly.Python['draw_bounding_rect'] = function(block) {
    var variable_x = Blockly.Python.variableDB_.getName(block.getFieldValue('X'), Blockly.Variables.NAME_TYPE);
    var variable_y = Blockly.Python.variableDB_.getName(block.getFieldValue('Y'), Blockly.Variables.NAME_TYPE);
    var variable_w = Blockly.Python.variableDB_.getName(block.getFieldValue('W'), Blockly.Variables.NAME_TYPE);
    var variable_h = Blockly.Python.variableDB_.getName(block.getFieldValue('H'), Blockly.Variables.NAME_TYPE);
    var value_contour = Blockly.Python.valueToCode(block, 'contour', Blockly.Python.ORDER_ATOMIC);
    var code = variable_x+", "+variable_y+", "+variable_w+", "+variable_h+" = cv2.boundingRect("+value_contour+")\n";
    return code;
};

Blockly.Python['draw_min_circle'] = function(block) {
    var variable_x = Blockly.Python.variableDB_.getName(block.getFieldValue('X'), Blockly.Variables.NAME_TYPE);
    var variable_y = Blockly.Python.variableDB_.getName(block.getFieldValue('Y'), Blockly.Variables.NAME_TYPE);
    var variable_rad = Blockly.Python.variableDB_.getName(block.getFieldValue('RAD'), Blockly.Variables.NAME_TYPE);
    var value_cont = Blockly.Python.valueToCode(block, 'cont', Blockly.Python.ORDER_ATOMIC);
    var code =  "(x, y), radius = cv2.minEnclosingCircle("+value_cont+")\n"+
                +variable_rad+" = int(radius)\n"
                +variable_x+" = int(x)\n"
                +variable_y+" = int(y)\n";
    return code;
};