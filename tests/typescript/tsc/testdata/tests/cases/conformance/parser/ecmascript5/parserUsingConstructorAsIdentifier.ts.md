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
        "name": "define",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 23
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 35
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "instanceMembers",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 52
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "staticMembers",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 67
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
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 94
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 108
                },
                "operator": "||",
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
                    "body": [],
                    "start": 124,
                    "end": 127
                  },
                  "expression": false,
                  "start": 112,
                  "end": 127
                },
                "start": 97,
                "end": 127
              },
              "start": 83,
              "end": 127
            },
            "directive": null,
            "start": 83,
            "end": 128
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PluginUtilities",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 156
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Utilities",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 166
                  },
                  "optional": false,
                  "computed": false,
                  "start": 141,
                  "end": 166
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "markSupportedForProcessing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 193
                },
                "optional": false,
                "computed": false,
                "start": 141,
                "end": 193
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 205
                }
              ],
              "optional": false,
              "start": 141,
              "end": 206
            },
            "directive": null,
            "start": 141,
            "end": 207
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "instanceMembers",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 239
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "initializeProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 279
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 280,
                          "end": 291
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 292,
                          "end": 301
                        },
                        "optional": false,
                        "computed": false,
                        "start": 280,
                        "end": 301
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "instanceMembers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 303,
                        "end": 318
                      }
                    ],
                    "optional": false,
                    "start": 259,
                    "end": 319
                  },
                  "directive": null,
                  "start": 259,
                  "end": 320
                }
              ],
              "start": 241,
              "end": 334
            },
            "alternate": null,
            "start": 220,
            "end": 334
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticMembers",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 364
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "initializeProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 384,
                      "end": 404
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 405,
                        "end": 416
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticMembers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 418,
                        "end": 431
                      }
                    ],
                    "optional": false,
                    "start": 384,
                    "end": 432
                  },
                  "directive": null,
                  "start": 384,
                  "end": 433
                }
              ],
              "start": 366,
              "end": 447
            },
            "alternate": null,
            "start": 347,
            "end": 447
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 478
            },
            "start": 460,
            "end": 479
          }
        ],
        "start": 69,
        "end": 489
      },
      "expression": false,
      "start": 8,
      "end": 489
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "derive",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 514
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "baseClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 515,
          "end": 524
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 526,
          "end": 537
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "instanceMembers",
          "optional": false,
          "typeAnnotation": null,
          "start": 539,
          "end": 554
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "staticMembers",
          "optional": false,
          "typeAnnotation": null,
          "start": 556,
          "end": 569
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "baseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 589,
              "end": 598
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 618,
                      "end": 629
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 632,
                        "end": 643
                      },
                      "operator": "||",
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
                          "body": [],
                          "start": 659,
                          "end": 662
                        },
                        "expression": false,
                        "start": 647,
                        "end": 662
                      },
                      "start": 632,
                      "end": 662
                    },
                    "start": 618,
                    "end": 662
                  },
                  "directive": null,
                  "start": 618,
                  "end": 663
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
                        "name": "basePrototype",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 684,
                        "end": 697
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "baseClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 700,
                          "end": 709
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 710,
                          "end": 719
                        },
                        "optional": false,
                        "computed": false,
                        "start": 700,
                        "end": 719
                      },
                      "definite": false,
                      "start": 684,
                      "end": 719
                    }
                  ],
                  "declare": false,
                  "start": 680,
                  "end": 720
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
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 737,
                        "end": 748
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prototype",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 758
                      },
                      "optional": false,
                      "computed": false,
                      "start": 737,
                      "end": 758
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 761,
                          "end": 767
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "create",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 768,
                          "end": 774
                        },
                        "optional": false,
                        "computed": false,
                        "start": 761,
                        "end": 774
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "basePrototype",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 775,
                          "end": 788
                        }
                      ],
                      "optional": false,
                      "start": 761,
                      "end": 789
                    },
                    "start": 737,
                    "end": 789
                  },
                  "directive": null,
                  "start": 737,
                  "end": 790
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PluginUtilities",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 807,
                          "end": 822
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Utilities",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 823,
                          "end": 832
                        },
                        "optional": false,
                        "computed": false,
                        "start": 807,
                        "end": 832
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "markSupportedForProcessing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 833,
                        "end": 859
                      },
                      "optional": false,
                      "computed": false,
                      "start": 807,
                      "end": 859
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 860,
                        "end": 871
                      }
                    ],
                    "optional": false,
                    "start": 807,
                    "end": 872
                  },
                  "directive": null,
                  "start": 807,
                  "end": 873
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 890,
                        "end": 896
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defineProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 897,
                        "end": 911
                      },
                      "optional": false,
                      "computed": false,
                      "start": 890,
                      "end": 911
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 912,
                          "end": 923
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 924,
                          "end": 933
                        },
                        "optional": false,
                        "computed": false,
                        "start": 912,
                        "end": 933
                      },
                      {
                        "type": "Literal",
                        "value": "constructor",
                        "raw": "\"constructor\"",
                        "start": 935,
                        "end": 948
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 952,
                              "end": 957
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "constructor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 959,
                              "end": 970
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 952,
                            "end": 970
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "writable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 972,
                              "end": 980
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 982,
                              "end": 986
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 972,
                            "end": 986
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "configurable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 988,
                              "end": 1000
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 1002,
                              "end": 1006
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 988,
                            "end": 1006
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "enumerable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1008,
                              "end": 1018
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 1020,
                              "end": 1024
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1008,
                            "end": 1024
                          }
                        ],
                        "start": 950,
                        "end": 1026
                      }
                    ],
                    "optional": false,
                    "start": 890,
                    "end": 1027
                  },
                  "directive": null,
                  "start": 890,
                  "end": 1028
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instanceMembers",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1049,
                    "end": 1064
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "initializeProperties",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1088,
                            "end": 1108
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "constructor",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1109,
                                "end": 1120
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prototype",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1121,
                                "end": 1130
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1109,
                              "end": 1130
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "instanceMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1132,
                              "end": 1147
                            }
                          ],
                          "optional": false,
                          "start": 1088,
                          "end": 1148
                        },
                        "directive": null,
                        "start": 1088,
                        "end": 1149
                      }
                    ],
                    "start": 1066,
                    "end": 1167
                  },
                  "alternate": null,
                  "start": 1045,
                  "end": 1167
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "staticMembers",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1188,
                    "end": 1201
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "initializeProperties",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1225,
                            "end": 1245
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "constructor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1246,
                              "end": 1257
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "staticMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1259,
                              "end": 1272
                            }
                          ],
                          "optional": false,
                          "start": 1225,
                          "end": 1273
                        },
                        "directive": null,
                        "start": 1225,
                        "end": 1274
                      }
                    ],
                    "start": 1203,
                    "end": 1292
                  },
                  "alternate": null,
                  "start": 1184,
                  "end": 1292
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1316,
                    "end": 1327
                  },
                  "start": 1309,
                  "end": 1328
                }
              ],
              "start": 600,
              "end": 1342
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "define",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1373,
                      "end": 1379
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1380,
                        "end": 1391
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "instanceMembers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1393,
                        "end": 1408
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticMembers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1410,
                        "end": 1423
                      }
                    ],
                    "optional": false,
                    "start": 1373,
                    "end": 1424
                  },
                  "start": 1366,
                  "end": 1425
                }
              ],
              "start": 1348,
              "end": 1439
            },
            "start": 585,
            "end": 1439
          }
        ],
        "start": 571,
        "end": 1449
      },
      "expression": false,
      "start": 499,
      "end": 1449
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mix",
        "optional": false,
        "typeAnnotation": null,
        "start": 1468,
        "end": 1471
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 1472,
          "end": 1483
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
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1499,
                "end": 1510
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1513,
                  "end": 1524
                },
                "operator": "||",
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
                    "body": [],
                    "start": 1540,
                    "end": 1543
                  },
                  "expression": false,
                  "start": 1528,
                  "end": 1543
                },
                "start": 1513,
                "end": 1543
              },
              "start": 1499,
              "end": 1543
            },
            "directive": null,
            "start": 1499,
            "end": 1544
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1561,
                  "end": 1562
                },
                "init": null,
                "definite": false,
                "start": 1561,
                "end": 1562
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "len",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1564,
                  "end": 1567
                },
                "init": null,
                "definite": false,
                "start": 1564,
                "end": 1567
              }
            ],
            "declare": false,
            "start": 1557,
            "end": 1568
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1586,
                    "end": 1587
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1590,
                    "end": 1591
                  },
                  "start": 1586,
                  "end": 1591
                },
                {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "len",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1593,
                    "end": 1596
                  },
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1599,
                      "end": 1608
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1609,
                      "end": 1615
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1599,
                    "end": 1615
                  },
                  "start": 1593,
                  "end": 1615
                }
              ],
              "start": 1586,
              "end": 1615
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1617,
                "end": 1618
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "len",
                "optional": false,
                "typeAnnotation": null,
                "start": 1621,
                "end": 1624
              },
              "start": 1617,
              "end": 1624
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1626,
                "end": 1627
              },
              "start": 1626,
              "end": 1629
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "initializeProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1649,
                      "end": 1669
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1670,
                          "end": 1681
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1682,
                          "end": 1691
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1670,
                        "end": 1691
                      },
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1693,
                          "end": 1702
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1703,
                          "end": 1704
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1693,
                        "end": 1705
                      }
                    ],
                    "optional": false,
                    "start": 1649,
                    "end": 1706
                  },
                  "directive": null,
                  "start": 1649,
                  "end": 1707
                }
              ],
              "start": 1631,
              "end": 1721
            },
            "start": 1581,
            "end": 1721
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1741,
              "end": 1752
            },
            "start": 1734,
            "end": 1753
          }
        ],
        "start": 1485,
        "end": 1763
      },
      "expression": false,
      "start": 1459,
      "end": 1763
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 8,
  "end": 1763
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "define",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 24,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 37,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 54,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 83,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 97,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 109,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 112,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "PluginUtilities",
    "start": 141,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Utilities",
    "start": 157,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "markSupportedForProcessing",
    "start": 167,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 194,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 224,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "initializeProperties",
    "start": 259,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 280,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 292,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 303,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 351,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "initializeProperties",
    "start": 384,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 405,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 418,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 460,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 467,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 499,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "derive",
    "start": 508,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 515,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 526,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 539,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 556,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 589,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 618,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 632,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 644,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 647,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 680,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "basePrototype",
    "start": 684,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 700,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 710,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 737,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 749,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 761,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 768,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "basePrototype",
    "start": 775,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "PluginUtilities",
    "start": 807,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "Utilities",
    "start": 823,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "markSupportedForProcessing",
    "start": 833,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 860,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 890,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 897,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 912,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 924,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 933,
    "end": 934
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 935,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 952,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 959,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 972,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 980,
    "end": 981
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 982,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "configurable",
    "start": 988,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1002,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "enumerable",
    "start": 1008,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1020,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1045,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 1049,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "initializeProperties",
    "start": 1088,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1109,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1121,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 1132,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1184,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 1188,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "initializeProperties",
    "start": 1225,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1246,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 1259,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1309,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1316,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1343,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1366,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "define",
    "start": 1373,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1380,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 1393,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 1410,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1459,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "mix",
    "start": 1468,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1472,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1499,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1513,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1525,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1528,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1557,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 1564,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1581,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 1593,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1599,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1609,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 1621,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1627,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "initializeProperties",
    "start": 1649,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1670,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1682,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1693,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1734,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1741,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763
  }
]
```
