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
        "name": "Window",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "someMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 33
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 23,
            "end": 36
          }
        ],
        "start": 17,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 51
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 73
                  },
                  "typeArguments": null,
                  "start": 67,
                  "end": 73
                },
                {
                  "type": "TSStringKeyword",
                  "start": 76,
                  "end": 82
                }
              ],
              "start": 67,
              "end": 82
            },
            "declare": false,
            "start": 58,
            "end": 83
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 106
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Window",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 136
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 137,
                        "end": 140
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 124,
                      "end": 140
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 117,
                    "end": 140
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
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 163,
                                  "end": 164
                                },
                                "typeArguments": null,
                                "start": 163,
                                "end": 164
                              },
                              "start": 161,
                              "end": 164
                            },
                            "start": 160,
                            "end": 164
                          },
                          "init": null,
                          "definite": false,
                          "start": 160,
                          "end": 164
                        }
                      ],
                      "declare": false,
                      "start": 156,
                      "end": 165
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 149,
                    "end": 165
                  }
                ],
                "start": 107,
                "end": 212
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 95,
              "end": 212
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 88,
            "end": 212
          }
        ],
        "start": 52,
        "end": 214
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 40,
      "end": 214
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 228
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "W",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 248
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 251,
                      "end": 257
                    },
                    "typeArguments": null,
                    "start": 251,
                    "end": 257
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 260,
                    "end": 266
                  }
                ],
                "start": 251,
                "end": 266
              },
              "declare": false,
              "start": 242,
              "end": 267
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 235,
            "end": 267
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 290
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Window",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 320
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 321,
                        "end": 324
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 308,
                      "end": 324
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 301,
                    "end": 324
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
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 347,
                                  "end": 348
                                },
                                "typeArguments": null,
                                "start": 347,
                                "end": 348
                              },
                              "start": 345,
                              "end": 348
                            },
                            "start": 344,
                            "end": 348
                          },
                          "init": null,
                          "definite": false,
                          "start": 344,
                          "end": 348
                        }
                      ],
                      "declare": false,
                      "start": 340,
                      "end": 349
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 333,
                    "end": 349
                  }
                ],
                "start": 291,
                "end": 367
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 279,
              "end": 367
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 272,
            "end": 367
          }
        ],
        "start": 229,
        "end": 369
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 216,
      "end": 369
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 383
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
              "name": "private1",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 404
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 405,
              "end": 412
            },
            "abstract": false,
            "declare": false,
            "start": 390,
            "end": 412
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "public1",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 430
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 431,
              "end": 438
            },
            "abstract": false,
            "declare": false,
            "start": 417,
            "end": 438
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 455
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "public1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 479,
                      "end": 486
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 487,
                      "end": 498
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 473,
                    "end": 498
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 466,
                  "end": 498
                }
              ],
              "start": 456,
              "end": 504
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 443,
            "end": 504
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 517
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "private1",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 528
              },
              "typeArguments": null,
              "start": 520,
              "end": 528
            },
            "declare": false,
            "start": 510,
            "end": 529
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
                "end": 548
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "private1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 559
                },
                "typeArguments": null,
                "start": 551,
                "end": 559
              },
              "declare": false,
              "start": 541,
              "end": 560
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 534,
            "end": 560
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t11",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 583
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "public1",
                "optional": false,
                "typeAnnotation": null,
                "start": 586,
                "end": 593
              },
              "typeArguments": null,
              "start": 586,
              "end": 593
            },
            "declare": false,
            "start": 575,
            "end": 594
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "t12",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 614
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 624
                },
                "typeArguments": null,
                "start": 617,
                "end": 624
              },
              "declare": false,
              "start": 606,
              "end": 625
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 599,
            "end": 625
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t111",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 640
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 645
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 646,
                  "end": 653
                },
                "start": 643,
                "end": 653
              },
              "typeArguments": null,
              "start": 643,
              "end": 653
            },
            "declare": false,
            "start": 631,
            "end": 654
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "t112",
                "optional": false,
                "typeAnnotation": null,
                "start": 671,
                "end": 675
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 680
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "public1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 681,
                    "end": 688
                  },
                  "start": 678,
                  "end": 688
                },
                "typeArguments": null,
                "start": 678,
                "end": 688
              },
              "declare": false,
              "start": 666,
              "end": 689
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 659,
            "end": 689
          }
        ],
        "start": 384,
        "end": 700
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 371,
      "end": 700
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 700
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "someMethod",
    "start": 23,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 40,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 58,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 88,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 95,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 117,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 124,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 149,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 156,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 216,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 235,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 242,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 251,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 272,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 279,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 301,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 308,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 314,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 333,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 371,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 381,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 390,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 396,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 417,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 423,
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
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 443,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 466,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 473,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 479,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 510,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 515,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 520,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 534,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 541,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 551,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 575,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "t11",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 586,
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
    "value": "export",
    "start": 599,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 606,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "t12",
    "start": 611,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 617,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 631,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "t111",
    "start": 636,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 646,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 659,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 666,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "t112",
    "start": 671,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 678,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 681,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  }
]
```
