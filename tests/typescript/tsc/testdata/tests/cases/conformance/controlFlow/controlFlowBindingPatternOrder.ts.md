__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
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
                          "value": 0,
                          "raw": "0",
                          "start": 90,
                          "end": 91
                        },
                        "start": 90,
                        "end": 91
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 94,
                          "end": 95
                        },
                        "start": 94,
                        "end": 95
                      }
                    ],
                    "start": 90,
                    "end": 95
                  },
                  "start": 88,
                  "end": 95
                },
                "start": 87,
                "end": 95
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 98,
                "end": 99
              },
              "definite": false,
              "start": 87,
              "end": 99
            }
          ],
          "declare": false,
          "start": 83,
          "end": 100
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 116,
                              "end": 117
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 120,
                              "end": 121
                            },
                            "start": 116,
                            "end": 121
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 125,
                            "end": 126
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 114,
                          "end": 126
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 112,
                      "end": 128
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 132,
                            "end": 133
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 135,
                            "end": 136
                          }
                        ],
                        "start": 131,
                        "end": 137
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 141,
                          "end": 146
                        },
                        "typeArguments": null,
                        "start": 141,
                        "end": 146
                      },
                      "start": 131,
                      "end": 146
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 112,
                    "end": 146
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 147
              },
              "init": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 150,
                "end": 152
              },
              "definite": false,
              "start": 111,
              "end": 152
            }
          ],
          "declare": false,
          "start": 105,
          "end": 153
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
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 168,
                      "end": 169
                    },
                    "start": 168,
                    "end": 169
                  },
                  "start": 166,
                  "end": 169
                },
                "start": 164,
                "end": 169
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 173
              },
              "definite": false,
              "start": 164,
              "end": 173
            }
          ],
          "declare": false,
          "start": 158,
          "end": 174
        }
      ],
      "start": 77,
      "end": 176
    },
    {
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
                          "value": 0,
                          "raw": "0",
                          "start": 190,
                          "end": 191
                        },
                        "start": 190,
                        "end": 191
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 194,
                          "end": 195
                        },
                        "start": 194,
                        "end": 195
                      }
                    ],
                    "start": 190,
                    "end": 195
                  },
                  "start": 188,
                  "end": 195
                },
                "start": 187,
                "end": 195
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 198,
                "end": 199
              },
              "definite": false,
              "start": 187,
              "end": 199
            }
          ],
          "declare": false,
          "start": 183,
          "end": 200
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
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
                            "start": 215,
                            "end": 216
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 219,
                            "end": 220
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 214,
                          "end": 220
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 222
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 226,
                            "end": 227
                          },
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 229,
                              "end": 230
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 233,
                              "end": 234
                            },
                            "start": 229,
                            "end": 234
                          }
                        ],
                        "start": 225,
                        "end": 235
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 244
                        },
                        "typeArguments": null,
                        "start": 239,
                        "end": 244
                      },
                      "start": 225,
                      "end": 244
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 244
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 245
              },
              "init": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 248,
                "end": 250
              },
              "definite": false,
              "start": 211,
              "end": 250
            }
          ],
          "declare": false,
          "start": 205,
          "end": 251
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
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 9,
                      "raw": "9",
                      "start": 266,
                      "end": 267
                    },
                    "start": 266,
                    "end": 267
                  },
                  "start": 264,
                  "end": 267
                },
                "start": 262,
                "end": 267
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 271
              },
              "definite": false,
              "start": 262,
              "end": 271
            }
          ],
          "declare": false,
          "start": 256,
          "end": 272
        }
      ],
      "start": 177,
      "end": 274
    },
    {
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
                          "value": 0,
                          "raw": "0",
                          "start": 288,
                          "end": 289
                        },
                        "start": 288,
                        "end": 289
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 292,
                          "end": 293
                        },
                        "start": 292,
                        "end": 293
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 296,
                          "end": 297
                        },
                        "start": 296,
                        "end": 297
                      }
                    ],
                    "start": 288,
                    "end": 297
                  },
                  "start": 286,
                  "end": 297
                },
                "start": 285,
                "end": 297
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 300,
                "end": 301
              },
              "definite": false,
              "start": 285,
              "end": 301
            }
          ],
          "declare": false,
          "start": 281,
          "end": 302
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
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
                            "start": 317,
                            "end": 318
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 321,
                            "end": 322
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 316,
                          "end": 322
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 314,
                      "end": 324
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 328,
                            "end": 329
                          },
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 331,
                              "end": 332
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 335,
                              "end": 336
                            },
                            "start": 331,
                            "end": 336
                          },
                          {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 338,
                            "end": 339
                          }
                        ],
                        "start": 327,
                        "end": 340
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 344,
                          "end": 349
                        },
                        "typeArguments": null,
                        "start": 344,
                        "end": 349
                      },
                      "start": 327,
                      "end": 349
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 349
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 350
              },
              "init": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 353,
                "end": 355
              },
              "definite": false,
              "start": 313,
              "end": 355
            }
          ],
          "declare": false,
          "start": 307,
          "end": 356
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
                "name": "bb",
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
                          "value": 0,
                          "raw": "0",
                          "start": 371,
                          "end": 372
                        },
                        "start": 371,
                        "end": 372
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 375,
                          "end": 376
                        },
                        "start": 375,
                        "end": 376
                      }
                    ],
                    "start": 371,
                    "end": 376
                  },
                  "start": 369,
                  "end": 376
                },
                "start": 367,
                "end": 376
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 380
              },
              "definite": false,
              "start": 367,
              "end": 380
            }
          ],
          "declare": false,
          "start": 361,
          "end": 381
        }
      ],
      "start": 275,
      "end": 383
    },
    {
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
                          "value": 0,
                          "raw": "0",
                          "start": 397,
                          "end": 398
                        },
                        "start": 397,
                        "end": 398
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 401,
                          "end": 402
                        },
                        "start": 401,
                        "end": 402
                      }
                    ],
                    "start": 397,
                    "end": 402
                  },
                  "start": 395,
                  "end": 402
                },
                "start": 394,
                "end": 402
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 405,
                "end": 406
              },
              "definite": false,
              "start": 394,
              "end": 406
            }
          ],
          "declare": false,
          "start": 390,
          "end": 407
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 423,
                              "end": 424
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 427,
                              "end": 428
                            },
                            "start": 423,
                            "end": 428
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 432,
                            "end": 433
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 421,
                          "end": 433
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 435
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 439,
                            "end": 440
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 442,
                            "end": 443
                          }
                        ],
                        "start": 438,
                        "end": 444
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 448,
                          "end": 453
                        },
                        "typeArguments": null,
                        "start": 448,
                        "end": 453
                      },
                      "start": 438,
                      "end": 453
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 453
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 454
              },
              "init": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 459,
                          "end": 460
                        },
                        {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 462,
                          "end": 463
                        }
                      ],
                      "start": 458,
                      "end": 464
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 468,
                        "end": 473
                      },
                      "typeArguments": null,
                      "start": 468,
                      "end": 473
                    },
                    "start": 458,
                    "end": 473
                  }
                ],
                "start": 457,
                "end": 474
              },
              "definite": false,
              "start": 418,
              "end": 474
            }
          ],
          "declare": false,
          "start": 412,
          "end": 475
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
                "name": "bb",
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
                          "value": 0,
                          "raw": "0",
                          "start": 490,
                          "end": 491
                        },
                        "start": 490,
                        "end": 491
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 494,
                          "end": 495
                        },
                        "start": 494,
                        "end": 495
                      }
                    ],
                    "start": 490,
                    "end": 495
                  },
                  "start": 488,
                  "end": 495
                },
                "start": 486,
                "end": 495
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 498,
                "end": 499
              },
              "definite": false,
              "start": 486,
              "end": 499
            }
          ],
          "declare": false,
          "start": 480,
          "end": 500
        }
      ],
      "start": 384,
      "end": 502
    },
    {
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
                          "value": 0,
                          "raw": "0",
                          "start": 516,
                          "end": 517
                        },
                        "start": 516,
                        "end": 517
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 520,
                          "end": 521
                        },
                        "start": 520,
                        "end": 521
                      }
                    ],
                    "start": 516,
                    "end": 521
                  },
                  "start": 514,
                  "end": 521
                },
                "start": 513,
                "end": 521
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 524,
                "end": 525
              },
              "definite": false,
              "start": 513,
              "end": 525
            }
          ],
          "declare": false,
          "start": 509,
          "end": 526
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
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
                            "start": 541,
                            "end": 542
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 545,
                            "end": 546
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 540,
                          "end": 546
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 538,
                      "end": 548
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 552,
                              "end": 553
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 556,
                              "end": 557
                            },
                            "start": 552,
                            "end": 557
                          },
                          {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 559,
                            "end": 560
                          }
                        ],
                        "start": 551,
                        "end": 561
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 565,
                          "end": 570
                        },
                        "typeArguments": null,
                        "start": 565,
                        "end": 570
                      },
                      "start": 551,
                      "end": 570
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 538,
                    "end": 570
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 571
              },
              "init": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 576,
                          "end": 577
                        },
                        {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 579,
                          "end": 580
                        }
                      ],
                      "start": 575,
                      "end": 581
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 585,
                        "end": 590
                      },
                      "typeArguments": null,
                      "start": 585,
                      "end": 590
                    },
                    "start": 575,
                    "end": 590
                  }
                ],
                "start": 574,
                "end": 591
              },
              "definite": false,
              "start": 537,
              "end": 591
            }
          ],
          "declare": false,
          "start": 531,
          "end": 592
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
                "name": "bb",
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
                          "value": 0,
                          "raw": "0",
                          "start": 607,
                          "end": 608
                        },
                        "start": 607,
                        "end": 608
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 611,
                          "end": 612
                        },
                        "start": 611,
                        "end": 612
                      }
                    ],
                    "start": 607,
                    "end": 612
                  },
                  "start": 605,
                  "end": 612
                },
                "start": 603,
                "end": 612
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 616
              },
              "definite": false,
              "start": 603,
              "end": 616
            }
          ],
          "declare": false,
          "start": 597,
          "end": 617
        }
      ],
      "start": 503,
      "end": 619
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 619
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 92,
    "end": 93
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 105,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 131,
    "end": 132
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 138,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 158,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "start": 183,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 192,
    "end": 193
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "const",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 225,
    "end": 226
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 226,
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
    "value": "a",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 236,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 239,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 256,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 262,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 281,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 290,
    "end": 291
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 294,
    "end": 295
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 307,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "]",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 327,
    "end": 328
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "5",
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
    "type": "Identifier",
    "value": "as",
    "start": 341,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 344,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 361,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 373,
    "end": 374
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 390,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 399,
    "end": 400
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 412,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "b",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 438,
    "end": 439
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 445,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 448,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 458,
    "end": 459
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 460,
    "end": 461
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 465,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 468,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 480,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 486,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 492,
    "end": 493
  },
  {
    "type": "Numeric",
    "value": "8",
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
    "type": "Identifier",
    "value": "b",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 509,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 518,
    "end": 519
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 531,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "9",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 562,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 565,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 575,
    "end": 576
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 577,
    "end": 578
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 582,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 585,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 590,
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
    "value": "const",
    "start": 597,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 603,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 609,
    "end": 610
  },
  {
    "type": "Numeric",
    "value": "8",
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
    "type": "Identifier",
    "value": "b",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 618,
    "end": 619
  }
]
```
