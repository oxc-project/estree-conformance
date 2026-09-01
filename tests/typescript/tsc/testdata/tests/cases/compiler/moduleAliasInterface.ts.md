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
        "name": "_modes",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
                "name": "IMode",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 42
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 43,
                "end": 50
              },
              "declare": false,
              "start": 27,
              "end": 50
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 50
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mode",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 71
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 72,
                "end": 79
              },
              "abstract": false,
              "declare": false,
              "start": 61,
              "end": 79
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 54,
            "end": 79
          }
        ],
        "start": 17,
        "end": 81
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 81
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "editor",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 177
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "modes",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 193
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "_modes",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 202
            },
            "importKind": "value",
            "start": 181,
            "end": 203
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "modes",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 215,
                          "end": 220
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IMode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 221,
                          "end": 226
                        },
                        "start": 215,
                        "end": 226
                      },
                      "typeArguments": null,
                      "start": 215,
                      "end": 226
                    },
                    "start": 213,
                    "end": 226
                  },
                  "start": 211,
                  "end": 226
                },
                "init": null,
                "definite": false,
                "start": 211,
                "end": 226
              }
            ],
            "declare": false,
            "start": 207,
            "end": 227
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bug",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 316
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 322,
                    "end": 333
                  },
                  "value": {
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
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "modes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 338,
                                "end": 343
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IMode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 344,
                                "end": 349
                              },
                              "start": 338,
                              "end": 349
                            },
                            "typeArguments": null,
                            "start": 338,
                            "end": 349
                          },
                          "start": 336,
                          "end": 349
                        },
                        "start": 334,
                        "end": 349
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "modes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 355,
                                "end": 360
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 361,
                                "end": 365
                              },
                              "start": 355,
                              "end": 365
                            },
                            "typeArguments": null,
                            "start": 355,
                            "end": 365
                          },
                          "start": 353,
                          "end": 365
                        },
                        "start": 351,
                        "end": 365
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 367,
                      "end": 370
                    },
                    "expression": false,
                    "start": 333,
                    "end": 370
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 322,
                  "end": 370
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 430
                  },
                  "value": {
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
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "modes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 434,
                                "end": 439
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IMode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 440,
                                "end": 445
                              },
                              "start": 434,
                              "end": 445
                            },
                            "typeArguments": null,
                            "start": 434,
                            "end": 445
                          },
                          "start": 433,
                          "end": 445
                        },
                        "start": 431,
                        "end": 445
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 447,
                      "end": 456
                    },
                    "expression": false,
                    "start": 430,
                    "end": 456
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 420,
                  "end": 456
                }
              ],
              "start": 317,
              "end": 460
            },
            "abstract": false,
            "declare": false,
            "start": 307,
            "end": 460
          }
        ],
        "start": 178,
        "end": 462
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 161,
      "end": 462
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "modesOuter",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 481
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "_modes",
        "optional": false,
        "typeAnnotation": null,
        "start": 484,
        "end": 490
      },
      "importKind": "value",
      "start": 464,
      "end": 491
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "editor2",
        "optional": false,
        "typeAnnotation": null,
        "start": 502,
        "end": 509
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "modesOuter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 523,
                          "end": 533
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IMode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 539
                        },
                        "start": 523,
                        "end": 539
                      },
                      "typeArguments": null,
                      "start": 523,
                      "end": 539
                    },
                    "start": 521,
                    "end": 539
                  },
                  "start": 519,
                  "end": 539
                },
                "init": null,
                "definite": false,
                "start": 519,
                "end": 539
              }
            ],
            "declare": false,
            "start": 515,
            "end": 540
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bug",
              "optional": false,
              "typeAnnotation": null,
              "start": 550,
              "end": 553
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 572
                  },
                  "value": {
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
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "modesOuter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 577,
                                "end": 587
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IMode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 588,
                                "end": 593
                              },
                              "start": 577,
                              "end": 593
                            },
                            "typeArguments": null,
                            "start": 577,
                            "end": 593
                          },
                          "start": 575,
                          "end": 593
                        },
                        "start": 573,
                        "end": 593
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "modesOuter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 599,
                                "end": 609
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 610,
                                "end": 614
                              },
                              "start": 599,
                              "end": 614
                            },
                            "typeArguments": null,
                            "start": 599,
                            "end": 614
                          },
                          "start": 597,
                          "end": 614
                        },
                        "start": 595,
                        "end": 614
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 616,
                      "end": 619
                    },
                    "expression": false,
                    "start": 572,
                    "end": 619
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 561,
                  "end": 619
                }
              ],
              "start": 554,
              "end": 682
            },
            "abstract": false,
            "declare": false,
            "start": 544,
            "end": 682
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 700
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
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 716,
                      "end": 719
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 719,
                      "end": 721
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 710,
                    "end": 721
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 703,
                  "end": 721
                }
              ],
              "start": 701,
              "end": 723
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 687,
            "end": 723
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bug2",
              "optional": false,
              "typeAnnotation": null,
              "start": 734,
              "end": 738
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 747,
                    "end": 758
                  },
                  "value": {
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
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 763,
                                "end": 766
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 767,
                                "end": 770
                              },
                              "start": 763,
                              "end": 770
                            },
                            "typeArguments": null,
                            "start": 763,
                            "end": 770
                          },
                          "start": 761,
                          "end": 770
                        },
                        "start": 759,
                        "end": 770
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "modesOuter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 776,
                                "end": 786
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 787,
                                "end": 791
                              },
                              "start": 776,
                              "end": 791
                            },
                            "typeArguments": null,
                            "start": 776,
                            "end": 791
                          },
                          "start": 774,
                          "end": 791
                        },
                        "start": 772,
                        "end": 791
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 793,
                      "end": 796
                    },
                    "expression": false,
                    "start": 758,
                    "end": 796
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 747,
                  "end": 796
                }
              ],
              "start": 739,
              "end": 800
            },
            "abstract": false,
            "declare": false,
            "start": 728,
            "end": 800
          }
        ],
        "start": 510,
        "end": 802
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 492,
      "end": 802
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 814,
        "end": 816
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
                "name": "A1I1",
                "optional": false,
                "typeAnnotation": null,
                "start": 840,
                "end": 844
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 845,
                "end": 847
              },
              "declare": false,
              "start": 830,
              "end": 847
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 823,
            "end": 847
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A1C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 865,
                "end": 869
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 870,
                "end": 872
              },
              "abstract": false,
              "declare": false,
              "start": 859,
              "end": 872
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 852,
            "end": 872
          }
        ],
        "start": 817,
        "end": 874
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 804,
      "end": 874
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 886,
        "end": 888
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1Alias1",
              "optional": false,
              "typeAnnotation": null,
              "start": 902,
              "end": 910
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 915
            },
            "importKind": "value",
            "start": 895,
            "end": 916
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1Alias1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 934,
                          "end": 942
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1I1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 943,
                          "end": 947
                        },
                        "start": 934,
                        "end": 947
                      },
                      "typeArguments": null,
                      "start": 934,
                      "end": 947
                    },
                    "start": 932,
                    "end": 947
                  },
                  "start": 930,
                  "end": 947
                },
                "init": null,
                "definite": false,
                "start": 930,
                "end": 947
              }
            ],
            "declare": false,
            "start": 926,
            "end": 948
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1Alias1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 964,
                          "end": 972
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1C1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 973,
                          "end": 977
                        },
                        "start": 964,
                        "end": 977
                      },
                      "typeArguments": null,
                      "start": 964,
                      "end": 977
                    },
                    "start": 962,
                    "end": 977
                  },
                  "start": 960,
                  "end": 977
                },
                "init": null,
                "definite": false,
                "start": 960,
                "end": 977
              }
            ],
            "declare": false,
            "start": 956,
            "end": 978
          }
        ],
        "start": 889,
        "end": 980
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 876,
      "end": 980
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 980
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
    "value": "_modes",
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
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 27,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Mode",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "namespace",
    "start": 161,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "editor",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 181,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "modes",
    "start": 188,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "_modes",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 207,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "modes",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 221,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 307,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Bug",
    "start": 313,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 322,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "modes",
    "start": 338,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 344,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "modes",
    "start": 355,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "Mode",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 420,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 427,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 431,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "modes",
    "start": 434,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 440,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 464,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "modesOuter",
    "start": 471,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "_modes",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 492,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "editor2",
    "start": 502,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 515,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "modesOuter",
    "start": 523,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 534,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 544,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "Bug",
    "start": 550,
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
    "value": "constructor",
    "start": 561,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 573,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "modesOuter",
    "start": 577,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 588,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 595,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "modesOuter",
    "start": 599,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "Mode",
    "start": 610,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 687,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 697,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 703,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 710,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 716,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 728,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "Bug2",
    "start": 734,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 747,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 759,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 763,
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
    "value": "Bar",
    "start": 767,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 772,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "modesOuter",
    "start": 776,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "Mode",
    "start": 787,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 804,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 814,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 823,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 830,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "A1I1",
    "start": 840,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "class",
    "start": 859,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "A1C1",
    "start": 865,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 876,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 886,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 895,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "A1Alias1",
    "start": 902,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 926,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "A1Alias1",
    "start": 934,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "A1I1",
    "start": 943,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 956,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "A1Alias1",
    "start": 964,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "A1C1",
    "start": 973,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980
  }
]
```
