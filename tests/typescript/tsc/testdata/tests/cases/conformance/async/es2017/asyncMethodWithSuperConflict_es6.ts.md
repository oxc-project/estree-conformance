__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
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
                "body": [],
                "start": 18,
                "end": 25
              },
              "expression": false,
              "start": 15,
              "end": 25
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 25
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
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
                "body": [],
                "start": 34,
                "end": 41
              },
              "expression": false,
              "start": 31,
              "end": 41
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 30,
            "end": 41
          }
        ],
        "start": 8,
        "end": 43
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 52
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
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
              "name": "simple",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 158
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 177,
                          "end": 183
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 186,
                          "end": 190
                        },
                        "definite": false,
                        "start": 177,
                        "end": 190
                      }
                    ],
                    "declare": false,
                    "start": 171,
                    "end": 191
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_superIndex",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 206,
                          "end": 217
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 220,
                          "end": 224
                        },
                        "definite": false,
                        "start": 206,
                        "end": 224
                      }
                    ],
                    "declare": false,
                    "start": 200,
                    "end": 225
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 271,
                          "end": 276
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 277,
                          "end": 278
                        },
                        "optional": false,
                        "computed": false,
                        "start": 271,
                        "end": 278
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 271,
                      "end": 280
                    },
                    "directive": null,
                    "start": 271,
                    "end": 281
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 327,
                          "end": 332
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 333,
                          "end": 334
                        },
                        "optional": false,
                        "computed": false,
                        "start": 327,
                        "end": 334
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 327,
                      "end": 336
                    },
                    "directive": null,
                    "start": 327,
                    "end": 337
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 383,
                          "end": 388
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 389,
                          "end": 392
                        },
                        "optional": false,
                        "computed": true,
                        "start": 383,
                        "end": 393
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 383,
                      "end": 395
                    },
                    "directive": null,
                    "start": 383,
                    "end": 396
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 446,
                          "end": 447
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 450,
                            "end": 455
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 456,
                            "end": 457
                          },
                          "optional": false,
                          "computed": false,
                          "start": 450,
                          "end": 457
                        },
                        "definite": false,
                        "start": 446,
                        "end": 457
                      }
                    ],
                    "declare": false,
                    "start": 440,
                    "end": 458
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 507,
                          "end": 508
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 511,
                            "end": 516
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 517,
                            "end": 520
                          },
                          "optional": false,
                          "computed": true,
                          "start": 511,
                          "end": 521
                        },
                        "definite": false,
                        "start": 507,
                        "end": 521
                      }
                    ],
                    "declare": false,
                    "start": 501,
                    "end": 522
                  }
                ],
                "start": 161,
                "end": 528
              },
              "expression": false,
              "start": 158,
              "end": 528
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 146,
            "end": 528
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "advanced",
              "optional": false,
              "typeAnnotation": null,
              "start": 620,
              "end": 628
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 647,
                          "end": 653
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 656,
                          "end": 660
                        },
                        "definite": false,
                        "start": 647,
                        "end": 660
                      }
                    ],
                    "declare": false,
                    "start": 641,
                    "end": 661
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_superIndex",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 676,
                          "end": 687
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 690,
                          "end": 694
                        },
                        "definite": false,
                        "start": 676,
                        "end": 694
                      }
                    ],
                    "declare": false,
                    "start": 670,
                    "end": 695
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 710,
                          "end": 711
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 720,
                            "end": 722
                          },
                          "id": null,
                          "generator": false,
                          "start": 714,
                          "end": 722
                        },
                        "definite": false,
                        "start": 710,
                        "end": 722
                      }
                    ],
                    "declare": false,
                    "start": 704,
                    "end": 723
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 770,
                          "end": 775
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 776,
                          "end": 777
                        },
                        "optional": false,
                        "computed": false,
                        "start": 770,
                        "end": 777
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 770,
                      "end": 779
                    },
                    "directive": null,
                    "start": 770,
                    "end": 780
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 826,
                          "end": 831
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 832,
                          "end": 835
                        },
                        "optional": false,
                        "computed": true,
                        "start": 826,
                        "end": 836
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 826,
                      "end": 838
                    },
                    "directive": null,
                    "start": 826,
                    "end": 839
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 889,
                          "end": 890
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 893,
                            "end": 898
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 899,
                            "end": 900
                          },
                          "optional": false,
                          "computed": false,
                          "start": 893,
                          "end": 900
                        },
                        "definite": false,
                        "start": 889,
                        "end": 900
                      }
                    ],
                    "declare": false,
                    "start": 883,
                    "end": 901
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 950,
                          "end": 951
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 954,
                            "end": 959
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 960,
                            "end": 963
                          },
                          "optional": false,
                          "computed": true,
                          "start": 954,
                          "end": 964
                        },
                        "definite": false,
                        "start": 950,
                        "end": 964
                      }
                    ],
                    "declare": false,
                    "start": 944,
                    "end": 965
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1011,
                          "end": 1016
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1017,
                          "end": 1018
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1011,
                        "end": 1018
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1021,
                        "end": 1022
                      },
                      "start": 1011,
                      "end": 1022
                    },
                    "directive": null,
                    "start": 1011,
                    "end": 1023
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1068,
                          "end": 1073
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 1074,
                          "end": 1077
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1068,
                        "end": 1078
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1081,
                        "end": 1082
                      },
                      "start": 1068,
                      "end": 1082
                    },
                    "directive": null,
                    "start": 1068,
                    "end": 1083
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1149,
                              "end": 1150
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1152,
                                "end": 1157
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1158,
                                "end": 1159
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1152,
                              "end": 1159
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1149,
                            "end": 1159
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1147,
                        "end": 1161
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1166,
                              "end": 1167
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1166,
                              "end": 1167
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1166,
                            "end": 1167
                          }
                        ],
                        "start": 1164,
                        "end": 1169
                      },
                      "start": 1147,
                      "end": 1169
                    },
                    "directive": null,
                    "start": 1146,
                    "end": 1171
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1236,
                              "end": 1237
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1239,
                                "end": 1244
                              },
                              "property": {
                                "type": "Literal",
                                "value": "x",
                                "raw": "\"x\"",
                                "start": 1245,
                                "end": 1248
                              },
                              "optional": false,
                              "computed": true,
                              "start": 1239,
                              "end": 1249
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1236,
                            "end": 1249
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1234,
                        "end": 1251
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1256,
                              "end": 1257
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1256,
                              "end": 1257
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1256,
                            "end": 1257
                          }
                        ],
                        "start": 1254,
                        "end": 1259
                      },
                      "start": 1234,
                      "end": 1259
                    },
                    "directive": null,
                    "start": 1233,
                    "end": 1261
                  }
                ],
                "start": 631,
                "end": 1267
              },
              "expression": false,
              "start": 628,
              "end": 1267
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 614,
            "end": 1267
          }
        ],
        "start": 63,
        "end": 1269
      },
      "abstract": false,
      "declare": false,
      "start": 45,
      "end": 1269
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1269
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 53,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 146,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "simple",
    "start": 152,
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
    "value": "const",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "_super",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Null",
    "value": "null",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 200,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "_superIndex",
    "start": 206,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Null",
    "value": "null",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 271,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 327,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 388,
    "end": 389
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 389,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 440,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 501,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 511,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 516,
    "end": 517
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 614,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "advanced",
    "start": 620,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 641,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "_super",
    "start": 647,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 654,
    "end": 655
  },
  {
    "type": "Null",
    "value": "null",
    "start": 656,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 670,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "_superIndex",
    "start": 676,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 688,
    "end": 689
  },
  {
    "type": "Null",
    "value": "null",
    "start": 690,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 704,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 717,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 770,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 826,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 831,
    "end": 832
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 832,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 883,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 893,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 900,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 944,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 952,
    "end": 953
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 954,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 959,
    "end": 960
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 960,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1011,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1068,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 1074,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1152,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1239,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 1245,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1268,
    "end": 1269
  }
]
```
