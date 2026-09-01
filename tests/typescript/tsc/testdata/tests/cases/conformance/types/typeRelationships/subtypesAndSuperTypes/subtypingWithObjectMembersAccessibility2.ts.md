__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 74
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
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
            "start": 81,
            "end": 93
          }
        ],
        "start": 75,
        "end": 95
      },
      "abstract": false,
      "declare": false,
      "start": 64,
      "end": 95
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 110
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 123
      },
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 133
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 135,
                "end": 141
              },
              "start": 133,
              "end": 141
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
            "start": 130,
            "end": 142
          }
        ],
        "start": 124,
        "end": 144
      },
      "abstract": false,
      "declare": false,
      "start": 97,
      "end": 144
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExplicitPublic",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 170
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 184
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 206
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 208,
                        "end": 212
                      },
                      "typeArguments": null,
                      "start": 208,
                      "end": 212
                    },
                    "start": 206,
                    "end": 212
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 195,
                  "end": 213
                }
              ],
              "start": 185,
              "end": 219
            },
            "abstract": false,
            "declare": false,
            "start": 177,
            "end": 219
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 232
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 242
            },
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 260,
                    "end": 263
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 272
                      },
                      "typeArguments": null,
                      "start": 265,
                      "end": 272
                    },
                    "start": 263,
                    "end": 272
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 253,
                  "end": 273
                }
              ],
              "start": 243,
              "end": 288
            },
            "abstract": false,
            "declare": false,
            "start": 225,
            "end": 288
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 302
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
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 321,
                    "end": 322
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 324,
                        "end": 328
                      },
                      "typeArguments": null,
                      "start": 324,
                      "end": 328
                    },
                    "start": 322,
                    "end": 328
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 313,
                  "end": 329
                }
              ],
              "start": 303,
              "end": 335
            },
            "abstract": false,
            "declare": false,
            "start": 294,
            "end": 335
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 349
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 360
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 378,
                    "end": 379
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 381,
                        "end": 388
                      },
                      "typeArguments": null,
                      "start": 381,
                      "end": 388
                    },
                    "start": 379,
                    "end": 388
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 371,
                  "end": 389
                }
              ],
              "start": 361,
              "end": 404
            },
            "abstract": false,
            "declare": false,
            "start": 341,
            "end": 404
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 418
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
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 437,
                    "end": 440
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 442,
                        "end": 446
                      },
                      "typeArguments": null,
                      "start": 442,
                      "end": 446
                    },
                    "start": 440,
                    "end": 446
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 429,
                  "end": 447
                }
              ],
              "start": 419,
              "end": 453
            },
            "abstract": false,
            "declare": false,
            "start": 410,
            "end": 453
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 465,
              "end": 467
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 478
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 496,
                    "end": 499
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 501,
                        "end": 508
                      },
                      "typeArguments": null,
                      "start": 501,
                      "end": 508
                    },
                    "start": 499,
                    "end": 508
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 489,
                  "end": 509
                }
              ],
              "start": 479,
              "end": 524
            },
            "abstract": false,
            "declare": false,
            "start": 459,
            "end": 524
          }
        ],
        "start": 171,
        "end": 526
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 146,
      "end": 526
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ImplicitPublic",
        "optional": false,
        "typeAnnotation": null,
        "start": 538,
        "end": 552
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 566
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 585,
                    "end": 588
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 590,
                        "end": 594
                      },
                      "typeArguments": null,
                      "start": 590,
                      "end": 594
                    },
                    "start": 588,
                    "end": 594
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 577,
                  "end": 595
                }
              ],
              "start": 567,
              "end": 601
            },
            "abstract": false,
            "declare": false,
            "start": 559,
            "end": 601
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 614
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 624
            },
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 638
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 640,
                        "end": 647
                      },
                      "typeArguments": null,
                      "start": 640,
                      "end": 647
                    },
                    "start": 638,
                    "end": 647
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
                  "start": 635,
                  "end": 648
                }
              ],
              "start": 625,
              "end": 663
            },
            "abstract": false,
            "declare": false,
            "start": 607,
            "end": 663
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 677
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
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 696,
                    "end": 697
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 699,
                        "end": 703
                      },
                      "typeArguments": null,
                      "start": 699,
                      "end": 703
                    },
                    "start": 697,
                    "end": 703
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 688,
                  "end": 704
                }
              ],
              "start": 678,
              "end": 710
            },
            "abstract": false,
            "declare": false,
            "start": 669,
            "end": 710
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 724
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 733,
              "end": 735
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 746,
                    "end": 747
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 756
                      },
                      "typeArguments": null,
                      "start": 749,
                      "end": 756
                    },
                    "start": 747,
                    "end": 756
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
                  "start": 746,
                  "end": 757
                }
              ],
              "start": 736,
              "end": 772
            },
            "abstract": false,
            "declare": false,
            "start": 716,
            "end": 772
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 786
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
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 805,
                    "end": 808
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 810,
                        "end": 814
                      },
                      "typeArguments": null,
                      "start": 810,
                      "end": 814
                    },
                    "start": 808,
                    "end": 814
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 797,
                  "end": 815
                }
              ],
              "start": 787,
              "end": 821
            },
            "abstract": false,
            "declare": false,
            "start": 778,
            "end": 821
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 833,
              "end": 835
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 846
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 857,
                    "end": 860
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 862,
                        "end": 869
                      },
                      "typeArguments": null,
                      "start": 862,
                      "end": 869
                    },
                    "start": 860,
                    "end": 869
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
                  "start": 857,
                  "end": 870
                }
              ],
              "start": 847,
              "end": 885
            },
            "abstract": false,
            "declare": false,
            "start": 827,
            "end": 885
          }
        ],
        "start": 553,
        "end": 887
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 528,
      "end": 887
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 887
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 86,
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
    "type": "Keyword",
    "value": "class",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 103,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 111,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 146,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "ExplicitPublic",
    "start": 156,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 177,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 195,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 225,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 233,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 241,
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
    "value": "public",
    "start": 253,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 260,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 265,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 294,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 313,
    "end": 320
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 324,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 341,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 347,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 350,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 358,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 371,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 381,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 410,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 429,
    "end": 436
  },
  {
    "type": "String",
    "value": "'1'",
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
    "value": "Base",
    "start": 442,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 459,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 465,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 468,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 476,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 489,
    "end": 495
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 496,
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
    "value": "Derived",
    "start": 501,
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
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 528,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "ImplicitPublic",
    "start": 538,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 559,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 577,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 585,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 590,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 607,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 615,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 635,
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
    "value": "Derived",
    "start": 640,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 662,
    "end": 663
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 669,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 675,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 688,
    "end": 695
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 699,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 716,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 722,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 725,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 733,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 736,
    "end": 737
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 749,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 778,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 784,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 797,
    "end": 804
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 805,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 810,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 820,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 827,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 833,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 836,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 844,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 847,
    "end": 848
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 857,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 862,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887
  }
]
```
