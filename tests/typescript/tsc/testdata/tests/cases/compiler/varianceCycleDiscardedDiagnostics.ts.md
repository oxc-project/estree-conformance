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
        "start": 337,
        "end": 338
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
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 342
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 344,
                "end": 350
              },
              "start": 342,
              "end": 350
            },
            "accessibility": null,
            "static": false,
            "start": 341,
            "end": 350
          }
        ],
        "start": 339,
        "end": 352
      },
      "declare": false,
      "start": 327,
      "end": 352
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 364
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
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 370
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 372,
                "end": 378
              },
              "start": 370,
              "end": 378
            },
            "accessibility": null,
            "static": false,
            "start": 367,
            "end": 378
          }
        ],
        "start": 365,
        "end": 380
      },
      "declare": false,
      "start": 353,
      "end": 380
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pick",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 402
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
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
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 406,
                "end": 409
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 410,
                    "end": 416
                  }
                ],
                "start": 409,
                "end": 417
              },
              "start": 406,
              "end": 417
            },
            "start": 404,
            "end": 417
          },
          "start": 403,
          "end": 417
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 421
          },
          "typeArguments": null,
          "start": 420,
          "end": 421
        },
        "start": 418,
        "end": 421
      },
      "body": null,
      "expression": false,
      "start": 381,
      "end": 422
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pick",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 444
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 448,
              "end": 454
            },
            "start": 446,
            "end": 454
          },
          "start": 445,
          "end": 454
        }
      ],
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
            "start": 457,
            "end": 458
          },
          "typeArguments": null,
          "start": 457,
          "end": 458
        },
        "start": 455,
        "end": 458
      },
      "body": null,
      "expression": false,
      "start": 423,
      "end": 459
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 467,
        "end": 470
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
              "start": 471,
              "end": 472
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 471,
            "end": 472
          }
        ],
        "start": 470,
        "end": 473
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 481
            },
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
                  "start": 484,
                  "end": 485
                },
                "typeArguments": null,
                "start": 484,
                "end": 485
              },
              "start": 482,
              "end": 485
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 480,
            "end": 486
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 496
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 503
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 508,
                      "end": 511
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ThisExpression",
                        "start": 512,
                        "end": 516
                      }
                    ],
                    "start": 504,
                    "end": 517
                  }
                ],
                "optional": false,
                "start": 499,
                "end": 518
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 522
              },
              "optional": false,
              "computed": false,
              "start": 499,
              "end": 522
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 491,
            "end": 523
          }
        ],
        "start": 474,
        "end": 525
      },
      "abstract": false,
      "declare": false,
      "start": 461,
      "end": 525
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 533,
        "end": 536
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
              "start": 537,
              "end": 538
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 537,
            "end": 538
          }
        ],
        "start": 536,
        "end": 539
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 549
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 552,
                  "end": 555
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
                        "start": 556,
                        "end": 557
                      },
                      "typeArguments": null,
                      "start": 556,
                      "end": 557
                    }
                  ],
                  "start": 555,
                  "end": 558
                },
                "start": 552,
                "end": 558
              },
              "start": 550,
              "end": 558
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 546,
            "end": 559
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 575
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 581,
                        "end": 584
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
                              "start": 585,
                              "end": 586
                            },
                            "typeArguments": null,
                            "start": 585,
                            "end": 586
                          }
                        ],
                        "start": 584,
                        "end": 587
                      },
                      "start": 581,
                      "end": 587
                    },
                    "start": 579,
                    "end": 587
                  },
                  "start": 576,
                  "end": 587
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 599,
                          "end": 603
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 604,
                          "end": 607
                        },
                        "optional": false,
                        "computed": false,
                        "start": 599,
                        "end": 607
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 610,
                        "end": 613
                      },
                      "start": 599,
                      "end": 613
                    },
                    "directive": null,
                    "start": 599,
                    "end": 614
                  }
                ],
                "start": 589,
                "end": 620
              },
              "expression": false,
              "start": 575,
              "end": 620
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 564,
            "end": 620
          }
        ],
        "start": 540,
        "end": 622
      },
      "abstract": false,
      "declare": false,
      "start": 527,
      "end": 622
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 633,
                "end": 639
              },
              "start": 631,
              "end": 639
            },
            "start": 630,
            "end": 639
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 646,
                "end": 649
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 650,
                    "end": 656
                  }
                ],
                "start": 649,
                "end": 657
              },
              "arguments": [],
              "start": 642,
              "end": 659
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 665
            },
            "optional": false,
            "computed": false,
            "start": 642,
            "end": 665
          },
          "definite": false,
          "start": 630,
          "end": 665
        }
      ],
      "declare": false,
      "start": 624,
      "end": 666
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 666
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 327,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 353,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 381,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 389,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "pick",
    "start": 398,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 406,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 423,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 431,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "pick",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 448,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 461,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 491,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "pick",
    "start": 499,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 504,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 512,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 519,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 527,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 546,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 552,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 564,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 576,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 599,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 624,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 633,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 642,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 646,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 650,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 660,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 665,
    "end": 666
  }
]
```
