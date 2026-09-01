__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "WithDefault",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 79
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 95
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
                    "type": "TSParameterProperty",
                    "accessibility": null,
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "timestamp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 114
                      },
                      "right": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 121,
                          "end": 125
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 117,
                        "end": 127
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 127
                    },
                    "readonly": true,
                    "static": false,
                    "start": 96,
                    "end": 127
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 129,
                  "end": 131
                },
                "expression": false,
                "start": 95,
                "end": 131
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 84,
              "end": 131
            }
          ],
          "start": 80,
          "end": 133
        },
        "abstract": false,
        "declare": false,
        "start": 62,
        "end": 133
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 55,
      "end": 133
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "WithoutDefault",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 229
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 234,
                "end": 245
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
                    "type": "TSParameterProperty",
                    "accessibility": null,
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "timestamp",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 267,
                            "end": 271
                          },
                          "typeArguments": null,
                          "start": 267,
                          "end": 271
                        },
                        "start": 265,
                        "end": 271
                      },
                      "start": 255,
                      "end": 271
                    },
                    "readonly": true,
                    "static": false,
                    "start": 246,
                    "end": 271
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 273,
                  "end": 275
                },
                "expression": false,
                "start": 245,
                "end": 275
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 234,
              "end": 275
            }
          ],
          "start": 230,
          "end": 277
        },
        "abstract": false,
        "declare": false,
        "start": 209,
        "end": 277
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 202,
      "end": 277
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExplicitUndefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 363
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 379
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
                    "type": "TSParameterProperty",
                    "accessibility": null,
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "timestamp",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Date",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 400,
                                  "end": 404
                                },
                                "typeArguments": null,
                                "start": 400,
                                "end": 404
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 407,
                                "end": 416
                              }
                            ],
                            "start": 400,
                            "end": 416
                          },
                          "start": 398,
                          "end": 416
                        },
                        "start": 389,
                        "end": 416
                      },
                      "right": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 423,
                          "end": 427
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 419,
                        "end": 429
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 389,
                      "end": 429
                    },
                    "readonly": true,
                    "static": false,
                    "start": 380,
                    "end": 429
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 431,
                  "end": 433
                },
                "expression": false,
                "start": 379,
                "end": 433
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 368,
              "end": 433
            }
          ],
          "start": 364,
          "end": 435
        },
        "abstract": false,
        "declare": false,
        "start": 340,
        "end": 435
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 333,
      "end": 435
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PrivateWithDefault",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 522
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 538
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
                    "type": "TSParameterProperty",
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "timestamp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 547,
                        "end": 556
                      },
                      "right": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 563,
                          "end": 567
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 559,
                        "end": 569
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 547,
                      "end": 569
                    },
                    "readonly": false,
                    "static": false,
                    "start": 539,
                    "end": 569
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 571,
                  "end": 573
                },
                "expression": false,
                "start": 538,
                "end": 573
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 527,
              "end": 573
            }
          ],
          "start": 523,
          "end": 575
        },
        "abstract": false,
        "declare": false,
        "start": 498,
        "end": 575
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 491,
      "end": 575
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PublicWithDefault",
          "optional": false,
          "typeAnnotation": null,
          "start": 643,
          "end": 660
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 665,
                "end": 676
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
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "timestamp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 684,
                        "end": 693
                      },
                      "right": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 700,
                          "end": 704
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 696,
                        "end": 706
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 684,
                      "end": 706
                    },
                    "readonly": false,
                    "static": false,
                    "start": 677,
                    "end": 706
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 708,
                  "end": 710
                },
                "expression": false,
                "start": 676,
                "end": 710
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 665,
              "end": 710
            }
          ],
          "start": 661,
          "end": 712
        },
        "abstract": false,
        "declare": false,
        "start": 637,
        "end": 712
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 630,
      "end": 712
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 55,
  "end": 712
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 55,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 62,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "WithDefault",
    "start": 68,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 84,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 96,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "timestamp",
    "start": 105,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 202,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 209,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "WithoutDefault",
    "start": 215,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 234,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 246,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "timestamp",
    "start": 255,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 267,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 333,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 340,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "ExplicitUndefined",
    "start": 346,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 368,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 380,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "timestamp",
    "start": 389,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 407,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 419,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 423,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 491,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 498,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "PrivateWithDefault",
    "start": 504,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 527,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 539,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "timestamp",
    "start": 547,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 559,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 563,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "export",
    "start": 630,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 637,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "PublicWithDefault",
    "start": 643,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 665,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 677,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "timestamp",
    "start": 684,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 696,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 700,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 711,
    "end": 712
  }
]
```
