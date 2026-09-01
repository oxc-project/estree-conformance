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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "field",
              "start": 14,
              "end": 20
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 23,
              "end": 24
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 25
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "otherObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 41
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "typeArguments": null,
              "arguments": [],
              "start": 44,
              "end": 51
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 30,
            "end": 52
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 67
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 89,
                            "end": 90
                          },
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 92,
                            "end": 94
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 89,
                          "end": 94
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 96,
                            "end": 97
                          },
                          "value": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6",
                            "start": 99,
                            "end": 100
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 96,
                          "end": 100
                        }
                      ],
                      "start": 87,
                      "end": 102
                    },
                    "start": 80,
                    "end": 103
                  }
                ],
                "start": 70,
                "end": 109
              },
              "expression": false,
              "start": 67,
              "end": 109
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 57,
            "end": 109
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 123
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
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 144,
                          "end": 146
                        },
                        {
                          "type": "Literal",
                          "value": 11,
                          "raw": "11",
                          "start": 148,
                          "end": 150
                        }
                      ],
                      "start": 143,
                      "end": 151
                    },
                    "start": 136,
                    "end": 152
                  }
                ],
                "start": 126,
                "end": 158
              },
              "expression": false,
              "start": 123,
              "end": 158
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 114,
            "end": 158
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
              "start": 163,
              "end": 174
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 194,
                              "end": 200
                            },
                            "start": 192,
                            "end": 200
                          },
                          "start": 191,
                          "end": 200
                        },
                        "init": null,
                        "definite": false,
                        "start": 191,
                        "end": 200
                      }
                    ],
                    "declare": false,
                    "start": 187,
                    "end": 201
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 213,
                              "end": 214
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 216,
                                "end": 220
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "start": 221,
                                "end": 227
                              },
                              "optional": false,
                              "computed": false,
                              "start": 216,
                              "end": 227
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 213,
                            "end": 227
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 229,
                              "end": 230
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 229,
                              "end": 230
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 229,
                            "end": 230
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 232
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 235,
                            "end": 239
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testObject",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 240,
                            "end": 250
                          },
                          "optional": false,
                          "computed": false,
                          "start": 235,
                          "end": 250
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 235,
                        "end": 252
                      },
                      "start": 211,
                      "end": 252
                    },
                    "directive": null,
                    "start": 210,
                    "end": 254
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 265,
                              "end": 269
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "start": 270,
                              "end": 276
                            },
                            "optional": false,
                            "computed": false,
                            "start": 265,
                            "end": 276
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 278,
                            "end": 279
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 264,
                        "end": 280
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 283,
                            "end": 287
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 288,
                            "end": 297
                          },
                          "optional": false,
                          "computed": false,
                          "start": 283,
                          "end": 297
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 283,
                        "end": 299
                      },
                      "start": 264,
                      "end": 299
                    },
                    "directive": null,
                    "start": 263,
                    "end": 301
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 313,
                              "end": 314
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 316,
                                "end": 320
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "start": 321,
                                "end": 327
                              },
                              "optional": false,
                              "computed": false,
                              "start": 316,
                              "end": 327
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 313,
                            "end": 327
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
                              "start": 329,
                              "end": 330
                            },
                            "value": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 333,
                                    "end": 337
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "field",
                                    "start": 338,
                                    "end": 344
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 333,
                                  "end": 344
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 332,
                              "end": 345
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 329,
                            "end": 345
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 311,
                        "end": 347
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 352,
                              "end": 353
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 355,
                              "end": 356
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 352,
                            "end": 356
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
                              "start": 358,
                              "end": 359
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 362,
                                  "end": 363
                                }
                              ],
                              "start": 361,
                              "end": 364
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 358,
                            "end": 364
                          }
                        ],
                        "start": 350,
                        "end": 366
                      },
                      "start": 311,
                      "end": 366
                    },
                    "directive": null,
                    "start": 310,
                    "end": 368
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 378,
                              "end": 382
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "start": 383,
                              "end": 389
                            },
                            "optional": false,
                            "computed": false,
                            "start": 378,
                            "end": 389
                          },
                          {
                            "type": "ArrayPattern",
                            "decorators": [],
                            "elements": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 392,
                                  "end": 396
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "field",
                                  "start": 397,
                                  "end": 403
                                },
                                "optional": false,
                                "computed": false,
                                "start": 392,
                                "end": 403
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 391,
                            "end": 404
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 377,
                        "end": 405
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 409,
                            "end": 410
                          },
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 413,
                                "end": 414
                              }
                            ],
                            "start": 412,
                            "end": 415
                          }
                        ],
                        "start": 408,
                        "end": 416
                      },
                      "start": 377,
                      "end": 416
                    },
                    "directive": null,
                    "start": 377,
                    "end": 417
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 429,
                              "end": 430
                            },
                            "value": {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 432,
                                  "end": 436
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "field",
                                  "start": 437,
                                  "end": 443
                                },
                                "optional": false,
                                "computed": false,
                                "start": 432,
                                "end": 443
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 446,
                                "end": 447
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 432,
                              "end": 447
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 429,
                            "end": 447
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
                              "start": 449,
                              "end": 450
                            },
                            "value": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "AssignmentPattern",
                                  "decorators": [],
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 453,
                                      "end": 457
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "field",
                                      "start": 458,
                                      "end": 464
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 453,
                                    "end": 464
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 467,
                                    "end": 468
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 453,
                                  "end": 468
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 452,
                              "end": 469
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 449,
                            "end": 469
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 427,
                        "end": 471
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 476,
                              "end": 477
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 479,
                              "end": 481
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 476,
                            "end": 481
                          }
                        ],
                        "start": 474,
                        "end": 483
                      },
                      "start": 427,
                      "end": 483
                    },
                    "directive": null,
                    "start": 426,
                    "end": 485
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 495,
                                "end": 499
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "start": 500,
                                "end": 506
                              },
                              "optional": false,
                              "computed": false,
                              "start": 495,
                              "end": 506
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 509,
                              "end": 510
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 495,
                            "end": 510
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 494,
                        "end": 511
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 514,
                        "end": 516
                      },
                      "start": 494,
                      "end": 516
                    },
                    "directive": null,
                    "start": 494,
                    "end": 517
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 527,
                                  "end": 531
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "otherObject",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 532,
                                  "end": 543
                                },
                                "optional": false,
                                "computed": false,
                                "start": 527,
                                "end": 543
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "start": 544,
                                "end": 550
                              },
                              "optional": false,
                              "computed": false,
                              "start": 527,
                              "end": 550
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 553,
                              "end": 554
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 527,
                            "end": 554
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 526,
                        "end": 555
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 558,
                        "end": 560
                      },
                      "start": 526,
                      "end": 560
                    },
                    "directive": null,
                    "start": 526,
                    "end": 561
                  }
                ],
                "start": 177,
                "end": 567
              },
              "expression": false,
              "start": 174,
              "end": 567
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 163,
            "end": 567
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 583
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
                  "name": "_a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 588,
                        "end": 589
                      },
                      "typeArguments": null,
                      "start": 588,
                      "end": 589
                    },
                    "start": 586,
                    "end": 589
                  },
                  "start": 584,
                  "end": 589
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
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 602,
                              "end": 604
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "start": 605,
                              "end": 611
                            },
                            "optional": false,
                            "computed": false,
                            "start": 602,
                            "end": 611
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 601,
                        "end": 612
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 616,
                            "end": 617
                          }
                        ],
                        "start": 615,
                        "end": 618
                      },
                      "start": 601,
                      "end": 618
                    },
                    "directive": null,
                    "start": 601,
                    "end": 619
                  }
                ],
                "start": 591,
                "end": 625
              },
              "expression": false,
              "start": 583,
              "end": 625
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 572,
            "end": 625
          }
        ],
        "start": 8,
        "end": 627
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 627
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 627
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
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "otherObject",
    "start": 30,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "testObject",
    "start": 57,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "testArray",
    "start": 114,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 143,
    "end": 144
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 163,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 216,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 235,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "testObject",
    "start": 240,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 269,
    "end": 270
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 283,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "testArray",
    "start": 288,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 337,
    "end": 338
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 361,
    "end": 362
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 378,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 382,
    "end": 383
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 383,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 392,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 408,
    "end": 409
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 412,
    "end": 413
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "]",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 432,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 436,
    "end": 437
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 453,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 457,
    "end": 458
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 458,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 499,
    "end": 500
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 500,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 507,
    "end": 508
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 527,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "otherObject",
    "start": 532,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 543,
    "end": 544
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 544,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 572,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 579,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 584,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 602,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 604,
    "end": 605
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 605,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 615,
    "end": 616
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627
  }
]
```
