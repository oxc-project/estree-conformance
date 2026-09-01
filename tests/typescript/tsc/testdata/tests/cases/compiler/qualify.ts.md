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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 30
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 31,
                    "end": 32
                  },
                  "definite": false,
                  "start": 29,
                  "end": 32
                }
              ],
              "declare": false,
              "start": 25,
              "end": 33
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 33
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
                "start": 55,
                "end": 56
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
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 78,
                            "end": 79
                          },
                          "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 80,
                            "end": 81
                          },
                          "definite": false,
                          "start": 78,
                          "end": 81
                        }
                      ],
                      "declare": false,
                      "start": 74,
                      "end": 82
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 67,
                    "end": 82
                  }
                ],
                "start": 57,
                "end": 88
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 45,
              "end": 88
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 38,
            "end": 88
          }
        ],
        "start": 12,
        "end": 90
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 90
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 103
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
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 143,
                          "end": 144
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 145,
                          "end": 146
                        },
                        "definite": false,
                        "start": 143,
                        "end": 146
                      }
                    ],
                    "declare": false,
                    "start": 139,
                    "end": 147
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 160,
                          "end": 161
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 162,
                            "end": 163
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 164,
                            "end": 165
                          },
                          "start": 162,
                          "end": 165
                        },
                        "definite": false,
                        "start": 160,
                        "end": 165
                      }
                    ],
                    "declare": false,
                    "start": 156,
                    "end": 166
                  }
                ],
                "start": 129,
                "end": 172
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 117,
              "end": 172
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 110,
            "end": 172
          }
        ],
        "start": 104,
        "end": 174
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 92,
      "end": 174
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 188
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 213
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 225
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 224,
                    "end": 226
                  }
                ],
                "start": 214,
                "end": 232
              },
              "declare": false,
              "start": 202,
              "end": 232
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 195,
            "end": 232
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 255
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 272,
                                "end": 273
                              },
                              "typeArguments": null,
                              "start": 272,
                              "end": 273
                            },
                            "start": 271,
                            "end": 273
                          },
                          "start": 270,
                          "end": 273
                        },
                        "init": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 274,
                          "end": 275
                        },
                        "definite": false,
                        "start": 270,
                        "end": 275
                      }
                    ],
                    "declare": false,
                    "start": 266,
                    "end": 276
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 302,
                        "end": 304
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
                              "name": "q",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 319,
                              "end": 320
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 319,
                            "end": 321
                          }
                        ],
                        "start": 305,
                        "end": 331
                      },
                      "declare": false,
                      "start": 292,
                      "end": 331
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 285,
                    "end": 331
                  }
                ],
                "start": 256,
                "end": 337
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 244,
              "end": 337
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 237,
            "end": 337
          }
        ],
        "start": 189,
        "end": 339
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 177,
      "end": 339
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Peer",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 355
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
                "name": "U2",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 381
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 398,
                                    "end": 399
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 400,
                                    "end": 401
                                  },
                                  "start": 398,
                                  "end": 401
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "I2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 402,
                                  "end": 404
                                },
                                "start": 398,
                                "end": 404
                              },
                              "typeArguments": null,
                              "start": 398,
                              "end": 404
                            },
                            "start": 397,
                            "end": 404
                          },
                          "start": 396,
                          "end": 404
                        },
                        "init": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 405,
                          "end": 406
                        },
                        "definite": false,
                        "start": 396,
                        "end": 406
                      }
                    ],
                    "declare": false,
                    "start": 392,
                    "end": 407
                  }
                ],
                "start": 382,
                "end": 413
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 369,
              "end": 413
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 362,
            "end": 413
          }
        ],
        "start": 356,
        "end": 415
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 341,
      "end": 415
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Everest",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
        "end": 434
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
                "name": "K1",
                "optional": false,
                "typeAnnotation": null,
                "start": 458,
                "end": 460
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
                        "name": "I3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 488,
                        "end": 490
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
                              "name": "zeep",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 505,
                              "end": 509
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 505,
                            "end": 510
                          }
                        ],
                        "start": 491,
                        "end": 520
                      },
                      "declare": false,
                      "start": 478,
                      "end": 520
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 471,
                    "end": 520
                  }
                ],
                "start": 461,
                "end": 526
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 448,
              "end": 526
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 441,
            "end": 526
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "K2",
                "optional": false,
                "typeAnnotation": null,
                "start": 548,
                "end": 550
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
                        "name": "I4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 578,
                        "end": 580
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
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 595,
                              "end": 596
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 595,
                            "end": 597
                          }
                        ],
                        "start": 581,
                        "end": 607
                      },
                      "declare": false,
                      "start": 568,
                      "end": 607
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 561,
                    "end": 607
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
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 623,
                                "end": 625
                              },
                              "typeArguments": null,
                              "start": 623,
                              "end": 625
                            },
                            "start": 622,
                            "end": 625
                          },
                          "start": 620,
                          "end": 625
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 628,
                            "end": 637
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 641,
                            "end": 644
                          },
                          "start": 628,
                          "end": 644
                        },
                        "definite": false,
                        "start": 620,
                        "end": 644
                      }
                    ],
                    "declare": false,
                    "start": 616,
                    "end": 645
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
                          "name": "v2",
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
                                  "name": "K1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 661,
                                  "end": 663
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "I3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 664,
                                  "end": 666
                                },
                                "start": 661,
                                "end": 666
                              },
                              "typeArguments": null,
                              "start": 661,
                              "end": 666
                            },
                            "start": 660,
                            "end": 666
                          },
                          "start": 658,
                          "end": 666
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 667,
                          "end": 669
                        },
                        "definite": false,
                        "start": 658,
                        "end": 669
                      }
                    ],
                    "declare": false,
                    "start": 654,
                    "end": 670
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
                          "name": "v3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 686,
                                    "end": 688
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "I3",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 689,
                                    "end": 691
                                  },
                                  "start": 686,
                                  "end": 691
                                },
                                "typeArguments": null,
                                "start": 686,
                                "end": 691
                              },
                              "start": 686,
                              "end": 693
                            },
                            "start": 685,
                            "end": 693
                          },
                          "start": 683,
                          "end": 693
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 694,
                          "end": 696
                        },
                        "definite": false,
                        "start": 683,
                        "end": 696
                      }
                    ],
                    "declare": false,
                    "start": 679,
                    "end": 697
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
                          "name": "v4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "K1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 717,
                                      "end": 719
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I3",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 720,
                                      "end": 722
                                    },
                                    "start": 717,
                                    "end": 722
                                  },
                                  "typeArguments": null,
                                  "start": 717,
                                  "end": 722
                                },
                                "start": 715,
                                "end": 722
                              },
                              "start": 713,
                              "end": 722
                            },
                            "start": 712,
                            "end": 722
                          },
                          "start": 710,
                          "end": 722
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 723,
                          "end": 725
                        },
                        "definite": false,
                        "start": 710,
                        "end": 725
                      }
                    ],
                    "declare": false,
                    "start": 706,
                    "end": 726
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
                          "name": "v5",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "k",
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
                                          "name": "K1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 745,
                                          "end": 747
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "I3",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 748,
                                          "end": 750
                                        },
                                        "start": 745,
                                        "end": 750
                                      },
                                      "typeArguments": null,
                                      "start": 745,
                                      "end": 750
                                    },
                                    "start": 744,
                                    "end": 750
                                  },
                                  "start": 743,
                                  "end": 750
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 753,
                                  "end": 757
                                },
                                "start": 751,
                                "end": 757
                              },
                              "start": 742,
                              "end": 757
                            },
                            "start": 741,
                            "end": 757
                          },
                          "start": 739,
                          "end": 757
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 758,
                          "end": 760
                        },
                        "definite": false,
                        "start": 739,
                        "end": 760
                      }
                    ],
                    "declare": false,
                    "start": 735,
                    "end": 761
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
                          "name": "v6",
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
                                    "name": "k",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 778,
                                    "end": 779
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "K1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 780,
                                          "end": 782
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "I3",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 783,
                                          "end": 785
                                        },
                                        "start": 780,
                                        "end": 785
                                      },
                                      "typeArguments": null,
                                      "start": 780,
                                      "end": 785
                                    },
                                    "start": 779,
                                    "end": 785
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 778,
                                  "end": 786
                                }
                              ],
                              "start": 777,
                              "end": 787
                            },
                            "start": 776,
                            "end": 787
                          },
                          "start": 774,
                          "end": 787
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 788,
                          "end": 790
                        },
                        "definite": false,
                        "start": 774,
                        "end": 790
                      }
                    ],
                    "declare": false,
                    "start": 770,
                    "end": 791
                  }
                ],
                "start": 551,
                "end": 797
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 538,
              "end": 797
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 531,
            "end": 797
          }
        ],
        "start": 435,
        "end": 799
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 417,
      "end": 799
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 811,
        "end": 812
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
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 820
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 819,
            "end": 821
          }
        ],
        "start": 813,
        "end": 823
      },
      "declare": false,
      "start": 801,
      "end": 823
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 831,
                  "end": 832
                },
                "typeArguments": null,
                "start": 831,
                "end": 832
              },
              "start": 830,
              "end": 832
            },
            "start": 829,
            "end": 832
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 835,
              "end": 844
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 848,
              "end": 851
            },
            "start": 835,
            "end": 851
          },
          "definite": false,
          "start": 829,
          "end": 851
        }
      ],
      "declare": false,
      "start": 825,
      "end": 852
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
            "name": "x",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 859,
                    "end": 860
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 861,
                    "end": 862
                  },
                  "start": 859,
                  "end": 862
                },
                "typeArguments": null,
                "start": 859,
                "end": 862
              },
              "start": 858,
              "end": 862
            },
            "start": 857,
            "end": 862
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 863,
            "end": 864
          },
          "definite": false,
          "start": 857,
          "end": 864
        }
      ],
      "declare": false,
      "start": 853,
      "end": 865
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 866
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
    "value": "M",
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
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 25,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 38,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 45,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 67,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 74,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 92,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 110,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 117,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 156,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 164,
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
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 177,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 195,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 202,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 224,
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
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 237,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 244,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 266,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "value": "export",
    "start": 285,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 292,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 341,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "Peer",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 362,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 369,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "U2",
    "start": 379,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 392,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "I2",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 417,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "Everest",
    "start": 427,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 441,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 448,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 458,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 471,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 478,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 488,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "zeep",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 531,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 538,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 548,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 561,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 568,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 616,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 620,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 623,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 628,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 638,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 641,
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
    "value": "var",
    "start": 654,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 658,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 661,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 679,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 683,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 686,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 694,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 706,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 710,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 715,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 717,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 720,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 723,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 735,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 739,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 745,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 748,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 751,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 753,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 758,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 770,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "v6",
    "start": 774,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 780,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 783,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 788,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 801,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "k",
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
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 825,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 835,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 845,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 848,
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
    "value": "var",
    "start": 853,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865
  }
]
```
