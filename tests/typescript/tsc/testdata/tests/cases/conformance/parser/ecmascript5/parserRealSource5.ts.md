__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 231
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PrintContext",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 314
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "builder",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 339
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 342,
                      "end": 344
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 325,
                    "end": 345
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "indent1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 361,
                      "end": 368
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": "  ",
                      "raw": "\"  \"",
                      "start": 371,
                      "end": 375
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 354,
                    "end": 376
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "indentStrings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 405
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 407,
                          "end": 413
                        },
                        "start": 407,
                        "end": 415
                      },
                      "start": 405,
                      "end": 415
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 418,
                      "end": 420
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 385,
                    "end": 421
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "indentAmt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 446
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 449,
                      "end": 450
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 430,
                    "end": 451
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 461,
                      "end": 472
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
                            "name": "outfile",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ITextWriter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 490,
                                  "end": 501
                                },
                                "typeArguments": null,
                                "start": 490,
                                "end": 501
                              },
                              "start": 488,
                              "end": 501
                            },
                            "start": 481,
                            "end": 501
                          },
                          "readonly": false,
                          "static": false,
                          "start": 474,
                          "end": 501
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parser",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Parser",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 518,
                                  "end": 524
                                },
                                "typeArguments": null,
                                "start": 518,
                                "end": 524
                              },
                              "start": 516,
                              "end": 524
                            },
                            "start": 510,
                            "end": 524
                          },
                          "readonly": false,
                          "static": false,
                          "start": 503,
                          "end": 524
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 526,
                        "end": 537
                      },
                      "expression": false,
                      "start": 473,
                      "end": 537
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 461,
                    "end": 537
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "increaseIndent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 554,
                      "end": 568
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
                              "type": "UpdateExpression",
                              "operator": "++",
                              "prefix": false,
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 585,
                                  "end": 589
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "indentAmt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 590,
                                  "end": 599
                                },
                                "optional": false,
                                "computed": false,
                                "start": 585,
                                "end": 599
                              },
                              "start": 585,
                              "end": 601
                            },
                            "directive": null,
                            "start": 585,
                            "end": 602
                          }
                        ],
                        "start": 571,
                        "end": 612
                      },
                      "expression": false,
                      "start": 568,
                      "end": 612
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 547,
                    "end": 612
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "decreaseIndent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 629,
                      "end": 643
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
                              "type": "UpdateExpression",
                              "operator": "--",
                              "prefix": false,
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 660,
                                  "end": 664
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "indentAmt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 665,
                                  "end": 674
                                },
                                "optional": false,
                                "computed": false,
                                "start": 660,
                                "end": 674
                              },
                              "start": 660,
                              "end": 676
                            },
                            "directive": null,
                            "start": 660,
                            "end": 677
                          }
                        ],
                        "start": 646,
                        "end": 687
                      },
                      "expression": false,
                      "start": 643,
                      "end": 687
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 622,
                    "end": 687
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "startLine",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 713
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
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 734,
                                    "end": 738
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "builder",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 739,
                                    "end": 746
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 734,
                                  "end": 746
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 747,
                                  "end": 753
                                },
                                "optional": false,
                                "computed": false,
                                "start": 734,
                                "end": 753
                              },
                              "operator": ">",
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 756,
                                "end": 757
                              },
                              "start": 734,
                              "end": 757
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "CompilerDiagnostics",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 777,
                                        "end": 796
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Alert",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 797,
                                        "end": 802
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 777,
                                      "end": 802
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 803,
                                          "end": 807
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "builder",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 808,
                                          "end": 815
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 803,
                                        "end": 815
                                      }
                                    ],
                                    "optional": false,
                                    "start": 777,
                                    "end": 816
                                  },
                                  "directive": null,
                                  "start": 777,
                                  "end": 817
                                }
                              ],
                              "start": 759,
                              "end": 831
                            },
                            "alternate": null,
                            "start": 730,
                            "end": 831
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
                                  "name": "indentString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 848,
                                  "end": 860
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 863,
                                      "end": 867
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "indentStrings",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 868,
                                      "end": 881
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 863,
                                    "end": 881
                                  },
                                  "property": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 882,
                                      "end": 886
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "indentAmt",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 887,
                                      "end": 896
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 882,
                                    "end": 896
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 863,
                                  "end": 897
                                },
                                "definite": false,
                                "start": 848,
                                "end": 897
                              }
                            ],
                            "declare": false,
                            "start": 844,
                            "end": 898
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "indentString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 915,
                                "end": 927
                              },
                              "operator": "===",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "undefined",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 932,
                                "end": 941
                              },
                              "start": 915,
                              "end": 941
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
                                      "name": "indentString",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 961,
                                      "end": 973
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": "",
                                      "raw": "\"\"",
                                      "start": 976,
                                      "end": 978
                                    },
                                    "start": 961,
                                    "end": 978
                                  },
                                  "directive": null,
                                  "start": 961,
                                  "end": 979
                                },
                                {
                                  "type": "ForStatement",
                                  "init": {
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
                                          "start": 1005,
                                          "end": 1006
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 1009,
                                          "end": 1010
                                        },
                                        "definite": false,
                                        "start": 1005,
                                        "end": 1010
                                      }
                                    ],
                                    "declare": false,
                                    "start": 1001,
                                    "end": 1010
                                  },
                                  "test": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1012,
                                      "end": 1013
                                    },
                                    "operator": "<",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1016,
                                        "end": 1020
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "indentAmt",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1021,
                                        "end": 1030
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1016,
                                      "end": 1030
                                    },
                                    "start": 1012,
                                    "end": 1030
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
                                      "start": 1032,
                                      "end": 1033
                                    },
                                    "start": 1032,
                                    "end": 1035
                                  },
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "indentString",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1059,
                                            "end": 1071
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 1075,
                                              "end": 1079
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "indent1",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1080,
                                              "end": 1087
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 1075,
                                            "end": 1087
                                          },
                                          "start": 1059,
                                          "end": 1087
                                        },
                                        "directive": null,
                                        "start": 1059,
                                        "end": 1088
                                      }
                                    ],
                                    "start": 1037,
                                    "end": 1106
                                  },
                                  "start": 996,
                                  "end": 1106
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
                                          "type": "ThisExpression",
                                          "start": 1123,
                                          "end": 1127
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "indentStrings",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1128,
                                          "end": 1141
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1123,
                                        "end": 1141
                                      },
                                      "property": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1142,
                                          "end": 1146
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "indentAmt",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1147,
                                          "end": 1156
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1142,
                                        "end": 1156
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 1123,
                                      "end": 1157
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "indentString",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1160,
                                      "end": 1172
                                    },
                                    "start": 1123,
                                    "end": 1172
                                  },
                                  "directive": null,
                                  "start": 1123,
                                  "end": 1173
                                }
                              ],
                              "start": 943,
                              "end": 1187
                            },
                            "alternate": null,
                            "start": 911,
                            "end": 1187
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "+=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1200,
                                  "end": 1204
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1205,
                                  "end": 1212
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1200,
                                "end": 1212
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "indentString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1216,
                                "end": 1228
                              },
                              "start": 1200,
                              "end": 1228
                            },
                            "directive": null,
                            "start": 1200,
                            "end": 1229
                          }
                        ],
                        "start": 716,
                        "end": 1239
                      },
                      "expression": false,
                      "start": 713,
                      "end": 1239
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 697,
                    "end": 1239
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "write",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1256,
                      "end": 1261
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1262,
                          "end": 1263
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
                              "operator": "+=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1279,
                                  "end": 1283
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1284,
                                  "end": 1291
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1279,
                                "end": 1291
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1295,
                                "end": 1296
                              },
                              "start": 1279,
                              "end": 1296
                            },
                            "directive": null,
                            "start": 1279,
                            "end": 1297
                          }
                        ],
                        "start": 1265,
                        "end": 1307
                      },
                      "expression": false,
                      "start": 1261,
                      "end": 1307
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1249,
                    "end": 1307
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "writeLine",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1324,
                      "end": 1333
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1334,
                          "end": 1335
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
                              "operator": "+=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1351,
                                  "end": 1355
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1356,
                                  "end": 1363
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1351,
                                "end": 1363
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1367,
                                "end": 1368
                              },
                              "start": 1351,
                              "end": 1368
                            },
                            "directive": null,
                            "start": 1351,
                            "end": 1369
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
                                    "type": "ThisExpression",
                                    "start": 1382,
                                    "end": 1386
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "outfile",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1387,
                                    "end": 1394
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1382,
                                  "end": 1394
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "WriteLine",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1395,
                                  "end": 1404
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1382,
                                "end": 1404
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1405,
                                    "end": 1409
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "builder",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1410,
                                    "end": 1417
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1405,
                                  "end": 1417
                                }
                              ],
                              "optional": false,
                              "start": 1382,
                              "end": 1418
                            },
                            "directive": null,
                            "start": 1382,
                            "end": 1419
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
                                  "start": 1432,
                                  "end": 1436
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "builder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1437,
                                  "end": 1444
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1432,
                                "end": 1444
                              },
                              "right": {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\"",
                                "start": 1447,
                                "end": 1449
                              },
                              "start": 1432,
                              "end": 1449
                            },
                            "directive": null,
                            "start": 1432,
                            "end": 1450
                          }
                        ],
                        "start": 1337,
                        "end": 1460
                      },
                      "expression": false,
                      "start": 1333,
                      "end": 1460
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1317,
                    "end": 1460
                  }
                ],
                "start": 315,
                "end": 1467
              },
              "abstract": false,
              "declare": false,
              "start": 296,
              "end": 1467
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 289,
            "end": 1467
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "prePrintAST",
                "optional": false,
                "typeAnnotation": null,
                "start": 1489,
                "end": 1500
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1506,
                        "end": 1509
                      },
                      "typeArguments": null,
                      "start": 1506,
                      "end": 1509
                    },
                    "start": 1504,
                    "end": 1509
                  },
                  "start": 1501,
                  "end": 1509
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1519,
                        "end": 1522
                      },
                      "typeArguments": null,
                      "start": 1519,
                      "end": 1522
                    },
                    "start": 1517,
                    "end": 1522
                  },
                  "start": 1511,
                  "end": 1522
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "walker",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAstWalker",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1532,
                        "end": 1542
                      },
                      "typeArguments": null,
                      "start": 1532,
                      "end": 1542
                    },
                    "start": 1530,
                    "end": 1542
                  },
                  "start": 1524,
                  "end": 1542
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PrintContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1562,
                                "end": 1574
                              },
                              "typeArguments": null,
                              "start": 1562,
                              "end": 1574
                            },
                            "start": 1560,
                            "end": 1574
                          },
                          "start": 1558,
                          "end": 1574
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PrintContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1578,
                              "end": 1590
                            },
                            "typeArguments": null,
                            "start": 1578,
                            "end": 1590
                          },
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "walker",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1591,
                              "end": 1597
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1598,
                              "end": 1603
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1591,
                            "end": 1603
                          },
                          "start": 1577,
                          "end": 1603
                        },
                        "definite": false,
                        "start": 1558,
                        "end": 1603
                      }
                    ],
                    "declare": false,
                    "start": 1554,
                    "end": 1604
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
                          "name": "ast",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1614,
                          "end": 1617
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "print",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1618,
                          "end": 1623
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1614,
                        "end": 1623
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1624,
                          "end": 1626
                        }
                      ],
                      "optional": false,
                      "start": 1614,
                      "end": 1627
                    },
                    "directive": null,
                    "start": 1614,
                    "end": 1628
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
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1637,
                          "end": 1639
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "increaseIndent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1640,
                          "end": 1654
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1637,
                        "end": 1654
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1637,
                      "end": 1656
                    },
                    "directive": null,
                    "start": 1637,
                    "end": 1657
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1673,
                      "end": 1676
                    },
                    "start": 1666,
                    "end": 1677
                  }
                ],
                "start": 1544,
                "end": 1683
              },
              "expression": false,
              "start": 1480,
              "end": 1683
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1473,
            "end": 1683
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "postPrintAST",
                "optional": false,
                "typeAnnotation": null,
                "start": 1706,
                "end": 1718
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ast",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1724,
                        "end": 1727
                      },
                      "typeArguments": null,
                      "start": 1724,
                      "end": 1727
                    },
                    "start": 1722,
                    "end": 1727
                  },
                  "start": 1719,
                  "end": 1727
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AST",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1737,
                        "end": 1740
                      },
                      "typeArguments": null,
                      "start": 1737,
                      "end": 1740
                    },
                    "start": 1735,
                    "end": 1740
                  },
                  "start": 1729,
                  "end": 1740
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "walker",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAstWalker",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1750,
                        "end": 1760
                      },
                      "typeArguments": null,
                      "start": 1750,
                      "end": 1760
                    },
                    "start": 1748,
                    "end": 1760
                  },
                  "start": 1742,
                  "end": 1760
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PrintContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1780,
                                "end": 1792
                              },
                              "typeArguments": null,
                              "start": 1780,
                              "end": 1792
                            },
                            "start": 1778,
                            "end": 1792
                          },
                          "start": 1776,
                          "end": 1792
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PrintContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1796,
                              "end": 1808
                            },
                            "typeArguments": null,
                            "start": 1796,
                            "end": 1808
                          },
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "walker",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1809,
                              "end": 1815
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1816,
                              "end": 1821
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1809,
                            "end": 1821
                          },
                          "start": 1795,
                          "end": 1821
                        },
                        "definite": false,
                        "start": 1776,
                        "end": 1821
                      }
                    ],
                    "declare": false,
                    "start": 1772,
                    "end": 1822
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
                          "name": "pc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1831,
                          "end": 1833
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "decreaseIndent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1834,
                          "end": 1848
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1831,
                        "end": 1848
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1831,
                      "end": 1850
                    },
                    "directive": null,
                    "start": 1831,
                    "end": 1851
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ast",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1867,
                      "end": 1870
                    },
                    "start": 1860,
                    "end": 1871
                  }
                ],
                "start": 1762,
                "end": 1877
              },
              "expression": false,
              "start": 1697,
              "end": 1877
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1690,
            "end": 1877
          }
        ],
        "start": 232,
        "end": 1879
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 211,
      "end": 1879
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 211,
  "end": 1879
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 211,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 221,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 289,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 296,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "PrintContext",
    "start": 302,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 325,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 332,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 342,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 354,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "indent1",
    "start": 361,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 369,
    "end": 370
  },
  {
    "type": "String",
    "value": "\"  \"",
    "start": 371,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 385,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "indentStrings",
    "start": 392,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 407,
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
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 430,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "indentAmt",
    "start": 437,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 461,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 474,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "outfile",
    "start": 481,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "ITextWriter",
    "start": 490,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 503,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "parser",
    "start": 510,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "Parser",
    "start": 518,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 547,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "increaseIndent",
    "start": 554,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
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
    "value": "this",
    "start": 585,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "indentAmt",
    "start": 590,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 622,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "decreaseIndent",
    "start": 629,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 660,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "indentAmt",
    "start": 665,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 674,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 697,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "startLine",
    "start": 704,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 730,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 734,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 739,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 747,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 754,
    "end": 755
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "CompilerDiagnostics",
    "start": 777,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "Alert",
    "start": 797,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 803,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 808,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 844,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "indentString",
    "start": 848,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 863,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "indentStrings",
    "start": 868,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 882,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "indentAmt",
    "start": 887,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 911,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "indentString",
    "start": 915,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 928,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 932,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "indentString",
    "start": 961,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 974,
    "end": 975
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 976,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 996,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1001,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1016,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "indentAmt",
    "start": 1021,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1033,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "indentString",
    "start": 1059,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1075,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "indent1",
    "start": 1080,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1123,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "indentStrings",
    "start": 1128,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1142,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "indentAmt",
    "start": 1147,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "indentString",
    "start": 1160,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1200,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 1205,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1213,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "indentString",
    "start": 1216,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1249,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "write",
    "start": 1256,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1279,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 1284,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1292,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1317,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "writeLine",
    "start": 1324,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1351,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 1356,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1364,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1382,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "outfile",
    "start": 1387,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "WriteLine",
    "start": 1395,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1405,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 1410,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1432,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 1437,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1447,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1473,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1480,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "prePrintAST",
    "start": 1489,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1501,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1506,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1511,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1519,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "walker",
    "start": 1524,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "IAstWalker",
    "start": 1532,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1554,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "pc",
    "start": 1558,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "PrintContext",
    "start": 1562,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "PrintContext",
    "start": 1578,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "walker",
    "start": 1591,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1598,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1614,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "print",
    "start": 1618,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "pc",
    "start": 1624,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "pc",
    "start": 1637,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "increaseIndent",
    "start": 1640,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1666,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1673,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1690,
    "end": 1696
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1697,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "postPrintAST",
    "start": 1706,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1719,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1724,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1729,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1737,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "walker",
    "start": 1742,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "IAstWalker",
    "start": 1750,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1772,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "pc",
    "start": 1776,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "PrintContext",
    "start": 1780,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "PrintContext",
    "start": 1796,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "walker",
    "start": 1809,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1816,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "pc",
    "start": 1831,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "decreaseIndent",
    "start": 1834,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1860,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1867,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1878,
    "end": 1879
  }
]
```
