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
            "name": "sb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 19,
                    "end": 25
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 27,
                    "end": 34
                  }
                ],
                "start": 18,
                "end": 35
              },
              "start": 16,
              "end": 35
            },
            "start": 14,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 35
        }
      ],
      "declare": true,
      "start": 0,
      "end": 36
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
            "name": "k1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 63,
                    "end": 70
                  }
                ],
                "start": 46,
                "end": 71
              },
              "start": 44,
              "end": 71
            },
            "start": 42,
            "end": 71
          },
          "init": null,
          "definite": false,
          "start": 42,
          "end": 71
        }
      ],
      "declare": false,
      "start": 38,
      "end": 72
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 75
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 79,
              "end": 80
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sb",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 87
              },
              "start": 82,
              "end": 87
            }
          ],
          "start": 78,
          "end": 88
        },
        "start": 73,
        "end": 88
      },
      "directive": null,
      "start": 73,
      "end": 89
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 100,
                    "end": 106
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 108,
                    "end": 114
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 116,
                    "end": 123
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 125,
                    "end": 131
                  }
                ],
                "start": 99,
                "end": 132
              },
              "start": 97,
              "end": 132
            },
            "start": 95,
            "end": 132
          },
          "init": null,
          "definite": false,
          "start": 95,
          "end": 132
        }
      ],
      "declare": false,
      "start": 91,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 136
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 140,
              "end": 141
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sb",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 148
              },
              "start": 143,
              "end": 148
            },
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 150,
              "end": 151
            }
          ],
          "start": 139,
          "end": 152
        },
        "start": 134,
        "end": 152
      },
      "directive": null,
      "start": 134,
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
            "name": "sb_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 175,
                    "end": 181
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 186,
                        "end": 193
                      },
                      "start": 186,
                      "end": 195
                    },
                    "start": 183,
                    "end": 195
                  }
                ],
                "start": 174,
                "end": 196
              },
              "start": 172,
              "end": 196
            },
            "start": 169,
            "end": 196
          },
          "init": null,
          "definite": false,
          "start": 169,
          "end": 196
        }
      ],
      "declare": true,
      "start": 155,
      "end": 197
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
            "name": "k3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 208,
                    "end": 214
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 216,
                    "end": 222
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 227,
                        "end": 234
                      },
                      "start": 227,
                      "end": 236
                    },
                    "start": 224,
                    "end": 236
                  }
                ],
                "start": 207,
                "end": 237
              },
              "start": 205,
              "end": 237
            },
            "start": 203,
            "end": 237
          },
          "init": null,
          "definite": false,
          "start": 203,
          "end": 237
        }
      ],
      "declare": false,
      "start": 199,
      "end": 238
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k3",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 241
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 245,
              "end": 246
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sb_",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 254
              },
              "start": 248,
              "end": 254
            }
          ],
          "start": 244,
          "end": 255
        },
        "start": 239,
        "end": 255
      },
      "directive": null,
      "start": 239,
      "end": 256
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
            "name": "sbb_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 279,
                    "end": 285
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 287,
                    "end": 294
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 299,
                        "end": 306
                      },
                      "start": 299,
                      "end": 308
                    },
                    "start": 296,
                    "end": 308
                  }
                ],
                "start": 278,
                "end": 309
              },
              "start": 276,
              "end": 309
            },
            "start": 272,
            "end": 309
          },
          "init": null,
          "definite": false,
          "start": 272,
          "end": 309
        }
      ],
      "declare": true,
      "start": 258,
      "end": 310
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
            "name": "k4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 321,
                    "end": 327
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 329,
                    "end": 335
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 340,
                        "end": 347
                      },
                      "start": 340,
                      "end": 349
                    },
                    "start": 337,
                    "end": 349
                  }
                ],
                "start": 320,
                "end": 350
              },
              "start": 318,
              "end": 350
            },
            "start": 316,
            "end": 350
          },
          "init": null,
          "definite": false,
          "start": 316,
          "end": 350
        }
      ],
      "declare": false,
      "start": 312,
      "end": 351
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k4",
          "optional": false,
          "typeAnnotation": null,
          "start": 352,
          "end": 354
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 358,
              "end": 359
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sbb_",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 368
              },
              "start": 361,
              "end": 368
            }
          ],
          "start": 357,
          "end": 369
        },
        "start": 352,
        "end": 369
      },
      "directive": null,
      "start": 352,
      "end": 370
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
            "name": "k5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 381,
                    "end": 387
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 389,
                    "end": 395
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 397,
                    "end": 404
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 409,
                        "end": 416
                      },
                      "start": 409,
                      "end": 418
                    },
                    "start": 406,
                    "end": 418
                  }
                ],
                "start": 380,
                "end": 419
              },
              "start": 378,
              "end": 419
            },
            "start": 376,
            "end": 419
          },
          "init": null,
          "definite": false,
          "start": 376,
          "end": 419
        }
      ],
      "declare": false,
      "start": 372,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k5",
          "optional": false,
          "typeAnnotation": null,
          "start": 421,
          "end": 423
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 427,
              "end": 428
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sbb_",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 437
              },
              "start": 430,
              "end": 437
            }
          ],
          "start": 426,
          "end": 438
        },
        "start": 421,
        "end": 438
      },
      "directive": null,
      "start": 421,
      "end": 439
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
            "name": "k6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 450,
                    "end": 456
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 458,
                    "end": 464
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 466,
                    "end": 473
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 475,
                    "end": 482
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 487,
                        "end": 494
                      },
                      "start": 487,
                      "end": 496
                    },
                    "start": 484,
                    "end": 496
                  }
                ],
                "start": 449,
                "end": 497
              },
              "start": 447,
              "end": 497
            },
            "start": 445,
            "end": 497
          },
          "init": null,
          "definite": false,
          "start": 445,
          "end": 497
        }
      ],
      "declare": false,
      "start": 441,
      "end": 498
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k6",
          "optional": false,
          "typeAnnotation": null,
          "start": 499,
          "end": 501
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 505,
              "end": 506
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sbb_",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 515
              },
              "start": 508,
              "end": 515
            }
          ],
          "start": 504,
          "end": 516
        },
        "start": 499,
        "end": 516
      },
      "directive": null,
      "start": 499,
      "end": 517
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 517
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "sb",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 38,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 42,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 63,
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
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 79,
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
    "value": "...",
    "start": 82,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "sb",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 91,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 95,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 108,
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
    "value": "boolean",
    "start": 116,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 139,
    "end": 140
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 143,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "sb",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 148,
    "end": 149
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "declare",
    "start": 155,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 163,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "sb_",
    "start": 169,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 183,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 186,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "let",
    "start": 199,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 224,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 244,
    "end": 245
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 248,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "sb_",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "declare",
    "start": 258,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 266,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "sbb_",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 279,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 287,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 296,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 299,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 308,
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
    "value": "let",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 337,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 340,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 348,
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
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 361,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "sbb_",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 372,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "k5",
    "start": 376,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 397,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 409,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "k5",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 426,
    "end": 427
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 430,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "sbb_",
    "start": 433,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "let",
    "start": 441,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "k6",
    "start": 445,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 458,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 466,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 475,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 487,
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
    "value": "]",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "k6",
    "start": 499,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 504,
    "end": 505
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 508,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "sbb_",
    "start": 511,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  }
]
```
