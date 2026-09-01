__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 71
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 82,
                "end": 89
              },
              "start": 82,
              "end": 91
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 91
          }
        ],
        "start": 71,
        "end": 92
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
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 101
                    },
                    "typeArguments": null,
                    "start": 100,
                    "end": 101
                  },
                  "start": 97,
                  "end": 101
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 103,
                  "end": 109
                }
              ],
              "start": 96,
              "end": 110
            },
            "start": 94,
            "end": 110
          },
          "start": 93,
          "end": 110
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 120
                    },
                    "typeArguments": null,
                    "start": 119,
                    "end": 120
                  },
                  "start": 116,
                  "end": 120
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 122,
                  "end": 128
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 130,
                  "end": 136
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 138,
                  "end": 144
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 146,
                  "end": 152
                }
              ],
              "start": 115,
              "end": 153
            },
            "start": 113,
            "end": 153
          },
          "start": 112,
          "end": 153
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
                "start": 161,
                "end": 162
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              },
              "start": 161,
              "end": 166
            },
            "directive": null,
            "start": 161,
            "end": 166
          }
        ],
        "start": 155,
        "end": 178
      },
      "expression": false,
      "start": 60,
      "end": 178
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 191
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 193
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 202,
                "end": 209
              },
              "start": 202,
              "end": 211
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 192,
            "end": 211
          }
        ],
        "start": 191,
        "end": 212
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
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 217,
                  "end": 223
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 229
                    },
                    "typeArguments": null,
                    "start": 228,
                    "end": 229
                  },
                  "start": 225,
                  "end": 229
                }
              ],
              "start": 216,
              "end": 230
            },
            "start": 214,
            "end": 230
          },
          "start": 213,
          "end": 230
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 240
                    },
                    "typeArguments": null,
                    "start": 239,
                    "end": 240
                  },
                  "start": 236,
                  "end": 240
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 242,
                  "end": 248
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 250,
                  "end": 256
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 258,
                  "end": 264
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 266,
                  "end": 272
                }
              ],
              "start": 235,
              "end": 273
            },
            "start": 233,
            "end": 273
          },
          "start": 232,
          "end": 273
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
                "start": 281,
                "end": 282
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 286
              },
              "start": 281,
              "end": 286
            },
            "directive": null,
            "start": 281,
            "end": 286
          }
        ],
        "start": 275,
        "end": 298
      },
      "expression": false,
      "start": 180,
      "end": 298
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 311
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 313
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 322,
                "end": 329
              },
              "start": 322,
              "end": 331
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 312,
            "end": 331
          }
        ],
        "start": 311,
        "end": 332
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
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 341
                    },
                    "typeArguments": null,
                    "start": 340,
                    "end": 341
                  },
                  "start": 337,
                  "end": 341
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 346,
                      "end": 347
                    },
                    "typeArguments": null,
                    "start": 346,
                    "end": 347
                  },
                  "start": 343,
                  "end": 347
                }
              ],
              "start": 336,
              "end": 348
            },
            "start": 334,
            "end": 348
          },
          "start": 333,
          "end": 348
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 358
                    },
                    "typeArguments": null,
                    "start": 357,
                    "end": 358
                  },
                  "start": 354,
                  "end": 358
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 360,
                  "end": 366
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 368,
                  "end": 374
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 376,
                  "end": 382
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 384,
                  "end": 390
                }
              ],
              "start": 353,
              "end": 391
            },
            "start": 351,
            "end": 391
          },
          "start": 350,
          "end": 391
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
                "start": 399,
                "end": 400
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 403,
                "end": 404
              },
              "start": 399,
              "end": 404
            },
            "directive": null,
            "start": 399,
            "end": 404
          }
        ],
        "start": 393,
        "end": 416
      },
      "expression": false,
      "start": 300,
      "end": 416
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 416
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 60,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 69,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 74,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 82,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 116,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ",",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 180,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 194,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "[",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 258,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "y",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 300,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 309,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 314,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 322,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 337,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 343,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "...",
    "start": 354,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 360,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 368,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 376,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 384,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  }
]
```
