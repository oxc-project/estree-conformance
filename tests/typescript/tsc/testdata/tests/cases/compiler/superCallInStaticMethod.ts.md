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
        "name": "Doing",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "name": "staticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 44
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
                "start": 47,
                "end": 54
              },
              "expression": false,
              "start": 44,
              "end": 54
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 18,
            "end": 54
          }
        ],
        "start": 12,
        "end": 56
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Other",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 69
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Doing",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 83
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
              "name": "staticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 140
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 153,
                          "end": 158
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "staticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 159,
                          "end": 171
                        },
                        "optional": false,
                        "computed": false,
                        "start": 153,
                        "end": 171
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 153,
                      "end": 173
                    },
                    "directive": null,
                    "start": 153,
                    "end": 174
                  }
                ],
                "start": 143,
                "end": 180
              },
              "expression": false,
              "start": 140,
              "end": 180
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 114,
            "end": 180
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lambdaInsideAStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 267
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
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
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
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 300,
                                  "end": 305
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "staticMethod",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 306,
                                  "end": 318
                                },
                                "optional": false,
                                "computed": false,
                                "start": 300,
                                "end": 318
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 300,
                              "end": 320
                            },
                            "directive": null,
                            "start": 300,
                            "end": 321
                          }
                        ],
                        "start": 286,
                        "end": 331
                      },
                      "id": null,
                      "generator": false,
                      "start": 280,
                      "end": 331
                    },
                    "directive": null,
                    "start": 280,
                    "end": 331
                  }
                ],
                "start": 270,
                "end": 337
              },
              "expression": false,
              "start": 267,
              "end": 337
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 228,
            "end": 337
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "objectLiteralInsideAStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 440
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
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 474,
                            "end": 475
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
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
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Super",
                                        "start": 501,
                                        "end": 506
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "staticMethod",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 507,
                                        "end": 519
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 501,
                                      "end": 519
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 501,
                                    "end": 521
                                  },
                                  "directive": null,
                                  "start": 501,
                                  "end": 522
                                }
                              ],
                              "start": 483,
                              "end": 536
                            },
                            "id": null,
                            "generator": false,
                            "start": 477,
                            "end": 536
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 474,
                          "end": 536
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 550,
                            "end": 551
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 553,
                                "end": 558
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "staticMethod",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 559,
                                "end": 571
                              },
                              "optional": false,
                              "computed": false,
                              "start": 553,
                              "end": 571
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 553,
                            "end": 573
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 550,
                          "end": 573
                        }
                      ],
                      "start": 460,
                      "end": 583
                    },
                    "start": 453,
                    "end": 584
                  }
                ],
                "start": 443,
                "end": 590
              },
              "expression": false,
              "start": 440,
              "end": 590
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 394,
            "end": 590
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 645
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 658,
                          "end": 663
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "staticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 664,
                          "end": 676
                        },
                        "optional": false,
                        "computed": false,
                        "start": 658,
                        "end": 676
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 658,
                      "end": 678
                    },
                    "directive": null,
                    "start": 658,
                    "end": 679
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 696,
                      "end": 697
                    },
                    "start": 689,
                    "end": 698
                  }
                ],
                "start": 648,
                "end": 704
              },
              "expression": false,
              "start": 645,
              "end": 704
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 615,
            "end": 704
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 759
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 767,
                      "end": 773
                    },
                    "start": 765,
                    "end": 773
                  },
                  "start": 760,
                  "end": 773
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 785,
                          "end": 790
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "staticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 791,
                          "end": 803
                        },
                        "optional": false,
                        "computed": false,
                        "start": 785,
                        "end": 803
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 785,
                      "end": 805
                    },
                    "directive": null,
                    "start": 785,
                    "end": 806
                  }
                ],
                "start": 775,
                "end": 812
              },
              "expression": false,
              "start": 759,
              "end": 812
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 729,
            "end": 812
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initializerInAStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 882
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 883,
                    "end": 884
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 887,
                        "end": 892
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 893,
                        "end": 905
                      },
                      "optional": false,
                      "computed": false,
                      "start": 887,
                      "end": 905
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 887,
                    "end": 907
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 907
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 919,
                          "end": 924
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "staticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 925,
                          "end": 937
                        },
                        "optional": false,
                        "computed": false,
                        "start": 919,
                        "end": 937
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 919,
                      "end": 939
                    },
                    "directive": null,
                    "start": 919,
                    "end": 940
                  }
                ],
                "start": 909,
                "end": 946
              },
              "expression": false,
              "start": 882,
              "end": 946
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 842,
            "end": 946
          }
        ],
        "start": 84,
        "end": 948
      },
      "abstract": false,
      "declare": false,
      "start": 58,
      "end": 948
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 948
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
    "value": "Doing",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 25,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "staticMethod",
    "start": 32,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 58,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 64,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 70,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Doing",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 114,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 121,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "staticMethod",
    "start": 128,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 153,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "staticMethod",
    "start": 159,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 228,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 235,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "lambdaInsideAStaticMethod",
    "start": 242,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 283,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "staticMethod",
    "start": 306,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 394,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 401,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "objectLiteralInsideAStaticMethod",
    "start": 408,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "return",
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
    "value": "a",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 501,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "staticMethod",
    "start": 507,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 553,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "staticMethod",
    "start": 559,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 615,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 622,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 629,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "staticGetter",
    "start": 633,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 658,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "staticMethod",
    "start": 664,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 689,
    "end": 695
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 729,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 736,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 743,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "staticGetter",
    "start": 747,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 760,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 767,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 775,
    "end": 776
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 785,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "staticMethod",
    "start": 791,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 842,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 849,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "initializerInAStaticMethod",
    "start": 856,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 887,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "staticMethod",
    "start": 893,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 919,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "staticMethod",
    "start": 925,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 947,
    "end": 948
  }
]
```
