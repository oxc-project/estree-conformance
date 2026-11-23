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
        "name": "declare",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 217
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
              "start": 218,
              "end": 219
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PluginObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 237
              },
              "typeArguments": null,
              "start": 228,
              "end": 237
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PluginObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 249
              },
              "typeArguments": null,
              "start": 240,
              "end": 249
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 218,
            "end": 249
          }
        ],
        "start": 217,
        "end": 250
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 254,
          "end": 258
        },
        "start": 252,
        "end": 258
      },
      "body": null,
      "expression": false,
      "start": 193,
      "end": 259
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PluginObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 280
      },
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
              "start": 281,
              "end": 282
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 285,
              "end": 292
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 281,
            "end": 292
          }
        ],
        "start": 280,
        "end": 293
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
              "name": "visitor",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 307
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Visit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 314
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
                        "start": 315,
                        "end": 316
                      },
                      "typeArguments": null,
                      "start": 315,
                      "end": 316
                    },
                    {
                      "type": "TSNeverKeyword",
                      "start": 318,
                      "end": 323
                    }
                  ],
                  "start": 314,
                  "end": 324
                },
                "start": 309,
                "end": 324
              },
              "start": 307,
              "end": 324
            },
            "accessibility": null,
            "static": false,
            "start": 300,
            "end": 325
          }
        ],
        "start": 294,
        "end": 327
      },
      "declare": false,
      "start": 261,
      "end": 327
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Visit",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 338
      },
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
              "start": 339,
              "end": 340
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 339,
            "end": 340
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 343
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 342,
            "end": 343
          }
        ],
        "start": 338,
        "end": 344
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VisitFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
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
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 356
                  },
                  "typeArguments": null,
                  "start": 355,
                  "end": 356
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 359
                  },
                  "typeArguments": null,
                  "start": 358,
                  "end": 359
                }
              ],
              "start": 354,
              "end": 360
            },
            "start": 347,
            "end": 360
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VisitObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 363,
              "end": 371
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
                    "start": 372,
                    "end": 373
                  },
                  "typeArguments": null,
                  "start": 372,
                  "end": 373
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 376
                  },
                  "typeArguments": null,
                  "start": 375,
                  "end": 376
                }
              ],
              "start": 371,
              "end": 377
            },
            "start": 363,
            "end": 377
          }
        ],
        "start": 347,
        "end": 377
      },
      "declare": false,
      "start": 328,
      "end": 378
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VisitFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
        "end": 391
      },
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
              "start": 392,
              "end": 393
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 392,
            "end": 393
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 396
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 395,
            "end": 396
          }
        ],
        "start": 391,
        "end": 397
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
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
                  "name": "NodePath",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 415
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 416,
                        "end": 417
                      },
                      "typeArguments": null,
                      "start": 416,
                      "end": 417
                    }
                  ],
                  "start": 415,
                  "end": 418
                },
                "start": 407,
                "end": 418
              },
              "start": 405,
              "end": 418
            },
            "start": 401,
            "end": 418
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 423,
            "end": 427
          },
          "start": 420,
          "end": 427
        },
        "start": 400,
        "end": 427
      },
      "declare": false,
      "start": 379,
      "end": 428
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VisitObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 447
      },
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
              "start": 448,
              "end": 449
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 448,
            "end": 449
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 452
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 451,
            "end": 452
          }
        ],
        "start": 447,
        "end": 453
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 454,
        "end": 456
      },
      "declare": false,
      "start": 429,
      "end": 456
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NodePath",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 479
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
              "start": 480,
              "end": 481
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 480,
            "end": 481
          }
        ],
        "start": 479,
        "end": 482
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parentPath",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 499
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NodePath",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 501,
                  "end": 509
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Exclude",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 510,
                        "end": 517
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
                              "start": 518,
                              "end": 519
                            },
                            "typeArguments": null,
                            "start": 518,
                            "end": 519
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 521,
                            "end": 525
                          }
                        ],
                        "start": 517,
                        "end": 526
                      },
                      "start": 510,
                      "end": 526
                    }
                  ],
                  "start": 509,
                  "end": 527
                },
                "start": 501,
                "end": 527
              },
              "start": 499,
              "end": 527
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 489,
            "end": 528
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 536
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 538,
                  "end": 541
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
                        "start": 542,
                        "end": 543
                      },
                      "typeArguments": null,
                      "start": 542,
                      "end": 543
                    }
                  ],
                  "start": 541,
                  "end": 544
                },
                "start": 538,
                "end": 544
              },
              "start": 536,
              "end": 544
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 533,
            "end": 545
          }
        ],
        "start": 483,
        "end": 547
      },
      "abstract": false,
      "declare": true,
      "start": 457,
      "end": 547
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Get",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 556
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
              "start": 557,
              "end": 558
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 557,
            "end": 558
          }
        ],
        "start": 556,
        "end": 559
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
            "start": 562,
            "end": 563
          },
          "typeArguments": null,
          "start": 562,
          "end": 563
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 577
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Missing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 585
                },
                "typeArguments": null,
                "start": 578,
                "end": 585
              }
            ],
            "start": 577,
            "end": 586
          },
          "start": 572,
          "end": 586
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 594
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NodePath",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 603
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 604,
                      "end": 611
                    }
                  ],
                  "start": 603,
                  "end": 612
                },
                "start": 595,
                "end": 612
              }
            ],
            "start": 594,
            "end": 613
          },
          "start": 589,
          "end": 613
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 616,
          "end": 621
        },
        "start": 562,
        "end": 621
      },
      "declare": false,
      "start": 548,
      "end": 622
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 622
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 193,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 201,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 210,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 220,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "PluginObj",
    "start": 228,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "PluginObj",
    "start": 240,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 261,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "PluginObj",
    "start": 271,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "S",
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
    "value": "unknown",
    "start": 285,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "visitor",
    "start": 300,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Visit",
    "start": 309,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 315,
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
    "value": "never",
    "start": 318,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 328,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "Visit",
    "start": 333,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "VisitFn",
    "start": 347,
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
    "value": "S",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "VisitObj",
    "start": 363,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 379,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "VisitFn",
    "start": 384,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 401,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "NodePath",
    "start": 407,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 420,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 423,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 429,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "VisitObj",
    "start": 439,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 457,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 465,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "NodePath",
    "start": 471,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "parentPath",
    "start": 489,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "NodePath",
    "start": 501,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 510,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520
  },
  {
    "type": "Null",
    "value": "null",
    "start": 521,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "Get",
    "start": 538,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 548,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "Get",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 564,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 572,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "Missing",
    "start": 578,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 589,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "NodePath",
    "start": 595,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 604,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 616,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  }
]
```
