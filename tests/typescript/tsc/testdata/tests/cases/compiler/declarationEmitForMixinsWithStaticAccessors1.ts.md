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
        "name": "mix",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 376
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
              "start": 377,
              "end": 378
            },
            "constraint": {
              "type": "TSConstructorType",
              "abstract": false,
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
                    "start": 395,
                    "end": 399
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 401,
                        "end": 404
                      },
                      "start": 401,
                      "end": 406
                    },
                    "start": 399,
                    "end": 406
                  },
                  "value": null,
                  "start": 392,
                  "end": 406
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 411,
                  "end": 414
                },
                "start": 408,
                "end": 414
              },
              "start": 387,
              "end": 414
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 377,
            "end": 414
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 417
            },
            "constraint": {
              "type": "TSConstructorType",
              "abstract": false,
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
                    "start": 434,
                    "end": 438
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 440,
                        "end": 443
                      },
                      "start": 440,
                      "end": 445
                    },
                    "start": 438,
                    "end": 445
                  },
                  "value": null,
                  "start": 431,
                  "end": 445
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 450,
                  "end": 453
                },
                "start": 447,
                "end": 453
              },
              "start": 426,
              "end": 453
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 416,
            "end": 453
          }
        ],
        "start": 376,
        "end": 454
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "base1",
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
                "start": 467,
                "end": 468
              },
              "typeArguments": null,
              "start": 467,
              "end": 468
            },
            "start": 465,
            "end": 468
          },
          "start": 460,
          "end": 468
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "base2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 478
              },
              "typeArguments": null,
              "start": 477,
              "end": 478
            },
            "start": 475,
            "end": 478
          },
          "start": 470,
          "end": 478
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
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
                "start": 482,
                "end": 483
              },
              "typeArguments": null,
              "start": 482,
              "end": 483
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 486,
                "end": 487
              },
              "typeArguments": null,
              "start": 486,
              "end": 487
            }
          ],
          "start": 482,
          "end": 487
        },
        "start": 480,
        "end": 487
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 501,
                "end": 505
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 509,
                "end": 512
              },
              "start": 501,
              "end": 512
            },
            "start": 494,
            "end": 513
          }
        ],
        "start": 488,
        "end": 515
      },
      "expression": false,
      "start": 364,
      "end": 515
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 523,
        "end": 524
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shared",
              "optional": false,
              "typeAnnotation": null,
              "start": 542,
              "end": 548
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 552,
                  "end": 558
                },
                "start": 550,
                "end": 558
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 568,
                      "end": 569
                    },
                    "start": 561,
                    "end": 570
                  }
                ],
                "start": 559,
                "end": 572
              },
              "expression": false,
              "start": 548,
              "end": 572
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 531,
            "end": 572
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shared",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 594
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 598,
                      "end": 604
                    },
                    "start": 596,
                    "end": 604
                  },
                  "start": 595,
                  "end": 604
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 606,
                "end": 609
              },
              "expression": false,
              "start": 594,
              "end": 609
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 577,
            "end": 609
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 615
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 617,
                "end": 623
              },
              "start": 615,
              "end": 623
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 626,
              "end": 628
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 614,
            "end": 629
          }
        ],
        "start": 525,
        "end": 631
      },
      "abstract": false,
      "declare": false,
      "start": 517,
      "end": 631
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 639,
        "end": 640
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shared",
              "optional": false,
              "typeAnnotation": null,
              "start": 658,
              "end": 664
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 668,
                  "end": 674
                },
                "start": 666,
                "end": 674
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 684,
                      "end": 685
                    },
                    "start": 677,
                    "end": 686
                  }
                ],
                "start": 675,
                "end": 688
              },
              "expression": false,
              "start": 664,
              "end": 688
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 647,
            "end": 688
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shared",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 710
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 714,
                      "end": 720
                    },
                    "start": 712,
                    "end": 720
                  },
                  "start": 711,
                  "end": 720
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 722,
                "end": 725
              },
              "expression": false,
              "start": 710,
              "end": 725
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 693,
            "end": 725
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 730,
              "end": 731
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 733,
                "end": 739
              },
              "start": 731,
              "end": 739
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 742,
              "end": 743
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 730,
            "end": 744
          }
        ],
        "start": 641,
        "end": 746
      },
      "abstract": false,
      "declare": false,
      "start": 633,
      "end": 746
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "make",
        "optional": false,
        "typeAnnotation": null,
        "start": 757,
        "end": 761
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 776,
              "end": 777
            },
            "typeParameters": null,
            "superClass": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "mix",
                "optional": false,
                "typeAnnotation": null,
                "start": 786,
                "end": 789
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 790,
                  "end": 791
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 793,
                  "end": 794
                }
              ],
              "optional": false,
              "start": 786,
              "end": 795
            },
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
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 806,
                    "end": 807
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 809,
                      "end": 816
                    },
                    "start": 807,
                    "end": 816
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 819,
                    "end": 823
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 806,
                  "end": 824
                }
              ],
              "start": 796,
              "end": 830
            },
            "abstract": false,
            "declare": false,
            "start": 770,
            "end": 830
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 842,
              "end": 843
            },
            "start": 835,
            "end": 844
          }
        ],
        "start": 764,
        "end": 846
      },
      "expression": false,
      "start": 748,
      "end": 846
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixedClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 861,
              "end": 871
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "make",
                "optional": false,
                "typeAnnotation": null,
                "start": 874,
                "end": 878
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 874,
              "end": 880
            },
            "definite": false,
            "start": 861,
            "end": 880
          }
        ],
        "declare": false,
        "start": 855,
        "end": 881
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 848,
      "end": 881
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 364,
  "end": 881
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 364,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "mix",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 379,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 387,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 392,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 395,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 401,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 408,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 418,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 426,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 431,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 434,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 447,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 450,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 460,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 470,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 494,
    "end": 500
  },
  {
    "type": "Null",
    "value": "null",
    "start": 501,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 506,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 509,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 517,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 531,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 538,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "shared",
    "start": 542,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "number",
    "start": 552,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 561,
    "end": 567
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 577,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 584,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "shared",
    "start": 588,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 598,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 617,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 633,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 641,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 647,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 654,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "shared",
    "start": 658,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 668,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 677,
    "end": 683
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 693,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 700,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "shared",
    "start": 704,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 714,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 733,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 748,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "make",
    "start": 757,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 770,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 778,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "mix",
    "start": 786,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 809,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 817,
    "end": 818
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 819,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 835,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 848,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 855,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "MixedClass",
    "start": 861,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "make",
    "start": 874,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  }
]
```
