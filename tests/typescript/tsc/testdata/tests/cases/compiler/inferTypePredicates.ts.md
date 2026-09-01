__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "numsOrNull",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 73
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 77,
                "end": 78
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 80,
                "end": 81
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 83,
                "end": 84
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 86,
                "end": 87
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 89,
                "end": 93
              }
            ],
            "start": 76,
            "end": 94
          },
          "definite": false,
          "start": 63,
          "end": 94
        }
      ],
      "declare": false,
      "start": 57,
      "end": 95
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
            "name": "filteredNumsTruthy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 122,
                  "end": 128
                },
                "start": 122,
                "end": 130
              },
              "start": 120,
              "end": 130
            },
            "start": 102,
            "end": 130
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "numsOrNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 143
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 150
              },
              "optional": false,
              "computed": false,
              "start": 133,
              "end": 150
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 152
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 159
                    },
                    "prefix": true,
                    "start": 157,
                    "end": 159
                  },
                  "prefix": true,
                  "start": 156,
                  "end": 159
                },
                "id": null,
                "generator": false,
                "start": 151,
                "end": 159
              }
            ],
            "optional": false,
            "start": 133,
            "end": 160
          },
          "definite": false,
          "start": 102,
          "end": 160
        }
      ],
      "declare": false,
      "start": 96,
      "end": 161
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
            "name": "filteredNumsNonNullish",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 209,
                  "end": 215
                },
                "start": 209,
                "end": 217
              },
              "start": 207,
              "end": 217
            },
            "start": 185,
            "end": 217
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "numsOrNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 230
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 237
              },
              "optional": false,
              "computed": false,
              "start": 220,
              "end": 237
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 239
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 249,
                    "end": 253
                  },
                  "start": 243,
                  "end": 253
                },
                "id": null,
                "generator": false,
                "start": 238,
                "end": 253
              }
            ],
            "optional": false,
            "start": 220,
            "end": 254
          },
          "definite": false,
          "start": 185,
          "end": 254
        }
      ],
      "declare": false,
      "start": 179,
      "end": 255
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
            "name": "evenSquaresInline",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 296,
                  "end": 302
                },
                "start": 296,
                "end": 304
              },
              "start": 294,
              "end": 304
            },
            "start": 277,
            "end": 304
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 329,
                        "end": 330
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 332,
                        "end": 333
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 335,
                        "end": 336
                      },
                      {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 338,
                        "end": 339
                      }
                    ],
                    "start": 328,
                    "end": 340
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 353
                  },
                  "optional": false,
                  "computed": false,
                  "start": 328,
                  "end": 353
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 355
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 359,
                            "end": 360
                          },
                          "operator": "%",
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 363,
                            "end": 364
                          },
                          "start": 359,
                          "end": 364
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 369,
                          "end": 370
                        },
                        "start": 359,
                        "end": 370
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 373,
                          "end": 374
                        },
                        "operator": "*",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 377,
                          "end": 378
                        },
                        "start": 373,
                        "end": 378
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 381,
                        "end": 385
                      },
                      "start": 359,
                      "end": 385
                    },
                    "id": null,
                    "generator": false,
                    "start": 354,
                    "end": 385
                  }
                ],
                "optional": false,
                "start": 328,
                "end": 386
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 402
              },
              "optional": false,
              "computed": false,
              "start": 328,
              "end": 402
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 403,
                    "end": 404
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 411
                    },
                    "prefix": true,
                    "start": 409,
                    "end": 411
                  },
                  "prefix": true,
                  "start": 408,
                  "end": 411
                },
                "id": null,
                "generator": false,
                "start": 403,
                "end": 411
              }
            ],
            "optional": false,
            "start": 328,
            "end": 412
          },
          "definite": false,
          "start": 277,
          "end": 412
        }
      ],
      "declare": false,
      "start": 271,
      "end": 413
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
            "name": "isTruthy",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 470
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 477,
                        "end": 483
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 486,
                        "end": 490
                      }
                    ],
                    "start": 477,
                    "end": 490
                  },
                  "start": 475,
                  "end": 490
                },
                "start": 474,
                "end": 490
              }
            ],
            "returnType": null,
            "body": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 497,
                  "end": 498
                },
                "prefix": true,
                "start": 496,
                "end": 498
              },
              "prefix": true,
              "start": 495,
              "end": 498
            },
            "id": null,
            "generator": false,
            "start": 473,
            "end": 498
          },
          "definite": false,
          "start": 462,
          "end": 498
        }
      ],
      "declare": false,
      "start": 456,
      "end": 499
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
            "name": "evenSquares",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 520,
                  "end": 526
                },
                "start": 520,
                "end": 528
              },
              "start": 518,
              "end": 528
            },
            "start": 507,
            "end": 528
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 553,
                        "end": 554
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 556,
                        "end": 557
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 559,
                        "end": 560
                      },
                      {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 562,
                        "end": 563
                      }
                    ],
                    "start": 552,
                    "end": 564
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 573
                  },
                  "optional": false,
                  "computed": false,
                  "start": 552,
                  "end": 573
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 574,
                        "end": 575
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 579,
                            "end": 580
                          },
                          "operator": "%",
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 583,
                            "end": 584
                          },
                          "start": 579,
                          "end": 584
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 589,
                          "end": 590
                        },
                        "start": 579,
                        "end": 590
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 593,
                          "end": 594
                        },
                        "operator": "*",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 597,
                          "end": 598
                        },
                        "start": 593,
                        "end": 598
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 601,
                        "end": 605
                      },
                      "start": 579,
                      "end": 605
                    },
                    "id": null,
                    "generator": false,
                    "start": 574,
                    "end": 605
                  }
                ],
                "optional": false,
                "start": 552,
                "end": 606
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 620
              },
              "optional": false,
              "computed": false,
              "start": 552,
              "end": 620
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isTruthy",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 629
              }
            ],
            "optional": false,
            "start": 552,
            "end": 630
          },
          "definite": false,
          "start": 507,
          "end": 630
        }
      ],
      "declare": false,
      "start": 501,
      "end": 631
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
            "name": "evenSquaresNonNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 659,
                  "end": 665
                },
                "start": 659,
                "end": 667
              },
              "start": 657,
              "end": 667
            },
            "start": 639,
            "end": 667
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 689,
                        "end": 690
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 692,
                        "end": 693
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 695,
                        "end": 696
                      },
                      {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 698,
                        "end": 699
                      }
                    ],
                    "start": 688,
                    "end": 700
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 706,
                    "end": 709
                  },
                  "optional": false,
                  "computed": false,
                  "start": 688,
                  "end": 709
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 710,
                        "end": 711
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 715,
                            "end": 716
                          },
                          "operator": "%",
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 719,
                            "end": 720
                          },
                          "start": 715,
                          "end": 720
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 725,
                          "end": 726
                        },
                        "start": 715,
                        "end": 726
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 729,
                          "end": 730
                        },
                        "operator": "*",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 733,
                          "end": 734
                        },
                        "start": 729,
                        "end": 734
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 737,
                        "end": 741
                      },
                      "start": 715,
                      "end": 741
                    },
                    "id": null,
                    "generator": false,
                    "start": 710,
                    "end": 741
                  }
                ],
                "optional": false,
                "start": 688,
                "end": 742
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 754
              },
              "optional": false,
              "computed": false,
              "start": 688,
              "end": 754
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 756
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 760,
                    "end": 761
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 766,
                    "end": 770
                  },
                  "start": 760,
                  "end": 770
                },
                "id": null,
                "generator": false,
                "start": 755,
                "end": 770
              }
            ],
            "optional": false,
            "start": 688,
            "end": 771
          },
          "definite": false,
          "start": 639,
          "end": 771
        }
      ],
      "declare": false,
      "start": 633,
      "end": 772
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNonNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 783,
        "end": 792
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 796,
                  "end": 802
                },
                {
                  "type": "TSNullKeyword",
                  "start": 805,
                  "end": 809
                }
              ],
              "start": 796,
              "end": 809
            },
            "start": 794,
            "end": 809
          },
          "start": 793,
          "end": 809
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 822,
                "end": 823
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 828,
                "end": 832
              },
              "start": 822,
              "end": 832
            },
            "start": 815,
            "end": 833
          }
        ],
        "start": 811,
        "end": 835
      },
      "expression": false,
      "start": 774,
      "end": 835
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNonNullVar",
        "optional": false,
        "typeAnnotation": null,
        "start": 911,
        "end": 923
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 927,
                  "end": 933
                },
                {
                  "type": "TSNullKeyword",
                  "start": 936,
                  "end": 940
                }
              ],
              "start": 927,
              "end": 940
            },
            "start": 925,
            "end": 940
          },
          "start": 924,
          "end": 940
        }
      ],
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
                  "name": "ok",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 952,
                  "end": 954
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 957,
                    "end": 958
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 963,
                    "end": 967
                  },
                  "start": 957,
                  "end": 967
                },
                "definite": false,
                "start": 952,
                "end": 967
              }
            ],
            "declare": false,
            "start": 946,
            "end": 968
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null,
              "start": 978,
              "end": 980
            },
            "start": 971,
            "end": 981
          }
        ],
        "start": 942,
        "end": 983
      },
      "expression": false,
      "start": 902,
      "end": 983
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNonNullGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 994,
        "end": 1010
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1011,
              "end": 1012
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1011,
            "end": 1012
          }
        ],
        "start": 1010,
        "end": 1013
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1017,
                "end": 1018
              },
              "typeArguments": null,
              "start": 1017,
              "end": 1018
            },
            "start": 1015,
            "end": 1018
          },
          "start": 1014,
          "end": 1018
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1031,
                "end": 1032
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1037,
                "end": 1041
              },
              "start": 1031,
              "end": 1041
            },
            "start": 1024,
            "end": 1042
          }
        ],
        "start": 1020,
        "end": 1044
      },
      "expression": false,
      "start": 985,
      "end": 1044
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
            "name": "myGuard",
            "optional": false,
            "typeAnnotation": null,
            "start": 1094,
            "end": 1101
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1108,
                        "end": 1114
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1117,
                        "end": 1126
                      }
                    ],
                    "start": 1108,
                    "end": 1126
                  },
                  "start": 1106,
                  "end": 1126
                },
                "start": 1105,
                "end": 1126
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1129,
                  "end": 1130
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1134,
                    "end": 1140
                  },
                  "start": 1134,
                  "end": 1140
                },
                "start": 1129,
                "end": 1140
              },
              "start": 1127,
              "end": 1140
            },
            "body": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1146,
                  "end": 1147
                },
                "prefix": true,
                "start": 1145,
                "end": 1147
              },
              "prefix": true,
              "start": 1144,
              "end": 1147
            },
            "id": null,
            "generator": false,
            "start": 1104,
            "end": 1147
          },
          "definite": false,
          "start": 1094,
          "end": 1147
        }
      ],
      "declare": false,
      "start": 1088,
      "end": 1148
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
            "name": "mySecondGuard",
            "optional": false,
            "typeAnnotation": null,
            "start": 1155,
            "end": 1168
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1175,
                        "end": 1181
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1184,
                        "end": 1193
                      }
                    ],
                    "start": 1175,
                    "end": 1193
                  },
                  "start": 1173,
                  "end": 1193
                },
                "start": 1172,
                "end": 1193
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "myGuard",
                "optional": false,
                "typeAnnotation": null,
                "start": 1198,
                "end": 1205
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1206,
                  "end": 1207
                }
              ],
              "optional": false,
              "start": 1198,
              "end": 1208
            },
            "id": null,
            "generator": false,
            "start": 1171,
            "end": 1208
          },
          "definite": false,
          "start": 1155,
          "end": 1208
        }
      ],
      "declare": false,
      "start": 1149,
      "end": 1209
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 1414,
        "end": 1419
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1424,
              "end": 1428
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1431,
                "end": 1437
              },
              "start": 1429,
              "end": 1437
            },
            "accessibility": null,
            "static": false,
            "start": 1424,
            "end": 1437
          }
        ],
        "start": 1422,
        "end": 1439
      },
      "declare": false,
      "start": 1409,
      "end": 1440
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 1446,
        "end": 1453
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 1458,
                "end": 1462
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
                      "name": "MyObj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1465,
                      "end": 1470
                    },
                    "typeArguments": null,
                    "start": 1465,
                    "end": 1470
                  },
                  "start": 1465,
                  "end": 1472
                },
                "start": 1463,
                "end": 1472
              },
              "accessibility": null,
              "static": false,
              "start": 1458,
              "end": 1472
            }
          ],
          "start": 1456,
          "end": 1474
        },
        "start": 1456,
        "end": 1476
      },
      "declare": false,
      "start": 1441,
      "end": 1477
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
            "name": "myArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1500
                },
                "typeArguments": null,
                "start": 1493,
                "end": 1500
              },
              "start": 1491,
              "end": 1500
            },
            "start": 1484,
            "end": 1500
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1503,
            "end": 1505
          },
          "definite": false,
          "start": 1484,
          "end": 1505
        }
      ],
      "declare": false,
      "start": 1478,
      "end": 1506
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 1514,
            "end": 1520
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1523,
                        "end": 1530
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1534,
                        "end": 1537
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1523,
                      "end": 1537
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1539,
                            "end": 1542
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1547,
                            "end": 1550
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "list",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1551,
                            "end": 1555
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1547,
                          "end": 1555
                        },
                        "id": null,
                        "generator": false,
                        "start": 1538,
                        "end": 1555
                      }
                    ],
                    "optional": false,
                    "start": 1523,
                    "end": 1556
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1560,
                    "end": 1566
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1523,
                  "end": 1566
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1568,
                        "end": 1571
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1576,
                        "end": 1579
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1583,
                          "end": 1586
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1587,
                          "end": 1593
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1583,
                        "end": 1593
                      },
                      "start": 1576,
                      "end": 1593
                    },
                    "id": null,
                    "generator": false,
                    "start": 1567,
                    "end": 1593
                  }
                ],
                "optional": false,
                "start": 1523,
                "end": 1594
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 1598,
                "end": 1601
              },
              "optional": false,
              "computed": false,
              "start": 1523,
              "end": 1601
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1603,
                    "end": 1606
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1611,
                          "end": 1614
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "filter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1636,
                          "end": 1642
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1611,
                        "end": 1642
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1644,
                              "end": 1647
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1652,
                              "end": 1655
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1659,
                                "end": 1662
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1663,
                                "end": 1667
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1659,
                              "end": 1667
                            },
                            "start": 1652,
                            "end": 1667
                          },
                          "id": null,
                          "generator": false,
                          "start": 1643,
                          "end": 1667
                        }
                      ],
                      "optional": false,
                      "start": 1611,
                      "end": 1668
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1674,
                      "end": 1677
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1611,
                    "end": 1677
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1678,
                          "end": 1681
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
                            "name": "JSON",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1685,
                            "end": 1689
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parse",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1690,
                            "end": 1695
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1685,
                          "end": 1695
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1696,
                              "end": 1699
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1700,
                              "end": 1704
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1696,
                            "end": 1704
                          }
                        ],
                        "optional": false,
                        "start": 1685,
                        "end": 1705
                      },
                      "id": null,
                      "generator": false,
                      "start": 1678,
                      "end": 1705
                    }
                  ],
                  "optional": false,
                  "start": 1611,
                  "end": 1706
                },
                "id": null,
                "generator": false,
                "start": 1602,
                "end": 1706
              }
            ],
            "optional": false,
            "start": 1523,
            "end": 1727
          },
          "definite": false,
          "start": 1514,
          "end": 1727
        }
      ],
      "declare": false,
      "start": 1508,
      "end": 1728
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1736,
            "end": 1743
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1746,
                            "end": 1753
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1757,
                            "end": 1760
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1746,
                          "end": 1760
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1762,
                                "end": 1765
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1770,
                                "end": 1773
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "list",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1774,
                                "end": 1778
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1770,
                              "end": 1778
                            },
                            "id": null,
                            "generator": false,
                            "start": 1761,
                            "end": 1778
                          }
                        ],
                        "optional": false,
                        "start": 1746,
                        "end": 1779
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "filter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1783,
                        "end": 1789
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1746,
                      "end": 1789
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1791,
                            "end": 1794
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arr",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1801,
                              "end": 1804
                            },
                            "prefix": true,
                            "start": 1800,
                            "end": 1804
                          },
                          "prefix": true,
                          "start": 1799,
                          "end": 1804
                        },
                        "id": null,
                        "generator": false,
                        "start": 1790,
                        "end": 1804
                      }
                    ],
                    "optional": false,
                    "start": 1746,
                    "end": 1805
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1809,
                    "end": 1815
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1746,
                  "end": 1815
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1816,
                        "end": 1819
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1823,
                        "end": 1826
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1827,
                        "end": 1833
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1823,
                      "end": 1833
                    },
                    "id": null,
                    "generator": false,
                    "start": 1816,
                    "end": 1833
                  }
                ],
                "optional": false,
                "start": 1746,
                "end": 1834
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 1838,
                "end": 1841
              },
              "optional": false,
              "computed": false,
              "start": 1746,
              "end": 1841
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1843,
                    "end": 1846
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arr",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1851,
                              "end": 1854
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1874,
                              "end": 1880
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1851,
                            "end": 1880
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1882,
                                  "end": 1885
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1890,
                                "end": 1893
                              },
                              "id": null,
                              "generator": false,
                              "start": 1881,
                              "end": 1893
                            }
                          ],
                          "optional": false,
                          "start": 1851,
                          "end": 1894
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "filter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1997,
                          "end": 2003
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1851,
                        "end": 2003
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2004,
                              "end": 2007
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2013,
                                  "end": 2016
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2017,
                                  "end": 2021
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2013,
                                "end": 2021
                              },
                              "prefix": true,
                              "start": 2012,
                              "end": 2021
                            },
                            "prefix": true,
                            "start": 2011,
                            "end": 2021
                          },
                          "id": null,
                          "generator": false,
                          "start": 2004,
                          "end": 2021
                        }
                      ],
                      "optional": false,
                      "start": 1851,
                      "end": 2022
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2028,
                      "end": 2031
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1851,
                    "end": 2031
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2032,
                          "end": 2035
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
                            "name": "JSON",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2039,
                            "end": 2043
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parse",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2044,
                            "end": 2049
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2039,
                          "end": 2049
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2050,
                              "end": 2053
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2054,
                              "end": 2058
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2050,
                            "end": 2058
                          }
                        ],
                        "optional": false,
                        "start": 2039,
                        "end": 2059
                      },
                      "id": null,
                      "generator": false,
                      "start": 2032,
                      "end": 2059
                    }
                  ],
                  "optional": false,
                  "start": 1851,
                  "end": 2060
                },
                "id": null,
                "generator": false,
                "start": 1842,
                "end": 2060
              }
            ],
            "optional": false,
            "start": 1746,
            "end": 2064
          },
          "definite": false,
          "start": 1736,
          "end": 2064
        }
      ],
      "declare": false,
      "start": 1730,
      "end": 2065
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2152,
        "end": 2155
      },
      "typeParameters": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2162,
              "end": 2165
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2167,
                "end": 2173
              },
              "start": 2165,
              "end": 2173
            },
            "accessibility": null,
            "static": false,
            "start": 2162,
            "end": 2174
          }
        ],
        "start": 2158,
        "end": 2176
      },
      "declare": false,
      "start": 2147,
      "end": 2176
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2182,
        "end": 2185
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2188,
              "end": 2191
            },
            "typeArguments": null,
            "start": 2188,
            "end": 2191
          },
          {
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2198,
                  "end": 2201
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2203,
                    "end": 2209
                  },
                  "start": 2201,
                  "end": 2209
                },
                "accessibility": null,
                "static": false,
                "start": 2198,
                "end": 2210
              }
            ],
            "start": 2194,
            "end": 2212
          }
        ],
        "start": 2188,
        "end": 2212
      },
      "declare": false,
      "start": 2177,
      "end": 2212
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
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2227,
                        "end": 2230
                      },
                      "typeArguments": null,
                      "start": 2227,
                      "end": 2230
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2233,
                        "end": 2236
                      },
                      "typeArguments": null,
                      "start": 2233,
                      "end": 2236
                    }
                  ],
                  "start": 2227,
                  "end": 2236
                },
                "start": 2226,
                "end": 2239
              },
              "start": 2224,
              "end": 2239
            },
            "start": 2220,
            "end": 2239
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 2242,
            "end": 2244
          },
          "definite": false,
          "start": 2220,
          "end": 2244
        }
      ],
      "declare": false,
      "start": 2214,
      "end": 2245
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
            "name": "resultBars",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2264,
                    "end": 2267
                  },
                  "typeArguments": null,
                  "start": 2264,
                  "end": 2267
                },
                "start": 2264,
                "end": 2269
              },
              "start": 2262,
              "end": 2269
            },
            "start": 2252,
            "end": 2269
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 2272,
                "end": 2276
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 2277,
                "end": 2283
              },
              "optional": false,
              "computed": false,
              "start": 2272,
              "end": 2283
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2285,
                    "end": 2290
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 2295,
                    "end": 2300
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2304,
                    "end": 2309
                  },
                  "start": 2295,
                  "end": 2309
                },
                "id": null,
                "generator": false,
                "start": 2284,
                "end": 2309
              }
            ],
            "optional": false,
            "start": 2272,
            "end": 2310
          },
          "definite": false,
          "start": 2252,
          "end": 2310
        }
      ],
      "declare": false,
      "start": 2246,
      "end": 2311
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBarNonNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 2336,
        "end": 2348
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2352,
                    "end": 2355
                  },
                  "typeArguments": null,
                  "start": 2352,
                  "end": 2355
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2358,
                    "end": 2361
                  },
                  "typeArguments": null,
                  "start": 2358,
                  "end": 2361
                },
                {
                  "type": "TSNullKeyword",
                  "start": 2364,
                  "end": 2368
                }
              ],
              "start": 2352,
              "end": 2368
            },
            "start": 2350,
            "end": 2368
          },
          "start": 2349,
          "end": 2368
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 2382,
                "end": 2387
              },
              "operator": "in",
              "right": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2391,
                  "end": 2392
                },
                "start": 2391,
                "end": 2393
              },
              "start": 2382,
              "end": 2393
            },
            "start": 2374,
            "end": 2395
          }
        ],
        "start": 2370,
        "end": 2397
      },
      "expression": false,
      "start": 2327,
      "end": 2397
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
            "name": "fooOrBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 2404,
            "end": 2412
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "list",
              "optional": false,
              "typeAnnotation": null,
              "start": 2415,
              "end": 2419
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2420,
              "end": 2421
            },
            "optional": false,
            "computed": true,
            "start": 2415,
            "end": 2422
          },
          "definite": false,
          "start": 2404,
          "end": 2422
        }
      ],
      "declare": false,
      "start": 2398,
      "end": 2423
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isBarNonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 2428,
          "end": 2440
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fooOrBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 2441,
            "end": 2449
          }
        ],
        "optional": false,
        "start": 2428,
        "end": 2450
      },
      "consequent": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2465,
                        "end": 2468
                      },
                      "typeArguments": null,
                      "start": 2465,
                      "end": 2468
                    },
                    "start": 2463,
                    "end": 2468
                  },
                  "start": 2462,
                  "end": 2468
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fooOrBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2471,
                  "end": 2479
                },
                "definite": false,
                "start": 2462,
                "end": 2479
              }
            ],
            "declare": false,
            "start": 2456,
            "end": 2480
          }
        ],
        "start": 2452,
        "end": 2496
      },
      "alternate": null,
      "start": 2424,
      "end": 2496
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
            "start": 2620,
            "end": 2621
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2625,
                    "end": 2626
                  },
                  {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 2628,
                    "end": 2633
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2635,
                    "end": 2636
                  },
                  {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 2638,
                    "end": 2643
                  }
                ],
                "start": 2624,
                "end": 2644
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 2645,
                "end": 2651
              },
              "optional": false,
              "computed": false,
              "start": 2624,
              "end": 2651
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2652,
                    "end": 2653
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2664,
                      "end": 2665
                    },
                    "prefix": true,
                    "start": 2657,
                    "end": 2665
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 2670,
                    "end": 2678
                  },
                  "start": 2657,
                  "end": 2678
                },
                "id": null,
                "generator": false,
                "start": 2652,
                "end": 2678
              }
            ],
            "optional": false,
            "start": 2624,
            "end": 2679
          },
          "definite": false,
          "start": 2620,
          "end": 2679
        }
      ],
      "declare": false,
      "start": 2614,
      "end": 2680
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2681,
            "end": 2682
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 2683,
            "end": 2687
          },
          "optional": false,
          "computed": false,
          "start": 2681,
          "end": 2687
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2688,
            "end": 2690
          }
        ],
        "optional": false,
        "start": 2681,
        "end": 2691
      },
      "directive": null,
      "start": 2681,
      "end": 2692
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "backwardsGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 2766,
        "end": 2780
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2784,
                  "end": 2790
                },
                {
                  "type": "TSStringKeyword",
                  "start": 2791,
                  "end": 2797
                }
              ],
              "start": 2784,
              "end": 2797
            },
            "start": 2782,
            "end": 2797
          },
          "start": 2781,
          "end": 2797
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2800,
            "end": 2801
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2805,
              "end": 2811
            },
            "start": 2805,
            "end": 2811
          },
          "start": 2800,
          "end": 2811
        },
        "start": 2798,
        "end": 2811
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2830,
                  "end": 2831
                },
                "prefix": true,
                "start": 2823,
                "end": 2831
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 2836,
                "end": 2844
              },
              "start": 2823,
              "end": 2844
            },
            "start": 2816,
            "end": 2845
          }
        ],
        "start": 2812,
        "end": 2847
      },
      "expression": false,
      "start": 2757,
      "end": 2847
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isString",
        "optional": false,
        "typeAnnotation": null,
        "start": 2904,
        "end": 2912
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2916,
                  "end": 2922
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2925,
                  "end": 2931
                }
              ],
              "start": 2916,
              "end": 2931
            },
            "start": 2914,
            "end": 2931
          },
          "start": 2913,
          "end": 2931
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2951,
                  "end": 2952
                },
                "prefix": true,
                "start": 2944,
                "end": 2952
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 2957,
                "end": 2965
              },
              "start": 2944,
              "end": 2965
            },
            "start": 2937,
            "end": 2966
          }
        ],
        "start": 2933,
        "end": 2968
      },
      "expression": false,
      "start": 2895,
      "end": 2968
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2992,
                    "end": 2998
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 3001,
                    "end": 3007
                  }
                ],
                "start": 2992,
                "end": 3007
              },
              "start": 2990,
              "end": 3007
            },
            "start": 2982,
            "end": 3007
          },
          "init": null,
          "definite": false,
          "start": 2982,
          "end": 3007
        }
      ],
      "declare": true,
      "start": 2970,
      "end": 3008
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isString",
          "optional": false,
          "typeAnnotation": null,
          "start": 3013,
          "end": 3021
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 3022,
            "end": 3030
          }
        ],
        "optional": false,
        "start": 3013,
        "end": 3031
      },
      "consequent": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3044,
                      "end": 3050
                    },
                    "start": 3042,
                    "end": 3050
                  },
                  "start": 3041,
                  "end": 3050
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3053,
                  "end": 3061
                },
                "definite": false,
                "start": 3041,
                "end": 3061
              }
            ],
            "declare": false,
            "start": 3037,
            "end": 3062
          }
        ],
        "start": 3033,
        "end": 3078
      },
      "alternate": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3095,
                      "end": 3101
                    },
                    "start": 3093,
                    "end": 3101
                  },
                  "start": 3092,
                  "end": 3101
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3104,
                  "end": 3112
                },
                "definite": false,
                "start": 3092,
                "end": 3112
              }
            ],
            "declare": false,
            "start": 3088,
            "end": 3113
          }
        ],
        "start": 3084,
        "end": 3129
      },
      "start": 3009,
      "end": 3129
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flakyIsString",
        "optional": false,
        "typeAnnotation": null,
        "start": 3140,
        "end": 3153
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3157,
                  "end": 3163
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 3166,
                  "end": 3172
                }
              ],
              "start": 3157,
              "end": 3172
            },
            "start": 3155,
            "end": 3172
          },
          "start": 3154,
          "end": 3172
        }
      ],
      "returnType": null,
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
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3192,
                    "end": 3193
                  },
                  "prefix": true,
                  "start": 3185,
                  "end": 3193
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 3198,
                  "end": 3206
                },
                "start": 3185,
                "end": 3206
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3210,
                      "end": 3214
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3215,
                      "end": 3221
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3210,
                    "end": 3221
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3210,
                  "end": 3223
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "value": 0.5,
                  "raw": "0.5",
                  "start": 3226,
                  "end": 3229
                },
                "start": 3210,
                "end": 3229
              },
              "start": 3185,
              "end": 3229
            },
            "start": 3178,
            "end": 3230
          }
        ],
        "start": 3174,
        "end": 3232
      },
      "expression": false,
      "start": 3131,
      "end": 3232
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flakyIsString",
          "optional": false,
          "typeAnnotation": null,
          "start": 3237,
          "end": 3250
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 3251,
            "end": 3259
          }
        ],
        "optional": false,
        "start": 3237,
        "end": 3260
      },
      "consequent": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3273,
                      "end": 3279
                    },
                    "start": 3271,
                    "end": 3279
                  },
                  "start": 3270,
                  "end": 3279
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3282,
                  "end": 3290
                },
                "definite": false,
                "start": 3270,
                "end": 3290
              }
            ],
            "declare": false,
            "start": 3266,
            "end": 3291
          }
        ],
        "start": 3262,
        "end": 3310
      },
      "alternate": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3327,
                      "end": 3333
                    },
                    "start": 3325,
                    "end": 3333
                  },
                  "start": 3324,
                  "end": 3333
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3336,
                  "end": 3344
                },
                "definite": false,
                "start": 3324,
                "end": 3344
              }
            ],
            "declare": false,
            "start": 3320,
            "end": 3345
          }
        ],
        "start": 3316,
        "end": 3364
      },
      "start": 3233,
      "end": 3364
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isDate",
        "optional": false,
        "typeAnnotation": null,
        "start": 3375,
        "end": 3381
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 3385,
              "end": 3391
            },
            "start": 3383,
            "end": 3391
          },
          "start": 3382,
          "end": 3391
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3404,
                "end": 3405
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 3417,
                "end": 3421
              },
              "start": 3404,
              "end": 3421
            },
            "start": 3397,
            "end": 3422
          }
        ],
        "start": 3393,
        "end": 3424
      },
      "expression": false,
      "start": 3366,
      "end": 3424
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flakyIsDate",
        "optional": false,
        "typeAnnotation": null,
        "start": 3434,
        "end": 3445
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 3449,
              "end": 3455
            },
            "start": 3447,
            "end": 3455
          },
          "start": 3446,
          "end": 3455
        }
      ],
      "returnType": null,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3468,
                  "end": 3469
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3481,
                  "end": 3485
                },
                "start": 3468,
                "end": 3485
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3489,
                      "end": 3493
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3494,
                      "end": 3500
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3489,
                    "end": 3500
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3489,
                  "end": 3502
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "value": 0.5,
                  "raw": "0.5",
                  "start": 3505,
                  "end": 3508
                },
                "start": 3489,
                "end": 3508
              },
              "start": 3468,
              "end": 3508
            },
            "start": 3461,
            "end": 3509
          }
        ],
        "start": 3457,
        "end": 3511
      },
      "expression": false,
      "start": 3425,
      "end": 3511
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "maybeDate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 3536,
                "end": 3542
              },
              "start": 3534,
              "end": 3542
            },
            "start": 3525,
            "end": 3542
          },
          "init": null,
          "definite": false,
          "start": 3525,
          "end": 3542
        }
      ],
      "declare": true,
      "start": 3513,
      "end": 3543
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 3548,
          "end": 3554
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "maybeDate",
            "optional": false,
            "typeAnnotation": null,
            "start": 3555,
            "end": 3564
          }
        ],
        "optional": false,
        "start": 3548,
        "end": 3565
      },
      "consequent": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3578,
                        "end": 3582
                      },
                      "typeArguments": null,
                      "start": 3578,
                      "end": 3582
                    },
                    "start": 3576,
                    "end": 3582
                  },
                  "start": 3575,
                  "end": 3582
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3585,
                  "end": 3594
                },
                "definite": false,
                "start": 3575,
                "end": 3594
              }
            ],
            "declare": false,
            "start": 3571,
            "end": 3595
          }
        ],
        "start": 3567,
        "end": 3611
      },
      "alternate": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 3628,
                      "end": 3634
                    },
                    "start": 3626,
                    "end": 3634
                  },
                  "start": 3625,
                  "end": 3634
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3637,
                  "end": 3646
                },
                "definite": false,
                "start": 3625,
                "end": 3646
              }
            ],
            "declare": false,
            "start": 3621,
            "end": 3647
          }
        ],
        "start": 3617,
        "end": 3663
      },
      "start": 3544,
      "end": 3663
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flakyIsDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 3669,
          "end": 3680
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "maybeDate",
            "optional": false,
            "typeAnnotation": null,
            "start": 3681,
            "end": 3690
          }
        ],
        "optional": false,
        "start": 3669,
        "end": 3691
      },
      "consequent": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3704,
                        "end": 3708
                      },
                      "typeArguments": null,
                      "start": 3704,
                      "end": 3708
                    },
                    "start": 3702,
                    "end": 3708
                  },
                  "start": 3701,
                  "end": 3708
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3711,
                  "end": 3720
                },
                "definite": false,
                "start": 3701,
                "end": 3720
              }
            ],
            "declare": false,
            "start": 3697,
            "end": 3721
          }
        ],
        "start": 3693,
        "end": 3740
      },
      "alternate": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 3757,
                      "end": 3763
                    },
                    "start": 3755,
                    "end": 3763
                  },
                  "start": 3754,
                  "end": 3763
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3766,
                  "end": 3775
                },
                "definite": false,
                "start": 3754,
                "end": 3775
              }
            ],
            "declare": false,
            "start": 3750,
            "end": 3776
          }
        ],
        "start": 3746,
        "end": 3792
      },
      "start": 3665,
      "end": 3792
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "irrelevantIsNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 3932,
        "end": 3950
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3954,
                  "end": 3960
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 3963,
                  "end": 3969
                }
              ],
              "start": 3954,
              "end": 3969
            },
            "start": 3952,
            "end": 3969
          },
          "start": 3951,
          "end": 3969
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3974,
                "end": 3975
              },
              "right": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3978,
                        "end": 3982
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3983,
                        "end": 3989
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3978,
                      "end": 3989
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 3978,
                    "end": 3991
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 0.5,
                    "raw": "0.5",
                    "start": 3994,
                    "end": 3997
                  },
                  "start": 3978,
                  "end": 3997
                },
                "consequent": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 4000,
                  "end": 4008
                },
                "alternate": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 4011,
                  "end": 4014
                },
                "start": 3978,
                "end": 4014
              },
              "start": 3974,
              "end": 4014
            },
            "directive": null,
            "start": 3974,
            "end": 4015
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4032,
                  "end": 4033
                },
                "prefix": true,
                "start": 4025,
                "end": 4033
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 4038,
                "end": 4046
              },
              "start": 4025,
              "end": 4046
            },
            "start": 4018,
            "end": 4047
          }
        ],
        "start": 3971,
        "end": 4049
      },
      "expression": false,
      "start": 3923,
      "end": 4049
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "irrelevantIsNumberDestructuring",
        "optional": false,
        "typeAnnotation": null,
        "start": 4059,
        "end": 4090
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4094,
                  "end": 4100
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4103,
                  "end": 4109
                }
              ],
              "start": 4094,
              "end": 4109
            },
            "start": 4092,
            "end": 4109
          },
          "start": 4091,
          "end": 4109
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4115,
                    "end": 4116
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 4114,
                "end": 4117
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4121,
                            "end": 4125
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4126,
                            "end": 4132
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4121,
                          "end": 4132
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 4121,
                        "end": 4134
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": "0.5",
                        "start": 4137,
                        "end": 4140
                      },
                      "start": 4121,
                      "end": 4140
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 4143,
                      "end": 4151
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 4154,
                      "end": 4157
                    },
                    "start": 4121,
                    "end": 4157
                  }
                ],
                "start": 4120,
                "end": 4158
              },
              "start": 4114,
              "end": 4158
            },
            "directive": null,
            "start": 4114,
            "end": 4159
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4176,
                  "end": 4177
                },
                "prefix": true,
                "start": 4169,
                "end": 4177
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 4182,
                "end": 4190
              },
              "start": 4169,
              "end": 4190
            },
            "start": 4162,
            "end": 4191
          }
        ],
        "start": 4111,
        "end": 4193
      },
      "expression": false,
      "start": 4050,
      "end": 4193
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "areBothNums",
        "optional": false,
        "typeAnnotation": null,
        "start": 4277,
        "end": 4288
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4292,
                  "end": 4298
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4299,
                  "end": 4305
                }
              ],
              "start": 4292,
              "end": 4305
            },
            "start": 4290,
            "end": 4305
          },
          "start": 4289,
          "end": 4305
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4310,
                  "end": 4316
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4317,
                  "end": 4323
                }
              ],
              "start": 4310,
              "end": 4323
            },
            "start": 4308,
            "end": 4323
          },
          "start": 4307,
          "end": 4323
        }
      ],
      "returnType": null,
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
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4343,
                    "end": 4344
                  },
                  "prefix": true,
                  "start": 4336,
                  "end": 4344
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 4349,
                  "end": 4357
                },
                "start": 4336,
                "end": 4357
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4368,
                    "end": 4369
                  },
                  "prefix": true,
                  "start": 4361,
                  "end": 4369
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 4374,
                  "end": 4382
                },
                "start": 4361,
                "end": 4382
              },
              "start": 4336,
              "end": 4382
            },
            "start": 4329,
            "end": 4383
          }
        ],
        "start": 4325,
        "end": 4385
      },
      "expression": false,
      "start": 4268,
      "end": 4385
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doubleReturn",
        "optional": false,
        "typeAnnotation": null,
        "start": 4480,
        "end": 4492
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4496,
                  "end": 4502
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4503,
                  "end": 4509
                }
              ],
              "start": 4496,
              "end": 4509
            },
            "start": 4494,
            "end": 4509
          },
          "start": 4493,
          "end": 4509
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4526,
                  "end": 4527
                },
                "prefix": true,
                "start": 4519,
                "end": 4527
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 4532,
                "end": 4540
              },
              "start": 4519,
              "end": 4540
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 4555,
                    "end": 4559
                  },
                  "start": 4548,
                  "end": 4560
                }
              ],
              "start": 4542,
              "end": 4564
            },
            "alternate": null,
            "start": 4515,
            "end": 4564
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 4574,
              "end": 4579
            },
            "start": 4567,
            "end": 4580
          }
        ],
        "start": 4511,
        "end": 4582
      },
      "expression": false,
      "start": 4471,
      "end": 4582
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "guardsOneButNotOthers",
        "optional": false,
        "typeAnnotation": null,
        "start": 4593,
        "end": 4614
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4618,
                  "end": 4624
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4625,
                  "end": 4631
                }
              ],
              "start": 4618,
              "end": 4631
            },
            "start": 4616,
            "end": 4631
          },
          "start": 4615,
          "end": 4631
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4636,
                  "end": 4642
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4643,
                  "end": 4649
                }
              ],
              "start": 4636,
              "end": 4649
            },
            "start": 4634,
            "end": 4649
          },
          "start": 4633,
          "end": 4649
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4654,
                  "end": 4660
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4661,
                  "end": 4667
                }
              ],
              "start": 4654,
              "end": 4667
            },
            "start": 4652,
            "end": 4667
          },
          "start": 4651,
          "end": 4667
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4687,
                  "end": 4688
                },
                "prefix": true,
                "start": 4680,
                "end": 4688
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 4693,
                "end": 4701
              },
              "start": 4680,
              "end": 4701
            },
            "start": 4673,
            "end": 4702
          }
        ],
        "start": 4669,
        "end": 4704
      },
      "expression": false,
      "start": 4584,
      "end": 4704
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dunderguard",
        "optional": false,
        "typeAnnotation": null,
        "start": 4766,
        "end": 4777
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "__x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 4783,
                  "end": 4789
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4792,
                  "end": 4798
                }
              ],
              "start": 4783,
              "end": 4798
            },
            "start": 4781,
            "end": 4798
          },
          "start": 4778,
          "end": 4798
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4818,
                  "end": 4821
                },
                "prefix": true,
                "start": 4811,
                "end": 4821
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 4827,
                "end": 4835
              },
              "start": 4811,
              "end": 4835
            },
            "start": 4804,
            "end": 4836
          }
        ],
        "start": 4800,
        "end": 4838
      },
      "expression": false,
      "start": 4757,
      "end": 4838
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
            "name": "booleanIdentity",
            "optional": false,
            "typeAnnotation": null,
            "start": 4913,
            "end": 4928
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 4935,
                    "end": 4942
                  },
                  "start": 4933,
                  "end": 4942
                },
                "start": 4932,
                "end": 4942
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4947,
              "end": 4948
            },
            "id": null,
            "generator": false,
            "start": 4931,
            "end": 4948
          },
          "definite": false,
          "start": 4913,
          "end": 4948
        }
      ],
      "declare": false,
      "start": 4907,
      "end": 4949
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
            "name": "numOrBoolean",
            "optional": false,
            "typeAnnotation": null,
            "start": 5034,
            "end": 5046
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 5053,
                        "end": 5059
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 5062,
                        "end": 5069
                      }
                    ],
                    "start": 5053,
                    "end": 5069
                  },
                  "start": 5051,
                  "end": 5069
                },
                "start": 5050,
                "end": 5069
              }
            ],
            "returnType": null,
            "body": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5081,
                    "end": 5082
                  },
                  "prefix": true,
                  "start": 5074,
                  "end": 5082
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 5087,
                  "end": 5095
                },
                "start": 5074,
                "end": 5095
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5099,
                "end": 5100
              },
              "start": 5074,
              "end": 5100
            },
            "id": null,
            "generator": false,
            "start": 5049,
            "end": 5100
          },
          "definite": false,
          "start": 5034,
          "end": 5100
        }
      ],
      "declare": false,
      "start": 5028,
      "end": 5101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberInferrer",
        "optional": false,
        "typeAnnotation": null,
        "start": 5143,
        "end": 5157
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 5162,
              "end": 5170
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 5174,
                        "end": 5180
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 5183,
                        "end": 5189
                      }
                    ],
                    "start": 5174,
                    "end": 5189
                  },
                  "start": 5172,
                  "end": 5189
                },
                "start": 5171,
                "end": 5189
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5192,
                  "end": 5193
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 5197,
                    "end": 5203
                  },
                  "start": 5197,
                  "end": 5203
                },
                "start": 5192,
                "end": 5203
              },
              "start": 5190,
              "end": 5203
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 5162,
            "end": 5204
          }
        ],
        "start": 5158,
        "end": 5206
      },
      "declare": false,
      "start": 5133,
      "end": 5206
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Inferrer",
        "optional": false,
        "typeAnnotation": null,
        "start": 5213,
        "end": 5221
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberInferrer",
            "optional": false,
            "typeAnnotation": null,
            "start": 5233,
            "end": 5247
          },
          "typeArguments": null,
          "start": 5233,
          "end": 5247
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 5252,
              "end": 5260
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 5264,
                          "end": 5270
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 5273,
                          "end": 5279
                        }
                      ],
                      "start": 5264,
                      "end": 5279
                    },
                    "start": 5262,
                    "end": 5279
                  },
                  "start": 5261,
                  "end": 5279
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "typeof",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5315,
                          "end": 5316
                        },
                        "prefix": true,
                        "start": 5308,
                        "end": 5316
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "number",
                        "raw": "'number'",
                        "start": 5321,
                        "end": 5329
                      },
                      "start": 5308,
                      "end": 5329
                    },
                    "start": 5301,
                    "end": 5330
                  }
                ],
                "start": 5281,
                "end": 5334
              },
              "expression": false,
              "start": 5260,
              "end": 5334
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5252,
            "end": 5334
          }
        ],
        "start": 5248,
        "end": 5336
      },
      "abstract": false,
      "declare": false,
      "start": 5207,
      "end": 5336
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 5359,
                    "end": 5365
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 5368,
                    "end": 5374
                  }
                ],
                "start": 5359,
                "end": 5374
              },
              "start": 5357,
              "end": 5374
            },
            "start": 5349,
            "end": 5374
          },
          "init": null,
          "definite": false,
          "start": 5349,
          "end": 5374
        }
      ],
      "declare": true,
      "start": 5337,
      "end": 5375
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
            "name": "inf",
            "optional": false,
            "typeAnnotation": null,
            "start": 5382,
            "end": 5385
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inferrer",
              "optional": false,
              "typeAnnotation": null,
              "start": 5392,
              "end": 5400
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5388,
            "end": 5402
          },
          "definite": false,
          "start": 5382,
          "end": 5402
        }
      ],
      "declare": false,
      "start": 5376,
      "end": 5403
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "inf",
            "optional": false,
            "typeAnnotation": null,
            "start": 5408,
            "end": 5411
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 5412,
            "end": 5420
          },
          "optional": false,
          "computed": false,
          "start": 5408,
          "end": 5420
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 5421,
            "end": 5429
          }
        ],
        "optional": false,
        "start": 5408,
        "end": 5430
      },
      "consequent": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5443,
                      "end": 5449
                    },
                    "start": 5441,
                    "end": 5449
                  },
                  "start": 5440,
                  "end": 5449
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrStr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5452,
                  "end": 5460
                },
                "definite": false,
                "start": 5440,
                "end": 5460
              }
            ],
            "declare": false,
            "start": 5436,
            "end": 5461
          }
        ],
        "start": 5432,
        "end": 5477
      },
      "alternate": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5494,
                      "end": 5500
                    },
                    "start": 5492,
                    "end": 5500
                  },
                  "start": 5491,
                  "end": 5500
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrStr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5503,
                  "end": 5511
                },
                "definite": false,
                "start": 5491,
                "end": 5511
              }
            ],
            "declare": false,
            "start": 5487,
            "end": 5512
          }
        ],
        "start": 5483,
        "end": 5528
      },
      "start": 5404,
      "end": 5528
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5582,
        "end": 5584
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
              "name": "isC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5589,
              "end": 5593
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 5609,
                        "end": 5613
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5625,
                        "end": 5627
                      },
                      "start": 5609,
                      "end": 5627
                    },
                    "start": 5602,
                    "end": 5628
                  }
                ],
                "start": 5596,
                "end": 5632
              },
              "expression": false,
              "start": 5593,
              "end": 5632
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5589,
            "end": 5632
          }
        ],
        "start": 5585,
        "end": 5634
      },
      "abstract": false,
      "declare": false,
      "start": 5576,
      "end": 5634
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5641,
        "end": 5643
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5652,
        "end": 5654
      },
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
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 5659,
              "end": 5660
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 5663,
              "end": 5664
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5659,
            "end": 5665
          }
        ],
        "start": 5655,
        "end": 5667
      },
      "abstract": false,
      "declare": false,
      "start": 5635,
      "end": 5667
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5683,
                  "end": 5685
                },
                "typeArguments": null,
                "start": 5683,
                "end": 5685
              },
              "start": 5681,
              "end": 5685
            },
            "start": 5680,
            "end": 5685
          },
          "init": null,
          "definite": false,
          "start": 5680,
          "end": 5685
        }
      ],
      "declare": true,
      "start": 5668,
      "end": 5686
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 5691,
            "end": 5692
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isC2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5693,
            "end": 5697
          },
          "optional": false,
          "computed": false,
          "start": 5691,
          "end": 5697
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 5691,
        "end": 5699
      },
      "consequent": {
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5713,
                        "end": 5715
                      },
                      "typeArguments": null,
                      "start": 5713,
                      "end": 5715
                    },
                    "start": 5711,
                    "end": 5715
                  },
                  "start": 5709,
                  "end": 5715
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5718,
                  "end": 5719
                },
                "definite": false,
                "start": 5709,
                "end": 5719
              }
            ],
            "declare": false,
            "start": 5705,
            "end": 5720
          }
        ],
        "start": 5701,
        "end": 5739
      },
      "alternate": null,
      "start": 5687,
      "end": 5739
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doNotRefineDestructuredParam",
        "optional": false,
        "typeAnnotation": null,
        "start": 5750,
        "end": 5778
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "start": 5780,
                "end": 5781
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5780,
                "end": 5781
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 5780,
              "end": 5781
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
                "start": 5783,
                "end": 5784
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 5783,
                "end": 5784
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 5783,
              "end": 5784
            }
          ],
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5788,
                    "end": 5789
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 5791,
                          "end": 5797
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 5800,
                          "end": 5804
                        }
                      ],
                      "start": 5791,
                      "end": 5804
                    },
                    "start": 5789,
                    "end": 5804
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5788,
                  "end": 5805
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5806,
                    "end": 5807
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5809,
                      "end": 5815
                    },
                    "start": 5807,
                    "end": 5815
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5806,
                  "end": 5815
                }
              ],
              "start": 5787,
              "end": 5816
            },
            "start": 5785,
            "end": 5816
          },
          "start": 5779,
          "end": 5816
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5836,
                  "end": 5837
                },
                "prefix": true,
                "start": 5829,
                "end": 5837
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 5842,
                "end": 5850
              },
              "start": 5829,
              "end": 5850
            },
            "start": 5822,
            "end": 5851
          }
        ],
        "start": 5818,
        "end": 5853
      },
      "expression": false,
      "start": 5741,
      "end": 5853
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isShortString",
        "optional": false,
        "typeAnnotation": null,
        "start": 5947,
        "end": 5960
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5964,
              "end": 5971
            },
            "start": 5962,
            "end": 5971
          },
          "start": 5961,
          "end": 5971
        }
      ],
      "returnType": null,
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
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5991,
                    "end": 5992
                  },
                  "prefix": true,
                  "start": 5984,
                  "end": 5992
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 5997,
                  "end": 6005
                },
                "start": 5984,
                "end": 6005
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6009,
                    "end": 6010
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6011,
                    "end": 6017
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6009,
                  "end": 6017
                },
                "operator": "<",
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 6020,
                  "end": 6022
                },
                "start": 6009,
                "end": 6022
              },
              "start": 5984,
              "end": 6022
            },
            "start": 5977,
            "end": 6023
          }
        ],
        "start": 5973,
        "end": 6025
      },
      "expression": false,
      "start": 5938,
      "end": 6025
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6044,
                "end": 6050
              },
              "start": 6042,
              "end": 6050
            },
            "start": 6039,
            "end": 6050
          },
          "init": null,
          "definite": false,
          "start": 6039,
          "end": 6050
        }
      ],
      "declare": true,
      "start": 6027,
      "end": 6051
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isShortString",
          "optional": false,
          "typeAnnotation": null,
          "start": 6056,
          "end": 6069
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 6070,
            "end": 6073
          }
        ],
        "optional": false,
        "start": 6056,
        "end": 6074
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6080,
                  "end": 6083
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6084,
                  "end": 6090
                },
                "optional": false,
                "computed": false,
                "start": 6080,
                "end": 6090
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 6091,
                  "end": 6092
                }
              ],
              "optional": false,
              "start": 6080,
              "end": 6093
            },
            "directive": null,
            "start": 6080,
            "end": 6094
          }
        ],
        "start": 6076,
        "end": 6110
      },
      "alternate": {
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6120,
                  "end": 6123
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6124,
                  "end": 6130
                },
                "optional": false,
                "computed": false,
                "start": 6120,
                "end": 6130
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 6131,
                  "end": 6132
                }
              ],
              "optional": false,
              "start": 6120,
              "end": 6133
            },
            "directive": null,
            "start": 6120,
            "end": 6134
          }
        ],
        "start": 6116,
        "end": 6150
      },
      "start": 6052,
      "end": 6150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isStringFromUnknown",
        "optional": false,
        "typeAnnotation": null,
        "start": 6161,
        "end": 6180
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 6184,
              "end": 6191
            },
            "start": 6182,
            "end": 6191
          },
          "start": 6181,
          "end": 6191
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6211,
                  "end": 6212
                },
                "prefix": true,
                "start": 6204,
                "end": 6212
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 6217,
                "end": 6225
              },
              "start": 6204,
              "end": 6225
            },
            "start": 6197,
            "end": 6226
          }
        ],
        "start": 6193,
        "end": 6228
      },
      "expression": false,
      "start": 6152,
      "end": 6228
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isStringFromUnknown",
          "optional": false,
          "typeAnnotation": null,
          "start": 6233,
          "end": 6252
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 6253,
            "end": 6256
          }
        ],
        "optional": false,
        "start": 6233,
        "end": 6257
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6263,
                  "end": 6266
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6267,
                  "end": 6273
                },
                "optional": false,
                "computed": false,
                "start": 6263,
                "end": 6273
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 6274,
                  "end": 6275
                }
              ],
              "optional": false,
              "start": 6263,
              "end": 6276
            },
            "directive": null,
            "start": 6263,
            "end": 6277
          }
        ],
        "start": 6259,
        "end": 6293
      },
      "alternate": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 6310,
                      "end": 6315
                    },
                    "start": 6308,
                    "end": 6315
                  },
                  "start": 6307,
                  "end": 6315
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6318,
                  "end": 6321
                },
                "definite": false,
                "start": 6307,
                "end": 6321
              }
            ],
            "declare": false,
            "start": 6303,
            "end": 6322
          }
        ],
        "start": 6299,
        "end": 6338
      },
      "start": 6229,
      "end": 6338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNumOrStr",
        "optional": false,
        "typeAnnotation": null,
        "start": 6371,
        "end": 6381
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 6385,
              "end": 6392
            },
            "start": 6383,
            "end": 6392
          },
          "start": 6382,
          "end": 6392
        }
      ],
      "returnType": null,
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
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6413,
                    "end": 6414
                  },
                  "prefix": true,
                  "start": 6406,
                  "end": 6414
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 6419,
                  "end": 6427
                },
                "start": 6406,
                "end": 6427
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6438,
                    "end": 6439
                  },
                  "prefix": true,
                  "start": 6431,
                  "end": 6439
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 6444,
                  "end": 6452
                },
                "start": 6431,
                "end": 6452
              },
              "start": 6406,
              "end": 6452
            },
            "start": 6398,
            "end": 6454
          }
        ],
        "start": 6394,
        "end": 6456
      },
      "expression": false,
      "start": 6362,
      "end": 6456
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "unk",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 6474,
                "end": 6481
              },
              "start": 6472,
              "end": 6481
            },
            "start": 6469,
            "end": 6481
          },
          "init": null,
          "definite": false,
          "start": 6469,
          "end": 6481
        }
      ],
      "declare": true,
      "start": 6457,
      "end": 6482
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNumOrStr",
          "optional": false,
          "typeAnnotation": null,
          "start": 6487,
          "end": 6497
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "unk",
            "optional": false,
            "typeAnnotation": null,
            "start": 6498,
            "end": 6501
          }
        ],
        "optional": false,
        "start": 6487,
        "end": 6502
      },
      "consequent": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 6515,
                          "end": 6521
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 6524,
                          "end": 6530
                        }
                      ],
                      "start": 6515,
                      "end": 6530
                    },
                    "start": 6513,
                    "end": 6530
                  },
                  "start": 6512,
                  "end": 6530
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6533,
                  "end": 6536
                },
                "definite": false,
                "start": 6512,
                "end": 6536
              }
            ],
            "declare": false,
            "start": 6508,
            "end": 6537
          }
        ],
        "start": 6504,
        "end": 6553
      },
      "alternate": null,
      "start": 6483,
      "end": 6553
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertAndPredicate",
        "optional": false,
        "typeAnnotation": null,
        "start": 6621,
        "end": 6639
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 6643,
                  "end": 6649
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 6652,
                  "end": 6658
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6661,
                    "end": 6665
                  },
                  "typeArguments": null,
                  "start": 6661,
                  "end": 6665
                }
              ],
              "start": 6643,
              "end": 6665
            },
            "start": 6641,
            "end": 6665
          },
          "start": 6640,
          "end": 6665
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 6675,
                "end": 6676
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 6688,
                "end": 6692
              },
              "start": 6675,
              "end": 6692
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6710,
                      "end": 6715
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 6706,
                    "end": 6717
                  },
                  "start": 6700,
                  "end": 6718
                }
              ],
              "start": 6694,
              "end": 6722
            },
            "alternate": null,
            "start": 6671,
            "end": 6722
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6739,
                  "end": 6740
                },
                "prefix": true,
                "start": 6732,
                "end": 6740
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 6745,
                "end": 6753
              },
              "start": 6732,
              "end": 6753
            },
            "start": 6725,
            "end": 6754
          }
        ],
        "start": 6667,
        "end": 6756
      },
      "expression": false,
      "start": 6612,
      "end": 6756
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "snd",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 6775,
                    "end": 6781
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 6784,
                    "end": 6790
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6793,
                      "end": 6797
                    },
                    "typeArguments": null,
                    "start": 6793,
                    "end": 6797
                  }
                ],
                "start": 6775,
                "end": 6797
              },
              "start": 6773,
              "end": 6797
            },
            "start": 6770,
            "end": 6797
          },
          "init": null,
          "definite": false,
          "start": 6770,
          "end": 6797
        }
      ],
      "declare": true,
      "start": 6758,
      "end": 6798
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertAndPredicate",
          "optional": false,
          "typeAnnotation": null,
          "start": 6803,
          "end": 6821
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "snd",
            "optional": false,
            "typeAnnotation": null,
            "start": 6822,
            "end": 6825
          }
        ],
        "optional": false,
        "start": 6803,
        "end": 6826
      },
      "consequent": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 6839,
                      "end": 6845
                    },
                    "start": 6837,
                    "end": 6845
                  },
                  "start": 6836,
                  "end": 6845
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "snd",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6848,
                  "end": 6851
                },
                "definite": false,
                "start": 6836,
                "end": 6851
              }
            ],
            "declare": false,
            "start": 6832,
            "end": 6852
          }
        ],
        "start": 6828,
        "end": 6870
      },
      "alternate": null,
      "start": 6799,
      "end": 6870
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNumberWithThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 6881,
        "end": 6897
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 6904,
                "end": 6908
              },
              "typeArguments": null,
              "start": 6904,
              "end": 6908
            },
            "start": 6902,
            "end": 6908
          },
          "start": 6898,
          "end": 6908
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 6913,
                  "end": 6919
                },
                {
                  "type": "TSStringKeyword",
                  "start": 6922,
                  "end": 6928
                }
              ],
              "start": 6913,
              "end": 6928
            },
            "start": 6911,
            "end": 6928
          },
          "start": 6910,
          "end": 6928
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6948,
                  "end": 6949
                },
                "prefix": true,
                "start": 6941,
                "end": 6949
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 6954,
                "end": 6962
              },
              "start": 6941,
              "end": 6962
            },
            "start": 6934,
            "end": 6963
          }
        ],
        "start": 6930,
        "end": 6965
      },
      "expression": false,
      "start": 6872,
      "end": 6965
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "narrowFromAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 6976,
        "end": 6989
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 6993,
              "end": 6996
            },
            "start": 6991,
            "end": 6996
          },
          "start": 6990,
          "end": 6996
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7016,
                  "end": 7017
                },
                "prefix": true,
                "start": 7009,
                "end": 7017
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 7022,
                "end": 7030
              },
              "start": 7009,
              "end": 7030
            },
            "start": 7002,
            "end": 7031
          }
        ],
        "start": 6998,
        "end": 7033
      },
      "expression": false,
      "start": 6967,
      "end": 7033
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
            "name": "noInferenceFromRest",
            "optional": false,
            "typeAnnotation": null,
            "start": 7041,
            "end": 7060
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7067,
                  "end": 7068
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 7071,
                              "end": 7074
                            },
                            "start": 7071,
                            "end": 7074
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "b",
                              "raw": "\"b\"",
                              "start": 7077,
                              "end": 7080
                            },
                            "start": 7077,
                            "end": 7080
                          }
                        ],
                        "start": 7071,
                        "end": 7080
                      }
                    ],
                    "start": 7070,
                    "end": 7081
                  },
                  "start": 7068,
                  "end": 7081
                },
                "value": null,
                "start": 7064,
                "end": 7081
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7086,
                  "end": 7087
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 7088,
                  "end": 7089
                },
                "optional": false,
                "computed": true,
                "start": 7086,
                "end": 7090
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 7095,
                "end": 7098
              },
              "start": 7086,
              "end": 7098
            },
            "id": null,
            "generator": false,
            "start": 7063,
            "end": 7098
          },
          "definite": false,
          "start": 7041,
          "end": 7098
        }
      ],
      "declare": false,
      "start": 7035,
      "end": 7099
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
            "name": "noInferenceFromImpossibleRest",
            "optional": false,
            "typeAnnotation": null,
            "start": 7106,
            "end": 7135
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7142,
                  "end": 7143
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 7145,
                    "end": 7147
                  },
                  "start": 7143,
                  "end": 7147
                },
                "value": null,
                "start": 7139,
                "end": 7147
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7159,
                  "end": 7160
                },
                "prefix": true,
                "start": 7152,
                "end": 7160
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 7165,
                "end": 7176
              },
              "start": 7152,
              "end": 7176
            },
            "id": null,
            "generator": false,
            "start": 7138,
            "end": 7176
          },
          "definite": false,
          "start": 7106,
          "end": 7176
        }
      ],
      "declare": false,
      "start": 7100,
      "end": 7177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferWithRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 7188,
        "end": 7201
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 7205,
                  "end": 7211
                },
                {
                  "type": "TSNullKeyword",
                  "start": 7214,
                  "end": 7218
                }
              ],
              "start": 7205,
              "end": 7218
            },
            "start": 7203,
            "end": 7218
          },
          "start": 7202,
          "end": 7218
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 7223,
            "end": 7224
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 7227,
                    "end": 7230
                  },
                  "start": 7227,
                  "end": 7230
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 7232,
                    "end": 7235
                  },
                  "start": 7232,
                  "end": 7235
                }
              ],
              "start": 7226,
              "end": 7236
            },
            "start": 7224,
            "end": 7236
          },
          "value": null,
          "start": 7220,
          "end": 7236
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7256,
                  "end": 7257
                },
                "prefix": true,
                "start": 7249,
                "end": 7257
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 7262,
                "end": 7270
              },
              "start": 7249,
              "end": 7270
            },
            "start": 7242,
            "end": 7271
          }
        ],
        "start": 7238,
        "end": 7273
      },
      "expression": false,
      "start": 7179,
      "end": 7273
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
            "name": "foobar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7359,
                          "end": 7363
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "\"foo\"",
                              "start": 7365,
                              "end": 7370
                            },
                            "start": 7365,
                            "end": 7370
                          },
                          "start": 7363,
                          "end": 7370
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 7359,
                        "end": 7371
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7372,
                          "end": 7375
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 7377,
                            "end": 7383
                          },
                          "start": 7375,
                          "end": 7383
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 7372,
                        "end": 7383
                      }
                    ],
                    "start": 7357,
                    "end": 7385
                  },
                  {
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7392,
                          "end": 7396
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "bar",
                              "raw": "\"bar\"",
                              "start": 7398,
                              "end": 7403
                            },
                            "start": 7398,
                            "end": 7403
                          },
                          "start": 7396,
                          "end": 7403
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 7392,
                        "end": 7404
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7405,
                          "end": 7408
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 7410,
                            "end": 7416
                          },
                          "start": 7408,
                          "end": 7416
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 7405,
                        "end": 7416
                      }
                    ],
                    "start": 7390,
                    "end": 7418
                  }
                ],
                "start": 7355,
                "end": 7418
              },
              "start": 7351,
              "end": 7418
            },
            "start": 7345,
            "end": 7418
          },
          "init": null,
          "definite": false,
          "start": 7345,
          "end": 7418
        }
      ],
      "declare": true,
      "start": 7331,
      "end": 7419
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
            "name": "foobarPred",
            "optional": false,
            "typeAnnotation": null,
            "start": 7427,
            "end": 7437
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foobar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7452,
                      "end": 7458
                    },
                    "typeArguments": null,
                    "start": 7445,
                    "end": 7458
                  },
                  "start": 7443,
                  "end": 7458
                },
                "start": 7441,
                "end": 7458
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7463,
                  "end": 7465
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7466,
                  "end": 7470
                },
                "optional": false,
                "computed": false,
                "start": 7463,
                "end": 7470
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 7475,
                "end": 7480
              },
              "start": 7463,
              "end": 7480
            },
            "id": null,
            "generator": false,
            "start": 7440,
            "end": 7480
          },
          "definite": false,
          "start": 7427,
          "end": 7480
        }
      ],
      "declare": false,
      "start": 7421,
      "end": 7481
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foobarPred",
          "optional": false,
          "typeAnnotation": null,
          "start": 7486,
          "end": 7496
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foobar",
            "optional": false,
            "typeAnnotation": null,
            "start": 7497,
            "end": 7503
          }
        ],
        "optional": false,
        "start": 7486,
        "end": 7504
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foobar",
                "optional": false,
                "typeAnnotation": null,
                "start": 7510,
                "end": 7516
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 7517,
                "end": 7520
              },
              "optional": false,
              "computed": false,
              "start": 7510,
              "end": 7520
            },
            "directive": null,
            "start": 7510,
            "end": 7521
          }
        ],
        "start": 7506,
        "end": 7523
      },
      "alternate": null,
      "start": 7482,
      "end": 7523
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
            "name": "arrTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7596,
                  "end": 7601
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7602,
                      "end": 7608
                    }
                  ],
                  "start": 7601,
                  "end": 7609
                },
                "start": 7596,
                "end": 7609
              },
              "start": 7594,
              "end": 7609
            },
            "start": 7587,
            "end": 7609
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 7613,
                    "end": 7614
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 7616,
                    "end": 7617
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 7619,
                    "end": 7623
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 7625,
                    "end": 7626
                  }
                ],
                "start": 7612,
                "end": 7627
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 7628,
                "end": 7634
              },
              "optional": false,
              "computed": false,
              "start": 7612,
              "end": 7634
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7639,
                    "end": 7640
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7646,
                      "end": 7647
                    },
                    "operator": "!=",
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 7651,
                      "end": 7655
                    },
                    "start": 7646,
                    "end": 7655
                  },
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 7667,
                    "end": 7674
                  },
                  "start": 7645,
                  "end": 7674
                },
                "id": null,
                "generator": false,
                "start": 7638,
                "end": 7674
              }
            ],
            "optional": false,
            "start": 7612,
            "end": 7677
          },
          "definite": false,
          "start": 7587,
          "end": 7677
        }
      ],
      "declare": false,
      "start": 7581,
      "end": 7678
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmptyString",
        "optional": false,
        "typeAnnotation": null,
        "start": 7689,
        "end": 7702
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 7706,
              "end": 7713
            },
            "start": 7704,
            "end": 7713
          },
          "start": 7703,
          "end": 7713
        }
      ],
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
                  "name": "rv",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7725,
                  "end": 7727
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7730,
                    "end": 7731
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 7736,
                    "end": 7738
                  },
                  "start": 7730,
                  "end": 7738
                },
                "definite": false,
                "start": 7725,
                "end": 7738
              }
            ],
            "declare": false,
            "start": 7719,
            "end": 7739
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "rv",
                "optional": false,
                "typeAnnotation": null,
                "start": 7749,
                "end": 7751
              },
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 7762,
                "end": 7769
              },
              "start": 7749,
              "end": 7769
            },
            "start": 7742,
            "end": 7770
          }
        ],
        "start": 7715,
        "end": 7772
      },
      "expression": false,
      "start": 7680,
      "end": 7772
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 7835,
        "end": 7841
      },
      "typeParameters": null,
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
              "name": "breath",
              "optional": false,
              "typeAnnotation": null,
              "start": 7848,
              "end": 7854
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 7856,
                  "end": 7860
                },
                "start": 7856,
                "end": 7860
              },
              "start": 7854,
              "end": 7860
            },
            "accessibility": null,
            "static": false,
            "start": 7848,
            "end": 7861
          }
        ],
        "start": 7844,
        "end": 7863
      },
      "declare": false,
      "start": 7830,
      "end": 7864
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rock",
        "optional": false,
        "typeAnnotation": null,
        "start": 7871,
        "end": 7875
      },
      "typeParameters": null,
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
              "name": "breath",
              "optional": false,
              "typeAnnotation": null,
              "start": 7882,
              "end": 7888
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 7890,
                  "end": 7895
                },
                "start": 7890,
                "end": 7895
              },
              "start": 7888,
              "end": 7895
            },
            "accessibility": null,
            "static": false,
            "start": 7882,
            "end": 7896
          }
        ],
        "start": 7878,
        "end": 7898
      },
      "declare": false,
      "start": 7866,
      "end": 7899
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Something",
        "optional": false,
        "typeAnnotation": null,
        "start": 7906,
        "end": 7915
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Animal",
              "optional": false,
              "typeAnnotation": null,
              "start": 7918,
              "end": 7924
            },
            "typeArguments": null,
            "start": 7918,
            "end": 7924
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Rock",
              "optional": false,
              "typeAnnotation": null,
              "start": 7927,
              "end": 7931
            },
            "typeArguments": null,
            "start": 7927,
            "end": 7931
          }
        ],
        "start": 7918,
        "end": 7931
      },
      "declare": false,
      "start": 7901,
      "end": 7932
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isAnimal",
        "optional": false,
        "typeAnnotation": null,
        "start": 7943,
        "end": 7951
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "something",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null,
                "start": 7963,
                "end": 7972
              },
              "typeArguments": null,
              "start": 7963,
              "end": 7972
            },
            "start": 7961,
            "end": 7972
          },
          "start": 7952,
          "end": 7972
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null,
            "start": 7975,
            "end": 7984
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 7988,
                "end": 7994
              },
              "typeArguments": null,
              "start": 7988,
              "end": 7994
            },
            "start": 7988,
            "end": 7994
          },
          "start": 7975,
          "end": 7994
        },
        "start": 7973,
        "end": 7994
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null,
                "start": 8006,
                "end": 8015
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "breath",
                "optional": false,
                "typeAnnotation": null,
                "start": 8016,
                "end": 8022
              },
              "optional": false,
              "computed": false,
              "start": 8006,
              "end": 8022
            },
            "start": 7999,
            "end": 8022
          }
        ],
        "start": 7995,
        "end": 8024
      },
      "expression": false,
      "start": 7934,
      "end": 8024
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "positive",
        "optional": false,
        "typeAnnotation": null,
        "start": 8035,
        "end": 8043
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null,
                "start": 8047,
                "end": 8056
              },
              "typeArguments": null,
              "start": 8047,
              "end": 8056
            },
            "start": 8045,
            "end": 8056
          },
          "start": 8044,
          "end": 8056
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isAnimal",
                "optional": false,
                "typeAnnotation": null,
                "start": 8069,
                "end": 8077
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8078,
                  "end": 8079
                }
              ],
              "optional": false,
              "start": 8069,
              "end": 8080
            },
            "start": 8062,
            "end": 8080
          }
        ],
        "start": 8058,
        "end": 8082
      },
      "expression": false,
      "start": 8026,
      "end": 8082
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "negative",
        "optional": false,
        "typeAnnotation": null,
        "start": 8093,
        "end": 8101
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null,
                "start": 8105,
                "end": 8114
              },
              "typeArguments": null,
              "start": 8105,
              "end": 8114
            },
            "start": 8103,
            "end": 8114
          },
          "start": 8102,
          "end": 8114
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isAnimal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8129,
                  "end": 8137
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8138,
                    "end": 8139
                  }
                ],
                "optional": false,
                "start": 8129,
                "end": 8140
              },
              "prefix": true,
              "start": 8128,
              "end": 8140
            },
            "start": 8121,
            "end": 8140
          }
        ],
        "start": 8116,
        "end": 8142
      },
      "expression": false,
      "start": 8084,
      "end": 8142
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 8142
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "numsOrNull",
    "start": 63,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Null",
    "value": "null",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "filteredNumsTruthy",
    "start": 102,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "numsOrNull",
    "start": 133,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 179,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "filteredNumsNonNullish",
    "start": 185,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "numsOrNull",
    "start": 220,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 240,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 245,
    "end": 248
  },
  {
    "type": "Null",
    "value": "null",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 271,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "evenSquaresInline",
    "start": 277,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 328,
    "end": 329
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 333,
    "end": 334
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 350,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 356,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 361,
    "end": 362
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 365,
    "end": 368
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Null",
    "value": "null",
    "start": 381,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 456,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "isTruthy",
    "start": 462,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "number",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 484,
    "end": 485
  },
  {
    "type": "Null",
    "value": "null",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 492,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 501,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "evenSquares",
    "start": 507,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 520,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 552,
    "end": 553
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 554,
    "end": 555
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 557,
    "end": 558
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 560,
    "end": 561
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 576,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 581,
    "end": 582
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 585,
    "end": 588
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600
  },
  {
    "type": "Null",
    "value": "null",
    "start": 601,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 614,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "isTruthy",
    "start": 621,
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
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 633,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "evenSquaresNonNull",
    "start": 639,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 659,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 688,
    "end": 689
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 693,
    "end": 694
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 696,
    "end": 697
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 706,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 712,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 717,
    "end": 718
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 721,
    "end": 724
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Null",
    "value": "null",
    "start": 737,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 748,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 757,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 762,
    "end": 765
  },
  {
    "type": "Null",
    "value": "null",
    "start": 766,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 774,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "isNonNull",
    "start": 783,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 796,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 803,
    "end": 804
  },
  {
    "type": "Null",
    "value": "null",
    "start": 805,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 815,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 824,
    "end": 827
  },
  {
    "type": "Null",
    "value": "null",
    "start": 828,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 902,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "isNonNullVar",
    "start": 911,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 927,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 934,
    "end": 935
  },
  {
    "type": "Null",
    "value": "null",
    "start": 936,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 946,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 952,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 959,
    "end": 962
  },
  {
    "type": "Null",
    "value": "null",
    "start": 963,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 967,
    "end": 968
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 971,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 978,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 985,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "isNonNullGeneric",
    "start": 994,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1024,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1037,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1088,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "myGuard",
    "start": 1094,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1108,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1117,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1131,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1134,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1141,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1149,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "mySecondGuard",
    "start": 1155,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1175,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1184,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1195,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "myGuard",
    "start": 1198,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1409,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "MyObj",
    "start": 1414,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1424,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1431,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1441,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "MyArray",
    "start": 1446,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 1458,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "MyObj",
    "start": 1465,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1478,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "myArray",
    "start": 1484,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "MyArray",
    "start": 1493,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1508,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1514,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "myArray",
    "start": 1523,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1534,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1539,
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
    "value": "=>",
    "start": 1544,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1547,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 1551,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1560,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1568,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1573,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1576,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1580,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1583,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1587,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1598,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1603,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1608,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1611,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1636,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1644,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1649,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1652,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1656,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1659,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1663,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1674,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1678,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1682,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 1685,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 1690,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1696,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1700,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1730,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 1736,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "myArray",
    "start": 1746,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1757,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1762,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1767,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 1774,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1783,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1791,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1796,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1801,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1809,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1816,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1820,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1823,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1827,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1838,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1843,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1848,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1851,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1874,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1882,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1887,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1890,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1997,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2004,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2008,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2013,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2017,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2028,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2032,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2036,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 2039,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 2044,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2050,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2054,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2147,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2152,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2162,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2167,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2177,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 2182,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2188,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2198,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2203,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2214,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2220,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2227,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 2233,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2246,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "resultBars",
    "start": 2252,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 2264,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2272,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 2277,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2285,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2292,
    "end": 2294
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 2295,
    "end": 2300
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2301,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2304,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2327,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "isBarNonNull",
    "start": 2336,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2352,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 2358,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2364,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2374,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 2382,
    "end": 2387
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2388,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2398,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "fooOrBar",
    "start": 2404,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2415,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2424,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "isBarNonNull",
    "start": 2428,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "fooOrBar",
    "start": 2441,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2456,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 2465,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "fooOrBar",
    "start": 2471,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2614,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2628,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 2638,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 2645,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2654,
    "end": 2656
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2657,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2666,
    "end": 2669
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2670,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2683,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2688,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2757,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "backwardsGuard",
    "start": 2766,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2784,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2791,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2802,
    "end": 2804
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2805,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2816,
    "end": 2822
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2823,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2832,
    "end": 2835
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 2836,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2895,
    "end": 2903
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 2904,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2916,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2925,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2937,
    "end": 2943
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2944,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2953,
    "end": 2956
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 2957,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2970,
    "end": 2977
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2978,
    "end": 2981
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2982,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2992,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3001,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3009,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 3013,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3022,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3037,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3044,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3053,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3079,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3088,
    "end": 3091
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3095,
    "end": 3101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3104,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3131,
    "end": 3139
  },
  {
    "type": "Identifier",
    "value": "flakyIsString",
    "start": 3140,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3157,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3166,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3178,
    "end": 3184
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3185,
    "end": 3191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3194,
    "end": 3197
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 3198,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3207,
    "end": 3209
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 3210,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 3215,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 3226,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3233,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Identifier",
    "value": "flakyIsString",
    "start": 3237,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3251,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3266,
    "end": 3269
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3273,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3282,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3311,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3320,
    "end": 3323
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3327,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3336,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3366,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "isDate",
    "start": 3375,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3385,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3397,
    "end": 3403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3406,
    "end": 3416
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3417,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3425,
    "end": 3433
  },
  {
    "type": "Identifier",
    "value": "flakyIsDate",
    "start": 3434,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3449,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3461,
    "end": 3467
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3470,
    "end": 3480
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3481,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3486,
    "end": 3488
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 3489,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 3494,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 3505,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3513,
    "end": 3520
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3521,
    "end": 3524
  },
  {
    "type": "Identifier",
    "value": "maybeDate",
    "start": 3525,
    "end": 3534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3536,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3544,
    "end": 3546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Identifier",
    "value": "isDate",
    "start": 3548,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Identifier",
    "value": "maybeDate",
    "start": 3555,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3571,
    "end": 3574
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3575,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3578,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Identifier",
    "value": "maybeDate",
    "start": 3585,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3612,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3621,
    "end": 3624
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3626,
    "end": 3627
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3628,
    "end": 3634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3635,
    "end": 3636
  },
  {
    "type": "Identifier",
    "value": "maybeDate",
    "start": 3637,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3665,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Identifier",
    "value": "flakyIsDate",
    "start": 3669,
    "end": 3680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3680,
    "end": 3681
  },
  {
    "type": "Identifier",
    "value": "maybeDate",
    "start": 3681,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3697,
    "end": 3700
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3702,
    "end": 3703
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3704,
    "end": 3708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Identifier",
    "value": "maybeDate",
    "start": 3711,
    "end": 3720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3720,
    "end": 3721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3741,
    "end": 3745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3746,
    "end": 3747
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3750,
    "end": 3753
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3757,
    "end": 3763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Identifier",
    "value": "maybeDate",
    "start": 3766,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3923,
    "end": 3931
  },
  {
    "type": "Identifier",
    "value": "irrelevantIsNumber",
    "start": 3932,
    "end": 3950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3954,
    "end": 3960
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3961,
    "end": 3962
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3963,
    "end": 3969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3969,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3974,
    "end": 3975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3976,
    "end": 3977
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 3978,
    "end": 3982
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 3983,
    "end": 3989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 3994,
    "end": 3997
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3998,
    "end": 3999
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 4000,
    "end": 4008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4009,
    "end": 4010
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 4011,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4018,
    "end": 4024
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4025,
    "end": 4031
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4034,
    "end": 4037
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 4038,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4050,
    "end": 4058
  },
  {
    "type": "Identifier",
    "value": "irrelevantIsNumberDestructuring",
    "start": 4059,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4092,
    "end": 4093
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4094,
    "end": 4100
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4101,
    "end": 4102
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4103,
    "end": 4109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4111,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4116,
    "end": 4117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 4121,
    "end": 4125
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 4126,
    "end": 4132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4132,
    "end": 4133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 4137,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 4143,
    "end": 4151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 4154,
    "end": 4157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4157,
    "end": 4158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4158,
    "end": 4159
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4162,
    "end": 4168
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4169,
    "end": 4175
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4176,
    "end": 4177
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4178,
    "end": 4181
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 4182,
    "end": 4190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4190,
    "end": 4191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4192,
    "end": 4193
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4268,
    "end": 4276
  },
  {
    "type": "Identifier",
    "value": "areBothNums",
    "start": 4277,
    "end": 4288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4288,
    "end": 4289
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4289,
    "end": 4290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4290,
    "end": 4291
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4292,
    "end": 4298
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4298,
    "end": 4299
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4299,
    "end": 4305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4305,
    "end": 4306
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4307,
    "end": 4308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4308,
    "end": 4309
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4310,
    "end": 4316
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4316,
    "end": 4317
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4317,
    "end": 4323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4323,
    "end": 4324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4325,
    "end": 4326
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4329,
    "end": 4335
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4336,
    "end": 4342
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4345,
    "end": 4348
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 4349,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4358,
    "end": 4360
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4361,
    "end": 4367
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4370,
    "end": 4373
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 4374,
    "end": 4382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4382,
    "end": 4383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4384,
    "end": 4385
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4471,
    "end": 4479
  },
  {
    "type": "Identifier",
    "value": "doubleReturn",
    "start": 4480,
    "end": 4492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4492,
    "end": 4493
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4493,
    "end": 4494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4494,
    "end": 4495
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4496,
    "end": 4502
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4502,
    "end": 4503
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4503,
    "end": 4509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4509,
    "end": 4510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4511,
    "end": 4512
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4515,
    "end": 4517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4518,
    "end": 4519
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4519,
    "end": 4525
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4526,
    "end": 4527
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4528,
    "end": 4531
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 4532,
    "end": 4540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4540,
    "end": 4541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4542,
    "end": 4543
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4548,
    "end": 4554
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4555,
    "end": 4559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4559,
    "end": 4560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4563,
    "end": 4564
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4567,
    "end": 4573
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 4574,
    "end": 4579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4579,
    "end": 4580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4581,
    "end": 4582
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4584,
    "end": 4592
  },
  {
    "type": "Identifier",
    "value": "guardsOneButNotOthers",
    "start": 4593,
    "end": 4614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4615,
    "end": 4616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4616,
    "end": 4617
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4618,
    "end": 4624
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4624,
    "end": 4625
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4625,
    "end": 4631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4631,
    "end": 4632
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4633,
    "end": 4634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4634,
    "end": 4635
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4636,
    "end": 4642
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4642,
    "end": 4643
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4643,
    "end": 4649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4649,
    "end": 4650
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4651,
    "end": 4652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4652,
    "end": 4653
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4654,
    "end": 4660
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4660,
    "end": 4661
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4661,
    "end": 4667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4669,
    "end": 4670
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4673,
    "end": 4679
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4680,
    "end": 4686
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4687,
    "end": 4688
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4689,
    "end": 4692
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 4693,
    "end": 4701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4701,
    "end": 4702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4703,
    "end": 4704
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4757,
    "end": 4765
  },
  {
    "type": "Identifier",
    "value": "dunderguard",
    "start": 4766,
    "end": 4777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4777,
    "end": 4778
  },
  {
    "type": "Identifier",
    "value": "__x",
    "start": 4778,
    "end": 4781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4781,
    "end": 4782
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4783,
    "end": 4789
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4790,
    "end": 4791
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4792,
    "end": 4798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4798,
    "end": 4799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4800,
    "end": 4801
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4804,
    "end": 4810
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4811,
    "end": 4817
  },
  {
    "type": "Identifier",
    "value": "__x",
    "start": 4818,
    "end": 4821
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4823,
    "end": 4826
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 4827,
    "end": 4835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4835,
    "end": 4836
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4837,
    "end": 4838
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4907,
    "end": 4912
  },
  {
    "type": "Identifier",
    "value": "booleanIdentity",
    "start": 4913,
    "end": 4928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4929,
    "end": 4930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4931,
    "end": 4932
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4932,
    "end": 4933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4933,
    "end": 4934
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4935,
    "end": 4942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4944,
    "end": 4946
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4947,
    "end": 4948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4948,
    "end": 4949
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5028,
    "end": 5033
  },
  {
    "type": "Identifier",
    "value": "numOrBoolean",
    "start": 5034,
    "end": 5046
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5047,
    "end": 5048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5049,
    "end": 5050
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5050,
    "end": 5051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5051,
    "end": 5052
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5053,
    "end": 5059
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5060,
    "end": 5061
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5062,
    "end": 5069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5069,
    "end": 5070
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5071,
    "end": 5073
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5074,
    "end": 5080
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5081,
    "end": 5082
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5083,
    "end": 5086
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 5087,
    "end": 5095
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 5096,
    "end": 5098
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5099,
    "end": 5100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5100,
    "end": 5101
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5133,
    "end": 5142
  },
  {
    "type": "Identifier",
    "value": "NumberInferrer",
    "start": 5143,
    "end": 5157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5158,
    "end": 5159
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 5162,
    "end": 5170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5170,
    "end": 5171
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5171,
    "end": 5172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5172,
    "end": 5173
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5174,
    "end": 5180
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5183,
    "end": 5189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5189,
    "end": 5190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5190,
    "end": 5191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5192,
    "end": 5193
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 5194,
    "end": 5196
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5197,
    "end": 5203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5203,
    "end": 5204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5205,
    "end": 5206
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5207,
    "end": 5212
  },
  {
    "type": "Identifier",
    "value": "Inferrer",
    "start": 5213,
    "end": 5221
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 5222,
    "end": 5232
  },
  {
    "type": "Identifier",
    "value": "NumberInferrer",
    "start": 5233,
    "end": 5247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5248,
    "end": 5249
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 5252,
    "end": 5260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5260,
    "end": 5261
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5261,
    "end": 5262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5262,
    "end": 5263
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5264,
    "end": 5270
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5271,
    "end": 5272
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5273,
    "end": 5279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5279,
    "end": 5280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5281,
    "end": 5282
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5301,
    "end": 5307
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5308,
    "end": 5314
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5315,
    "end": 5316
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5317,
    "end": 5320
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 5321,
    "end": 5329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5329,
    "end": 5330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5333,
    "end": 5334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5335,
    "end": 5336
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5337,
    "end": 5344
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5345,
    "end": 5348
  },
  {
    "type": "Identifier",
    "value": "numOrStr",
    "start": 5349,
    "end": 5357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5357,
    "end": 5358
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5359,
    "end": 5365
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5366,
    "end": 5367
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5368,
    "end": 5374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5374,
    "end": 5375
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5376,
    "end": 5381
  },
  {
    "type": "Identifier",
    "value": "inf",
    "start": 5382,
    "end": 5385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5386,
    "end": 5387
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5388,
    "end": 5391
  },
  {
    "type": "Identifier",
    "value": "Inferrer",
    "start": 5392,
    "end": 5400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5400,
    "end": 5401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5401,
    "end": 5402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5402,
    "end": 5403
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5404,
    "end": 5406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5407,
    "end": 5408
  },
  {
    "type": "Identifier",
    "value": "inf",
    "start": 5408,
    "end": 5411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5411,
    "end": 5412
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 5412,
    "end": 5420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5420,
    "end": 5421
  },
  {
    "type": "Identifier",
    "value": "numOrStr",
    "start": 5421,
    "end": 5429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5429,
    "end": 5430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5430,
    "end": 5431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5432,
    "end": 5433
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5436,
    "end": 5439
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 5440,
    "end": 5441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5441,
    "end": 5442
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5443,
    "end": 5449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5450,
    "end": 5451
  },
  {
    "type": "Identifier",
    "value": "numOrStr",
    "start": 5452,
    "end": 5460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5460,
    "end": 5461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5476,
    "end": 5477
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5478,
    "end": 5482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5483,
    "end": 5484
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5487,
    "end": 5490
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 5491,
    "end": 5492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5492,
    "end": 5493
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5494,
    "end": 5500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5501,
    "end": 5502
  },
  {
    "type": "Identifier",
    "value": "numOrStr",
    "start": 5503,
    "end": 5511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5511,
    "end": 5512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5527,
    "end": 5528
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5576,
    "end": 5581
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 5582,
    "end": 5584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5585,
    "end": 5586
  },
  {
    "type": "Identifier",
    "value": "isC2",
    "start": 5589,
    "end": 5593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5593,
    "end": 5594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5594,
    "end": 5595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5596,
    "end": 5597
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5602,
    "end": 5608
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5609,
    "end": 5613
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 5614,
    "end": 5624
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 5625,
    "end": 5627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5627,
    "end": 5628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5631,
    "end": 5632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5633,
    "end": 5634
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5635,
    "end": 5640
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 5641,
    "end": 5643
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5644,
    "end": 5651
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 5652,
    "end": 5654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5655,
    "end": 5656
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 5659,
    "end": 5660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5661,
    "end": 5662
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5663,
    "end": 5664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5664,
    "end": 5665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5666,
    "end": 5667
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5668,
    "end": 5675
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5676,
    "end": 5679
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5680,
    "end": 5681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5681,
    "end": 5682
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 5683,
    "end": 5685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5685,
    "end": 5686
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5687,
    "end": 5689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5690,
    "end": 5691
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5691,
    "end": 5692
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5692,
    "end": 5693
  },
  {
    "type": "Identifier",
    "value": "isC2",
    "start": 5693,
    "end": 5697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5697,
    "end": 5698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5698,
    "end": 5699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5699,
    "end": 5700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5701,
    "end": 5702
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5705,
    "end": 5708
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 5709,
    "end": 5711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5711,
    "end": 5712
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 5713,
    "end": 5715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5716,
    "end": 5717
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5718,
    "end": 5719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5719,
    "end": 5720
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5738,
    "end": 5739
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5741,
    "end": 5749
  },
  {
    "type": "Identifier",
    "value": "doNotRefineDestructuredParam",
    "start": 5750,
    "end": 5778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5778,
    "end": 5779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5779,
    "end": 5780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5780,
    "end": 5781
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5781,
    "end": 5782
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5783,
    "end": 5784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5784,
    "end": 5785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5785,
    "end": 5786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5787,
    "end": 5788
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5788,
    "end": 5789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5789,
    "end": 5790
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5791,
    "end": 5797
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5798,
    "end": 5799
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5800,
    "end": 5804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5804,
    "end": 5805
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5806,
    "end": 5807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5807,
    "end": 5808
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5809,
    "end": 5815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5815,
    "end": 5816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5816,
    "end": 5817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5818,
    "end": 5819
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5822,
    "end": 5828
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5829,
    "end": 5835
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5836,
    "end": 5837
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5838,
    "end": 5841
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 5842,
    "end": 5850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5850,
    "end": 5851
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5852,
    "end": 5853
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5938,
    "end": 5946
  },
  {
    "type": "Identifier",
    "value": "isShortString",
    "start": 5947,
    "end": 5960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5960,
    "end": 5961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5961,
    "end": 5962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5962,
    "end": 5963
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5964,
    "end": 5971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5971,
    "end": 5972
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5973,
    "end": 5974
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5977,
    "end": 5983
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5984,
    "end": 5990
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5991,
    "end": 5992
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5993,
    "end": 5996
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 5997,
    "end": 6005
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 6006,
    "end": 6008
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6009,
    "end": 6010
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6010,
    "end": 6011
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 6011,
    "end": 6017
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6018,
    "end": 6019
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 6020,
    "end": 6022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6022,
    "end": 6023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6024,
    "end": 6025
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6027,
    "end": 6034
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6035,
    "end": 6038
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 6039,
    "end": 6042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6042,
    "end": 6043
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6044,
    "end": 6050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6050,
    "end": 6051
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6052,
    "end": 6054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6055,
    "end": 6056
  },
  {
    "type": "Identifier",
    "value": "isShortString",
    "start": 6056,
    "end": 6069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6069,
    "end": 6070
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 6070,
    "end": 6073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6073,
    "end": 6074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6074,
    "end": 6075
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6076,
    "end": 6077
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 6080,
    "end": 6083
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6083,
    "end": 6084
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 6084,
    "end": 6090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6090,
    "end": 6091
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6091,
    "end": 6092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6092,
    "end": 6093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6093,
    "end": 6094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6109,
    "end": 6110
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 6111,
    "end": 6115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6116,
    "end": 6117
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 6120,
    "end": 6123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6123,
    "end": 6124
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 6124,
    "end": 6130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6130,
    "end": 6131
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6131,
    "end": 6132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6132,
    "end": 6133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6133,
    "end": 6134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6149,
    "end": 6150
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6152,
    "end": 6160
  },
  {
    "type": "Identifier",
    "value": "isStringFromUnknown",
    "start": 6161,
    "end": 6180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6180,
    "end": 6181
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6181,
    "end": 6182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6182,
    "end": 6183
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 6184,
    "end": 6191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6191,
    "end": 6192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6193,
    "end": 6194
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6197,
    "end": 6203
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6204,
    "end": 6210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6211,
    "end": 6212
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6213,
    "end": 6216
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 6217,
    "end": 6225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6225,
    "end": 6226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6227,
    "end": 6228
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6229,
    "end": 6231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6232,
    "end": 6233
  },
  {
    "type": "Identifier",
    "value": "isStringFromUnknown",
    "start": 6233,
    "end": 6252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6252,
    "end": 6253
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 6253,
    "end": 6256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6256,
    "end": 6257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6257,
    "end": 6258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6259,
    "end": 6260
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 6263,
    "end": 6266
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6266,
    "end": 6267
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 6267,
    "end": 6273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6273,
    "end": 6274
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6274,
    "end": 6275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6275,
    "end": 6276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6276,
    "end": 6277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6292,
    "end": 6293
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 6294,
    "end": 6298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6299,
    "end": 6300
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6303,
    "end": 6306
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 6307,
    "end": 6308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6308,
    "end": 6309
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6310,
    "end": 6315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6316,
    "end": 6317
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 6318,
    "end": 6321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6321,
    "end": 6322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6337,
    "end": 6338
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6362,
    "end": 6370
  },
  {
    "type": "Identifier",
    "value": "isNumOrStr",
    "start": 6371,
    "end": 6381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6381,
    "end": 6382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6382,
    "end": 6383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6383,
    "end": 6384
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 6385,
    "end": 6392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6392,
    "end": 6393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6394,
    "end": 6395
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6398,
    "end": 6404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6405,
    "end": 6406
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6406,
    "end": 6412
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6413,
    "end": 6414
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6415,
    "end": 6418
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 6419,
    "end": 6427
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 6428,
    "end": 6430
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6431,
    "end": 6437
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6438,
    "end": 6439
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6440,
    "end": 6443
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 6444,
    "end": 6452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6452,
    "end": 6453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6453,
    "end": 6454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6455,
    "end": 6456
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6457,
    "end": 6464
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6465,
    "end": 6468
  },
  {
    "type": "Identifier",
    "value": "unk",
    "start": 6469,
    "end": 6472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6472,
    "end": 6473
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 6474,
    "end": 6481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6481,
    "end": 6482
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6483,
    "end": 6485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6486,
    "end": 6487
  },
  {
    "type": "Identifier",
    "value": "isNumOrStr",
    "start": 6487,
    "end": 6497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6497,
    "end": 6498
  },
  {
    "type": "Identifier",
    "value": "unk",
    "start": 6498,
    "end": 6501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6501,
    "end": 6502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6502,
    "end": 6503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6504,
    "end": 6505
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6508,
    "end": 6511
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 6512,
    "end": 6513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6513,
    "end": 6514
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6515,
    "end": 6521
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6522,
    "end": 6523
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6524,
    "end": 6530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6531,
    "end": 6532
  },
  {
    "type": "Identifier",
    "value": "unk",
    "start": 6533,
    "end": 6536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6536,
    "end": 6537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6552,
    "end": 6553
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6612,
    "end": 6620
  },
  {
    "type": "Identifier",
    "value": "assertAndPredicate",
    "start": 6621,
    "end": 6639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6639,
    "end": 6640
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6640,
    "end": 6641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6641,
    "end": 6642
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6643,
    "end": 6649
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6650,
    "end": 6651
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6652,
    "end": 6658
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6659,
    "end": 6660
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 6661,
    "end": 6665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6665,
    "end": 6666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6667,
    "end": 6668
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6671,
    "end": 6673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6674,
    "end": 6675
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6675,
    "end": 6676
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 6677,
    "end": 6687
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 6688,
    "end": 6692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6692,
    "end": 6693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6694,
    "end": 6695
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 6700,
    "end": 6705
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6706,
    "end": 6709
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 6710,
    "end": 6715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6715,
    "end": 6716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6716,
    "end": 6717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6717,
    "end": 6718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6721,
    "end": 6722
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6725,
    "end": 6731
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6732,
    "end": 6738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6739,
    "end": 6740
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6741,
    "end": 6744
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 6745,
    "end": 6753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6753,
    "end": 6754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6755,
    "end": 6756
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6758,
    "end": 6765
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6766,
    "end": 6769
  },
  {
    "type": "Identifier",
    "value": "snd",
    "start": 6770,
    "end": 6773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6773,
    "end": 6774
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6775,
    "end": 6781
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6782,
    "end": 6783
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6784,
    "end": 6790
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6791,
    "end": 6792
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 6793,
    "end": 6797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6797,
    "end": 6798
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6799,
    "end": 6801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6802,
    "end": 6803
  },
  {
    "type": "Identifier",
    "value": "assertAndPredicate",
    "start": 6803,
    "end": 6821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6821,
    "end": 6822
  },
  {
    "type": "Identifier",
    "value": "snd",
    "start": 6822,
    "end": 6825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6825,
    "end": 6826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6826,
    "end": 6827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6828,
    "end": 6829
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6832,
    "end": 6835
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 6836,
    "end": 6837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6837,
    "end": 6838
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6839,
    "end": 6845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6846,
    "end": 6847
  },
  {
    "type": "Identifier",
    "value": "snd",
    "start": 6848,
    "end": 6851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6851,
    "end": 6852
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6869,
    "end": 6870
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6872,
    "end": 6880
  },
  {
    "type": "Identifier",
    "value": "isNumberWithThis",
    "start": 6881,
    "end": 6897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6897,
    "end": 6898
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 6898,
    "end": 6902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6902,
    "end": 6903
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 6904,
    "end": 6908
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6908,
    "end": 6909
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6910,
    "end": 6911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6911,
    "end": 6912
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6913,
    "end": 6919
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6920,
    "end": 6921
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6922,
    "end": 6928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6928,
    "end": 6929
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6930,
    "end": 6931
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6934,
    "end": 6940
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6941,
    "end": 6947
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6948,
    "end": 6949
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6950,
    "end": 6953
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 6954,
    "end": 6962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6962,
    "end": 6963
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6964,
    "end": 6965
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6967,
    "end": 6975
  },
  {
    "type": "Identifier",
    "value": "narrowFromAny",
    "start": 6976,
    "end": 6989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6989,
    "end": 6990
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6990,
    "end": 6991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6991,
    "end": 6992
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6993,
    "end": 6996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6996,
    "end": 6997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6998,
    "end": 6999
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7002,
    "end": 7008
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7009,
    "end": 7015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7016,
    "end": 7017
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 7018,
    "end": 7021
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 7022,
    "end": 7030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7030,
    "end": 7031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7032,
    "end": 7033
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7035,
    "end": 7040
  },
  {
    "type": "Identifier",
    "value": "noInferenceFromRest",
    "start": 7041,
    "end": 7060
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7061,
    "end": 7062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7063,
    "end": 7064
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 7064,
    "end": 7067
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 7067,
    "end": 7068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7068,
    "end": 7069
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7070,
    "end": 7071
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 7071,
    "end": 7074
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7075,
    "end": 7076
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 7077,
    "end": 7080
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7080,
    "end": 7081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7081,
    "end": 7082
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7083,
    "end": 7085
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 7086,
    "end": 7087
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7087,
    "end": 7088
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7088,
    "end": 7089
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7089,
    "end": 7090
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 7091,
    "end": 7094
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 7095,
    "end": 7098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7098,
    "end": 7099
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7100,
    "end": 7105
  },
  {
    "type": "Identifier",
    "value": "noInferenceFromImpossibleRest",
    "start": 7106,
    "end": 7135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7136,
    "end": 7137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7138,
    "end": 7139
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 7139,
    "end": 7142
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 7142,
    "end": 7143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7143,
    "end": 7144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7145,
    "end": 7146
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7146,
    "end": 7147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7147,
    "end": 7148
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7149,
    "end": 7151
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7152,
    "end": 7158
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 7159,
    "end": 7160
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 7161,
    "end": 7164
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 7165,
    "end": 7176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7176,
    "end": 7177
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7179,
    "end": 7187
  },
  {
    "type": "Identifier",
    "value": "inferWithRest",
    "start": 7188,
    "end": 7201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7201,
    "end": 7202
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7202,
    "end": 7203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7203,
    "end": 7204
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7205,
    "end": 7211
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7212,
    "end": 7213
  },
  {
    "type": "Null",
    "value": "null",
    "start": 7214,
    "end": 7218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7218,
    "end": 7219
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 7220,
    "end": 7223
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 7223,
    "end": 7224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7224,
    "end": 7225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7226,
    "end": 7227
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 7227,
    "end": 7230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7230,
    "end": 7231
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 7232,
    "end": 7235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7235,
    "end": 7236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7236,
    "end": 7237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7238,
    "end": 7239
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7242,
    "end": 7248
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7249,
    "end": 7255
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7256,
    "end": 7257
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 7258,
    "end": 7261
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 7262,
    "end": 7270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7270,
    "end": 7271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7272,
    "end": 7273
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7331,
    "end": 7338
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7339,
    "end": 7344
  },
  {
    "type": "Identifier",
    "value": "foobar",
    "start": 7345,
    "end": 7351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7351,
    "end": 7352
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7355,
    "end": 7356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7357,
    "end": 7358
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7359,
    "end": 7363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7363,
    "end": 7364
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 7365,
    "end": 7370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7370,
    "end": 7371
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7372,
    "end": 7375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7375,
    "end": 7376
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7377,
    "end": 7383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7384,
    "end": 7385
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7388,
    "end": 7389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7390,
    "end": 7391
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7392,
    "end": 7396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7396,
    "end": 7397
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 7398,
    "end": 7403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7403,
    "end": 7404
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 7405,
    "end": 7408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7408,
    "end": 7409
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7410,
    "end": 7416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7417,
    "end": 7418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7418,
    "end": 7419
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7421,
    "end": 7426
  },
  {
    "type": "Identifier",
    "value": "foobarPred",
    "start": 7427,
    "end": 7437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7438,
    "end": 7439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7440,
    "end": 7441
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7441,
    "end": 7443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7443,
    "end": 7444
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7445,
    "end": 7451
  },
  {
    "type": "Identifier",
    "value": "foobar",
    "start": 7452,
    "end": 7458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7458,
    "end": 7459
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7460,
    "end": 7462
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7463,
    "end": 7465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7465,
    "end": 7466
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7466,
    "end": 7470
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 7471,
    "end": 7474
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 7475,
    "end": 7480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7480,
    "end": 7481
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7482,
    "end": 7484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7485,
    "end": 7486
  },
  {
    "type": "Identifier",
    "value": "foobarPred",
    "start": 7486,
    "end": 7496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7496,
    "end": 7497
  },
  {
    "type": "Identifier",
    "value": "foobar",
    "start": 7497,
    "end": 7503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7503,
    "end": 7504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7504,
    "end": 7505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7506,
    "end": 7507
  },
  {
    "type": "Identifier",
    "value": "foobar",
    "start": 7510,
    "end": 7516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7516,
    "end": 7517
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7517,
    "end": 7520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7520,
    "end": 7521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7522,
    "end": 7523
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7581,
    "end": 7586
  },
  {
    "type": "Identifier",
    "value": "arrTest",
    "start": 7587,
    "end": 7594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7594,
    "end": 7595
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 7596,
    "end": 7601
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7601,
    "end": 7602
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7602,
    "end": 7608
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7608,
    "end": 7609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7610,
    "end": 7611
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7612,
    "end": 7613
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7613,
    "end": 7614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7614,
    "end": 7615
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 7616,
    "end": 7617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7617,
    "end": 7618
  },
  {
    "type": "Null",
    "value": "null",
    "start": 7619,
    "end": 7623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7623,
    "end": 7624
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 7625,
    "end": 7626
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7626,
    "end": 7627
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7627,
    "end": 7628
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 7628,
    "end": 7634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7634,
    "end": 7635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7638,
    "end": 7639
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7639,
    "end": 7640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7640,
    "end": 7641
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7642,
    "end": 7644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7645,
    "end": 7646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7646,
    "end": 7647
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 7648,
    "end": 7650
  },
  {
    "type": "Null",
    "value": "null",
    "start": 7651,
    "end": 7655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7655,
    "end": 7656
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 7657,
    "end": 7666
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 7667,
    "end": 7674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7674,
    "end": 7675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7676,
    "end": 7677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7677,
    "end": 7678
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7680,
    "end": 7688
  },
  {
    "type": "Identifier",
    "value": "isEmptyString",
    "start": 7689,
    "end": 7702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7702,
    "end": 7703
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7703,
    "end": 7704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7704,
    "end": 7705
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 7706,
    "end": 7713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7713,
    "end": 7714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7715,
    "end": 7716
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7719,
    "end": 7724
  },
  {
    "type": "Identifier",
    "value": "rv",
    "start": 7725,
    "end": 7727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7728,
    "end": 7729
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7730,
    "end": 7731
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 7732,
    "end": 7735
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 7736,
    "end": 7738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7738,
    "end": 7739
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7742,
    "end": 7748
  },
  {
    "type": "Identifier",
    "value": "rv",
    "start": 7749,
    "end": 7751
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 7752,
    "end": 7761
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 7762,
    "end": 7769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7769,
    "end": 7770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7771,
    "end": 7772
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7830,
    "end": 7834
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 7835,
    "end": 7841
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7842,
    "end": 7843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7844,
    "end": 7845
  },
  {
    "type": "Identifier",
    "value": "breath",
    "start": 7848,
    "end": 7854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7854,
    "end": 7855
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7856,
    "end": 7860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7860,
    "end": 7861
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7862,
    "end": 7863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7863,
    "end": 7864
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7866,
    "end": 7870
  },
  {
    "type": "Identifier",
    "value": "Rock",
    "start": 7871,
    "end": 7875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7876,
    "end": 7877
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7878,
    "end": 7879
  },
  {
    "type": "Identifier",
    "value": "breath",
    "start": 7882,
    "end": 7888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7888,
    "end": 7889
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 7890,
    "end": 7895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7895,
    "end": 7896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7897,
    "end": 7898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7898,
    "end": 7899
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7901,
    "end": 7905
  },
  {
    "type": "Identifier",
    "value": "Something",
    "start": 7906,
    "end": 7915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7916,
    "end": 7917
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 7918,
    "end": 7924
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7925,
    "end": 7926
  },
  {
    "type": "Identifier",
    "value": "Rock",
    "start": 7927,
    "end": 7931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7931,
    "end": 7932
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7934,
    "end": 7942
  },
  {
    "type": "Identifier",
    "value": "isAnimal",
    "start": 7943,
    "end": 7951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7951,
    "end": 7952
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 7952,
    "end": 7961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7961,
    "end": 7962
  },
  {
    "type": "Identifier",
    "value": "Something",
    "start": 7963,
    "end": 7972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7972,
    "end": 7973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7973,
    "end": 7974
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 7975,
    "end": 7984
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 7985,
    "end": 7987
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 7988,
    "end": 7994
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7995,
    "end": 7996
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7999,
    "end": 8005
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 8006,
    "end": 8015
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8015,
    "end": 8016
  },
  {
    "type": "Identifier",
    "value": "breath",
    "start": 8016,
    "end": 8022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8023,
    "end": 8024
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8026,
    "end": 8034
  },
  {
    "type": "Identifier",
    "value": "positive",
    "start": 8035,
    "end": 8043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8043,
    "end": 8044
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 8044,
    "end": 8045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8045,
    "end": 8046
  },
  {
    "type": "Identifier",
    "value": "Something",
    "start": 8047,
    "end": 8056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8056,
    "end": 8057
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8058,
    "end": 8059
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8062,
    "end": 8068
  },
  {
    "type": "Identifier",
    "value": "isAnimal",
    "start": 8069,
    "end": 8077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8077,
    "end": 8078
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 8078,
    "end": 8079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8079,
    "end": 8080
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8081,
    "end": 8082
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8084,
    "end": 8092
  },
  {
    "type": "Identifier",
    "value": "negative",
    "start": 8093,
    "end": 8101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8101,
    "end": 8102
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 8102,
    "end": 8103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8103,
    "end": 8104
  },
  {
    "type": "Identifier",
    "value": "Something",
    "start": 8105,
    "end": 8114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8114,
    "end": 8115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8116,
    "end": 8117
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8121,
    "end": 8127
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 8128,
    "end": 8129
  },
  {
    "type": "Identifier",
    "value": "isAnimal",
    "start": 8129,
    "end": 8137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8137,
    "end": 8138
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 8138,
    "end": 8139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8139,
    "end": 8140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8141,
    "end": 8142
  }
]
```
