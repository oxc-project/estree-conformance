__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapOnLooseArrayLiteral",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 33
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
                      "start": 37,
                      "end": 38
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 40,
                      "end": 41
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 43,
                      "end": 44
                    },
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 46,
                      "end": 47
                    }
                  ],
                  "start": 36,
                  "end": 48
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 52
                },
                "optional": false,
                "computed": false,
                "start": 36,
                "end": 52
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 54
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 59
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 62,
                      "end": 63
                    },
                    "start": 58,
                    "end": 63
                  },
                  "id": null,
                  "generator": false,
                  "start": 53,
                  "end": 63
                }
              ],
              "optional": false,
              "start": 36,
              "end": 64
            },
            "definite": false,
            "start": 11,
            "end": 64
          }
        ],
        "declare": false,
        "start": 7,
        "end": 65
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 65
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
            "name": "numTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 95,
                    "end": 101
                  }
                ],
                "start": 94,
                "end": 102
              },
              "start": 92,
              "end": 102
            },
            "start": 84,
            "end": 102
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 106,
                "end": 107
              }
            ],
            "start": 105,
            "end": 108
          },
          "definite": false,
          "start": 84,
          "end": 108
        }
      ],
      "declare": false,
      "start": 80,
      "end": 109
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numTuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 133
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 137
                },
                "optional": false,
                "computed": false,
                "start": 125,
                "end": 137
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
                      "start": 138,
                      "end": 139
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
                      "start": 143,
                      "end": 144
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 148
                    },
                    "start": 143,
                    "end": 148
                  },
                  "id": null,
                  "generator": false,
                  "start": 138,
                  "end": 148
                }
              ],
              "optional": false,
              "start": 125,
              "end": 149
            },
            "definite": false,
            "start": 121,
            "end": 149
          }
        ],
        "declare": false,
        "start": 117,
        "end": 150
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 110,
      "end": 150
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
            "name": "numNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 178,
                    "end": 184
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 186,
                    "end": 192
                  }
                ],
                "start": 177,
                "end": 193
              },
              "start": 175,
              "end": 193
            },
            "start": 169,
            "end": 193
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 201,
                "end": 204
              },
              {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 210,
                "end": 213
              }
            ],
            "start": 196,
            "end": 214
          },
          "definite": false,
          "start": 169,
          "end": 214
        }
      ],
      "declare": false,
      "start": 165,
      "end": 215
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
            "name": "strStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 229,
                    "end": 235
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 237,
                    "end": 243
                  }
                ],
                "start": 228,
                "end": 244
              },
              "start": 226,
              "end": 244
            },
            "start": 220,
            "end": 244
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 248,
                "end": 255
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 257,
                "end": 264
              }
            ],
            "start": 247,
            "end": 265
          },
          "definite": false,
          "start": 220,
          "end": 265
        }
      ],
      "declare": false,
      "start": 216,
      "end": 266
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
            "name": "numStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 280,
                    "end": 286
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 288,
                    "end": 294
                  }
                ],
                "start": 279,
                "end": 295
              },
              "start": 277,
              "end": 295
            },
            "start": 271,
            "end": 295
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 303,
                "end": 306
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 308,
                "end": 315
              }
            ],
            "start": 298,
            "end": 316
          },
          "definite": false,
          "start": 271,
          "end": 316
        }
      ],
      "declare": false,
      "start": 267,
      "end": 317
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 331
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 340
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 344
                },
                "optional": false,
                "computed": false,
                "start": 334,
                "end": 344
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 346
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 351
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 355
                    },
                    "start": 350,
                    "end": 355
                  },
                  "id": null,
                  "generator": false,
                  "start": 345,
                  "end": 355
                }
              ],
              "optional": false,
              "start": 334,
              "end": 356
            },
            "definite": false,
            "start": 330,
            "end": 356
          }
        ],
        "declare": false,
        "start": 326,
        "end": 357
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 319,
      "end": 357
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 369,
              "end": 370
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strStr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 379
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 383
                },
                "optional": false,
                "computed": false,
                "start": 373,
                "end": 383
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 384,
                      "end": 385
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 390
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "charCodeAt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 391,
                        "end": 401
                      },
                      "optional": false,
                      "computed": false,
                      "start": 389,
                      "end": 401
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 402,
                        "end": 403
                      }
                    ],
                    "optional": false,
                    "start": 389,
                    "end": 404
                  },
                  "id": null,
                  "generator": false,
                  "start": 384,
                  "end": 404
                }
              ],
              "optional": false,
              "start": 373,
              "end": 405
            },
            "definite": false,
            "start": 369,
            "end": 405
          }
        ],
        "declare": false,
        "start": 365,
        "end": 406
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 358,
      "end": 406
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 419
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numStr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 428
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 432
                },
                "optional": false,
                "computed": false,
                "start": 422,
                "end": 432
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
                      "start": 433,
                      "end": 434
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 439
                  },
                  "id": null,
                  "generator": false,
                  "start": 433,
                  "end": 439
                }
              ],
              "optional": false,
              "start": 422,
              "end": 440
            },
            "definite": false,
            "start": 418,
            "end": 440
          }
        ],
        "declare": false,
        "start": 414,
        "end": 441
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 407,
      "end": 441
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
            "name": "numNumNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 472,
                    "end": 478
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 480,
                    "end": 486
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 488,
                    "end": 494
                  }
                ],
                "start": 471,
                "end": 495
              },
              "start": 469,
              "end": 495
            },
            "start": 460,
            "end": 495
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 499,
                "end": 500
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 502,
                "end": 503
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 505,
                "end": 506
              }
            ],
            "start": 498,
            "end": 507
          },
          "definite": false,
          "start": 460,
          "end": 507
        }
      ],
      "declare": false,
      "start": 456,
      "end": 508
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 522
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numNumNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 534
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 538
                },
                "optional": false,
                "computed": false,
                "start": 525,
                "end": 538
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 539,
                      "end": 540
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 544,
                      "end": 545
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 548,
                      "end": 549
                    },
                    "start": 544,
                    "end": 549
                  },
                  "id": null,
                  "generator": false,
                  "start": 539,
                  "end": 549
                }
              ],
              "optional": false,
              "start": 525,
              "end": 550
            },
            "definite": false,
            "start": 521,
            "end": 550
          }
        ],
        "declare": false,
        "start": 517,
        "end": 551
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 510,
      "end": 551
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
            "name": "numNumNumNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 585,
                    "end": 591
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 593,
                    "end": 599
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 601,
                    "end": 607
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 609,
                    "end": 615
                  }
                ],
                "start": 584,
                "end": 616
              },
              "start": 582,
              "end": 616
            },
            "start": 570,
            "end": 616
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 620,
                "end": 621
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 623,
                "end": 624
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 626,
                "end": 627
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 629,
                "end": 630
              }
            ],
            "start": 619,
            "end": 631
          },
          "definite": false,
          "start": 570,
          "end": 631
        }
      ],
      "declare": false,
      "start": 566,
      "end": 632
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 646
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numNumNumNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 661
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 662,
                  "end": 665
                },
                "optional": false,
                "computed": false,
                "start": 649,
                "end": 665
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 666,
                      "end": 667
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 671,
                      "end": 672
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 675,
                      "end": 676
                    },
                    "start": 671,
                    "end": 676
                  },
                  "id": null,
                  "generator": false,
                  "start": 666,
                  "end": 676
                }
              ],
              "optional": false,
              "start": 649,
              "end": 677
            },
            "definite": false,
            "start": 645,
            "end": 677
          }
        ],
        "declare": false,
        "start": 641,
        "end": 678
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 634,
      "end": 678
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
            "name": "numNumNumNumNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 715,
                    "end": 721
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 723,
                    "end": 729
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 731,
                    "end": 737
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 739,
                    "end": 745
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 747,
                    "end": 753
                  }
                ],
                "start": 714,
                "end": 754
              },
              "start": 712,
              "end": 754
            },
            "start": 697,
            "end": 754
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 758,
                "end": 759
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 761,
                "end": 762
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 764,
                "end": 765
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 767,
                "end": 768
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 770,
                "end": 771
              }
            ],
            "start": 757,
            "end": 772
          },
          "definite": false,
          "start": 697,
          "end": 772
        }
      ],
      "declare": false,
      "start": 693,
      "end": 773
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 787
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numNumNumNumNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 790,
                  "end": 805
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 806,
                  "end": 809
                },
                "optional": false,
                "computed": false,
                "start": 790,
                "end": 809
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 810,
                      "end": 811
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 815,
                      "end": 816
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 819,
                      "end": 820
                    },
                    "start": 815,
                    "end": 820
                  },
                  "id": null,
                  "generator": false,
                  "start": 810,
                  "end": 820
                }
              ],
              "optional": false,
              "start": 790,
              "end": 821
            },
            "definite": false,
            "start": 786,
            "end": 821
          }
        ],
        "declare": false,
        "start": 782,
        "end": 822
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 775,
      "end": 822
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
            "name": "numNumNumNumNumNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 863,
                    "end": 869
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 871,
                    "end": 877
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 879,
                    "end": 885
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 887,
                    "end": 893
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 895,
                    "end": 901
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 903,
                    "end": 909
                  }
                ],
                "start": 862,
                "end": 910
              },
              "start": 860,
              "end": 910
            },
            "start": 842,
            "end": 910
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 914,
                "end": 915
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 917,
                "end": 918
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 920,
                "end": 921
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 923,
                "end": 924
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 926,
                "end": 927
              },
              {
                "type": "Literal",
                "value": 6,
                "raw": "6",
                "start": 929,
                "end": 930
              }
            ],
            "start": 913,
            "end": 931
          },
          "definite": false,
          "start": 842,
          "end": 931
        }
      ],
      "declare": false,
      "start": 838,
      "end": 932
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 945,
              "end": 946
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numNumNumNumNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 949,
                  "end": 964
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 965,
                  "end": 968
                },
                "optional": false,
                "computed": false,
                "start": 949,
                "end": 968
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 969,
                      "end": 970
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 974,
                      "end": 975
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 978,
                      "end": 979
                    },
                    "start": 974,
                    "end": 979
                  },
                  "id": null,
                  "generator": false,
                  "start": 969,
                  "end": 979
                }
              ],
              "optional": false,
              "start": 949,
              "end": 980
            },
            "definite": false,
            "start": 945,
            "end": 980
          }
        ],
        "declare": false,
        "start": 941,
        "end": 981
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 934,
      "end": 981
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 981
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
    "type": "Keyword",
    "value": "let",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "mapOnLooseArrayLiteral",
    "start": 11,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 44,
    "end": 45
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 55,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 80,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "numTuple",
    "start": 84,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 110,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "numTuple",
    "start": 125,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 140,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "numNum",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 196,
    "end": 197
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 216,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "strStr",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 247,
    "end": 248
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 248,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 257,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 267,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "numStr",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 288,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 298,
    "end": 299
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 306,
    "end": 307
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 308,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 319,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 326,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "numNum",
    "start": 334,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 341,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 347,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 358,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 365,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "strStr",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 386,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "charCodeAt",
    "start": 391,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "export",
    "start": 407,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 414,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "numStr",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 429,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 435,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 456,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "numNumNum",
    "start": 460,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 472,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 480,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 498,
    "end": 499
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 500,
    "end": 501
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 503,
    "end": 504
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 510,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 517,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "numNumNum",
    "start": 525,
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
    "value": "map",
    "start": 535,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 541,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 566,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "numNumNumNum",
    "start": 570,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 593,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 601,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 609,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 619,
    "end": 620
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 621,
    "end": 622
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 624,
    "end": 625
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 627,
    "end": 628
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "export",
    "start": 634,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 641,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "numNumNumNum",
    "start": 649,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 662,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 668,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 693,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "numNumNumNumNum",
    "start": 697,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 715,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 723,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 731,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 739,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 747,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 757,
    "end": 758
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 759,
    "end": 760
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 762,
    "end": 763
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 765,
    "end": 766
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 768,
    "end": 769
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 775,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 782,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "numNumNumNumNum",
    "start": 790,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 806,
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
    "value": "n",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 812,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": ";",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 838,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "numNumNumNumNumNum",
    "start": 842,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 863,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 871,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 879,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 887,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 895,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 903,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 913,
    "end": 914
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 915,
    "end": 916
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 918,
    "end": 919
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 921,
    "end": 922
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 924,
    "end": 925
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 927,
    "end": 928
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 934,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 941,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "numNumNumNumNum",
    "start": 949,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 965,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 971,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 980,
    "end": 981
  }
]
```
