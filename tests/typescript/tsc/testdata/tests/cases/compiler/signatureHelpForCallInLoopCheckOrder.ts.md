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
        "name": "XMLNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 252,
        "end": 259
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 260,
        "end": 262
      },
      "declare": false,
      "start": 242,
      "end": 262
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accessArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 292
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "XMLNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 306
              },
              "typeArguments": null,
              "start": 299,
              "end": 306
            },
            "start": 297,
            "end": 306
          },
          "start": 293,
          "end": 306
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "createIfNotExists",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 327,
                "end": 331
              },
              "start": 327,
              "end": 331
            },
            "start": 325,
            "end": 331
          },
          "start": 308,
          "end": 331
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "XMLNode",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 341
          },
          "typeArguments": null,
          "start": 334,
          "end": 341
        },
        "start": 332,
        "end": 341
      },
      "body": null,
      "expression": false,
      "start": 264,
      "end": 342
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accessArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 371
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "XMLNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 385
              },
              "typeArguments": null,
              "start": 378,
              "end": 385
            },
            "start": 376,
            "end": 385
          },
          "start": 372,
          "end": 385
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "createIfNotExists",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 406,
              "end": 413
            },
            "start": 404,
            "end": 413
          },
          "start": 387,
          "end": 413
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
                "name": "XMLNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 416,
                "end": 423
              },
              "typeArguments": null,
              "start": 416,
              "end": 423
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 426,
              "end": 435
            }
          ],
          "start": 416,
          "end": 435
        },
        "start": 414,
        "end": 435
      },
      "body": null,
      "expression": false,
      "start": 343,
      "end": 436
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accessCatalogEntry",
        "optional": false,
        "typeAnnotation": null,
        "start": 454,
        "end": 472
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "createIfNotExists",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 492,
              "end": 499
            },
            "start": 490,
            "end": 499
          },
          "start": 473,
          "end": 499
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
                "name": "XMLNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 502,
                "end": 509
              },
              "typeArguments": null,
              "start": 502,
              "end": 509
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 512,
              "end": 521
            }
          ],
          "start": 502,
          "end": 521
        },
        "start": 500,
        "end": 521
      },
      "body": null,
      "expression": false,
      "start": 437,
      "end": 522
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accessFieldValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 533,
        "end": 549
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "createIfNotExists",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 569,
              "end": 576
            },
            "start": 567,
            "end": 576
          },
          "start": 550,
          "end": 576
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
                "name": "XMLNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 586
              },
              "typeArguments": null,
              "start": 579,
              "end": 586
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 589,
              "end": 598
            }
          ],
          "start": 579,
          "end": 598
        },
        "start": 577,
        "end": 598
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cur",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 609,
                  "end": 612
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "accessCatalogEntry",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 615,
                    "end": 633
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createIfNotExists",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 634,
                      "end": 651
                    }
                  ],
                  "optional": false,
                  "start": 615,
                  "end": 652
                },
                "definite": false,
                "start": 609,
                "end": 652
              }
            ],
            "declare": false,
            "start": 605,
            "end": 653
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "cur",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 666
              },
              "prefix": true,
              "start": 662,
              "end": 666
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 685,
                    "end": 694
                  },
                  "start": 678,
                  "end": 695
                }
              ],
              "start": 668,
              "end": 701
            },
            "alternate": null,
            "start": 658,
            "end": 701
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 715,
                    "end": 716
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 719,
                    "end": 720
                  },
                  "definite": false,
                  "start": 715,
                  "end": 720
                }
              ],
              "declare": false,
              "start": 711,
              "end": 720
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 723
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 726,
                "end": 727
              },
              "start": 722,
              "end": 727
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 732
              },
              "start": 729,
              "end": 732
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tmp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 748,
                        "end": 751
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "accessArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 754,
                          "end": 765
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cur",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 766,
                            "end": 769
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "createIfNotExists",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 771,
                            "end": 788
                          }
                        ],
                        "optional": false,
                        "start": 754,
                        "end": 789
                      },
                      "definite": false,
                      "start": 748,
                      "end": 789
                    }
                  ],
                  "declare": false,
                  "start": 744,
                  "end": 790
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tmp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 804,
                      "end": 807
                    },
                    "prefix": true,
                    "start": 803,
                    "end": 807
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 830,
                          "end": 839
                        },
                        "start": 823,
                        "end": 840
                      }
                    ],
                    "start": 809,
                    "end": 850
                  },
                  "alternate": null,
                  "start": 799,
                  "end": 850
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cur",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 859,
                      "end": 862
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tmp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 865,
                      "end": 868
                    },
                    "start": 859,
                    "end": 868
                  },
                  "directive": null,
                  "start": 859,
                  "end": 869
                }
              ],
              "start": 734,
              "end": 875
            },
            "start": 706,
            "end": 875
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "cur",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 890
            },
            "start": 880,
            "end": 891
          }
        ],
        "start": 599,
        "end": 893
      },
      "expression": false,
      "start": 524,
      "end": 893
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 893
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 242,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "XMLNode",
    "start": 252,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 264,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 272,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "accessArray",
    "start": 281,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "XMLNode",
    "start": 299,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "createIfNotExists",
    "start": 308,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "XMLNode",
    "start": 334,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 343,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 351,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "accessArray",
    "start": 360,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 372,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "XMLNode",
    "start": 378,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "createIfNotExists",
    "start": 387,
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
    "value": "boolean",
    "start": 406,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "XMLNode",
    "start": 416,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 426,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 437,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 445,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "accessCatalogEntry",
    "start": 454,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "createIfNotExists",
    "start": 473,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 492,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "XMLNode",
    "start": 502,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 512,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 524,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "accessFieldValue",
    "start": 533,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "createIfNotExists",
    "start": 550,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 569,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "XMLNode",
    "start": 579,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 589,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 605,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "cur",
    "start": 609,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "accessCatalogEntry",
    "start": 615,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "createIfNotExists",
    "start": 634,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 658,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "cur",
    "start": 663,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 678,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 685,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 706,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 711,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 724,
    "end": 725
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 729,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 744,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "tmp",
    "start": 748,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "accessArray",
    "start": 754,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "cur",
    "start": 766,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "createIfNotExists",
    "start": 771,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 799,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "tmp",
    "start": 804,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 823,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 830,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "cur",
    "start": 859,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "tmp",
    "start": 865,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 880,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "cur",
    "start": 887,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 892,
    "end": 893
  }
]
```
