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
        "name": "T0",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 45
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonNullable",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 59
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 60,
              "end": 64
            }
          ],
          "start": 59,
          "end": 65
        },
        "start": 48,
        "end": 65
      },
      "declare": false,
      "start": 38,
      "end": 66
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 74
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonNullable",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 88
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUndefinedKeyword",
              "start": 89,
              "end": 98
            }
          ],
          "start": 88,
          "end": 99
        },
        "start": 77,
        "end": 99
      },
      "declare": false,
      "start": 67,
      "end": 100
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 108
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNullKeyword",
            "start": 111,
            "end": 115
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 118,
            "end": 120
          }
        ],
        "start": 111,
        "end": 120
      },
      "declare": false,
      "start": 101,
      "end": 121
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 129
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSUndefinedKeyword",
            "start": 132,
            "end": 141
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 144,
            "end": 146
          }
        ],
        "start": 132,
        "end": 146
      },
      "declare": false,
      "start": 122,
      "end": 147
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 155
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNullKeyword",
            "start": 158,
            "end": 162
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 165,
            "end": 174
          }
        ],
        "start": 158,
        "end": 174
      },
      "declare": false,
      "start": 148,
      "end": 175
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 183
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNullKeyword",
            "start": 186,
            "end": 190
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 198,
                    "end": 204
                  },
                  "start": 196,
                  "end": 204
                },
                "accessibility": null,
                "static": false,
                "start": 195,
                "end": 204
              }
            ],
            "start": 193,
            "end": 206
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 209,
            "end": 211
          }
        ],
        "start": 186,
        "end": 211
      },
      "declare": false,
      "start": 176,
      "end": 212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonNullableNew",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 255
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
              "start": 256,
              "end": 257
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 256,
            "end": 257
          }
        ],
        "start": 255,
        "end": 258
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 262
            },
            "typeArguments": null,
            "start": 261,
            "end": 262
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 265,
            "end": 267
          }
        ],
        "start": 261,
        "end": 267
      },
      "declare": false,
      "start": 236,
      "end": 268
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonNullableOld",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 288
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
              "start": 289,
              "end": 290
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 289,
            "end": 290
          }
        ],
        "start": 288,
        "end": 291
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 295
          },
          "typeArguments": null,
          "start": 294,
          "end": 295
        },
        "extendsType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNullKeyword",
              "start": 304,
              "end": 308
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 311,
              "end": 320
            }
          ],
          "start": 304,
          "end": 320
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 323,
          "end": 328
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 332
          },
          "typeArguments": null,
          "start": 331,
          "end": 332
        },
        "start": 294,
        "end": 332
      },
      "declare": false,
      "start": 269,
      "end": 333
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestNew",
        "optional": false,
        "typeAnnotation": null,
        "start": 340,
        "end": 347
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonNullableNew",
          "optional": false,
          "typeAnnotation": null,
          "start": 350,
          "end": 364
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 365,
              "end": 369
            }
          ],
          "start": 364,
          "end": 370
        },
        "start": 350,
        "end": 370
      },
      "declare": false,
      "start": 335,
      "end": 371
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestOld",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 384
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonNullableOld",
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 401
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 402,
              "end": 406
            }
          ],
          "start": 401,
          "end": 407
        },
        "start": 387,
        "end": 407
      },
      "declare": false,
      "start": 372,
      "end": 408
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 38,
  "end": 408
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 38,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 43,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 48,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60
  },
  {
    "type": "Null",
    "value": "null",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 67,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 77,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 89,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 101,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Null",
    "value": "null",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 122,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 132,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 148,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Null",
    "value": "null",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 165,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 176,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Null",
    "value": "null",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 236,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "NonNullableNew",
    "start": 241,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 269,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "NonNullableOld",
    "start": 274,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 296,
    "end": 303
  },
  {
    "type": "Null",
    "value": "null",
    "start": 304,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 311,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 335,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "TestNew",
    "start": 340,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "NonNullableNew",
    "start": 350,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 364,
    "end": 365
  },
  {
    "type": "Null",
    "value": "null",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 372,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "TestOld",
    "start": 377,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "NonNullableOld",
    "start": 387,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 401,
    "end": 402
  },
  {
    "type": "Null",
    "value": "null",
    "start": 402,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  }
]
```
