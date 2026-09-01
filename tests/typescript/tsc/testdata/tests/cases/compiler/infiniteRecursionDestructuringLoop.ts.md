__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 82
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 97
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 109,
                      "end": 113
                    },
                    "typeArguments": null,
                    "start": 109,
                    "end": 113
                  },
                  "start": 109,
                  "end": 115
                },
                "start": 100,
                "end": 115
              },
              "start": 98,
              "end": 115
            },
            "accessibility": null,
            "static": false,
            "start": 89,
            "end": 116
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "index",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 129,
                "end": 135
              },
              "start": 127,
              "end": 135
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 136
          }
        ],
        "start": 83,
        "end": 138
      },
      "declare": false,
      "start": 68,
      "end": 138
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IterateNodes",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 161
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 174
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 180
                      },
                      "typeArguments": null,
                      "start": 176,
                      "end": 180
                    },
                    "start": 174,
                    "end": 180
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 170,
                  "end": 180
                }
              ],
              "start": 168,
              "end": 182
            },
            "start": 166,
            "end": 182
          },
          "start": 162,
          "end": 182
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Node",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 200,
                            "end": 204
                          },
                          "typeArguments": null,
                          "start": 200,
                          "end": 204
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 207,
                          "end": 216
                        }
                      ],
                      "start": 200,
                      "end": 216
                    },
                    "start": 198,
                    "end": 216
                  },
                  "start": 194,
                  "end": 216
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 223
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 228
                  },
                  "optional": false,
                  "computed": false,
                  "start": 219,
                  "end": 228
                },
                "definite": false,
                "start": 194,
                "end": 228
              }
            ],
            "declare": false,
            "start": 190,
            "end": 229
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 245
            },
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
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 265,
                              "end": 273
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 265,
                              "end": 273
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 265,
                            "end": 273
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 275,
                              "end": 280
                            },
                            "value": {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 275,
                                "end": 280
                              },
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "-",
                                "argument": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 284,
                                  "end": 285
                                },
                                "prefix": true,
                                "start": 283,
                                "end": 285
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 275,
                              "end": 285
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 275,
                            "end": 285
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 263,
                        "end": 287
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 290,
                        "end": 294
                      },
                      "definite": false,
                      "start": 263,
                      "end": 294
                    }
                  ],
                  "declare": false,
                  "start": 257,
                  "end": 295
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
                        "name": "activeNode",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Node",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 322,
                                  "end": 326
                                },
                                "typeArguments": null,
                                "start": 322,
                                "end": 326
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 329,
                                "end": 338
                              }
                            ],
                            "start": 322,
                            "end": 338
                          },
                          "start": 320,
                          "end": 338
                        },
                        "start": 310,
                        "end": 338
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 341,
                              "end": 346
                            },
                            "operator": "!=",
                            "right": {
                              "type": "UnaryExpression",
                              "operator": "-",
                              "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 351,
                                "end": 352
                              },
                              "prefix": true,
                              "start": 350,
                              "end": 352
                            },
                            "start": 341,
                            "end": 352
                          },
                          "operator": "&&",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 356,
                            "end": 364
                          },
                          "start": 341,
                          "end": 364
                        },
                        "consequent": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 367,
                            "end": 375
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 376,
                            "end": 381
                          },
                          "optional": false,
                          "computed": true,
                          "start": 367,
                          "end": 382
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 385,
                          "end": 394
                        },
                        "start": 341,
                        "end": 394
                      },
                      "definite": false,
                      "start": 310,
                      "end": 394
                    }
                  ],
                  "declare": false,
                  "start": 304,
                  "end": 395
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 405,
                      "end": 409
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "activeNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 412,
                      "end": 422
                    },
                    "start": 405,
                    "end": 422
                  },
                  "directive": null,
                  "start": 405,
                  "end": 423
                }
              ],
              "start": 247,
              "end": 429
            },
            "start": 234,
            "end": 429
          }
        ],
        "start": 184,
        "end": 431
      },
      "expression": false,
      "start": 140,
      "end": 431
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 463,
        "end": 469
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 484
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 486,
                    "end": 492
                  },
                  "typeArguments": null,
                  "start": 486,
                  "end": 492
                },
                "start": 486,
                "end": 494
              },
              "start": 484,
              "end": 494
            },
            "accessibility": null,
            "static": false,
            "start": 476,
            "end": 495
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "index",
              "optional": false,
              "typeAnnotation": null,
              "start": 500,
              "end": 505
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 508,
                "end": 514
              },
              "start": 506,
              "end": 514
            },
            "accessibility": null,
            "static": false,
            "start": 500,
            "end": 515
          }
        ],
        "start": 470,
        "end": 517
      },
      "declare": false,
      "start": 453,
      "end": 517
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 528,
        "end": 529
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "init",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 542
              },
              "typeArguments": null,
              "start": 536,
              "end": 542
            },
            "start": 534,
            "end": 542
          },
          "start": 530,
          "end": 542
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 560,
                            "end": 566
                          },
                          "typeArguments": null,
                          "start": 560,
                          "end": 566
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 569,
                          "end": 578
                        }
                      ],
                      "start": 560,
                      "end": 578
                    },
                    "start": 558,
                    "end": 578
                  },
                  "start": 554,
                  "end": 578
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "init",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 581,
                  "end": 585
                },
                "definite": false,
                "start": 554,
                "end": 585
              }
            ],
            "declare": false,
            "start": 550,
            "end": 586
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null,
              "start": 598,
              "end": 602
            },
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
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 622,
                              "end": 630
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 622,
                              "end": 630
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 622,
                            "end": 630
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 632,
                              "end": 637
                            },
                            "value": {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 632,
                                "end": 637
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 640,
                                "end": 641
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 632,
                              "end": 641
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 632,
                            "end": 641
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 620,
                        "end": 643
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 646,
                        "end": 650
                      },
                      "definite": false,
                      "start": 620,
                      "end": 650
                    }
                  ],
                  "declare": false,
                  "start": 614,
                  "end": 651
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 660,
                      "end": 664
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "children",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 667,
                        "end": 675
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 676,
                        "end": 681
                      },
                      "optional": false,
                      "computed": true,
                      "start": 667,
                      "end": 682
                    },
                    "start": 660,
                    "end": 682
                  },
                  "directive": null,
                  "start": 660,
                  "end": 683
                }
              ],
              "start": 604,
              "end": 689
            },
            "start": 591,
            "end": 689
          }
        ],
        "start": 544,
        "end": 691
      },
      "expression": false,
      "start": 519,
      "end": 691
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 691
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 68,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 89,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 100,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 140,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "IterateNodes",
    "start": 149,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 170,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 176,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 207,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 257,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 265,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 275,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 283,
    "end": 284
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 290,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 304,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "activeNode",
    "start": 310,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 329,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 341,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 350,
    "end": 351
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 353,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 356,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 367,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 376,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 385,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 405,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "activeNode",
    "start": 412,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 453,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "MyNode",
    "start": 463,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 476,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "MyNode",
    "start": 486,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 508,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 519,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 530,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "MyNode",
    "start": 536,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 550,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 554,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "MyNode",
    "start": 560,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 569,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 581,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 591,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 598,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 614,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 622,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 632,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 646,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 660,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 667,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 676,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 690,
    "end": 691
  }
]
```
