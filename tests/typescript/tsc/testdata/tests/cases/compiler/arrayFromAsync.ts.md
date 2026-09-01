__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 11
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncGen",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 37
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 40
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 58
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 61,
                    "end": 62
                  },
                  "definite": false,
                  "start": 57,
                  "end": 62
                }
              ],
              "declare": false,
              "start": 53,
              "end": 62
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 65
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 69
              },
              "start": 64,
              "end": 69
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
                "start": 71,
                "end": 72
              },
              "start": 71,
              "end": 74
            },
            "body": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "YieldExpression",
                "delegate": false,
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 88,
                    "end": 89
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 92,
                    "end": 93
                  },
                  "start": 88,
                  "end": 93
                },
                "start": 82,
                "end": 93
              },
              "directive": null,
              "start": 82,
              "end": 94
            },
            "start": 48,
            "end": 94
          }
        ],
        "start": 42,
        "end": 98
      },
      "expression": false,
      "start": 12,
      "end": 98
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genPromises",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 122
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 125
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 143
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 146,
                    "end": 147
                  },
                  "definite": false,
                  "start": 142,
                  "end": 147
                }
              ],
              "declare": false,
              "start": 138,
              "end": 147
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 150
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 154
              },
              "start": 149,
              "end": 154
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
                "start": 156,
                "end": 157
              },
              "start": 156,
              "end": 159
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 177,
                          "end": 184
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 185,
                          "end": 192
                        },
                        "optional": false,
                        "computed": false,
                        "start": 177,
                        "end": 192
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 193,
                            "end": 194
                          },
                          "operator": "*",
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 197,
                            "end": 198
                          },
                          "start": 193,
                          "end": 198
                        }
                      ],
                      "optional": false,
                      "start": 177,
                      "end": 199
                    },
                    "start": 171,
                    "end": 199
                  },
                  "directive": null,
                  "start": 171,
                  "end": 200
                }
              ],
              "start": 161,
              "end": 206
            },
            "start": 133,
            "end": 206
          }
        ],
        "start": 127,
        "end": 208
      },
      "expression": false,
      "start": 100,
      "end": 208
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
            "name": "arrLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 223
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 232,
                  "end": 233
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 235,
                      "end": 242
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 250
                    },
                    "optional": false,
                    "computed": false,
                    "start": 235,
                    "end": 250
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 251,
                      "end": 252
                    }
                  ],
                  "optional": false,
                  "start": 235,
                  "end": 253
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 232,
                "end": 253
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 259,
                  "end": 260
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 269
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 277
                    },
                    "optional": false,
                    "computed": false,
                    "start": 262,
                    "end": 277
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 278,
                      "end": 279
                    }
                  ],
                  "optional": false,
                  "start": 262,
                  "end": 280
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 259,
                "end": 280
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 286,
                  "end": 287
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 289,
                      "end": 296
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 304
                    },
                    "optional": false,
                    "computed": false,
                    "start": 289,
                    "end": 304
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 305,
                      "end": 306
                    }
                  ],
                  "optional": false,
                  "start": 289,
                  "end": 307
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 286,
                "end": 307
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 313,
                  "end": 314
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 323
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 324,
                      "end": 331
                    },
                    "optional": false,
                    "computed": false,
                    "start": 316,
                    "end": 331
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 332,
                      "end": 333
                    }
                  ],
                  "optional": false,
                  "start": 316,
                  "end": 334
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 313,
                "end": 334
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 346
                },
                "value": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 348,
                  "end": 349
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 340,
                "end": 349
              }
            ],
            "start": 226,
            "end": 352
          },
          "definite": false,
          "start": 216,
          "end": 352
        }
      ],
      "declare": false,
      "start": 210,
      "end": 352
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 366,
                  "end": 372
                },
                "start": 366,
                "end": 374
              },
              "start": 364,
              "end": 374
            },
            "start": 360,
            "end": 374
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 377,
            "end": 379
          },
          "definite": false,
          "start": 360,
          "end": 379
        }
      ],
      "declare": false,
      "start": 354,
      "end": 380
    },
    {
      "type": "ForOfStatement",
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 399
            },
            "init": null,
            "definite": false,
            "start": 398,
            "end": 399
          }
        ],
        "declare": false,
        "start": 392,
        "end": 399
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "asyncGen",
          "optional": false,
          "typeAnnotation": null,
          "start": 403,
          "end": 411
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 412,
            "end": 413
          }
        ],
        "optional": false,
        "start": 403,
        "end": 414
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 420,
                  "end": 423
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 428
                },
                "optional": false,
                "computed": false,
                "start": 420,
                "end": 428
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 430
                }
              ],
              "optional": false,
              "start": 420,
              "end": 431
            },
            "directive": null,
            "start": 420,
            "end": 432
          }
        ],
        "start": 416,
        "end": 434
      },
      "start": 381,
      "end": 434
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
            "name": "sameArr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 450
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 464
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 474
                },
                "optional": false,
                "computed": false,
                "start": 459,
                "end": 474
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arrLike",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 482
                }
              ],
              "optional": false,
              "start": 459,
              "end": 483
            },
            "start": 453,
            "end": 483
          },
          "definite": false,
          "start": 442,
          "end": 483
        }
      ],
      "declare": false,
      "start": 436,
      "end": 484
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
            "name": "sameArr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 491,
            "end": 499
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 513
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 523
                },
                "optional": false,
                "computed": false,
                "start": 508,
                "end": 523
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 525,
                          "end": 532
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 533,
                          "end": 540
                        },
                        "optional": false,
                        "computed": false,
                        "start": 525,
                        "end": 540
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 541,
                          "end": 542
                        }
                      ],
                      "optional": false,
                      "start": 525,
                      "end": 543
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 545,
                          "end": 552
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 560
                        },
                        "optional": false,
                        "computed": false,
                        "start": 545,
                        "end": 560
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 561,
                          "end": 562
                        }
                      ],
                      "optional": false,
                      "start": 545,
                      "end": 563
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 565,
                          "end": 572
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 573,
                          "end": 580
                        },
                        "optional": false,
                        "computed": false,
                        "start": 565,
                        "end": 580
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 581,
                          "end": 582
                        }
                      ],
                      "optional": false,
                      "start": 565,
                      "end": 583
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 585,
                          "end": 592
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 593,
                          "end": 600
                        },
                        "optional": false,
                        "computed": false,
                        "start": 585,
                        "end": 600
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 601,
                          "end": 602
                        }
                      ],
                      "optional": false,
                      "start": 585,
                      "end": 603
                    }
                  ],
                  "start": 524,
                  "end": 604
                }
              ],
              "optional": false,
              "start": 508,
              "end": 605
            },
            "start": 502,
            "end": 605
          },
          "definite": false,
          "start": 491,
          "end": 605
        }
      ],
      "declare": false,
      "start": 485,
      "end": 606
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
            "name": "sameArr3",
            "optional": false,
            "typeAnnotation": null,
            "start": 613,
            "end": 621
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 635
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 636,
                  "end": 645
                },
                "optional": false,
                "computed": false,
                "start": 630,
                "end": 645
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "genPromises",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 646,
                    "end": 657
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 658,
                      "end": 659
                    }
                  ],
                  "optional": false,
                  "start": 646,
                  "end": 660
                }
              ],
              "optional": false,
              "start": 630,
              "end": 661
            },
            "start": 624,
            "end": 661
          },
          "definite": false,
          "start": 613,
          "end": 661
        }
      ],
      "declare": false,
      "start": 607,
      "end": 662
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
            "name": "sameArr4",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 677
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 686,
                  "end": 691
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 701
                },
                "optional": false,
                "computed": false,
                "start": 686,
                "end": 701
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncGen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 702,
                    "end": 710
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 711,
                      "end": 712
                    }
                  ],
                  "optional": false,
                  "start": 702,
                  "end": 713
                }
              ],
              "optional": false,
              "start": 686,
              "end": 714
            },
            "start": 680,
            "end": 714
          },
          "definite": false,
          "start": 669,
          "end": 714
        }
      ],
      "declare": false,
      "start": 663,
      "end": 715
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Data",
        "optional": false,
        "typeAnnotation": null,
        "start": 726,
        "end": 730
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 732,
          "end": 733
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 735,
        "end": 737
      },
      "expression": false,
      "start": 717,
      "end": 737
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
            "name": "Data",
            "optional": false,
            "typeAnnotation": null,
            "start": 738,
            "end": 742
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromAsync",
            "optional": false,
            "typeAnnotation": null,
            "start": 743,
            "end": 752
          },
          "optional": false,
          "computed": false,
          "start": 738,
          "end": 752
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 755,
            "end": 760
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromAsync",
            "optional": false,
            "typeAnnotation": null,
            "start": 761,
            "end": 770
          },
          "optional": false,
          "computed": false,
          "start": 755,
          "end": 770
        },
        "start": 738,
        "end": 770
      },
      "directive": null,
      "start": 738,
      "end": 771
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
            "name": "sameArr5",
            "optional": false,
            "typeAnnotation": null,
            "start": 778,
            "end": 786
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 795,
                  "end": 799
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 800,
                  "end": 809
                },
                "optional": false,
                "computed": false,
                "start": 795,
                "end": 809
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncGen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 810,
                    "end": 818
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 819,
                      "end": 820
                    }
                  ],
                  "optional": false,
                  "start": 810,
                  "end": 821
                }
              ],
              "optional": false,
              "start": 795,
              "end": 822
            },
            "start": 789,
            "end": 822
          },
          "definite": false,
          "start": 778,
          "end": 822
        }
      ],
      "declare": false,
      "start": 772,
      "end": 823
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
            "name": "mapArr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 831,
            "end": 838
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 847,
                  "end": 852
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 853,
                  "end": 862
                },
                "optional": false,
                "computed": false,
                "start": 847,
                "end": 862
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncGen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 871
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 872,
                      "end": 873
                    }
                  ],
                  "optional": false,
                  "start": 863,
                  "end": 874
                },
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 876,
                      "end": 877
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 881,
                      "end": 882
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 886,
                      "end": 887
                    },
                    "start": 881,
                    "end": 887
                  },
                  "id": null,
                  "generator": false,
                  "start": 876,
                  "end": 887
                }
              ],
              "optional": false,
              "start": 847,
              "end": 888
            },
            "start": 841,
            "end": 888
          },
          "definite": false,
          "start": 831,
          "end": 888
        }
      ],
      "declare": false,
      "start": 825,
      "end": 889
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
            "name": "mapArr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 896,
            "end": 903
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 912,
                  "end": 917
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 918,
                  "end": 927
                },
                "optional": false,
                "computed": false,
                "start": 912,
                "end": 927
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 929,
                      "end": 930
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 931,
                      "end": 932
                    },
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 933,
                      "end": 934
                    },
                    {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 935,
                      "end": 936
                    }
                  ],
                  "start": 928,
                  "end": 937
                },
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 939,
                      "end": 940
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 944,
                        "end": 951
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 952,
                        "end": 959
                      },
                      "optional": false,
                      "computed": false,
                      "start": 944,
                      "end": 959
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 960,
                          "end": 961
                        },
                        "operator": "**",
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 965,
                          "end": 966
                        },
                        "start": 960,
                        "end": 966
                      }
                    ],
                    "optional": false,
                    "start": 944,
                    "end": 967
                  },
                  "id": null,
                  "generator": false,
                  "start": 939,
                  "end": 967
                }
              ],
              "optional": false,
              "start": 912,
              "end": 968
            },
            "start": 906,
            "end": 968
          },
          "definite": false,
          "start": 896,
          "end": 968
        }
      ],
      "declare": false,
      "start": 890,
      "end": 969
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
            "name": "mapArr3",
            "optional": false,
            "typeAnnotation": null,
            "start": 976,
            "end": 983
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 992,
                  "end": 997
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 998,
                  "end": 1007
                },
                "optional": false,
                "computed": false,
                "start": 992,
                "end": 1007
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1009,
                      "end": 1010
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1011,
                      "end": 1012
                    },
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1013,
                      "end": 1014
                    },
                    {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 1015,
                      "end": 1016
                    }
                  ],
                  "start": 1008,
                  "end": 1017
                },
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1019,
                      "end": 1020
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1024,
                      "end": 1025
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1029,
                      "end": 1030
                    },
                    "start": 1024,
                    "end": 1030
                  },
                  "id": null,
                  "generator": false,
                  "start": 1019,
                  "end": 1030
                }
              ],
              "optional": false,
              "start": 992,
              "end": 1031
            },
            "start": 986,
            "end": 1031
          },
          "definite": false,
          "start": 976,
          "end": 1031
        }
      ],
      "declare": false,
      "start": 970,
      "end": 1032
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
            "name": "err",
            "optional": false,
            "typeAnnotation": null,
            "start": 1040,
            "end": 1043
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Error",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1055
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1046,
            "end": 1055
          },
          "definite": false,
          "start": 1040,
          "end": 1055
        }
      ],
      "declare": false,
      "start": 1034,
      "end": 1056
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
            "name": "badIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 1063,
            "end": 1074
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1080,
                    "end": 1086
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1087,
                    "end": 1095
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1080,
                  "end": 1095
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
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1108,
                          "end": 1111
                        },
                        "start": 1102,
                        "end": 1112
                      }
                    ],
                    "start": 1100,
                    "end": 1114
                  },
                  "expression": false,
                  "start": 1097,
                  "end": 1114
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 1079,
                "end": 1114
              }
            ],
            "start": 1077,
            "end": 1116
          },
          "definite": false,
          "start": 1063,
          "end": 1116
        }
      ],
      "declare": false,
      "start": 1057,
      "end": 1117
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
            "name": "badArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1179,
            "end": 1187
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1196,
                  "end": 1201
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1202,
                  "end": 1211
                },
                "optional": false,
                "computed": false,
                "start": 1196,
                "end": 1211
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "badIterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1223
                }
              ],
              "optional": false,
              "start": 1196,
              "end": 1224
            },
            "start": 1190,
            "end": 1224
          },
          "definite": false,
          "start": 1179,
          "end": 1224
        }
      ],
      "declare": false,
      "start": 1173,
      "end": 1225
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
            "name": "withIndexResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 1233,
            "end": 1248
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1257,
                  "end": 1262
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1263,
                  "end": 1272
                },
                "optional": false,
                "computed": false,
                "start": 1257,
                "end": 1272
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 1274,
                      "end": 1277
                    },
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 1279,
                      "end": 1282
                    }
                  ],
                  "start": 1273,
                  "end": 1283
                },
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1286,
                      "end": 1289
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1291,
                      "end": 1296
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1304,
                          "end": 1309
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1304,
                          "end": 1309
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1304,
                        "end": 1309
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1311,
                          "end": 1314
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1311,
                          "end": 1314
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1311,
                        "end": 1314
                      }
                    ],
                    "start": 1302,
                    "end": 1316
                  },
                  "id": null,
                  "generator": false,
                  "start": 1285,
                  "end": 1317
                }
              ],
              "optional": false,
              "start": 1257,
              "end": 1318
            },
            "start": 1251,
            "end": 1318
          },
          "definite": false,
          "start": 1233,
          "end": 1318
        }
      ],
      "declare": false,
      "start": 1227,
      "end": 1319
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1319
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 12,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 18,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "asyncGen",
    "start": 29,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Identifier",
    "value": "i",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 82,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 100,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "genPromises",
    "start": 111,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "i",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 157,
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
    "value": "yield",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 185,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 195,
    "end": 196
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 210,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "arrLike",
    "start": 216,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 235,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 243,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": ",",
    "start": 253,
    "end": 254
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 262,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 270,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 289,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 297,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 307,
    "end": 308
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Identifier",
    "value": "Promise",
    "start": 316,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 324,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 340,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 354,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 381,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 385,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 392,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 400,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "asyncGen",
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
    "type": "Numeric",
    "value": "4",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 420,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 424,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 436,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "sameArr1",
    "start": 442,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 453,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 459,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "fromAsync",
    "start": 465,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "arrLike",
    "start": 475,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 485,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "sameArr2",
    "start": 491,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 502,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 508,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "fromAsync",
    "start": 514,
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
    "value": "[",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 525,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 533,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 541,
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
    "value": ",",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 545,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 553,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 565,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 573,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 585,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 593,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 601,
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
    "value": "]",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 607,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "sameArr3",
    "start": 613,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 624,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 630,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "fromAsync",
    "start": 636,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "genPromises",
    "start": 646,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 663,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "sameArr4",
    "start": 669,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 680,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 686,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "fromAsync",
    "start": 692,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "asyncGen",
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
    "type": "Numeric",
    "value": "4",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 717,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 726,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 738,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "fromAsync",
    "start": 743,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 755,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "fromAsync",
    "start": 761,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 772,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "sameArr5",
    "start": 778,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 789,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "fromAsync",
    "start": 800,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "asyncGen",
    "start": 810,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 825,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "mapArr1",
    "start": 831,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 841,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 847,
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
    "value": "fromAsync",
    "start": 853,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "asyncGen",
    "start": 863,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 878,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 883,
    "end": 885
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 890,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "mapArr2",
    "start": 896,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 906,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 912,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "fromAsync",
    "start": 918,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 928,
    "end": 929
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 930,
    "end": 931
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 932,
    "end": 933
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 934,
    "end": 935
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 941,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 944,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 952,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 962,
    "end": 964
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 970,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "mapArr3",
    "start": 976,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 986,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 992,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "fromAsync",
    "start": 998,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1021,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 1026,
    "end": 1028
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1034,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1050,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1057,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "badIterable",
    "start": 1063,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1080,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 1087,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1102,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1173,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "badArray",
    "start": 1179,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1190,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1196,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "fromAsync",
    "start": 1202,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "badIterable",
    "start": 1212,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1227,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "withIndexResult",
    "start": 1233,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1251,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1257,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "fromAsync",
    "start": 1263,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1274,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1279,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1286,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 1291,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1298,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 1304,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1311,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1318,
    "end": 1319
  }
]
```
