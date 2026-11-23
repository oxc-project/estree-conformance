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
        "name": "Selector",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 262
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
              "start": 263,
              "end": 264
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 263,
            "end": 264
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 266,
            "end": 267
          }
        ],
        "start": 262,
        "end": 268
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
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
                  "start": 279,
                  "end": 280
                },
                "typeArguments": null,
                "start": 279,
                "end": 280
              },
              "start": 277,
              "end": 280
            },
            "start": 272,
            "end": 280
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "meta",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 288,
                "end": 294
              },
              "start": 286,
              "end": 294
            },
            "start": 282,
            "end": 294
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 300
            },
            "typeArguments": null,
            "start": 299,
            "end": 300
          },
          "start": 296,
          "end": 300
        },
        "start": 271,
        "end": 300
      },
      "declare": false,
      "start": 249,
      "end": 301
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createStructuredSelector",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 344
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
              "name": "S",
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
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 349
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 348,
            "end": 349
          }
        ],
        "start": 344,
        "end": 350
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "selectors",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 368
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
                    "start": 378,
                    "end": 379
                  },
                  "typeArguments": null,
                  "start": 378,
                  "end": 379
                },
                "start": 372,
                "end": 379
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Selector",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 390
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
                        "start": 391,
                        "end": 392
                      },
                      "typeArguments": null,
                      "start": 391,
                      "end": 392
                    },
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
                          "start": 394,
                          "end": 395
                        },
                        "typeArguments": null,
                        "start": 394,
                        "end": 395
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 396,
                          "end": 397
                        },
                        "typeArguments": null,
                        "start": 396,
                        "end": 397
                      },
                      "start": 394,
                      "end": 398
                    }
                  ],
                  "start": 390,
                  "end": 399
                },
                "start": 382,
                "end": 399
              },
              "optional": false,
              "readonly": null,
              "start": 362,
              "end": 402
            },
            "start": 360,
            "end": 402
          },
          "start": 351,
          "end": 402
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Selector",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 413
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
                  "start": 414,
                  "end": 415
                },
                "typeArguments": null,
                "start": 414,
                "end": 415
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 418
                },
                "typeArguments": null,
                "start": 417,
                "end": 418
              }
            ],
            "start": 413,
            "end": 419
          },
          "start": 405,
          "end": 419
        },
        "start": 403,
        "end": 419
      },
      "body": null,
      "expression": false,
      "start": 303,
      "end": 420
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
        "end": 432
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 440
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 442,
                "end": 448
              },
              "start": 440,
              "end": 448
            },
            "accessibility": null,
            "static": false,
            "start": 437,
            "end": 448
          }
        ],
        "start": 435,
        "end": 450
      },
      "declare": false,
      "start": 422,
      "end": 451
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
            "name": "mySelector",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Selector",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 487
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 488,
                        "end": 493
                      },
                      "typeArguments": null,
                      "start": 488,
                      "end": 493
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 495,
                      "end": 502
                    }
                  ],
                  "start": 487,
                  "end": 503
                },
                "start": 479,
                "end": 503
              },
              "start": 477,
              "end": 503
            },
            "start": 467,
            "end": 503
          },
          "init": null,
          "definite": false,
          "start": 467,
          "end": 503
        }
      ],
      "declare": true,
      "start": 453,
      "end": 503
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 511,
            "end": 518
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createStructuredSelector",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 545
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
                      "name": "mySelector",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 550,
                      "end": 560
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mySelector",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 562,
                      "end": 572
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 550,
                    "end": 572
                  }
                ],
                "start": 546,
                "end": 575
              }
            ],
            "optional": false,
            "start": 521,
            "end": 576
          },
          "definite": false,
          "start": 511,
          "end": 576
        }
      ],
      "declare": false,
      "start": 505,
      "end": 577
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 592
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createStructuredSelector",
              "optional": false,
              "typeAnnotation": null,
              "start": 595,
              "end": 619
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
                      "name": "mySelector",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 624,
                      "end": 634
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "State",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 644,
                                "end": 649
                              },
                              "typeArguments": null,
                              "start": 644,
                              "end": 649
                            },
                            "start": 642,
                            "end": 649
                          },
                          "start": 637,
                          "end": 649
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 654,
                        "end": 658
                      },
                      "id": null,
                      "generator": false,
                      "start": 636,
                      "end": 658
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 624,
                    "end": 658
                  }
                ],
                "start": 620,
                "end": 661
              }
            ],
            "optional": false,
            "start": 595,
            "end": 662
          },
          "definite": false,
          "start": 585,
          "end": 662
        }
      ],
      "declare": false,
      "start": 579,
      "end": 663
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "result2",
        "optional": false,
        "typeAnnotation": null,
        "start": 665,
        "end": 672
      },
      "directive": null,
      "start": 665,
      "end": 673
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 675,
      "end": 685
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 685
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 249,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "Selector",
    "start": 254,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 263,
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
    "value": "R",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 288,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 296,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 303,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 311,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "createStructuredSelector",
    "start": 320,
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
    "value": "S",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "selectors",
    "start": 351,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 369,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 372,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "Selector",
    "start": 382,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "Selector",
    "start": 405,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 415,
    "end": 416
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
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 422,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 453,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 461,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "mySelector",
    "start": 467,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "Selector",
    "start": 479,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 488,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 495,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 505,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 511,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "createStructuredSelector",
    "start": 521,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "mySelector",
    "start": 550,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "mySelector",
    "start": 562,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 579,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 585,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "createStructuredSelector",
    "start": 595,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "mySelector",
    "start": 624,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 637,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 644,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 651,
    "end": 653
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 654,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 665,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  }
]
```
