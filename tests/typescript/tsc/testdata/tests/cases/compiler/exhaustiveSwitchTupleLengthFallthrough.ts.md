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
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 25,
                    "end": 26
                  },
                  "start": 25,
                  "end": 26
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 38,
                        "end": 44
                      }
                    ],
                    "start": 37,
                    "end": 45
                  },
                  "start": 28,
                  "end": 45
                }
              ],
              "start": 24,
              "end": 46
            },
            "start": 15,
            "end": 46
          },
          {
            "type": "TSTypeOperator",
            "operator": "readonly",
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
                        "value": 0,
                        "raw": "0",
                        "start": 63,
                        "end": 64
                      },
                      "start": 63,
                      "end": 64
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 67,
                        "end": 68
                      },
                      "start": 67,
                      "end": 68
                    }
                  ],
                  "start": 63,
                  "end": 68
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 80,
                        "end": 86
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 88,
                        "end": 94
                      }
                    ],
                    "start": 79,
                    "end": 95
                  },
                  "start": 70,
                  "end": 95
                }
              ],
              "start": 62,
              "end": 96
            },
            "start": 53,
            "end": 96
          },
          {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 113,
                    "end": 114
                  },
                  "start": 113,
                  "end": 114
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 126,
                        "end": 132
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 134,
                        "end": 140
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 142,
                        "end": 148
                      }
                    ],
                    "start": 125,
                    "end": 149
                  },
                  "start": 116,
                  "end": 149
                }
              ],
              "start": 112,
              "end": 150
            },
            "start": 103,
            "end": 150
          }
        ],
        "start": 13,
        "end": 150
      },
      "declare": false,
      "start": 0,
      "end": 151
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 160
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 169
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 173
                    },
                    "typeArguments": null,
                    "start": 172,
                    "end": 173
                  },
                  "start": 170,
                  "end": 173
                },
                "start": 164,
                "end": 173
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 176,
                "end": 185
              },
              "start": 174,
              "end": 185
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 204
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 221,
                        "end": 222
                      },
                      "consequent": [
                        {
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
                                  "start": 246,
                                  "end": 247
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 248,
                                  "end": 254
                                },
                                "optional": false,
                                "computed": false,
                                "start": 246,
                                "end": 254
                              },
                              "cases": [
                                {
                                  "type": "SwitchCase",
                                  "test": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 279,
                                    "end": 280
                                  },
                                  "consequent": [],
                                  "start": 274,
                                  "end": 281
                                },
                                {
                                  "type": "SwitchCase",
                                  "test": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "start": 287,
                                    "end": 288
                                  },
                                  "consequent": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 297,
                                        "end": 306
                                      },
                                      "start": 290,
                                      "end": 307
                                    }
                                  ],
                                  "start": 282,
                                  "end": 307
                                }
                              ],
                              "start": 238,
                              "end": 321
                            }
                          ],
                          "start": 224,
                          "end": 331
                        }
                      ],
                      "start": 216,
                      "end": 331
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 345,
                        "end": 346
                      },
                      "consequent": [
                        {
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
                                    "name": "_",
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
                                              "value": 2,
                                              "raw": "2",
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
                                              "value": 3,
                                              "raw": "3",
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
                                    "start": 368,
                                    "end": 376
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 379,
                                      "end": 380
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 381,
                                      "end": 387
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 379,
                                    "end": 387
                                  },
                                  "definite": false,
                                  "start": 368,
                                  "end": 387
                                }
                              ],
                              "declare": false,
                              "start": 362,
                              "end": 388
                            }
                          ],
                          "start": 348,
                          "end": 398
                        }
                      ],
                      "start": 340,
                      "end": 398
                    }
                  ],
                  "start": 195,
                  "end": 404
                }
              ],
              "start": 189,
              "end": 406
            },
            "id": null,
            "generator": false,
            "start": 163,
            "end": 406
          },
          "definite": false,
          "start": 159,
          "end": 406
        }
      ],
      "declare": false,
      "start": 153,
      "end": 407
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 407
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
    "value": "F",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 15,
    "end": 23
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
    "type": "Identifier",
    "value": "readonly",
    "start": 28,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 53,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 62,
    "end": 63
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 65,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 70,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 103,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 112,
    "end": 113
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 116,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 176,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 216,
    "end": 220
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "length",
    "start": 248,
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
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 274,
    "end": 278
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 282,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 290,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 297,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 340,
    "end": 344
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 362,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "_",
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
    "type": "Numeric",
    "value": "2",
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
    "value": "3",
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
    "value": "x",
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
    "type": "Identifier",
    "value": "length",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 406,
    "end": 407
  }
]
```
