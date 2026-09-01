__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "interface",
        "raw": "\"interface\"",
        "start": 15,
        "end": 26
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 46
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 58
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    },
                    "start": 58,
                    "end": 66
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 57,
                  "end": 67
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 77
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 79,
                      "end": 85
                    },
                    "start": 77,
                    "end": 85
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 76,
                  "end": 86
                }
              ],
              "start": 47,
              "end": 92
            },
            "declare": false,
            "start": 33,
            "end": 92
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 109
            },
            "start": 97,
            "end": 110
          }
        ],
        "start": 27,
        "end": 112
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 112
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "variable",
        "raw": "\"variable\"",
        "start": 129,
        "end": 139
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
                  "name": "Foo",
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 166
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 168,
                              "end": 174
                            },
                            "start": 166,
                            "end": 174
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 165,
                          "end": 175
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 184,
                            "end": 185
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 187,
                              "end": 193
                            },
                            "start": 185,
                            "end": 193
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 184,
                          "end": 194
                        }
                      ],
                      "start": 155,
                      "end": 200
                    },
                    "start": 153,
                    "end": 200
                  },
                  "start": 150,
                  "end": 200
                },
                "init": null,
                "definite": false,
                "start": 150,
                "end": 200
              }
            ],
            "declare": false,
            "start": 146,
            "end": 200
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 217
            },
            "start": 205,
            "end": 218
          }
        ],
        "start": 140,
        "end": 220
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 114,
      "end": 220
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "interface-variable",
        "raw": "\"interface-variable\"",
        "start": 237,
        "end": 257
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 277
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 288,
                    "end": 289
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 291,
                      "end": 297
                    },
                    "start": 289,
                    "end": 297
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 288,
                  "end": 298
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 307,
                    "end": 308
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 310,
                      "end": 316
                    },
                    "start": 308,
                    "end": 316
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 307,
                  "end": 317
                }
              ],
              "start": 278,
              "end": 323
            },
            "declare": false,
            "start": 264,
            "end": 323
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
                  "name": "Foo",
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 347,
                            "end": 348
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 350,
                              "end": 356
                            },
                            "start": 348,
                            "end": 356
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 347,
                          "end": 357
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 366,
                            "end": 367
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 369,
                              "end": 375
                            },
                            "start": 367,
                            "end": 375
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 366,
                          "end": 376
                        }
                      ],
                      "start": 337,
                      "end": 382
                    },
                    "start": 335,
                    "end": 382
                  },
                  "start": 332,
                  "end": 382
                },
                "init": null,
                "definite": false,
                "start": 332,
                "end": 382
              }
            ],
            "declare": false,
            "start": 328,
            "end": 382
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 399
            },
            "start": 387,
            "end": 400
          }
        ],
        "start": 258,
        "end": 402
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 222,
      "end": 402
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 419,
        "end": 427
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 447
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 472,
                              "end": 478
                            },
                            "start": 470,
                            "end": 478
                          },
                          "start": 469,
                          "end": 478
                        },
                        "init": null,
                        "definite": false,
                        "start": 469,
                        "end": 478
                      }
                    ],
                    "declare": false,
                    "start": 465,
                    "end": 479
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 458,
                  "end": 479
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 502,
                              "end": 508
                            },
                            "start": 500,
                            "end": 508
                          },
                          "start": 499,
                          "end": 508
                        },
                        "init": null,
                        "definite": false,
                        "start": 499,
                        "end": 508
                      }
                    ],
                    "declare": false,
                    "start": 495,
                    "end": 509
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 488,
                  "end": 509
                }
              ],
              "start": 448,
              "end": 515
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 434,
            "end": 515
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 532
            },
            "start": 520,
            "end": 533
          }
        ],
        "start": 428,
        "end": 535
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 404,
      "end": 535
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "interface-module",
        "raw": "\"interface-module\"",
        "start": 552,
        "end": 570
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 587,
              "end": 590
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 601,
                    "end": 602
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 604,
                      "end": 610
                    },
                    "start": 602,
                    "end": 610
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 601,
                  "end": 611
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 620,
                    "end": 621
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 623,
                      "end": 629
                    },
                    "start": 621,
                    "end": 629
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 620,
                  "end": 630
                }
              ],
              "start": 591,
              "end": 636
            },
            "declare": false,
            "start": 577,
            "end": 636
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 654
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 679,
                              "end": 685
                            },
                            "start": 677,
                            "end": 685
                          },
                          "start": 676,
                          "end": 685
                        },
                        "init": null,
                        "definite": false,
                        "start": 676,
                        "end": 685
                      }
                    ],
                    "declare": false,
                    "start": 672,
                    "end": 686
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 665,
                  "end": 686
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 709,
                              "end": 715
                            },
                            "start": 707,
                            "end": 715
                          },
                          "start": 706,
                          "end": 715
                        },
                        "init": null,
                        "definite": false,
                        "start": 706,
                        "end": 715
                      }
                    ],
                    "declare": false,
                    "start": 702,
                    "end": 716
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 695,
                  "end": 716
                }
              ],
              "start": 655,
              "end": 722
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 641,
            "end": 722
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 739
            },
            "start": 727,
            "end": 740
          }
        ],
        "start": 571,
        "end": 742
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 537,
      "end": 742
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "variable-module",
        "raw": "\"variable-module\"",
        "start": 759,
        "end": 776
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 793,
              "end": 796
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 817,
                    "end": 820
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 835,
                          "end": 836
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 838,
                            "end": 844
                          },
                          "start": 836,
                          "end": 844
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 835,
                        "end": 845
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 858,
                          "end": 859
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 861,
                            "end": 867
                          },
                          "start": 859,
                          "end": 867
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 858,
                        "end": 868
                      }
                    ],
                    "start": 821,
                    "end": 878
                  },
                  "declare": false,
                  "start": 807,
                  "end": 878
                }
              ],
              "start": 797,
              "end": 884
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 783,
            "end": 884
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
                  "name": "Foo",
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 908,
                            "end": 909
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 911,
                              "end": 917
                            },
                            "start": 909,
                            "end": 917
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 908,
                          "end": 918
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 927,
                            "end": 928
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 930,
                              "end": 936
                            },
                            "start": 928,
                            "end": 936
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 927,
                          "end": 937
                        }
                      ],
                      "start": 898,
                      "end": 943
                    },
                    "start": 896,
                    "end": 943
                  },
                  "start": 893,
                  "end": 943
                },
                "init": null,
                "definite": false,
                "start": 893,
                "end": 943
              }
            ],
            "declare": false,
            "start": 889,
            "end": 943
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 960
            },
            "start": 948,
            "end": 961
          }
        ],
        "start": 777,
        "end": 963
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 744,
      "end": 963
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "function",
        "raw": "\"function\"",
        "start": 980,
        "end": 990
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1006,
              "end": 1009
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 997,
            "end": 1012
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1026,
              "end": 1029
            },
            "start": 1017,
            "end": 1030
          }
        ],
        "start": 991,
        "end": 1032
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 965,
      "end": 1032
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "function-module",
        "raw": "\"function-module\"",
        "start": 1049,
        "end": 1066
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1082,
              "end": 1085
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 1073,
            "end": 1088
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1103,
              "end": 1106
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1131,
                              "end": 1137
                            },
                            "start": 1129,
                            "end": 1137
                          },
                          "start": 1128,
                          "end": 1137
                        },
                        "init": null,
                        "definite": false,
                        "start": 1128,
                        "end": 1137
                      }
                    ],
                    "declare": false,
                    "start": 1124,
                    "end": 1138
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1117,
                  "end": 1138
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
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
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1147,
                  "end": 1168
                }
              ],
              "start": 1107,
              "end": 1174
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 1093,
            "end": 1174
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1188,
              "end": 1191
            },
            "start": 1179,
            "end": 1192
          }
        ],
        "start": 1067,
        "end": 1194
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1034,
      "end": 1194
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "class",
        "raw": "\"class\"",
        "start": 1211,
        "end": 1218
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
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1231,
              "end": 1234
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1245,
                    "end": 1246
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1248,
                      "end": 1254
                    },
                    "start": 1246,
                    "end": 1254
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
                  "start": 1245,
                  "end": 1255
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1264,
                    "end": 1265
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1267,
                      "end": 1273
                    },
                    "start": 1265,
                    "end": 1273
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
                  "start": 1264,
                  "end": 1274
                }
              ],
              "start": 1235,
              "end": 1280
            },
            "abstract": false,
            "declare": false,
            "start": 1225,
            "end": 1280
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1297
            },
            "start": 1285,
            "end": 1298
          }
        ],
        "start": 1219,
        "end": 1300
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1196,
      "end": 1300
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "class-module",
        "raw": "\"class-module\"",
        "start": 1317,
        "end": 1331
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
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1344,
              "end": 1347
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1358,
                    "end": 1359
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1361,
                      "end": 1367
                    },
                    "start": 1359,
                    "end": 1367
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
                  "start": 1358,
                  "end": 1368
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1377,
                    "end": 1378
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1380,
                      "end": 1386
                    },
                    "start": 1378,
                    "end": 1386
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
                  "start": 1377,
                  "end": 1387
                }
              ],
              "start": 1348,
              "end": 1393
            },
            "abstract": false,
            "declare": false,
            "start": 1338,
            "end": 1393
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1408,
              "end": 1411
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1436,
                              "end": 1442
                            },
                            "start": 1434,
                            "end": 1442
                          },
                          "start": 1433,
                          "end": 1442
                        },
                        "init": null,
                        "definite": false,
                        "start": 1433,
                        "end": 1442
                      }
                    ],
                    "declare": false,
                    "start": 1429,
                    "end": 1443
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1422,
                  "end": 1443
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1466,
                              "end": 1472
                            },
                            "start": 1464,
                            "end": 1472
                          },
                          "start": 1463,
                          "end": 1472
                        },
                        "init": null,
                        "definite": false,
                        "start": 1463,
                        "end": 1472
                      }
                    ],
                    "declare": false,
                    "start": 1459,
                    "end": 1473
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1452,
                  "end": 1473
                }
              ],
              "start": 1412,
              "end": 1479
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 1398,
            "end": 1479
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1493,
              "end": 1496
            },
            "start": 1484,
            "end": 1497
          }
        ],
        "start": 1332,
        "end": 1499
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1302,
      "end": 1499
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1500
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
    "value": "\"interface\"",
    "start": 15,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 33,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 43,
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
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 114,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 122,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"variable\"",
    "start": 129,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 205,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 214,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 222,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 230,
    "end": 236
  },
  {
    "type": "String",
    "value": "\"interface-variable\"",
    "start": 237,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 264,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 328,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "Foo",
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
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 350,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 369,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 387,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 404,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 412,
    "end": 418
  },
  {
    "type": "String",
    "value": "\"module\"",
    "start": 419,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 434,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 444,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 458,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 465,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 472,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 488,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 495,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 502,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 520,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 529,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 537,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 545,
    "end": 551
  },
  {
    "type": "String",
    "value": "\"interface-module\"",
    "start": 552,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 577,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 587,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 601,
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
    "value": "number",
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
    "type": "Identifier",
    "value": "y",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 623,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 641,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 651,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 665,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 672,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 679,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 695,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 702,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 709,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 727,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 736,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "declare",
    "start": 744,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 752,
    "end": 758
  },
  {
    "type": "String",
    "value": "\"variable-module\"",
    "start": 759,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 783,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 793,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 807,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 817,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 838,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 861,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 889,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 893,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 911,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 930,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "=",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 957,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 965,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 973,
    "end": 979
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 980,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 991,
    "end": 992
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 997,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1017,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1034,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 1042,
    "end": 1048
  },
  {
    "type": "String",
    "value": "\"function-module\"",
    "start": 1049,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1073,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1082,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1093,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1103,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1117,
    "end": 1123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1124,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1131,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1147,
    "end": 1153
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1154,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "number",
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
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1188,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1196,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 1204,
    "end": 1210
  },
  {
    "type": "String",
    "value": "\"class\"",
    "start": 1211,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1225,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1231,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1248,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1267,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1285,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1302,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 1310,
    "end": 1316
  },
  {
    "type": "String",
    "value": "\"class-module\"",
    "start": 1317,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1338,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1344,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1361,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1380,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1398,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1408,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1422,
    "end": 1428
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1429,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1436,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1452,
    "end": 1458
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1459,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1466,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1484,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1493,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1498,
    "end": 1499
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z1",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 64
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "interface",
          "raw": "\"interface\"",
          "start": 75,
          "end": 86
        },
        "start": 67,
        "end": 87
      },
      "importKind": "value",
      "start": 55,
      "end": 88
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z2",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 98
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "variable",
          "raw": "\"variable\"",
          "start": 109,
          "end": 119
        },
        "start": 101,
        "end": 120
      },
      "importKind": "value",
      "start": 89,
      "end": 121
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z3",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 131
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "interface-variable",
          "raw": "\"interface-variable\"",
          "start": 142,
          "end": 162
        },
        "start": 134,
        "end": 163
      },
      "importKind": "value",
      "start": 122,
      "end": 164
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z4",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 174
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "module",
          "raw": "\"module\"",
          "start": 185,
          "end": 193
        },
        "start": 177,
        "end": 194
      },
      "importKind": "value",
      "start": 165,
      "end": 195
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z5",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 205
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "interface-module",
          "raw": "\"interface-module\"",
          "start": 216,
          "end": 234
        },
        "start": 208,
        "end": 235
      },
      "importKind": "value",
      "start": 196,
      "end": 236
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z6",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 246
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "variable-module",
          "raw": "\"variable-module\"",
          "start": 257,
          "end": 274
        },
        "start": 249,
        "end": 275
      },
      "importKind": "value",
      "start": 237,
      "end": 276
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z7",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 286
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "function",
          "raw": "\"function\"",
          "start": 297,
          "end": 307
        },
        "start": 289,
        "end": 308
      },
      "importKind": "value",
      "start": 277,
      "end": 309
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z8",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 319
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "function-module",
          "raw": "\"function-module\"",
          "start": 330,
          "end": 347
        },
        "start": 322,
        "end": 348
      },
      "importKind": "value",
      "start": 310,
      "end": 349
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z9",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 359
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "class",
          "raw": "\"class\"",
          "start": 370,
          "end": 377
        },
        "start": 362,
        "end": 378
      },
      "importKind": "value",
      "start": 350,
      "end": 379
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z0",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 389
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "class-module",
          "raw": "\"class-module\"",
          "start": 400,
          "end": 414
        },
        "start": 392,
        "end": 415
      },
      "importKind": "value",
      "start": 380,
      "end": 416
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z1",
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 420
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 421,
          "end": 422
        },
        "optional": false,
        "computed": false,
        "start": 418,
        "end": 422
      },
      "directive": null,
      "start": 418,
      "end": 423
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z2",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 426
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 427,
          "end": 428
        },
        "optional": false,
        "computed": false,
        "start": 424,
        "end": 428
      },
      "directive": null,
      "start": 424,
      "end": 429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z3",
          "optional": false,
          "typeAnnotation": null,
          "start": 430,
          "end": 432
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 433,
          "end": 434
        },
        "optional": false,
        "computed": false,
        "start": 430,
        "end": 434
      },
      "directive": null,
      "start": 430,
      "end": 435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z4",
          "optional": false,
          "typeAnnotation": null,
          "start": 436,
          "end": 438
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 439,
          "end": 440
        },
        "optional": false,
        "computed": false,
        "start": 436,
        "end": 440
      },
      "directive": null,
      "start": 436,
      "end": 441
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z5",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 444
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 445,
          "end": 446
        },
        "optional": false,
        "computed": false,
        "start": 442,
        "end": 446
      },
      "directive": null,
      "start": 442,
      "end": 447
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z6",
          "optional": false,
          "typeAnnotation": null,
          "start": 448,
          "end": 450
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 451,
          "end": 452
        },
        "optional": false,
        "computed": false,
        "start": 448,
        "end": 452
      },
      "directive": null,
      "start": 448,
      "end": 453
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z7",
          "optional": false,
          "typeAnnotation": null,
          "start": 454,
          "end": 456
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 457,
          "end": 458
        },
        "optional": false,
        "computed": false,
        "start": 454,
        "end": 458
      },
      "directive": null,
      "start": 454,
      "end": 459
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z8",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 462
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 463,
          "end": 464
        },
        "optional": false,
        "computed": false,
        "start": 460,
        "end": 464
      },
      "directive": null,
      "start": 460,
      "end": 465
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z9",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 468
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 469,
          "end": 470
        },
        "optional": false,
        "computed": false,
        "start": 466,
        "end": 470
      },
      "directive": null,
      "start": 466,
      "end": 471
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z0",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 474
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 475,
          "end": 476
        },
        "optional": false,
        "computed": false,
        "start": 472,
        "end": 476
      },
      "directive": null,
      "start": 472,
      "end": 477
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 506
          },
          "start": 504,
          "end": 506
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface",
        "raw": "\"interface\"",
        "start": 512,
        "end": 523
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 497,
      "end": 524
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 532,
            "end": 534
          },
          "start": 532,
          "end": 534
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable",
        "raw": "\"variable\"",
        "start": 540,
        "end": 550
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 525,
      "end": 551
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 559,
            "end": 561
          },
          "start": 559,
          "end": 561
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-variable",
        "raw": "\"interface-variable\"",
        "start": 567,
        "end": 587
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 552,
      "end": 588
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 598
          },
          "start": 596,
          "end": 598
        }
      ],
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 604,
        "end": 612
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 589,
      "end": 613
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 623
          },
          "start": 621,
          "end": 623
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-module",
        "raw": "\"interface-module\"",
        "start": 629,
        "end": 647
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 614,
      "end": 648
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x6",
            "optional": false,
            "typeAnnotation": null,
            "start": 656,
            "end": 658
          },
          "start": 656,
          "end": 658
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable-module",
        "raw": "\"variable-module\"",
        "start": 664,
        "end": 681
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 649,
      "end": 682
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x7",
            "optional": false,
            "typeAnnotation": null,
            "start": 690,
            "end": 692
          },
          "start": 690,
          "end": 692
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function",
        "raw": "\"function\"",
        "start": 698,
        "end": 708
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 683,
      "end": 709
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x8",
            "optional": false,
            "typeAnnotation": null,
            "start": 717,
            "end": 719
          },
          "start": 717,
          "end": 719
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function-module",
        "raw": "\"function-module\"",
        "start": 725,
        "end": 742
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 710,
      "end": 743
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x9",
            "optional": false,
            "typeAnnotation": null,
            "start": 751,
            "end": 753
          },
          "start": 751,
          "end": 753
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class",
        "raw": "\"class\"",
        "start": 759,
        "end": 766
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 744,
      "end": 767
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x0",
            "optional": false,
            "typeAnnotation": null,
            "start": 775,
            "end": 777
          },
          "start": 775,
          "end": 777
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class-module",
        "raw": "\"class-module\"",
        "start": 783,
        "end": 797
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 768,
      "end": 798
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 832,
            "end": 834
          },
          "start": 827,
          "end": 834
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface",
        "raw": "\"interface\"",
        "start": 840,
        "end": 851
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 820,
      "end": 852
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 865,
            "end": 867
          },
          "start": 860,
          "end": 867
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable",
        "raw": "\"variable\"",
        "start": 873,
        "end": 883
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 853,
      "end": 884
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y3",
            "optional": false,
            "typeAnnotation": null,
            "start": 897,
            "end": 899
          },
          "start": 892,
          "end": 899
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-variable",
        "raw": "\"interface-variable\"",
        "start": 905,
        "end": 925
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 885,
      "end": 926
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y4",
            "optional": false,
            "typeAnnotation": null,
            "start": 939,
            "end": 941
          },
          "start": 934,
          "end": 941
        }
      ],
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 947,
        "end": 955
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 927,
      "end": 956
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y5",
            "optional": false,
            "typeAnnotation": null,
            "start": 969,
            "end": 971
          },
          "start": 964,
          "end": 971
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-module",
        "raw": "\"interface-module\"",
        "start": 977,
        "end": 995
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 957,
      "end": 996
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1009,
            "end": 1011
          },
          "start": 1004,
          "end": 1011
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable-module",
        "raw": "\"variable-module\"",
        "start": 1017,
        "end": 1034
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 997,
      "end": 1035
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1048,
            "end": 1050
          },
          "start": 1043,
          "end": 1050
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function",
        "raw": "\"function\"",
        "start": 1056,
        "end": 1066
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1036,
      "end": 1067
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1080,
            "end": 1082
          },
          "start": 1075,
          "end": 1082
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function-module",
        "raw": "\"function-module\"",
        "start": 1088,
        "end": 1105
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1068,
      "end": 1106
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1119,
            "end": 1121
          },
          "start": 1114,
          "end": 1121
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class",
        "raw": "\"class\"",
        "start": 1127,
        "end": 1134
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1107,
      "end": 1135
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1148,
            "end": 1150
          },
          "start": 1143,
          "end": 1150
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class-module",
        "raw": "\"class-module\"",
        "start": 1156,
        "end": 1170
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1136,
      "end": 1171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1173,
          "end": 1175
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1176,
          "end": 1177
        },
        "optional": false,
        "computed": false,
        "start": 1173,
        "end": 1177
      },
      "directive": null,
      "start": 1173,
      "end": 1178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1179,
          "end": 1181
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1182,
          "end": 1183
        },
        "optional": false,
        "computed": false,
        "start": 1179,
        "end": 1183
      },
      "directive": null,
      "start": 1179,
      "end": 1184
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1185,
          "end": 1187
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1188,
          "end": 1189
        },
        "optional": false,
        "computed": false,
        "start": 1185,
        "end": 1189
      },
      "directive": null,
      "start": 1185,
      "end": 1190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1191,
          "end": 1193
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1194,
          "end": 1195
        },
        "optional": false,
        "computed": false,
        "start": 1191,
        "end": 1195
      },
      "directive": null,
      "start": 1191,
      "end": 1196
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1197,
          "end": 1199
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1200,
          "end": 1201
        },
        "optional": false,
        "computed": false,
        "start": 1197,
        "end": 1201
      },
      "directive": null,
      "start": 1197,
      "end": 1202
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1203,
          "end": 1205
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1206,
          "end": 1207
        },
        "optional": false,
        "computed": false,
        "start": 1203,
        "end": 1207
      },
      "directive": null,
      "start": 1203,
      "end": 1208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1209,
          "end": 1211
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1212,
          "end": 1213
        },
        "optional": false,
        "computed": false,
        "start": 1209,
        "end": 1213
      },
      "directive": null,
      "start": 1209,
      "end": 1214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y8",
          "optional": false,
          "typeAnnotation": null,
          "start": 1215,
          "end": 1217
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1218,
          "end": 1219
        },
        "optional": false,
        "computed": false,
        "start": 1215,
        "end": 1219
      },
      "directive": null,
      "start": 1215,
      "end": 1220
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y9",
          "optional": false,
          "typeAnnotation": null,
          "start": 1221,
          "end": 1223
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1224,
          "end": 1225
        },
        "optional": false,
        "computed": false,
        "start": 1221,
        "end": 1225
      },
      "directive": null,
      "start": 1221,
      "end": 1226
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1227,
          "end": 1229
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1230,
          "end": 1231
        },
        "optional": false,
        "computed": false,
        "start": 1227,
        "end": 1231
      },
      "directive": null,
      "start": 1227,
      "end": 1232
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1259,
            "end": 1260
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1264,
            "end": 1266
          },
          "importKind": "value",
          "start": 1259,
          "end": 1266
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface",
        "raw": "\"interface\"",
        "start": 1274,
        "end": 1285
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1250,
      "end": 1286
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1296,
            "end": 1297
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1301,
            "end": 1303
          },
          "importKind": "value",
          "start": 1296,
          "end": 1303
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable",
        "raw": "\"variable\"",
        "start": 1311,
        "end": 1321
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1287,
      "end": 1322
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1332,
            "end": 1333
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1337,
            "end": 1339
          },
          "importKind": "value",
          "start": 1332,
          "end": 1339
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-variable",
        "raw": "\"interface-variable\"",
        "start": 1347,
        "end": 1367
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1323,
      "end": 1368
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1378,
            "end": 1379
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1383,
            "end": 1385
          },
          "importKind": "value",
          "start": 1378,
          "end": 1385
        }
      ],
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 1393,
        "end": 1401
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1369,
      "end": 1402
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1412,
            "end": 1413
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1417,
            "end": 1419
          },
          "importKind": "value",
          "start": 1412,
          "end": 1419
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-module",
        "raw": "\"interface-module\"",
        "start": 1427,
        "end": 1445
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1403,
      "end": 1446
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1456,
            "end": 1457
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1461,
            "end": 1463
          },
          "importKind": "value",
          "start": 1456,
          "end": 1463
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable-module",
        "raw": "\"variable-module\"",
        "start": 1471,
        "end": 1488
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1447,
      "end": 1489
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1499,
            "end": 1500
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1504,
            "end": 1506
          },
          "importKind": "value",
          "start": 1499,
          "end": 1506
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function",
        "raw": "\"function\"",
        "start": 1514,
        "end": 1524
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1490,
      "end": 1525
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1535,
            "end": 1536
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1540,
            "end": 1542
          },
          "importKind": "value",
          "start": 1535,
          "end": 1542
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function-module",
        "raw": "\"function-module\"",
        "start": 1550,
        "end": 1567
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1526,
      "end": 1568
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1578,
            "end": 1579
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1583,
            "end": 1585
          },
          "importKind": "value",
          "start": 1578,
          "end": 1585
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class",
        "raw": "\"class\"",
        "start": 1593,
        "end": 1600
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1569,
      "end": 1601
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1611,
            "end": 1612
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1616,
            "end": 1618
          },
          "importKind": "value",
          "start": 1611,
          "end": 1618
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class-module",
        "raw": "\"class-module\"",
        "start": 1626,
        "end": 1640
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1602,
      "end": 1641
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1643,
        "end": 1645
      },
      "directive": null,
      "start": 1643,
      "end": 1646
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1647,
        "end": 1649
      },
      "directive": null,
      "start": 1647,
      "end": 1650
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1651,
        "end": 1653
      },
      "directive": null,
      "start": 1651,
      "end": 1654
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1655,
        "end": 1657
      },
      "directive": null,
      "start": 1655,
      "end": 1658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1659,
        "end": 1661
      },
      "directive": null,
      "start": 1659,
      "end": 1662
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1663,
        "end": 1665
      },
      "directive": null,
      "start": 1663,
      "end": 1666
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1667,
        "end": 1669
      },
      "directive": null,
      "start": 1667,
      "end": 1670
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1671,
        "end": 1673
      },
      "directive": null,
      "start": 1671,
      "end": 1674
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1675,
        "end": 1677
      },
      "directive": null,
      "start": 1675,
      "end": 1678
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1679,
        "end": 1681
      },
      "directive": null,
      "start": 1679,
      "end": 1682
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1709,
            "end": 1710
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1714,
            "end": 1716
          },
          "exportKind": "value",
          "start": 1709,
          "end": 1716
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface",
        "raw": "\"interface\"",
        "start": 1724,
        "end": 1735
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1700,
      "end": 1736
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1746,
            "end": 1747
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1751,
            "end": 1753
          },
          "exportKind": "value",
          "start": 1746,
          "end": 1753
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable",
        "raw": "\"variable\"",
        "start": 1761,
        "end": 1771
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1737,
      "end": 1772
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1782,
            "end": 1783
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1787,
            "end": 1789
          },
          "exportKind": "value",
          "start": 1782,
          "end": 1789
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-variable",
        "raw": "\"interface-variable\"",
        "start": 1797,
        "end": 1817
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1773,
      "end": 1818
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1828,
            "end": 1829
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1833,
            "end": 1835
          },
          "exportKind": "value",
          "start": 1828,
          "end": 1835
        }
      ],
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 1843,
        "end": 1851
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1819,
      "end": 1852
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1862,
            "end": 1863
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1867,
            "end": 1869
          },
          "exportKind": "value",
          "start": 1862,
          "end": 1869
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-module",
        "raw": "\"interface-module\"",
        "start": 1877,
        "end": 1895
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1853,
      "end": 1896
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1906,
            "end": 1907
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1911,
            "end": 1913
          },
          "exportKind": "value",
          "start": 1906,
          "end": 1913
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable-module",
        "raw": "\"variable-module\"",
        "start": 1921,
        "end": 1938
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1897,
      "end": 1939
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1949,
            "end": 1950
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1954,
            "end": 1956
          },
          "exportKind": "value",
          "start": 1949,
          "end": 1956
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function",
        "raw": "\"function\"",
        "start": 1964,
        "end": 1974
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1940,
      "end": 1975
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1985,
            "end": 1986
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1990,
            "end": 1992
          },
          "exportKind": "value",
          "start": 1985,
          "end": 1992
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function-module",
        "raw": "\"function-module\"",
        "start": 2000,
        "end": 2017
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1976,
      "end": 2018
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2028,
            "end": 2029
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9",
            "optional": false,
            "typeAnnotation": null,
            "start": 2033,
            "end": 2035
          },
          "exportKind": "value",
          "start": 2028,
          "end": 2035
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class",
        "raw": "\"class\"",
        "start": 2043,
        "end": 2050
      },
      "exportKind": "value",
      "attributes": [],
      "start": 2019,
      "end": 2051
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2061,
            "end": 2062
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": null,
            "start": 2066,
            "end": 2068
          },
          "exportKind": "value",
          "start": 2061,
          "end": 2068
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class-module",
        "raw": "\"class-module\"",
        "start": 2076,
        "end": 2090
      },
      "exportKind": "value",
      "attributes": [],
      "start": 2052,
      "end": 2091
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "interface",
        "raw": "\"interface\"",
        "start": 2122,
        "end": 2133
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2108,
      "end": 2134
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "variable",
        "raw": "\"variable\"",
        "start": 2149,
        "end": 2159
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2135,
      "end": 2160
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "interface-variable",
        "raw": "\"interface-variable\"",
        "start": 2175,
        "end": 2195
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2161,
      "end": 2196
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 2211,
        "end": 2219
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2197,
      "end": 2220
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "interface-module",
        "raw": "\"interface-module\"",
        "start": 2235,
        "end": 2253
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2221,
      "end": 2254
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "variable-module",
        "raw": "\"variable-module\"",
        "start": 2269,
        "end": 2286
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2255,
      "end": 2287
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "function",
        "raw": "\"function\"",
        "start": 2302,
        "end": 2312
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2288,
      "end": 2313
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "function-module",
        "raw": "\"function-module\"",
        "start": 2328,
        "end": 2345
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2314,
      "end": 2346
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "class",
        "raw": "\"class\"",
        "start": 2361,
        "end": 2368
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2347,
      "end": 2369
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "class-module",
        "raw": "\"class-module\"",
        "start": 2384,
        "end": 2398
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2370,
      "end": 2399
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 55,
  "end": 2399
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 55,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 62,
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
    "value": "require",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"interface\"",
    "start": 75,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 89,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 101,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "String",
    "value": "\"variable\"",
    "start": 109,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 122,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "z3",
    "start": 129,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 134,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "String",
    "value": "\"interface-variable\"",
    "start": 142,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 165,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "z4",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "String",
    "value": "\"module\"",
    "start": 185,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 196,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "z5",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 208,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "String",
    "value": "\"interface-module\"",
    "start": 216,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 237,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "z6",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"variable-module\"",
    "start": 257,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 277,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "z7",
    "start": 284,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 289,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 297,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 310,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "z8",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 322,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "String",
    "value": "\"function-module\"",
    "start": 330,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "import",
    "start": 350,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "z9",
    "start": 357,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 362,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "String",
    "value": "\"class\"",
    "start": 370,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 380,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "z0",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 392,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "String",
    "value": "\"class-module\"",
    "start": 400,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "z3",
    "start": 430,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "z4",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "z5",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "z6",
    "start": 448,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "z7",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "z8",
    "start": 460,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "z9",
    "start": 466,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "z0",
    "start": 472,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 497,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 504,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 507,
    "end": 511
  },
  {
    "type": "String",
    "value": "\"interface\"",
    "start": 512,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 525,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 532,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 535,
    "end": 539
  },
  {
    "type": "String",
    "value": "\"variable\"",
    "start": 540,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 552,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 559,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 562,
    "end": 566
  },
  {
    "type": "String",
    "value": "\"interface-variable\"",
    "start": 567,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 589,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 596,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 599,
    "end": 603
  },
  {
    "type": "String",
    "value": "\"module\"",
    "start": 604,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 614,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 621,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 624,
    "end": 628
  },
  {
    "type": "String",
    "value": "\"interface-module\"",
    "start": 629,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 649,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 656,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 659,
    "end": 663
  },
  {
    "type": "String",
    "value": "\"variable-module\"",
    "start": 664,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 683,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 690,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 693,
    "end": 697
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 698,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 710,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "x8",
    "start": 717,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 720,
    "end": 724
  },
  {
    "type": "String",
    "value": "\"function-module\"",
    "start": 725,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 744,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "x9",
    "start": 751,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 754,
    "end": 758
  },
  {
    "type": "String",
    "value": "\"class\"",
    "start": 759,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 768,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "x0",
    "start": 775,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 778,
    "end": 782
  },
  {
    "type": "String",
    "value": "\"class-module\"",
    "start": 783,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 820,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 829,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 832,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 835,
    "end": 839
  },
  {
    "type": "String",
    "value": "\"interface\"",
    "start": 840,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 853,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 862,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 865,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 868,
    "end": 872
  },
  {
    "type": "String",
    "value": "\"variable\"",
    "start": 873,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 885,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 894,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 897,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 900,
    "end": 904
  },
  {
    "type": "String",
    "value": "\"interface-variable\"",
    "start": 905,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 927,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 936,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "y4",
    "start": 939,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 942,
    "end": 946
  },
  {
    "type": "String",
    "value": "\"module\"",
    "start": 947,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 957,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 966,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "y5",
    "start": 969,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 972,
    "end": 976
  },
  {
    "type": "String",
    "value": "\"interface-module\"",
    "start": 977,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 997,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1006,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "y6",
    "start": 1009,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1012,
    "end": 1016
  },
  {
    "type": "String",
    "value": "\"variable-module\"",
    "start": 1017,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1045,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "y7",
    "start": 1048,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1051,
    "end": 1055
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 1056,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1068,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1077,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "y8",
    "start": 1080,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1083,
    "end": 1087
  },
  {
    "type": "String",
    "value": "\"function-module\"",
    "start": 1088,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1107,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1116,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "y9",
    "start": 1119,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1122,
    "end": 1126
  },
  {
    "type": "String",
    "value": "\"class\"",
    "start": 1127,
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
    "value": "import",
    "start": 1136,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1145,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "y0",
    "start": 1148,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1151,
    "end": 1155
  },
  {
    "type": "String",
    "value": "\"class-module\"",
    "start": 1156,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1173,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1179,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "y4",
    "start": 1191,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "y5",
    "start": 1197,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "y6",
    "start": 1203,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "y7",
    "start": 1209,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "y8",
    "start": 1215,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "y9",
    "start": 1221,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "y0",
    "start": 1227,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1250,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1261,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1264,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1269,
    "end": 1273
  },
  {
    "type": "String",
    "value": "\"interface\"",
    "start": 1274,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1287,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1298,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1301,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1306,
    "end": 1310
  },
  {
    "type": "String",
    "value": "\"variable\"",
    "start": 1311,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1323,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1334,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1337,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1342,
    "end": 1346
  },
  {
    "type": "String",
    "value": "\"interface-variable\"",
    "start": 1347,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1369,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1380,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1383,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1388,
    "end": 1392
  },
  {
    "type": "String",
    "value": "\"module\"",
    "start": 1393,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1403,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1414,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1417,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1422,
    "end": 1426
  },
  {
    "type": "String",
    "value": "\"interface-module\"",
    "start": 1427,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1447,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1458,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1461,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1466,
    "end": 1470
  },
  {
    "type": "String",
    "value": "\"variable-module\"",
    "start": 1471,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1490,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1501,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1504,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1509,
    "end": 1513
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 1514,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1526,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1537,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 1540,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1545,
    "end": 1549
  },
  {
    "type": "String",
    "value": "\"function-module\"",
    "start": 1550,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1569,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1580,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 1583,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1588,
    "end": 1592
  },
  {
    "type": "String",
    "value": "\"class\"",
    "start": 1593,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1602,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1613,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 1616,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1621,
    "end": 1625
  },
  {
    "type": "String",
    "value": "\"class-module\"",
    "start": 1626,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1643,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1647,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1651,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1655,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1659,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1663,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1667,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 1671,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 1675,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 1679,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1700,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1711,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1714,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1719,
    "end": 1723
  },
  {
    "type": "String",
    "value": "\"interface\"",
    "start": 1724,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1737,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1748,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1751,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1756,
    "end": 1760
  },
  {
    "type": "String",
    "value": "\"variable\"",
    "start": 1761,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1773,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1784,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1787,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1792,
    "end": 1796
  },
  {
    "type": "String",
    "value": "\"interface-variable\"",
    "start": 1797,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1819,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1830,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1833,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1838,
    "end": 1842
  },
  {
    "type": "String",
    "value": "\"module\"",
    "start": 1843,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1853,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1864,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1867,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1872,
    "end": 1876
  },
  {
    "type": "String",
    "value": "\"interface-module\"",
    "start": 1877,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1897,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1908,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1911,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1916,
    "end": 1920
  },
  {
    "type": "String",
    "value": "\"variable-module\"",
    "start": 1921,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1940,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1951,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1954,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1959,
    "end": 1963
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 1964,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1976,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1987,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 1990,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1995,
    "end": 1999
  },
  {
    "type": "String",
    "value": "\"function-module\"",
    "start": 2000,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2019,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2030,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 2033,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2038,
    "end": 2042
  },
  {
    "type": "String",
    "value": "\"class\"",
    "start": 2043,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2052,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2063,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 2066,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2071,
    "end": 2075
  },
  {
    "type": "String",
    "value": "\"class-module\"",
    "start": 2076,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2108,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2117,
    "end": 2121
  },
  {
    "type": "String",
    "value": "\"interface\"",
    "start": 2122,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2135,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2144,
    "end": 2148
  },
  {
    "type": "String",
    "value": "\"variable\"",
    "start": 2149,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2161,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2170,
    "end": 2174
  },
  {
    "type": "String",
    "value": "\"interface-variable\"",
    "start": 2175,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2197,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2206,
    "end": 2210
  },
  {
    "type": "String",
    "value": "\"module\"",
    "start": 2211,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2221,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2230,
    "end": 2234
  },
  {
    "type": "String",
    "value": "\"interface-module\"",
    "start": 2235,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2255,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2264,
    "end": 2268
  },
  {
    "type": "String",
    "value": "\"variable-module\"",
    "start": 2269,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2288,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2297,
    "end": 2301
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 2302,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2314,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2323,
    "end": 2327
  },
  {
    "type": "String",
    "value": "\"function-module\"",
    "start": 2328,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2347,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2356,
    "end": 2360
  },
  {
    "type": "String",
    "value": "\"class\"",
    "start": 2361,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2370,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2379,
    "end": 2383
  },
  {
    "type": "String",
    "value": "\"class-module\"",
    "start": 2384,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2398,
    "end": 2399
  }
]
```
