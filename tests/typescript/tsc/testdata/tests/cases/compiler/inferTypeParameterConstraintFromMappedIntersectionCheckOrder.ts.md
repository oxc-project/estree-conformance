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
        "name": "Copy",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 261
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
              "start": 262,
              "end": 263
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 262,
            "end": 263
          }
        ],
        "start": 261,
        "end": 264
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 270,
          "end": 271
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
              "start": 281,
              "end": 282
            },
            "typeArguments": null,
            "start": 281,
            "end": 282
          },
          "start": 275,
          "end": 282
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
              "start": 285,
              "end": 286
            },
            "typeArguments": null,
            "start": 285,
            "end": 286
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 288
            },
            "typeArguments": null,
            "start": 287,
            "end": 288
          },
          "start": 285,
          "end": 289
        },
        "optional": false,
        "readonly": null,
        "start": 267,
        "end": 291
      },
      "declare": false,
      "start": 252,
      "end": 292
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 298,
        "end": 299
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
              "start": 300,
              "end": 301
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 310,
              "end": 316
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 300,
            "end": 316
          }
        ],
        "start": 299,
        "end": 317
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Copy",
          "optional": false,
          "typeAnnotation": null,
          "start": 320,
          "end": 324
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 327,
                        "end": 328
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 330,
                            "end": 331
                          },
                          "start": 330,
                          "end": 331
                        },
                        "start": 328,
                        "end": 331
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 327,
                      "end": 331
                    }
                  ],
                  "start": 325,
                  "end": 333
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 336,
                    "end": 337
                  },
                  "typeArguments": null,
                  "start": 336,
                  "end": 337
                }
              ],
              "start": 325,
              "end": 337
            }
          ],
          "start": 324,
          "end": 338
        },
        "start": 320,
        "end": 338
      },
      "declare": false,
      "start": 293,
      "end": 339
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 346
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 349,
          "end": 351
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 361
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 369
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 368,
                  "end": 369
                },
                "start": 362,
                "end": 369
              }
            ],
            "start": 361,
            "end": 370
          },
          "start": 360,
          "end": 370
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 374
          },
          "typeArguments": null,
          "start": 373,
          "end": 374
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 377,
          "end": 382
        },
        "start": 349,
        "end": 382
      },
      "declare": false,
      "start": 340,
      "end": 383
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 383
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 252,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "Copy",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 272,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 275,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 293,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 302,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "Copy",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 340,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 352,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 362,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 368,
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
    "value": "?",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 377,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  }
]
```
