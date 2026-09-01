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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 26
              },
              "typeArguments": null,
              "start": 22,
              "end": 26
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 26
          }
        ],
        "start": 11,
        "end": 27
      },
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
              "start": 34,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 38
                },
                "typeArguments": null,
                "start": 37,
                "end": 38
              },
              "start": 35,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 34,
            "end": 39
          }
        ],
        "start": 28,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 56
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 71
              },
              "typeArguments": null,
              "start": 65,
              "end": 71
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 55,
            "end": 71
          }
        ],
        "start": 54,
        "end": 72
      },
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 92
                },
                "typeArguments": null,
                "start": 91,
                "end": 92
              },
              "start": 89,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 88,
            "end": 93
          }
        ],
        "start": 73,
        "end": 95
      },
      "declare": false,
      "start": 43,
      "end": 95
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 128
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 137,
                      "end": 138
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 139,
                            "end": 143
                          },
                          "typeArguments": null,
                          "start": 139,
                          "end": 143
                        }
                      ],
                      "start": 138,
                      "end": 144
                    },
                    "start": 137,
                    "end": 144
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 127,
                  "end": 144
                }
              ],
              "start": 126,
              "end": 145
            },
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
                    "start": 156,
                    "end": 157
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 160
                      },
                      "typeArguments": null,
                      "start": 159,
                      "end": 160
                    },
                    "start": 157,
                    "end": 160
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 156,
                  "end": 161
                }
              ],
              "start": 146,
              "end": 167
            },
            "declare": false,
            "start": 115,
            "end": 167
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 184
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 186
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 196
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 197,
                          "end": 200
                        }
                      ],
                      "start": 196,
                      "end": 201
                    },
                    "start": 195,
                    "end": 201
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 185,
                  "end": 201
                }
              ],
              "start": 184,
              "end": 202
            },
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 223
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 225,
                        "end": 226
                      },
                      "typeArguments": null,
                      "start": 225,
                      "end": 226
                    },
                    "start": 223,
                    "end": 226
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 222,
                  "end": 227
                }
              ],
              "start": 203,
              "end": 233
            },
            "declare": false,
            "start": 173,
            "end": 233
          }
        ],
        "start": 109,
        "end": 235
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 97,
      "end": 235
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 249
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
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
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 269
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 282
                    },
                    "typeArguments": null,
                    "start": 278,
                    "end": 282
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 268,
                  "end": 282
                }
              ],
              "start": 267,
              "end": 283
            },
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
                    "start": 294,
                    "end": 295
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 298
                      },
                      "typeArguments": null,
                      "start": 297,
                      "end": 298
                    },
                    "start": 295,
                    "end": 298
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 294,
                  "end": 299
                }
              ],
              "start": 284,
              "end": 305
            },
            "declare": false,
            "start": 256,
            "end": 305
          }
        ],
        "start": 250,
        "end": 307
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 237,
      "end": 307
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 321
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 339
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 340,
                    "end": 341
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 356
                    },
                    "typeArguments": null,
                    "start": 350,
                    "end": 356
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 340,
                  "end": 356
                }
              ],
              "start": 339,
              "end": 357
            },
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 420
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 422,
                        "end": 423
                      },
                      "typeArguments": null,
                      "start": 422,
                      "end": 423
                    },
                    "start": 420,
                    "end": 423
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 419,
                  "end": 424
                }
              ],
              "start": 358,
              "end": 430
            },
            "declare": false,
            "start": 328,
            "end": 430
          }
        ],
        "start": 322,
        "end": 432
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 309,
      "end": 432
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null,
        "start": 444,
        "end": 446
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
                "start": 470,
                "end": 471
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 472,
                      "end": 473
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 482,
                        "end": 486
                      },
                      "typeArguments": null,
                      "start": 482,
                      "end": 486
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 472,
                    "end": 486
                  }
                ],
                "start": 471,
                "end": 487
              },
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
                      "start": 498,
                      "end": 499
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 501,
                          "end": 502
                        },
                        "typeArguments": null,
                        "start": 501,
                        "end": 502
                      },
                      "start": 499,
                      "end": 502
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 498,
                    "end": 503
                  }
                ],
                "start": 488,
                "end": 509
              },
              "declare": false,
              "start": 460,
              "end": 509
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 453,
            "end": 509
          }
        ],
        "start": 447,
        "end": 511
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 434,
      "end": 511
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null,
        "start": 523,
        "end": 525
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
                "start": 549,
                "end": 550
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 551,
                      "end": 552
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 561,
                        "end": 567
                      },
                      "typeArguments": null,
                      "start": 561,
                      "end": 567
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 551,
                    "end": 567
                  }
                ],
                "start": 550,
                "end": 568
              },
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 588,
                      "end": 589
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 591,
                          "end": 592
                        },
                        "typeArguments": null,
                        "start": 591,
                        "end": 592
                      },
                      "start": 589,
                      "end": 592
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 588,
                    "end": 593
                  }
                ],
                "start": 569,
                "end": 599
              },
              "declare": false,
              "start": 539,
              "end": 599
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 532,
            "end": 599
          }
        ],
        "start": 526,
        "end": 601
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 513,
      "end": 601
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 614
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 616
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 625,
              "end": 631
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 615,
            "end": 631
          }
        ],
        "start": 614,
        "end": 632
      },
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
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 637,
              "end": 638
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 640,
                  "end": 641
                },
                "typeArguments": null,
                "start": 640,
                "end": 641
              },
              "start": 638,
              "end": 641
            },
            "accessibility": null,
            "static": false,
            "start": 637,
            "end": 642
          },
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
              "start": 645,
              "end": 646
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constraint",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 648,
                  "end": 658
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 659,
                        "end": 660
                      },
                      "typeArguments": null,
                      "start": 659,
                      "end": 660
                    }
                  ],
                  "start": 658,
                  "end": 661
                },
                "start": 648,
                "end": 661
              },
              "start": 646,
              "end": 661
            },
            "accessibility": null,
            "static": false,
            "start": 645,
            "end": 662
          }
        ],
        "start": 633,
        "end": 670
      },
      "declare": false,
      "start": 603,
      "end": 670
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 683
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 685
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 684,
            "end": 685
          }
        ],
        "start": 683,
        "end": 686
      },
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
              "start": 697,
              "end": 698
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 700,
                  "end": 701
                },
                "typeArguments": null,
                "start": 700,
                "end": 701
              },
              "start": 698,
              "end": 701
            },
            "accessibility": null,
            "static": false,
            "start": 697,
            "end": 702
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
              "start": 705,
              "end": 706
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constraint",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 708,
                  "end": 718
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 719,
                        "end": 720
                      },
                      "typeArguments": null,
                      "start": 719,
                      "end": 720
                    }
                  ],
                  "start": 718,
                  "end": 721
                },
                "start": 708,
                "end": 721
              },
              "start": 706,
              "end": 721
            },
            "accessibility": null,
            "static": false,
            "start": 705,
            "end": 722
          }
        ],
        "start": 687,
        "end": 730
      },
      "declare": false,
      "start": 672,
      "end": 730
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 742,
        "end": 743
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 745
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 744,
            "end": 745
          }
        ],
        "start": 743,
        "end": 746
      },
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
              "start": 751,
              "end": 752
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 754,
                  "end": 755
                },
                "typeArguments": null,
                "start": 754,
                "end": 755
              },
              "start": 752,
              "end": 755
            },
            "accessibility": null,
            "static": false,
            "start": 751,
            "end": 756
          }
        ],
        "start": 747,
        "end": 758
      },
      "declare": false,
      "start": 732,
      "end": 758
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 770,
        "end": 771
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 773
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 782,
              "end": 788
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 772,
            "end": 788
          }
        ],
        "start": 771,
        "end": 789
      },
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 801
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 803,
                  "end": 804
                },
                "typeArguments": null,
                "start": 803,
                "end": 804
              },
              "start": 801,
              "end": 804
            },
            "accessibility": null,
            "static": false,
            "start": 800,
            "end": 805
          }
        ],
        "start": 790,
        "end": 807
      },
      "declare": false,
      "start": 760,
      "end": 807
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 819,
        "end": 829
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 830,
              "end": 831
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 840,
              "end": 846
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 830,
            "end": 846
          }
        ],
        "start": 829,
        "end": 847
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 848,
        "end": 850
      },
      "declare": false,
      "start": 809,
      "end": 850
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 850
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
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 14,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 43,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 57,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 97,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 115,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 129,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 156,
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
    "value": "T",
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
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 173,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 187,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 225,
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
    "type": "Identifier",
    "value": "namespace",
    "start": 237,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 247,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
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
    "value": "<",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 270,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 278,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 309,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 328,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 342,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 350,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 434,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 444,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 453,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 460,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 474,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 482,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "T",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 513,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 523,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 532,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 539,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 553,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 561,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 603,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 617,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 625,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "Constraint",
    "start": 648,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 672,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "Constraint",
    "start": 708,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 732,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 760,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 774,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 782,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 809,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "Constraint",
    "start": 819,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 832,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 840,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  }
]
```
