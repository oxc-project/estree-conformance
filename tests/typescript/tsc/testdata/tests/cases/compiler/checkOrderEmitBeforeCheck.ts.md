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
        "name": "NonOptionalKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 227
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
              "start": 228,
              "end": 229
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 228,
            "end": 229
          }
        ],
        "start": 227,
        "end": 230
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 237
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
                "start": 247,
                "end": 248
              },
              "typeArguments": null,
              "start": 247,
              "end": 248
            },
            "start": 241,
            "end": 248
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 251,
              "end": 260
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 269,
                  "end": 270
                },
                "typeArguments": null,
                "start": 269,
                "end": 270
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 272
                },
                "typeArguments": null,
                "start": 271,
                "end": 272
              },
              "start": 269,
              "end": 273
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 276,
              "end": 281
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 285
              },
              "typeArguments": null,
              "start": 284,
              "end": 285
            },
            "start": 251,
            "end": 285
          },
          "optional": false,
          "readonly": null,
          "start": 233,
          "end": 287
        },
        "indexType": {
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
              "start": 294,
              "end": 295
            },
            "typeArguments": null,
            "start": 294,
            "end": 295
          },
          "start": 288,
          "end": 295
        },
        "start": 233,
        "end": 296
      },
      "declare": false,
      "start": 207,
      "end": 297
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 308
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
              "start": 309,
              "end": 310
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 309,
            "end": 310
          }
        ],
        "start": 308,
        "end": 311
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 317,
          "end": 318
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NonOptionalKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 337
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
                  "start": 338,
                  "end": 339
                },
                "typeArguments": null,
                "start": 338,
                "end": 339
              }
            ],
            "start": 337,
            "end": 340
          },
          "start": 322,
          "end": 340
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
              "start": 343,
              "end": 344
            },
            "typeArguments": null,
            "start": 343,
            "end": 344
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 345,
              "end": 346
            },
            "typeArguments": null,
            "start": 345,
            "end": 346
          },
          "start": 343,
          "end": 347
        },
        "optional": false,
        "readonly": null,
        "start": 314,
        "end": 349
      },
      "declare": false,
      "start": 298,
      "end": 349
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ListWidget",
          "optional": false,
          "typeAnnotation": null,
          "start": 368,
          "end": 378
        },
        "typeParameters": null,
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
                "type": "Literal",
                "value": "type",
                "raw": "\"type\"",
                "start": 385,
                "end": 391
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "list",
                    "raw": "\"list\"",
                    "start": 393,
                    "end": 399
                  },
                  "start": 393,
                  "end": 399
                },
                "start": 391,
                "end": 399
              },
              "accessibility": null,
              "static": false,
              "start": 385,
              "end": 400
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "each",
                "raw": "\"each\"",
                "start": 405,
                "end": 411
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Child",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 413,
                    "end": 418
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ListWidget",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 419,
                          "end": 429
                        },
                        "typeArguments": null,
                        "start": 419,
                        "end": 429
                      }
                    ],
                    "start": 418,
                    "end": 430
                  },
                  "start": 413,
                  "end": 430
                },
                "start": 411,
                "end": 430
              },
              "accessibility": null,
              "static": false,
              "start": 405,
              "end": 431
            }
          ],
          "start": 379,
          "end": 433
        },
        "declare": false,
        "start": 358,
        "end": 433
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 351,
      "end": 433
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ListChild",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 449
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Child",
          "optional": false,
          "typeAnnotation": null,
          "start": 452,
          "end": 457
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListWidget",
                "optional": false,
                "typeAnnotation": null,
                "start": 458,
                "end": 468
              },
              "typeArguments": null,
              "start": 458,
              "end": 468
            }
          ],
          "start": 457,
          "end": 469
        },
        "start": 452,
        "end": 469
      },
      "declare": false,
      "start": 435,
      "end": 469
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ListChild",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 486,
                  "end": 495
                },
                "typeArguments": null,
                "start": 486,
                "end": 495
              },
              "start": 484,
              "end": 495
            },
            "start": 483,
            "end": 495
          },
          "init": null,
          "definite": false,
          "start": 483,
          "end": 495
        }
      ],
      "declare": true,
      "start": 471,
      "end": 496
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 497,
          "end": 498
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": null,
          "start": 499,
          "end": 503
        },
        "optional": false,
        "computed": false,
        "start": 497,
        "end": 503
      },
      "directive": null,
      "start": 497,
      "end": 504
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 504
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 207,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "NonOptionalKeys",
    "start": 212,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "{",
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
    "type": "Identifier",
    "value": "P",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 238,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 241,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 251,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 261,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 271,
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
    "value": "?",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 276,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 288,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 298,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
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
    "value": "P",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 319,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "NonOptionalKeys",
    "start": 322,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 351,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 358,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "ListWidget",
    "start": 368,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 385,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "String",
    "value": "\"list\"",
    "start": 393,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 399,
    "end": 400
  },
  {
    "type": "String",
    "value": "\"each\"",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 413,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "ListWidget",
    "start": 419,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 435,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "ListChild",
    "start": 440,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 452,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "ListWidget",
    "start": 458,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 471,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 479,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "ListChild",
    "start": 486,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 499,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  }
]
```
