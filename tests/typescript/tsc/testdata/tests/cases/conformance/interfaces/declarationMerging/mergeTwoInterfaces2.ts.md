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
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 118
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 143
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 157
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 159,
                        "end": 165
                      },
                      "start": 157,
                      "end": 165
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 154,
                    "end": 166
                  }
                ],
                "start": 144,
                "end": 172
              },
              "declare": false,
              "start": 132,
              "end": 172
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 125,
            "end": 172
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 185,
                        "end": 186
                      },
                      "typeArguments": null,
                      "start": 185,
                      "end": 186
                    },
                    "start": 183,
                    "end": 186
                  },
                  "start": 182,
                  "end": 186
                },
                "init": null,
                "definite": false,
                "start": 182,
                "end": 186
              }
            ],
            "declare": false,
            "start": 178,
            "end": 187
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 198
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 202
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 206
                  },
                  "optional": false,
                  "computed": false,
                  "start": 201,
                  "end": 206
                },
                "definite": false,
                "start": 196,
                "end": 206
              }
            ],
            "declare": false,
            "start": 192,
            "end": 206
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 217
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 221
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 225
                  },
                  "optional": false,
                  "computed": false,
                  "start": 220,
                  "end": 225
                },
                "definite": false,
                "start": 215,
                "end": 225
              }
            ],
            "declare": false,
            "start": 211,
            "end": 226
          }
        ],
        "start": 119,
        "end": 228
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 106,
      "end": 228
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 242
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 267
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 281
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 283,
                        "end": 289
                      },
                      "start": 281,
                      "end": 289
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 278,
                    "end": 290
                  }
                ],
                "start": 268,
                "end": 296
              },
              "declare": false,
              "start": 256,
              "end": 296
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 249,
            "end": 296
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 309,
                        "end": 310
                      },
                      "typeArguments": null,
                      "start": 309,
                      "end": 310
                    },
                    "start": 307,
                    "end": 310
                  },
                  "start": 306,
                  "end": 310
                },
                "init": null,
                "definite": false,
                "start": 306,
                "end": 310
              }
            ],
            "declare": false,
            "start": 302,
            "end": 311
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 322
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 326
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 330
                  },
                  "optional": false,
                  "computed": false,
                  "start": 325,
                  "end": 330
                },
                "definite": false,
                "start": 320,
                "end": 330
              }
            ],
            "declare": false,
            "start": 316,
            "end": 330
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 341
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 344,
                    "end": 345
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 346,
                    "end": 349
                  },
                  "optional": false,
                  "computed": false,
                  "start": 344,
                  "end": 349
                },
                "definite": false,
                "start": 339,
                "end": 349
              }
            ],
            "declare": false,
            "start": 335,
            "end": 350
          }
        ],
        "start": 243,
        "end": 352
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 230,
      "end": 352
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 423
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "M3",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 449
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 477,
                        "end": 478
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 493,
                              "end": 496
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 498,
                                "end": 504
                              },
                              "start": 496,
                              "end": 504
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 493,
                            "end": 505
                          }
                        ],
                        "start": 479,
                        "end": 515
                      },
                      "declare": false,
                      "start": 467,
                      "end": 515
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 460,
                    "end": 515
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 532,
                                "end": 533
                              },
                              "typeArguments": null,
                              "start": 532,
                              "end": 533
                            },
                            "start": 530,
                            "end": 533
                          },
                          "start": 529,
                          "end": 533
                        },
                        "init": null,
                        "definite": false,
                        "start": 529,
                        "end": 533
                      }
                    ],
                    "declare": false,
                    "start": 525,
                    "end": 534
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
                          "name": "r1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 547,
                          "end": 549
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 552,
                            "end": 553
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 554,
                            "end": 557
                          },
                          "optional": false,
                          "computed": false,
                          "start": 552,
                          "end": 557
                        },
                        "definite": false,
                        "start": 547,
                        "end": 557
                      }
                    ],
                    "declare": false,
                    "start": 543,
                    "end": 557
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
                          "name": "r2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 570,
                          "end": 572
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 575,
                            "end": 576
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 577,
                            "end": 580
                          },
                          "optional": false,
                          "computed": false,
                          "start": 575,
                          "end": 580
                        },
                        "definite": false,
                        "start": 570,
                        "end": 580
                      }
                    ],
                    "declare": false,
                    "start": 566,
                    "end": 581
                  }
                ],
                "start": 450,
                "end": 587
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 437,
              "end": 587
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 430,
            "end": 587
          }
        ],
        "start": 424,
        "end": 589
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 411,
      "end": 589
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 601,
        "end": 603
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "M3",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 629
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 657,
                        "end": 658
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
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 673,
                              "end": 676
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 678,
                                "end": 684
                              },
                              "start": 676,
                              "end": 684
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 673,
                            "end": 685
                          }
                        ],
                        "start": 659,
                        "end": 695
                      },
                      "declare": false,
                      "start": 647,
                      "end": 695
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 640,
                    "end": 695
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 712,
                                "end": 713
                              },
                              "typeArguments": null,
                              "start": 712,
                              "end": 713
                            },
                            "start": 710,
                            "end": 713
                          },
                          "start": 709,
                          "end": 713
                        },
                        "init": null,
                        "definite": false,
                        "start": 709,
                        "end": 713
                      }
                    ],
                    "declare": false,
                    "start": 705,
                    "end": 714
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
                          "name": "r1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 727,
                          "end": 729
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 732,
                            "end": 733
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 734,
                            "end": 737
                          },
                          "optional": false,
                          "computed": false,
                          "start": 732,
                          "end": 737
                        },
                        "definite": false,
                        "start": 727,
                        "end": 737
                      }
                    ],
                    "declare": false,
                    "start": 723,
                    "end": 737
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
                          "name": "r2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 750,
                          "end": 752
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 755,
                            "end": 756
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 757,
                            "end": 760
                          },
                          "optional": false,
                          "computed": false,
                          "start": 755,
                          "end": 760
                        },
                        "definite": false,
                        "start": 750,
                        "end": 760
                      }
                    ],
                    "declare": false,
                    "start": 746,
                    "end": 761
                  }
                ],
                "start": 630,
                "end": 767
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 617,
              "end": 767
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 610,
            "end": 767
          }
        ],
        "start": 604,
        "end": 769
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 591,
      "end": 769
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 106,
  "end": 769
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 106,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 125,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 132,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 192,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 203,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 215,
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
    "value": "a",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 222,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 230,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 249,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 256,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 302,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 316,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 327,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 335,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 346,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 411,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 430,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 437,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 447,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 460,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 467,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 493,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 525,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 543,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 554,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 566,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 577,
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
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 591,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 601,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 610,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 617,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 627,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 640,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 647,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 673,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 678,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 705,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 723,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 727,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 734,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 746,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 750,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 757,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 768,
    "end": 769
  }
]
```
