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
 * @fileoverview Generating Python for network blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.network_gen');
//goog.require('Blockly.Python');

Blockly.Python['create_socket'] = function(block) {
    var variable_socket = Blockly.Python.variableDB_.getName(block.getFieldValue('SOCKET'), Blockly.Variables.NAME_TYPE);
    var text_socket_ip = block.getFieldValue('SOCKET_IP');
    var text_socket_port = block.getFieldValue('SOCKET_PORT');
    var code =  variable_socket+" = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\r\n"+
                variable_socket+".connect(\""+text_socket_ip+"\","+text_socket_port+")\r\n";
    return code;
};

Blockly.Python['send_text_to_socket'] = function(block) {
    var text_cmd = block.getFieldValue('CMD');
    var variable_socket = Blockly.Python.variableDB_.getName(block.getFieldValue('SOCKET'), Blockly.Variables.NAME_TYPE);
    var code =  "message = b'"+text_cmd+"'\r\n"+
                variable_socket+".sendall(message)\r\n"
    return code;
};

