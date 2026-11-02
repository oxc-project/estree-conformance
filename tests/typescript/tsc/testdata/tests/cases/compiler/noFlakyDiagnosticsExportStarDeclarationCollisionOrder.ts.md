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
        "value": "s1",
        "raw": "\"s1\"",
        "start": 679,
        "end": 683
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
                  "start": 699,
                  "end": 700
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 704,
                  "end": 705
                },
                "exportKind": "value",
                "start": 699,
                "end": 705
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ia",
              "raw": "\"ia\"",
              "start": 713,
              "end": 717
            },
            "exportKind": "value",
            "attributes": [],
            "start": 690,
            "end": 718
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
                  "start": 732,
                  "end": 733
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 737,
                  "end": 738
                },
                "exportKind": "value",
                "start": 732,
                "end": 738
              }
            ],
            "source": {
              "type": "Literal",
              "value": "ib",
              "raw": "\"ib\"",
              "start": 746,
              "end": 750
            },
            "exportKind": "value",
            "attributes": [],
            "start": 723,
            "end": 751
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
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 773,
                          "end": 774
                        },
                        "start": 773,
                        "end": 774
                      },
                      "start": 771,
                      "end": 774
                    },
                    "start": 769,
                    "end": 774
                  },
                  "init": null,
                  "definite": false,
                  "start": 769,
                  "end": 774
                }
              ],
              "declare": false,
              "start": 763,
              "end": 775
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 756,
            "end": 775
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
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 797,
                          "end": 798
                        },
                        "start": 797,
                        "end": 798
                      },
                      "start": 795,
                      "end": 798
                    },
                    "start": 793,
                    "end": 798
                  },
                  "init": null,
                  "definite": false,
                  "start": 793,
                  "end": 798
                }
              ],
              "declare": false,
              "start": 787,
              "end": 799
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 780,
            "end": 799
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
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 821,
                          "end": 822
                        },
                        "start": 821,
                        "end": 822
                      },
                      "start": 819,
                      "end": 822
                    },
                    "start": 817,
                    "end": 822
                  },
                  "init": null,
                  "definite": false,
                  "start": 817,
                  "end": 822
                }
              ],
              "declare": false,
              "start": 811,
              "end": 823
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 804,
            "end": 823
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
                    "name": "f4",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 845,
                          "end": 846
                        },
                        "start": 845,
                        "end": 846
                      },
                      "start": 843,
                      "end": 846
                    },
                    "start": 841,
                    "end": 846
                  },
                  "init": null,
                  "definite": false,
                  "start": 841,
                  "end": 846
                }
              ],
              "declare": false,
              "start": 835,
              "end": 847
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 828,
            "end": 847
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
                    "name": "f5",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 869,
                          "end": 870
                        },
                        "start": 869,
                        "end": 870
                      },
                      "start": 867,
                      "end": 870
                    },
                    "start": 865,
                    "end": 870
                  },
                  "init": null,
                  "definite": false,
                  "start": 865,
                  "end": 870
                }
              ],
              "declare": false,
              "start": 859,
              "end": 871
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 852,
            "end": 871
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
                    "name": "f6",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 893,
                          "end": 894
                        },
                        "start": 893,
                        "end": 894
                      },
                      "start": 891,
                      "end": 894
                    },
                    "start": 889,
                    "end": 894
                  },
                  "init": null,
                  "definite": false,
                  "start": 889,
                  "end": 894
                }
              ],
              "declare": false,
              "start": 883,
              "end": 895
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 876,
            "end": 895
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
                    "name": "f7",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7",
                          "start": 917,
                          "end": 918
                        },
                        "start": 917,
                        "end": 918
                      },
                      "start": 915,
                      "end": 918
                    },
                    "start": 913,
                    "end": 918
                  },
                  "init": null,
                  "definite": false,
                  "start": 913,
                  "end": 918
                }
              ],
              "declare": false,
              "start": 907,
              "end": 919
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 900,
            "end": 919
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
                    "name": "f8",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 941,
                          "end": 942
                        },
                        "start": 941,
                        "end": 942
                      },
                      "start": 939,
                      "end": 942
                    },
                    "start": 937,
                    "end": 942
                  },
                  "init": null,
                  "definite": false,
                  "start": 937,
                  "end": 942
                }
              ],
              "declare": false,
              "start": 931,
              "end": 943
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 924,
            "end": 943
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
                    "name": "f9",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 965,
                          "end": 966
                        },
                        "start": 965,
                        "end": 966
                      },
                      "start": 963,
                      "end": 966
                    },
                    "start": 961,
                    "end": 966
                  },
                  "init": null,
                  "definite": false,
                  "start": 961,
                  "end": 966
                }
              ],
              "declare": false,
              "start": 955,
              "end": 967
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 948,
            "end": 967
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
                    "name": "f10",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 990,
                          "end": 992
                        },
                        "start": 990,
                        "end": 992
                      },
                      "start": 988,
                      "end": 992
                    },
                    "start": 985,
                    "end": 992
                  },
                  "init": null,
                  "definite": false,
                  "start": 985,
                  "end": 992
                }
              ],
              "declare": false,
              "start": 979,
              "end": 993
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 972,
            "end": 993
          }
        ],
        "start": 684,
        "end": 995
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 664,
      "end": 995
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "s2",
        "raw": "\"s2\"",
        "start": 1011,
        "end": 1015
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1038,
                          "end": 1039
                        },
                        "start": 1038,
                        "end": 1039
                      },
                      "start": 1036,
                      "end": 1039
                    },
                    "start": 1035,
                    "end": 1039
                  },
                  "init": null,
                  "definite": false,
                  "start": 1035,
                  "end": 1039
                }
              ],
              "declare": false,
              "start": 1029,
              "end": 1040
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1022,
            "end": 1040
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1061,
                          "end": 1062
                        },
                        "start": 1061,
                        "end": 1062
                      },
                      "start": 1059,
                      "end": 1062
                    },
                    "start": 1058,
                    "end": 1062
                  },
                  "init": null,
                  "definite": false,
                  "start": 1058,
                  "end": 1062
                }
              ],
              "declare": false,
              "start": 1052,
              "end": 1063
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1045,
            "end": 1063
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
                    "name": "g1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1085,
                          "end": 1086
                        },
                        "start": 1085,
                        "end": 1086
                      },
                      "start": 1083,
                      "end": 1086
                    },
                    "start": 1081,
                    "end": 1086
                  },
                  "init": null,
                  "definite": false,
                  "start": 1081,
                  "end": 1086
                }
              ],
              "declare": false,
              "start": 1075,
              "end": 1087
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1068,
            "end": 1087
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
                    "name": "g2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1109,
                          "end": 1110
                        },
                        "start": 1109,
                        "end": 1110
                      },
                      "start": 1107,
                      "end": 1110
                    },
                    "start": 1105,
                    "end": 1110
                  },
                  "init": null,
                  "definite": false,
                  "start": 1105,
                  "end": 1110
                }
              ],
              "declare": false,
              "start": 1099,
              "end": 1111
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1092,
            "end": 1111
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
                    "name": "g3",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 1133,
                          "end": 1134
                        },
                        "start": 1133,
                        "end": 1134
                      },
                      "start": 1131,
                      "end": 1134
                    },
                    "start": 1129,
                    "end": 1134
                  },
                  "init": null,
                  "definite": false,
                  "start": 1129,
                  "end": 1134
                }
              ],
              "declare": false,
              "start": 1123,
              "end": 1135
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1116,
            "end": 1135
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
                    "name": "g4",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 1157,
                          "end": 1158
                        },
                        "start": 1157,
                        "end": 1158
                      },
                      "start": 1155,
                      "end": 1158
                    },
                    "start": 1153,
                    "end": 1158
                  },
                  "init": null,
                  "definite": false,
                  "start": 1153,
                  "end": 1158
                }
              ],
              "declare": false,
              "start": 1147,
              "end": 1159
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1140,
            "end": 1159
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
                    "name": "g5",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 1181,
                          "end": 1182
                        },
                        "start": 1181,
                        "end": 1182
                      },
                      "start": 1179,
                      "end": 1182
                    },
                    "start": 1177,
                    "end": 1182
                  },
                  "init": null,
                  "definite": false,
                  "start": 1177,
                  "end": 1182
                }
              ],
              "declare": false,
              "start": 1171,
              "end": 1183
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1164,
            "end": 1183
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
                    "name": "g6",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 1205,
                          "end": 1206
                        },
                        "start": 1205,
                        "end": 1206
                      },
                      "start": 1203,
                      "end": 1206
                    },
                    "start": 1201,
                    "end": 1206
                  },
                  "init": null,
                  "definite": false,
                  "start": 1201,
                  "end": 1206
                }
              ],
              "declare": false,
              "start": 1195,
              "end": 1207
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1188,
            "end": 1207
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
                    "name": "g7",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7",
                          "start": 1229,
                          "end": 1230
                        },
                        "start": 1229,
                        "end": 1230
                      },
                      "start": 1227,
                      "end": 1230
                    },
                    "start": 1225,
                    "end": 1230
                  },
                  "init": null,
                  "definite": false,
                  "start": 1225,
                  "end": 1230
                }
              ],
              "declare": false,
              "start": 1219,
              "end": 1231
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1212,
            "end": 1231
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
                    "name": "g8",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1253,
                          "end": 1254
                        },
                        "start": 1253,
                        "end": 1254
                      },
                      "start": 1251,
                      "end": 1254
                    },
                    "start": 1249,
                    "end": 1254
                  },
                  "init": null,
                  "definite": false,
                  "start": 1249,
                  "end": 1254
                }
              ],
              "declare": false,
              "start": 1243,
              "end": 1255
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1236,
            "end": 1255
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
                    "name": "g9",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 1277,
                          "end": 1278
                        },
                        "start": 1277,
                        "end": 1278
                      },
                      "start": 1275,
                      "end": 1278
                    },
                    "start": 1273,
                    "end": 1278
                  },
                  "init": null,
                  "definite": false,
                  "start": 1273,
                  "end": 1278
                }
              ],
              "declare": false,
              "start": 1267,
              "end": 1279
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1260,
            "end": 1279
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
                    "name": "g10",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 1302,
                          "end": 1304
                        },
                        "start": 1302,
                        "end": 1304
                      },
                      "start": 1300,
                      "end": 1304
                    },
                    "start": 1297,
                    "end": 1304
                  },
                  "init": null,
                  "definite": false,
                  "start": 1297,
                  "end": 1304
                }
              ],
              "declare": false,
              "start": 1291,
              "end": 1305
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1284,
            "end": 1305
          }
        ],
        "start": 1016,
        "end": 1307
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 996,
      "end": 1307
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m1",
        "raw": "\"m1\"",
        "start": 1323,
        "end": 1327
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportAllDeclaration",
            "exported": null,
            "source": {
              "type": "Literal",
              "value": "s1",
              "raw": "\"s1\"",
              "start": 1348,
              "end": 1352
            },
            "attributes": [],
            "exportKind": "value",
            "start": 1334,
            "end": 1353
          },
          {
            "type": "ExportAllDeclaration",
            "exported": null,
            "source": {
              "type": "Literal",
              "value": "s2",
              "raw": "\"s2\"",
              "start": 1372,
              "end": 1376
            },
            "attributes": [],
            "exportKind": "value",
            "start": 1358,
            "end": 1377
          }
        ],
        "start": 1328,
        "end": 1379
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1308,
      "end": 1379
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1380
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
    "value": "\"s1\"",
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
    "value": "export",
    "start": 690,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 701,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "from",
    "start": 708,
    "end": 712
  },
  {
    "type": "String",
    "value": "\"ia\"",
    "start": 713,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 723,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 734,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 741,
    "end": 745
  },
  {
    "type": "String",
    "value": "\"ib\"",
    "start": 746,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 756,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 763,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 769,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 780,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 787,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 793,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 804,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 811,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 817,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 828,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 835,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 841,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 843,
    "end": 844
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 846,
    "end": 847
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 852,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 859,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 865,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "const",
    "start": 883,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 889,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 891,
    "end": 892
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 900,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 907,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "Numeric",
    "value": "7",
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
    "type": "Keyword",
    "value": "export",
    "start": 924,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 931,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 937,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
    "end": 940
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 948,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 955,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 961,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 972,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 979,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 985,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 988,
    "end": 989
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 990,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 996,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 1004,
    "end": 1010
  },
  {
    "type": "String",
    "value": "\"s2\"",
    "start": 1011,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1022,
    "end": 1028
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1029,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1045,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1052,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1068,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1075,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 1081,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1092,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1099,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 1105,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1116,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1123,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 1129,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1140,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1147,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 1153,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1164,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1171,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "g5",
    "start": 1177,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1188,
    "end": 1194
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1195,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "g6",
    "start": 1201,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1212,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1219,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "g7",
    "start": 1225,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1236,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1243,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "g8",
    "start": 1249,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1260,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1267,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "g9",
    "start": 1273,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1284,
    "end": 1290
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1291,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "g10",
    "start": 1297,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1302,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1308,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 1316,
    "end": 1322
  },
  {
    "type": "String",
    "value": "\"m1\"",
    "start": 1323,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1334,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1343,
    "end": 1347
  },
  {
    "type": "String",
    "value": "\"s1\"",
    "start": 1348,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1358,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1367,
    "end": 1371
  },
  {
    "type": "String",
    "value": "\"s2\"",
    "start": 1372,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1378,
    "end": 1379
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 51
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 51
          },
          "importKind": "value",
          "start": 49,
          "end": 51
        }
      ],
      "source": {
        "type": "Literal",
        "value": "m1",
        "raw": "\"m1\"",
        "start": 59,
        "end": 63
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 40,
      "end": 64
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
                    "start": 98,
                    "end": 102
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null,
                  "start": 91,
                  "end": 103
                },
                "typeArguments": null,
                "start": 84,
                "end": 103
              },
              "start": 82,
              "end": 103
            },
            "start": 79,
            "end": 103
          },
          "init": null,
          "definite": false,
          "start": 79,
          "end": 103
        }
      ],
      "declare": true,
      "start": 65,
      "end": 104
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
                    "start": 138,
                    "end": 142
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null,
                  "start": 131,
                  "end": 143
                },
                "typeArguments": null,
                "start": 124,
                "end": 143
              },
              "start": 122,
              "end": 143
            },
            "start": 119,
            "end": 143
          },
          "init": null,
          "definite": false,
          "start": 119,
          "end": 143
        }
      ],
      "declare": true,
      "start": 105,
      "end": 144
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "expand",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 168
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
              "start": 169,
              "end": 170
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 169,
            "end": 170
          }
        ],
        "start": 168,
        "end": 171
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
            "start": 178,
            "end": 179
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
                "start": 189,
                "end": 190
              },
              "typeArguments": null,
              "start": 189,
              "end": 190
            },
            "start": 183,
            "end": 190
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
                "start": 193,
                "end": 194
              },
              "typeArguments": null,
              "start": 193,
              "end": 194
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 196
              },
              "typeArguments": null,
              "start": 195,
              "end": 196
            },
            "start": 193,
            "end": 197
          },
          "optional": false,
          "readonly": null,
          "start": 175,
          "end": 199
        },
        "start": 173,
        "end": 199
      },
      "body": null,
      "expression": false,
      "start": 145,
      "end": 200
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
              "start": 214,
              "end": 218
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 223
            },
            "definite": false,
            "start": 214,
            "end": 223
          }
        ],
        "declare": false,
        "start": 208,
        "end": 224
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 201,
      "end": 224
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 244,
                  "end": 249
                },
                "start": 242,
                "end": 249
              },
              "start": 238,
              "end": 249
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "expand",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 258
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
                      "start": 266,
                      "end": 269
                    },
                    "typeArguments": null,
                    "start": 259,
                    "end": 269
                  }
                ],
                "start": 258,
                "end": 270
              },
              "arguments": [],
              "optional": false,
              "start": 252,
              "end": 272
            },
            "definite": false,
            "start": 238,
            "end": 272
          }
        ],
        "declare": false,
        "start": 232,
        "end": 273
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 225,
      "end": 273
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 293,
                  "end": 298
                },
                "start": 291,
                "end": 298
              },
              "start": 287,
              "end": 298
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "expand",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 307
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
                      "start": 315,
                      "end": 318
                    },
                    "typeArguments": null,
                    "start": 308,
                    "end": 318
                  }
                ],
                "start": 307,
                "end": 319
              },
              "arguments": [],
              "optional": false,
              "start": 301,
              "end": 321
            },
            "definite": false,
            "start": 287,
            "end": 321
          }
        ],
        "declare": false,
        "start": 281,
        "end": 322
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 274,
      "end": 322
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 322
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
    "value": "f1",
    "start": 49,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 54,
    "end": 58
  },
  {
    "type": "String",
    "value": "\"m1\"",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 65,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 73,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "oxa",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 84,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "String",
    "value": "\"xa\"",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 105,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 113,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "oxb",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 124,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "String",
    "value": "\"xb\"",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 145,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 153,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "expand",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 180,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 183,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 201,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 208,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "keep",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 225,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 232,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "obsA",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 244,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "expand",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 259,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "oxa",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
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
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 274,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 281,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "obsB",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 293,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "expand",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 308,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "oxb",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  }
]
```
