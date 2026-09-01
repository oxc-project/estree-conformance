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
        "name": "CharacterInfo",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 58
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
              "name": "isDecimalDigit",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 93
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 97,
                      "end": 103
                    },
                    "start": 95,
                    "end": 103
                  },
                  "start": 94,
                  "end": 103
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 106,
                  "end": 113
                },
                "start": 104,
                "end": 113
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 132
                        },
                        "operator": ">=",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CharacterCodes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 136,
                            "end": 150
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 151,
                            "end": 153
                          },
                          "optional": false,
                          "computed": false,
                          "start": 136,
                          "end": 153
                        },
                        "start": 131,
                        "end": 153
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 157,
                          "end": 158
                        },
                        "operator": "<=",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CharacterCodes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 162,
                            "end": 176
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_9",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 177,
                            "end": 179
                          },
                          "optional": false,
                          "computed": false,
                          "start": 162,
                          "end": 179
                        },
                        "start": 157,
                        "end": 179
                      },
                      "start": 131,
                      "end": 179
                    },
                    "start": 124,
                    "end": 180
                  }
                ],
                "start": 114,
                "end": 186
              },
              "expression": false,
              "start": 93,
              "end": 186
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 65,
            "end": 186
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isHexDigit",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 216
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 220,
                      "end": 226
                    },
                    "start": 218,
                    "end": 226
                  },
                  "start": 217,
                  "end": 226
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 229,
                  "end": 236
                },
                "start": 227,
                "end": 236
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isDecimalDigit",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 254,
                            "end": 268
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 269,
                              "end": 270
                            }
                          ],
                          "optional": false,
                          "start": 254,
                          "end": 271
                        },
                        "operator": "||",
                        "right": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 291,
                              "end": 292
                            },
                            "operator": ">=",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 296,
                                "end": 310
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 311,
                                "end": 312
                              },
                              "optional": false,
                              "computed": false,
                              "start": 296,
                              "end": 312
                            },
                            "start": 291,
                            "end": 312
                          },
                          "operator": "&&",
                          "right": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 316,
                              "end": 317
                            },
                            "operator": "<=",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 321,
                                "end": 335
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 336,
                                "end": 337
                              },
                              "optional": false,
                              "computed": false,
                              "start": 321,
                              "end": 337
                            },
                            "start": 316,
                            "end": 337
                          },
                          "start": 291,
                          "end": 337
                        },
                        "start": 254,
                        "end": 338
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 358,
                            "end": 359
                          },
                          "operator": ">=",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CharacterCodes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 363,
                              "end": 377
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 378,
                              "end": 379
                            },
                            "optional": false,
                            "computed": false,
                            "start": 363,
                            "end": 379
                          },
                          "start": 358,
                          "end": 379
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 383,
                            "end": 384
                          },
                          "operator": "<=",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CharacterCodes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 388,
                              "end": 402
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 403,
                              "end": 404
                            },
                            "optional": false,
                            "computed": false,
                            "start": 388,
                            "end": 404
                          },
                          "start": 383,
                          "end": 404
                        },
                        "start": 358,
                        "end": 404
                      },
                      "start": 254,
                      "end": 405
                    },
                    "start": 247,
                    "end": 406
                  }
                ],
                "start": 237,
                "end": 412
              },
              "expression": false,
              "start": 216,
              "end": 412
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 192,
            "end": 412
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hexValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 440
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 444,
                      "end": 450
                    },
                    "start": 442,
                    "end": 450
                  },
                  "start": 441,
                  "end": 450
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 453,
                  "end": 459
                },
                "start": 451,
                "end": 459
              },
              "body": {
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
                          "name": "Debug",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 470,
                          "end": 475
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "assert",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 476,
                          "end": 482
                        },
                        "optional": false,
                        "computed": false,
                        "start": 470,
                        "end": 482
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isHexDigit",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 483,
                            "end": 493
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 494,
                              "end": 495
                            }
                          ],
                          "optional": false,
                          "start": 483,
                          "end": 496
                        }
                      ],
                      "optional": false,
                      "start": 470,
                      "end": 497
                    },
                    "directive": null,
                    "start": 470,
                    "end": 498
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isDecimalDigit",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 514,
                          "end": 528
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 529,
                            "end": 530
                          }
                        ],
                        "optional": false,
                        "start": 514,
                        "end": 531
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 547,
                          "end": 548
                        },
                        "operator": "-",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CharacterCodes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 551,
                            "end": 565
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 566,
                            "end": 568
                          },
                          "optional": false,
                          "computed": false,
                          "start": 551,
                          "end": 568
                        },
                        "start": 547,
                        "end": 568
                      },
                      "alternate": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 585,
                              "end": 586
                            },
                            "operator": ">=",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 590,
                                "end": 604
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 605,
                                "end": 606
                              },
                              "optional": false,
                              "computed": false,
                              "start": 590,
                              "end": 606
                            },
                            "start": 585,
                            "end": 606
                          },
                          "operator": "&&",
                          "right": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 610,
                              "end": 611
                            },
                            "operator": "<=",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 615,
                                "end": 629
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 630,
                                "end": 631
                              },
                              "optional": false,
                              "computed": false,
                              "start": 615,
                              "end": 631
                            },
                            "start": 610,
                            "end": 631
                          },
                          "start": 585,
                          "end": 631
                        },
                        "consequent": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 651,
                              "end": 652
                            },
                            "operator": "-",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 655,
                                "end": 669
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 670,
                                "end": 671
                              },
                              "optional": false,
                              "computed": false,
                              "start": 655,
                              "end": 671
                            },
                            "start": 651,
                            "end": 671
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 674,
                            "end": 676
                          },
                          "start": 651,
                          "end": 676
                        },
                        "alternate": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 695,
                              "end": 696
                            },
                            "operator": "-",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 699,
                                "end": 713
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 714,
                                "end": 715
                              },
                              "optional": false,
                              "computed": false,
                              "start": 699,
                              "end": 715
                            },
                            "start": 695,
                            "end": 715
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 718,
                            "end": 720
                          },
                          "start": 695,
                          "end": 720
                        },
                        "start": 584,
                        "end": 720
                      },
                      "start": 514,
                      "end": 720
                    },
                    "start": 507,
                    "end": 721
                  }
                ],
                "start": 460,
                "end": 727
              },
              "expression": false,
              "start": 440,
              "end": 727
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 418,
            "end": 727
          }
        ],
        "start": 59,
        "end": 729
      },
      "abstract": false,
      "declare": false,
      "start": 39,
      "end": 729
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 730
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "CharacterInfo",
    "start": 45,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 65,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 72,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "isDecimalDigit",
    "start": 79,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 106,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 124,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 133,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "CharacterCodes",
    "start": 136,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "_0",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 154,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 159,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "CharacterCodes",
    "start": 162,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "_9",
    "start": 177,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 192,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 199,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "isHexDigit",
    "start": 206,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 229,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 247,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "isDecimalDigit",
    "start": 254,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 293,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "CharacterCodes",
    "start": 296,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 313,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 318,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "CharacterCodes",
    "start": 321,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 360,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "CharacterCodes",
    "start": 363,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 380,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 385,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "CharacterCodes",
    "start": 388,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 418,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 425,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "hexValue",
    "start": 432,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "Debug",
    "start": 470,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 476,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "isHexDigit",
    "start": 483,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 507,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "isDecimalDigit",
    "start": 514,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "CharacterCodes",
    "start": 551,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "_0",
    "start": 566,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 587,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "CharacterCodes",
    "start": 590,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 607,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 612,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "CharacterCodes",
    "start": 615,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "CharacterCodes",
    "start": 655,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 672,
    "end": 673
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 674,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "CharacterCodes",
    "start": 699,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 716,
    "end": 717
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 718,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729
  }
]
```
