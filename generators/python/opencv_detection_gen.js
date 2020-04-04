
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
 * @fileoverview Generating Python for openCV detection blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.opencv_detection_gen');
//goog.require('Blockly.Python');

//const HAAR_PEDESTRIAN = 0x01;
//const HAAR_TRAFFIC_SIGNAL = 0x02;
//const HAAR_FACE = 0x03;
//const HAAR_NONE = 0x00;

//var haar_cascade_idx = HAAR_NONE;
//console.log("haar none");

Blockly.Python['get_cascade_class'] = function(block) {
    var dropdown_classifier = block.getFieldValue('classifier');
    var variable_haar = Blockly.Python.variableDB_.getName(block.getFieldValue('HAAR'), Blockly.Variables.NAME_TYPE);
    if(dropdown_classifier == "FACE"){
        //haar_cascade_idx = HAAR_FACE;
        var code = variable_haar+" = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')\n";
    }else if(dropdown_classifier == "TRAFFIC"){
        //haar_cascade_idx = HAAR_TRAFFIC_SIGNAL;
        var code = variable_haar+" = cv2.CascadeClassifier('stop_signal.xml')\n";
    }else if(dropdown_classifier == "PEDESTRIAN"){
        //haar_cascade_idx = HAAR_PEDESTRIAN;
        var code = variable_haar+" = cv2.CascadeClassifier('detect_pedestrian.xml')\n";
    }
    return code;
};

Blockly.Python['haar_detect_object'] = function(block) {
    var value_haar_class = Blockly.Python.valueToCode(block, 'HAAR_CLASS', Blockly.Python.ORDER_ATOMIC);
    var value_haar_image = Blockly.Python.valueToCode(block, 'HAAR_IMAGE', Blockly.Python.ORDER_ATOMIC);
    var variable_detect_obj = Blockly.Python.variableDB_.getName(block.getFieldValue('DETECT_OBJ'), Blockly.Variables.NAME_TYPE);
    var code = variable_detect_obj+" = "+value_haar_class+".detectMultiScale("+value_haar_image+", 1.3, 5)\n";
    return code;
};

Blockly.Python['draw_enclosing_rect'] = function(block) {
    var value_detect_object = Blockly.Python.valueToCode(block, 'DETECT_OBJECT', Blockly.Python.ORDER_ATOMIC);
    var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
    var colour_color = block.getFieldValue('COLOR');
    var rgb = hex2num(colour_color);
    var statements_loop = Blockly.Python.statementToCode(block, 'LOOP');
    
    var code =  "for i in "+value_detect_object+":\r\n"+
                statements_loop+
                "  cv.rectangle("+value_image+", (i[0], i[1]), (i[0]+i[2], i[1]+i[3]), ("+rgb+"), 2)";
    return code;
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
