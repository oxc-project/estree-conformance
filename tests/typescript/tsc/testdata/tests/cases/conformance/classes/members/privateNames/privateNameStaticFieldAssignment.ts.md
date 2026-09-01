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
              "start": 21,
              "end": 27
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 30,
              "end": 31
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
            "end": 32
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
              "start": 37,
              "end": 48
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 61,
                          "end": 62
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 63,
                          "end": 69
                        },
                        "optional": false,
                        "computed": false,
                        "start": 61,
                        "end": 69
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 72,
                        "end": 73
                      },
                      "start": 61,
                      "end": 73
                    },
                    "directive": null,
                    "start": 61,
                    "end": 74
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 83,
                          "end": 84
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 85,
                          "end": 91
                        },
                        "optional": false,
                        "computed": false,
                        "start": 83,
                        "end": 91
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 95,
                        "end": 96
                      },
                      "start": 83,
                      "end": 96
                    },
                    "directive": null,
                    "start": 83,
                    "end": 97
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 106,
                          "end": 107
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 108,
                          "end": 114
                        },
                        "optional": false,
                        "computed": false,
                        "start": 106,
                        "end": 114
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 118,
                        "end": 119
                      },
                      "start": 106,
                      "end": 119
                    },
                    "directive": null,
                    "start": 106,
                    "end": 120
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 129,
                          "end": 130
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 131,
                          "end": 137
                        },
                        "optional": false,
                        "computed": false,
                        "start": 129,
                        "end": 137
                      },
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 141,
                        "end": 142
                      },
                      "start": 129,
                      "end": 142
                    },
                    "directive": null,
                    "start": 129,
                    "end": 143
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 152,
                          "end": 153
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 154,
                          "end": 160
                        },
                        "optional": false,
                        "computed": false,
                        "start": 152,
                        "end": 160
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 164,
                        "end": 165
                      },
                      "start": 152,
                      "end": 165
                    },
                    "directive": null,
                    "start": 152,
                    "end": 166
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 175,
                          "end": 176
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 177,
                          "end": 183
                        },
                        "optional": false,
                        "computed": false,
                        "start": 175,
                        "end": 183
                      },
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 188,
                        "end": 189
                      },
                      "start": 175,
                      "end": 189
                    },
                    "directive": null,
                    "start": 175,
                    "end": 190
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "%=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 199,
                          "end": 200
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 201,
                          "end": 207
                        },
                        "optional": false,
                        "computed": false,
                        "start": 199,
                        "end": 207
                      },
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 211,
                        "end": 212
                      },
                      "start": 199,
                      "end": 212
                    },
                    "directive": null,
                    "start": 199,
                    "end": 213
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "<<=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 223
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 224,
                          "end": 230
                        },
                        "optional": false,
                        "computed": false,
                        "start": 222,
                        "end": 230
                      },
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 235,
                        "end": 236
                      },
                      "start": 222,
                      "end": 236
                    },
                    "directive": null,
                    "start": 222,
                    "end": 237
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": ">>=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 246,
                          "end": 247
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 248,
                          "end": 254
                        },
                        "optional": false,
                        "computed": false,
                        "start": 246,
                        "end": 254
                      },
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 259,
                        "end": 260
                      },
                      "start": 246,
                      "end": 260
                    },
                    "directive": null,
                    "start": 246,
                    "end": 261
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": ">>>=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 270,
                          "end": 271
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 272,
                          "end": 278
                        },
                        "optional": false,
                        "computed": false,
                        "start": 270,
                        "end": 278
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 284,
                        "end": 286
                      },
                      "start": 270,
                      "end": 286
                    },
                    "directive": null,
                    "start": 270,
                    "end": 287
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "&=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 296,
                          "end": 297
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 298,
                          "end": 304
                        },
                        "optional": false,
                        "computed": false,
                        "start": 296,
                        "end": 304
                      },
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 308,
                        "end": 310
                      },
                      "start": 296,
                      "end": 310
                    },
                    "directive": null,
                    "start": 296,
                    "end": 311
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "|=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 321
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 322,
                          "end": 328
                        },
                        "optional": false,
                        "computed": false,
                        "start": 320,
                        "end": 328
                      },
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 332,
                        "end": 334
                      },
                      "start": 320,
                      "end": 334
                    },
                    "directive": null,
                    "start": 320,
                    "end": 335
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "^=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 344,
                          "end": 345
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 346,
                          "end": 352
                        },
                        "optional": false,
                        "computed": false,
                        "start": 344,
                        "end": 352
                      },
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 356,
                        "end": 358
                      },
                      "start": 344,
                      "end": 358
                    },
                    "directive": null,
                    "start": 344,
                    "end": 359
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 368,
                              "end": 369
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 370,
                              "end": 378
                            },
                            "optional": false,
                            "computed": false,
                            "start": 368,
                            "end": 378
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 368,
                          "end": 380
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 381,
                          "end": 387
                        },
                        "optional": false,
                        "computed": false,
                        "start": 368,
                        "end": 387
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 390,
                        "end": 391
                      },
                      "start": 368,
                      "end": 391
                    },
                    "directive": null,
                    "start": 368,
                    "end": 392
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 401,
                              "end": 402
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 403,
                              "end": 411
                            },
                            "optional": false,
                            "computed": false,
                            "start": 401,
                            "end": 411
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 401,
                          "end": 413
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 414,
                          "end": 420
                        },
                        "optional": false,
                        "computed": false,
                        "start": 401,
                        "end": 420
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 424,
                        "end": 425
                      },
                      "start": 401,
                      "end": 425
                    },
                    "directive": null,
                    "start": 401,
                    "end": 426
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 435,
                              "end": 436
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 437,
                              "end": 445
                            },
                            "optional": false,
                            "computed": false,
                            "start": 435,
                            "end": 445
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 435,
                          "end": 447
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 448,
                          "end": 454
                        },
                        "optional": false,
                        "computed": false,
                        "start": 435,
                        "end": 454
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 458,
                        "end": 459
                      },
                      "start": 435,
                      "end": 459
                    },
                    "directive": null,
                    "start": 435,
                    "end": 460
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 469,
                              "end": 470
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 471,
                              "end": 479
                            },
                            "optional": false,
                            "computed": false,
                            "start": 469,
                            "end": 479
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 469,
                          "end": 481
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 482,
                          "end": 488
                        },
                        "optional": false,
                        "computed": false,
                        "start": 469,
                        "end": 488
                      },
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 492,
                        "end": 493
                      },
                      "start": 469,
                      "end": 493
                    },
                    "directive": null,
                    "start": 469,
                    "end": 494
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 503,
                              "end": 504
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 505,
                              "end": 513
                            },
                            "optional": false,
                            "computed": false,
                            "start": 503,
                            "end": 513
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 503,
                          "end": 515
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 516,
                          "end": 522
                        },
                        "optional": false,
                        "computed": false,
                        "start": 503,
                        "end": 522
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 526,
                        "end": 527
                      },
                      "start": 503,
                      "end": 527
                    },
                    "directive": null,
                    "start": 503,
                    "end": 528
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 537,
                              "end": 538
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 539,
                              "end": 547
                            },
                            "optional": false,
                            "computed": false,
                            "start": 537,
                            "end": 547
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 537,
                          "end": 549
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 550,
                          "end": 556
                        },
                        "optional": false,
                        "computed": false,
                        "start": 537,
                        "end": 556
                      },
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 561,
                        "end": 562
                      },
                      "start": 537,
                      "end": 562
                    },
                    "directive": null,
                    "start": 537,
                    "end": 563
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "%=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 572,
                              "end": 573
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 574,
                              "end": 582
                            },
                            "optional": false,
                            "computed": false,
                            "start": 572,
                            "end": 582
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 572,
                          "end": 584
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 585,
                          "end": 591
                        },
                        "optional": false,
                        "computed": false,
                        "start": 572,
                        "end": 591
                      },
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 595,
                        "end": 596
                      },
                      "start": 572,
                      "end": 596
                    },
                    "directive": null,
                    "start": 572,
                    "end": 597
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "<<=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 606,
                              "end": 607
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 608,
                              "end": 616
                            },
                            "optional": false,
                            "computed": false,
                            "start": 606,
                            "end": 616
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 606,
                          "end": 618
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 619,
                          "end": 625
                        },
                        "optional": false,
                        "computed": false,
                        "start": 606,
                        "end": 625
                      },
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 630,
                        "end": 631
                      },
                      "start": 606,
                      "end": 631
                    },
                    "directive": null,
                    "start": 606,
                    "end": 632
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": ">>=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 641,
                              "end": 642
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 643,
                              "end": 651
                            },
                            "optional": false,
                            "computed": false,
                            "start": 641,
                            "end": 651
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 641,
                          "end": 653
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 654,
                          "end": 660
                        },
                        "optional": false,
                        "computed": false,
                        "start": 641,
                        "end": 660
                      },
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 665,
                        "end": 666
                      },
                      "start": 641,
                      "end": 666
                    },
                    "directive": null,
                    "start": 641,
                    "end": 667
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": ">>>=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 676,
                              "end": 677
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 678,
                              "end": 686
                            },
                            "optional": false,
                            "computed": false,
                            "start": 676,
                            "end": 686
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 676,
                          "end": 688
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 689,
                          "end": 695
                        },
                        "optional": false,
                        "computed": false,
                        "start": 676,
                        "end": 695
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 701,
                        "end": 703
                      },
                      "start": 676,
                      "end": 703
                    },
                    "directive": null,
                    "start": 676,
                    "end": 704
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "&=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 713,
                              "end": 714
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 715,
                              "end": 723
                            },
                            "optional": false,
                            "computed": false,
                            "start": 713,
                            "end": 723
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 713,
                          "end": 725
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 726,
                          "end": 732
                        },
                        "optional": false,
                        "computed": false,
                        "start": 713,
                        "end": 732
                      },
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 736,
                        "end": 738
                      },
                      "start": 713,
                      "end": 738
                    },
                    "directive": null,
                    "start": 713,
                    "end": 739
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "|=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 748,
                              "end": 749
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 750,
                              "end": 758
                            },
                            "optional": false,
                            "computed": false,
                            "start": 748,
                            "end": 758
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 748,
                          "end": 760
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 761,
                          "end": 767
                        },
                        "optional": false,
                        "computed": false,
                        "start": 748,
                        "end": 767
                      },
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 771,
                        "end": 773
                      },
                      "start": 748,
                      "end": 773
                    },
                    "directive": null,
                    "start": 748,
                    "end": 774
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "^=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 783,
                              "end": 784
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 785,
                              "end": 793
                            },
                            "optional": false,
                            "computed": false,
                            "start": 783,
                            "end": 793
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 783,
                          "end": 795
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 796,
                          "end": 802
                        },
                        "optional": false,
                        "computed": false,
                        "start": 783,
                        "end": 802
                      },
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 806,
                        "end": 808
                      },
                      "start": 783,
                      "end": 808
                    },
                    "directive": null,
                    "start": 783,
                    "end": 809
                  }
                ],
                "start": 51,
                "end": 815
              },
              "expression": false,
              "start": 48,
              "end": 815
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 37,
            "end": 815
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
              "start": 827,
              "end": 835
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 855,
                      "end": 856
                    },
                    "start": 848,
                    "end": 857
                  }
                ],
                "start": 838,
                "end": 863
              },
              "expression": false,
              "start": 835,
              "end": 863
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 820,
            "end": 863
          }
        ],
        "start": 8,
        "end": 865
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 865
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 865
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
    "type": "Keyword",
    "value": "static",
    "start": 14,
    "end": 20
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 37,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 62,
    "end": 63
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 84,
    "end": 85
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 92,
    "end": 94
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 115,
    "end": 117
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 130,
    "end": 131
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 138,
    "end": 140
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 161,
    "end": 163
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 176,
    "end": 177
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 184,
    "end": 187
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 200,
    "end": 201
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "%=",
    "start": 208,
    "end": 210
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "<<=",
    "start": 231,
    "end": 234
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 247,
    "end": 248
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ">>=",
    "start": 255,
    "end": 258
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 271,
    "end": 272
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ">>>=",
    "start": 279,
    "end": 283
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 284,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 298,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "&=",
    "start": 305,
    "end": 307
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "field",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "|=",
    "start": 329,
    "end": 331
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 332,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 345,
    "end": 346
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 346,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "^=",
    "start": 353,
    "end": 355
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 370,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 380,
    "end": 381
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 401,
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
    "value": "getClass",
    "start": 403,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
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
    "value": ".",
    "start": 413,
    "end": 414
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 414,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 421,
    "end": 423
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Identifier",
    "value": "getClass",
    "start": 437,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 447,
    "end": 448
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 448,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 455,
    "end": 457
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 471,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 481,
    "end": 482
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 482,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 489,
    "end": 491
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Identifier",
    "value": "getClass",
    "start": 505,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 515,
    "end": 516
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 516,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 523,
    "end": 525
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 539,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 549,
    "end": 550
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 550,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 557,
    "end": 560
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 574,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 584,
    "end": 585
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "%=",
    "start": 592,
    "end": 594
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 608,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 618,
    "end": 619
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 619,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "<<=",
    "start": 626,
    "end": 629
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 643,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 653,
    "end": 654
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 654,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ">>=",
    "start": 661,
    "end": 664
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 678,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 688,
    "end": 689
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 689,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ">>>=",
    "start": 696,
    "end": 700
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 701,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 715,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 725,
    "end": 726
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 726,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "&=",
    "start": 733,
    "end": 735
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 736,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 750,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 760,
    "end": 761
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 761,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "|=",
    "start": 768,
    "end": 770
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 771,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 785,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 795,
    "end": 796
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 796,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "^=",
    "start": 803,
    "end": 805
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 806,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 820,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 827,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 838,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 848,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 864,
    "end": 865
  }
]
```
