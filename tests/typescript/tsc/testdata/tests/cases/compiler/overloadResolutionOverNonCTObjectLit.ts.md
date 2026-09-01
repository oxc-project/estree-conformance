__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bugs",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IToken",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 56
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
                      "name": "startIndex",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 101
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 102,
                        "end": 108
                      },
                      "start": 101,
                      "end": 108
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 91,
                    "end": 109
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 146
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      },
                      "start": 146,
                      "end": 153
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 142,
                    "end": 154
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bracket",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 187,
                      "end": 194
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 195,
                        "end": 201
                      },
                      "start": 194,
                      "end": 201
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 187,
                    "end": 202
                  }
                ],
                "start": 57,
                "end": 220
              },
              "declare": false,
              "start": 40,
              "end": 220
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 33,
            "end": 220
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IState",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 277
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 278,
                "end": 297
              },
              "declare": false,
              "start": 261,
              "end": 297
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 254,
            "end": 297
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IStateToken",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 343
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IToken",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 352,
                    "end": 358
                  },
                  "typeArguments": null,
                  "start": 352,
                  "end": 358
                }
              ],
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
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 393,
                      "end": 398
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IState",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 400,
                          "end": 406
                        },
                        "typeArguments": null,
                        "start": 400,
                        "end": 406
                      },
                      "start": 398,
                      "end": 406
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 393,
                    "end": 407
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 446
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 448,
                        "end": 454
                      },
                      "start": 446,
                      "end": 454
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 440,
                    "end": 455
                  }
                ],
                "start": 359,
                "end": 473
              },
              "declare": false,
              "start": 322,
              "end": 473
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 315,
            "end": 473
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bug3",
              "optional": false,
              "typeAnnotation": null,
              "start": 516,
              "end": 520
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
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tokens",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IToken",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 568,
                                "end": 574
                              },
                              "typeArguments": null,
                              "start": 568,
                              "end": 574
                            },
                            "start": 568,
                            "end": 576
                          },
                          "start": 567,
                          "end": 576
                        },
                        "start": 561,
                        "end": 576
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 578,
                        "end": 580
                      },
                      "definite": false,
                      "start": 561,
                      "end": 580
                    }
                  ],
                  "declare": false,
                  "start": 557,
                  "end": 581
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tokens",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 620
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 621,
                        "end": 625
                      },
                      "optional": false,
                      "computed": false,
                      "start": 614,
                      "end": 625
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
                              "name": "startIndex",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 628,
                              "end": 638
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 640,
                              "end": 641
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 628,
                            "end": 641
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 643,
                              "end": 647
                            },
                            "value": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 649,
                              "end": 651
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 643,
                            "end": 651
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bracket",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 653,
                              "end": 660
                            },
                            "value": {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 662,
                              "end": 663
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 653,
                            "end": 663
                          }
                        ],
                        "start": 626,
                        "end": 665
                      }
                    ],
                    "optional": false,
                    "start": 614,
                    "end": 666
                  },
                  "directive": null,
                  "start": 614,
                  "end": 667
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tokens",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 700,
                        "end": 706
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 707,
                        "end": 711
                      },
                      "optional": false,
                      "computed": false,
                      "start": 700,
                      "end": 711
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IToken",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 713,
                            "end": 719
                          },
                          "typeArguments": null,
                          "start": 713,
                          "end": 719
                        },
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "startIndex",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 723,
                                "end": 733
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 735,
                                "end": 736
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 723,
                              "end": 736
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 738,
                                "end": 742
                              },
                              "value": {
                                "type": "Literal",
                                "value": "",
                                "raw": "''",
                                "start": 744,
                                "end": 746
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 738,
                              "end": 746
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bracket",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 748,
                                "end": 755
                              },
                              "value": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 757,
                                "end": 758
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 748,
                              "end": 758
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "state",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 760,
                                "end": 765
                              },
                              "value": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 767,
                                "end": 771
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 760,
                              "end": 771
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 773,
                                "end": 779
                              },
                              "value": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 781,
                                "end": 783
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 773,
                              "end": 783
                            }
                          ],
                          "start": 721,
                          "end": 785
                        },
                        "start": 712,
                        "end": 786
                      }
                    ],
                    "optional": false,
                    "start": 700,
                    "end": 787
                  },
                  "directive": null,
                  "start": 700,
                  "end": 788
                }
              ],
              "start": 523,
              "end": 806
            },
            "expression": false,
            "start": 507,
            "end": 806
          }
        ],
        "start": 15,
        "end": 808
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 808
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 808
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Bugs",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 33,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 40,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "IToken",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "startIndex",
    "start": 91,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "bracket",
    "start": 187,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 254,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 261,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 315,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 322,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "IStateToken",
    "start": 332,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 344,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "IToken",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 393,
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
    "value": "IState",
    "start": 400,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 440,
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
    "value": "number",
    "start": 448,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 507,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "bug3",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 561,
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
    "value": "IToken",
    "start": 568,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 614,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "startIndex",
    "start": 628,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 643,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "String",
    "value": "''",
    "start": 649,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "bracket",
    "start": 653,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 700,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 707,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "IToken",
    "start": 713,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "startIndex",
    "start": 723,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 733,
    "end": 734
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 738,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "String",
    "value": "''",
    "start": 744,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "bracket",
    "start": 748,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 760,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Null",
    "value": "null",
    "start": 767,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 773,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 781,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 807,
    "end": 808
  }
]
```
