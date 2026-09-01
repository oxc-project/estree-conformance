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
              "value": 0,
              "raw": "0",
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
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 41
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
                          "type": "ThisExpression",
                          "start": 54,
                          "end": 58
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 59,
                          "end": 65
                        },
                        "optional": false,
                        "computed": false,
                        "start": 54,
                        "end": 65
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 68,
                        "end": 69
                      },
                      "start": 54,
                      "end": 69
                    },
                    "directive": null,
                    "start": 54,
                    "end": 70
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
                          "start": 79,
                          "end": 83
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 84,
                          "end": 90
                        },
                        "optional": false,
                        "computed": false,
                        "start": 79,
                        "end": 90
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 94,
                        "end": 95
                      },
                      "start": 79,
                      "end": 95
                    },
                    "directive": null,
                    "start": 79,
                    "end": 96
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 105,
                          "end": 109
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 110,
                          "end": 116
                        },
                        "optional": false,
                        "computed": false,
                        "start": 105,
                        "end": 116
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 120,
                        "end": 121
                      },
                      "start": 105,
                      "end": 121
                    },
                    "directive": null,
                    "start": 105,
                    "end": 122
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 131,
                          "end": 135
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 136,
                          "end": 142
                        },
                        "optional": false,
                        "computed": false,
                        "start": 131,
                        "end": 142
                      },
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 146,
                        "end": 147
                      },
                      "start": 131,
                      "end": 147
                    },
                    "directive": null,
                    "start": 131,
                    "end": 148
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 157,
                          "end": 161
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 162,
                          "end": 168
                        },
                        "optional": false,
                        "computed": false,
                        "start": 157,
                        "end": 168
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 172,
                        "end": 173
                      },
                      "start": 157,
                      "end": 173
                    },
                    "directive": null,
                    "start": 157,
                    "end": 174
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 183,
                          "end": 187
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 188,
                          "end": 194
                        },
                        "optional": false,
                        "computed": false,
                        "start": 183,
                        "end": 194
                      },
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 199,
                        "end": 200
                      },
                      "start": 183,
                      "end": 200
                    },
                    "directive": null,
                    "start": 183,
                    "end": 201
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "%=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 210,
                          "end": 214
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 215,
                          "end": 221
                        },
                        "optional": false,
                        "computed": false,
                        "start": 210,
                        "end": 221
                      },
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 225,
                        "end": 226
                      },
                      "start": 210,
                      "end": 226
                    },
                    "directive": null,
                    "start": 210,
                    "end": 227
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "<<=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 236,
                          "end": 240
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 241,
                          "end": 247
                        },
                        "optional": false,
                        "computed": false,
                        "start": 236,
                        "end": 247
                      },
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 252,
                        "end": 253
                      },
                      "start": 236,
                      "end": 253
                    },
                    "directive": null,
                    "start": 236,
                    "end": 254
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": ">>=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 263,
                          "end": 267
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 268,
                          "end": 274
                        },
                        "optional": false,
                        "computed": false,
                        "start": 263,
                        "end": 274
                      },
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 279,
                        "end": 280
                      },
                      "start": 263,
                      "end": 280
                    },
                    "directive": null,
                    "start": 263,
                    "end": 281
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": ">>>=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 290,
                          "end": 294
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 295,
                          "end": 301
                        },
                        "optional": false,
                        "computed": false,
                        "start": 290,
                        "end": 301
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 307,
                        "end": 309
                      },
                      "start": 290,
                      "end": 309
                    },
                    "directive": null,
                    "start": 290,
                    "end": 310
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "&=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 319,
                          "end": 323
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 324,
                          "end": 330
                        },
                        "optional": false,
                        "computed": false,
                        "start": 319,
                        "end": 330
                      },
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 334,
                        "end": 336
                      },
                      "start": 319,
                      "end": 336
                    },
                    "directive": null,
                    "start": 319,
                    "end": 337
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "|=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 346,
                          "end": 350
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 351,
                          "end": 357
                        },
                        "optional": false,
                        "computed": false,
                        "start": 346,
                        "end": 357
                      },
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 361,
                        "end": 363
                      },
                      "start": 346,
                      "end": 363
                    },
                    "directive": null,
                    "start": 346,
                    "end": 364
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "^=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 373,
                          "end": 377
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 378,
                          "end": 384
                        },
                        "optional": false,
                        "computed": false,
                        "start": 373,
                        "end": 384
                      },
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 388,
                        "end": 390
                      },
                      "start": 373,
                      "end": 390
                    },
                    "directive": null,
                    "start": 373,
                    "end": 391
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
                              "start": 400,
                              "end": 401
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 402,
                              "end": 413
                            },
                            "optional": false,
                            "computed": false,
                            "start": 400,
                            "end": 413
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 400,
                          "end": 415
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 416,
                          "end": 422
                        },
                        "optional": false,
                        "computed": false,
                        "start": 400,
                        "end": 422
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 425,
                        "end": 426
                      },
                      "start": 400,
                      "end": 426
                    },
                    "directive": null,
                    "start": 400,
                    "end": 427
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
                              "start": 436,
                              "end": 437
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 438,
                              "end": 449
                            },
                            "optional": false,
                            "computed": false,
                            "start": 436,
                            "end": 449
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 436,
                          "end": 451
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 452,
                          "end": 458
                        },
                        "optional": false,
                        "computed": false,
                        "start": 436,
                        "end": 458
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 462,
                        "end": 463
                      },
                      "start": 436,
                      "end": 463
                    },
                    "directive": null,
                    "start": 436,
                    "end": 464
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
                              "start": 473,
                              "end": 474
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 475,
                              "end": 486
                            },
                            "optional": false,
                            "computed": false,
                            "start": 473,
                            "end": 486
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 473,
                          "end": 488
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 489,
                          "end": 495
                        },
                        "optional": false,
                        "computed": false,
                        "start": 473,
                        "end": 495
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 499,
                        "end": 500
                      },
                      "start": 473,
                      "end": 500
                    },
                    "directive": null,
                    "start": 473,
                    "end": 501
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
                              "start": 510,
                              "end": 511
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 512,
                              "end": 523
                            },
                            "optional": false,
                            "computed": false,
                            "start": 510,
                            "end": 523
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 510,
                          "end": 525
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 526,
                          "end": 532
                        },
                        "optional": false,
                        "computed": false,
                        "start": 510,
                        "end": 532
                      },
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 536,
                        "end": 537
                      },
                      "start": 510,
                      "end": 537
                    },
                    "directive": null,
                    "start": 510,
                    "end": 538
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
                              "start": 547,
                              "end": 548
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 549,
                              "end": 560
                            },
                            "optional": false,
                            "computed": false,
                            "start": 547,
                            "end": 560
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 547,
                          "end": 562
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 563,
                          "end": 569
                        },
                        "optional": false,
                        "computed": false,
                        "start": 547,
                        "end": 569
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 573,
                        "end": 574
                      },
                      "start": 547,
                      "end": 574
                    },
                    "directive": null,
                    "start": 547,
                    "end": 575
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
                              "start": 584,
                              "end": 585
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 586,
                              "end": 597
                            },
                            "optional": false,
                            "computed": false,
                            "start": 584,
                            "end": 597
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 584,
                          "end": 599
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 600,
                          "end": 606
                        },
                        "optional": false,
                        "computed": false,
                        "start": 584,
                        "end": 606
                      },
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 611,
                        "end": 612
                      },
                      "start": 584,
                      "end": 612
                    },
                    "directive": null,
                    "start": 584,
                    "end": 613
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
                              "start": 622,
                              "end": 623
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 624,
                              "end": 635
                            },
                            "optional": false,
                            "computed": false,
                            "start": 622,
                            "end": 635
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 622,
                          "end": 637
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 638,
                          "end": 644
                        },
                        "optional": false,
                        "computed": false,
                        "start": 622,
                        "end": 644
                      },
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 648,
                        "end": 649
                      },
                      "start": 622,
                      "end": 649
                    },
                    "directive": null,
                    "start": 622,
                    "end": 650
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
                              "start": 659,
                              "end": 660
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 661,
                              "end": 672
                            },
                            "optional": false,
                            "computed": false,
                            "start": 659,
                            "end": 672
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 659,
                          "end": 674
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 675,
                          "end": 681
                        },
                        "optional": false,
                        "computed": false,
                        "start": 659,
                        "end": 681
                      },
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 686,
                        "end": 687
                      },
                      "start": 659,
                      "end": 687
                    },
                    "directive": null,
                    "start": 659,
                    "end": 688
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
                              "start": 697,
                              "end": 698
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 699,
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
                          "name": "field",
                          "start": 713,
                          "end": 719
                        },
                        "optional": false,
                        "computed": false,
                        "start": 697,
                        "end": 719
                      },
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 724,
                        "end": 725
                      },
                      "start": 697,
                      "end": 725
                    },
                    "directive": null,
                    "start": 697,
                    "end": 726
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
                              "start": 735,
                              "end": 736
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 737,
                              "end": 748
                            },
                            "optional": false,
                            "computed": false,
                            "start": 735,
                            "end": 748
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 735,
                          "end": 750
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 751,
                          "end": 757
                        },
                        "optional": false,
                        "computed": false,
                        "start": 735,
                        "end": 757
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 763,
                        "end": 765
                      },
                      "start": 735,
                      "end": 765
                    },
                    "directive": null,
                    "start": 735,
                    "end": 766
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
                              "start": 775,
                              "end": 776
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 777,
                              "end": 788
                            },
                            "optional": false,
                            "computed": false,
                            "start": 775,
                            "end": 788
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 775,
                          "end": 790
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 791,
                          "end": 797
                        },
                        "optional": false,
                        "computed": false,
                        "start": 775,
                        "end": 797
                      },
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 801,
                        "end": 803
                      },
                      "start": 775,
                      "end": 803
                    },
                    "directive": null,
                    "start": 775,
                    "end": 804
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
                              "start": 813,
                              "end": 814
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 815,
                              "end": 826
                            },
                            "optional": false,
                            "computed": false,
                            "start": 813,
                            "end": 826
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 813,
                          "end": 828
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 829,
                          "end": 835
                        },
                        "optional": false,
                        "computed": false,
                        "start": 813,
                        "end": 835
                      },
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 839,
                        "end": 841
                      },
                      "start": 813,
                      "end": 841
                    },
                    "directive": null,
                    "start": 813,
                    "end": 842
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
                              "start": 851,
                              "end": 852
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 853,
                              "end": 864
                            },
                            "optional": false,
                            "computed": false,
                            "start": 851,
                            "end": 864
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 851,
                          "end": 866
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 867,
                          "end": 873
                        },
                        "optional": false,
                        "computed": false,
                        "start": 851,
                        "end": 873
                      },
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 877,
                        "end": 879
                      },
                      "start": 851,
                      "end": 879
                    },
                    "directive": null,
                    "start": 851,
                    "end": 880
                  }
                ],
                "start": 44,
                "end": 886
              },
              "expression": false,
              "start": 41,
              "end": 886
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 30,
            "end": 886
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 909
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 933,
                        "end": 934
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 929,
                      "end": 936
                    },
                    "start": 922,
                    "end": 937
                  }
                ],
                "start": 912,
                "end": 943
              },
              "expression": false,
              "start": 909,
              "end": 943
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 891,
            "end": 943
          }
        ],
        "start": 8,
        "end": 945
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 945
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 945
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
    "value": "0",
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
    "value": "constructor",
    "start": 30,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 58,
    "end": 59
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 79,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 91,
    "end": 93
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 109,
    "end": 110
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 117,
    "end": 119
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 135,
    "end": 136
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 143,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 161,
    "end": 162
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 169,
    "end": 171
  },
  {
    "type": "Numeric",
    "value": "5",
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
    "type": "Keyword",
    "value": "this",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 195,
    "end": 198
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 214,
    "end": 215
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "%=",
    "start": 222,
    "end": 224
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 236,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 241,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "<<=",
    "start": 248,
    "end": 251
  },
  {
    "type": "Numeric",
    "value": "8",
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
    "type": "Keyword",
    "value": "this",
    "start": 263,
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
    "value": "field",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ">>=",
    "start": 275,
    "end": 278
  },
  {
    "type": "Numeric",
    "value": "9",
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
    "value": "this",
    "start": 290,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 294,
    "end": 295
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ">>>=",
    "start": 302,
    "end": 306
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 323,
    "end": 324
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 324,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "&=",
    "start": 331,
    "end": 333
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 334,
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
    "value": "this",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 351,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "|=",
    "start": 358,
    "end": 360
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 373,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 377,
    "end": 378
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 378,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "^=",
    "start": 385,
    "end": 387
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 402,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 415,
    "end": 416
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 416,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 438,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 449,
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
    "value": ".",
    "start": 451,
    "end": 452
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 452,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 459,
    "end": 461
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 473,
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
    "value": "getInstance",
    "start": 475,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 488,
    "end": 489
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 496,
    "end": 498
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 512,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
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
    "value": ".",
    "start": 525,
    "end": 526
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 526,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 533,
    "end": 535
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 549,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 562,
    "end": 563
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 563,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 570,
    "end": 572
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 586,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
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
    "value": ".",
    "start": 599,
    "end": 600
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 600,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 607,
    "end": 610
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 624,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 637,
    "end": 638
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 638,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "%=",
    "start": 645,
    "end": 647
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 661,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 674,
    "end": 675
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "<<=",
    "start": 682,
    "end": 685
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 699,
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
    "value": "field",
    "start": 713,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ">>=",
    "start": 720,
    "end": 723
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 737,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 750,
    "end": 751
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 751,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ">>>=",
    "start": 758,
    "end": 762
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 763,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 777,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 790,
    "end": 791
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 791,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "&=",
    "start": 798,
    "end": 800
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 801,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 815,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 828,
    "end": 829
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 829,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "|=",
    "start": 836,
    "end": 838
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 839,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 851,
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
    "value": "getInstance",
    "start": 853,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 866,
    "end": 867
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 867,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "^=",
    "start": 874,
    "end": 876
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 877,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 891,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 898,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 922,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 929,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 944,
    "end": 945
  }
]
```
