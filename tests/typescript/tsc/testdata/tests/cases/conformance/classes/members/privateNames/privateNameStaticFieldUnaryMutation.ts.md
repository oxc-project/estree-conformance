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
        "name": "C",
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
              "name": "test",
              "start": 21,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "value": {
              "type": "Literal",
              "value": 24,
              "raw": "24",
              "start": 37,
              "end": 39
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 40
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
              "start": 45,
              "end": 56
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 69,
                          "end": 70
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 71,
                          "end": 76
                        },
                        "optional": false,
                        "computed": false,
                        "start": 69,
                        "end": 76
                      },
                      "start": 69,
                      "end": 78
                    },
                    "directive": null,
                    "start": 69,
                    "end": 79
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 89
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 90,
                          "end": 95
                        },
                        "optional": false,
                        "computed": false,
                        "start": 88,
                        "end": 95
                      },
                      "start": 88,
                      "end": 97
                    },
                    "directive": null,
                    "start": 88,
                    "end": 98
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 109,
                          "end": 110
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 111,
                          "end": 116
                        },
                        "optional": false,
                        "computed": false,
                        "start": 109,
                        "end": 116
                      },
                      "start": 107,
                      "end": 116
                    },
                    "directive": null,
                    "start": 107,
                    "end": 117
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 128,
                          "end": 129
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 130,
                          "end": 135
                        },
                        "optional": false,
                        "computed": false,
                        "start": 128,
                        "end": 135
                      },
                      "start": 126,
                      "end": 135
                    },
                    "directive": null,
                    "start": 126,
                    "end": 136
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
                          "start": 151,
                          "end": 152
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 155,
                              "end": 156
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 157,
                              "end": 162
                            },
                            "optional": false,
                            "computed": false,
                            "start": 155,
                            "end": 162
                          },
                          "start": 155,
                          "end": 164
                        },
                        "definite": false,
                        "start": 151,
                        "end": 164
                      }
                    ],
                    "declare": false,
                    "start": 145,
                    "end": 165
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
                          "start": 180,
                          "end": 181
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 184,
                              "end": 185
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 186,
                              "end": 191
                            },
                            "optional": false,
                            "computed": false,
                            "start": 184,
                            "end": 191
                          },
                          "start": 184,
                          "end": 193
                        },
                        "definite": false,
                        "start": 180,
                        "end": 193
                      }
                    ],
                    "declare": false,
                    "start": 174,
                    "end": 194
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 209,
                          "end": 210
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 215,
                              "end": 216
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 217,
                              "end": 222
                            },
                            "optional": false,
                            "computed": false,
                            "start": 215,
                            "end": 222
                          },
                          "start": 213,
                          "end": 222
                        },
                        "definite": false,
                        "start": 209,
                        "end": 222
                      }
                    ],
                    "declare": false,
                    "start": 203,
                    "end": 223
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 238,
                          "end": 239
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 244,
                              "end": 245
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 246,
                              "end": 251
                            },
                            "optional": false,
                            "computed": false,
                            "start": 244,
                            "end": 251
                          },
                          "start": 242,
                          "end": 251
                        },
                        "definite": false,
                        "start": 238,
                        "end": 251
                      }
                    ],
                    "declare": false,
                    "start": 232,
                    "end": 252
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 266,
                          "end": 267
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 268,
                          "end": 273
                        },
                        "optional": false,
                        "computed": false,
                        "start": 266,
                        "end": 273
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 276,
                        "end": 277
                      },
                      "start": 266,
                      "end": 277
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 280
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 281,
                          "end": 286
                        },
                        "optional": false,
                        "computed": false,
                        "start": 279,
                        "end": 286
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 289,
                        "end": 291
                      },
                      "start": 279,
                      "end": 291
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 295,
                          "end": 296
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 297,
                          "end": 302
                        },
                        "optional": false,
                        "computed": false,
                        "start": 295,
                        "end": 302
                      },
                      "start": 293,
                      "end": 302
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 304,
                      "end": 306
                    },
                    "start": 261,
                    "end": 306
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 321
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 322,
                          "end": 327
                        },
                        "optional": false,
                        "computed": false,
                        "start": 320,
                        "end": 327
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 330,
                        "end": 331
                      },
                      "start": 320,
                      "end": 331
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 333,
                          "end": 334
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 335,
                          "end": 340
                        },
                        "optional": false,
                        "computed": false,
                        "start": 333,
                        "end": 340
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 343,
                        "end": 345
                      },
                      "start": 333,
                      "end": 345
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 347,
                          "end": 348
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 349,
                          "end": 354
                        },
                        "optional": false,
                        "computed": false,
                        "start": 347,
                        "end": 354
                      },
                      "start": 347,
                      "end": 356
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 358,
                      "end": 360
                    },
                    "start": 315,
                    "end": 360
                  }
                ],
                "start": 59,
                "end": 366
              },
              "expression": false,
              "start": 56,
              "end": 366
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 45,
            "end": 366
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
              "start": 371,
              "end": 375
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 388,
                              "end": 392
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 393,
                              "end": 401
                            },
                            "optional": false,
                            "computed": false,
                            "start": 388,
                            "end": 401
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 388,
                          "end": 403
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 404,
                          "end": 409
                        },
                        "optional": false,
                        "computed": false,
                        "start": 388,
                        "end": 409
                      },
                      "start": 388,
                      "end": 411
                    },
                    "directive": null,
                    "start": 388,
                    "end": 412
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 421,
                              "end": 425
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 426,
                              "end": 434
                            },
                            "optional": false,
                            "computed": false,
                            "start": 421,
                            "end": 434
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 421,
                          "end": 436
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 437,
                          "end": 442
                        },
                        "optional": false,
                        "computed": false,
                        "start": 421,
                        "end": 442
                      },
                      "start": 421,
                      "end": 444
                    },
                    "directive": null,
                    "start": 421,
                    "end": 445
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 456,
                              "end": 460
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 461,
                              "end": 469
                            },
                            "optional": false,
                            "computed": false,
                            "start": 456,
                            "end": 469
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 456,
                          "end": 471
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 472,
                          "end": 477
                        },
                        "optional": false,
                        "computed": false,
                        "start": 456,
                        "end": 477
                      },
                      "start": 454,
                      "end": 477
                    },
                    "directive": null,
                    "start": 454,
                    "end": 478
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 489,
                              "end": 493
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 494,
                              "end": 502
                            },
                            "optional": false,
                            "computed": false,
                            "start": 489,
                            "end": 502
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 489,
                          "end": 504
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 505,
                          "end": 510
                        },
                        "optional": false,
                        "computed": false,
                        "start": 489,
                        "end": 510
                      },
                      "start": 487,
                      "end": 510
                    },
                    "directive": null,
                    "start": 487,
                    "end": 511
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
                          "start": 526,
                          "end": 527
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 530,
                                  "end": 534
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 535,
                                  "end": 543
                                },
                                "optional": false,
                                "computed": false,
                                "start": 530,
                                "end": 543
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 530,
                              "end": 545
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 546,
                              "end": 551
                            },
                            "optional": false,
                            "computed": false,
                            "start": 530,
                            "end": 551
                          },
                          "start": 530,
                          "end": 553
                        },
                        "definite": false,
                        "start": 526,
                        "end": 553
                      }
                    ],
                    "declare": false,
                    "start": 520,
                    "end": 554
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
                          "start": 569,
                          "end": 570
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 573,
                                  "end": 577
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 578,
                                  "end": 586
                                },
                                "optional": false,
                                "computed": false,
                                "start": 573,
                                "end": 586
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 573,
                              "end": 588
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 589,
                              "end": 594
                            },
                            "optional": false,
                            "computed": false,
                            "start": 573,
                            "end": 594
                          },
                          "start": 573,
                          "end": 596
                        },
                        "definite": false,
                        "start": 569,
                        "end": 596
                      }
                    ],
                    "declare": false,
                    "start": 563,
                    "end": 597
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 612,
                          "end": 613
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 618,
                                  "end": 622
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 623,
                                  "end": 631
                                },
                                "optional": false,
                                "computed": false,
                                "start": 618,
                                "end": 631
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 618,
                              "end": 633
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 634,
                              "end": 639
                            },
                            "optional": false,
                            "computed": false,
                            "start": 618,
                            "end": 639
                          },
                          "start": 616,
                          "end": 639
                        },
                        "definite": false,
                        "start": 612,
                        "end": 639
                      }
                    ],
                    "declare": false,
                    "start": 606,
                    "end": 640
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 655,
                          "end": 656
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 661,
                                  "end": 665
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 666,
                                  "end": 674
                                },
                                "optional": false,
                                "computed": false,
                                "start": 661,
                                "end": 674
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 661,
                              "end": 676
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 677,
                              "end": 682
                            },
                            "optional": false,
                            "computed": false,
                            "start": 661,
                            "end": 682
                          },
                          "start": 659,
                          "end": 682
                        },
                        "definite": false,
                        "start": 655,
                        "end": 682
                      }
                    ],
                    "declare": false,
                    "start": 649,
                    "end": 683
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 697,
                              "end": 701
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 702,
                              "end": 710
                            },
                            "optional": false,
                            "computed": false,
                            "start": 697,
                            "end": 710
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 697,
                          "end": 712
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 713,
                          "end": 718
                        },
                        "optional": false,
                        "computed": false,
                        "start": 697,
                        "end": 718
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 721,
                        "end": 722
                      },
                      "start": 697,
                      "end": 722
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 724,
                              "end": 728
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 729,
                              "end": 737
                            },
                            "optional": false,
                            "computed": false,
                            "start": 724,
                            "end": 737
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 724,
                          "end": 739
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 740,
                          "end": 745
                        },
                        "optional": false,
                        "computed": false,
                        "start": 724,
                        "end": 745
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 748,
                        "end": 750
                      },
                      "start": 724,
                      "end": 750
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 754,
                              "end": 758
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 759,
                              "end": 767
                            },
                            "optional": false,
                            "computed": false,
                            "start": 754,
                            "end": 767
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 754,
                          "end": 769
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 770,
                          "end": 775
                        },
                        "optional": false,
                        "computed": false,
                        "start": 754,
                        "end": 775
                      },
                      "start": 752,
                      "end": 775
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 777,
                      "end": 779
                    },
                    "start": 692,
                    "end": 779
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 793,
                              "end": 797
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 798,
                              "end": 806
                            },
                            "optional": false,
                            "computed": false,
                            "start": 793,
                            "end": 806
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 793,
                          "end": 808
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 809,
                          "end": 814
                        },
                        "optional": false,
                        "computed": false,
                        "start": 793,
                        "end": 814
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 817,
                        "end": 818
                      },
                      "start": 793,
                      "end": 818
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 820,
                              "end": 824
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 825,
                              "end": 833
                            },
                            "optional": false,
                            "computed": false,
                            "start": 820,
                            "end": 833
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 820,
                          "end": 835
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 836,
                          "end": 841
                        },
                        "optional": false,
                        "computed": false,
                        "start": 820,
                        "end": 841
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 844,
                        "end": 846
                      },
                      "start": 820,
                      "end": 846
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 848,
                              "end": 852
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 853,
                              "end": 861
                            },
                            "optional": false,
                            "computed": false,
                            "start": 848,
                            "end": 861
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 848,
                          "end": 863
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 864,
                          "end": 869
                        },
                        "optional": false,
                        "computed": false,
                        "start": 848,
                        "end": 869
                      },
                      "start": 848,
                      "end": 871
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 873,
                      "end": 875
                    },
                    "start": 788,
                    "end": 875
                  }
                ],
                "start": 378,
                "end": 881
              },
              "expression": false,
              "start": 375,
              "end": 881
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 371,
            "end": 881
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 894
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 906,
                      "end": 907
                    },
                    "start": 899,
                    "end": 908
                  }
                ],
                "start": 897,
                "end": 910
              },
              "expression": false,
              "start": 894,
              "end": 910
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 886,
            "end": 910
          }
        ],
        "start": 8,
        "end": 912
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 912
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 912
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
    "value": "C",
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
    "type": "Keyword",
    "value": "static",
    "start": 14,
    "end": 20
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 21,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "24",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 45,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 70,
    "end": 71
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 71,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 89,
    "end": 90
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 95,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 107,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 111,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 126,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 145,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 174,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 185,
    "end": 186
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 203,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 213,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 217,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 232,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 242,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 245,
    "end": 246
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 246,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 280,
    "end": 281
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 281,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 287,
    "end": 288
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 293,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 296,
    "end": 297
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 297,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 315,
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
    "value": "C",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 321,
    "end": 322
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 322,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 334,
    "end": 335
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 341,
    "end": 342
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 348,
    "end": 349
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 354,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 371,
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
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 393,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 403,
    "end": 404
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 404,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 426,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
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
    "value": "test",
    "start": 437,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 454,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 461,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 471,
    "end": 472
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 472,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 487,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 489,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 494,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 504,
    "end": 505
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 520,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 530,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 535,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 545,
    "end": 546
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 546,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 551,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 563,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 578,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 588,
    "end": 589
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 589,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 606,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 616,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 623,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 633,
    "end": 634
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 634,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 649,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 659,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 661,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 666,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 676,
    "end": 677
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 677,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 692,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 697,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 702,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 712,
    "end": 713
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 713,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "this",
    "start": 724,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 729,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 739,
    "end": 740
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 740,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 746,
    "end": 747
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 748,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 752,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 754,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 759,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 769,
    "end": 770
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 770,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 788,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 793,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 798,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 808,
    "end": 809
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 809,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 815,
    "end": 816
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 820,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 825,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 835,
    "end": 836
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 836,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 842,
    "end": 843
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 844,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 846,
    "end": 847
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 848,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 853,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 863,
    "end": 864
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 864,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 869,
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
    "value": "{",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 886,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 899,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 911,
    "end": 912
  }
]
```
