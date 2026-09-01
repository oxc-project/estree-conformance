__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wagon",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 68
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "numberOxen",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 79
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 87,
                  "end": 91
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberOxen",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 102
                },
                "optional": false,
                "computed": false,
                "start": 87,
                "end": 102
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberOxen",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 115
              },
              "start": 87,
              "end": 115
            },
            "directive": null,
            "start": 87,
            "end": 115
          }
        ],
        "start": 81,
        "end": 117
      },
      "expression": false,
      "start": 54,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wagon",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 155
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "circle",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 162
          },
          "optional": false,
          "computed": false,
          "start": 150,
          "end": 162
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "wagons",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 181
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "wagons",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 196,
                    "end": 202
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wagons",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 211
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 218
                    },
                    "optional": false,
                    "computed": false,
                    "start": 205,
                    "end": 218
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 3.14,
                    "raw": "3.14",
                    "start": 221,
                    "end": 225
                  },
                  "start": 196,
                  "end": 225
                },
                "start": 189,
                "end": 226
              }
            ],
            "start": 183,
            "end": 228
          },
          "expression": false,
          "start": 165,
          "end": 228
        },
        "start": 150,
        "end": 228
      },
      "directive": null,
      "start": 150,
      "end": 228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Wagon",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 292
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 302
            },
            "optional": false,
            "computed": false,
            "start": 287,
            "end": 302
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "load",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 307
          },
          "optional": false,
          "computed": false,
          "start": 287,
          "end": 307
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "supplies",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 328
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 330,
            "end": 333
          },
          "expression": false,
          "start": 310,
          "end": 333
        },
        "start": 287,
        "end": 333
      },
      "directive": null,
      "start": 287,
      "end": 333
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Wagon",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 395
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 405
            },
            "optional": false,
            "computed": false,
            "start": 390,
            "end": 405
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "weight",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 412
          },
          "optional": false,
          "computed": false,
          "start": 390,
          "end": 412
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "supplies",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 423
            }
          ],
          "returnType": null,
          "body": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "supplies",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 435
            },
            "consequent": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "supplies",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 446
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 453
              },
              "optional": false,
              "computed": false,
              "start": 438,
              "end": 453
            },
            "alternate": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 457,
                "end": 458
              },
              "prefix": true,
              "start": 456,
              "end": 458
            },
            "start": 427,
            "end": 458
          },
          "id": null,
          "generator": false,
          "start": 415,
          "end": 458
        },
        "start": 390,
        "end": 458
      },
      "directive": null,
      "start": 390,
      "end": 458
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Wagon",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 464
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 465,
              "end": 474
            },
            "optional": false,
            "computed": false,
            "start": 459,
            "end": 474
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "speed",
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 480
          },
          "optional": false,
          "computed": false,
          "start": 459,
          "end": 480
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 508,
                      "end": 512
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numberOxen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 513,
                      "end": 523
                    },
                    "optional": false,
                    "computed": false,
                    "start": 508,
                    "end": 523
                  },
                  "operator": "/",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 526,
                        "end": 530
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "weight",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 531,
                        "end": 537
                      },
                      "optional": false,
                      "computed": false,
                      "start": 526,
                      "end": 537
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 526,
                    "end": 539
                  },
                  "start": 508,
                  "end": 539
                },
                "start": 501,
                "end": 539
              }
            ],
            "start": 495,
            "end": 541
          },
          "expression": false,
          "start": 483,
          "end": 541
        },
        "start": 459,
        "end": 541
      },
      "directive": null,
      "start": 459,
      "end": 541
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sql",
        "optional": false,
        "typeAnnotation": null,
        "start": 554,
        "end": 557
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wagon",
        "optional": false,
        "typeAnnotation": null,
        "start": 566,
        "end": 571
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 589
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 602,
                        "end": 607
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 602,
                      "end": 609
                    },
                    "directive": null,
                    "start": 602,
                    "end": 610
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 650,
                          "end": 654
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foonly",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 655,
                          "end": 661
                        },
                        "optional": false,
                        "computed": false,
                        "start": 650,
                        "end": 661
                      },
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 664,
                        "end": 666
                      },
                      "start": 650,
                      "end": 666
                    },
                    "directive": null,
                    "start": 650,
                    "end": 666
                  }
                ],
                "start": 592,
                "end": 672
              },
              "expression": false,
              "start": 589,
              "end": 672
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 578,
            "end": 672
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "load",
              "optional": false,
              "typeAnnotation": null,
              "start": 843,
              "end": 847
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "files",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 848,
                  "end": 853
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "format",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 855,
                  "end": 861
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "format",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 877,
                        "end": 883
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "xmlolololol",
                        "raw": "\"xmlolololol\"",
                        "start": 888,
                        "end": 901
                      },
                      "start": 877,
                      "end": 901
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 927,
                              "end": 932
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "please do not use XML. It was a joke.",
                                "raw": "\"please do not use XML. It was a joke.\"",
                                "start": 933,
                                "end": 972
                              }
                            ],
                            "start": 923,
                            "end": 973
                          },
                          "start": 917,
                          "end": 974
                        }
                      ],
                      "start": 903,
                      "end": 984
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1012,
                                "end": 1017
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "speed",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1018,
                                "end": 1023
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1012,
                              "end": 1023
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1012,
                            "end": 1025
                          },
                          "directive": null,
                          "start": 1012,
                          "end": 1025
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 1056,
                                  "end": 1061
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "weight",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1062,
                                  "end": 1068
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1056,
                                "end": 1068
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1056,
                              "end": 1070
                            },
                            "operator": "<",
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1073,
                              "end": 1074
                            },
                            "start": 1056,
                            "end": 1074
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 1076,
                            "end": 1135
                          },
                          "alternate": null,
                          "start": 1052,
                          "end": 1135
                        }
                      ],
                      "start": 998,
                      "end": 1145
                    },
                    "start": 873,
                    "end": 1145
                  }
                ],
                "start": 863,
                "end": 1151
              },
              "expression": false,
              "start": 847,
              "end": 1151
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 843,
            "end": 1151
          }
        ],
        "start": 572,
        "end": 1153
      },
      "abstract": false,
      "declare": false,
      "start": 548,
      "end": 1153
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null,
            "start": 1158,
            "end": 1160
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sql",
              "optional": false,
              "typeAnnotation": null,
              "start": 1167,
              "end": 1170
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1163,
            "end": 1172
          },
          "definite": false,
          "start": 1158,
          "end": 1172
        }
      ],
      "declare": false,
      "start": 1154,
      "end": 1173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null,
            "start": 1174,
            "end": 1176
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOxen",
            "optional": false,
            "typeAnnotation": null,
            "start": 1177,
            "end": 1187
          },
          "optional": false,
          "computed": false,
          "start": 1174,
          "end": 1187
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null,
            "start": 1190,
            "end": 1192
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 1193,
            "end": 1199
          },
          "optional": false,
          "computed": false,
          "start": 1190,
          "end": 1199
        },
        "start": 1174,
        "end": 1199
      },
      "directive": null,
      "start": 1174,
      "end": 1199
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Drakkhen",
        "optional": false,
        "typeAnnotation": null,
        "start": 1256,
        "end": 1264
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dragon",
        "optional": false,
        "typeAnnotation": null,
        "start": 1273,
        "end": 1279
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1280,
        "end": 1284
      },
      "abstract": false,
      "declare": false,
      "start": 1250,
      "end": 1284
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 54,
  "end": 1285
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 54,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Wagon",
    "start": 63,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "numberOxen",
    "start": 69,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "numberOxen",
    "start": 92,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "numberOxen",
    "start": 105,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Wagon",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "circle",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 165,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "wagons",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 189,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "wagons",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "wagons",
    "start": 205,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Numeric",
    "value": "3.14",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "Wagon",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 293,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "load",
    "start": 303,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 310,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "supplies",
    "start": 320,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "Wagon",
    "start": 390,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 396,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "weight",
    "start": 406,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "supplies",
    "start": 415,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 424,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "supplies",
    "start": 427,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "supplies",
    "start": 438,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 447,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 456,
    "end": 457
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Wagon",
    "start": 459,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 465,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "speed",
    "start": 475,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 483,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 501,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 508,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "numberOxen",
    "start": 513,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 526,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "weight",
    "start": 531,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 548,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Sql",
    "start": 554,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 558,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Wagon",
    "start": 566,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 578,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 602,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 650,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "foonly",
    "start": 655,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 662,
    "end": 663
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "load",
    "start": 843,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "files",
    "start": 848,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 855,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 863,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 873,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 877,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 884,
    "end": 887
  },
  {
    "type": "String",
    "value": "\"xmlolololol\"",
    "start": 888,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 917,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 923,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 927,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 932,
    "end": 933
  },
  {
    "type": "String",
    "value": "\"please do not use XML. It was a joke.\"",
    "start": 933,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 993,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 998,
    "end": 999
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1012,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "speed",
    "start": 1018,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1052,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1056,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "weight",
    "start": 1062,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1154,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 1158,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "Sql",
    "start": 1167,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 1174,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "numberOxen",
    "start": 1177,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 1190,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "foonly",
    "start": 1193,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1250,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "Drakkhen",
    "start": 1256,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1265,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "Dragon",
    "start": 1273,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dragon",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 39
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "numberEaten",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            },
            "start": 51,
            "end": 59
          },
          "start": 40,
          "end": 59
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 67,
                  "end": 71
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberEaten",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 83
                },
                "optional": false,
                "computed": false,
                "start": 67,
                "end": 83
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberEaten",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 97
              },
              "start": 67,
              "end": 97
            },
            "directive": null,
            "start": 67,
            "end": 97
          }
        ],
        "start": 61,
        "end": 99
      },
      "expression": false,
      "start": 24,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Firedrake",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 125
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dragon",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 140
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 158
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 171,
                        "end": 176
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 171,
                      "end": 178
                    },
                    "directive": null,
                    "start": 171,
                    "end": 179
                  }
                ],
                "start": 161,
                "end": 185
              },
              "expression": false,
              "start": 158,
              "end": 185
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 147,
            "end": 185
          }
        ],
        "start": 141,
        "end": 187
      },
      "abstract": false,
      "declare": false,
      "start": 110,
      "end": 187
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Conestoga",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 209
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wagon",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 223
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 241
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "drunkOO",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 258,
                          "end": 262
                        },
                        "start": 258,
                        "end": 262
                      },
                      "start": 256,
                      "end": 262
                    },
                    "start": 249,
                    "end": 262
                  },
                  "readonly": false,
                  "static": false,
                  "start": 242,
                  "end": 262
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 303,
                        "end": 308
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "nope",
                          "raw": "'nope'",
                          "start": 309,
                          "end": 315
                        }
                      ],
                      "optional": false,
                      "start": 303,
                      "end": 316
                    },
                    "directive": null,
                    "start": 303,
                    "end": 317
                  }
                ],
                "start": 264,
                "end": 323
              },
              "expression": false,
              "start": 241,
              "end": 323
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 230,
            "end": 323
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "circle",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 390
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "others",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Wagon",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 407,
                          "end": 412
                        },
                        "typeArguments": null,
                        "start": 400,
                        "end": 412
                      },
                      "start": 399,
                      "end": 415
                    },
                    "start": 397,
                    "end": 415
                  },
                  "start": 391,
                  "end": 415
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "others",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 434,
                        "end": 440
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 441,
                        "end": 447
                      },
                      "optional": false,
                      "computed": false,
                      "start": 434,
                      "end": 447
                    },
                    "start": 427,
                    "end": 447
                  }
                ],
                "start": 417,
                "end": 453
              },
              "expression": false,
              "start": 390,
              "end": 453
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 377,
            "end": 453
          }
        ],
        "start": 224,
        "end": 455
      },
      "abstract": false,
      "declare": false,
      "start": 194,
      "end": 455
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 461
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Conestoga",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 477
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 478,
                "end": 482
              }
            ],
            "start": 464,
            "end": 483
          },
          "definite": false,
          "start": 460,
          "end": 483
        }
      ],
      "declare": false,
      "start": 456,
      "end": 484
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 485,
          "end": 486
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "drunkOO",
          "optional": false,
          "typeAnnotation": null,
          "start": 487,
          "end": 494
        },
        "optional": false,
        "computed": false,
        "start": 485,
        "end": 494
      },
      "directive": null,
      "start": 485,
      "end": 494
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 495,
          "end": 496
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberOxen",
          "optional": false,
          "typeAnnotation": null,
          "start": 497,
          "end": 507
        },
        "optional": false,
        "computed": false,
        "start": 495,
        "end": 507
      },
      "directive": null,
      "start": 495,
      "end": 507
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 24,
  "end": 508
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 24,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "Dragon",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "numberEaten",
    "start": 40,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "numberEaten",
    "start": 72,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "numberEaten",
    "start": 86,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Firedrake",
    "start": 116,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 126,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Dragon",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 147,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 171,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 194,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "Conestoga",
    "start": 200,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 210,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Wagon",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 230,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 242,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "drunkOO",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "String",
    "value": "'nope'",
    "start": 309,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 377,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "circle",
    "start": 384,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "others",
    "start": 391,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 400,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "Wagon",
    "start": 407,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 427,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "others",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 441,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 456,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "Conestoga",
    "start": 468,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 478,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "drunkOO",
    "start": 487,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "numberOxen",
    "start": 497,
    "end": 507
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Soup",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 58
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "flavour",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 66
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 74,
                  "end": 78
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "flavour",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 86
                },
                "optional": false,
                "computed": false,
                "start": 74,
                "end": 86
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "flavour",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 96
              },
              "start": 74,
              "end": 96
            },
            "directive": null,
            "start": 74,
            "end": 96
          }
        ],
        "start": 68,
        "end": 98
      },
      "expression": false,
      "start": 45,
      "end": 98
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chowder",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 172
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Soup",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 185
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 195
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 215,
                        "end": 219
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "flavour",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 220,
                        "end": 227
                      },
                      "optional": false,
                      "computed": false,
                      "start": 215,
                      "end": 227
                    },
                    "start": 208,
                    "end": 227
                  }
                ],
                "start": 198,
                "end": 233
              },
              "expression": false,
              "start": 195,
              "end": 233
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 192,
            "end": 233
          }
        ],
        "start": 186,
        "end": 235
      },
      "abstract": false,
      "declare": false,
      "start": 159,
      "end": 235
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "soup",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 245
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Soup",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 256
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 257,
                "end": 258
              }
            ],
            "start": 248,
            "end": 259
          },
          "definite": false,
          "start": 241,
          "end": 259
        }
      ],
      "declare": false,
      "start": 237,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "soup",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 265
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "flavour",
          "optional": false,
          "typeAnnotation": null,
          "start": 266,
          "end": 273
        },
        "optional": false,
        "computed": false,
        "start": 261,
        "end": 273
      },
      "directive": null,
      "start": 261,
      "end": 273
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "chowder",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 285
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Chowder",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 299
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "claim",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 307
                    },
                    "value": {
                      "type": "Literal",
                      "value": "ignorant",
                      "raw": "\"ignorant\"",
                      "start": 309,
                      "end": 319
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 302,
                    "end": 319
                  }
                ],
                "start": 300,
                "end": 321
              }
            ],
            "start": 288,
            "end": 322
          },
          "definite": false,
          "start": 278,
          "end": 322
        }
      ],
      "declare": false,
      "start": 274,
      "end": 323
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "chowder",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 331
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "flavour",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 339
          },
          "optional": false,
          "computed": false,
          "start": 324,
          "end": 339
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "claim",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 345
        },
        "optional": false,
        "computed": false,
        "start": 324,
        "end": 345
      },
      "directive": null,
      "start": 324,
      "end": 345
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "errorNoArgs",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 361
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Chowder",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 375
            },
            "typeArguments": null,
            "arguments": [],
            "start": 364,
            "end": 377
          },
          "definite": false,
          "start": 350,
          "end": 377
        }
      ],
      "declare": false,
      "start": 346,
      "end": 378
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "errorArgType",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 395
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Chowder",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 409
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 410,
                "end": 411
              }
            ],
            "start": 398,
            "end": 412
          },
          "definite": false,
          "start": 383,
          "end": 412
        }
      ],
      "declare": false,
      "start": 379,
      "end": 413
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 414
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 45,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "Soup",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "flavour",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "flavour",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "flavour",
    "start": 89,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 159,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "Chowder",
    "start": 165,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 173,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Soup",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 208,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "flavour",
    "start": 220,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "soup",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 248,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "Soup",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "soup",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "flavour",
    "start": 266,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 274,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "chowder",
    "start": 278,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "Chowder",
    "start": 292,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "claim",
    "start": 302,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "String",
    "value": "\"ignorant\"",
    "start": 309,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "chowder",
    "start": 324,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "flavour",
    "start": 332,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "claim",
    "start": 340,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 346,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "errorNoArgs",
    "start": 350,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 364,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "Chowder",
    "start": 368,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "errorArgType",
    "start": 383,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 398,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "Chowder",
    "start": 402,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  }
]
```
