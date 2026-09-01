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
        "name": "any1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 12,
        "end": 15
      },
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unknown1",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 30
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 33,
        "end": 40
      },
      "declare": false,
      "start": 17,
      "end": 41
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 54
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSBooleanKeyword",
              "start": 58,
              "end": 65
            },
            "start": 56,
            "end": 65
          },
          "start": 55,
          "end": 65
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 143,
              "end": 146
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 155
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 157,
                "end": 160
              },
              "start": 147,
              "end": 160
            },
            "finalizer": null,
            "start": 139,
            "end": 160
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 185,
              "end": 188
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 199,
                    "end": 202
                  },
                  "start": 197,
                  "end": 202
                },
                "start": 196,
                "end": 202
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 204,
                "end": 207
              },
              "start": 189,
              "end": 207
            },
            "finalizer": null,
            "start": 181,
            "end": 207
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 232,
              "end": 235
            },
            "handler": {
              "type": "CatchClause",
              "param": {
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
                      "name": "any1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 250
                    },
                    "typeArguments": null,
                    "start": 246,
                    "end": 250
                  },
                  "start": 244,
                  "end": 250
                },
                "start": 243,
                "end": 250
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 252,
                "end": 255
              },
              "start": 236,
              "end": 255
            },
            "finalizer": null,
            "start": 228,
            "end": 255
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 280,
              "end": 283
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 294,
                    "end": 301
                  },
                  "start": 292,
                  "end": 301
                },
                "start": 291,
                "end": 301
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 303,
                "end": 306
              },
              "start": 284,
              "end": 306
            },
            "finalizer": null,
            "start": 276,
            "end": 306
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 331,
              "end": 334
            },
            "handler": {
              "type": "CatchClause",
              "param": {
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
                      "name": "unknown1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 353
                    },
                    "typeArguments": null,
                    "start": 345,
                    "end": 353
                  },
                  "start": 343,
                  "end": 353
                },
                "start": 342,
                "end": 353
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 355,
                "end": 358
              },
              "start": 335,
              "end": 358
            },
            "finalizer": null,
            "start": 327,
            "end": 358
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 383,
              "end": 386
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 395
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 399,
                        "end": 400
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 401,
                        "end": 404
                      },
                      "optional": false,
                      "computed": false,
                      "start": 399,
                      "end": 404
                    },
                    "directive": null,
                    "start": 399,
                    "end": 405
                  }
                ],
                "start": 397,
                "end": 407
              },
              "start": 387,
              "end": 407
            },
            "finalizer": null,
            "start": 379,
            "end": 407
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 432,
              "end": 435
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 446,
                    "end": 449
                  },
                  "start": 444,
                  "end": 449
                },
                "start": 443,
                "end": 449
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 454
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 455,
                        "end": 458
                      },
                      "optional": false,
                      "computed": false,
                      "start": 453,
                      "end": 458
                    },
                    "directive": null,
                    "start": 453,
                    "end": 459
                  }
                ],
                "start": 451,
                "end": 461
              },
              "start": 436,
              "end": 461
            },
            "finalizer": null,
            "start": 428,
            "end": 461
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 486,
              "end": 489
            },
            "handler": {
              "type": "CatchClause",
              "param": {
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
                      "name": "any1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 500,
                      "end": 504
                    },
                    "typeArguments": null,
                    "start": 500,
                    "end": 504
                  },
                  "start": 498,
                  "end": 504
                },
                "start": 497,
                "end": 504
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 509
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 510,
                        "end": 513
                      },
                      "optional": false,
                      "computed": false,
                      "start": 508,
                      "end": 513
                    },
                    "directive": null,
                    "start": 508,
                    "end": 514
                  }
                ],
                "start": 506,
                "end": 516
              },
              "start": 490,
              "end": 516
            },
            "finalizer": null,
            "start": 482,
            "end": 516
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 541,
              "end": 544
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 555,
                    "end": 562
                  },
                  "start": 553,
                  "end": 562
                },
                "start": 552,
                "end": 562
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 566,
                          "end": 573
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 577
                        },
                        "optional": false,
                        "computed": false,
                        "start": 566,
                        "end": 577
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 578,
                          "end": 579
                        }
                      ],
                      "optional": false,
                      "start": 566,
                      "end": 580
                    },
                    "directive": null,
                    "start": 566,
                    "end": 581
                  }
                ],
                "start": 564,
                "end": 583
              },
              "start": 545,
              "end": 583
            },
            "finalizer": null,
            "start": 537,
            "end": 583
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 608,
              "end": 611
            },
            "handler": {
              "type": "CatchClause",
              "param": {
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
                      "name": "unknown1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 622,
                      "end": 630
                    },
                    "typeArguments": null,
                    "start": 622,
                    "end": 630
                  },
                  "start": 620,
                  "end": 630
                },
                "start": 619,
                "end": 630
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 634,
                          "end": 641
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 642,
                          "end": 645
                        },
                        "optional": false,
                        "computed": false,
                        "start": 634,
                        "end": 645
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 646,
                          "end": 647
                        }
                      ],
                      "optional": false,
                      "start": 634,
                      "end": 648
                    },
                    "directive": null,
                    "start": 634,
                    "end": 649
                  }
                ],
                "start": 632,
                "end": 651
              },
              "start": 612,
              "end": 651
            },
            "finalizer": null,
            "start": 604,
            "end": 651
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 676,
              "end": 679
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 690,
                    "end": 697
                  },
                  "start": 688,
                  "end": 697
                },
                "start": 687,
                "end": 697
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 701,
                        "end": 702
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 703,
                        "end": 706
                      },
                      "optional": false,
                      "computed": false,
                      "start": 701,
                      "end": 706
                    },
                    "directive": null,
                    "start": 701,
                    "end": 707
                  }
                ],
                "start": 699,
                "end": 709
              },
              "start": 680,
              "end": 709
            },
            "finalizer": null,
            "start": 672,
            "end": 709
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 739,
              "end": 742
            },
            "handler": {
              "type": "CatchClause",
              "param": {
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
                      "name": "unknown1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 753,
                      "end": 761
                    },
                    "typeArguments": null,
                    "start": 753,
                    "end": 761
                  },
                  "start": 751,
                  "end": 761
                },
                "start": 750,
                "end": 761
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 765,
                        "end": 766
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 767,
                        "end": 770
                      },
                      "optional": false,
                      "computed": false,
                      "start": 765,
                      "end": 770
                    },
                    "directive": null,
                    "start": 765,
                    "end": 771
                  }
                ],
                "start": 763,
                "end": 773
              },
              "start": 743,
              "end": 773
            },
            "finalizer": null,
            "start": 735,
            "end": 773
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 803,
              "end": 806
            },
            "handler": {
              "type": "CatchClause",
              "param": {
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
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 817,
                      "end": 822
                    },
                    "typeArguments": null,
                    "start": 817,
                    "end": 822
                  },
                  "start": 815,
                  "end": 822
                },
                "start": 814,
                "end": 822
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 824,
                "end": 827
              },
              "start": 807,
              "end": 827
            },
            "finalizer": null,
            "start": 799,
            "end": 827
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 857,
              "end": 860
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 871,
                    "end": 877
                  },
                  "start": 869,
                  "end": 877
                },
                "start": 868,
                "end": 877
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 879,
                "end": 882
              },
              "start": 861,
              "end": 882
            },
            "finalizer": null,
            "start": 853,
            "end": 882
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 915,
                        "end": 922
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 923,
                        "end": 926
                      },
                      "optional": false,
                      "computed": false,
                      "start": 915,
                      "end": 926
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 915,
                    "end": 928
                  },
                  "directive": null,
                  "start": 915,
                  "end": 929
                }
              ],
              "start": 913,
              "end": 931
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 964,
                    "end": 970
                  },
                  "start": 962,
                  "end": 970
                },
                "start": 961,
                "end": 970
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1012,
                          "end": 1019
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1020,
                          "end": 1023
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1012,
                        "end": 1023
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1024,
                              "end": 1025
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1026,
                              "end": 1037
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1024,
                            "end": 1037
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1024,
                          "end": 1039
                        }
                      ],
                      "optional": false,
                      "start": 1012,
                      "end": 1040
                    },
                    "directive": null,
                    "start": 1012,
                    "end": 1041
                  }
                ],
                "start": 972,
                "end": 1047
              },
              "start": 954,
              "end": 1047
            },
            "finalizer": null,
            "start": 909,
            "end": 1047
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1138,
              "end": 1141
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1149,
                "end": 1150
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1161,
                              "end": 1167
                            },
                            "start": 1159,
                            "end": 1167
                          },
                          "start": 1158,
                          "end": 1167
                        },
                        "init": null,
                        "definite": false,
                        "start": 1158,
                        "end": 1167
                      }
                    ],
                    "declare": false,
                    "start": 1154,
                    "end": 1168
                  }
                ],
                "start": 1152,
                "end": 1170
              },
              "start": 1142,
              "end": 1170
            },
            "finalizer": null,
            "start": 1134,
            "end": 1170
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1179,
              "end": 1182
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1190,
                "end": 1191
              },
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1202,
                              "end": 1208
                            },
                            "start": 1200,
                            "end": 1208
                          },
                          "start": 1199,
                          "end": 1208
                        },
                        "init": null,
                        "definite": false,
                        "start": 1199,
                        "end": 1208
                      }
                    ],
                    "declare": false,
                    "start": 1195,
                    "end": 1209
                  }
                ],
                "start": 1193,
                "end": 1211
              },
              "start": 1183,
              "end": 1211
            },
            "finalizer": null,
            "start": 1175,
            "end": 1211
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1220,
              "end": 1223
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1231,
                "end": 1232
              },
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 1243,
                              "end": 1250
                            },
                            "start": 1241,
                            "end": 1250
                          },
                          "start": 1240,
                          "end": 1250
                        },
                        "init": null,
                        "definite": false,
                        "start": 1240,
                        "end": 1250
                      }
                    ],
                    "declare": false,
                    "start": 1236,
                    "end": 1251
                  }
                ],
                "start": 1234,
                "end": 1253
              },
              "start": 1224,
              "end": 1253
            },
            "finalizer": null,
            "start": 1216,
            "end": 1253
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1263,
              "end": 1266
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1276,
                      "end": 1277
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1276,
                      "end": 1277
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1276,
                    "end": 1277
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1279
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1281,
                "end": 1284
              },
              "start": 1267,
              "end": 1284
            },
            "finalizer": null,
            "start": 1259,
            "end": 1284
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1309,
              "end": 1312
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1322,
                      "end": 1323
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1322,
                      "end": 1323
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1322,
                    "end": 1323
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1327,
                    "end": 1330
                  },
                  "start": 1325,
                  "end": 1330
                },
                "start": 1320,
                "end": 1330
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1334,
                        "end": 1335
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1336,
                        "end": 1339
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1334,
                      "end": 1339
                    },
                    "directive": null,
                    "start": 1334,
                    "end": 1340
                  }
                ],
                "start": 1332,
                "end": 1342
              },
              "start": 1313,
              "end": 1342
            },
            "finalizer": null,
            "start": 1305,
            "end": 1342
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1367,
              "end": 1370
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1380,
                      "end": 1381
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1380,
                      "end": 1381
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1380,
                    "end": 1381
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "any1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1385,
                      "end": 1389
                    },
                    "typeArguments": null,
                    "start": 1385,
                    "end": 1389
                  },
                  "start": 1383,
                  "end": 1389
                },
                "start": 1378,
                "end": 1389
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1393,
                        "end": 1394
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1395,
                        "end": 1398
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1393,
                      "end": 1398
                    },
                    "directive": null,
                    "start": 1393,
                    "end": 1399
                  }
                ],
                "start": 1391,
                "end": 1400
              },
              "start": 1371,
              "end": 1400
            },
            "finalizer": null,
            "start": 1363,
            "end": 1400
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1425,
              "end": 1428
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1438,
                      "end": 1439
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1438,
                      "end": 1439
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1438,
                    "end": 1439
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1443,
                    "end": 1450
                  },
                  "start": 1441,
                  "end": 1450
                },
                "start": 1436,
                "end": 1450
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1454,
                          "end": 1461
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1462,
                          "end": 1465
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1454,
                        "end": 1465
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1466,
                          "end": 1467
                        }
                      ],
                      "optional": false,
                      "start": 1454,
                      "end": 1468
                    },
                    "directive": null,
                    "start": 1454,
                    "end": 1469
                  }
                ],
                "start": 1452,
                "end": 1471
              },
              "start": 1429,
              "end": 1471
            },
            "finalizer": null,
            "start": 1421,
            "end": 1471
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1508,
              "end": 1511
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1521,
                      "end": 1522
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1521,
                      "end": 1522
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1521,
                    "end": 1522
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unknown1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1526,
                      "end": 1534
                    },
                    "typeArguments": null,
                    "start": 1526,
                    "end": 1534
                  },
                  "start": 1524,
                  "end": 1534
                },
                "start": 1519,
                "end": 1534
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1538,
                          "end": 1545
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1546,
                          "end": 1549
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1538,
                        "end": 1549
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1550,
                          "end": 1551
                        }
                      ],
                      "optional": false,
                      "start": 1538,
                      "end": 1552
                    },
                    "directive": null,
                    "start": 1538,
                    "end": 1553
                  }
                ],
                "start": 1536,
                "end": 1555
              },
              "start": 1512,
              "end": 1555
            },
            "finalizer": null,
            "start": 1504,
            "end": 1555
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1592,
              "end": 1595
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1605,
                      "end": 1606
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1605,
                      "end": 1606
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1605,
                    "end": 1606
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 1610,
                    "end": 1616
                  },
                  "start": 1608,
                  "end": 1616
                },
                "start": 1603,
                "end": 1616
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1618,
                "end": 1621
              },
              "start": 1596,
              "end": 1621
            },
            "finalizer": null,
            "start": 1588,
            "end": 1621
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1651,
              "end": 1654
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1664,
                      "end": 1665
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1664,
                      "end": 1665
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1664,
                    "end": 1665
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1669,
                      "end": 1674
                    },
                    "typeArguments": null,
                    "start": 1669,
                    "end": 1674
                  },
                  "start": 1667,
                  "end": 1674
                },
                "start": 1662,
                "end": 1674
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1676,
                "end": 1679
              },
              "start": 1655,
              "end": 1679
            },
            "finalizer": null,
            "start": 1647,
            "end": 1679
          }
        ],
        "start": 67,
        "end": 1702
      },
      "expression": false,
      "start": 43,
      "end": 1702
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1702
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "any1",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 17,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "unknown1",
    "start": 22,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 33,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 43,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 189,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "any1",
    "start": 246,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 284,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 294,
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
    "value": "{",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 327,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "unknown1",
    "start": 345,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 379,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 387,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 401,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 428,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "catch",
    "start": 436,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 446,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 490,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "any1",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 510,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 537,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 545,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 555,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 566,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 582,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 612,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "unknown1",
    "start": 622,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 634,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 642,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 680,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 690,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 703,
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
    "value": "try",
    "start": 735,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 743,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "unknown1",
    "start": 753,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 767,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 799,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 805,
    "end": 806
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 807,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 817,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 853,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 861,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 871,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 909,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 915,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 923,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 954,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 964,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1012,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 1026,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1142,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1154,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1161,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1175,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1183,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1195,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1202,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1216,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1224,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1243,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1259,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1267,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1305,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1313,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1327,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1336,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1363,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1371,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "any1",
    "start": 1385,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1395,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1421,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1429,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1443,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1454,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1462,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1504,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1512,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "unknown1",
    "start": 1526,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1538,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1546,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1588,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1596,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1610,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1647,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1655,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1669,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1701,
    "end": 1702
  }
]
```
