__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "x",
        "raw": "\"x\"",
        "start": 333,
        "end": 336
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Stubable",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 356
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 363,
                    "end": 367
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 369,
                        "end": 372
                      },
                      "start": 369,
                      "end": 374
                    },
                    "start": 367,
                    "end": 374
                  },
                  "value": null,
                  "start": 360,
                  "end": 374
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 379,
                  "end": 382
                },
                "start": 376,
                "end": 382
              },
              "start": 359,
              "end": 382
            },
            "declare": false,
            "start": 343,
            "end": 383
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 399
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 401
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 400,
                  "end": 401
                }
              ],
              "start": 399,
              "end": 402
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 406
                },
                "typeArguments": null,
                "start": 405,
                "end": 406
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Stubable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 423
                },
                "typeArguments": null,
                "start": 415,
                "end": 423
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Provider",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 434
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 436
                      },
                      "typeArguments": null,
                      "start": 435,
                      "end": 436
                    }
                  ],
                  "start": 434,
                  "end": 437
                },
                "start": 426,
                "end": 437
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 447
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 448,
                        "end": 449
                      },
                      "typeArguments": null,
                      "start": 448,
                      "end": 449
                    }
                  ],
                  "start": 447,
                  "end": 450
                },
                "start": 440,
                "end": 450
              },
              "start": 405,
              "end": 450
            },
            "declare": false,
            "start": 388,
            "end": 451
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MethodOrProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 477
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 478,
                    "end": 479
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 478,
                  "end": 479
                }
              ],
              "start": 477,
              "end": 480
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 483,
                  "end": 484
                },
                "typeArguments": null,
                "start": 483,
                "end": 484
              },
              "extendsType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 497,
                      "end": 501
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 509,
                            "end": 510
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 509,
                          "end": 510
                        },
                        "start": 503,
                        "end": 510
                      },
                      "start": 501,
                      "end": 510
                    },
                    "value": null,
                    "start": 494,
                    "end": 510
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 521,
                        "end": 522
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 521,
                      "end": 522
                    },
                    "start": 515,
                    "end": 522
                  },
                  "start": 512,
                  "end": 522
                },
                "start": 493,
                "end": 522
              },
              "trueType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 529,
                      "end": 533
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 535,
                          "end": 536
                        },
                        "typeArguments": null,
                        "start": 535,
                        "end": 536
                      },
                      "start": 533,
                      "end": 536
                    },
                    "value": null,
                    "start": 526,
                    "end": 536
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 541,
                      "end": 547
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 548,
                            "end": 549
                          },
                          "typeArguments": null,
                          "start": 548,
                          "end": 549
                        }
                      ],
                      "start": 547,
                      "end": 550
                    },
                    "start": 541,
                    "end": 550
                  },
                  "start": 538,
                  "end": 550
                },
                "start": 525,
                "end": 550
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 559
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 560,
                        "end": 561
                      },
                      "typeArguments": null,
                      "start": 560,
                      "end": 561
                    }
                  ],
                  "start": 559,
                  "end": 562
                },
                "start": 553,
                "end": 562
              },
              "start": 483,
              "end": 562
            },
            "declare": false,
            "start": 456,
            "end": 563
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Provider",
              "optional": false,
              "typeAnnotation": null,
              "start": 573,
              "end": 581
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
                    "start": 582,
                    "end": 583
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 582,
                  "end": 583
                }
              ],
              "start": 581,
              "end": 584
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
                  "start": 587,
                  "end": 588
                },
                "typeArguments": null,
                "start": 587,
                "end": 588
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Stubable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 605
                },
                "typeArguments": null,
                "start": 597,
                "end": 605
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MethodOrProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 608,
                  "end": 624
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
                        "start": 625,
                        "end": 626
                      },
                      "typeArguments": null,
                      "start": 625,
                      "end": 626
                    }
                  ],
                  "start": 624,
                  "end": 627
                },
                "start": 608,
                "end": 627
              },
              "falseType": {
                "type": "TSUnknownKeyword",
                "start": 630,
                "end": 637
              },
              "start": 587,
              "end": 637
            },
            "declare": false,
            "start": 568,
            "end": 638
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "stub",
                "optional": false,
                "typeAnnotation": null,
                "start": 659,
                "end": 663
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 664,
                      "end": 665
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Stubable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 674,
                        "end": 682
                      },
                      "typeArguments": null,
                      "start": 674,
                      "end": 682
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 664,
                    "end": 682
                  }
                ],
                "start": 663,
                "end": 683
              },
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
                        "start": 691,
                        "end": 692
                      },
                      "typeArguments": null,
                      "start": 691,
                      "end": 692
                    },
                    "start": 689,
                    "end": 692
                  },
                  "start": 684,
                  "end": 692
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Provider",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 695,
                    "end": 703
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
                          "start": 704,
                          "end": 705
                        },
                        "typeArguments": null,
                        "start": 704,
                        "end": 705
                      }
                    ],
                    "start": 703,
                    "end": 706
                  },
                  "start": 695,
                  "end": 706
                },
                "start": 693,
                "end": 706
              },
              "body": null,
              "expression": false,
              "start": 650,
              "end": 707
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 643,
            "end": 707
          }
        ],
        "start": 337,
        "end": 709
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 318,
      "end": 709
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
            "typeAnnotation": null,
            "start": 717,
            "end": 718
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 728,
                  "end": 731
                },
                "options": null,
                "phase": null,
                "start": 721,
                "end": 732
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 737
              },
              "optional": false,
              "computed": false,
              "start": 721,
              "end": 737
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 739,
                    "end": 740
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 745,
                  "end": 746
                },
                "id": null,
                "generator": false,
                "start": 738,
                "end": 746
              }
            ],
            "optional": false,
            "start": 721,
            "end": 747
          },
          "definite": false,
          "start": 717,
          "end": 747
        }
      ],
      "declare": false,
      "start": 711,
      "end": 748
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 748
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 318,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 326,
    "end": 332
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 343,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "Stubable",
    "start": 348,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 360,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 369,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 376,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 379,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 388,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 393,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 407,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "Stubable",
    "start": 415,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "Provider",
    "start": 426,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 440,
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
    "value": "R",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "type",
    "start": 456,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "MethodOrProperty",
    "start": 461,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 485,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 494,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 497,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 503,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 512,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 515,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 526,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 529,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 538,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 541,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 553,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 568,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "Provider",
    "start": 573,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 589,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "Stubable",
    "start": 597,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "MethodOrProperty",
    "start": 608,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 630,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 643,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 650,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "stub",
    "start": 659,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 666,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "Stubable",
    "start": 674,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 684,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "Provider",
    "start": 695,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 711,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 721,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 728,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 733,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 742,
    "end": 744
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  }
]
```
