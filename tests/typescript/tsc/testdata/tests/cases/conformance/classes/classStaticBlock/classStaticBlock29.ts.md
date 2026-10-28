__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 292
      },
      "typeParameters": null,
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
              "name": "count",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 319
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 321,
                "end": 327
              },
              "start": 319,
              "end": 327
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 299,
            "end": 328
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 349
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 357,
                    "end": 363
                  },
                  "start": 354,
                  "end": 363
                },
                "start": 351,
                "end": 363
              },
              "start": 349,
              "end": 363
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 333,
            "end": 364
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 383
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 397,
                        "end": 403
                      },
                      "start": 394,
                      "end": 403
                    },
                    "start": 391,
                    "end": 403
                  },
                  "start": 388,
                  "end": 403
                },
                "start": 385,
                "end": 403
              },
              "start": 383,
              "end": 403
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 369,
            "end": 404
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getIndexed",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 427
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 435,
                    "end": 441
                  },
                  "start": 432,
                  "end": 441
                },
                "start": 429,
                "end": 441
              },
              "start": 427,
              "end": 441
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 409,
            "end": 442
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 451
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 471,
                      "end": 472
                    },
                    "start": 464,
                    "end": 473
                  }
                ],
                "start": 454,
                "end": 479
              },
              "expression": false,
              "start": 451,
              "end": 479
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 448,
            "end": 479
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 590,
                      "end": 593
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "count",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 594,
                      "end": 599
                    },
                    "optional": false,
                    "computed": false,
                    "start": 590,
                    "end": 599
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 602,
                    "end": 603
                  },
                  "start": 590,
                  "end": 603
                },
                "directive": null,
                "start": 590,
                "end": 604
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 613,
                      "end": 617
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "count",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 618,
                      "end": 623
                    },
                    "optional": false,
                    "computed": false,
                    "start": 613,
                    "end": 623
                  },
                  "start": 613,
                  "end": 625
                },
                "directive": null,
                "start": 613,
                "end": 626
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 635,
                        "end": 638
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prototype",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 639,
                        "end": 648
                      },
                      "optional": false,
                      "computed": false,
                      "start": 635,
                      "end": 648
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 649,
                      "end": 657
                    },
                    "optional": false,
                    "computed": false,
                    "start": 635,
                    "end": 657
                  },
                  "right": {
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
                        "name": "this",
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
                              "start": 676,
                              "end": 679
                            },
                            "typeArguments": null,
                            "start": 676,
                            "end": 679
                          },
                          "start": 674,
                          "end": 679
                        },
                        "start": 670,
                        "end": 679
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 702,
                                "end": 706
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 707,
                                "end": 710
                              },
                              "optional": false,
                              "computed": false,
                              "start": 702,
                              "end": 710
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 702,
                            "end": 712
                          },
                          "start": 695,
                          "end": 713
                        }
                      ],
                      "start": 681,
                      "end": 723
                    },
                    "expression": false,
                    "start": 660,
                    "end": 723
                  },
                  "start": 635,
                  "end": 723
                },
                "directive": null,
                "start": 635,
                "end": 724
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 733,
                        "end": 736
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prototype",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 737,
                        "end": 746
                      },
                      "optional": false,
                      "computed": false,
                      "start": 733,
                      "end": 746
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getBar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 747,
                      "end": 753
                    },
                    "optional": false,
                    "computed": false,
                    "start": 733,
                    "end": 753
                  },
                  "right": {
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
                        "name": "this",
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
                              "start": 772,
                              "end": 775
                            },
                            "typeArguments": null,
                            "start": 772,
                            "end": 775
                          },
                          "start": 770,
                          "end": 775
                        },
                        "start": 766,
                        "end": 775
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 804,
                                  "end": 808
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 809,
                                  "end": 812
                                },
                                "optional": false,
                                "computed": false,
                                "start": 804,
                                "end": 812
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 804,
                              "end": 814
                            },
                            "id": null,
                            "generator": false,
                            "start": 798,
                            "end": 814
                          },
                          "start": 791,
                          "end": 815
                        }
                      ],
                      "start": 777,
                      "end": 825
                    },
                    "expression": false,
                    "start": 756,
                    "end": 825
                  },
                  "start": 733,
                  "end": 825
                },
                "directive": null,
                "start": 733,
                "end": 826
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 835,
                        "end": 839
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prototype",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 840,
                        "end": 849
                      },
                      "optional": false,
                      "computed": false,
                      "start": 835,
                      "end": 849
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getIndexed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 850,
                      "end": 860
                    },
                    "optional": false,
                    "computed": false,
                    "start": 835,
                    "end": 860
                  },
                  "right": {
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
                        "name": "this",
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
                              "start": 879,
                              "end": 882
                            },
                            "typeArguments": null,
                            "start": 879,
                            "end": 882
                          },
                          "start": 877,
                          "end": 882
                        },
                        "start": 873,
                        "end": 882
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 905,
                                "end": 909
                              },
                              "property": {
                                "type": "Literal",
                                "value": "bar",
                                "raw": "\"bar\"",
                                "start": 910,
                                "end": 915
                              },
                              "optional": false,
                              "computed": true,
                              "start": 905,
                              "end": 916
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 905,
                            "end": 918
                          },
                          "start": 898,
                          "end": 919
                        }
                      ],
                      "start": 884,
                      "end": 929
                    },
                    "expression": false,
                    "start": 863,
                    "end": 929
                  },
                  "start": 835,
                  "end": 929
                },
                "directive": null,
                "start": 835,
                "end": 930
              }
            ],
            "start": 485,
            "end": 936
          }
        ],
        "start": 293,
        "end": 938
      },
      "abstract": false,
      "declare": false,
      "start": 283,
      "end": 938
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 944,
              "end": 947
            },
            "typeArguments": null,
            "arguments": [],
            "start": 940,
            "end": 949
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 950,
            "end": 958
          },
          "optional": false,
          "computed": false,
          "start": 940,
          "end": 958
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 940,
        "end": 960
      },
      "directive": null,
      "start": 940,
      "end": 961
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 961
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 283,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 299,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 307,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 333,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "toObject",
    "start": 341,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 354,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 369,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "getBar",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 388,
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
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 394,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 409,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "getIndexed",
    "start": 417,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 432,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 435,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 448,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 464,
    "end": 470
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 485,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 594,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 613,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 618,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 623,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 635,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 639,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "toObject",
    "start": 649,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 660,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 670,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 695,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 702,
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
    "value": "bar",
    "start": 707,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 733,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 737,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "getBar",
    "start": 747,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 754,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 756,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 766,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 791,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 801,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 804,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 809,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 835,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 840,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "getIndexed",
    "start": 850,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 863,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 873,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 879,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 884,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 898,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 905,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 909,
    "end": 910
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 910,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 940,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 944,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "toObject",
    "start": 950,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  }
]
```
