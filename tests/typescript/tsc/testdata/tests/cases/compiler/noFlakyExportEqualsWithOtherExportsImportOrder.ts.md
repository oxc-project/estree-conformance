__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ma",
        "raw": "\"ma\"",
        "start": 15,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 36
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pa",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 42
                },
                "exportKind": "value",
                "start": 35,
                "end": 42
              }
            ],
            "source": {
              "type": "Literal",
              "value": "xa",
              "raw": "\"xa\"",
              "start": 50,
              "end": 54
            },
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 55
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
                    "name": "ma",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 77,
                          "end": 78
                        },
                        "start": 77,
                        "end": 78
                      },
                      "start": 75,
                      "end": 78
                    },
                    "start": 73,
                    "end": 78
                  },
                  "init": null,
                  "definite": false,
                  "start": 73,
                  "end": 78
                }
              ],
              "declare": false,
              "start": 67,
              "end": 79
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 60,
            "end": 79
          }
        ],
        "start": 20,
        "end": 81
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 81
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "mb",
        "raw": "\"mb\"",
        "start": 97,
        "end": 101
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 118
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 124
                },
                "exportKind": "value",
                "start": 117,
                "end": 124
              }
            ],
            "source": {
              "type": "Literal",
              "value": "xb",
              "raw": "\"xb\"",
              "start": 132,
              "end": 136
            },
            "exportKind": "value",
            "attributes": [],
            "start": 108,
            "end": 137
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
                    "name": "mb",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 159,
                          "end": 160
                        },
                        "start": 159,
                        "end": 160
                      },
                      "start": 157,
                      "end": 160
                    },
                    "start": 155,
                    "end": 160
                  },
                  "init": null,
                  "definite": false,
                  "start": 155,
                  "end": 160
                }
              ],
              "declare": false,
              "start": 149,
              "end": 161
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 142,
            "end": 161
          }
        ],
        "start": 102,
        "end": 163
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 82,
      "end": 163
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "xa",
        "raw": "\"xa\"",
        "start": 179,
        "end": 183
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "mb",
                  "raw": "\"mb\"",
                  "start": 213,
                  "end": 217
                },
                "options": null,
                "qualifier": null,
                "typeArguments": null,
                "start": 206,
                "end": 218
              },
              "typeArguments": null,
              "start": 199,
              "end": 218
            },
            "declare": false,
            "start": 190,
            "end": 219
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 235
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 245
                },
                "typeArguments": null,
                "start": 244,
                "end": 245
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 249
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 251,
                        "end": 252
                      },
                      "start": 251,
                      "end": 252
                    },
                    "start": 249,
                    "end": 252
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 248,
                  "end": 252
                }
              ],
              "start": 246,
              "end": 254
            },
            "declare": false,
            "start": 224,
            "end": 254
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 268,
                        "end": 269
                      },
                      "typeArguments": null,
                      "start": 268,
                      "end": 269
                    },
                    "start": 266,
                    "end": 269
                  },
                  "start": 265,
                  "end": 269
                },
                "init": null,
                "definite": false,
                "start": 265,
                "end": 269
              }
            ],
            "declare": false,
            "start": 259,
            "end": 270
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 285
            },
            "start": 275,
            "end": 286
          }
        ],
        "start": 184,
        "end": 288
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 164,
      "end": 288
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "xb",
        "raw": "\"xb\"",
        "start": 304,
        "end": 308
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 321
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "ma",
                  "raw": "\"ma\"",
                  "start": 338,
                  "end": 342
                },
                "options": null,
                "qualifier": null,
                "typeArguments": null,
                "start": 331,
                "end": 343
              },
              "typeArguments": null,
              "start": 324,
              "end": 343
            },
            "declare": false,
            "start": 315,
            "end": 344
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 360
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 370
                },
                "typeArguments": null,
                "start": 369,
                "end": 370
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 374
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 376,
                        "end": 377
                      },
                      "start": 376,
                      "end": 377
                    },
                    "start": 374,
                    "end": 377
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 373,
                  "end": 377
                }
              ],
              "start": 371,
              "end": 379
            },
            "declare": false,
            "start": 349,
            "end": 379
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 393,
                        "end": 394
                      },
                      "typeArguments": null,
                      "start": 393,
                      "end": 394
                    },
                    "start": 391,
                    "end": 394
                  },
                  "start": 390,
                  "end": 394
                },
                "init": null,
                "definite": false,
                "start": 390,
                "end": 394
              }
            ],
            "declare": false,
            "start": 384,
            "end": 395
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 410
            },
            "start": 400,
            "end": 411
          }
        ],
        "start": 309,
        "end": 413
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 289,
      "end": 413
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ia",
        "raw": "\"ia\"",
        "start": 429,
        "end": 433
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 446
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "ma",
                  "raw": "\"ma\"",
                  "start": 463,
                  "end": 467
                },
                "options": null,
                "qualifier": null,
                "typeArguments": null,
                "start": 456,
                "end": 468
              },
              "typeArguments": null,
              "start": 449,
              "end": 468
            },
            "declare": false,
            "start": 440,
            "end": 469
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 485
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 495
                },
                "typeArguments": null,
                "start": 494,
                "end": 495
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 498,
                    "end": 499
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 501,
                        "end": 502
                      },
                      "start": 501,
                      "end": 502
                    },
                    "start": 499,
                    "end": 502
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 498,
                  "end": 502
                }
              ],
              "start": 496,
              "end": 504
            },
            "declare": false,
            "start": 474,
            "end": 504
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 518,
                        "end": 519
                      },
                      "typeArguments": null,
                      "start": 518,
                      "end": 519
                    },
                    "start": 516,
                    "end": 519
                  },
                  "start": 515,
                  "end": 519
                },
                "init": null,
                "definite": false,
                "start": 515,
                "end": 519
              }
            ],
            "declare": false,
            "start": 509,
            "end": 520
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 535
            },
            "start": 525,
            "end": 536
          }
        ],
        "start": 434,
        "end": 538
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 414,
      "end": 538
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ib",
        "raw": "\"ib\"",
        "start": 554,
        "end": 558
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 571
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "mb",
                  "raw": "\"mb\"",
                  "start": 588,
                  "end": 592
                },
                "options": null,
                "qualifier": null,
                "typeArguments": null,
                "start": 581,
                "end": 593
              },
              "typeArguments": null,
              "start": 574,
              "end": 593
            },
            "declare": false,
            "start": 565,
            "end": 594
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 610
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 620
                },
                "typeArguments": null,
                "start": 619,
                "end": 620
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 623,
                    "end": 624
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 626,
                        "end": 627
                      },
                      "start": 626,
                      "end": 627
                    },
                    "start": 624,
                    "end": 627
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 623,
                  "end": 627
                }
              ],
              "start": 621,
              "end": 629
            },
            "declare": false,
            "start": 599,
            "end": 629
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 643,
                        "end": 644
                      },
                      "typeArguments": null,
                      "start": 643,
                      "end": 644
                    },
                    "start": 641,
                    "end": 644
                  },
                  "start": 640,
                  "end": 644
                },
                "init": null,
                "definite": false,
                "start": 640,
                "end": 644
              }
            ],
            "declare": false,
            "start": 634,
            "end": 645
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 659,
              "end": 660
            },
            "start": 650,
            "end": 661
          }
        ],
        "start": 559,
        "end": 663
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 539,
      "end": 663
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "mm",
        "raw": "\"mm\"",
        "start": 679,
        "end": 683
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 701,
                            "end": 702
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 704,
                                "end": 705
                              },
                              "start": 704,
                              "end": 705
                            },
                            "start": 702,
                            "end": 705
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 701,
                          "end": 705
                        }
                      ],
                      "start": 699,
                      "end": 707
                    },
                    "start": 697,
                    "end": 707
                  },
                  "start": 696,
                  "end": 707
                },
                "init": null,
                "definite": false,
                "start": 696,
                "end": 707
              }
            ],
            "declare": false,
            "start": 690,
            "end": 708
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 723
            },
            "start": 713,
            "end": 724
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 738,
                  "end": 739
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 743,
                  "end": 744
                },
                "exportKind": "value",
                "start": 738,
                "end": 744
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ia",
              "raw": "\"ia\"",
              "start": 752,
              "end": 756
            },
            "exportKind": "value",
            "attributes": [],
            "start": 729,
            "end": 757
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 772
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 776,
                  "end": 777
                },
                "exportKind": "value",
                "start": 771,
                "end": 777
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ib",
              "raw": "\"ib\"",
              "start": 785,
              "end": 789
            },
            "exportKind": "value",
            "attributes": [],
            "start": 762,
            "end": 790
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F1",
                "optional": false,
                "typeAnnotation": null,
                "start": 812,
                "end": 814
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 815,
                "end": 817
              },
              "declare": false,
              "start": 802,
              "end": 817
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 795,
            "end": 817
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null,
                "start": 839,
                "end": 841
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 842,
                "end": 844
              },
              "declare": false,
              "start": 829,
              "end": 844
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 822,
            "end": 844
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F3",
                "optional": false,
                "typeAnnotation": null,
                "start": 866,
                "end": 868
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 869,
                "end": 871
              },
              "declare": false,
              "start": 856,
              "end": 871
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 849,
            "end": 871
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F4",
                "optional": false,
                "typeAnnotation": null,
                "start": 893,
                "end": 895
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 896,
                "end": 898
              },
              "declare": false,
              "start": 883,
              "end": 898
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 876,
            "end": 898
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F5",
                "optional": false,
                "typeAnnotation": null,
                "start": 920,
                "end": 922
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 923,
                "end": 925
              },
              "declare": false,
              "start": 910,
              "end": 925
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 903,
            "end": 925
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F6",
                "optional": false,
                "typeAnnotation": null,
                "start": 947,
                "end": 949
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 950,
                "end": 952
              },
              "declare": false,
              "start": 937,
              "end": 952
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 930,
            "end": 952
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F7",
                "optional": false,
                "typeAnnotation": null,
                "start": 974,
                "end": 976
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 977,
                "end": 979
              },
              "declare": false,
              "start": 964,
              "end": 979
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 957,
            "end": 979
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1001,
                "end": 1003
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1004,
                "end": 1006
              },
              "declare": false,
              "start": 991,
              "end": 1006
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 984,
            "end": 1006
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F9",
                "optional": false,
                "typeAnnotation": null,
                "start": 1028,
                "end": 1030
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1031,
                "end": 1033
              },
              "declare": false,
              "start": 1018,
              "end": 1033
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1011,
            "end": 1033
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F10",
                "optional": false,
                "typeAnnotation": null,
                "start": 1055,
                "end": 1058
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1059,
                "end": 1061
              },
              "declare": false,
              "start": 1045,
              "end": 1061
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1038,
            "end": 1061
          }
        ],
        "start": 684,
        "end": 1063
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 664,
      "end": 1063
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1064
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"ma\"",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 37,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "pa",
    "start": 40,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 45,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"xa\"",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "ma",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 82,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 90,
    "end": 96
  },
  {
    "type": "String",
    "value": "\"mb\"",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 119,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "pb",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 127,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"xb\"",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 142,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 149,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "mb",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 164,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 172,
    "end": 178
  },
  {
    "type": "String",
    "value": "\"xa\"",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 190,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 199,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "String",
    "value": "\"mb\"",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 224,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 236,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 259,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 289,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 297,
    "end": 303
  },
  {
    "type": "String",
    "value": "\"xb\"",
    "start": 304,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 315,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 324,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 331,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "String",
    "value": "\"ma\"",
    "start": 338,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 349,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 361,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 384,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 400,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 414,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 422,
    "end": 428
  },
  {
    "type": "String",
    "value": "\"ia\"",
    "start": 429,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 440,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 449,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "String",
    "value": "\"ma\"",
    "start": 463,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 474,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 486,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 509,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 525,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 539,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 547,
    "end": 553
  },
  {
    "type": "String",
    "value": "\"ib\"",
    "start": 554,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 565,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 574,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "String",
    "value": "\"mb\"",
    "start": 588,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 599,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 611,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 634,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 650,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 664,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 672,
    "end": 678
  },
  {
    "type": "String",
    "value": "\"mm\"",
    "start": 679,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 690,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 713,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "o",
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
    "type": "Keyword",
    "value": "export",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 740,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "from",
    "start": 747,
    "end": 751
  },
  {
    "type": "String",
    "value": "\"ia\"",
    "start": 752,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 762,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 773,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 780,
    "end": 784
  },
  {
    "type": "String",
    "value": "\"ib\"",
    "start": 785,
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
    "value": "export",
    "start": 795,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 802,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 812,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 816,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 822,
    "end": 828
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 829,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 839,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 849,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 856,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 866,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 876,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 883,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "F4",
    "start": 893,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 903,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 910,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "F5",
    "start": 920,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 930,
    "end": 936
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 937,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "F6",
    "start": 947,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 957,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 964,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "F7",
    "start": 974,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 984,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 991,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "F8",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1011,
    "end": 1017
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1018,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "F9",
    "start": 1028,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1038,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1045,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "F10",
    "start": 1055,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1062,
    "end": 1063
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "importKind": "value",
          "start": 49,
          "end": 50
        }
      ],
      "source": {
        "type": "Literal",
        "value": "mm",
        "raw": "\"mm\"",
        "start": 58,
        "end": 62
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 40,
      "end": 63
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
            "name": "oxa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSImportType",
                  "source": {
                    "type": "Literal",
                    "value": "xa",
                    "raw": "\"xa\"",
                    "start": 97,
                    "end": 101
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null,
                  "start": 90,
                  "end": 102
                },
                "typeArguments": null,
                "start": 83,
                "end": 102
              },
              "start": 81,
              "end": 102
            },
            "start": 78,
            "end": 102
          },
          "init": null,
          "definite": false,
          "start": 78,
          "end": 102
        }
      ],
      "declare": true,
      "start": 64,
      "end": 103
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
            "name": "oxb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSImportType",
                  "source": {
                    "type": "Literal",
                    "value": "xb",
                    "raw": "\"xb\"",
                    "start": 137,
                    "end": 141
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null,
                  "start": 130,
                  "end": 142
                },
                "typeArguments": null,
                "start": 123,
                "end": 142
              },
              "start": 121,
              "end": 142
            },
            "start": 118,
            "end": 142
          },
          "init": null,
          "definite": false,
          "start": 118,
          "end": 142
        }
      ],
      "declare": true,
      "start": 104,
      "end": 143
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "expand",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 167
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
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 169
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 168,
            "end": 169
          }
        ],
        "start": 167,
        "end": 170
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 178
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 189
              },
              "typeArguments": null,
              "start": 188,
              "end": 189
            },
            "start": 182,
            "end": 189
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 193
              },
              "typeArguments": null,
              "start": 192,
              "end": 193
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 195
              },
              "typeArguments": null,
              "start": 194,
              "end": 195
            },
            "start": 192,
            "end": 196
          },
          "optional": false,
          "readonly": null,
          "start": 174,
          "end": 198
        },
        "start": 172,
        "end": 198
      },
      "body": null,
      "expression": false,
      "start": 144,
      "end": 199
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
              "name": "keep",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 217
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 221
            },
            "definite": false,
            "start": 213,
            "end": 221
          }
        ],
        "declare": false,
        "start": 207,
        "end": 222
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 200,
      "end": 222
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
              "name": "obsA",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 240
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "expand",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 249
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oxa",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 260
                    },
                    "typeArguments": null,
                    "start": 250,
                    "end": 260
                  }
                ],
                "start": 249,
                "end": 261
              },
              "arguments": [],
              "optional": false,
              "start": 243,
              "end": 263
            },
            "definite": false,
            "start": 236,
            "end": 263
          }
        ],
        "declare": false,
        "start": 230,
        "end": 264
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 223,
      "end": 264
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
              "name": "obsB",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 282
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "expand",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 291
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oxb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 302
                    },
                    "typeArguments": null,
                    "start": 292,
                    "end": 302
                  }
                ],
                "start": 291,
                "end": 303
              },
              "arguments": [],
              "optional": false,
              "start": 285,
              "end": 305
            },
            "definite": false,
            "start": 278,
            "end": 305
          }
        ],
        "declare": false,
        "start": 272,
        "end": 306
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 265,
      "end": 306
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 306
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 53,
    "end": 57
  },
  {
    "type": "String",
    "value": "\"mm\"",
    "start": 58,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 64,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 72,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "oxa",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 83,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"xa\"",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 104,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 112,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "oxb",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 123,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "String",
    "value": "\"xb\"",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 144,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 152,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "expand",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 179,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 182,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 200,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 207,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "keep",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 223,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 230,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "obsA",
    "start": 236,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "expand",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 250,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "oxa",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 265,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 272,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "obsB",
    "start": 278,
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
    "value": "expand",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 292,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "oxb",
    "start": 299,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  }
]
```
