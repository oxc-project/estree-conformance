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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 26,
              "end": 27
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 20,
            "end": 27
          }
        ],
        "start": 19,
        "end": 28
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
                "start": 32,
                "end": 33
              },
              "typeArguments": null,
              "start": 32,
              "end": 33
            },
            "start": 30,
            "end": 33
          },
          "start": 29,
          "end": 33
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "typeArguments": null,
          "start": 36,
          "end": 37
        },
        "start": 34,
        "end": 37
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 38
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
            "name": "x11",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 49
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 54
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 55,
                "end": 58
              }
            ],
            "optional": false,
            "start": 52,
            "end": 59
          },
          "definite": false,
          "start": 46,
          "end": 59
        }
      ],
      "declare": false,
      "start": 40,
      "end": 60
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
            "name": "x12",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 75
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 77,
                    "end": 80
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 83,
                        "end": 86
                      },
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 88,
                        "end": 91
                      }
                    ],
                    "start": 82,
                    "end": 92
                  }
                ],
                "start": 76,
                "end": 93
              }
            ],
            "optional": false,
            "start": 73,
            "end": 94
          },
          "definite": false,
          "start": 67,
          "end": 94
        }
      ],
      "declare": false,
      "start": 61,
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
            "name": "x13",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 105
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 110
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
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
                      "start": 113,
                      "end": 114
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 116,
                      "end": 117
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 113,
                    "end": 117
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 120
                    },
                    "value": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 122,
                      "end": 125
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 119,
                    "end": 125
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 128
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "e",
                          "raw": "\"e\"",
                          "start": 131,
                          "end": 134
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 136,
                          "end": 137
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 139,
                          "end": 143
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 147,
                                "end": 148
                              },
                              "value": {
                                "type": "Literal",
                                "value": "g",
                                "raw": "\"g\"",
                                "start": 150,
                                "end": 153
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 147,
                              "end": 153
                            }
                          ],
                          "start": 145,
                          "end": 155
                        }
                      ],
                      "start": 130,
                      "end": 156
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 127,
                    "end": 156
                  }
                ],
                "start": 111,
                "end": 158
              }
            ],
            "optional": false,
            "start": 108,
            "end": 159
          },
          "definite": false,
          "start": 102,
          "end": 159
        }
      ],
      "declare": false,
      "start": 96,
      "end": 160
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 181
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 188,
              "end": 189
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 182,
            "end": 189
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 192
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 191,
            "end": 192
          }
        ],
        "start": 181,
        "end": 193
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 198
                  },
                  "typeArguments": null,
                  "start": 197,
                  "end": 198
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 201,
                  "end": 210
                }
              ],
              "start": 197,
              "end": 210
            },
            "start": 195,
            "end": 210
          },
          "start": 194,
          "end": 210
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 214
          },
          "typeArguments": null,
          "start": 213,
          "end": 214
        },
        "start": 211,
        "end": 214
      },
      "body": null,
      "expression": false,
      "start": 162,
      "end": 215
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
            "name": "x21",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 226
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 231
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 232,
                "end": 235
              }
            ],
            "optional": false,
            "start": 229,
            "end": 236
          },
          "definite": false,
          "start": 223,
          "end": 236
        }
      ],
      "declare": false,
      "start": 217,
      "end": 237
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
            "name": "x22",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 247
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 252
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 254,
                    "end": 257
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 260,
                        "end": 263
                      },
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 265,
                        "end": 268
                      }
                    ],
                    "start": 259,
                    "end": 269
                  }
                ],
                "start": 253,
                "end": 270
              }
            ],
            "optional": false,
            "start": 250,
            "end": 271
          },
          "definite": false,
          "start": 244,
          "end": 271
        }
      ],
      "declare": false,
      "start": 238,
      "end": 272
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
            "name": "x23",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 282
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 287
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
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
                      "start": 290,
                      "end": 291
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 293,
                      "end": 294
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 290,
                    "end": 294
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 297
                    },
                    "value": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 299,
                      "end": 302
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 296,
                    "end": 302
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 304,
                      "end": 305
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "e",
                          "raw": "\"e\"",
                          "start": 308,
                          "end": 311
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 313,
                          "end": 314
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 316,
                          "end": 320
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 324,
                                "end": 325
                              },
                              "value": {
                                "type": "Literal",
                                "value": "g",
                                "raw": "\"g\"",
                                "start": 327,
                                "end": 330
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 324,
                              "end": 330
                            }
                          ],
                          "start": 322,
                          "end": 332
                        }
                      ],
                      "start": 307,
                      "end": 333
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 304,
                    "end": 333
                  }
                ],
                "start": 288,
                "end": 335
              }
            ],
            "optional": false,
            "start": 285,
            "end": 336
          },
          "definite": false,
          "start": 279,
          "end": 336
        }
      ],
      "declare": false,
      "start": 273,
      "end": 337
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 358
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 365,
              "end": 366
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 359,
            "end": 366
          }
        ],
        "start": 358,
        "end": 367
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
                "start": 371,
                "end": 372
              },
              "typeArguments": null,
              "start": 371,
              "end": 372
            },
            "start": 369,
            "end": 372
          },
          "start": 368,
          "end": 372
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 376
            },
            "typeArguments": null,
            "start": 375,
            "end": 376
          },
          "start": 375,
          "end": 378
        },
        "start": 373,
        "end": 378
      },
      "body": null,
      "expression": false,
      "start": 339,
      "end": 379
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
            "name": "x31",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 390
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 395
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 396,
                "end": 403
              }
            ],
            "optional": false,
            "start": 393,
            "end": 404
          },
          "definite": false,
          "start": 387,
          "end": 404
        }
      ],
      "declare": false,
      "start": 381,
      "end": 405
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
            "name": "x32",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 415
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 420
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 421,
                "end": 428
              }
            ],
            "optional": false,
            "start": 418,
            "end": 429
          },
          "definite": false,
          "start": 412,
          "end": 429
        }
      ],
      "declare": false,
      "start": 406,
      "end": 430
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 451
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 458,
              "end": 459
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 452,
            "end": 459
          }
        ],
        "start": 451,
        "end": 460
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 468
                  },
                  "typeArguments": null,
                  "start": 467,
                  "end": 468
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 470,
                    "end": 471
                  },
                  "typeArguments": null,
                  "start": 470,
                  "end": 471
                }
              ],
              "start": 466,
              "end": 472
            },
            "start": 464,
            "end": 472
          },
          "start": 461,
          "end": 472
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 476
          },
          "typeArguments": null,
          "start": 475,
          "end": 476
        },
        "start": 473,
        "end": 476
      },
      "body": null,
      "expression": false,
      "start": 432,
      "end": 477
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
            "name": "x41",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 488
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 493
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
                        "value": 1,
                        "raw": "1",
                        "start": 496,
                        "end": 497
                      },
                      {
                        "type": "Literal",
                        "value": "x",
                        "raw": "'x'",
                        "start": 499,
                        "end": 502
                      }
                    ],
                    "start": 495,
                    "end": 503
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 506,
                        "end": 507
                      },
                      {
                        "type": "Literal",
                        "value": "y",
                        "raw": "'y'",
                        "start": 509,
                        "end": 512
                      }
                    ],
                    "start": 505,
                    "end": 513
                  }
                ],
                "start": 494,
                "end": 514
              }
            ],
            "optional": false,
            "start": 491,
            "end": 515
          },
          "definite": false,
          "start": 485,
          "end": 515
        }
      ],
      "declare": false,
      "start": 479,
      "end": 516
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
            "name": "x42",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 526
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 531
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
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
                          "start": 535,
                          "end": 536
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 538,
                          "end": 539
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 535,
                        "end": 539
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 541,
                          "end": 542
                        },
                        "value": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "'x'",
                          "start": 544,
                          "end": 547
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 541,
                        "end": 547
                      }
                    ],
                    "start": 533,
                    "end": 549
                  },
                  {
                    "type": "ObjectExpression",
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
                          "start": 553,
                          "end": 554
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 556,
                          "end": 557
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 553,
                        "end": 557
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 560
                        },
                        "value": {
                          "type": "Literal",
                          "value": "y",
                          "raw": "'y'",
                          "start": 562,
                          "end": 565
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 559,
                        "end": 565
                      }
                    ],
                    "start": 551,
                    "end": 567
                  }
                ],
                "start": 532,
                "end": 568
              }
            ],
            "optional": false,
            "start": 529,
            "end": 569
          },
          "definite": false,
          "start": 523,
          "end": 569
        }
      ],
      "declare": false,
      "start": 517,
      "end": 570
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 589,
        "end": 591
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 598,
              "end": 599
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 592,
            "end": 599
          }
        ],
        "start": 591,
        "end": 600
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                    "start": 608,
                    "end": 609
                  },
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
                        "start": 611,
                        "end": 612
                      },
                      "typeArguments": null,
                      "start": 611,
                      "end": 612
                    },
                    "start": 609,
                    "end": 612
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 608,
                  "end": 613
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
                    "start": 614,
                    "end": 615
                  },
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
                        "start": 617,
                        "end": 618
                      },
                      "typeArguments": null,
                      "start": 617,
                      "end": 618
                    },
                    "start": 615,
                    "end": 618
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 614,
                  "end": 618
                }
              ],
              "start": 606,
              "end": 620
            },
            "start": 604,
            "end": 620
          },
          "start": 601,
          "end": 620
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 624
          },
          "typeArguments": null,
          "start": 623,
          "end": 624
        },
        "start": 621,
        "end": 624
      },
      "body": null,
      "expression": false,
      "start": 572,
      "end": 625
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
            "name": "x51",
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 636
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 639,
              "end": 641
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
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
                      "start": 644,
                      "end": 645
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 648,
                          "end": 649
                        },
                        {
                          "type": "Literal",
                          "value": "x",
                          "raw": "'x'",
                          "start": 651,
                          "end": 654
                        }
                      ],
                      "start": 647,
                      "end": 655
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 644,
                    "end": 655
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
                      "start": 657,
                      "end": 658
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 661,
                          "end": 662
                        },
                        {
                          "type": "Literal",
                          "value": "y",
                          "raw": "'y'",
                          "start": 664,
                          "end": 667
                        }
                      ],
                      "start": 660,
                      "end": 668
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 657,
                    "end": 668
                  }
                ],
                "start": 642,
                "end": 670
              }
            ],
            "optional": false,
            "start": 639,
            "end": 671
          },
          "definite": false,
          "start": 633,
          "end": 671
        }
      ],
      "declare": false,
      "start": 627,
      "end": 672
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
            "name": "x52",
            "optional": false,
            "typeAnnotation": null,
            "start": 679,
            "end": 682
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 685,
              "end": 687
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
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
                      "start": 690,
                      "end": 691
                    },
                    "value": {
                      "type": "ObjectExpression",
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
                            "start": 695,
                            "end": 696
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 698,
                            "end": 699
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 695,
                          "end": 699
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 701,
                            "end": 702
                          },
                          "value": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "'x'",
                            "start": 704,
                            "end": 707
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 701,
                          "end": 707
                        }
                      ],
                      "start": 693,
                      "end": 709
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 690,
                    "end": 709
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
                      "start": 711,
                      "end": 712
                    },
                    "value": {
                      "type": "ObjectExpression",
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
                            "start": 716,
                            "end": 717
                          },
                          "value": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 719,
                            "end": 720
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 716,
                          "end": 720
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 722,
                            "end": 723
                          },
                          "value": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "'y'",
                            "start": 725,
                            "end": 728
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 722,
                          "end": 728
                        }
                      ],
                      "start": 714,
                      "end": 730
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 711,
                    "end": 730
                  }
                ],
                "start": 688,
                "end": 732
              }
            ],
            "optional": false,
            "start": 685,
            "end": 733
          },
          "definite": false,
          "start": 679,
          "end": 733
        }
      ],
      "declare": false,
      "start": 673,
      "end": 734
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 753,
        "end": 755
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 762,
              "end": 763
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 781,
                  "end": 788
                },
                "start": 781,
                "end": 790
              },
              "start": 772,
              "end": 790
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 756,
            "end": 790
          }
        ],
        "start": 755,
        "end": 791
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 795,
            "end": 799
          },
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
                "start": 801,
                "end": 802
              },
              "typeArguments": null,
              "start": 801,
              "end": 802
            },
            "start": 799,
            "end": 802
          },
          "value": null,
          "start": 792,
          "end": 802
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 805,
            "end": 806
          },
          "typeArguments": null,
          "start": 805,
          "end": 806
        },
        "start": 803,
        "end": 806
      },
      "body": null,
      "expression": false,
      "start": 736,
      "end": 807
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
            "name": "x61",
            "optional": false,
            "typeAnnotation": null,
            "start": 815,
            "end": 818
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "typeAnnotation": null,
              "start": 821,
              "end": 823
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 824,
                "end": 825
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 827,
                "end": 830
              },
              {
                "type": "ObjectExpression",
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
                      "start": 834,
                      "end": 835
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 837,
                      "end": 838
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 834,
                    "end": 838
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 840,
                      "end": 841
                    },
                    "value": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "'x'",
                      "start": 843,
                      "end": 846
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 840,
                    "end": 846
                  }
                ],
                "start": 832,
                "end": 848
              }
            ],
            "optional": false,
            "start": 821,
            "end": 849
          },
          "definite": false,
          "start": 815,
          "end": 849
        }
      ],
      "declare": false,
      "start": 809,
      "end": 850
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
            "name": "x62",
            "optional": false,
            "typeAnnotation": null,
            "start": 857,
            "end": 860
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 865
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 870,
                      "end": 871
                    },
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 873,
                      "end": 876
                    }
                  ],
                  "start": 869,
                  "end": 877
                },
                "start": 866,
                "end": 877
              }
            ],
            "optional": false,
            "start": 863,
            "end": 878
          },
          "definite": false,
          "start": 857,
          "end": 878
        }
      ],
      "declare": false,
      "start": 851,
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
            "name": "x63",
            "optional": false,
            "typeAnnotation": null,
            "start": 886,
            "end": 889
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 894
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 895,
                "end": 899
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 905,
                      "end": 906
                    },
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 908,
                      "end": 911
                    }
                  ],
                  "start": 904,
                  "end": 912
                },
                "start": 901,
                "end": 912
              }
            ],
            "optional": false,
            "start": 892,
            "end": 913
          },
          "definite": false,
          "start": 886,
          "end": 913
        }
      ],
      "declare": false,
      "start": 880,
      "end": 914
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
            "name": "x64",
            "optional": false,
            "typeAnnotation": null,
            "start": 921,
            "end": 924
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "typeAnnotation": null,
              "start": 927,
              "end": 929
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 935,
                      "end": 936
                    },
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 938,
                      "end": 941
                    }
                  ],
                  "start": 934,
                  "end": 942
                },
                "start": 930,
                "end": 943
              }
            ],
            "optional": false,
            "start": 927,
            "end": 944
          },
          "definite": false,
          "start": 921,
          "end": 944
        }
      ],
      "declare": false,
      "start": 915,
      "end": 945
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
            "name": "x65",
            "optional": false,
            "typeAnnotation": null,
            "start": 952,
            "end": 955
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "typeAnnotation": null,
              "start": 958,
              "end": 960
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 961,
                "end": 965
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 972,
                      "end": 973
                    },
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 975,
                      "end": 978
                    }
                  ],
                  "start": 971,
                  "end": 979
                },
                "start": 967,
                "end": 980
              }
            ],
            "optional": false,
            "start": 958,
            "end": 981
          },
          "definite": false,
          "start": 952,
          "end": 981
        }
      ],
      "declare": false,
      "start": 946,
      "end": 982
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
        "start": 990,
        "end": 992
      },
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
              "start": 999,
              "end": 1000
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 993,
            "end": 1000
          }
        ],
        "start": 992,
        "end": 1001
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1008,
              "end": 1019
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1023,
                        "end": 1024
                      },
                      "typeArguments": null,
                      "start": 1023,
                      "end": 1024
                    },
                    "start": 1021,
                    "end": 1024
                  },
                  "start": 1020,
                  "end": 1024
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1026,
                "end": 1028
              },
              "expression": false,
              "start": 1019,
              "end": 1028
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1008,
            "end": 1028
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1033,
              "end": 1036
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1043,
                      "end": 1044
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": true,
                    "start": 1037,
                    "end": 1044
                  }
                ],
                "start": 1036,
                "end": 1045
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1049,
                        "end": 1050
                      },
                      "typeArguments": null,
                      "start": 1049,
                      "end": 1050
                    },
                    "start": 1047,
                    "end": 1050
                  },
                  "start": 1046,
                  "end": 1050
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1061,
                      "end": 1062
                    },
                    "start": 1054,
                    "end": 1063
                  }
                ],
                "start": 1052,
                "end": 1065
              },
              "expression": false,
              "start": 1036,
              "end": 1065
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1033,
            "end": 1065
          }
        ],
        "start": 1002,
        "end": 1067
      },
      "abstract": false,
      "declare": false,
      "start": 984,
      "end": 1067
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
            "name": "c71",
            "optional": false,
            "typeAnnotation": null,
            "start": 1075,
            "end": 1078
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1085,
              "end": 1087
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
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
                      "start": 1090,
                      "end": 1091
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1093,
                      "end": 1094
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1090,
                    "end": 1094
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1096,
                      "end": 1097
                    },
                    "value": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 1099,
                      "end": 1102
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1096,
                    "end": 1102
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1104,
                      "end": 1105
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "e",
                          "raw": "\"e\"",
                          "start": 1108,
                          "end": 1111
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1113,
                          "end": 1114
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 1116,
                          "end": 1120
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1124,
                                "end": 1125
                              },
                              "value": {
                                "type": "Literal",
                                "value": "g",
                                "raw": "\"g\"",
                                "start": 1127,
                                "end": 1130
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1124,
                              "end": 1130
                            }
                          ],
                          "start": 1122,
                          "end": 1132
                        }
                      ],
                      "start": 1107,
                      "end": 1133
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1104,
                    "end": 1133
                  }
                ],
                "start": 1088,
                "end": 1135
              }
            ],
            "start": 1081,
            "end": 1136
          },
          "definite": false,
          "start": 1075,
          "end": 1136
        }
      ],
      "declare": false,
      "start": 1069,
      "end": 1137
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
            "name": "c72",
            "optional": false,
            "typeAnnotation": null,
            "start": 1144,
            "end": 1147
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c71",
                "optional": false,
                "typeAnnotation": null,
                "start": 1150,
                "end": 1153
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1154,
                "end": 1157
              },
              "optional": false,
              "computed": false,
              "start": 1150,
              "end": 1157
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 1159,
                    "end": 1162
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 1165,
                        "end": 1168
                      },
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 1170,
                        "end": 1173
                      }
                    ],
                    "start": 1164,
                    "end": 1174
                  }
                ],
                "start": 1158,
                "end": 1175
              }
            ],
            "optional": false,
            "start": 1150,
            "end": 1176
          },
          "definite": false,
          "start": 1144,
          "end": 1176
        }
      ],
      "declare": false,
      "start": 1138,
      "end": 1177
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
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1185,
            "end": 1187
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "start": 1203,
                    "end": 1204
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1197,
                  "end": 1204
                }
              ],
              "start": 1196,
              "end": 1205
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1206,
              "end": 1208
            },
            "abstract": false,
            "declare": false,
            "start": 1190,
            "end": 1208
          },
          "definite": false,
          "start": 1185,
          "end": 1208
        }
      ],
      "declare": false,
      "start": 1179,
      "end": 1208
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
            "name": "fx1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1216,
            "end": 1219
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1229,
                    "end": 1230
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1223,
                  "end": 1230
                }
              ],
              "start": 1222,
              "end": 1231
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
                      "start": 1235,
                      "end": 1236
                    },
                    "typeArguments": null,
                    "start": 1235,
                    "end": 1236
                  },
                  "start": 1233,
                  "end": 1236
                },
                "start": 1232,
                "end": 1236
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1241,
              "end": 1242
            },
            "id": null,
            "generator": false,
            "start": 1222,
            "end": 1242
          },
          "definite": false,
          "start": 1216,
          "end": 1242
        }
      ],
      "declare": false,
      "start": 1210,
      "end": 1243
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
            "name": "fx2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1250,
            "end": 1253
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1263,
                    "end": 1264
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1257,
                  "end": 1264
                }
              ],
              "start": 1256,
              "end": 1266
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
                      "start": 1270,
                      "end": 1271
                    },
                    "typeArguments": null,
                    "start": 1270,
                    "end": 1271
                  },
                  "start": 1268,
                  "end": 1271
                },
                "start": 1267,
                "end": 1271
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1276,
              "end": 1277
            },
            "id": null,
            "generator": false,
            "start": 1256,
            "end": 1277
          },
          "definite": false,
          "start": 1250,
          "end": 1277
        }
      ],
      "declare": false,
      "start": 1244,
      "end": 1278
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1290,
        "end": 1292
      },
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
              "start": 1299,
              "end": 1300
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1293,
            "end": 1300
          }
        ],
        "start": 1292,
        "end": 1301
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 1304,
              "end": 1305
            },
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
                  "start": 1307,
                  "end": 1308
                },
                "typeArguments": null,
                "start": 1307,
                "end": 1308
              },
              "start": 1305,
              "end": 1308
            },
            "accessibility": null,
            "static": false,
            "start": 1304,
            "end": 1308
          }
        ],
        "start": 1302,
        "end": 1310
      },
      "declare": false,
      "start": 1280,
      "end": 1310
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1332,
        "end": 1334
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1341,
              "end": 1342
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1349,
                    "end": 1350
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1343,
                  "end": 1350
                }
              ],
              "start": 1342,
              "end": 1351
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
                      "start": 1355,
                      "end": 1356
                    },
                    "typeArguments": null,
                    "start": 1355,
                    "end": 1356
                  },
                  "start": 1353,
                  "end": 1356
                },
                "start": 1352,
                "end": 1356
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1359,
                  "end": 1360
                },
                "typeArguments": null,
                "start": 1359,
                "end": 1360
              },
              "start": 1357,
              "end": 1360
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1341,
            "end": 1361
          }
        ],
        "start": 1335,
        "end": 1363
      },
      "declare": false,
      "start": 1322,
      "end": 1363
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1370,
        "end": 1372
      },
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
              "start": 1379,
              "end": 1380
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1373,
            "end": 1380
          }
        ],
        "start": 1372,
        "end": 1381
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 1384,
          "end": 1385
        },
        "typeArguments": null,
        "start": 1384,
        "end": 1385
      },
      "declare": false,
      "start": 1365,
      "end": 1386
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1403,
        "end": 1405
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "start": 1415,
                "end": 1416
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": true,
              "start": 1409,
              "end": 1416
            }
          ],
          "start": 1408,
          "end": 1417
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
                  "start": 1421,
                  "end": 1422
                },
                "typeArguments": null,
                "start": 1421,
                "end": 1422
              },
              "start": 1419,
              "end": 1422
            },
            "start": 1418,
            "end": 1422
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1427,
              "end": 1428
            },
            "typeArguments": null,
            "start": 1427,
            "end": 1428
          },
          "start": 1424,
          "end": 1428
        },
        "start": 1408,
        "end": 1428
      },
      "declare": false,
      "start": 1398,
      "end": 1429
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1435,
        "end": 1437
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 1449,
                    "end": 1450
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1443,
                  "end": 1450
                }
              ],
              "start": 1442,
              "end": 1451
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
                      "start": 1455,
                      "end": 1456
                    },
                    "typeArguments": null,
                    "start": 1455,
                    "end": 1456
                  },
                  "start": 1453,
                  "end": 1456
                },
                "start": 1452,
                "end": 1456
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1459,
                  "end": 1460
                },
                "typeArguments": null,
                "start": 1459,
                "end": 1460
              },
              "start": 1457,
              "end": 1460
            },
            "start": 1442,
            "end": 1460
          }
        ],
        "start": 1440,
        "end": 1462
      },
      "declare": false,
      "start": 1430,
      "end": 1463
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1469,
        "end": 1471
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
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
                "start": 1485,
                "end": 1486
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": true,
              "start": 1479,
              "end": 1486
            }
          ],
          "start": 1478,
          "end": 1487
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
                  "start": 1491,
                  "end": 1492
                },
                "typeArguments": null,
                "start": 1491,
                "end": 1492
              },
              "start": 1489,
              "end": 1492
            },
            "start": 1488,
            "end": 1492
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1497,
              "end": 1498
            },
            "typeArguments": null,
            "start": 1497,
            "end": 1498
          },
          "start": 1494,
          "end": 1498
        },
        "start": 1474,
        "end": 1498
      },
      "declare": false,
      "start": 1464,
      "end": 1499
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1505,
        "end": 1507
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1523,
                    "end": 1524
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1517,
                  "end": 1524
                }
              ],
              "start": 1516,
              "end": 1525
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
                      "start": 1529,
                      "end": 1530
                    },
                    "typeArguments": null,
                    "start": 1529,
                    "end": 1530
                  },
                  "start": 1527,
                  "end": 1530
                },
                "start": 1526,
                "end": 1530
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1533,
                  "end": 1534
                },
                "typeArguments": null,
                "start": 1533,
                "end": 1534
              },
              "start": 1531,
              "end": 1534
            },
            "start": 1512,
            "end": 1534
          }
        ],
        "start": 1510,
        "end": 1536
      },
      "declare": false,
      "start": 1500,
      "end": 1537
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 1576,
        "end": 1579
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1584,
              "end": 1585
            },
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1589,
                      "end": 1590
                    },
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1594,
                              "end": 1595
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "123",
                                  "raw": "\"123\"",
                                  "start": 1597,
                                  "end": 1602
                                },
                                "start": 1597,
                                "end": 1602
                              },
                              "start": 1595,
                              "end": 1602
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1594,
                            "end": 1602
                          }
                        ],
                        "start": 1592,
                        "end": 1604
                      },
                      "start": 1590,
                      "end": 1604
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1589,
                    "end": 1604
                  }
                ],
                "start": 1587,
                "end": 1606
              },
              "start": 1585,
              "end": 1606
            },
            "accessibility": null,
            "static": false,
            "start": 1584,
            "end": 1606
          }
        ],
        "start": 1582,
        "end": 1608
      },
      "declare": false,
      "start": 1571,
      "end": 1609
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetPath",
        "optional": false,
        "typeAnnotation": null,
        "start": 1616,
        "end": 1623
      },
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
              "start": 1624,
              "end": 1625
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1624,
            "end": 1625
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1627,
              "end": 1628
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1627,
            "end": 1628
          }
        ],
        "start": 1623,
        "end": 1629
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1636,
            "end": 1637
          },
          "typeArguments": null,
          "start": 1636,
          "end": 1637
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [],
            "start": 1655,
            "end": 1657
          },
          "start": 1646,
          "end": 1657
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1660,
            "end": 1661
          },
          "typeArguments": null,
          "start": 1660,
          "end": 1661
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1668,
              "end": 1669
            },
            "typeArguments": null,
            "start": 1668,
            "end": 1669
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1694,
                      "end": 1695
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1710,
                          "end": 1711
                        },
                        "typeArguments": null,
                        "start": 1710,
                        "end": 1711
                      },
                      "start": 1704,
                      "end": 1711
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1694,
                    "end": 1711
                  },
                  "start": 1688,
                  "end": 1711
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Rest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1722,
                        "end": 1726
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1722,
                      "end": 1726
                    },
                    "start": 1716,
                    "end": 1726
                  },
                  "start": 1713,
                  "end": 1726
                }
              ],
              "start": 1687,
              "end": 1727
            },
            "start": 1678,
            "end": 1727
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "GetPath",
              "optional": false,
              "typeAnnotation": null,
              "start": 1730,
              "end": 1737
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1738,
                      "end": 1739
                    },
                    "typeArguments": null,
                    "start": 1738,
                    "end": 1739
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1740,
                      "end": 1741
                    },
                    "typeArguments": null,
                    "start": 1740,
                    "end": 1741
                  },
                  "start": 1738,
                  "end": 1742
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1744,
                    "end": 1748
                  },
                  "typeArguments": null,
                  "start": 1744,
                  "end": 1748
                }
              ],
              "start": 1737,
              "end": 1749
            },
            "start": 1730,
            "end": 1749
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1756,
            "end": 1761
          },
          "start": 1668,
          "end": 1761
        },
        "start": 1636,
        "end": 1761
      },
      "declare": false,
      "start": 1611,
      "end": 1762
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "set",
        "optional": false,
        "typeAnnotation": null,
        "start": 1773,
        "end": 1776
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
              "start": 1777,
              "end": 1778
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1777,
            "end": 1778
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1786,
              "end": 1787
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1805,
                  "end": 1811
                },
                "start": 1805,
                "end": 1813
              },
              "start": 1796,
              "end": 1813
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1780,
            "end": 1813
          }
        ],
        "start": 1776,
        "end": 1814
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 1820,
                "end": 1821
              },
              "typeArguments": null,
              "start": 1820,
              "end": 1821
            },
            "start": 1818,
            "end": 1821
          },
          "start": 1815,
          "end": 1821
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1829,
                "end": 1830
              },
              "typeArguments": null,
              "start": 1829,
              "end": 1830
            },
            "start": 1827,
            "end": 1830
          },
          "start": 1823,
          "end": 1830
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GetPath",
                "optional": false,
                "typeAnnotation": null,
                "start": 1839,
                "end": 1846
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1847,
                      "end": 1848
                    },
                    "typeArguments": null,
                    "start": 1847,
                    "end": 1848
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1850,
                      "end": 1851
                    },
                    "typeArguments": null,
                    "start": 1850,
                    "end": 1851
                  }
                ],
                "start": 1846,
                "end": 1852
              },
              "start": 1839,
              "end": 1852
            },
            "start": 1837,
            "end": 1852
          },
          "start": 1832,
          "end": 1852
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1854,
        "end": 1856
      },
      "expression": false,
      "start": 1764,
      "end": 1856
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1875,
                  "end": 1878
                },
                "typeArguments": null,
                "start": 1875,
                "end": 1878
              },
              "start": 1873,
              "end": 1878
            },
            "start": 1870,
            "end": 1878
          },
          "init": null,
          "definite": false,
          "start": 1870,
          "end": 1878
        }
      ],
      "declare": true,
      "start": 1858,
      "end": 1879
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
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "123",
                  "raw": "\"123\"",
                  "start": 1899,
                  "end": 1904
                },
                "start": 1899,
                "end": 1904
              },
              "start": 1897,
              "end": 1904
            },
            "start": 1892,
            "end": 1904
          },
          "init": null,
          "definite": false,
          "start": 1892,
          "end": 1904
        }
      ],
      "declare": true,
      "start": 1880,
      "end": 1905
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "set",
          "optional": false,
          "typeAnnotation": null,
          "start": 1907,
          "end": 1910
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 1911,
            "end": 1914
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1917,
                "end": 1920
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1922,
                "end": 1925
              },
              {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 1927,
                "end": 1930
              }
            ],
            "start": 1916,
            "end": 1931
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 1933,
            "end": 1938
          }
        ],
        "optional": false,
        "start": 1907,
        "end": 1939
      },
      "directive": null,
      "start": 1907,
      "end": 1940
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inners",
        "optional": false,
        "typeAnnotation": null,
        "start": 1981,
        "end": 1987
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1994,
              "end": 1995
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 2013,
                  "end": 2016
                },
                "start": 2013,
                "end": 2018
              },
              "start": 2004,
              "end": 2018
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1988,
            "end": 2018
          }
        ],
        "start": 1987,
        "end": 2019
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 2023,
            "end": 2027
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2039,
                    "end": 2046
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2051,
                        "end": 2052
                      },
                      "typeArguments": null,
                      "start": 2051,
                      "end": 2052
                    },
                    "start": 2048,
                    "end": 2052
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2054,
                    "end": 2061
                  }
                ],
                "start": 2038,
                "end": 2062
              },
              "start": 2029,
              "end": 2062
            },
            "start": 2027,
            "end": 2062
          },
          "value": null,
          "start": 2020,
          "end": 2062
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2065,
            "end": 2066
          },
          "typeArguments": null,
          "start": 2065,
          "end": 2066
        },
        "start": 2063,
        "end": 2066
      },
      "body": null,
      "expression": false,
      "start": 1964,
      "end": 2067
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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 2075,
            "end": 2079
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "inners",
              "optional": false,
              "typeAnnotation": null,
              "start": 2082,
              "end": 2088
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2089,
                "end": 2090
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2091,
                "end": 2092
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2093,
                "end": 2094
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 2095,
                "end": 2096
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 2097,
                "end": 2098
              }
            ],
            "optional": false,
            "start": 2082,
            "end": 2099
          },
          "definite": false,
          "start": 2075,
          "end": 2099
        }
      ],
      "declare": false,
      "start": 2069,
      "end": 2100
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inners2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2119,
        "end": 2126
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2133,
              "end": 2134
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 2152,
                  "end": 2155
                },
                "start": 2152,
                "end": 2157
              },
              "start": 2143,
              "end": 2157
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2127,
            "end": 2157
          }
        ],
        "start": 2126,
        "end": 2158
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2175,
                    "end": 2182
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2187,
                        "end": 2188
                      },
                      "typeArguments": null,
                      "start": 2187,
                      "end": 2188
                    },
                    "start": 2184,
                    "end": 2188
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2190,
                    "end": 2197
                  }
                ],
                "start": 2174,
                "end": 2198
              },
              "start": 2165,
              "end": 2198
            },
            "start": 2163,
            "end": 2198
          },
          "start": 2159,
          "end": 2198
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2201,
            "end": 2202
          },
          "typeArguments": null,
          "start": 2201,
          "end": 2202
        },
        "start": 2199,
        "end": 2202
      },
      "body": null,
      "expression": false,
      "start": 2102,
      "end": 2203
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
            "name": "test2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2211,
            "end": 2216
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "inners2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2219,
              "end": 2226
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2228,
                    "end": 2229
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2230,
                    "end": 2231
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 2232,
                    "end": 2233
                  },
                  {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 2234,
                    "end": 2235
                  },
                  {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 2236,
                    "end": 2237
                  }
                ],
                "start": 2227,
                "end": 2238
              }
            ],
            "optional": false,
            "start": 2219,
            "end": 2239
          },
          "definite": false,
          "start": 2211,
          "end": 2239
        }
      ],
      "declare": false,
      "start": 2205,
      "end": 2240
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotEmpty",
        "optional": false,
        "typeAnnotation": null,
        "start": 2269,
        "end": 2277
      },
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
              "start": 2278,
              "end": 2279
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 2288,
                "end": 2294
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2295,
                    "end": 2301
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 2303,
                    "end": 2306
                  }
                ],
                "start": 2294,
                "end": 2307
              },
              "start": 2288,
              "end": 2307
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2278,
            "end": 2307
          }
        ],
        "start": 2277,
        "end": 2308
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2317,
              "end": 2318
            },
            "typeArguments": null,
            "start": 2317,
            "end": 2318
          },
          "start": 2311,
          "end": 2318
        },
        "extendsType": {
          "type": "TSNeverKeyword",
          "start": 2327,
          "end": 2332
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 2335,
          "end": 2340
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2343,
            "end": 2344
          },
          "typeArguments": null,
          "start": 2343,
          "end": 2344
        },
        "start": 2311,
        "end": 2344
      },
      "declare": false,
      "start": 2264,
      "end": 2345
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
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 2353,
            "end": 2358
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2368,
                    "end": 2369
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2378,
                      "end": 2384
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2385,
                          "end": 2391
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 2393,
                          "end": 2396
                        }
                      ],
                      "start": 2384,
                      "end": 2397
                    },
                    "start": 2378,
                    "end": 2397
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 2362,
                  "end": 2397
                }
              ],
              "start": 2361,
              "end": 2398
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NotEmpty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2402,
                      "end": 2410
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2411,
                            "end": 2412
                          },
                          "typeArguments": null,
                          "start": 2411,
                          "end": 2412
                        }
                      ],
                      "start": 2410,
                      "end": 2413
                    },
                    "start": 2402,
                    "end": 2413
                  },
                  "start": 2400,
                  "end": 2413
                },
                "start": 2399,
                "end": 2413
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 2418,
              "end": 2419
            },
            "id": null,
            "generator": false,
            "start": 2361,
            "end": 2419
          },
          "definite": false,
          "start": 2353,
          "end": 2419
        }
      ],
      "declare": false,
      "start": 2347,
      "end": 2420
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
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 2428,
            "end": 2429
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 2432,
              "end": 2437
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2440,
                      "end": 2443
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 2445,
                      "end": 2447
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2440,
                    "end": 2447
                  }
                ],
                "start": 2438,
                "end": 2449
              }
            ],
            "optional": false,
            "start": 2432,
            "end": 2450
          },
          "definite": false,
          "start": 2428,
          "end": 2450
        }
      ],
      "declare": false,
      "start": 2422,
      "end": 2451
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotEmptyMapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 2483,
        "end": 2497
      },
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
              "start": 2498,
              "end": 2499
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 2508,
                "end": 2514
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2515,
                    "end": 2521
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 2523,
                    "end": 2526
                  }
                ],
                "start": 2514,
                "end": 2527
              },
              "start": 2508,
              "end": 2527
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2498,
            "end": 2527
          }
        ],
        "start": 2497,
        "end": 2528
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2537,
              "end": 2538
            },
            "typeArguments": null,
            "start": 2537,
            "end": 2538
          },
          "start": 2531,
          "end": 2538
        },
        "extendsType": {
          "type": "TSNeverKeyword",
          "start": 2547,
          "end": 2552
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 2555,
          "end": 2560
        },
        "falseType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 2566,
            "end": 2567
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2577,
                "end": 2578
              },
              "typeArguments": null,
              "start": 2577,
              "end": 2578
            },
            "start": 2571,
            "end": 2578
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2581,
                "end": 2582
              },
              "typeArguments": null,
              "start": 2581,
              "end": 2582
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2583,
                "end": 2584
              },
              "typeArguments": null,
              "start": 2583,
              "end": 2584
            },
            "start": 2581,
            "end": 2585
          },
          "optional": false,
          "readonly": null,
          "start": 2563,
          "end": 2587
        },
        "start": 2531,
        "end": 2587
      },
      "declare": false,
      "start": 2478,
      "end": 2588
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
            "name": "thingMapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 2596,
            "end": 2607
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2617,
                    "end": 2618
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2627,
                      "end": 2633
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2634,
                          "end": 2640
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 2642,
                          "end": 2645
                        }
                      ],
                      "start": 2633,
                      "end": 2646
                    },
                    "start": 2627,
                    "end": 2646
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 2611,
                  "end": 2646
                }
              ],
              "start": 2610,
              "end": 2647
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NotEmptyMapped",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2651,
                      "end": 2665
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2666,
                            "end": 2667
                          },
                          "typeArguments": null,
                          "start": 2666,
                          "end": 2667
                        }
                      ],
                      "start": 2665,
                      "end": 2668
                    },
                    "start": 2651,
                    "end": 2668
                  },
                  "start": 2649,
                  "end": 2668
                },
                "start": 2648,
                "end": 2668
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 2673,
              "end": 2674
            },
            "id": null,
            "generator": false,
            "start": 2610,
            "end": 2674
          },
          "definite": false,
          "start": 2596,
          "end": 2674
        }
      ],
      "declare": false,
      "start": 2590,
      "end": 2675
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
            "name": "tMapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 2683,
            "end": 2690
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "thingMapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 2693,
              "end": 2704
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2707,
                      "end": 2710
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 2712,
                      "end": 2714
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2707,
                    "end": 2714
                  }
                ],
                "start": 2705,
                "end": 2716
              }
            ],
            "optional": false,
            "start": 2693,
            "end": 2717
          },
          "definite": false,
          "start": 2683,
          "end": 2717
        }
      ],
      "declare": false,
      "start": 2677,
      "end": 2718
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory_55033_minimal",
        "optional": false,
        "typeAnnotation": null,
        "start": 2813,
        "end": 2834
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
              "start": 2841,
              "end": 2842
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 2860,
                  "end": 2867
                },
                "start": 2860,
                "end": 2869
              },
              "start": 2851,
              "end": 2869
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2835,
            "end": 2869
          }
        ],
        "start": 2834,
        "end": 2870
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2879,
                    "end": 2883
                  },
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
                        "start": 2885,
                        "end": 2886
                      },
                      "typeArguments": null,
                      "start": 2885,
                      "end": 2886
                    },
                    "start": 2883,
                    "end": 2886
                  },
                  "value": null,
                  "start": 2876,
                  "end": 2886
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2891,
                  "end": 2895
                },
                "start": 2888,
                "end": 2895
              },
              "start": 2875,
              "end": 2895
            },
            "start": 2873,
            "end": 2895
          },
          "start": 2871,
          "end": 2895
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 2910,
                "end": 2912
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2916,
                  "end": 2917
                },
                "typeArguments": null,
                "start": 2916,
                "end": 2917
              },
              "start": 2910,
              "end": 2917
            },
            "start": 2903,
            "end": 2917
          }
        ],
        "start": 2897,
        "end": 2919
      },
      "expression": false,
      "start": 2804,
      "end": 2919
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
            "name": "test_55033_minimal",
            "optional": false,
            "typeAnnotation": null,
            "start": 2927,
            "end": 2945
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "factory_55033_minimal",
              "optional": false,
              "typeAnnotation": null,
              "start": 2948,
              "end": 2969
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
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
                        "type": "TSStringKeyword",
                        "start": 2974,
                        "end": 2980
                      },
                      "start": 2972,
                      "end": 2980
                    },
                    "start": 2971,
                    "end": 2980
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2985,
                  "end": 2987
                },
                "id": null,
                "generator": false,
                "start": 2970,
                "end": 2987
              }
            ],
            "optional": false,
            "start": 2948,
            "end": 2988
          },
          "definite": false,
          "start": 2927,
          "end": 2988
        }
      ],
      "declare": false,
      "start": 2921,
      "end": 2988
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory_55033",
        "optional": false,
        "typeAnnotation": null,
        "start": 2999,
        "end": 3012
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
              "start": 3019,
              "end": 3020
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 3038,
                  "end": 3045
                },
                "start": 3038,
                "end": 3047
              },
              "start": 3029,
              "end": 3047
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 3013,
            "end": 3047
          }
        ],
        "start": 3012,
        "end": 3048
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3057,
                    "end": 3061
                  },
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
                        "start": 3063,
                        "end": 3064
                      },
                      "typeArguments": null,
                      "start": 3063,
                      "end": 3064
                    },
                    "start": 3061,
                    "end": 3064
                  },
                  "value": null,
                  "start": 3054,
                  "end": 3064
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3069,
                  "end": 3073
                },
                "start": 3066,
                "end": 3073
              },
              "start": 3053,
              "end": 3073
            },
            "start": 3051,
            "end": 3073
          },
          "start": 3049,
          "end": 3073
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 3097,
                "end": 3101
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3108,
                      "end": 3109
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3118,
                        "end": 3119
                      },
                      "typeArguments": null,
                      "start": 3118,
                      "end": 3119
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": true,
                    "start": 3102,
                    "end": 3119
                  }
                ],
                "start": 3101,
                "end": 3120
              },
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3124,
                    "end": 3128
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3130,
                        "end": 3131
                      },
                      "typeArguments": null,
                      "start": 3130,
                      "end": 3131
                    },
                    "start": 3128,
                    "end": 3131
                  },
                  "value": null,
                  "start": 3121,
                  "end": 3131
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3134,
                    "end": 3135
                  },
                  "typeArguments": null,
                  "start": 3134,
                  "end": 3135
                },
                "start": 3132,
                "end": 3135
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 3153,
                        "end": 3155
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3159,
                          "end": 3160
                        },
                        "typeArguments": null,
                        "start": 3159,
                        "end": 3160
                      },
                      "start": 3153,
                      "end": 3160
                    },
                    "start": 3146,
                    "end": 3161
                  }
                ],
                "start": 3136,
                "end": 3167
              },
              "expression": false,
              "start": 3088,
              "end": 3167
            },
            "start": 3081,
            "end": 3168
          }
        ],
        "start": 3075,
        "end": 3170
      },
      "expression": false,
      "start": 2990,
      "end": 3170
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
            "name": "t1_55033",
            "optional": false,
            "typeAnnotation": null,
            "start": 3178,
            "end": 3186
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "factory_55033",
                "optional": false,
                "typeAnnotation": null,
                "start": 3189,
                "end": 3202
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
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
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3209,
                                "end": 3213
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3215,
                                  "end": 3221
                                },
                                "start": 3213,
                                "end": 3221
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3209,
                              "end": 3221
                            }
                          ],
                          "start": 3207,
                          "end": 3223
                        },
                        "start": 3205,
                        "end": 3223
                      },
                      "start": 3204,
                      "end": 3223
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3228,
                          "end": 3234
                        },
                        "start": 3226,
                        "end": 3234
                      },
                      "start": 3225,
                      "end": 3234
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3239,
                    "end": 3241
                  },
                  "id": null,
                  "generator": false,
                  "start": 3203,
                  "end": 3241
                }
              ],
              "optional": false,
              "start": 3189,
              "end": 3242
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3250,
                      "end": 3254
                    },
                    "value": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 3256,
                      "end": 3259
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3250,
                    "end": 3259
                  }
                ],
                "start": 3248,
                "end": 3261
              },
              {
                "type": "Literal",
                "value": "some string",
                "raw": "\"some string\"",
                "start": 3267,
                "end": 3280
              }
            ],
            "optional": false,
            "start": 3189,
            "end": 3282
          },
          "definite": false,
          "start": 3178,
          "end": 3282
        }
      ],
      "declare": false,
      "start": 3172,
      "end": 3283
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
            "name": "t2_55033",
            "optional": false,
            "typeAnnotation": null,
            "start": 3291,
            "end": 3299
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "factory_55033",
                "optional": false,
                "typeAnnotation": null,
                "start": 3302,
                "end": 3315
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
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
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3322,
                                "end": 3326
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3328,
                                  "end": 3334
                                },
                                "start": 3326,
                                "end": 3334
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3322,
                              "end": 3334
                            }
                          ],
                          "start": 3320,
                          "end": 3336
                        },
                        "start": 3318,
                        "end": 3336
                      },
                      "start": 3317,
                      "end": 3336
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3341,
                          "end": 3347
                        },
                        "start": 3339,
                        "end": 3347
                      },
                      "start": 3338,
                      "end": 3347
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3352,
                    "end": 3354
                  },
                  "id": null,
                  "generator": false,
                  "start": 3316,
                  "end": 3354
                }
              ],
              "optional": false,
              "start": 3302,
              "end": 3355
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3363,
                        "end": 3367
                      },
                      "value": {
                        "type": "Literal",
                        "value": 123,
                        "raw": "123",
                        "start": 3369,
                        "end": 3372
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3363,
                      "end": 3372
                    }
                  ],
                  "start": 3361,
                  "end": 3374
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3378,
                    "end": 3383
                  },
                  "typeArguments": null,
                  "start": 3378,
                  "end": 3383
                },
                "start": 3361,
                "end": 3383
              },
              {
                "type": "Literal",
                "value": "some string",
                "raw": "\"some string\"",
                "start": 3389,
                "end": 3402
              }
            ],
            "optional": false,
            "start": 3302,
            "end": 3404
          },
          "definite": false,
          "start": 3291,
          "end": 3404
        }
      ],
      "declare": false,
      "start": 3285,
      "end": 3405
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory_55033_2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3454,
        "end": 3469
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
              "start": 3476,
              "end": 3477
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 3486,
                "end": 3493
              },
              "start": 3486,
              "end": 3495
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 3470,
            "end": 3495
          }
        ],
        "start": 3469,
        "end": 3496
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3505,
                    "end": 3509
                  },
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
                        "start": 3511,
                        "end": 3512
                      },
                      "typeArguments": null,
                      "start": 3511,
                      "end": 3512
                    },
                    "start": 3509,
                    "end": 3512
                  },
                  "value": null,
                  "start": 3502,
                  "end": 3512
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3517,
                  "end": 3521
                },
                "start": 3514,
                "end": 3521
              },
              "start": 3501,
              "end": 3521
            },
            "start": 3499,
            "end": 3521
          },
          "start": 3497,
          "end": 3521
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 3545,
                "end": 3549
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3556,
                      "end": 3557
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3566,
                        "end": 3567
                      },
                      "typeArguments": null,
                      "start": 3566,
                      "end": 3567
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": true,
                    "start": 3550,
                    "end": 3567
                  }
                ],
                "start": 3549,
                "end": 3568
              },
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3572,
                    "end": 3576
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3578,
                        "end": 3579
                      },
                      "typeArguments": null,
                      "start": 3578,
                      "end": 3579
                    },
                    "start": 3576,
                    "end": 3579
                  },
                  "value": null,
                  "start": 3569,
                  "end": 3579
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3582,
                    "end": 3583
                  },
                  "typeArguments": null,
                  "start": 3582,
                  "end": 3583
                },
                "start": 3580,
                "end": 3583
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 3601,
                        "end": 3603
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3607,
                          "end": 3608
                        },
                        "typeArguments": null,
                        "start": 3607,
                        "end": 3608
                      },
                      "start": 3601,
                      "end": 3608
                    },
                    "start": 3594,
                    "end": 3609
                  }
                ],
                "start": 3584,
                "end": 3615
              },
              "expression": false,
              "start": 3536,
              "end": 3615
            },
            "start": 3529,
            "end": 3616
          }
        ],
        "start": 3523,
        "end": 3618
      },
      "expression": false,
      "start": 3445,
      "end": 3618
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
            "name": "t1_55033_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3626,
            "end": 3636
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "factory_55033_2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3639,
                "end": 3654
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
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
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3661,
                                "end": 3665
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3667,
                                  "end": 3673
                                },
                                "start": 3665,
                                "end": 3673
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3661,
                              "end": 3673
                            }
                          ],
                          "start": 3659,
                          "end": 3675
                        },
                        "start": 3657,
                        "end": 3675
                      },
                      "start": 3656,
                      "end": 3675
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3680,
                          "end": 3686
                        },
                        "start": 3678,
                        "end": 3686
                      },
                      "start": 3677,
                      "end": 3686
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3691,
                    "end": 3693
                  },
                  "id": null,
                  "generator": false,
                  "start": 3655,
                  "end": 3693
                }
              ],
              "optional": false,
              "start": 3639,
              "end": 3694
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3702,
                      "end": 3706
                    },
                    "value": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 3708,
                      "end": 3711
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3702,
                    "end": 3711
                  }
                ],
                "start": 3700,
                "end": 3713
              },
              {
                "type": "Literal",
                "value": "some string",
                "raw": "\"some string\"",
                "start": 3719,
                "end": 3732
              }
            ],
            "optional": false,
            "start": 3639,
            "end": 3734
          },
          "definite": false,
          "start": 3626,
          "end": 3734
        }
      ],
      "declare": false,
      "start": 3620,
      "end": 3735
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
            "name": "t2_55033_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3743,
            "end": 3753
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "factory_55033_2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3756,
                "end": 3771
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
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
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3778,
                                "end": 3782
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3784,
                                  "end": 3790
                                },
                                "start": 3782,
                                "end": 3790
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3778,
                              "end": 3790
                            }
                          ],
                          "start": 3776,
                          "end": 3792
                        },
                        "start": 3774,
                        "end": 3792
                      },
                      "start": 3773,
                      "end": 3792
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3797,
                          "end": 3803
                        },
                        "start": 3795,
                        "end": 3803
                      },
                      "start": 3794,
                      "end": 3803
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3808,
                    "end": 3810
                  },
                  "id": null,
                  "generator": false,
                  "start": 3772,
                  "end": 3810
                }
              ],
              "optional": false,
              "start": 3756,
              "end": 3811
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3819,
                        "end": 3823
                      },
                      "value": {
                        "type": "Literal",
                        "value": 123,
                        "raw": "123",
                        "start": 3825,
                        "end": 3828
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3819,
                      "end": 3828
                    }
                  ],
                  "start": 3817,
                  "end": 3830
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3834,
                    "end": 3839
                  },
                  "typeArguments": null,
                  "start": 3834,
                  "end": 3839
                },
                "start": 3817,
                "end": 3839
              },
              {
                "type": "Literal",
                "value": "some string",
                "raw": "\"some string\"",
                "start": 3845,
                "end": 3858
              }
            ],
            "optional": false,
            "start": 3756,
            "end": 3860
          },
          "definite": false,
          "start": 3743,
          "end": 3860
        }
      ],
      "declare": false,
      "start": 3737,
      "end": 3861
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 3948,
        "end": 3950
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 3957,
              "end": 3958
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 3967,
                "end": 3970
              },
              "start": 3967,
              "end": 3972
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 3951,
            "end": 3972
          }
        ],
        "start": 3950,
        "end": 3973
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 3977,
            "end": 3981
          },
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
                "start": 3983,
                "end": 3984
              },
              "typeArguments": null,
              "start": 3983,
              "end": 3984
            },
            "start": 3981,
            "end": 3984
          },
          "value": null,
          "start": 3974,
          "end": 3984
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3987,
            "end": 3988
          },
          "typeArguments": null,
          "start": 3987,
          "end": 3988
        },
        "start": 3985,
        "end": 3988
      },
      "body": null,
      "expression": false,
      "start": 3931,
      "end": 3989
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
            "start": 3997,
            "end": 3998
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 4001,
              "end": 4003
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 4004,
                "end": 4007
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 4009,
                "end": 4014
              }
            ],
            "optional": false,
            "start": 4001,
            "end": 4015
          },
          "definite": false,
          "start": 3997,
          "end": 4015
        }
      ],
      "declare": false,
      "start": 3991,
      "end": 4016
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4081,
        "end": 4084
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4091,
              "end": 4092
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 4101,
                "end": 4108
              },
              "start": 4101,
              "end": 4110
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4085,
            "end": 4110
          }
        ],
        "start": 4084,
        "end": 4111
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 4118,
                "end": 4119
              },
              "typeArguments": null,
              "start": 4118,
              "end": 4119
            },
            "start": 4116,
            "end": 4119
          },
          "start": 4112,
          "end": 4119
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4122,
            "end": 4123
          },
          "typeArguments": null,
          "start": 4122,
          "end": 4123
        },
        "start": 4120,
        "end": 4123
      },
      "body": null,
      "expression": false,
      "start": 4064,
      "end": 4124
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4142,
        "end": 4145
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4152,
              "end": 4153
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4171,
                  "end": 4178
                },
                "start": 4171,
                "end": 4180
              },
              "start": 4162,
              "end": 4180
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4146,
            "end": 4180
          }
        ],
        "start": 4145,
        "end": 4181
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 4188,
                "end": 4189
              },
              "typeArguments": null,
              "start": 4188,
              "end": 4189
            },
            "start": 4186,
            "end": 4189
          },
          "start": 4182,
          "end": 4189
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4192,
            "end": 4193
          },
          "typeArguments": null,
          "start": 4192,
          "end": 4193
        },
        "start": 4190,
        "end": 4193
      },
      "body": null,
      "expression": false,
      "start": 4125,
      "end": 4194
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fa1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4196,
          "end": 4199
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 4201,
                "end": 4208
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 4210,
                "end": 4212
              }
            ],
            "start": 4200,
            "end": 4213
          }
        ],
        "optional": false,
        "start": 4196,
        "end": 4214
      },
      "directive": null,
      "start": 4196,
      "end": 4215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fa2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4216,
          "end": 4219
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 4221,
                "end": 4228
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 4230,
                "end": 4232
              }
            ],
            "start": 4220,
            "end": 4233
          }
        ],
        "optional": false,
        "start": 4216,
        "end": 4234
      },
      "directive": null,
      "start": 4216,
      "end": 4235
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fb1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4254,
        "end": 4257
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4264,
              "end": 4265
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 4274,
                "end": 4281
              },
              "start": 4274,
              "end": 4283
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4258,
            "end": 4283
          }
        ],
        "start": 4257,
        "end": 4284
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 4288,
            "end": 4292
          },
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
                "start": 4294,
                "end": 4295
              },
              "typeArguments": null,
              "start": 4294,
              "end": 4295
            },
            "start": 4292,
            "end": 4295
          },
          "value": null,
          "start": 4285,
          "end": 4295
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4298,
            "end": 4299
          },
          "typeArguments": null,
          "start": 4298,
          "end": 4299
        },
        "start": 4296,
        "end": 4299
      },
      "body": null,
      "expression": false,
      "start": 4237,
      "end": 4300
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fb2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4318,
        "end": 4321
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4328,
              "end": 4329
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4347,
                  "end": 4354
                },
                "start": 4347,
                "end": 4356
              },
              "start": 4338,
              "end": 4356
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4322,
            "end": 4356
          }
        ],
        "start": 4321,
        "end": 4357
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 4361,
            "end": 4365
          },
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
                "start": 4367,
                "end": 4368
              },
              "typeArguments": null,
              "start": 4367,
              "end": 4368
            },
            "start": 4365,
            "end": 4368
          },
          "value": null,
          "start": 4358,
          "end": 4368
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4371,
            "end": 4372
          },
          "typeArguments": null,
          "start": 4371,
          "end": 4372
        },
        "start": 4369,
        "end": 4372
      },
      "body": null,
      "expression": false,
      "start": 4301,
      "end": 4373
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fb1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4375,
          "end": 4378
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 4379,
            "end": 4386
          },
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 4388,
            "end": 4390
          }
        ],
        "optional": false,
        "start": 4375,
        "end": 4391
      },
      "directive": null,
      "start": 4375,
      "end": 4392
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fb2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4393,
          "end": 4396
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 4397,
            "end": 4404
          },
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 4406,
            "end": 4408
          }
        ],
        "optional": false,
        "start": 4393,
        "end": 4409
      },
      "directive": null,
      "start": 4393,
      "end": 4410
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fc1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4429,
        "end": 4432
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4439,
              "end": 4440
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 4449,
                "end": 4456
              },
              "start": 4449,
              "end": 4458
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4433,
            "end": 4458
          }
        ],
        "start": 4432,
        "end": 4459
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4467,
                    "end": 4471
                  },
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
                        "start": 4473,
                        "end": 4474
                      },
                      "typeArguments": null,
                      "start": 4473,
                      "end": 4474
                    },
                    "start": 4471,
                    "end": 4474
                  },
                  "value": null,
                  "start": 4464,
                  "end": 4474
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4479,
                  "end": 4483
                },
                "start": 4476,
                "end": 4483
              },
              "start": 4463,
              "end": 4483
            },
            "start": 4461,
            "end": 4483
          },
          "start": 4460,
          "end": 4483
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 4488,
            "end": 4492
          },
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
                "start": 4494,
                "end": 4495
              },
              "typeArguments": null,
              "start": 4494,
              "end": 4495
            },
            "start": 4492,
            "end": 4495
          },
          "value": null,
          "start": 4485,
          "end": 4495
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4498,
            "end": 4499
          },
          "typeArguments": null,
          "start": 4498,
          "end": 4499
        },
        "start": 4496,
        "end": 4499
      },
      "body": null,
      "expression": false,
      "start": 4412,
      "end": 4500
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fc2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4518,
        "end": 4521
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4528,
              "end": 4529
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4547,
                  "end": 4554
                },
                "start": 4547,
                "end": 4556
              },
              "start": 4538,
              "end": 4556
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4522,
            "end": 4556
          }
        ],
        "start": 4521,
        "end": 4557
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4565,
                    "end": 4569
                  },
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
                        "start": 4571,
                        "end": 4572
                      },
                      "typeArguments": null,
                      "start": 4571,
                      "end": 4572
                    },
                    "start": 4569,
                    "end": 4572
                  },
                  "value": null,
                  "start": 4562,
                  "end": 4572
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4577,
                  "end": 4581
                },
                "start": 4574,
                "end": 4581
              },
              "start": 4561,
              "end": 4581
            },
            "start": 4559,
            "end": 4581
          },
          "start": 4558,
          "end": 4581
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 4586,
            "end": 4590
          },
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
                "start": 4592,
                "end": 4593
              },
              "typeArguments": null,
              "start": 4592,
              "end": 4593
            },
            "start": 4590,
            "end": 4593
          },
          "value": null,
          "start": 4583,
          "end": 4593
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4596,
            "end": 4597
          },
          "typeArguments": null,
          "start": 4596,
          "end": 4597
        },
        "start": 4594,
        "end": 4597
      },
      "body": null,
      "expression": false,
      "start": 4501,
      "end": 4598
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fc1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4600,
          "end": 4603
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "type": "TSStringKeyword",
                    "start": 4608,
                    "end": 4614
                  },
                  "start": 4606,
                  "end": 4614
                },
                "start": 4605,
                "end": 4614
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 4619,
                    "end": 4625
                  },
                  "start": 4617,
                  "end": 4625
                },
                "start": 4616,
                "end": 4625
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 4630,
              "end": 4632
            },
            "id": null,
            "generator": false,
            "start": 4604,
            "end": 4632
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 4634,
            "end": 4641
          },
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 4643,
            "end": 4645
          }
        ],
        "optional": false,
        "start": 4600,
        "end": 4646
      },
      "directive": null,
      "start": 4600,
      "end": 4647
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fc2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4648,
          "end": 4651
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "type": "TSStringKeyword",
                    "start": 4656,
                    "end": 4662
                  },
                  "start": 4654,
                  "end": 4662
                },
                "start": 4653,
                "end": 4662
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 4667,
                    "end": 4673
                  },
                  "start": 4665,
                  "end": 4673
                },
                "start": 4664,
                "end": 4673
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 4678,
              "end": 4680
            },
            "id": null,
            "generator": false,
            "start": 4652,
            "end": 4680
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 4682,
            "end": 4689
          },
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 4691,
            "end": 4693
          }
        ],
        "optional": false,
        "start": 4648,
        "end": 4694
      },
      "directive": null,
      "start": 4648,
      "end": 4695
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fd1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4714,
        "end": 4717
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4724,
              "end": 4725
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 4734,
                    "end": 4740
                  },
                  "start": 4734,
                  "end": 4742
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 4745,
                    "end": 4751
                  },
                  "start": 4745,
                  "end": 4753
                }
              ],
              "start": 4734,
              "end": 4753
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4718,
            "end": 4753
          }
        ],
        "start": 4717,
        "end": 4754
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 4761,
                "end": 4762
              },
              "typeArguments": null,
              "start": 4761,
              "end": 4762
            },
            "start": 4759,
            "end": 4762
          },
          "start": 4755,
          "end": 4762
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4765,
            "end": 4766
          },
          "typeArguments": null,
          "start": 4765,
          "end": 4766
        },
        "start": 4763,
        "end": 4766
      },
      "body": null,
      "expression": false,
      "start": 4697,
      "end": 4767
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fd2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4785,
        "end": 4788
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4795,
              "end": 4796
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 4805,
                    "end": 4811
                  },
                  "start": 4805,
                  "end": 4813
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 4825,
                      "end": 4831
                    },
                    "start": 4825,
                    "end": 4833
                  },
                  "start": 4816,
                  "end": 4833
                }
              ],
              "start": 4805,
              "end": 4833
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4789,
            "end": 4833
          }
        ],
        "start": 4788,
        "end": 4834
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 4841,
                "end": 4842
              },
              "typeArguments": null,
              "start": 4841,
              "end": 4842
            },
            "start": 4839,
            "end": 4842
          },
          "start": 4835,
          "end": 4842
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4845,
            "end": 4846
          },
          "typeArguments": null,
          "start": 4845,
          "end": 4846
        },
        "start": 4843,
        "end": 4846
      },
      "body": null,
      "expression": false,
      "start": 4768,
      "end": 4847
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fd3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4865,
        "end": 4868
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4875,
              "end": 4876
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 4894,
                      "end": 4900
                    },
                    "start": 4894,
                    "end": 4902
                  },
                  "start": 4885,
                  "end": 4902
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 4914,
                      "end": 4920
                    },
                    "start": 4914,
                    "end": 4922
                  },
                  "start": 4905,
                  "end": 4922
                }
              ],
              "start": 4885,
              "end": 4922
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4869,
            "end": 4922
          }
        ],
        "start": 4868,
        "end": 4923
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 4930,
                "end": 4931
              },
              "typeArguments": null,
              "start": 4930,
              "end": 4931
            },
            "start": 4928,
            "end": 4931
          },
          "start": 4924,
          "end": 4931
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4934,
            "end": 4935
          },
          "typeArguments": null,
          "start": 4934,
          "end": 4935
        },
        "start": 4932,
        "end": 4935
      },
      "body": null,
      "expression": false,
      "start": 4848,
      "end": 4936
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4938,
          "end": 4941
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 4943,
                "end": 4950
              },
              {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 4952,
                "end": 4959
              }
            ],
            "start": 4942,
            "end": 4960
          }
        ],
        "optional": false,
        "start": 4938,
        "end": 4961
      },
      "directive": null,
      "start": 4938,
      "end": 4962
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4963,
          "end": 4966
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4968,
                "end": 4969
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 4971,
                "end": 4972
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 4974,
                "end": 4975
              }
            ],
            "start": 4967,
            "end": 4976
          }
        ],
        "optional": false,
        "start": 4963,
        "end": 4977
      },
      "directive": null,
      "start": 4963,
      "end": 4978
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4979,
          "end": 4982
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 4984,
                "end": 4991
              },
              {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 4993,
                "end": 5000
              }
            ],
            "start": 4983,
            "end": 5001
          }
        ],
        "optional": false,
        "start": 4979,
        "end": 5002
      },
      "directive": null,
      "start": 4979,
      "end": 5003
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd2",
          "optional": false,
          "typeAnnotation": null,
          "start": 5004,
          "end": 5007
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 5009,
                "end": 5010
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 5012,
                "end": 5013
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 5015,
                "end": 5016
              }
            ],
            "start": 5008,
            "end": 5017
          }
        ],
        "optional": false,
        "start": 5004,
        "end": 5018
      },
      "directive": null,
      "start": 5004,
      "end": 5019
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd3",
          "optional": false,
          "typeAnnotation": null,
          "start": 5020,
          "end": 5023
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 5025,
                "end": 5032
              },
              {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 5034,
                "end": 5041
              }
            ],
            "start": 5024,
            "end": 5042
          }
        ],
        "optional": false,
        "start": 5020,
        "end": 5043
      },
      "directive": null,
      "start": 5020,
      "end": 5044
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd3",
          "optional": false,
          "typeAnnotation": null,
          "start": 5045,
          "end": 5048
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 5050,
                "end": 5051
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 5053,
                "end": 5054
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 5056,
                "end": 5057
              }
            ],
            "start": 5049,
            "end": 5058
          }
        ],
        "optional": false,
        "start": 5045,
        "end": 5059
      },
      "directive": null,
      "start": 5045,
      "end": 5060
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5079,
        "end": 5082
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 5089,
              "end": 5090
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
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
                      "start": 5101,
                      "end": 5104
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSUnknownKeyword",
                          "start": 5106,
                          "end": 5113
                        },
                        "start": 5106,
                        "end": 5115
                      },
                      "start": 5104,
                      "end": 5115
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 5101,
                    "end": 5115
                  }
                ],
                "start": 5099,
                "end": 5117
              },
              "start": 5099,
              "end": 5119
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 5083,
            "end": 5119
          }
        ],
        "start": 5082,
        "end": 5120
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 5124,
            "end": 5128
          },
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
                "start": 5130,
                "end": 5131
              },
              "typeArguments": null,
              "start": 5130,
              "end": 5131
            },
            "start": 5128,
            "end": 5131
          },
          "value": null,
          "start": 5121,
          "end": 5131
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5134,
            "end": 5135
          },
          "typeArguments": null,
          "start": 5134,
          "end": 5135
        },
        "start": 5132,
        "end": 5135
      },
      "body": null,
      "expression": false,
      "start": 5062,
      "end": 5136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 5138,
          "end": 5141
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5144,
                  "end": 5147
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 5150,
                      "end": 5157
                    },
                    {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 5159,
                      "end": 5162
                    }
                  ],
                  "start": 5149,
                  "end": 5163
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5144,
                "end": 5163
              }
            ],
            "start": 5142,
            "end": 5165
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5169,
                  "end": 5172
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 5175,
                      "end": 5179
                    }
                  ],
                  "start": 5174,
                  "end": 5180
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5169,
                "end": 5180
              }
            ],
            "start": 5167,
            "end": 5181
          }
        ],
        "optional": false,
        "start": 5138,
        "end": 5182
      },
      "directive": null,
      "start": 5138,
      "end": 5183
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5183
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 20,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 40,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "x12",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 76,
    "end": 77
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "x13",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 134,
    "end": 135
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 162,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 179,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 182,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 201,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "const",
    "start": 217,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "x21",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 232,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 238,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "x22",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 253,
    "end": 254
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 259,
    "end": 260
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 260,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 273,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "x23",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 299,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 327,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 339,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 347,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 359,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 381,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "x31",
    "start": 387,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 396,
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
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 406,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "x32",
    "start": 412,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 421,
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
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 432,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 440,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 449,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 452,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 479,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "x41",
    "start": 485,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 491,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 495,
    "end": 496
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 499,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "[",
    "start": 505,
    "end": 506
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 507,
    "end": 508
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 509,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 517,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "x42",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "String",
    "value": "'x'",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "b",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 562,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 572,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 580,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 589,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 592,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 601,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 627,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "x51",
    "start": 633,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 639,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 647,
    "end": 648
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 649,
    "end": 650
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 651,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 660,
    "end": 661
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 662,
    "end": 663
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 664,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 673,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "x52",
    "start": 679,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 685,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "1",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 704,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 711,
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
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Numeric",
    "value": "2",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 725,
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
    "value": "}",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 736,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 744,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 753,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 756,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 764,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 772,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 781,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 792,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "const",
    "start": 809,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "x61",
    "start": 815,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 821,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 825,
    "end": 826
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 827,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 841,
    "end": 842
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 843,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 851,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "x62",
    "start": 857,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 863,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 866,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 869,
    "end": 870
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 871,
    "end": 872
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 873,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 880,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "x63",
    "start": 886,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 892,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 894,
    "end": 895
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 895,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 901,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 904,
    "end": 905
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 906,
    "end": 907
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 908,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 915,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "x64",
    "start": 921,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 927,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 930,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 934,
    "end": 935
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 936,
    "end": 937
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 938,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 946,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "x65",
    "start": 952,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 958,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 961,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 967,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 971,
    "end": 972
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 973,
    "end": 974
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 975,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ")",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 984,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 990,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 992,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 993,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1008,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1037,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1054,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1069,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "c71",
    "start": 1075,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1081,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1085,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1099,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1116,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 1127,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 1138,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "c72",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "c71",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1154,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1159,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1165,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 1170,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1174,
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
    "value": ";",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1179,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1190,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1197,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1210,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "fx1",
    "start": 1216,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1223,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1238,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1244,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "fx2",
    "start": 1250,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1257,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1273,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1280,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 1290,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1293,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1322,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1332,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1343,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1365,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1370,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1373,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "type",
    "start": 1398,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1403,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1409,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1424,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1430,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 1435,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1443,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1464,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 1469,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1474,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1479,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1494,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1500,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 1505,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1512,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1517,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1571,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1576,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "String",
    "value": "\"123\"",
    "start": 1597,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1611,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "GetPath",
    "start": 1616,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1638,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1646,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1670,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1678,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1688,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1696,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1704,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1713,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1716,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 1722,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "GetPath",
    "start": 1730,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 1744,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1756,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1764,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1773,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1780,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1788,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1796,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1805,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1815,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 1823,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1832,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "GetPath",
    "start": 1839,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1858,
    "end": 1865
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1866,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1870,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1875,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1880,
    "end": 1887
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1888,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1892,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "String",
    "value": "\"123\"",
    "start": 1899,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1907,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1911,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1917,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1922,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 1927,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1933,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1964,
    "end": 1971
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1972,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "inners",
    "start": 1981,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1988,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1996,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2004,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2013,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2020,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2023,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2029,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2039,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2048,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2054,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2069,
    "end": 2074
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 2075,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "inners",
    "start": 2082,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2102,
    "end": 2109
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2110,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "inners2",
    "start": 2119,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2127,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2135,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2143,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2152,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2159,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2165,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2175,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2184,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2190,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2205,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 2211,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "inners2",
    "start": 2219,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2264,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "NotEmpty",
    "start": 2269,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2280,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2288,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2295,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2303,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2311,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2319,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2327,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2335,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2347,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 2353,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2362,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2370,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2378,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2385,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2393,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "NotEmpty",
    "start": 2402,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2415,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2422,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 2432,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2440,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "String",
    "value": "''",
    "start": 2445,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2448,
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
    "value": ";",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2478,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "NotEmptyMapped",
    "start": 2483,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2500,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2508,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2515,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2523,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2531,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2539,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2547,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2555,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2568,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2571,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2590,
    "end": 2595
  },
  {
    "type": "Identifier",
    "value": "thingMapped",
    "start": 2596,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2611,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2619,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2627,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2634,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2642,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "NotEmptyMapped",
    "start": 2651,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2670,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2677,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "tMapped",
    "start": 2683,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "thingMapped",
    "start": 2693,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2707,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "String",
    "value": "''",
    "start": 2712,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2804,
    "end": 2812
  },
  {
    "type": "Identifier",
    "value": "factory_55033_minimal",
    "start": 2813,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2835,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2843,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2851,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2860,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2871,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2876,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2879,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2888,
    "end": 2890
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2891,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2903,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2913,
    "end": 2915
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2921,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "test_55033_minimal",
    "start": 2927,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "factory_55033_minimal",
    "start": 2948,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2974,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2982,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2990,
    "end": 2998
  },
  {
    "type": "Identifier",
    "value": "factory_55033",
    "start": 2999,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3013,
    "end": 3018
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3021,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3029,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3038,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3049,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3054,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3057,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3066,
    "end": 3068
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3069,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3081,
    "end": 3087
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3088,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 3097,
    "end": 3101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3102,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3110,
    "end": 3117
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3121,
    "end": 3124
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3124,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3146,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3156,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3172,
    "end": 3177
  },
  {
    "type": "Identifier",
    "value": "t1_55033",
    "start": 3178,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Identifier",
    "value": "factory_55033",
    "start": 3189,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3209,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3215,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3228,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3236,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3250,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3256,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "String",
    "value": "\"some string\"",
    "start": 3267,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3285,
    "end": 3290
  },
  {
    "type": "Identifier",
    "value": "t2_55033",
    "start": 3291,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Identifier",
    "value": "factory_55033",
    "start": 3302,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3322,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3328,
    "end": 3334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3338,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3341,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3349,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3363,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3369,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3375,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3378,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "String",
    "value": "\"some string\"",
    "start": 3389,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3445,
    "end": 3453
  },
  {
    "type": "Identifier",
    "value": "factory_55033_2",
    "start": 3454,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3470,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3478,
    "end": 3485
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3486,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3497,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3502,
    "end": 3505
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3505,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3514,
    "end": 3516
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3517,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3529,
    "end": 3535
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3536,
    "end": 3544
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 3545,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3550,
    "end": 3555
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3558,
    "end": 3565
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3569,
    "end": 3572
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3572,
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
    "value": "K",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3580,
    "end": 3581
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3584,
    "end": 3585
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3594,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3604,
    "end": 3606
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3620,
    "end": 3625
  },
  {
    "type": "Identifier",
    "value": "t1_55033_2",
    "start": 3626,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "factory_55033_2",
    "start": 3639,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3661,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3667,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3678,
    "end": 3679
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3680,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3688,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3694,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3702,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3708,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "String",
    "value": "\"some string\"",
    "start": 3719,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3737,
    "end": 3742
  },
  {
    "type": "Identifier",
    "value": "t2_55033_2",
    "start": 3743,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Identifier",
    "value": "factory_55033_2",
    "start": 3756,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3772,
    "end": 3773
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3776,
    "end": 3777
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3778,
    "end": 3782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3782,
    "end": 3783
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3784,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3797,
    "end": 3803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3805,
    "end": 3807
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3808,
    "end": 3809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3811,
    "end": 3812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3819,
    "end": 3823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3825,
    "end": 3828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3831,
    "end": 3833
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3834,
    "end": 3839
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3839,
    "end": 3840
  },
  {
    "type": "String",
    "value": "\"some string\"",
    "start": 3845,
    "end": 3858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3931,
    "end": 3938
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3939,
    "end": 3947
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 3948,
    "end": 3950
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3951,
    "end": 3956
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3959,
    "end": 3966
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3967,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3973,
    "end": 3974
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3974,
    "end": 3977
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3977,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3987,
    "end": 3988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3988,
    "end": 3989
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3991,
    "end": 3996
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3999,
    "end": 4000
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 4001,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4004,
    "end": 4007
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4007,
    "end": 4008
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 4009,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4064,
    "end": 4071
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4072,
    "end": 4080
  },
  {
    "type": "Identifier",
    "value": "fa1",
    "start": 4081,
    "end": 4084
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4084,
    "end": 4085
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4085,
    "end": 4090
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4093,
    "end": 4100
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4101,
    "end": 4108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4111,
    "end": 4112
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4112,
    "end": 4116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4116,
    "end": 4117
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4119,
    "end": 4120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4123,
    "end": 4124
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4125,
    "end": 4132
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4133,
    "end": 4141
  },
  {
    "type": "Identifier",
    "value": "fa2",
    "start": 4142,
    "end": 4145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4146,
    "end": 4151
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4154,
    "end": 4161
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4162,
    "end": 4170
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4171,
    "end": 4178
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4178,
    "end": 4179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4179,
    "end": 4180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4180,
    "end": 4181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4181,
    "end": 4182
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4182,
    "end": 4186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4186,
    "end": 4187
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4188,
    "end": 4189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4189,
    "end": 4190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4190,
    "end": 4191
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4192,
    "end": 4193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4193,
    "end": 4194
  },
  {
    "type": "Identifier",
    "value": "fa1",
    "start": 4196,
    "end": 4199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4199,
    "end": 4200
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4201,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4208,
    "end": 4209
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4210,
    "end": 4212
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4213,
    "end": 4214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4214,
    "end": 4215
  },
  {
    "type": "Identifier",
    "value": "fa2",
    "start": 4216,
    "end": 4219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4219,
    "end": 4220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4220,
    "end": 4221
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4221,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4228,
    "end": 4229
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4230,
    "end": 4232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4232,
    "end": 4233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4233,
    "end": 4234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4237,
    "end": 4244
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4245,
    "end": 4253
  },
  {
    "type": "Identifier",
    "value": "fb1",
    "start": 4254,
    "end": 4257
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4258,
    "end": 4263
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4264,
    "end": 4265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4266,
    "end": 4273
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4274,
    "end": 4281
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4283,
    "end": 4284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4284,
    "end": 4285
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4285,
    "end": 4288
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4288,
    "end": 4292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4292,
    "end": 4293
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4296,
    "end": 4297
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4298,
    "end": 4299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4299,
    "end": 4300
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4301,
    "end": 4308
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4309,
    "end": 4317
  },
  {
    "type": "Identifier",
    "value": "fb2",
    "start": 4318,
    "end": 4321
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4321,
    "end": 4322
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4322,
    "end": 4327
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4328,
    "end": 4329
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4330,
    "end": 4337
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4338,
    "end": 4346
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4347,
    "end": 4354
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4354,
    "end": 4355
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4356,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4358,
    "end": 4361
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4361,
    "end": 4365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4365,
    "end": 4366
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4367,
    "end": 4368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4369,
    "end": 4370
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4372,
    "end": 4373
  },
  {
    "type": "Identifier",
    "value": "fb1",
    "start": 4375,
    "end": 4378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4379,
    "end": 4386
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4386,
    "end": 4387
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4388,
    "end": 4390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4390,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Identifier",
    "value": "fb2",
    "start": 4393,
    "end": 4396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4396,
    "end": 4397
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4397,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4406,
    "end": 4408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4408,
    "end": 4409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4412,
    "end": 4419
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4420,
    "end": 4428
  },
  {
    "type": "Identifier",
    "value": "fc1",
    "start": 4429,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4433,
    "end": 4438
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4439,
    "end": 4440
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4441,
    "end": 4448
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4449,
    "end": 4456
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4456,
    "end": 4457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4457,
    "end": 4458
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4458,
    "end": 4459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4459,
    "end": 4460
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4460,
    "end": 4461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4461,
    "end": 4462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4464,
    "end": 4467
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4467,
    "end": 4471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4471,
    "end": 4472
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4473,
    "end": 4474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4474,
    "end": 4475
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4476,
    "end": 4478
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4479,
    "end": 4483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4483,
    "end": 4484
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4485,
    "end": 4488
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4488,
    "end": 4492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4492,
    "end": 4493
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4494,
    "end": 4495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4495,
    "end": 4496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4496,
    "end": 4497
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4499,
    "end": 4500
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4501,
    "end": 4508
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4509,
    "end": 4517
  },
  {
    "type": "Identifier",
    "value": "fc2",
    "start": 4518,
    "end": 4521
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4522,
    "end": 4527
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4530,
    "end": 4537
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4538,
    "end": 4546
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4547,
    "end": 4554
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4554,
    "end": 4555
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4555,
    "end": 4556
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4556,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4558,
    "end": 4559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4559,
    "end": 4560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4561,
    "end": 4562
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4562,
    "end": 4565
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4565,
    "end": 4569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4569,
    "end": 4570
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4571,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4574,
    "end": 4576
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4577,
    "end": 4581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4581,
    "end": 4582
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4583,
    "end": 4586
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4586,
    "end": 4590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4590,
    "end": 4591
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4592,
    "end": 4593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4593,
    "end": 4594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4594,
    "end": 4595
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4596,
    "end": 4597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4597,
    "end": 4598
  },
  {
    "type": "Identifier",
    "value": "fc1",
    "start": 4600,
    "end": 4603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4603,
    "end": 4604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4604,
    "end": 4605
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4605,
    "end": 4606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4606,
    "end": 4607
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4608,
    "end": 4614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4616,
    "end": 4617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4617,
    "end": 4618
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4619,
    "end": 4625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4625,
    "end": 4626
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4627,
    "end": 4629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4630,
    "end": 4631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4631,
    "end": 4632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4632,
    "end": 4633
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4634,
    "end": 4641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4641,
    "end": 4642
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4643,
    "end": 4645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4645,
    "end": 4646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4646,
    "end": 4647
  },
  {
    "type": "Identifier",
    "value": "fc2",
    "start": 4648,
    "end": 4651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4651,
    "end": 4652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4652,
    "end": 4653
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4656,
    "end": 4662
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4662,
    "end": 4663
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4664,
    "end": 4665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4665,
    "end": 4666
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4667,
    "end": 4673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4673,
    "end": 4674
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4675,
    "end": 4677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4678,
    "end": 4679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4679,
    "end": 4680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4680,
    "end": 4681
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4682,
    "end": 4689
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4689,
    "end": 4690
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4691,
    "end": 4693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4693,
    "end": 4694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4694,
    "end": 4695
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4697,
    "end": 4704
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4705,
    "end": 4713
  },
  {
    "type": "Identifier",
    "value": "fd1",
    "start": 4714,
    "end": 4717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4717,
    "end": 4718
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4718,
    "end": 4723
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4724,
    "end": 4725
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4726,
    "end": 4733
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4734,
    "end": 4740
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4740,
    "end": 4741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4741,
    "end": 4742
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4743,
    "end": 4744
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4745,
    "end": 4751
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4751,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4753,
    "end": 4754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4754,
    "end": 4755
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4755,
    "end": 4759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4759,
    "end": 4760
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4761,
    "end": 4762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4762,
    "end": 4763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4763,
    "end": 4764
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4765,
    "end": 4766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4766,
    "end": 4767
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4768,
    "end": 4775
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4776,
    "end": 4784
  },
  {
    "type": "Identifier",
    "value": "fd2",
    "start": 4785,
    "end": 4788
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4788,
    "end": 4789
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4789,
    "end": 4794
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4795,
    "end": 4796
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4797,
    "end": 4804
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4805,
    "end": 4811
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4811,
    "end": 4812
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4812,
    "end": 4813
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4814,
    "end": 4815
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4816,
    "end": 4824
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4825,
    "end": 4831
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4831,
    "end": 4832
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4832,
    "end": 4833
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4833,
    "end": 4834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4834,
    "end": 4835
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4835,
    "end": 4839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4839,
    "end": 4840
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4841,
    "end": 4842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4842,
    "end": 4843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4843,
    "end": 4844
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4845,
    "end": 4846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4846,
    "end": 4847
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4848,
    "end": 4855
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4856,
    "end": 4864
  },
  {
    "type": "Identifier",
    "value": "fd3",
    "start": 4865,
    "end": 4868
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4868,
    "end": 4869
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4869,
    "end": 4874
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4875,
    "end": 4876
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4877,
    "end": 4884
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4885,
    "end": 4893
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4894,
    "end": 4900
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4900,
    "end": 4901
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4901,
    "end": 4902
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4903,
    "end": 4904
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4905,
    "end": 4913
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4914,
    "end": 4920
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4920,
    "end": 4921
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4921,
    "end": 4922
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4922,
    "end": 4923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4923,
    "end": 4924
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4924,
    "end": 4928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4928,
    "end": 4929
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4930,
    "end": 4931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4931,
    "end": 4932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4932,
    "end": 4933
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4934,
    "end": 4935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4935,
    "end": 4936
  },
  {
    "type": "Identifier",
    "value": "fd1",
    "start": 4938,
    "end": 4941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4941,
    "end": 4942
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4943,
    "end": 4950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4950,
    "end": 4951
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 4952,
    "end": 4959
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4959,
    "end": 4960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4960,
    "end": 4961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4961,
    "end": 4962
  },
  {
    "type": "Identifier",
    "value": "fd1",
    "start": 4963,
    "end": 4966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4966,
    "end": 4967
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4967,
    "end": 4968
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4968,
    "end": 4969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4969,
    "end": 4970
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4971,
    "end": 4972
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4972,
    "end": 4973
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4974,
    "end": 4975
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4975,
    "end": 4976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4976,
    "end": 4977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4977,
    "end": 4978
  },
  {
    "type": "Identifier",
    "value": "fd2",
    "start": 4979,
    "end": 4982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4982,
    "end": 4983
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4983,
    "end": 4984
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4984,
    "end": 4991
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4991,
    "end": 4992
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 4993,
    "end": 5000
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5000,
    "end": 5001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5001,
    "end": 5002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5002,
    "end": 5003
  },
  {
    "type": "Identifier",
    "value": "fd2",
    "start": 5004,
    "end": 5007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5007,
    "end": 5008
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5008,
    "end": 5009
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5009,
    "end": 5010
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5010,
    "end": 5011
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5012,
    "end": 5013
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5013,
    "end": 5014
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 5015,
    "end": 5016
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5016,
    "end": 5017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5017,
    "end": 5018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5018,
    "end": 5019
  },
  {
    "type": "Identifier",
    "value": "fd3",
    "start": 5020,
    "end": 5023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5023,
    "end": 5024
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5024,
    "end": 5025
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 5025,
    "end": 5032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5032,
    "end": 5033
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 5034,
    "end": 5041
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5041,
    "end": 5042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5042,
    "end": 5043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5043,
    "end": 5044
  },
  {
    "type": "Identifier",
    "value": "fd3",
    "start": 5045,
    "end": 5048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5048,
    "end": 5049
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5049,
    "end": 5050
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5050,
    "end": 5051
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5051,
    "end": 5052
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5053,
    "end": 5054
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5054,
    "end": 5055
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 5056,
    "end": 5057
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5057,
    "end": 5058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5058,
    "end": 5059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5059,
    "end": 5060
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5062,
    "end": 5069
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5070,
    "end": 5078
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 5079,
    "end": 5082
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5082,
    "end": 5083
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5083,
    "end": 5088
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5089,
    "end": 5090
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5091,
    "end": 5098
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5099,
    "end": 5100
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5101,
    "end": 5104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5104,
    "end": 5105
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5106,
    "end": 5113
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5113,
    "end": 5114
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5114,
    "end": 5115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5116,
    "end": 5117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5117,
    "end": 5118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5118,
    "end": 5119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5119,
    "end": 5120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5120,
    "end": 5121
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 5121,
    "end": 5124
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 5124,
    "end": 5128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5128,
    "end": 5129
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5130,
    "end": 5131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5131,
    "end": 5132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5132,
    "end": 5133
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5134,
    "end": 5135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5135,
    "end": 5136
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 5138,
    "end": 5141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5141,
    "end": 5142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5142,
    "end": 5143
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5144,
    "end": 5147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5147,
    "end": 5148
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5149,
    "end": 5150
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 5150,
    "end": 5157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5157,
    "end": 5158
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 5159,
    "end": 5162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5162,
    "end": 5163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5164,
    "end": 5165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5165,
    "end": 5166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5167,
    "end": 5168
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5169,
    "end": 5172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5172,
    "end": 5173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5174,
    "end": 5175
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5175,
    "end": 5179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5179,
    "end": 5180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5180,
    "end": 5181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5182,
    "end": 5183
  }
]
```
