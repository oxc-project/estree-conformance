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
            "end": 207
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
                  "start": 216,
                  "end": 218
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 222
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 223,
                    "end": 226
                  },
                  "optional": false,
                  "computed": false,
                  "start": 221,
                  "end": 226
                },
                "definite": false,
                "start": 216,
                "end": 226
              }
            ],
            "declare": false,
            "start": 212,
            "end": 227
          }
        ],
        "start": 119,
        "end": 229
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 106,
      "end": 229
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 243
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
                "start": 267,
                "end": 268
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
                      "start": 279,
                      "end": 282
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 284,
                        "end": 290
                      },
                      "start": 282,
                      "end": 290
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 279,
                    "end": 291
                  }
                ],
                "start": 269,
                "end": 297
              },
              "declare": false,
              "start": 257,
              "end": 297
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 250,
            "end": 297
          },
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
                "start": 320,
                "end": 321
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
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 335
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 337,
                        "end": 344
                      },
                      "start": 335,
                      "end": 344
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 332,
                    "end": 345
                  }
                ],
                "start": 322,
                "end": 351
              },
              "declare": false,
              "start": 310,
              "end": 351
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 303,
            "end": 351
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
                        "start": 364,
                        "end": 365
                      },
                      "typeArguments": null,
                      "start": 364,
                      "end": 365
                    },
                    "start": 362,
                    "end": 365
                  },
                  "start": 361,
                  "end": 365
                },
                "init": null,
                "definite": false,
                "start": 361,
                "end": 365
              }
            ],
            "declare": false,
            "start": 357,
            "end": 366
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
                  "start": 375,
                  "end": 377
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 380,
                    "end": 381
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 382,
                    "end": 385
                  },
                  "optional": false,
                  "computed": false,
                  "start": 380,
                  "end": 385
                },
                "definite": false,
                "start": 375,
                "end": 385
              }
            ],
            "declare": false,
            "start": 371,
            "end": 386
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
                  "start": 395,
                  "end": 397
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 401
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 402,
                    "end": 405
                  },
                  "optional": false,
                  "computed": false,
                  "start": 400,
                  "end": 405
                },
                "definite": false,
                "start": 395,
                "end": 405
              }
            ],
            "declare": false,
            "start": 391,
            "end": 406
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 417
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 421
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 425
                  },
                  "optional": false,
                  "computed": false,
                  "start": 420,
                  "end": 425
                },
                "definite": false,
                "start": 415,
                "end": 425
              }
            ],
            "declare": false,
            "start": 411,
            "end": 426
          }
        ],
        "start": 244,
        "end": 429
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 231,
      "end": 429
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 527,
        "end": 529
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
                "start": 553,
                "end": 555
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
                        "start": 583,
                        "end": 584
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
                              "start": 599,
                              "end": 602
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 604,
                                "end": 610
                              },
                              "start": 602,
                              "end": 610
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 599,
                            "end": 611
                          }
                        ],
                        "start": 585,
                        "end": 621
                      },
                      "declare": false,
                      "start": 573,
                      "end": 621
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 566,
                    "end": 621
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
                                "start": 638,
                                "end": 639
                              },
                              "typeArguments": null,
                              "start": 638,
                              "end": 639
                            },
                            "start": 636,
                            "end": 639
                          },
                          "start": 635,
                          "end": 639
                        },
                        "init": null,
                        "definite": false,
                        "start": 635,
                        "end": 639
                      }
                    ],
                    "declare": false,
                    "start": 631,
                    "end": 640
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
                          "start": 653,
                          "end": 655
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 658,
                            "end": 659
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 660,
                            "end": 663
                          },
                          "optional": false,
                          "computed": false,
                          "start": 658,
                          "end": 663
                        },
                        "definite": false,
                        "start": 653,
                        "end": 663
                      }
                    ],
                    "declare": false,
                    "start": 649,
                    "end": 664
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
                          "start": 677,
                          "end": 679
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 682,
                            "end": 683
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 684,
                            "end": 687
                          },
                          "optional": false,
                          "computed": false,
                          "start": 682,
                          "end": 687
                        },
                        "definite": false,
                        "start": 677,
                        "end": 687
                      }
                    ],
                    "declare": false,
                    "start": 673,
                    "end": 688
                  }
                ],
                "start": 556,
                "end": 694
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 543,
              "end": 694
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 536,
            "end": 694
          }
        ],
        "start": 530,
        "end": 696
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 517,
      "end": 696
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 708,
        "end": 710
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
                "start": 734,
                "end": 736
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
                        "start": 764,
                        "end": 765
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
                              "start": 780,
                              "end": 783
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 785,
                                "end": 791
                              },
                              "start": 783,
                              "end": 791
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 780,
                            "end": 792
                          }
                        ],
                        "start": 766,
                        "end": 802
                      },
                      "declare": false,
                      "start": 754,
                      "end": 802
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 747,
                    "end": 802
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
                                "start": 819,
                                "end": 820
                              },
                              "typeArguments": null,
                              "start": 819,
                              "end": 820
                            },
                            "start": 817,
                            "end": 820
                          },
                          "start": 816,
                          "end": 820
                        },
                        "init": null,
                        "definite": false,
                        "start": 816,
                        "end": 820
                      }
                    ],
                    "declare": false,
                    "start": 812,
                    "end": 821
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
                          "start": 835,
                          "end": 837
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 840,
                            "end": 841
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 842,
                            "end": 845
                          },
                          "optional": false,
                          "computed": false,
                          "start": 840,
                          "end": 845
                        },
                        "definite": false,
                        "start": 835,
                        "end": 845
                      }
                    ],
                    "declare": false,
                    "start": 831,
                    "end": 845
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
                          "start": 858,
                          "end": 860
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 863,
                            "end": 864
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 865,
                            "end": 868
                          },
                          "optional": false,
                          "computed": false,
                          "start": 863,
                          "end": 868
                        },
                        "definite": false,
                        "start": 858,
                        "end": 868
                      }
                    ],
                    "declare": false,
                    "start": 854,
                    "end": 869
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
                          "name": "r3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 882,
                          "end": 884
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 887,
                            "end": 888
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "baz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 889,
                            "end": 892
                          },
                          "optional": false,
                          "computed": false,
                          "start": 887,
                          "end": 892
                        },
                        "definite": false,
                        "start": 882,
                        "end": 892
                      }
                    ],
                    "declare": false,
                    "start": 878,
                    "end": 893
                  }
                ],
                "start": 737,
                "end": 899
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 724,
              "end": 899
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 717,
            "end": 899
          }
        ],
        "start": 711,
        "end": 901
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 698,
      "end": 901
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 913,
        "end": 915
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
                "start": 939,
                "end": 941
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
                        "start": 969,
                        "end": 970
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
                              "name": "baz",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 985,
                              "end": 988
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 990,
                                "end": 997
                              },
                              "start": 988,
                              "end": 997
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 985,
                            "end": 998
                          }
                        ],
                        "start": 971,
                        "end": 1008
                      },
                      "declare": false,
                      "start": 959,
                      "end": 1008
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 952,
                    "end": 1008
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
                                "start": 1025,
                                "end": 1026
                              },
                              "typeArguments": null,
                              "start": 1025,
                              "end": 1026
                            },
                            "start": 1023,
                            "end": 1026
                          },
                          "start": 1022,
                          "end": 1026
                        },
                        "init": null,
                        "definite": false,
                        "start": 1022,
                        "end": 1026
                      }
                    ],
                    "declare": false,
                    "start": 1018,
                    "end": 1027
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
                          "start": 1040,
                          "end": 1042
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1045,
                            "end": 1046
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1047,
                            "end": 1050
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1045,
                          "end": 1050
                        },
                        "definite": false,
                        "start": 1040,
                        "end": 1050
                      }
                    ],
                    "declare": false,
                    "start": 1036,
                    "end": 1050
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
                          "start": 1063,
                          "end": 1065
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1068,
                            "end": 1069
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1070,
                            "end": 1073
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1068,
                          "end": 1073
                        },
                        "definite": false,
                        "start": 1063,
                        "end": 1073
                      }
                    ],
                    "declare": false,
                    "start": 1059,
                    "end": 1074
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
                          "name": "r3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1087,
                          "end": 1089
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1092,
                            "end": 1093
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "baz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1094,
                            "end": 1097
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1092,
                          "end": 1097
                        },
                        "definite": false,
                        "start": 1087,
                        "end": 1097
                      }
                    ],
                    "declare": false,
                    "start": 1083,
                    "end": 1098
                  }
                ],
                "start": 942,
                "end": 1104
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 929,
              "end": 1104
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 922,
            "end": 1104
          }
        ],
        "start": 916,
        "end": 1106
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 903,
      "end": 1106
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 106,
  "end": 1106
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
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 216,
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
    "value": "a",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 231,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 241,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 250,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 257,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
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
    "start": 303,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 310,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 337,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 371,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 375,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 391,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 395,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 402,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 411,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 415,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 422,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 517,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 527,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 536,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 543,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 566,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 573,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 599,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 604,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 631,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 649,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 653,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 673,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 677,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 684,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 698,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 717,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 724,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 734,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 747,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 754,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 780,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 785,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 812,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 820,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 831,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 835,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 842,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 854,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 858,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "bar",
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
    "type": "Keyword",
    "value": "var",
    "start": 878,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 882,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 889,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 903,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 916,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 922,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 929,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 939,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 952,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 959,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "baz",
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
    "type": "Identifier",
    "value": "boolean",
    "start": 990,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1018,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1036,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 1040,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1047,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1063,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1070,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1083,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1087,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1094,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1105,
    "end": 1106
  }
]
```
