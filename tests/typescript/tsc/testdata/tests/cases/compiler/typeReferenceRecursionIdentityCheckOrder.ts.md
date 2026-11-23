__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 233
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
              "start": 234,
              "end": 235
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 234,
            "end": 235
          }
        ],
        "start": 233,
        "end": 236
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 248
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 253
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
                        "start": 254,
                        "end": 255
                      },
                      "typeArguments": null,
                      "start": 254,
                      "end": 255
                    }
                  ],
                  "start": 253,
                  "end": 256
                },
                "start": 252,
                "end": 256
              },
              "start": 250,
              "end": 256
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 243,
            "end": 257
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "every",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 267
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
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 269
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 279
                    },
                    "typeArguments": null,
                    "start": 278,
                    "end": 279
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 268,
                  "end": 279
                }
              ],
              "start": 267,
              "end": 280
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 300,
                              "end": 301
                            },
                            "typeArguments": null,
                            "start": 300,
                            "end": 301
                          },
                          "start": 298,
                          "end": 301
                        },
                        "start": 293,
                        "end": 301
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 306,
                          "end": 311
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 315,
                              "end": 316
                            },
                            "typeArguments": null,
                            "start": 315,
                            "end": 316
                          },
                          "start": 315,
                          "end": 316
                        },
                        "start": 306,
                        "end": 316
                      },
                      "start": 303,
                      "end": 316
                    },
                    "start": 292,
                    "end": 316
                  },
                  "start": 290,
                  "end": 316
                },
                "start": 281,
                "end": 316
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "TSThisType",
                  "start": 319,
                  "end": 323
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 328
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 329,
                            "end": 330
                          },
                          "typeArguments": null,
                          "start": 329,
                          "end": 330
                        }
                      ],
                      "start": 328,
                      "end": 331
                    },
                    "start": 327,
                    "end": 331
                  },
                  "start": 327,
                  "end": 331
                },
                "start": 319,
                "end": 331
              },
              "start": 317,
              "end": 331
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 262,
            "end": 332
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "flatMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 344
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 346
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 345,
                  "end": 346
                }
              ],
              "start": 344,
              "end": 347
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 366,
                              "end": 367
                            },
                            "typeArguments": null,
                            "start": 366,
                            "end": 367
                          },
                          "start": 364,
                          "end": 367
                        },
                        "start": 359,
                        "end": 367
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 372,
                              "end": 373
                            },
                            "typeArguments": null,
                            "start": 372,
                            "end": 373
                          },
                          {
                            "type": "TSTypeOperator",
                            "operator": "readonly",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 385,
                                  "end": 386
                                },
                                "typeArguments": null,
                                "start": 385,
                                "end": 386
                              },
                              "start": 385,
                              "end": 388
                            },
                            "start": 376,
                            "end": 388
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 391,
                              "end": 392
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 393,
                                    "end": 394
                                  },
                                  "typeArguments": null,
                                  "start": 393,
                                  "end": 394
                                }
                              ],
                              "start": 392,
                              "end": 395
                            },
                            "start": 391,
                            "end": 395
                          }
                        ],
                        "start": 372,
                        "end": 395
                      },
                      "start": 369,
                      "end": 395
                    },
                    "start": 358,
                    "end": 395
                  },
                  "start": 356,
                  "end": 395
                },
                "start": 348,
                "end": 395
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 399
                  },
                  "typeArguments": null,
                  "start": 398,
                  "end": 399
                },
                "start": 398,
                "end": 401
              },
              "start": 396,
              "end": 401
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 337,
            "end": 402
          }
        ],
        "start": 237,
        "end": 404
      },
      "declare": false,
      "start": 222,
      "end": 404
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 416
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
              "start": 417,
              "end": 418
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 417,
            "end": 418
          }
        ],
        "start": 416,
        "end": 419
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 428,
            "end": 429
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
                  "start": 430,
                  "end": 431
                },
                "typeArguments": null,
                "start": 430,
                "end": 431
              }
            ],
            "start": 429,
            "end": 432
          },
          "start": 428,
          "end": 432
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 433,
        "end": 435
      },
      "declare": false,
      "start": 405,
      "end": 435
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 445,
                  "end": 446
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 447,
                        "end": 448
                      },
                      "start": 447,
                      "end": 448
                    }
                  ],
                  "start": 446,
                  "end": 449
                },
                "start": 445,
                "end": 449
              },
              "start": 443,
              "end": 449
            },
            "start": 442,
            "end": 449
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 452,
            "end": 454
          },
          "definite": false,
          "start": 442,
          "end": 454
        }
      ],
      "declare": false,
      "start": 436,
      "end": 455
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 466
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 467,
                        "end": 468
                      },
                      "start": 467,
                      "end": 468
                    }
                  ],
                  "start": 466,
                  "end": 469
                },
                "start": 465,
                "end": 469
              },
              "start": 463,
              "end": 469
            },
            "start": 462,
            "end": 469
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 472,
            "end": 474
          },
          "definite": false,
          "start": 462,
          "end": 474
        }
      ],
      "declare": false,
      "start": 456,
      "end": 475
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 475
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 222,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 243,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "S",
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
    "type": "Identifier",
    "value": "T",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 281,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 293,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 303,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 306,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 312,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 319,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 324,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "flatMap",
    "start": 337,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 348,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 359,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 369,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 376,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 405,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 420,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 436,
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
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 446,
    "end": 447
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 452,
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
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 456,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 466,
    "end": 467
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 472,
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
  }
]
```
