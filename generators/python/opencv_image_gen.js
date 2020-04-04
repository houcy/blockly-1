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
 * @fileoverview Generating Python for openCV image blocks.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Python.opencv_image_gen');
goog.require('Blockly.Python');


Blockly.Python['imread'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var text_image_file = block.getFieldValue('IMAGE_FILE');
    var variable_image = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE);
    var dropdown_attribute = block.getFieldValue('ATTRIBUTE');
    var code = variable_image+" = cv2.imread(\""+text_image_file+"\","+dropdown_attribute+")\n";
    return code;
  };

Blockly.Python['imshow'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var text_name = block.getFieldValue('NAME');
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var code = "cv2.imshow('" + text_name + "',"+ value_name +")\r\n";
    return code;
};

Blockly.Python['waitkey'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var number_milisec = block.getFieldValue('MILISEC');
    var variable_key = Blockly.Python.variableDB_.getName(block.getFieldValue('KEY'), Blockly.Variables.NAME_TYPE);
    var code = variable_key+" = cv2.waitKey("+number_milisec+")&0xff\n";
    return code;
};

Blockly.Python['waitkey_noret'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var number_time = block.getFieldValue('time');
    var code = "cv2.waitKey("+number_time+")\n";
    return code;
};

Blockly.Python['destroyallwindow'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var code = "cv2.destroyAllWindows()\n";
    return code;
};

Blockly.Python['imwrite'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_name = Blockly.Python.valueToCode(block, 'IMG_NAME', Blockly.Python.ORDER_ATOMIC);
    var text_name = block.getFieldValue('FILE_NAME');
    var code = "cv2.imwrite('"+text_name+"',"+value_name+")\n";
    return code;
};

Blockly.Python['threshold'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_name = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
    var variable_img_thresh = Blockly.Python.variableDB_.getName(block.getFieldValue('IMG_THRESH'), Blockly.Variables.NAME_TYPE);
    var number_thresh_value = block.getFieldValue('THRESH_VALUE');
    var dropdown_option = block.getFieldValue('OPTION');
    var code = "ret, "+variable_img_thresh+" = cv2.threshold("+value_name+", "+number_thresh_value+", 255, "+dropdown_option+")\n";
    return code;
};

Blockly.Python['bitwise_and'] = function(block) {
    var value_source_1 = Blockly.Python.valueToCode(block, 'source_1', Blockly.Python.ORDER_ATOMIC);
    var value_source_2 = Blockly.Python.valueToCode(block, 'source_2', Blockly.Python.ORDER_ATOMIC);
    var value_mask = Blockly.Python.valueToCode(block, 'mask', Blockly.Python.ORDER_ATOMIC);
    var code = "cv2.bitwise_and( "+value_source_1+", "+value_source_2+", mask="+value_mask+")\n";
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bitwise_not'] = function(block) {
    var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
    var code = "cv2.bitwise_not("+value_image+")\n";
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['image_shape'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
    var variable_rows = Blockly.Python.variableDB_.getName(block.getFieldValue('rows'), Blockly.Variables.NAME_TYPE);
    var variable_cols = Blockly.Python.variableDB_.getName(block.getFieldValue('cols'), Blockly.Variables.NAME_TYPE);
    var variable_chann = Blockly.Python.variableDB_.getName(block.getFieldValue('chann'), Blockly.Variables.NAME_TYPE);
    var code = variable_rows+", "+variable_cols+", "+variable_chann+" = "+value_name+".shape\n";
    return code;
};

Blockly.Python['decode_jpeg'] = function(block) {
    var value_jpeg_image = Blockly.Python.valueToCode(block, 'JPEG_IMAGE', Blockly.Python.ORDER_ATOMIC);
    var variable_image = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE);
    var code = variable_image+" = cv.imdecode("+value_jpeg_image+",cv2.IMREAD_UNCHANGED)\r\n";
    return code;
};


Blockly.Python['is_jpeg'] = function(block) {
    var value_byte_array = Blockly.Python.valueToCode(block, 'BYTE_ARRAY', Blockly.Python.ORDER_ATOMIC);
    var variable_result = Blockly.Python.variableDB_.getName(block.getFieldValue('IS_JPEG'), Blockly.Variables.NAME_TYPE);
    var code =  "jpghead = "+value_byte_array+".find(b'\\xff\\xd8')\r\n"+
                "jpgend = "+value_byte_array+".find(b'\\xff\\xd9')\r\n"+
                "if jpghead>-1 and jpgend>-1:\r\n"+
                "  "+variable_result+" = True\r\n"+
                "else:\r\n"+
                "  "+variable_result+" = False\r\n";
    return code;
};

Blockly.Python['get_jpeg_img'] = function(block) {
    var value_byte_array = Blockly.Python.valueToCode(block, 'BYTE_ARRAY', Blockly.Python.ORDER_ATOMIC);
    var variable_jpg_image = Blockly.Python.variableDB_.getName(block.getFieldValue('JPEG_IMAGE'), Blockly.Variables.NAME_TYPE);
    var variable_result = Blockly.Python.variableDB_.getName(block.getFieldValue('IS_OK'), Blockly.Variables.NAME_TYPE);
    var code =  "jpg = "+value_byte_array+"[jpghead:jpgend+2]\r\n"+
                value_byte_array+" = "+value_byte_array+"[jpgend+2:]\r\n"+
                variable_jpg_image+" = np.frombuffer(jpg,dtype=np.uint8)\r\n"+
                variable_result+" = "+variable_jpg_image+".any()\r\n";
    return code;
};