__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 10,
              "end": 14
            },
            "start": 10,
            "end": 14
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 17,
              "end": 22
            },
            "start": 17,
            "end": 22
          }
        ],
        "start": 10,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 31
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 34,
              "end": 39
            },
            "start": 34,
            "end": 39
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 42,
              "end": 46
            },
            "start": 42,
            "end": 46
          }
        ],
        "start": 34,
        "end": 46
      },
      "declare": false,
      "start": 24,
      "end": 47
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 60
      },
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 76,
                        "end": 78
                      },
                      "typeArguments": null,
                      "start": 76,
                      "end": 78
                    },
                    "start": 74,
                    "end": 78
                  },
                  "start": 73,
                  "end": 78
                },
                "init": null,
                "definite": false,
                "start": 73,
                "end": 78
              }
            ],
            "declare": false,
            "start": 69,
            "end": 79
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 91,
                        "end": 93
                      },
                      "typeArguments": null,
                      "start": 91,
                      "end": 93
                    },
                    "start": 89,
                    "end": 93
                  },
                  "start": 88,
                  "end": 93
                },
                "init": null,
                "definite": false,
                "start": 88,
                "end": 93
              }
            ],
            "declare": false,
            "start": 84,
            "end": 94
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 106,
                            "end": 110
                          },
                          "start": 106,
                          "end": 110
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 113,
                            "end": 118
                          },
                          "start": 113,
                          "end": 118
                        }
                      ],
                      "start": 106,
                      "end": 118
                    },
                    "start": 104,
                    "end": 118
                  },
                  "start": 103,
                  "end": 118
                },
                "init": null,
                "definite": false,
                "start": 103,
                "end": 118
              }
            ],
            "declare": false,
            "start": 99,
            "end": 119
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 131,
                            "end": 136
                          },
                          "start": 131,
                          "end": 136
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 139,
                            "end": 143
                          },
                          "start": 139,
                          "end": 143
                        }
                      ],
                      "start": 131,
                      "end": 143
                    },
                    "start": 129,
                    "end": 143
                  },
                  "start": 128,
                  "end": 143
                },
                "init": null,
                "definite": false,
                "start": 128,
                "end": 143
              }
            ],
            "declare": false,
            "start": 124,
            "end": 144
          }
        ],
        "start": 63,
        "end": 146
      },
      "expression": false,
      "start": 49,
      "end": 146
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 159
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 163,
                    "end": 167
                  },
                  "start": 163,
                  "end": 167
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 170,
                    "end": 175
                  },
                  "start": 170,
                  "end": 175
                }
              ],
              "start": 163,
              "end": 175
            },
            "start": 161,
            "end": 175
          },
          "start": 160,
          "end": 175
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 180,
              "end": 187
            },
            "start": 178,
            "end": 187
          },
          "start": 177,
          "end": 187
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 196
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 200
              },
              "start": 195,
              "end": 200
            },
            "directive": null,
            "start": 195,
            "end": 201
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 207
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 211
              },
              "start": 206,
              "end": 211
            },
            "directive": null,
            "start": 206,
            "end": 212
          }
        ],
        "start": 189,
        "end": 214
      },
      "expression": false,
      "start": 148,
      "end": 214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 227
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 231,
                    "end": 235
                  },
                  "start": 231,
                  "end": 235
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 238,
                    "end": 243
                  },
                  "start": 238,
                  "end": 243
                }
              ],
              "start": 231,
              "end": 243
            },
            "start": 229,
            "end": 243
          },
          "start": 228,
          "end": 243
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 248,
                    "end": 252
                  },
                  "start": 248,
                  "end": 252
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 255,
                    "end": 260
                  },
                  "start": 255,
                  "end": 260
                }
              ],
              "start": 248,
              "end": 260
            },
            "start": 246,
            "end": 260
          },
          "start": 245,
          "end": 260
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 273
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 277
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 282
                  },
                  "start": 276,
                  "end": 282
                },
                "definite": false,
                "start": 272,
                "end": 282
              }
            ],
            "declare": false,
            "start": 268,
            "end": 283
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 293
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 296,
                    "end": 297
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 302
                  },
                  "start": 296,
                  "end": 302
                },
                "definite": false,
                "start": 292,
                "end": 302
              }
            ],
            "declare": false,
            "start": 288,
            "end": 303
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 318
                  },
                  "prefix": true,
                  "start": 316,
                  "end": 318
                },
                "definite": false,
                "start": 312,
                "end": 318
              }
            ],
            "declare": false,
            "start": 308,
            "end": 319
          }
        ],
        "start": 262,
        "end": 321
      },
      "expression": false,
      "start": 216,
      "end": 321
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 332,
        "end": 334
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 338,
                "end": 342
              },
              "start": 338,
              "end": 342
            },
            "start": 336,
            "end": 342
          },
          "start": 335,
          "end": 342
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 347,
                "end": 352
              },
              "start": 347,
              "end": 352
            },
            "start": 345,
            "end": 352
          },
          "start": 344,
          "end": 352
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 366
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 369,
                    "end": 370
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 374,
                    "end": 375
                  },
                  "start": 369,
                  "end": 375
                },
                "definite": false,
                "start": 364,
                "end": 375
              }
            ],
            "declare": false,
            "start": 360,
            "end": 376
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 385,
                  "end": 387
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 391
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 395,
                    "end": 396
                  },
                  "start": 390,
                  "end": 396
                },
                "definite": false,
                "start": 385,
                "end": 396
              }
            ],
            "declare": false,
            "start": 381,
            "end": 397
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 408
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 411,
                    "end": 412
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 417
                  },
                  "start": 411,
                  "end": 417
                },
                "definite": false,
                "start": 406,
                "end": 417
              }
            ],
            "declare": false,
            "start": 402,
            "end": 418
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 429
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 433
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 437,
                    "end": 438
                  },
                  "start": 432,
                  "end": 438
                },
                "definite": false,
                "start": 427,
                "end": 438
              }
            ],
            "declare": false,
            "start": 423,
            "end": 439
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 448,
                  "end": 450
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 454,
                    "end": 455
                  },
                  "prefix": true,
                  "start": 453,
                  "end": 455
                },
                "definite": false,
                "start": 448,
                "end": 455
              }
            ],
            "declare": false,
            "start": 444,
            "end": 456
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 467
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 471,
                    "end": 472
                  },
                  "prefix": true,
                  "start": 470,
                  "end": 472
                },
                "definite": false,
                "start": 465,
                "end": 472
              }
            ],
            "declare": false,
            "start": 461,
            "end": 473
          }
        ],
        "start": 354,
        "end": 475
      },
      "expression": false,
      "start": 323,
      "end": 475
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 494,
        "end": 495
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 499,
                "end": 503
              },
              "start": 499,
              "end": 503
            },
            "start": 497,
            "end": 503
          },
          "start": 496,
          "end": 503
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 506,
          "end": 512
        },
        "start": 504,
        "end": 512
      },
      "body": null,
      "expression": false,
      "start": 477,
      "end": 513
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 532
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 536,
                "end": 541
              },
              "start": 536,
              "end": 541
            },
            "start": 534,
            "end": 541
          },
          "start": 533,
          "end": 541
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 544,
          "end": 551
        },
        "start": 542,
        "end": 551
      },
      "body": null,
      "expression": false,
      "start": 514,
      "end": 552
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 570,
        "end": 571
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 575,
              "end": 582
            },
            "start": 573,
            "end": 582
          },
          "start": 572,
          "end": 582
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 585,
          "end": 591
        },
        "start": 583,
        "end": 591
      },
      "body": null,
      "expression": false,
      "start": 553,
      "end": 592
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 605
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 609,
              "end": 616
            },
            "start": 607,
            "end": 616
          },
          "start": 606,
          "end": 616
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 630
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 634
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 635,
                      "end": 639
                    }
                  ],
                  "optional": false,
                  "start": 633,
                  "end": 640
                },
                "definite": false,
                "start": 628,
                "end": 640
              }
            ],
            "declare": false,
            "start": 624,
            "end": 641
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 650,
                  "end": 652
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 655,
                    "end": 656
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 657,
                      "end": 662
                    }
                  ],
                  "optional": false,
                  "start": 655,
                  "end": 663
                },
                "definite": false,
                "start": 650,
                "end": 663
              }
            ],
            "declare": false,
            "start": 646,
            "end": 664
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 673,
                  "end": 675
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 679
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 680,
                      "end": 681
                    }
                  ],
                  "optional": false,
                  "start": 678,
                  "end": 682
                },
                "definite": false,
                "start": 673,
                "end": 682
              }
            ],
            "declare": false,
            "start": 669,
            "end": 683
          }
        ],
        "start": 618,
        "end": 685
      },
      "expression": false,
      "start": 594,
      "end": 685
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 696,
        "end": 707
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
              "type": "TSNeverKeyword",
              "start": 711,
              "end": 716
            },
            "start": 709,
            "end": 716
          },
          "start": 708,
          "end": 716
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 719,
          "end": 724
        },
        "start": 717,
        "end": 724
      },
      "body": {
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
                "start": 741,
                "end": 746
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Unexpected value",
                  "raw": "\"Unexpected value\"",
                  "start": 747,
                  "end": 765
                }
              ],
              "start": 737,
              "end": 766
            },
            "start": 731,
            "end": 767
          }
        ],
        "start": 725,
        "end": 769
      },
      "expression": false,
      "start": 687,
      "end": 769
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 780,
        "end": 783
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 787,
                    "end": 791
                  },
                  "start": 787,
                  "end": 791
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 794,
                    "end": 799
                  },
                  "start": 794,
                  "end": 799
                }
              ],
              "start": 787,
              "end": 799
            },
            "start": 785,
            "end": 799
          },
          "start": 784,
          "end": 799
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 816
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 833,
                  "end": 837
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 846,
                      "end": 852
                    },
                    "start": 839,
                    "end": 853
                  }
                ],
                "start": 828,
                "end": 853
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 867,
                  "end": 872
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 881,
                      "end": 888
                    },
                    "start": 874,
                    "end": 889
                  }
                ],
                "start": 862,
                "end": 889
              }
            ],
            "start": 807,
            "end": 895
          }
        ],
        "start": 801,
        "end": 897
      },
      "expression": false,
      "start": 771,
      "end": 897
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 911
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 915,
                    "end": 919
                  },
                  "start": 915,
                  "end": 919
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 922,
                    "end": 927
                  },
                  "start": 922,
                  "end": 927
                }
              ],
              "start": 915,
              "end": 927
            },
            "start": 913,
            "end": 927
          },
          "start": 912,
          "end": 927
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 943,
              "end": 944
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 961,
                  "end": 965
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 974,
                      "end": 980
                    },
                    "start": 967,
                    "end": 981
                  }
                ],
                "start": 956,
                "end": 981
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 995,
                  "end": 1000
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 1009,
                      "end": 1016
                    },
                    "start": 1002,
                    "end": 1017
                  }
                ],
                "start": 990,
                "end": 1017
              }
            ],
            "start": 935,
            "end": 1023
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 1035,
                "end": 1046
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1047,
                  "end": 1048
                }
              ],
              "optional": false,
              "start": 1035,
              "end": 1049
            },
            "start": 1028,
            "end": 1050
          }
        ],
        "start": 929,
        "end": 1052
      },
      "expression": false,
      "start": 899,
      "end": 1052
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1063,
        "end": 1066
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1070,
                    "end": 1074
                  },
                  "start": 1070,
                  "end": 1074
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 1077,
                    "end": 1082
                  },
                  "start": 1077,
                  "end": 1082
                }
              ],
              "start": 1070,
              "end": 1082
            },
            "start": 1068,
            "end": 1082
          },
          "start": 1067,
          "end": 1082
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1094,
              "end": 1095
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1107,
                    "end": 1108
                  },
                  "directive": null,
                  "start": 1107,
                  "end": 1109
                }
              ],
              "start": 1097,
              "end": 1115
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1135,
                    "end": 1136
                  },
                  "directive": null,
                  "start": 1135,
                  "end": 1137
                }
              ],
              "start": 1125,
              "end": 1143
            },
            "start": 1090,
            "end": 1143
          }
        ],
        "start": 1084,
        "end": 1145
      },
      "expression": false,
      "start": 1054,
      "end": 1145
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1156,
        "end": 1159
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1163,
                    "end": 1167
                  },
                  "start": 1163,
                  "end": 1167
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 1170,
                    "end": 1175
                  },
                  "start": 1170,
                  "end": 1175
                }
              ],
              "start": 1163,
              "end": 1175
            },
            "start": 1161,
            "end": 1175
          },
          "start": 1160,
          "end": 1175
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
                "start": 1187,
                "end": 1188
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1193,
                "end": 1197
              },
              "start": 1187,
              "end": 1197
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1209,
                    "end": 1210
                  },
                  "directive": null,
                  "start": 1209,
                  "end": 1211
                }
              ],
              "start": 1199,
              "end": 1217
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1237,
                    "end": 1238
                  },
                  "directive": null,
                  "start": 1237,
                  "end": 1239
                }
              ],
              "start": 1227,
              "end": 1245
            },
            "start": 1183,
            "end": 1245
          }
        ],
        "start": 1177,
        "end": 1247
      },
      "expression": false,
      "start": 1147,
      "end": 1247
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 1254,
        "end": 1258
      },
      "typeParameters": null,
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1267,
                  "end": 1271
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1273,
                      "end": 1277
                    },
                    "start": 1273,
                    "end": 1277
                  },
                  "start": 1271,
                  "end": 1277
                },
                "accessibility": null,
                "static": false,
                "start": 1267,
                "end": 1278
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1279,
                  "end": 1280
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1282,
                    "end": 1288
                  },
                  "start": 1280,
                  "end": 1288
                },
                "accessibility": null,
                "static": false,
                "start": 1279,
                "end": 1288
              }
            ],
            "start": 1265,
            "end": 1290
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1303
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1305,
                      "end": 1310
                    },
                    "start": 1305,
                    "end": 1310
                  },
                  "start": 1303,
                  "end": 1310
                },
                "accessibility": null,
                "static": false,
                "start": 1299,
                "end": 1311
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1312,
                  "end": 1313
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1315,
                    "end": 1321
                  },
                  "start": 1313,
                  "end": 1321
                },
                "accessibility": null,
                "static": false,
                "start": 1312,
                "end": 1321
              }
            ],
            "start": 1297,
            "end": 1323
          }
        ],
        "start": 1265,
        "end": 1323
      },
      "declare": false,
      "start": 1249,
      "end": 1324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1335,
        "end": 1338
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1342,
                "end": 1346
              },
              "typeArguments": null,
              "start": 1342,
              "end": 1346
            },
            "start": 1340,
            "end": 1346
          },
          "start": 1339,
          "end": 1346
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1362,
                "end": 1363
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1364,
                "end": 1368
              },
              "optional": false,
              "computed": false,
              "start": 1362,
              "end": 1368
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1385,
                  "end": 1389
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1398,
                        "end": 1399
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1400,
                        "end": 1401
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1398,
                      "end": 1401
                    },
                    "start": 1391,
                    "end": 1402
                  }
                ],
                "start": 1380,
                "end": 1402
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 1416,
                  "end": 1421
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1430,
                        "end": 1431
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1432,
                        "end": 1433
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1430,
                      "end": 1433
                    },
                    "start": 1423,
                    "end": 1434
                  }
                ],
                "start": 1411,
                "end": 1434
              }
            ],
            "start": 1354,
            "end": 1440
          }
        ],
        "start": 1348,
        "end": 1442
      },
      "expression": false,
      "start": 1326,
      "end": 1442
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1453,
        "end": 1456
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1460,
                "end": 1464
              },
              "typeArguments": null,
              "start": 1460,
              "end": 1464
            },
            "start": 1458,
            "end": 1464
          },
          "start": 1457,
          "end": 1464
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1480,
                "end": 1481
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1482,
                "end": 1486
              },
              "optional": false,
              "computed": false,
              "start": 1480,
              "end": 1486
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1503,
                  "end": 1507
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1516,
                        "end": 1517
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1518,
                        "end": 1519
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1516,
                      "end": 1519
                    },
                    "start": 1509,
                    "end": 1520
                  }
                ],
                "start": 1498,
                "end": 1520
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 1534,
                  "end": 1539
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1548,
                        "end": 1549
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1550,
                        "end": 1551
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1548,
                      "end": 1551
                    },
                    "start": 1541,
                    "end": 1552
                  }
                ],
                "start": 1529,
                "end": 1552
              }
            ],
            "start": 1472,
            "end": 1558
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 1570,
                "end": 1581
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1582,
                  "end": 1583
                }
              ],
              "optional": false,
              "start": 1570,
              "end": 1584
            },
            "start": 1563,
            "end": 1585
          }
        ],
        "start": 1466,
        "end": 1587
      },
      "expression": false,
      "start": 1444,
      "end": 1587
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1587
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 5,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 15,
    "end": 16
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 24,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 29,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 34,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 40,
    "end": 41
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 49,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 58,
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
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 69,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "A1",
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
    "type": "Keyword",
    "value": "var",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Boolean",
    "value": "true",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 111,
    "end": 112
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 113,
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
    "value": "var",
    "start": 124,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 137,
    "end": 138
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 148,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 168,
    "end": 169
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 170,
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
    "value": "b",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 180,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "b",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 216,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 236,
    "end": 237
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 238,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 253,
    "end": 254
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 255,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 278,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 298,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 308,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 323,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 332,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 338,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 347,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 360,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 371,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 381,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 392,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 402,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 406,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 413,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 423,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 427,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 434,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 444,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 448,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 461,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 465,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 477,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 485,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 499,
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
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 506,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 514,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 522,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 536,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 544,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 553,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 561,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 575,
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
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 594,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 603,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 609,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 624,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 628,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 635,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 646,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 657,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 669,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "z3",
    "start": 673,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 687,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 696,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 711,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 719,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 731,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 737,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 741,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "String",
    "value": "\"Unexpected value\"",
    "start": 747,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 771,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 780,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 787,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 792,
    "end": 793
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 794,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 807,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 828,
    "end": 832
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 833,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 839,
    "end": 845
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 846,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 862,
    "end": 866
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 867,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 874,
    "end": 880
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 881,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 896,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 899,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 908,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 915,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 920,
    "end": 921
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 922,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 929,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 935,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 956,
    "end": 960
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 961,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 965,
    "end": 966
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 967,
    "end": 973
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 974,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 980,
    "end": 981
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 990,
    "end": 994
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 995,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1002,
    "end": 1008
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 1009,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1028,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 1035,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1054,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1070,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1077,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1090,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1120,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1147,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1156,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1163,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1170,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1183,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1189,
    "end": 1192
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1193,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1222,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1249,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1254,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1267,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1273,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1282,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1299,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1305,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1315,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1326,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1335,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1342,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1354,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1364,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1380,
    "end": 1384
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1385,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1391,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1411,
    "end": 1415
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1416,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1423,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1444,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 1453,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1460,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1472,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1482,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1498,
    "end": 1502
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1503,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1509,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1529,
    "end": 1533
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1534,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1541,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1563,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 1570,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1586,
    "end": 1587
  }
]
```
