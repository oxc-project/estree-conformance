__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 23
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
                    "start": 25,
                    "end": 26
                  },
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 28,
                    "end": 29
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 31,
                    "end": 32
                  }
                ],
                "start": 24,
                "end": 33
              }
            ],
            "start": 16,
            "end": 34
          },
          "definite": false,
          "start": 4,
          "end": 34
        }
      ],
      "declare": false,
      "start": 0,
      "end": 35
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
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 50
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 60
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
                    "start": 62,
                    "end": 65
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 67,
                    "end": 70
                  }
                ],
                "start": 61,
                "end": 71
              }
            ],
            "start": 53,
            "end": 72
          },
          "definite": false,
          "start": 41,
          "end": 72
        }
      ],
      "declare": false,
      "start": 37,
      "end": 73
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
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 88
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 98
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 101,
                        "end": 102
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 104,
                        "end": 106
                      }
                    ],
                    "start": 100,
                    "end": 107
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 110,
                        "end": 111
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 113,
                        "end": 115
                      }
                    ],
                    "start": 109,
                    "end": 116
                  }
                ],
                "start": 99,
                "end": 117
              }
            ],
            "start": 91,
            "end": 118
          },
          "definite": false,
          "start": 79,
          "end": 118
        }
      ],
      "declare": false,
      "start": 75,
      "end": 119
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
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 138
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "size",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 149
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 151,
                  "end": 152
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 145,
                "end": 152
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "keys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 161
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
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
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 172,
                            "end": 173
                          },
                          "start": 166,
                          "end": 173
                        },
                        "directive": null,
                        "start": 166,
                        "end": 173
                      }
                    ],
                    "start": 164,
                    "end": 175
                  },
                  "expression": false,
                  "start": 161,
                  "end": 175
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 156,
                "end": 175
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "has",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 182
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
                      "typeAnnotation": null,
                      "start": 183,
                      "end": 184
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
                            "start": 195,
                            "end": 196
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 201,
                            "end": 202
                          },
                          "start": 195,
                          "end": 202
                        },
                        "start": 188,
                        "end": 202
                      }
                    ],
                    "start": 186,
                    "end": 204
                  },
                  "expression": false,
                  "start": 182,
                  "end": 204
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 179,
                "end": 204
              }
            ],
            "start": 141,
            "end": 207
          },
          "definite": false,
          "start": 125,
          "end": 207
        }
      ],
      "declare": false,
      "start": 121,
      "end": 208
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 225
          },
          "optional": false,
          "computed": false,
          "start": 210,
          "end": 225
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 226,
            "end": 228
          }
        ],
        "optional": false,
        "start": 210,
        "end": 229
      },
      "directive": null,
      "start": 210,
      "end": 230
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 240
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 246
          },
          "optional": false,
          "computed": false,
          "start": 231,
          "end": 246
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 254
            },
            "typeArguments": null,
            "arguments": [],
            "start": 247,
            "end": 254
          }
        ],
        "optional": false,
        "start": 231,
        "end": 255
      },
      "directive": null,
      "start": 231,
      "end": 256
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 266
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 272
          },
          "optional": false,
          "computed": false,
          "start": 257,
          "end": 272
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 282
          }
        ],
        "optional": false,
        "start": 257,
        "end": 283
      },
      "directive": null,
      "start": 257,
      "end": 284
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 294
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 300
          },
          "optional": false,
          "computed": false,
          "start": 285,
          "end": 300
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 310
          }
        ],
        "optional": false,
        "start": 285,
        "end": 311
      },
      "directive": null,
      "start": 285,
      "end": 312
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 322
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 328
          },
          "optional": false,
          "computed": false,
          "start": 313,
          "end": 328
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 342
          }
        ],
        "optional": false,
        "start": 313,
        "end": 343
      },
      "directive": null,
      "start": 313,
      "end": 344
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 346,
            "end": 355
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 368
          },
          "optional": false,
          "computed": false,
          "start": 346,
          "end": 368
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 369,
            "end": 371
          }
        ],
        "optional": false,
        "start": 346,
        "end": 372
      },
      "directive": null,
      "start": 346,
      "end": 373
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 374,
            "end": 383
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 396
          },
          "optional": false,
          "computed": false,
          "start": 374,
          "end": 396
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 404
            },
            "typeArguments": null,
            "arguments": [],
            "start": 397,
            "end": 404
          }
        ],
        "optional": false,
        "start": 374,
        "end": 405
      },
      "directive": null,
      "start": 374,
      "end": 406
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 416
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 429
          },
          "optional": false,
          "computed": false,
          "start": 407,
          "end": 429
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 439
          }
        ],
        "optional": false,
        "start": 407,
        "end": 440
      },
      "directive": null,
      "start": 407,
      "end": 441
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 451
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 464
          },
          "optional": false,
          "computed": false,
          "start": 442,
          "end": 464
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 474
          }
        ],
        "optional": false,
        "start": 442,
        "end": 475
      },
      "directive": null,
      "start": 442,
      "end": 476
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 486
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 499
          },
          "optional": false,
          "computed": false,
          "start": 477,
          "end": 499
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 513
          }
        ],
        "optional": false,
        "start": 477,
        "end": 514
      },
      "directive": null,
      "start": 477,
      "end": 515
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 517,
            "end": 526
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 537
          },
          "optional": false,
          "computed": false,
          "start": 517,
          "end": 537
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 538,
            "end": 540
          }
        ],
        "optional": false,
        "start": 517,
        "end": 541
      },
      "directive": null,
      "start": 517,
      "end": 542
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 552
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 563
          },
          "optional": false,
          "computed": false,
          "start": 543,
          "end": 563
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 571
            },
            "typeArguments": null,
            "arguments": [],
            "start": 564,
            "end": 571
          }
        ],
        "optional": false,
        "start": 543,
        "end": 572
      },
      "directive": null,
      "start": 543,
      "end": 573
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 574,
            "end": 583
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null,
            "start": 584,
            "end": 594
          },
          "optional": false,
          "computed": false,
          "start": 574,
          "end": 594
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 604
          }
        ],
        "optional": false,
        "start": 574,
        "end": 605
      },
      "directive": null,
      "start": 574,
      "end": 606
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 616
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 627
          },
          "optional": false,
          "computed": false,
          "start": 607,
          "end": 627
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 628,
            "end": 637
          }
        ],
        "optional": false,
        "start": 607,
        "end": 638
      },
      "directive": null,
      "start": 607,
      "end": 639
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 640,
            "end": 649
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 660
          },
          "optional": false,
          "computed": false,
          "start": 640,
          "end": 660
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 661,
            "end": 674
          }
        ],
        "optional": false,
        "start": 640,
        "end": 675
      },
      "directive": null,
      "start": 640,
      "end": 676
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 678,
            "end": 687
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null,
            "start": 688,
            "end": 707
          },
          "optional": false,
          "computed": false,
          "start": 678,
          "end": 707
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 708,
            "end": 710
          }
        ],
        "optional": false,
        "start": 678,
        "end": 711
      },
      "directive": null,
      "start": 678,
      "end": 712
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 713,
            "end": 722
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null,
            "start": 723,
            "end": 742
          },
          "optional": false,
          "computed": false,
          "start": 713,
          "end": 742
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 750
            },
            "typeArguments": null,
            "arguments": [],
            "start": 743,
            "end": 750
          }
        ],
        "optional": false,
        "start": 713,
        "end": 751
      },
      "directive": null,
      "start": 713,
      "end": 752
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 753,
            "end": 762
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null,
            "start": 763,
            "end": 782
          },
          "optional": false,
          "computed": false,
          "start": 753,
          "end": 782
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 792
          }
        ],
        "optional": false,
        "start": 753,
        "end": 793
      },
      "directive": null,
      "start": 753,
      "end": 794
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 795,
            "end": 804
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null,
            "start": 805,
            "end": 824
          },
          "optional": false,
          "computed": false,
          "start": 795,
          "end": 824
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 825,
            "end": 834
          }
        ],
        "optional": false,
        "start": 795,
        "end": 835
      },
      "directive": null,
      "start": 795,
      "end": 836
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 846
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null,
            "start": 847,
            "end": 866
          },
          "optional": false,
          "computed": false,
          "start": 837,
          "end": 866
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 867,
            "end": 880
          }
        ],
        "optional": false,
        "start": 837,
        "end": 881
      },
      "directive": null,
      "start": 837,
      "end": 882
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 884,
            "end": 893
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 894,
            "end": 904
          },
          "optional": false,
          "computed": false,
          "start": 884,
          "end": 904
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 905,
            "end": 907
          }
        ],
        "optional": false,
        "start": 884,
        "end": 908
      },
      "directive": null,
      "start": 884,
      "end": 909
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 910,
            "end": 919
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 920,
            "end": 930
          },
          "optional": false,
          "computed": false,
          "start": 910,
          "end": 930
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 935,
              "end": 938
            },
            "typeArguments": null,
            "arguments": [],
            "start": 931,
            "end": 938
          }
        ],
        "optional": false,
        "start": 910,
        "end": 939
      },
      "directive": null,
      "start": 910,
      "end": 940
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 950
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 951,
            "end": 961
          },
          "optional": false,
          "computed": false,
          "start": 941,
          "end": 961
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 962,
            "end": 971
          }
        ],
        "optional": false,
        "start": 941,
        "end": 972
      },
      "directive": null,
      "start": 941,
      "end": 973
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 974,
            "end": 983
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 984,
            "end": 994
          },
          "optional": false,
          "computed": false,
          "start": 974,
          "end": 994
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 995,
            "end": 1004
          }
        ],
        "optional": false,
        "start": 974,
        "end": 1005
      },
      "directive": null,
      "start": 974,
      "end": 1006
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1007,
            "end": 1016
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1017,
            "end": 1027
          },
          "optional": false,
          "computed": false,
          "start": 1007,
          "end": 1027
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 1028,
            "end": 1041
          }
        ],
        "optional": false,
        "start": 1007,
        "end": 1042
      },
      "directive": null,
      "start": 1007,
      "end": 1043
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1045,
            "end": 1054
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1055,
            "end": 1067
          },
          "optional": false,
          "computed": false,
          "start": 1045,
          "end": 1067
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1068,
            "end": 1070
          }
        ],
        "optional": false,
        "start": 1045,
        "end": 1071
      },
      "directive": null,
      "start": 1045,
      "end": 1072
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1073,
            "end": 1082
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1083,
            "end": 1095
          },
          "optional": false,
          "computed": false,
          "start": 1073,
          "end": 1095
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1103
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1096,
            "end": 1103
          }
        ],
        "optional": false,
        "start": 1073,
        "end": 1104
      },
      "directive": null,
      "start": 1073,
      "end": 1105
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1106,
            "end": 1115
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1116,
            "end": 1128
          },
          "optional": false,
          "computed": false,
          "start": 1106,
          "end": 1128
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1129,
            "end": 1138
          }
        ],
        "optional": false,
        "start": 1106,
        "end": 1139
      },
      "directive": null,
      "start": 1106,
      "end": 1140
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1141,
            "end": 1150
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1151,
            "end": 1163
          },
          "optional": false,
          "computed": false,
          "start": 1141,
          "end": 1163
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1164,
            "end": 1173
          }
        ],
        "optional": false,
        "start": 1141,
        "end": 1174
      },
      "directive": null,
      "start": 1141,
      "end": 1175
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1176,
            "end": 1185
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1186,
            "end": 1198
          },
          "optional": false,
          "computed": false,
          "start": 1176,
          "end": 1198
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 1199,
            "end": 1212
          }
        ],
        "optional": false,
        "start": 1176,
        "end": 1213
      },
      "directive": null,
      "start": 1176,
      "end": 1214
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1216,
            "end": 1225
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null,
            "start": 1226,
            "end": 1240
          },
          "optional": false,
          "computed": false,
          "start": 1216,
          "end": 1240
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1241,
            "end": 1243
          }
        ],
        "optional": false,
        "start": 1216,
        "end": 1244
      },
      "directive": null,
      "start": 1216,
      "end": 1245
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1246,
            "end": 1255
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null,
            "start": 1256,
            "end": 1270
          },
          "optional": false,
          "computed": false,
          "start": 1246,
          "end": 1270
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1275,
              "end": 1278
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1271,
            "end": 1278
          }
        ],
        "optional": false,
        "start": 1246,
        "end": 1279
      },
      "directive": null,
      "start": 1246,
      "end": 1280
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1281,
            "end": 1290
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null,
            "start": 1291,
            "end": 1305
          },
          "optional": false,
          "computed": false,
          "start": 1281,
          "end": 1305
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1306,
            "end": 1315
          }
        ],
        "optional": false,
        "start": 1281,
        "end": 1316
      },
      "directive": null,
      "start": 1281,
      "end": 1317
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1318,
            "end": 1327
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null,
            "start": 1328,
            "end": 1342
          },
          "optional": false,
          "computed": false,
          "start": 1318,
          "end": 1342
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1343,
            "end": 1352
          }
        ],
        "optional": false,
        "start": 1318,
        "end": 1353
      },
      "directive": null,
      "start": 1318,
      "end": 1354
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1355,
            "end": 1364
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null,
            "start": 1365,
            "end": 1379
          },
          "optional": false,
          "computed": false,
          "start": 1355,
          "end": 1379
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 1380,
            "end": 1393
          }
        ],
        "optional": false,
        "start": 1355,
        "end": 1394
      },
      "directive": null,
      "start": 1355,
      "end": 1395
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1395
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 4,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 16,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 20,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 24,
    "end": 25
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 37,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 41,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 61,
    "end": 62
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 75,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 79,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 91,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 100,
    "end": 101
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 121,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 125,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 166,
    "end": 171
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "has",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 188,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 197,
    "end": 200
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 210,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 220,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 231,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 257,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 267,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 273,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 285,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 301,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 313,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 329,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 346,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "intersection",
    "start": 356,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 374,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "intersection",
    "start": 384,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 397,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 401,
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
    "type": "Identifier",
    "value": "numberSet",
    "start": 407,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "intersection",
    "start": 417,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 430,
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
    "type": "Identifier",
    "value": "numberSet",
    "start": 442,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "intersection",
    "start": 452,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 465,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 477,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "intersection",
    "start": 487,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 500,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 517,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "difference",
    "start": 527,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 543,
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
    "value": "difference",
    "start": 553,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 564,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 568,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 574,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "difference",
    "start": 584,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 595,
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
    "type": "Identifier",
    "value": "numberSet",
    "start": 607,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "difference",
    "start": 617,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 628,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 640,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "difference",
    "start": 650,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 661,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 678,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "symmetricDifference",
    "start": 688,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 713,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "symmetricDifference",
    "start": 723,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 743,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 747,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 753,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "symmetricDifference",
    "start": 763,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 783,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 795,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "symmetricDifference",
    "start": 805,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 825,
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
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 837,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "symmetricDifference",
    "start": 847,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 867,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 884,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "isSubsetOf",
    "start": 894,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 910,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "isSubsetOf",
    "start": 920,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 931,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 935,
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
    "type": "Identifier",
    "value": "numberSet",
    "start": 941,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "isSubsetOf",
    "start": 951,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 962,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 974,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "isSubsetOf",
    "start": 984,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 995,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1007,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "isSubsetOf",
    "start": 1017,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 1028,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1045,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "isSupersetOf",
    "start": 1055,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1073,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "isSupersetOf",
    "start": 1083,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1096,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 1100,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1106,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "isSupersetOf",
    "start": 1116,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 1129,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1141,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "isSupersetOf",
    "start": 1151,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 1164,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1176,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "isSupersetOf",
    "start": 1186,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 1199,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1216,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "isDisjointFrom",
    "start": 1226,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1246,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "isDisjointFrom",
    "start": 1256,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1271,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 1275,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1281,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "isDisjointFrom",
    "start": 1291,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 1306,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1318,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "isDisjointFrom",
    "start": 1328,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 1343,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1355,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "isDisjointFrom",
    "start": 1365,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 1380,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395
  }
]
```
