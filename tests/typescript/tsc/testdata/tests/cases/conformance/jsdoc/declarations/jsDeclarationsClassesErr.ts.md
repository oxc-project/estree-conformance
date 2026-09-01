__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 201
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
                "start": 202,
                "end": 203
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 202,
              "end": 203
            }
          ],
          "start": 201,
          "end": 204
        },
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
                "name": "field",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 216
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
                    "start": 218,
                    "end": 219
                  },
                  "typeArguments": null,
                  "start": 218,
                  "end": 219
                },
                "start": 216,
                "end": 219
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
              "start": 211,
              "end": 220
            }
          ],
          "start": 205,
          "end": 222
        },
        "abstract": false,
        "declare": false,
        "start": 194,
        "end": 222
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 187,
      "end": 222
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 238
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 240
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 239,
              "end": 240
            }
          ],
          "start": 238,
          "end": 241
        },
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 250,
          "end": 251
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 253
              },
              "typeArguments": null,
              "start": 252,
              "end": 253
            }
          ],
          "start": 251,
          "end": 254
        },
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
                "name": "other",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 266
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
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
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 261,
              "end": 270
            }
          ],
          "start": 255,
          "end": 272
        },
        "abstract": false,
        "declare": false,
        "start": 231,
        "end": 272
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 224,
      "end": 272
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 287,
          "end": 288
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 301,
                      "end": 307
                    },
                    "start": 299,
                    "end": 307
                  },
                  "start": 296,
                  "end": 307
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 310,
                  "end": 316
                },
                "start": 308,
                "end": 316
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 295,
              "end": 317
            }
          ],
          "start": 289,
          "end": 319
        },
        "abstract": false,
        "declare": false,
        "start": 281,
        "end": 319
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 274,
      "end": 319
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 335
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 345
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 346,
          "end": 348
        },
        "abstract": false,
        "declare": false,
        "start": 328,
        "end": 348
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 321,
      "end": 348
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Q",
          "optional": false,
          "typeAnnotation": null,
          "start": 363,
          "end": 364
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 374
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 387,
                      "end": 393
                    },
                    "start": 385,
                    "end": 393
                  },
                  "start": 382,
                  "end": 393
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 396,
                    "end": 400
                  },
                  "start": 396,
                  "end": 400
                },
                "start": 394,
                "end": 400
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 381,
              "end": 401
            }
          ],
          "start": 375,
          "end": 403
        },
        "abstract": false,
        "declare": false,
        "start": 357,
        "end": 403
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 350,
      "end": 403
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "R",
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 419
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 428,
          "end": 429
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 442,
                      "end": 448
                    },
                    "start": 440,
                    "end": 448
                  },
                  "start": 437,
                  "end": 448
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 451,
                    "end": 455
                  },
                  "start": 451,
                  "end": 455
                },
                "start": 449,
                "end": 455
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 436,
              "end": 456
            }
          ],
          "start": 430,
          "end": 458
        },
        "abstract": false,
        "declare": false,
        "start": 412,
        "end": 458
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 405,
      "end": 458
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "S",
          "optional": false,
          "typeAnnotation": null,
          "start": 473,
          "end": 474
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 483,
          "end": 484
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 497,
                      "end": 503
                    },
                    "start": 495,
                    "end": 503
                  },
                  "start": 492,
                  "end": 503
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 506,
                    "end": 510
                  },
                  "start": 506,
                  "end": 510
                },
                "start": 504,
                "end": 510
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 491,
              "end": 511
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 522,
                      "end": 528
                    },
                    "start": 520,
                    "end": 528
                  },
                  "start": 517,
                  "end": 528
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 531,
                  "end": 536
                },
                "start": 529,
                "end": 536
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 516,
              "end": 537
            }
          ],
          "start": 485,
          "end": 539
        },
        "abstract": false,
        "declare": false,
        "start": 467,
        "end": 539
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 460,
      "end": 539
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 555
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 568,
                      "end": 574
                    },
                    "start": 566,
                    "end": 574
                  },
                  "start": 563,
                  "end": 574
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 577,
                  "end": 583
                },
                "start": 575,
                "end": 583
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 562,
              "end": 584
            }
          ],
          "start": 556,
          "end": 586
        },
        "abstract": false,
        "declare": false,
        "start": 548,
        "end": 586
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 541,
      "end": 586
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "U",
          "optional": false,
          "typeAnnotation": null,
          "start": 601,
          "end": 602
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 611,
          "end": 612
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 613,
          "end": 615
        },
        "abstract": false,
        "declare": false,
        "start": 595,
        "end": 615
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 588,
      "end": 615
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "V",
          "optional": false,
          "typeAnnotation": null,
          "start": 631,
          "end": 632
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 641,
          "end": 642
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 655,
                      "end": 661
                    },
                    "start": 653,
                    "end": 661
                  },
                  "start": 650,
                  "end": 661
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 664,
                  "end": 670
                },
                "start": 662,
                "end": 670
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 649,
              "end": 671
            }
          ],
          "start": 643,
          "end": 673
        },
        "abstract": false,
        "declare": false,
        "start": 625,
        "end": 673
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 618,
      "end": 673
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "W",
          "optional": false,
          "typeAnnotation": null,
          "start": 688,
          "end": 689
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 698,
          "end": 699
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 712,
                      "end": 718
                    },
                    "start": 710,
                    "end": 718
                  },
                  "start": 707,
                  "end": 718
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 721,
                    "end": 725
                  },
                  "start": 721,
                  "end": 725
                },
                "start": 719,
                "end": 725
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 706,
              "end": 726
            }
          ],
          "start": 700,
          "end": 728
        },
        "abstract": false,
        "declare": false,
        "start": 682,
        "end": 728
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 675,
      "end": 728
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 743,
          "end": 744
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 753,
          "end": 754
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 767,
                      "end": 773
                    },
                    "start": 765,
                    "end": 773
                  },
                  "start": 762,
                  "end": 773
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 776,
                  "end": 782
                },
                "start": 774,
                "end": 782
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 761,
              "end": 783
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 794,
                      "end": 800
                    },
                    "start": 792,
                    "end": 800
                  },
                  "start": 789,
                  "end": 800
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 803,
                    "end": 807
                  },
                  "start": 803,
                  "end": 807
                },
                "start": 801,
                "end": 807
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 788,
              "end": 808
            }
          ],
          "start": 755,
          "end": 810
        },
        "abstract": false,
        "declare": false,
        "start": 737,
        "end": 810
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 730,
      "end": 810
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 825,
          "end": 826
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 839,
                      "end": 845
                    },
                    "start": 837,
                    "end": 845
                  },
                  "start": 834,
                  "end": 845
                }
              ],
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
                        "start": 849,
                        "end": 850
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 852,
                          "end": 858
                        },
                        "start": 850,
                        "end": 858
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 849,
                      "end": 858
                    }
                  ],
                  "start": 848,
                  "end": 859
                },
                "start": 846,
                "end": 859
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 833,
              "end": 860
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 871,
                      "end": 877
                    },
                    "start": 869,
                    "end": 877
                  },
                  "start": 866,
                  "end": 877
                }
              ],
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
                        "start": 881,
                        "end": 882
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 884,
                          "end": 890
                        },
                        "start": 882,
                        "end": 890
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 881,
                      "end": 891
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
                        "start": 892,
                        "end": 893
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 895,
                          "end": 901
                        },
                        "start": 893,
                        "end": 901
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 892,
                      "end": 901
                    }
                  ],
                  "start": 880,
                  "end": 902
                },
                "start": 878,
                "end": 902
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 865,
              "end": 903
            }
          ],
          "start": 827,
          "end": 905
        },
        "abstract": false,
        "declare": false,
        "start": 819,
        "end": 905
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 812,
      "end": 905
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 920,
          "end": 921
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 930,
          "end": 931
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 932,
          "end": 934
        },
        "abstract": false,
        "declare": false,
        "start": 914,
        "end": 934
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 907,
      "end": 934
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AA",
          "optional": false,
          "typeAnnotation": null,
          "start": 949,
          "end": 951
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 960,
          "end": 961
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 974,
                      "end": 980
                    },
                    "start": 972,
                    "end": 980
                  },
                  "start": 969,
                  "end": 980
                }
              ],
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
                        "start": 984,
                        "end": 985
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 987,
                          "end": 993
                        },
                        "start": 985,
                        "end": 993
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 984,
                      "end": 994
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
                        "start": 995,
                        "end": 996
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 998,
                          "end": 1004
                        },
                        "start": 996,
                        "end": 1004
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 995,
                      "end": 1004
                    }
                  ],
                  "start": 983,
                  "end": 1005
                },
                "start": 981,
                "end": 1005
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 968,
              "end": 1006
            }
          ],
          "start": 962,
          "end": 1008
        },
        "abstract": false,
        "declare": false,
        "start": 943,
        "end": 1008
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 936,
      "end": 1008
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1023,
          "end": 1025
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1034,
          "end": 1035
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1048,
                      "end": 1054
                    },
                    "start": 1046,
                    "end": 1054
                  },
                  "start": 1043,
                  "end": 1054
                }
              ],
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
                        "start": 1058,
                        "end": 1059
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1061,
                            "end": 1062
                          },
                          "start": 1061,
                          "end": 1062
                        },
                        "start": 1059,
                        "end": 1062
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1058,
                      "end": 1063
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
                        "start": 1064,
                        "end": 1065
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1067,
                            "end": 1068
                          },
                          "start": 1067,
                          "end": 1068
                        },
                        "start": 1065,
                        "end": 1068
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1064,
                      "end": 1068
                    }
                  ],
                  "start": 1057,
                  "end": 1069
                },
                "start": 1055,
                "end": 1069
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1042,
              "end": 1070
            }
          ],
          "start": 1036,
          "end": 1072
        },
        "abstract": false,
        "declare": false,
        "start": 1017,
        "end": 1072
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1010,
      "end": 1072
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CC",
          "optional": false,
          "typeAnnotation": null,
          "start": 1087,
          "end": 1089
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1098,
          "end": 1099
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1112,
                      "end": 1118
                    },
                    "start": 1110,
                    "end": 1118
                  },
                  "start": 1107,
                  "end": 1118
                }
              ],
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
                        "start": 1122,
                        "end": 1123
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1125,
                          "end": 1131
                        },
                        "start": 1123,
                        "end": 1131
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1122,
                      "end": 1132
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
                        "start": 1133,
                        "end": 1134
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1136,
                          "end": 1142
                        },
                        "start": 1134,
                        "end": 1142
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1133,
                      "end": 1142
                    }
                  ],
                  "start": 1121,
                  "end": 1143
                },
                "start": 1119,
                "end": 1143
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1106,
              "end": 1144
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1155,
                      "end": 1161
                    },
                    "start": 1153,
                    "end": 1161
                  },
                  "start": 1150,
                  "end": 1161
                }
              ],
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
                        "start": 1165,
                        "end": 1166
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1168,
                            "end": 1169
                          },
                          "start": 1168,
                          "end": 1169
                        },
                        "start": 1166,
                        "end": 1169
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1165,
                      "end": 1170
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
                        "start": 1171,
                        "end": 1172
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1174,
                            "end": 1175
                          },
                          "start": 1174,
                          "end": 1175
                        },
                        "start": 1172,
                        "end": 1175
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1171,
                      "end": 1175
                    }
                  ],
                  "start": 1164,
                  "end": 1176
                },
                "start": 1162,
                "end": 1176
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1149,
              "end": 1177
            }
          ],
          "start": 1100,
          "end": 1179
        },
        "abstract": false,
        "declare": false,
        "start": 1081,
        "end": 1179
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1074,
      "end": 1179
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 187,
  "end": 1179
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 187,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 194,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 224,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 231,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 242,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 261,
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
    "value": "U",
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
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 274,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 281,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "string",
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
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 321,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 328,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 336,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 350,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 357,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 365,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 387,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 405,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 412,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 420,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 460,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 467,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 475,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 506,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 522,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 531,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 541,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 548,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 563,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 568,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 574,
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
    "value": "string",
    "start": 577,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 588,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 595,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 603,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 618,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 625,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 633,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 650,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 655,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 664,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 675,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 682,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 688,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 690,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 707,
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
    "value": "number",
    "start": 712,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 721,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 730,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 737,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 745,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 762,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 767,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 773,
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
    "value": "string",
    "start": 776,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 789,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 794,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "String",
    "value": "\"ok\"",
    "start": 803,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 812,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 819,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 834,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 839,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "x",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 852,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 866,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 871,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 884,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 895,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 907,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 914,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 922,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 936,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 943,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 949,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 952,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 969,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 974,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 987,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 998,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1010,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1017,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 1023,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1026,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1043,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1048,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "0",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1074,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1081,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 1087,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1090,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1107,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1112,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1125,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1136,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1155,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1178,
    "end": 1179
  }
]
```
