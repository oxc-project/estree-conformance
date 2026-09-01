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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 124
                },
                "init": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 127,
                  "end": 129
                },
                "definite": false,
                "start": 123,
                "end": 129
              }
            ],
            "declare": false,
            "start": 119,
            "end": 130
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 141
                },
                "init": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 144,
                  "end": 146
                },
                "definite": false,
                "start": 139,
                "end": 146
              }
            ],
            "declare": false,
            "start": 135,
            "end": 147
          }
        ],
        "start": 12,
        "end": 149
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 149
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 162
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 174
                },
                "init": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 177,
                  "end": 179
                },
                "definite": false,
                "start": 173,
                "end": 179
              }
            ],
            "declare": false,
            "start": 169,
            "end": 180
          }
        ],
        "start": 163,
        "end": 182
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 151,
      "end": 182
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 195
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 291
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 306
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 308,
                      "end": 314
                    },
                    "start": 306,
                    "end": 314
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 302,
                  "end": 315
                }
              ],
              "start": 292,
              "end": 321
            },
            "abstract": false,
            "declare": false,
            "start": 284,
            "end": 321
          }
        ],
        "start": 196,
        "end": 323
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 184,
      "end": 323
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 336
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 348
                },
                "init": {
                  "type": "Literal",
                  "value": 13,
                  "raw": "13",
                  "start": 351,
                  "end": 353
                },
                "definite": false,
                "start": 347,
                "end": 353
              }
            ],
            "declare": false,
            "start": 343,
            "end": 354
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 377
              },
              "body": {
                "type": "TSModuleBlock",
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
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 392,
                          "end": 393
                        },
                        "init": {
                          "type": "Literal",
                          "value": 13,
                          "raw": "13",
                          "start": 396,
                          "end": 398
                        },
                        "definite": false,
                        "start": 392,
                        "end": 398
                      }
                    ],
                    "declare": false,
                    "start": 388,
                    "end": 399
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 425,
                        "end": 426
                      },
                      "body": {
                        "type": "TSModuleBlock",
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
                                  "name": "X",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 445,
                                  "end": 446
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 12,
                                  "raw": "12",
                                  "start": 449,
                                  "end": 451
                                },
                                "definite": false,
                                "start": 445,
                                "end": 451
                              }
                            ],
                            "declare": false,
                            "start": 441,
                            "end": 452
                          },
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 469,
                                  "end": 470
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 12,
                                  "raw": "12",
                                  "start": 473,
                                  "end": 475
                                },
                                "definite": false,
                                "start": 469,
                                "end": 475
                              }
                            ],
                            "declare": false,
                            "start": 465,
                            "end": 476
                          },
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Z",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 493,
                                  "end": 494
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 12,
                                  "raw": "12",
                                  "start": 497,
                                  "end": 499
                                },
                                "definite": false,
                                "start": 493,
                                "end": 499
                              }
                            ],
                            "declare": false,
                            "start": 489,
                            "end": 500
                          }
                        ],
                        "start": 427,
                        "end": 510
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 415,
                      "end": 510
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 408,
                    "end": 510
                  }
                ],
                "start": 378,
                "end": 516
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 366,
              "end": 516
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 359,
            "end": 516
          }
        ],
        "start": 337,
        "end": 518
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 325,
      "end": 518
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 530,
          "end": 531
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 532,
          "end": 533
        },
        "start": 530,
        "end": 533
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 553
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Red",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 564,
                      "end": 567
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 564,
                    "end": 567
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Blue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 569,
                      "end": 573
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 569,
                    "end": 573
                  }
                ],
                "start": 554,
                "end": 579
              },
              "const": false,
              "declare": false,
              "start": 547,
              "end": 579
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 540,
            "end": 579
          }
        ],
        "start": 534,
        "end": 581
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 520,
      "end": 581
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 652,
        "end": 653
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
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 677,
                "end": 678
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 689,
                      "end": 691
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 693,
                        "end": 699
                      },
                      "start": 691,
                      "end": 699
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 689,
                    "end": 700
                  }
                ],
                "start": 679,
                "end": 706
              },
              "declare": false,
              "start": 667,
              "end": 706
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 660,
            "end": 706
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 723,
                    "end": 724
                  },
                  "init": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "'hello'",
                    "start": 727,
                    "end": 734
                  },
                  "definite": false,
                  "start": 723,
                  "end": 734
                }
              ],
              "declare": false,
              "start": 719,
              "end": 735
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 712,
            "end": 735
          }
        ],
        "start": 654,
        "end": 737
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 642,
      "end": 737
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 737
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
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "String",
    "value": "''",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 151,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 177,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 184,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 284,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 302,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 325,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 343,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 359,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 366,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 388,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 396,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 408,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 415,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 441,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "X",
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
    "type": "Numeric",
    "value": "12",
    "start": 449,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 465,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 473,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 489,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 495,
    "end": 496
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 497,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 520,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 540,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 547,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 569,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 642,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 660,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 667,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 693,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 712,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 719,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 725,
    "end": 726
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 727,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737
  }
]
```
