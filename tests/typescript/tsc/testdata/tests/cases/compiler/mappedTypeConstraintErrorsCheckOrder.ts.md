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
        "name": "Dec",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 161
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 172,
              "end": 178
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 162,
            "end": 178
          }
        ],
        "start": 161,
        "end": 179
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 187
          },
          "typeArguments": null,
          "start": 186,
          "end": 187
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 196,
            "end": 197
          },
          "start": 196,
          "end": 197
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 200,
            "end": 201
          },
          "start": 200,
          "end": 201
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "typeArguments": null,
            "start": 204,
            "end": 205
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 214,
              "end": 215
            },
            "start": 214,
            "end": 215
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 218,
              "end": 219
            },
            "start": 218,
            "end": 219
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 223
              },
              "typeArguments": null,
              "start": 222,
              "end": 223
            },
            "extendsType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 232,
                "end": 233
              },
              "start": 232,
              "end": 233
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 236,
                "end": 237
              },
              "start": 236,
              "end": 237
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 245
                },
                "typeArguments": null,
                "start": 244,
                "end": 245
              },
              "extendsType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 254,
                  "end": 255
                },
                "start": 254,
                "end": 255
              },
              "trueType": {
                "type": "TSAnyKeyword",
                "start": 258,
                "end": 261
              },
              "falseType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 269
                  },
                  "typeArguments": null,
                  "start": 268,
                  "end": 269
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 278,
                    "end": 279
                  },
                  "start": 278,
                  "end": 279
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 282,
                    "end": 283
                  },
                  "start": 282,
                  "end": 283
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 286,
                    "end": 287
                  },
                  "start": 286,
                  "end": 287
                },
                "start": 268,
                "end": 287
              },
              "start": 244,
              "end": 287
            },
            "start": 222,
            "end": 287
          },
          "start": 204,
          "end": 287
        },
        "start": 186,
        "end": 287
      },
      "declare": false,
      "start": 153,
      "end": 288
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recur",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
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
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 301
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 310,
              "end": 316
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 300,
            "end": 316
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 319
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 318,
            "end": 319
          }
        ],
        "start": 299,
        "end": 320
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 328
          },
          "typeArguments": null,
          "start": 327,
          "end": 328
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 337,
            "end": 338
          },
          "start": 337,
          "end": 338
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 342
          },
          "typeArguments": null,
          "start": 341,
          "end": 342
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Recur",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 350
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 354
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 355,
                        "end": 356
                      },
                      "typeArguments": null,
                      "start": 355,
                      "end": 356
                    }
                  ],
                  "start": 354,
                  "end": 357
                },
                "start": 351,
                "end": 357
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
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
                    "typeArguments": null,
                    "start": 360,
                    "end": 361
                  }
                ],
                "start": 359,
                "end": 362
              }
            ],
            "start": 350,
            "end": 363
          },
          "start": 345,
          "end": 363
        },
        "start": 327,
        "end": 363
      },
      "declare": false,
      "start": 289,
      "end": 364
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Explode",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 378
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 388,
          "end": 389
        },
        "constraint": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Recur",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 398
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 399,
                      "end": 400
                    },
                    "start": 399,
                    "end": 400
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 402,
                      "end": 405
                    },
                    "start": 402,
                    "end": 405
                  }
                ],
                "start": 398,
                "end": 406
              },
              "start": 393,
              "end": 406
            },
            {
              "type": "TSStringKeyword",
              "start": 409,
              "end": 415
            }
          ],
          "start": 393,
          "end": 415
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 419,
              "end": 422
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "_key",
                "cooked": "_key"
              },
              "tail": true,
              "start": 423,
              "end": 429
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 423
              },
              "typeArguments": null,
              "start": 422,
              "end": 423
            }
          ],
          "start": 419,
          "end": 429
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 432,
          "end": 435
        },
        "optional": false,
        "readonly": null,
        "start": 381,
        "end": 438
      },
      "declare": false,
      "start": 366,
      "end": 439
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 439
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 153,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Dec",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 164,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 188,
    "end": 195
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 198,
    "end": 199
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 206,
    "end": 213
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 216,
    "end": 217
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 224,
    "end": 231
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 234,
    "end": 235
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 246,
    "end": 253
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 270,
    "end": 277
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 280,
    "end": 281
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 289,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Recur",
    "start": 294,
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
    "value": "N",
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
    "value": "number",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 329,
    "end": 336
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "Recur",
    "start": 345,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "Dec",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 366,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "Explode",
    "start": 371,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 390,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "Recur",
    "start": 393,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 398,
    "end": 399
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 400,
    "end": 401
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 402,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 409,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 416,
    "end": 418
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 419,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 422,
    "end": 423
  },
  {
    "type": "Template",
    "value": "}_key`",
    "start": 423,
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
    "value": "any",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  }
]
```
