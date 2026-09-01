__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 95
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 99,
          "end": 103
        },
        "start": 97,
        "end": 103
      },
      "body": null,
      "expression": false,
      "start": 77,
      "end": 104
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
                          "start": 118,
                          "end": 119
                        },
                        "start": 118,
                        "end": 119
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 122,
                          "end": 123
                        },
                        "start": 122,
                        "end": 123
                      }
                    ],
                    "start": 118,
                    "end": 123
                  },
                  "start": 116,
                  "end": 123
                },
                "start": 115,
                "end": 123
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 126,
                "end": 127
              },
              "definite": false,
              "start": 115,
              "end": 127
            }
          ],
          "declare": false,
          "start": 111,
          "end": 128
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
                          "value": 0,
                          "raw": "0",
                          "start": 140,
                          "end": 141
                        },
                        "start": 140,
                        "end": 141
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 144,
                          "end": 145
                        },
                        "start": 144,
                        "end": 145
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 148,
                          "end": 149
                        },
                        "start": 148,
                        "end": 149
                      }
                    ],
                    "start": 140,
                    "end": 149
                  },
                  "start": 138,
                  "end": 149
                },
                "start": 137,
                "end": 149
              },
              "init": null,
              "definite": false,
              "start": 137,
              "end": 149
            }
          ],
          "declare": false,
          "start": 133,
          "end": 150
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
                            "start": 160,
                            "end": 161
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 164,
                            "end": 165
                          },
                          "start": 160,
                          "end": 165
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 170
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 158,
                        "end": 170
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 172
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
                          "start": 176,
                          "end": 177
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 179,
                          "end": 180
                        }
                      ],
                      "start": 175,
                      "end": 181
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 185,
                        "end": 190
                      },
                      "typeArguments": null,
                      "start": 185,
                      "end": 190
                    },
                    "start": 175,
                    "end": 190
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 190
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 191
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 194,
              "end": 196
            },
            "start": 155,
            "end": 196
          },
          "directive": null,
          "start": 155,
          "end": 197
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
                      "start": 212,
                      "end": 213
                    },
                    "start": 212,
                    "end": 213
                  },
                  "start": 210,
                  "end": 213
                },
                "start": 208,
                "end": 213
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 217
              },
              "definite": false,
              "start": 208,
              "end": 217
            }
          ],
          "declare": false,
          "start": 202,
          "end": 218
        }
      ],
      "start": 105,
      "end": 220
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
                          "start": 234,
                          "end": 235
                        },
                        "start": 234,
                        "end": 235
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 238,
                          "end": 239
                        },
                        "start": 238,
                        "end": 239
                      }
                    ],
                    "start": 234,
                    "end": 239
                  },
                  "start": 232,
                  "end": 239
                },
                "start": 231,
                "end": 239
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 242,
                "end": 243
              },
              "definite": false,
              "start": 231,
              "end": 243
            }
          ],
          "declare": false,
          "start": 227,
          "end": 244
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
                          "value": 0,
                          "raw": "0",
                          "start": 256,
                          "end": 257
                        },
                        "start": 256,
                        "end": 257
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 260,
                          "end": 261
                        },
                        "start": 260,
                        "end": 261
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 264,
                          "end": 265
                        },
                        "start": 264,
                        "end": 265
                      }
                    ],
                    "start": 256,
                    "end": 265
                  },
                  "start": 254,
                  "end": 265
                },
                "start": 253,
                "end": 265
              },
              "init": null,
              "definite": false,
              "start": 253,
              "end": 265
            }
          ],
          "declare": false,
          "start": 249,
          "end": 266
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
                          "start": 275,
                          "end": 276
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 280
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 274,
                        "end": 280
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 282
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
                          "start": 286,
                          "end": 287
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
                            "start": 289,
                            "end": 290
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 293,
                            "end": 294
                          },
                          "start": 289,
                          "end": 294
                        }
                      ],
                      "start": 285,
                      "end": 295
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 299,
                        "end": 304
                      },
                      "typeArguments": null,
                      "start": 299,
                      "end": 304
                    },
                    "start": 285,
                    "end": 304
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 304
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 305
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 308,
              "end": 310
            },
            "start": 271,
            "end": 310
          },
          "directive": null,
          "start": 271,
          "end": 311
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
                      "start": 326,
                      "end": 327
                    },
                    "start": 326,
                    "end": 327
                  },
                  "start": 324,
                  "end": 327
                },
                "start": 322,
                "end": 327
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 331
              },
              "definite": false,
              "start": 322,
              "end": 331
            }
          ],
          "declare": false,
          "start": 316,
          "end": 332
        }
      ],
      "start": 221,
      "end": 334
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
                          "start": 348,
                          "end": 349
                        },
                        "start": 348,
                        "end": 349
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 352,
                          "end": 353
                        },
                        "start": 352,
                        "end": 353
                      }
                    ],
                    "start": 348,
                    "end": 353
                  },
                  "start": 346,
                  "end": 353
                },
                "start": 345,
                "end": 353
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 356,
                "end": 357
              },
              "definite": false,
              "start": 345,
              "end": 357
            }
          ],
          "declare": false,
          "start": 341,
          "end": 358
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
                          "value": 0,
                          "raw": "0",
                          "start": 370,
                          "end": 371
                        },
                        "start": 370,
                        "end": 371
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 374,
                          "end": 375
                        },
                        "start": 374,
                        "end": 375
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 378,
                          "end": 379
                        },
                        "start": 378,
                        "end": 379
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 382,
                          "end": 383
                        },
                        "start": 382,
                        "end": 383
                      }
                    ],
                    "start": 370,
                    "end": 383
                  },
                  "start": 368,
                  "end": 383
                },
                "start": 367,
                "end": 383
              },
              "init": null,
              "definite": false,
              "start": 367,
              "end": 383
            }
          ],
          "declare": false,
          "start": 363,
          "end": 384
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
                            "start": 394,
                            "end": 395
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 398,
                            "end": 399
                          },
                          "start": 394,
                          "end": 399
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 403,
                          "end": 404
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 392,
                        "end": 404
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 406
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
                          "start": 410,
                          "end": 411
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 413,
                          "end": 414
                        }
                      ],
                      "start": 409,
                      "end": 415
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 419,
                        "end": 424
                      },
                      "typeArguments": null,
                      "start": 419,
                      "end": 424
                    },
                    "start": 409,
                    "end": 424
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 424
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 425
            },
            "right": {
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
                        "start": 430,
                        "end": 431
                      },
                      {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 433,
                        "end": 434
                      }
                    ],
                    "start": 429,
                    "end": 435
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 439,
                      "end": 444
                    },
                    "typeArguments": null,
                    "start": 439,
                    "end": 444
                  },
                  "start": 429,
                  "end": 444
                }
              ],
              "start": 428,
              "end": 445
            },
            "start": 389,
            "end": 445
          },
          "directive": null,
          "start": 389,
          "end": 446
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
                          "start": 461,
                          "end": 462
                        },
                        "start": 461,
                        "end": 462
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 465,
                          "end": 466
                        },
                        "start": 465,
                        "end": 466
                      }
                    ],
                    "start": 461,
                    "end": 466
                  },
                  "start": 459,
                  "end": 466
                },
                "start": 457,
                "end": 466
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 470
              },
              "definite": false,
              "start": 457,
              "end": 470
            }
          ],
          "declare": false,
          "start": 451,
          "end": 471
        }
      ],
      "start": 335,
      "end": 473
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
                          "start": 487,
                          "end": 488
                        },
                        "start": 487,
                        "end": 488
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 491,
                          "end": 492
                        },
                        "start": 491,
                        "end": 492
                      }
                    ],
                    "start": 487,
                    "end": 492
                  },
                  "start": 485,
                  "end": 492
                },
                "start": 484,
                "end": 492
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 495,
                "end": 496
              },
              "definite": false,
              "start": 484,
              "end": 496
            }
          ],
          "declare": false,
          "start": 480,
          "end": 497
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
                          "value": 0,
                          "raw": "0",
                          "start": 509,
                          "end": 510
                        },
                        "start": 509,
                        "end": 510
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 513,
                          "end": 514
                        },
                        "start": 513,
                        "end": 514
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 517,
                          "end": 518
                        },
                        "start": 517,
                        "end": 518
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 521,
                          "end": 522
                        },
                        "start": 521,
                        "end": 522
                      }
                    ],
                    "start": 509,
                    "end": 522
                  },
                  "start": 507,
                  "end": 522
                },
                "start": 506,
                "end": 522
              },
              "init": null,
              "definite": false,
              "start": 506,
              "end": 522
            }
          ],
          "declare": false,
          "start": 502,
          "end": 523
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
                          "start": 532,
                          "end": 533
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 536,
                          "end": 537
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 531,
                        "end": 537
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 529,
                    "end": 539
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
                            "start": 543,
                            "end": 544
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 547,
                            "end": 548
                          },
                          "start": 543,
                          "end": 548
                        },
                        {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 550,
                          "end": 551
                        }
                      ],
                      "start": 542,
                      "end": 552
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 556,
                        "end": 561
                      },
                      "typeArguments": null,
                      "start": 556,
                      "end": 561
                    },
                    "start": 542,
                    "end": 561
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 561
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 562
            },
            "right": {
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
                        "start": 567,
                        "end": 568
                      },
                      {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 570,
                        "end": 571
                      }
                    ],
                    "start": 566,
                    "end": 572
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 576,
                      "end": 581
                    },
                    "typeArguments": null,
                    "start": 576,
                    "end": 581
                  },
                  "start": 566,
                  "end": 581
                }
              ],
              "start": 565,
              "end": 582
            },
            "start": 528,
            "end": 582
          },
          "directive": null,
          "start": 528,
          "end": 583
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
                          "start": 598,
                          "end": 599
                        },
                        "start": 598,
                        "end": 599
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 602,
                          "end": 603
                        },
                        "start": 602,
                        "end": 603
                      }
                    ],
                    "start": 598,
                    "end": 603
                  },
                  "start": 596,
                  "end": 603
                },
                "start": 594,
                "end": 603
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 607
              },
              "definite": false,
              "start": 594,
              "end": 607
            }
          ],
          "declare": false,
          "start": 588,
          "end": 608
        }
      ],
      "start": 474,
      "end": 610
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
                          "start": 676,
                          "end": 677
                        },
                        "start": 676,
                        "end": 677
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 680,
                          "end": 681
                        },
                        "start": 680,
                        "end": 681
                      }
                    ],
                    "start": 676,
                    "end": 681
                  },
                  "start": 674,
                  "end": 681
                },
                "start": 673,
                "end": 681
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 684,
                "end": 685
              },
              "definite": false,
              "start": 673,
              "end": 685
            }
          ],
          "declare": false,
          "start": 669,
          "end": 686
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
                          "value": 0,
                          "raw": "0",
                          "start": 698,
                          "end": 699
                        },
                        "start": 698,
                        "end": 699
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 702,
                          "end": 703
                        },
                        "start": 702,
                        "end": 703
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 706,
                          "end": 707
                        },
                        "start": 706,
                        "end": 707
                      }
                    ],
                    "start": 698,
                    "end": 707
                  },
                  "start": 696,
                  "end": 707
                },
                "start": 695,
                "end": 707
              },
              "init": null,
              "definite": false,
              "start": 695,
              "end": 707
            }
          ],
          "declare": false,
          "start": 691,
          "end": 708
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
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
                                "start": 718,
                                "end": 719
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 722,
                                "end": 723
                              },
                              "start": 718,
                              "end": 723
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 727,
                              "end": 728
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 716,
                            "end": 728
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 714,
                        "end": 730
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
                              "start": 734,
                              "end": 735
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 737,
                              "end": 738
                            }
                          ],
                          "start": 733,
                          "end": 739
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 743,
                            "end": 748
                          },
                          "typeArguments": null,
                          "start": 743,
                          "end": 748
                        },
                        "start": 733,
                        "end": 748
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 714,
                      "end": 748
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 713,
                  "end": 749
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 752,
                  "end": 754
                },
                "start": 713,
                "end": 754
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 756,
                  "end": 757
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 756,
                "end": 759
              }
            ],
            "start": 713,
            "end": 759
          },
          "directive": null,
          "start": 713,
          "end": 760
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
                      "start": 775,
                      "end": 776
                    },
                    "start": 775,
                    "end": 776
                  },
                  "start": 773,
                  "end": 776
                },
                "start": 771,
                "end": 776
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 780
              },
              "definite": false,
              "start": 771,
              "end": 780
            }
          ],
          "declare": false,
          "start": 765,
          "end": 781
        }
      ],
      "start": 663,
      "end": 783
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
                          "start": 797,
                          "end": 798
                        },
                        "start": 797,
                        "end": 798
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 801,
                          "end": 802
                        },
                        "start": 801,
                        "end": 802
                      }
                    ],
                    "start": 797,
                    "end": 802
                  },
                  "start": 795,
                  "end": 802
                },
                "start": 794,
                "end": 802
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 805,
                "end": 806
              },
              "definite": false,
              "start": 794,
              "end": 806
            }
          ],
          "declare": false,
          "start": 790,
          "end": 807
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
                          "value": 0,
                          "raw": "0",
                          "start": 819,
                          "end": 820
                        },
                        "start": 819,
                        "end": 820
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 823,
                          "end": 824
                        },
                        "start": 823,
                        "end": 824
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 827,
                          "end": 828
                        },
                        "start": 827,
                        "end": 828
                      }
                    ],
                    "start": 819,
                    "end": 828
                  },
                  "start": 817,
                  "end": 828
                },
                "start": 816,
                "end": 828
              },
              "init": null,
              "definite": false,
              "start": 816,
              "end": 828
            }
          ],
          "declare": false,
          "start": 812,
          "end": 829
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
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
                              "start": 838,
                              "end": 839
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 842,
                              "end": 843
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 837,
                            "end": 843
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 835,
                        "end": 845
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
                              "start": 849,
                              "end": 850
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
                                "start": 852,
                                "end": 853
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 856,
                                "end": 857
                              },
                              "start": 852,
                              "end": 857
                            }
                          ],
                          "start": 848,
                          "end": 858
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 862,
                            "end": 867
                          },
                          "typeArguments": null,
                          "start": 862,
                          "end": 867
                        },
                        "start": 848,
                        "end": 867
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 835,
                      "end": 867
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 834,
                  "end": 868
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 871,
                  "end": 873
                },
                "start": 834,
                "end": 873
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 875,
                  "end": 876
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 875,
                "end": 878
              }
            ],
            "start": 834,
            "end": 878
          },
          "directive": null,
          "start": 834,
          "end": 879
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
                      "start": 894,
                      "end": 895
                    },
                    "start": 894,
                    "end": 895
                  },
                  "start": 892,
                  "end": 895
                },
                "start": 890,
                "end": 895
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 898,
                "end": 899
              },
              "definite": false,
              "start": 890,
              "end": 899
            }
          ],
          "declare": false,
          "start": 884,
          "end": 900
        }
      ],
      "start": 784,
      "end": 902
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
                          "start": 916,
                          "end": 917
                        },
                        "start": 916,
                        "end": 917
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 920,
                          "end": 921
                        },
                        "start": 920,
                        "end": 921
                      }
                    ],
                    "start": 916,
                    "end": 921
                  },
                  "start": 914,
                  "end": 921
                },
                "start": 913,
                "end": 921
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 924,
                "end": 925
              },
              "definite": false,
              "start": 913,
              "end": 925
            }
          ],
          "declare": false,
          "start": 909,
          "end": 926
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
                          "value": 0,
                          "raw": "0",
                          "start": 938,
                          "end": 939
                        },
                        "start": 938,
                        "end": 939
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 942,
                          "end": 943
                        },
                        "start": 942,
                        "end": 943
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 946,
                          "end": 947
                        },
                        "start": 946,
                        "end": 947
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 950,
                          "end": 951
                        },
                        "start": 950,
                        "end": 951
                      }
                    ],
                    "start": 938,
                    "end": 951
                  },
                  "start": 936,
                  "end": 951
                },
                "start": 935,
                "end": 951
              },
              "init": null,
              "definite": false,
              "start": 935,
              "end": 951
            }
          ],
          "declare": false,
          "start": 931,
          "end": 952
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
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
                                "start": 962,
                                "end": 963
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 966,
                                "end": 967
                              },
                              "start": 962,
                              "end": 967
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 971,
                              "end": 972
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 960,
                            "end": 972
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 958,
                        "end": 974
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
                              "start": 978,
                              "end": 979
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 981,
                              "end": 982
                            }
                          ],
                          "start": 977,
                          "end": 983
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 987,
                            "end": 992
                          },
                          "typeArguments": null,
                          "start": 987,
                          "end": 992
                        },
                        "start": 977,
                        "end": 992
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 958,
                      "end": 992
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 957,
                  "end": 993
                },
                "right": {
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
                            "start": 998,
                            "end": 999
                          },
                          {
                            "type": "Literal",
                            "value": 8,
                            "raw": "8",
                            "start": 1001,
                            "end": 1002
                          }
                        ],
                        "start": 997,
                        "end": 1003
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1007,
                          "end": 1012
                        },
                        "typeArguments": null,
                        "start": 1007,
                        "end": 1012
                      },
                      "start": 997,
                      "end": 1012
                    }
                  ],
                  "start": 996,
                  "end": 1013
                },
                "start": 957,
                "end": 1013
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1015,
                  "end": 1016
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1015,
                "end": 1018
              }
            ],
            "start": 957,
            "end": 1018
          },
          "directive": null,
          "start": 957,
          "end": 1019
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
                          "start": 1034,
                          "end": 1035
                        },
                        "start": 1034,
                        "end": 1035
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1038,
                          "end": 1039
                        },
                        "start": 1038,
                        "end": 1039
                      }
                    ],
                    "start": 1034,
                    "end": 1039
                  },
                  "start": 1032,
                  "end": 1039
                },
                "start": 1030,
                "end": 1039
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1042,
                "end": 1043
              },
              "definite": false,
              "start": 1030,
              "end": 1043
            }
          ],
          "declare": false,
          "start": 1024,
          "end": 1044
        }
      ],
      "start": 903,
      "end": 1046
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
                          "start": 1060,
                          "end": 1061
                        },
                        "start": 1060,
                        "end": 1061
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1064,
                          "end": 1065
                        },
                        "start": 1064,
                        "end": 1065
                      }
                    ],
                    "start": 1060,
                    "end": 1065
                  },
                  "start": 1058,
                  "end": 1065
                },
                "start": 1057,
                "end": 1065
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1068,
                "end": 1069
              },
              "definite": false,
              "start": 1057,
              "end": 1069
            }
          ],
          "declare": false,
          "start": 1053,
          "end": 1070
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
                          "value": 0,
                          "raw": "0",
                          "start": 1082,
                          "end": 1083
                        },
                        "start": 1082,
                        "end": 1083
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1086,
                          "end": 1087
                        },
                        "start": 1086,
                        "end": 1087
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1090,
                          "end": 1091
                        },
                        "start": 1090,
                        "end": 1091
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 1094,
                          "end": 1095
                        },
                        "start": 1094,
                        "end": 1095
                      }
                    ],
                    "start": 1082,
                    "end": 1095
                  },
                  "start": 1080,
                  "end": 1095
                },
                "start": 1079,
                "end": 1095
              },
              "init": null,
              "definite": false,
              "start": 1079,
              "end": 1095
            }
          ],
          "declare": false,
          "start": 1075,
          "end": 1096
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
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
                              "start": 1105,
                              "end": 1106
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1109,
                              "end": 1110
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 1104,
                            "end": 1110
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1102,
                        "end": 1112
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
                                "start": 1116,
                                "end": 1117
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1120,
                                "end": 1121
                              },
                              "start": 1116,
                              "end": 1121
                            },
                            {
                              "type": "Literal",
                              "value": 9,
                              "raw": "9",
                              "start": 1123,
                              "end": 1124
                            }
                          ],
                          "start": 1115,
                          "end": 1125
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1129,
                            "end": 1134
                          },
                          "typeArguments": null,
                          "start": 1129,
                          "end": 1134
                        },
                        "start": 1115,
                        "end": 1134
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1102,
                      "end": 1134
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1101,
                  "end": 1135
                },
                "right": {
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
                            "start": 1140,
                            "end": 1141
                          },
                          {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 1143,
                            "end": 1144
                          }
                        ],
                        "start": 1139,
                        "end": 1145
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1149,
                          "end": 1154
                        },
                        "typeArguments": null,
                        "start": 1149,
                        "end": 1154
                      },
                      "start": 1139,
                      "end": 1154
                    }
                  ],
                  "start": 1138,
                  "end": 1155
                },
                "start": 1101,
                "end": 1155
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1157,
                  "end": 1158
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1157,
                "end": 1160
              }
            ],
            "start": 1101,
            "end": 1160
          },
          "directive": null,
          "start": 1101,
          "end": 1161
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
                          "start": 1176,
                          "end": 1177
                        },
                        "start": 1176,
                        "end": 1177
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1180,
                          "end": 1181
                        },
                        "start": 1180,
                        "end": 1181
                      }
                    ],
                    "start": 1176,
                    "end": 1181
                  },
                  "start": 1174,
                  "end": 1181
                },
                "start": 1172,
                "end": 1181
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1184,
                "end": 1185
              },
              "definite": false,
              "start": 1172,
              "end": 1185
            }
          ],
          "declare": false,
          "start": 1166,
          "end": 1186
        }
      ],
      "start": 1047,
      "end": 1188
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
                          "start": 1255,
                          "end": 1256
                        },
                        "start": 1255,
                        "end": 1256
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1259,
                          "end": 1260
                        },
                        "start": 1259,
                        "end": 1260
                      }
                    ],
                    "start": 1255,
                    "end": 1260
                  },
                  "start": 1253,
                  "end": 1260
                },
                "start": 1252,
                "end": 1260
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1263,
                "end": 1264
              },
              "definite": false,
              "start": 1252,
              "end": 1264
            }
          ],
          "declare": false,
          "start": 1248,
          "end": 1265
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
                          "value": 0,
                          "raw": "0",
                          "start": 1277,
                          "end": 1278
                        },
                        "start": 1277,
                        "end": 1278
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1281,
                          "end": 1282
                        },
                        "start": 1281,
                        "end": 1282
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 1285,
                          "end": 1286
                        },
                        "start": 1285,
                        "end": 1286
                      }
                    ],
                    "start": 1277,
                    "end": 1286
                  },
                  "start": 1275,
                  "end": 1286
                },
                "start": 1274,
                "end": 1286
              },
              "init": null,
              "definite": false,
              "start": 1274,
              "end": 1286
            }
          ],
          "declare": false,
          "start": 1270,
          "end": 1287
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1292,
                  "end": 1293
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1292,
                "end": 1295
              },
              {
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
                                "start": 1302,
                                "end": 1303
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1306,
                                "end": 1307
                              },
                              "start": 1302,
                              "end": 1307
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1311,
                              "end": 1312
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 1300,
                            "end": 1312
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1298,
                        "end": 1314
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
                              "start": 1318,
                              "end": 1319
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1321,
                              "end": 1322
                            }
                          ],
                          "start": 1317,
                          "end": 1323
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1327,
                            "end": 1332
                          },
                          "typeArguments": null,
                          "start": 1327,
                          "end": 1332
                        },
                        "start": 1317,
                        "end": 1332
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1298,
                      "end": 1332
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1297,
                  "end": 1333
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 1336,
                  "end": 1338
                },
                "start": 1297,
                "end": 1338
              }
            ],
            "start": 1292,
            "end": 1338
          },
          "directive": null,
          "start": 1292,
          "end": 1339
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
                      "start": 1354,
                      "end": 1355
                    },
                    "start": 1354,
                    "end": 1355
                  },
                  "start": 1352,
                  "end": 1355
                },
                "start": 1350,
                "end": 1355
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1358,
                "end": 1359
              },
              "definite": false,
              "start": 1350,
              "end": 1359
            }
          ],
          "declare": false,
          "start": 1344,
          "end": 1360
        }
      ],
      "start": 1242,
      "end": 1362
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
                          "start": 1376,
                          "end": 1377
                        },
                        "start": 1376,
                        "end": 1377
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1380,
                          "end": 1381
                        },
                        "start": 1380,
                        "end": 1381
                      }
                    ],
                    "start": 1376,
                    "end": 1381
                  },
                  "start": 1374,
                  "end": 1381
                },
                "start": 1373,
                "end": 1381
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1384,
                "end": 1385
              },
              "definite": false,
              "start": 1373,
              "end": 1385
            }
          ],
          "declare": false,
          "start": 1369,
          "end": 1386
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
                          "value": 0,
                          "raw": "0",
                          "start": 1398,
                          "end": 1399
                        },
                        "start": 1398,
                        "end": 1399
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1402,
                          "end": 1403
                        },
                        "start": 1402,
                        "end": 1403
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 1406,
                          "end": 1407
                        },
                        "start": 1406,
                        "end": 1407
                      }
                    ],
                    "start": 1398,
                    "end": 1407
                  },
                  "start": 1396,
                  "end": 1407
                },
                "start": 1395,
                "end": 1407
              },
              "init": null,
              "definite": false,
              "start": 1395,
              "end": 1407
            }
          ],
          "declare": false,
          "start": 1391,
          "end": 1408
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1413,
                  "end": 1414
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1413,
                "end": 1416
              },
              {
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
                              "start": 1422,
                              "end": 1423
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1426,
                              "end": 1427
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 1421,
                            "end": 1427
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1419,
                        "end": 1429
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
                              "start": 1433,
                              "end": 1434
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
                                "start": 1436,
                                "end": 1437
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1440,
                                "end": 1441
                              },
                              "start": 1436,
                              "end": 1441
                            }
                          ],
                          "start": 1432,
                          "end": 1442
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1446,
                            "end": 1451
                          },
                          "typeArguments": null,
                          "start": 1446,
                          "end": 1451
                        },
                        "start": 1432,
                        "end": 1451
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1419,
                      "end": 1451
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1418,
                  "end": 1452
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 1455,
                  "end": 1457
                },
                "start": 1418,
                "end": 1457
              }
            ],
            "start": 1413,
            "end": 1457
          },
          "directive": null,
          "start": 1413,
          "end": 1458
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
                      "start": 1473,
                      "end": 1474
                    },
                    "start": 1473,
                    "end": 1474
                  },
                  "start": 1471,
                  "end": 1474
                },
                "start": 1469,
                "end": 1474
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1477,
                "end": 1478
              },
              "definite": false,
              "start": 1469,
              "end": 1478
            }
          ],
          "declare": false,
          "start": 1463,
          "end": 1479
        }
      ],
      "start": 1363,
      "end": 1481
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
                          "start": 1495,
                          "end": 1496
                        },
                        "start": 1495,
                        "end": 1496
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1499,
                          "end": 1500
                        },
                        "start": 1499,
                        "end": 1500
                      }
                    ],
                    "start": 1495,
                    "end": 1500
                  },
                  "start": 1493,
                  "end": 1500
                },
                "start": 1492,
                "end": 1500
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1503,
                "end": 1504
              },
              "definite": false,
              "start": 1492,
              "end": 1504
            }
          ],
          "declare": false,
          "start": 1488,
          "end": 1505
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
                          "value": 0,
                          "raw": "0",
                          "start": 1517,
                          "end": 1518
                        },
                        "start": 1517,
                        "end": 1518
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1521,
                          "end": 1522
                        },
                        "start": 1521,
                        "end": 1522
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1525,
                          "end": 1526
                        },
                        "start": 1525,
                        "end": 1526
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 1529,
                          "end": 1530
                        },
                        "start": 1529,
                        "end": 1530
                      }
                    ],
                    "start": 1517,
                    "end": 1530
                  },
                  "start": 1515,
                  "end": 1530
                },
                "start": 1514,
                "end": 1530
              },
              "init": null,
              "definite": false,
              "start": 1514,
              "end": 1530
            }
          ],
          "declare": false,
          "start": 1510,
          "end": 1531
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1536,
                  "end": 1537
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1536,
                "end": 1539
              },
              {
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
                                "start": 1546,
                                "end": 1547
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1550,
                                "end": 1551
                              },
                              "start": 1546,
                              "end": 1551
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1555,
                              "end": 1556
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 1544,
                            "end": 1556
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1542,
                        "end": 1558
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
                              "start": 1562,
                              "end": 1563
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1565,
                              "end": 1566
                            }
                          ],
                          "start": 1561,
                          "end": 1567
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1571,
                            "end": 1576
                          },
                          "typeArguments": null,
                          "start": 1571,
                          "end": 1576
                        },
                        "start": 1561,
                        "end": 1576
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1542,
                      "end": 1576
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1541,
                  "end": 1577
                },
                "right": {
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
                            "start": 1582,
                            "end": 1583
                          },
                          {
                            "type": "Literal",
                            "value": 8,
                            "raw": "8",
                            "start": 1585,
                            "end": 1586
                          }
                        ],
                        "start": 1581,
                        "end": 1587
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1591,
                          "end": 1596
                        },
                        "typeArguments": null,
                        "start": 1591,
                        "end": 1596
                      },
                      "start": 1581,
                      "end": 1596
                    }
                  ],
                  "start": 1580,
                  "end": 1597
                },
                "start": 1541,
                "end": 1597
              }
            ],
            "start": 1536,
            "end": 1597
          },
          "directive": null,
          "start": 1536,
          "end": 1598
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
                          "start": 1613,
                          "end": 1614
                        },
                        "start": 1613,
                        "end": 1614
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1617,
                          "end": 1618
                        },
                        "start": 1617,
                        "end": 1618
                      }
                    ],
                    "start": 1613,
                    "end": 1618
                  },
                  "start": 1611,
                  "end": 1618
                },
                "start": 1609,
                "end": 1618
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1621,
                "end": 1622
              },
              "definite": false,
              "start": 1609,
              "end": 1622
            }
          ],
          "declare": false,
          "start": 1603,
          "end": 1623
        }
      ],
      "start": 1482,
      "end": 1625
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
                          "start": 1639,
                          "end": 1640
                        },
                        "start": 1639,
                        "end": 1640
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1643,
                          "end": 1644
                        },
                        "start": 1643,
                        "end": 1644
                      }
                    ],
                    "start": 1639,
                    "end": 1644
                  },
                  "start": 1637,
                  "end": 1644
                },
                "start": 1636,
                "end": 1644
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1647,
                "end": 1648
              },
              "definite": false,
              "start": 1636,
              "end": 1648
            }
          ],
          "declare": false,
          "start": 1632,
          "end": 1649
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
                          "value": 0,
                          "raw": "0",
                          "start": 1661,
                          "end": 1662
                        },
                        "start": 1661,
                        "end": 1662
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1665,
                          "end": 1666
                        },
                        "start": 1665,
                        "end": 1666
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1669,
                          "end": 1670
                        },
                        "start": 1669,
                        "end": 1670
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 1673,
                          "end": 1674
                        },
                        "start": 1673,
                        "end": 1674
                      }
                    ],
                    "start": 1661,
                    "end": 1674
                  },
                  "start": 1659,
                  "end": 1674
                },
                "start": 1658,
                "end": 1674
              },
              "init": null,
              "definite": false,
              "start": 1658,
              "end": 1674
            }
          ],
          "declare": false,
          "start": 1654,
          "end": 1675
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1680,
                  "end": 1681
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1680,
                "end": 1683
              },
              {
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
                              "start": 1689,
                              "end": 1690
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1693,
                              "end": 1694
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 1688,
                            "end": 1694
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1686,
                        "end": 1696
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
                                "start": 1700,
                                "end": 1701
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1704,
                                "end": 1705
                              },
                              "start": 1700,
                              "end": 1705
                            },
                            {
                              "type": "Literal",
                              "value": 9,
                              "raw": "9",
                              "start": 1707,
                              "end": 1708
                            }
                          ],
                          "start": 1699,
                          "end": 1709
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1713,
                            "end": 1718
                          },
                          "typeArguments": null,
                          "start": 1713,
                          "end": 1718
                        },
                        "start": 1699,
                        "end": 1718
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1686,
                      "end": 1718
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1685,
                  "end": 1719
                },
                "right": {
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
                            "start": 1724,
                            "end": 1725
                          },
                          {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 1727,
                            "end": 1728
                          }
                        ],
                        "start": 1723,
                        "end": 1729
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1733,
                          "end": 1738
                        },
                        "typeArguments": null,
                        "start": 1733,
                        "end": 1738
                      },
                      "start": 1723,
                      "end": 1738
                    }
                  ],
                  "start": 1722,
                  "end": 1739
                },
                "start": 1685,
                "end": 1739
              }
            ],
            "start": 1680,
            "end": 1739
          },
          "directive": null,
          "start": 1680,
          "end": 1740
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
                          "start": 1755,
                          "end": 1756
                        },
                        "start": 1755,
                        "end": 1756
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1759,
                          "end": 1760
                        },
                        "start": 1759,
                        "end": 1760
                      }
                    ],
                    "start": 1755,
                    "end": 1760
                  },
                  "start": 1753,
                  "end": 1760
                },
                "start": 1751,
                "end": 1760
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1763,
                "end": 1764
              },
              "definite": false,
              "start": 1751,
              "end": 1764
            }
          ],
          "declare": false,
          "start": 1745,
          "end": 1765
        }
      ],
      "start": 1626,
      "end": 1767
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 1767
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 77,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 85,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 111,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 120,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 142,
    "end": 143
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 146,
    "end": 147
  },
  {
    "type": "Numeric",
    "value": "9",
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
    "type": "Punctuator",
    "value": "[",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 158,
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
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 175,
    "end": 176
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 182,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 185,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 202,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 227,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 236,
    "end": 237
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Numeric",
    "value": "1",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 249,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 258,
    "end": 259
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 262,
    "end": 263
  },
  {
    "type": "Numeric",
    "value": "9",
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
    "type": "Punctuator",
    "value": "[",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 285,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 296,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 299,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 316,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 322,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
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
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 341,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 345,
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
    "value": "0",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 350,
    "end": 351
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 363,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 372,
    "end": 373
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 376,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 380,
    "end": 381
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 409,
    "end": 410
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "as",
    "start": 416,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 419,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 429,
    "end": 430
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 431,
    "end": 432
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 436,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 439,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 451,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 457,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 463,
    "end": 464
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "let",
    "start": 480,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 489,
    "end": 490
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 502,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 511,
    "end": 512
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 515,
    "end": 516
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 519,
    "end": 520
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "b",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 548,
    "end": 549
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 553,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 556,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 566,
    "end": 567
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 568,
    "end": 569
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 573,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 576,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 588,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 600,
    "end": 601
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 663,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 669,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 678,
    "end": 679
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 691,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 700,
    "end": 701
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 704,
    "end": 705
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 733,
    "end": 734
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 740,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 743,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 752,
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
    "value": ",",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 765,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 771,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 773,
    "end": 774
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 790,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 799,
    "end": 800
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 812,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 821,
    "end": 822
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 825,
    "end": 826
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 848,
    "end": 849
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 854,
    "end": 855
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 859,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 862,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 884,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 890,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 892,
    "end": 893
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 909,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 918,
    "end": 919
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 922,
    "end": 923
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 931,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 940,
    "end": 941
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 944,
    "end": 945
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 948,
    "end": 949
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 960,
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
    "value": "a",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 964,
    "end": 965
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "]",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 977,
    "end": 978
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 984,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 987,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 997,
    "end": 998
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1004,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1007,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1024,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 1030,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1053,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1075,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1126,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1129,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1146,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1149,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1166,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 1172,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1248,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1270,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1324,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1327,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1344,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 1350,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1391,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1443,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1446,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1463,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 1469,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1488,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1510,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1536,
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
    "value": ")",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1568,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1571,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1588,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1591,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1603,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 1609,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1632,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1654,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1710,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1713,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1730,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1733,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1745,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 1751,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1766,
    "end": 1767
  }
]
```
