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
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 19,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 48
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 49,
          "end": 52
        },
        "abstract": false,
        "declare": false,
        "start": 31,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 24,
      "end": 52
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivatePropertyTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 110
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
                "name": "myProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 127
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 141
                  },
                  "typeArguments": null,
                  "start": 129,
                  "end": 141
                },
                "start": 127,
                "end": 141
              },
              "accessibility": null,
              "static": false,
              "start": 117,
              "end": 142
            }
          ],
          "start": 111,
          "end": 154
        },
        "declare": false,
        "start": 61,
        "end": 154
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 54,
      "end": 154
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicPropertyTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 173,
          "end": 211
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
                "name": "myProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 228
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 230,
                    "end": 241
                  },
                  "typeArguments": null,
                  "start": 230,
                  "end": 241
                },
                "start": 228,
                "end": 241
              },
              "accessibility": null,
              "static": false,
              "start": 218,
              "end": 242
            }
          ],
          "start": 212,
          "end": 244
        },
        "declare": false,
        "start": 163,
        "end": 244
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 156,
      "end": 244
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivatePropertyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 256,
        "end": 296
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
              "name": "myProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 313
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 327
                },
                "typeArguments": null,
                "start": 315,
                "end": 327
              },
              "start": 313,
              "end": 327
            },
            "accessibility": null,
            "static": false,
            "start": 303,
            "end": 328
          }
        ],
        "start": 297,
        "end": 330
      },
      "declare": false,
      "start": 246,
      "end": 330
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicPropertyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 381
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
              "name": "myProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 398
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 400,
                  "end": 411
                },
                "typeArguments": null,
                "start": 400,
                "end": 411
              },
              "start": 398,
              "end": 411
            },
            "accessibility": null,
            "static": false,
            "start": 388,
            "end": 412
          }
        ],
        "start": 382,
        "end": 414
      },
      "declare": false,
      "start": 332,
      "end": 414
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPrivatePropertyTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 429,
          "end": 468
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
                "name": "myPublicStaticProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 504
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 518
                  },
                  "typeArguments": null,
                  "start": 506,
                  "end": 518
                },
                "start": 504,
                "end": 518
              },
              "value": null,
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 475,
              "end": 519
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 548,
                "end": 571
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 573,
                    "end": 585
                  },
                  "typeArguments": null,
                  "start": 573,
                  "end": 585
                },
                "start": 571,
                "end": 585
              },
              "value": null,
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 533,
              "end": 586
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 591,
                "end": 607
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 609,
                    "end": 621
                  },
                  "typeArguments": null,
                  "start": 609,
                  "end": 621
                },
                "start": 607,
                "end": 621
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
              "start": 591,
              "end": 622
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 661
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 663,
                    "end": 675
                  },
                  "typeArguments": null,
                  "start": 663,
                  "end": 675
                },
                "start": 661,
                "end": 675
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
              "start": 636,
              "end": 676
            }
          ],
          "start": 469,
          "end": 678
        },
        "abstract": false,
        "declare": false,
        "start": 423,
        "end": 678
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 416,
      "end": 678
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPublicPropertyTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 693,
          "end": 731
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
                "name": "myPublicStaticProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 745,
                "end": 767
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 769,
                    "end": 780
                  },
                  "typeArguments": null,
                  "start": 769,
                  "end": 780
                },
                "start": 767,
                "end": 780
              },
              "value": null,
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 738,
              "end": 781
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 801,
                "end": 824
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 826,
                    "end": 837
                  },
                  "typeArguments": null,
                  "start": 826,
                  "end": 837
                },
                "start": 824,
                "end": 837
              },
              "value": null,
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 786,
              "end": 838
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 843,
                "end": 859
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 861,
                    "end": 872
                  },
                  "typeArguments": null,
                  "start": 861,
                  "end": 872
                },
                "start": 859,
                "end": 872
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
              "start": 843,
              "end": 873
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 886,
                "end": 903
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 905,
                    "end": 916
                  },
                  "typeArguments": null,
                  "start": 905,
                  "end": 916
                },
                "start": 903,
                "end": 916
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
              "start": 878,
              "end": 917
            }
          ],
          "start": 732,
          "end": 919
        },
        "abstract": false,
        "declare": false,
        "start": 687,
        "end": 919
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 680,
      "end": 919
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPrivatePropertyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 927,
        "end": 967
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
              "name": "myPublicStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 1003
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1005,
                  "end": 1017
                },
                "typeArguments": null,
                "start": 1005,
                "end": 1017
              },
              "start": 1003,
              "end": 1017
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 974,
            "end": 1018
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1038,
              "end": 1061
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1063,
                  "end": 1075
                },
                "typeArguments": null,
                "start": 1063,
                "end": 1075
              },
              "start": 1061,
              "end": 1075
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1023,
            "end": 1076
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1081,
              "end": 1097
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1099,
                  "end": 1111
                },
                "typeArguments": null,
                "start": 1099,
                "end": 1111
              },
              "start": 1097,
              "end": 1111
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
            "start": 1081,
            "end": 1112
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1125,
              "end": 1142
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1144,
                  "end": 1156
                },
                "typeArguments": null,
                "start": 1144,
                "end": 1156
              },
              "start": 1142,
              "end": 1156
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
            "start": 1117,
            "end": 1157
          }
        ],
        "start": 968,
        "end": 1159
      },
      "abstract": false,
      "declare": false,
      "start": 921,
      "end": 1159
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPublicPropertyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 1167,
        "end": 1206
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
              "name": "myPublicStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1220,
              "end": 1242
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1244,
                  "end": 1255
                },
                "typeArguments": null,
                "start": 1244,
                "end": 1255
              },
              "start": 1242,
              "end": 1255
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1213,
            "end": 1256
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1276,
              "end": 1299
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1301,
                  "end": 1312
                },
                "typeArguments": null,
                "start": 1301,
                "end": 1312
              },
              "start": 1299,
              "end": 1312
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1261,
            "end": 1313
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1318,
              "end": 1334
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1336,
                  "end": 1347
                },
                "typeArguments": null,
                "start": 1336,
                "end": 1347
              },
              "start": 1334,
              "end": 1347
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
            "start": 1318,
            "end": 1348
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1361,
              "end": 1378
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1380,
                  "end": 1391
                },
                "typeArguments": null,
                "start": 1380,
                "end": 1391
              },
              "start": 1378,
              "end": 1391
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
            "start": 1353,
            "end": 1392
          }
        ],
        "start": 1207,
        "end": 1394
      },
      "abstract": false,
      "declare": false,
      "start": 1161,
      "end": 1394
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
              "name": "publicVarWithPrivatePropertyTypes",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1442,
                    "end": 1454
                  },
                  "typeArguments": null,
                  "start": 1442,
                  "end": 1454
                },
                "start": 1440,
                "end": 1454
              },
              "start": 1407,
              "end": 1454
            },
            "init": null,
            "definite": false,
            "start": 1407,
            "end": 1454
          }
        ],
        "declare": false,
        "start": 1403,
        "end": 1455
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1396,
      "end": 1455
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
              "name": "publicVarWithPublicPropertyTypes",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1510,
                    "end": 1521
                  },
                  "typeArguments": null,
                  "start": 1510,
                  "end": 1521
                },
                "start": 1508,
                "end": 1521
              },
              "start": 1476,
              "end": 1521
            },
            "init": null,
            "definite": false,
            "start": 1476,
            "end": 1521
          }
        ],
        "declare": false,
        "start": 1472,
        "end": 1522
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1465,
      "end": 1522
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
            "name": "privateVarWithPrivatePropertyTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1563,
                  "end": 1575
                },
                "typeArguments": null,
                "start": 1563,
                "end": 1575
              },
              "start": 1561,
              "end": 1575
            },
            "start": 1527,
            "end": 1575
          },
          "init": null,
          "definite": false,
          "start": 1527,
          "end": 1575
        }
      ],
      "declare": false,
      "start": 1523,
      "end": 1576
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
            "name": "privateVarWithPublicPropertyTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1616,
                  "end": 1627
                },
                "typeArguments": null,
                "start": 1616,
                "end": 1627
              },
              "start": 1614,
              "end": 1627
            },
            "start": 1581,
            "end": 1627
          },
          "init": null,
          "definite": false,
          "start": 1581,
          "end": 1627
        }
      ],
      "declare": false,
      "start": 1577,
      "end": 1628
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
              "name": "publicAmbientVarWithPrivatePropertyTypes",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1691,
                    "end": 1703
                  },
                  "typeArguments": null,
                  "start": 1691,
                  "end": 1703
                },
                "start": 1689,
                "end": 1703
              },
              "start": 1649,
              "end": 1703
            },
            "init": null,
            "definite": false,
            "start": 1649,
            "end": 1703
          }
        ],
        "declare": true,
        "start": 1637,
        "end": 1704
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1630,
      "end": 1704
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
              "name": "publicAmbientVarWithPublicPropertyTypes",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1774,
                    "end": 1785
                  },
                  "typeArguments": null,
                  "start": 1774,
                  "end": 1785
                },
                "start": 1772,
                "end": 1785
              },
              "start": 1733,
              "end": 1785
            },
            "init": null,
            "definite": false,
            "start": 1733,
            "end": 1785
          }
        ],
        "declare": true,
        "start": 1721,
        "end": 1786
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1714,
      "end": 1786
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
            "name": "privateAmbientVarWithPrivatePropertyTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1842,
                  "end": 1854
                },
                "typeArguments": null,
                "start": 1842,
                "end": 1854
              },
              "start": 1840,
              "end": 1854
            },
            "start": 1799,
            "end": 1854
          },
          "init": null,
          "definite": false,
          "start": 1799,
          "end": 1854
        }
      ],
      "declare": true,
      "start": 1787,
      "end": 1855
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
            "name": "privateAmbientVarWithPublicPropertyTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1910,
                  "end": 1921
                },
                "typeArguments": null,
                "start": 1910,
                "end": 1921
              },
              "start": 1908,
              "end": 1921
            },
            "start": 1868,
            "end": 1921
          },
          "init": null,
          "definite": false,
          "start": 1868,
          "end": 1921
        }
      ],
      "declare": true,
      "start": 1856,
      "end": 1922
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivateModulePropertyTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1941,
          "end": 1986
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
                "name": "myProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 1993,
                "end": 2003
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
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2005,
                      "end": 2018
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2019,
                      "end": 2030
                    },
                    "start": 2005,
                    "end": 2030
                  },
                  "typeArguments": null,
                  "start": 2005,
                  "end": 2030
                },
                "start": 2003,
                "end": 2030
              },
              "accessibility": null,
              "static": false,
              "start": 1993,
              "end": 2031
            }
          ],
          "start": 1987,
          "end": 2042
        },
        "declare": false,
        "start": 1931,
        "end": 2042
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1924,
      "end": 2042
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPrivateModulePropertyTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 2056,
          "end": 2097
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
                "name": "myPublicStaticProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 2111,
                "end": 2133
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
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2135,
                      "end": 2148
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2149,
                      "end": 2160
                    },
                    "start": 2135,
                    "end": 2160
                  },
                  "typeArguments": null,
                  "start": 2135,
                  "end": 2160
                },
                "start": 2133,
                "end": 2160
              },
              "value": null,
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 2104,
              "end": 2161
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 2175,
                "end": 2191
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
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2193,
                      "end": 2206
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2207,
                      "end": 2218
                    },
                    "start": 2193,
                    "end": 2218
                  },
                  "typeArguments": null,
                  "start": 2193,
                  "end": 2218
                },
                "start": 2191,
                "end": 2218
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
              "start": 2175,
              "end": 2219
            }
          ],
          "start": 2098,
          "end": 2230
        },
        "abstract": false,
        "declare": false,
        "start": 2050,
        "end": 2230
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2043,
      "end": 2230
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
              "name": "publicVarWithPrivateModulePropertyTypes",
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
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2283,
                      "end": 2296
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2297,
                      "end": 2308
                    },
                    "start": 2283,
                    "end": 2308
                  },
                  "typeArguments": null,
                  "start": 2283,
                  "end": 2308
                },
                "start": 2281,
                "end": 2308
              },
              "start": 2242,
              "end": 2308
            },
            "init": null,
            "definite": false,
            "start": 2242,
            "end": 2308
          }
        ],
        "declare": false,
        "start": 2238,
        "end": 2309
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2231,
      "end": 2309
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
              "name": "publicAmbientVarWithPrivateModulePropertyTypes",
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
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2386,
                      "end": 2399
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2400,
                      "end": 2411
                    },
                    "start": 2386,
                    "end": 2411
                  },
                  "typeArguments": null,
                  "start": 2386,
                  "end": 2411
                },
                "start": 2384,
                "end": 2411
              },
              "start": 2338,
              "end": 2411
            },
            "init": null,
            "definite": false,
            "start": 2338,
            "end": 2411
          }
        ],
        "declare": true,
        "start": 2326,
        "end": 2412
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2319,
      "end": 2412
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateModulePropertyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 2433,
        "end": 2479
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
              "name": "myProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 2486,
              "end": 2496
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
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2498,
                    "end": 2511
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2512,
                    "end": 2523
                  },
                  "start": 2498,
                  "end": 2523
                },
                "typeArguments": null,
                "start": 2498,
                "end": 2523
              },
              "start": 2496,
              "end": 2523
            },
            "accessibility": null,
            "static": false,
            "start": 2486,
            "end": 2524
          }
        ],
        "start": 2480,
        "end": 2526
      },
      "declare": false,
      "start": 2423,
      "end": 2526
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPrivateModulePropertyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 2533,
        "end": 2575
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
              "name": "myPublicStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 2589,
              "end": 2611
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
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2613,
                    "end": 2626
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2627,
                    "end": 2638
                  },
                  "start": 2613,
                  "end": 2638
                },
                "typeArguments": null,
                "start": 2613,
                "end": 2638
              },
              "start": 2611,
              "end": 2638
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2582,
            "end": 2639
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 2644,
              "end": 2660
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
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2662,
                    "end": 2675
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2676,
                    "end": 2687
                  },
                  "start": 2662,
                  "end": 2687
                },
                "typeArguments": null,
                "start": 2662,
                "end": 2687
              },
              "start": 2660,
              "end": 2687
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
            "start": 2644,
            "end": 2688
          }
        ],
        "start": 2576,
        "end": 2690
      },
      "abstract": false,
      "declare": false,
      "start": 2527,
      "end": 2690
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
            "name": "privateVarWithPrivateModulePropertyTypes",
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
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2737,
                    "end": 2750
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2751,
                    "end": 2762
                  },
                  "start": 2737,
                  "end": 2762
                },
                "typeArguments": null,
                "start": 2737,
                "end": 2762
              },
              "start": 2735,
              "end": 2762
            },
            "start": 2695,
            "end": 2762
          },
          "init": null,
          "definite": false,
          "start": 2695,
          "end": 2762
        }
      ],
      "declare": false,
      "start": 2691,
      "end": 2763
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
            "name": "privateAmbientVarWithPrivateModulePropertyTypes",
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
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2825,
                    "end": 2838
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2839,
                    "end": 2850
                  },
                  "start": 2825,
                  "end": 2850
                },
                "typeArguments": null,
                "start": 2825,
                "end": 2850
              },
              "start": 2823,
              "end": 2850
            },
            "start": 2776,
            "end": 2850
          },
          "init": null,
          "definite": false,
          "start": 2776,
          "end": 2850
        }
      ],
      "declare": true,
      "start": 2764,
      "end": 2851
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 2870,
          "end": 2882
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
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 2895,
                "end": 2907
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 2908,
                "end": 2915
              },
              "abstract": false,
              "declare": false,
              "start": 2889,
              "end": 2915
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2934,
                  "end": 2945
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 2946,
                  "end": 2953
                },
                "abstract": false,
                "declare": false,
                "start": 2928,
                "end": 2953
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2921,
              "end": 2953
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivatePropertyTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2976,
                  "end": 3015
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
                        "name": "myProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3026,
                        "end": 3036
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3038,
                            "end": 3050
                          },
                          "typeArguments": null,
                          "start": 3038,
                          "end": 3050
                        },
                        "start": 3036,
                        "end": 3050
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3026,
                      "end": 3051
                    }
                  ],
                  "start": 3016,
                  "end": 3067
                },
                "declare": false,
                "start": 2966,
                "end": 3067
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 2959,
              "end": 3067
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPublicPropertyTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3090,
                  "end": 3128
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
                        "name": "myProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3139,
                        "end": 3149
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3151,
                            "end": 3162
                          },
                          "typeArguments": null,
                          "start": 3151,
                          "end": 3162
                        },
                        "start": 3149,
                        "end": 3162
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3139,
                      "end": 3163
                    }
                  ],
                  "start": 3129,
                  "end": 3169
                },
                "declare": false,
                "start": 3080,
                "end": 3169
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 3073,
              "end": 3169
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivatePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3185,
                "end": 3225
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3236,
                      "end": 3246
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3248,
                          "end": 3260
                        },
                        "typeArguments": null,
                        "start": 3248,
                        "end": 3260
                      },
                      "start": 3246,
                      "end": 3260
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3236,
                    "end": 3261
                  }
                ],
                "start": 3226,
                "end": 3267
              },
              "declare": false,
              "start": 3175,
              "end": 3267
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicPropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3283,
                "end": 3322
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3333,
                      "end": 3343
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3345,
                          "end": 3356
                        },
                        "typeArguments": null,
                        "start": 3345,
                        "end": 3356
                      },
                      "start": 3343,
                      "end": 3356
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3333,
                    "end": 3357
                  }
                ],
                "start": 3323,
                "end": 3363
              },
              "declare": false,
              "start": 3273,
              "end": 3363
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPrivatePropertyTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3382,
                  "end": 3421
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
                        "name": "myPublicStaticProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3439,
                        "end": 3461
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3463,
                            "end": 3475
                          },
                          "typeArguments": null,
                          "start": 3463,
                          "end": 3475
                        },
                        "start": 3461,
                        "end": 3475
                      },
                      "value": null,
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 3432,
                      "end": 3476
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3509,
                        "end": 3532
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3534,
                            "end": 3546
                          },
                          "typeArguments": null,
                          "start": 3534,
                          "end": 3546
                        },
                        "start": 3532,
                        "end": 3546
                      },
                      "value": null,
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 3494,
                      "end": 3547
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3556,
                        "end": 3572
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3574,
                            "end": 3586
                          },
                          "typeArguments": null,
                          "start": 3574,
                          "end": 3586
                        },
                        "start": 3572,
                        "end": 3586
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
                      "start": 3556,
                      "end": 3587
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3613,
                        "end": 3630
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3632,
                            "end": 3644
                          },
                          "typeArguments": null,
                          "start": 3632,
                          "end": 3644
                        },
                        "start": 3630,
                        "end": 3644
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
                      "start": 3605,
                      "end": 3645
                    }
                  ],
                  "start": 3422,
                  "end": 3651
                },
                "abstract": false,
                "declare": false,
                "start": 3376,
                "end": 3651
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3369,
              "end": 3651
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPublicPropertyTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3670,
                  "end": 3708
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
                        "name": "myPublicStaticProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3726,
                        "end": 3748
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3750,
                            "end": 3761
                          },
                          "typeArguments": null,
                          "start": 3750,
                          "end": 3761
                        },
                        "start": 3748,
                        "end": 3761
                      },
                      "value": null,
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 3719,
                      "end": 3762
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3786,
                        "end": 3809
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3811,
                            "end": 3822
                          },
                          "typeArguments": null,
                          "start": 3811,
                          "end": 3822
                        },
                        "start": 3809,
                        "end": 3822
                      },
                      "value": null,
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 3771,
                      "end": 3823
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3832,
                        "end": 3848
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3850,
                            "end": 3861
                          },
                          "typeArguments": null,
                          "start": 3850,
                          "end": 3861
                        },
                        "start": 3848,
                        "end": 3861
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
                      "start": 3832,
                      "end": 3862
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3879,
                        "end": 3896
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3898,
                            "end": 3909
                          },
                          "typeArguments": null,
                          "start": 3898,
                          "end": 3909
                        },
                        "start": 3896,
                        "end": 3909
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
                      "start": 3871,
                      "end": 3910
                    }
                  ],
                  "start": 3709,
                  "end": 3916
                },
                "abstract": false,
                "declare": false,
                "start": 3664,
                "end": 3916
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3657,
              "end": 3916
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPrivatePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3928,
                "end": 3968
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
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3986,
                      "end": 4008
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4010,
                          "end": 4022
                        },
                        "typeArguments": null,
                        "start": 4010,
                        "end": 4022
                      },
                      "start": 4008,
                      "end": 4022
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 3979,
                    "end": 4023
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4047,
                      "end": 4070
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4072,
                          "end": 4084
                        },
                        "typeArguments": null,
                        "start": 4072,
                        "end": 4084
                      },
                      "start": 4070,
                      "end": 4084
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 4032,
                    "end": 4085
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4094,
                      "end": 4110
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4112,
                          "end": 4124
                        },
                        "typeArguments": null,
                        "start": 4112,
                        "end": 4124
                      },
                      "start": 4110,
                      "end": 4124
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
                    "start": 4094,
                    "end": 4125
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4142,
                      "end": 4159
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4161,
                          "end": 4173
                        },
                        "typeArguments": null,
                        "start": 4161,
                        "end": 4173
                      },
                      "start": 4159,
                      "end": 4173
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
                    "start": 4134,
                    "end": 4174
                  }
                ],
                "start": 3969,
                "end": 4180
              },
              "abstract": false,
              "declare": false,
              "start": 3922,
              "end": 4180
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPublicPropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 4192,
                "end": 4231
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
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4249,
                      "end": 4271
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4273,
                          "end": 4284
                        },
                        "typeArguments": null,
                        "start": 4273,
                        "end": 4284
                      },
                      "start": 4271,
                      "end": 4284
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 4242,
                    "end": 4285
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4309,
                      "end": 4332
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4334,
                          "end": 4345
                        },
                        "typeArguments": null,
                        "start": 4334,
                        "end": 4345
                      },
                      "start": 4332,
                      "end": 4345
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 4294,
                    "end": 4346
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4355,
                      "end": 4371
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4373,
                          "end": 4384
                        },
                        "typeArguments": null,
                        "start": 4373,
                        "end": 4384
                      },
                      "start": 4371,
                      "end": 4384
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
                    "start": 4355,
                    "end": 4385
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4402,
                      "end": 4419
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4421,
                          "end": 4432
                        },
                        "typeArguments": null,
                        "start": 4421,
                        "end": 4432
                      },
                      "start": 4419,
                      "end": 4432
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
                    "start": 4394,
                    "end": 4433
                  }
                ],
                "start": 4232,
                "end": 4439
              },
              "abstract": false,
              "declare": false,
              "start": 4186,
              "end": 4439
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
                      "name": "publicVarWithPrivatePropertyTypes",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4491,
                            "end": 4503
                          },
                          "typeArguments": null,
                          "start": 4491,
                          "end": 4503
                        },
                        "start": 4489,
                        "end": 4503
                      },
                      "start": 4456,
                      "end": 4503
                    },
                    "init": null,
                    "definite": false,
                    "start": 4456,
                    "end": 4503
                  }
                ],
                "declare": false,
                "start": 4452,
                "end": 4504
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 4445,
              "end": 4504
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
                      "name": "publicVarWithPublicPropertyTypes",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4563,
                            "end": 4574
                          },
                          "typeArguments": null,
                          "start": 4563,
                          "end": 4574
                        },
                        "start": 4561,
                        "end": 4574
                      },
                      "start": 4529,
                      "end": 4574
                    },
                    "init": null,
                    "definite": false,
                    "start": 4529,
                    "end": 4574
                  }
                ],
                "declare": false,
                "start": 4525,
                "end": 4575
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 4518,
              "end": 4575
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
                    "name": "privateVarWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4620,
                          "end": 4632
                        },
                        "typeArguments": null,
                        "start": 4620,
                        "end": 4632
                      },
                      "start": 4618,
                      "end": 4632
                    },
                    "start": 4584,
                    "end": 4632
                  },
                  "init": null,
                  "definite": false,
                  "start": 4584,
                  "end": 4632
                }
              ],
              "declare": false,
              "start": 4580,
              "end": 4633
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
                    "name": "privateVarWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4677,
                          "end": 4688
                        },
                        "typeArguments": null,
                        "start": 4677,
                        "end": 4688
                      },
                      "start": 4675,
                      "end": 4688
                    },
                    "start": 4642,
                    "end": 4688
                  },
                  "init": null,
                  "definite": false,
                  "start": 4642,
                  "end": 4688
                }
              ],
              "declare": false,
              "start": 4638,
              "end": 4689
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
                      "name": "publicAmbientVarWithPrivatePropertyTypes",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4756,
                            "end": 4768
                          },
                          "typeArguments": null,
                          "start": 4756,
                          "end": 4768
                        },
                        "start": 4754,
                        "end": 4768
                      },
                      "start": 4714,
                      "end": 4768
                    },
                    "init": null,
                    "definite": false,
                    "start": 4714,
                    "end": 4768
                  }
                ],
                "declare": true,
                "start": 4702,
                "end": 4769
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4695,
              "end": 4769
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
                      "name": "publicAmbientVarWithPublicPropertyTypes",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4843,
                            "end": 4854
                          },
                          "typeArguments": null,
                          "start": 4843,
                          "end": 4854
                        },
                        "start": 4841,
                        "end": 4854
                      },
                      "start": 4802,
                      "end": 4854
                    },
                    "init": null,
                    "definite": false,
                    "start": 4802,
                    "end": 4854
                  }
                ],
                "declare": true,
                "start": 4790,
                "end": 4855
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4783,
              "end": 4855
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
                    "name": "privateAmbientVarWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4915,
                          "end": 4927
                        },
                        "typeArguments": null,
                        "start": 4915,
                        "end": 4927
                      },
                      "start": 4913,
                      "end": 4927
                    },
                    "start": 4872,
                    "end": 4927
                  },
                  "init": null,
                  "definite": false,
                  "start": 4872,
                  "end": 4927
                }
              ],
              "declare": true,
              "start": 4860,
              "end": 4928
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
                    "name": "privateAmbientVarWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4987,
                          "end": 4998
                        },
                        "typeArguments": null,
                        "start": 4987,
                        "end": 4998
                      },
                      "start": 4985,
                      "end": 4998
                    },
                    "start": 4945,
                    "end": 4998
                  },
                  "init": null,
                  "definite": false,
                  "start": 4945,
                  "end": 4998
                }
              ],
              "declare": true,
              "start": 4933,
              "end": 4999
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivateModulePropertyTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5022,
                  "end": 5067
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
                        "name": "myProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5078,
                        "end": 5088
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
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5090,
                              "end": 5103
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5104,
                              "end": 5115
                            },
                            "start": 5090,
                            "end": 5115
                          },
                          "typeArguments": null,
                          "start": 5090,
                          "end": 5115
                        },
                        "start": 5088,
                        "end": 5115
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5078,
                      "end": 5116
                    }
                  ],
                  "start": 5068,
                  "end": 5131
                },
                "declare": false,
                "start": 5012,
                "end": 5131
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 5005,
              "end": 5131
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithPrivateModulePropertyTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5149,
                  "end": 5190
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
                        "name": "myPublicStaticProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5208,
                        "end": 5230
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
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5232,
                              "end": 5245
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5246,
                              "end": 5257
                            },
                            "start": 5232,
                            "end": 5257
                          },
                          "typeArguments": null,
                          "start": 5232,
                          "end": 5257
                        },
                        "start": 5230,
                        "end": 5257
                      },
                      "value": null,
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 5201,
                      "end": 5258
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5276,
                        "end": 5292
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
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5294,
                              "end": 5307
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5308,
                              "end": 5319
                            },
                            "start": 5294,
                            "end": 5319
                          },
                          "typeArguments": null,
                          "start": 5294,
                          "end": 5319
                        },
                        "start": 5292,
                        "end": 5319
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
                      "start": 5276,
                      "end": 5320
                    }
                  ],
                  "start": 5191,
                  "end": 5335
                },
                "abstract": false,
                "declare": false,
                "start": 5143,
                "end": 5335
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 5136,
              "end": 5335
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
                      "name": "publicVarWithPrivateModulePropertyTypes",
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
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5392,
                              "end": 5405
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5406,
                              "end": 5417
                            },
                            "start": 5392,
                            "end": 5417
                          },
                          "typeArguments": null,
                          "start": 5392,
                          "end": 5417
                        },
                        "start": 5390,
                        "end": 5417
                      },
                      "start": 5351,
                      "end": 5417
                    },
                    "init": null,
                    "definite": false,
                    "start": 5351,
                    "end": 5417
                  }
                ],
                "declare": false,
                "start": 5347,
                "end": 5418
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 5340,
              "end": 5418
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
                      "name": "publicAmbientVarWithPrivateModulePropertyTypes",
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
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5499,
                              "end": 5512
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5513,
                              "end": 5524
                            },
                            "start": 5499,
                            "end": 5524
                          },
                          "typeArguments": null,
                          "start": 5499,
                          "end": 5524
                        },
                        "start": 5497,
                        "end": 5524
                      },
                      "start": 5451,
                      "end": 5524
                    },
                    "init": null,
                    "definite": false,
                    "start": 5451,
                    "end": 5524
                  }
                ],
                "declare": true,
                "start": 5439,
                "end": 5525
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 5432,
              "end": 5525
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateModulePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 5550,
                "end": 5596
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5607,
                      "end": 5617
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5619,
                            "end": 5632
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5633,
                            "end": 5644
                          },
                          "start": 5619,
                          "end": 5644
                        },
                        "typeArguments": null,
                        "start": 5619,
                        "end": 5644
                      },
                      "start": 5617,
                      "end": 5644
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 5607,
                    "end": 5645
                  }
                ],
                "start": 5597,
                "end": 5651
              },
              "declare": false,
              "start": 5540,
              "end": 5651
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithPrivateModulePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 5662,
                "end": 5704
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
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5722,
                      "end": 5744
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5746,
                            "end": 5759
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5760,
                            "end": 5771
                          },
                          "start": 5746,
                          "end": 5771
                        },
                        "typeArguments": null,
                        "start": 5746,
                        "end": 5771
                      },
                      "start": 5744,
                      "end": 5771
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 5715,
                    "end": 5772
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5781,
                      "end": 5797
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5799,
                            "end": 5812
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5813,
                            "end": 5824
                          },
                          "start": 5799,
                          "end": 5824
                        },
                        "typeArguments": null,
                        "start": 5799,
                        "end": 5824
                      },
                      "start": 5797,
                      "end": 5824
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
                    "start": 5781,
                    "end": 5825
                  }
                ],
                "start": 5705,
                "end": 5831
              },
              "abstract": false,
              "declare": false,
              "start": 5656,
              "end": 5831
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
                    "name": "privateVarWithPrivateModulePropertyTypes",
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5882,
                            "end": 5895
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5896,
                            "end": 5907
                          },
                          "start": 5882,
                          "end": 5907
                        },
                        "typeArguments": null,
                        "start": 5882,
                        "end": 5907
                      },
                      "start": 5880,
                      "end": 5907
                    },
                    "start": 5840,
                    "end": 5907
                  },
                  "init": null,
                  "definite": false,
                  "start": 5840,
                  "end": 5907
                }
              ],
              "declare": false,
              "start": 5836,
              "end": 5908
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
                    "name": "privateAmbientVarWithPrivateModulePropertyTypes",
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5974,
                            "end": 5987
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5988,
                            "end": 5999
                          },
                          "start": 5974,
                          "end": 5999
                        },
                        "typeArguments": null,
                        "start": 5974,
                        "end": 5999
                      },
                      "start": 5972,
                      "end": 5999
                    },
                    "start": 5925,
                    "end": 5999
                  },
                  "init": null,
                  "definite": false,
                  "start": 5925,
                  "end": 5999
                }
              ],
              "declare": true,
              "start": 5913,
              "end": 6000
            }
          ],
          "start": 2883,
          "end": 6002
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 2860,
        "end": 6002
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2853,
      "end": 6002
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 6014,
        "end": 6027
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
              "name": "privateClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 6040,
              "end": 6052
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 6053,
              "end": 6060
            },
            "abstract": false,
            "declare": false,
            "start": 6034,
            "end": 6060
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 6079,
                "end": 6090
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 6091,
                "end": 6098
              },
              "abstract": false,
              "declare": false,
              "start": 6073,
              "end": 6098
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6066,
            "end": 6098
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivatePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6121,
                "end": 6160
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6171,
                      "end": 6181
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6183,
                          "end": 6195
                        },
                        "typeArguments": null,
                        "start": 6183,
                        "end": 6195
                      },
                      "start": 6181,
                      "end": 6195
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 6171,
                    "end": 6196
                  }
                ],
                "start": 6161,
                "end": 6204
              },
              "declare": false,
              "start": 6111,
              "end": 6204
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 6104,
            "end": 6204
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPublicPropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6227,
                "end": 6265
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6276,
                      "end": 6286
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6288,
                          "end": 6299
                        },
                        "typeArguments": null,
                        "start": 6288,
                        "end": 6299
                      },
                      "start": 6286,
                      "end": 6299
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 6276,
                    "end": 6300
                  }
                ],
                "start": 6266,
                "end": 6306
              },
              "declare": false,
              "start": 6217,
              "end": 6306
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 6210,
            "end": 6306
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivatePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 6322,
              "end": 6362
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
                    "name": "myProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6373,
                    "end": 6383
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6385,
                        "end": 6397
                      },
                      "typeArguments": null,
                      "start": 6385,
                      "end": 6397
                    },
                    "start": 6383,
                    "end": 6397
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6373,
                  "end": 6398
                }
              ],
              "start": 6363,
              "end": 6404
            },
            "declare": false,
            "start": 6312,
            "end": 6404
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicPropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 6420,
              "end": 6459
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
                    "name": "myProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6470,
                    "end": 6480
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6482,
                        "end": 6493
                      },
                      "typeArguments": null,
                      "start": 6482,
                      "end": 6493
                    },
                    "start": 6480,
                    "end": 6493
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6470,
                  "end": 6494
                }
              ],
              "start": 6460,
              "end": 6500
            },
            "declare": false,
            "start": 6410,
            "end": 6500
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivatePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6519,
                "end": 6558
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
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6576,
                      "end": 6598
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6600,
                          "end": 6612
                        },
                        "typeArguments": null,
                        "start": 6600,
                        "end": 6612
                      },
                      "start": 6598,
                      "end": 6612
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 6569,
                    "end": 6613
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6638,
                      "end": 6661
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6663,
                          "end": 6675
                        },
                        "typeArguments": null,
                        "start": 6663,
                        "end": 6675
                      },
                      "start": 6661,
                      "end": 6675
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 6623,
                    "end": 6676
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6685,
                      "end": 6701
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6703,
                          "end": 6715
                        },
                        "typeArguments": null,
                        "start": 6703,
                        "end": 6715
                      },
                      "start": 6701,
                      "end": 6715
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
                    "start": 6685,
                    "end": 6716
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6734,
                      "end": 6751
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6753,
                          "end": 6765
                        },
                        "typeArguments": null,
                        "start": 6753,
                        "end": 6765
                      },
                      "start": 6751,
                      "end": 6765
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
                    "start": 6726,
                    "end": 6766
                  }
                ],
                "start": 6559,
                "end": 6772
              },
              "abstract": false,
              "declare": false,
              "start": 6513,
              "end": 6772
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6506,
            "end": 6772
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicPropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6791,
                "end": 6829
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
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6847,
                      "end": 6869
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6871,
                          "end": 6882
                        },
                        "typeArguments": null,
                        "start": 6871,
                        "end": 6882
                      },
                      "start": 6869,
                      "end": 6882
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 6840,
                    "end": 6883
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6907,
                      "end": 6930
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6932,
                          "end": 6943
                        },
                        "typeArguments": null,
                        "start": 6932,
                        "end": 6943
                      },
                      "start": 6930,
                      "end": 6943
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 6892,
                    "end": 6944
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6953,
                      "end": 6969
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6971,
                          "end": 6982
                        },
                        "typeArguments": null,
                        "start": 6971,
                        "end": 6982
                      },
                      "start": 6969,
                      "end": 6982
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
                    "start": 6953,
                    "end": 6983
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7000,
                      "end": 7017
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7019,
                          "end": 7030
                        },
                        "typeArguments": null,
                        "start": 7019,
                        "end": 7030
                      },
                      "start": 7017,
                      "end": 7030
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
                    "start": 6992,
                    "end": 7031
                  }
                ],
                "start": 6830,
                "end": 7037
              },
              "abstract": false,
              "declare": false,
              "start": 6785,
              "end": 7037
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6778,
            "end": 7037
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivatePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 7049,
              "end": 7089
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
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7107,
                    "end": 7129
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7131,
                        "end": 7143
                      },
                      "typeArguments": null,
                      "start": 7131,
                      "end": 7143
                    },
                    "start": 7129,
                    "end": 7143
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 7100,
                  "end": 7144
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7168,
                    "end": 7191
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7193,
                        "end": 7205
                      },
                      "typeArguments": null,
                      "start": 7193,
                      "end": 7205
                    },
                    "start": 7191,
                    "end": 7205
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 7153,
                  "end": 7206
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7215,
                    "end": 7231
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7233,
                        "end": 7245
                      },
                      "typeArguments": null,
                      "start": 7233,
                      "end": 7245
                    },
                    "start": 7231,
                    "end": 7245
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
                  "start": 7215,
                  "end": 7246
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7263,
                    "end": 7280
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7282,
                        "end": 7294
                      },
                      "typeArguments": null,
                      "start": 7282,
                      "end": 7294
                    },
                    "start": 7280,
                    "end": 7294
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
                  "start": 7255,
                  "end": 7295
                }
              ],
              "start": 7090,
              "end": 7301
            },
            "abstract": false,
            "declare": false,
            "start": 7043,
            "end": 7301
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicPropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 7313,
              "end": 7352
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
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7370,
                    "end": 7392
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7394,
                        "end": 7405
                      },
                      "typeArguments": null,
                      "start": 7394,
                      "end": 7405
                    },
                    "start": 7392,
                    "end": 7405
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 7363,
                  "end": 7406
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7430,
                    "end": 7453
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7455,
                        "end": 7466
                      },
                      "typeArguments": null,
                      "start": 7455,
                      "end": 7466
                    },
                    "start": 7453,
                    "end": 7466
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 7415,
                  "end": 7467
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7476,
                    "end": 7492
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7494,
                        "end": 7505
                      },
                      "typeArguments": null,
                      "start": 7494,
                      "end": 7505
                    },
                    "start": 7492,
                    "end": 7505
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
                  "start": 7476,
                  "end": 7506
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7523,
                    "end": 7540
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7542,
                        "end": 7553
                      },
                      "typeArguments": null,
                      "start": 7542,
                      "end": 7553
                    },
                    "start": 7540,
                    "end": 7553
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
                  "start": 7515,
                  "end": 7554
                }
              ],
              "start": 7353,
              "end": 7560
            },
            "abstract": false,
            "declare": false,
            "start": 7307,
            "end": 7560
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
                    "name": "publicVarWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7612,
                          "end": 7624
                        },
                        "typeArguments": null,
                        "start": 7612,
                        "end": 7624
                      },
                      "start": 7610,
                      "end": 7624
                    },
                    "start": 7577,
                    "end": 7624
                  },
                  "init": null,
                  "definite": false,
                  "start": 7577,
                  "end": 7624
                }
              ],
              "declare": false,
              "start": 7573,
              "end": 7625
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7566,
            "end": 7625
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
                    "name": "publicVarWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7676,
                          "end": 7687
                        },
                        "typeArguments": null,
                        "start": 7676,
                        "end": 7687
                      },
                      "start": 7674,
                      "end": 7687
                    },
                    "start": 7642,
                    "end": 7687
                  },
                  "init": null,
                  "definite": false,
                  "start": 7642,
                  "end": 7687
                }
              ],
              "declare": false,
              "start": 7638,
              "end": 7688
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7631,
            "end": 7688
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
                  "name": "privateVarWithPrivatePropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7733,
                        "end": 7745
                      },
                      "typeArguments": null,
                      "start": 7733,
                      "end": 7745
                    },
                    "start": 7731,
                    "end": 7745
                  },
                  "start": 7697,
                  "end": 7745
                },
                "init": null,
                "definite": false,
                "start": 7697,
                "end": 7745
              }
            ],
            "declare": false,
            "start": 7693,
            "end": 7746
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
                  "name": "privateVarWithPublicPropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7790,
                        "end": 7801
                      },
                      "typeArguments": null,
                      "start": 7790,
                      "end": 7801
                    },
                    "start": 7788,
                    "end": 7801
                  },
                  "start": 7755,
                  "end": 7801
                },
                "init": null,
                "definite": false,
                "start": 7755,
                "end": 7801
              }
            ],
            "declare": false,
            "start": 7751,
            "end": 7802
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
                    "name": "publicAmbientVarWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7869,
                          "end": 7881
                        },
                        "typeArguments": null,
                        "start": 7869,
                        "end": 7881
                      },
                      "start": 7867,
                      "end": 7881
                    },
                    "start": 7827,
                    "end": 7881
                  },
                  "init": null,
                  "definite": false,
                  "start": 7827,
                  "end": 7881
                }
              ],
              "declare": true,
              "start": 7815,
              "end": 7882
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 7808,
            "end": 7882
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
                    "name": "publicAmbientVarWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7948,
                          "end": 7959
                        },
                        "typeArguments": null,
                        "start": 7948,
                        "end": 7959
                      },
                      "start": 7946,
                      "end": 7959
                    },
                    "start": 7907,
                    "end": 7959
                  },
                  "init": null,
                  "definite": false,
                  "start": 7907,
                  "end": 7959
                }
              ],
              "declare": true,
              "start": 7895,
              "end": 7960
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 7888,
            "end": 7960
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
                  "name": "privateAmbientVarWithPrivatePropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8020,
                        "end": 8032
                      },
                      "typeArguments": null,
                      "start": 8020,
                      "end": 8032
                    },
                    "start": 8018,
                    "end": 8032
                  },
                  "start": 7977,
                  "end": 8032
                },
                "init": null,
                "definite": false,
                "start": 7977,
                "end": 8032
              }
            ],
            "declare": true,
            "start": 7965,
            "end": 8033
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
                  "name": "privateAmbientVarWithPublicPropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8092,
                        "end": 8103
                      },
                      "typeArguments": null,
                      "start": 8092,
                      "end": 8103
                    },
                    "start": 8090,
                    "end": 8103
                  },
                  "start": 8050,
                  "end": 8103
                },
                "init": null,
                "definite": false,
                "start": 8050,
                "end": 8103
              }
            ],
            "declare": true,
            "start": 8038,
            "end": 8104
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivateModulePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 8127,
                "end": 8172
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8183,
                      "end": 8193
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8195,
                            "end": 8208
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8209,
                            "end": 8220
                          },
                          "start": 8195,
                          "end": 8220
                        },
                        "typeArguments": null,
                        "start": 8195,
                        "end": 8220
                      },
                      "start": 8193,
                      "end": 8220
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 8183,
                    "end": 8221
                  }
                ],
                "start": 8173,
                "end": 8228
              },
              "declare": false,
              "start": 8117,
              "end": 8228
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 8110,
            "end": 8228
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateModulePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 8246,
                "end": 8287
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
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8305,
                      "end": 8327
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8329,
                            "end": 8342
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8343,
                            "end": 8354
                          },
                          "start": 8329,
                          "end": 8354
                        },
                        "typeArguments": null,
                        "start": 8329,
                        "end": 8354
                      },
                      "start": 8327,
                      "end": 8354
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 8298,
                    "end": 8355
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8365,
                      "end": 8381
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8383,
                            "end": 8396
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8397,
                            "end": 8408
                          },
                          "start": 8383,
                          "end": 8408
                        },
                        "typeArguments": null,
                        "start": 8383,
                        "end": 8408
                      },
                      "start": 8381,
                      "end": 8408
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
                    "start": 8365,
                    "end": 8409
                  }
                ],
                "start": 8288,
                "end": 8416
              },
              "abstract": false,
              "declare": false,
              "start": 8240,
              "end": 8416
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8233,
            "end": 8416
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
                    "name": "publicVarWithPrivateModulePropertyTypes",
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8473,
                            "end": 8486
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8487,
                            "end": 8498
                          },
                          "start": 8473,
                          "end": 8498
                        },
                        "typeArguments": null,
                        "start": 8473,
                        "end": 8498
                      },
                      "start": 8471,
                      "end": 8498
                    },
                    "start": 8432,
                    "end": 8498
                  },
                  "init": null,
                  "definite": false,
                  "start": 8432,
                  "end": 8498
                }
              ],
              "declare": false,
              "start": 8428,
              "end": 8499
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8421,
            "end": 8499
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
                    "name": "publicAmbientVarWithPrivateModulePropertyTypes",
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8572,
                            "end": 8585
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8586,
                            "end": 8597
                          },
                          "start": 8572,
                          "end": 8597
                        },
                        "typeArguments": null,
                        "start": 8572,
                        "end": 8597
                      },
                      "start": 8570,
                      "end": 8597
                    },
                    "start": 8524,
                    "end": 8597
                  },
                  "init": null,
                  "definite": false,
                  "start": 8524,
                  "end": 8597
                }
              ],
              "declare": true,
              "start": 8512,
              "end": 8598
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 8505,
            "end": 8598
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateModulePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 8614,
              "end": 8660
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
                    "name": "myProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8671,
                    "end": 8681
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
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8683,
                          "end": 8696
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8697,
                          "end": 8708
                        },
                        "start": 8683,
                        "end": 8708
                      },
                      "typeArguments": null,
                      "start": 8683,
                      "end": 8708
                    },
                    "start": 8681,
                    "end": 8708
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 8671,
                  "end": 8709
                }
              ],
              "start": 8661,
              "end": 8715
            },
            "declare": false,
            "start": 8604,
            "end": 8715
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateModulePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 8726,
              "end": 8768
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
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8786,
                    "end": 8808
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
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8810,
                          "end": 8823
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8824,
                          "end": 8835
                        },
                        "start": 8810,
                        "end": 8835
                      },
                      "typeArguments": null,
                      "start": 8810,
                      "end": 8835
                    },
                    "start": 8808,
                    "end": 8835
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 8779,
                  "end": 8836
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8845,
                    "end": 8861
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
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8863,
                          "end": 8876
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8877,
                          "end": 8888
                        },
                        "start": 8863,
                        "end": 8888
                      },
                      "typeArguments": null,
                      "start": 8863,
                      "end": 8888
                    },
                    "start": 8861,
                    "end": 8888
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
                  "start": 8845,
                  "end": 8889
                }
              ],
              "start": 8769,
              "end": 8895
            },
            "abstract": false,
            "declare": false,
            "start": 8720,
            "end": 8895
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
                  "name": "privateVarWithPrivateModulePropertyTypes",
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
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8946,
                          "end": 8959
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8960,
                          "end": 8971
                        },
                        "start": 8946,
                        "end": 8971
                      },
                      "typeArguments": null,
                      "start": 8946,
                      "end": 8971
                    },
                    "start": 8944,
                    "end": 8971
                  },
                  "start": 8904,
                  "end": 8971
                },
                "init": null,
                "definite": false,
                "start": 8904,
                "end": 8971
              }
            ],
            "declare": false,
            "start": 8900,
            "end": 8972
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
                  "name": "privateAmbientVarWithPrivateModulePropertyTypes",
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
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9038,
                          "end": 9051
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9052,
                          "end": 9063
                        },
                        "start": 9038,
                        "end": 9063
                      },
                      "typeArguments": null,
                      "start": 9038,
                      "end": 9063
                    },
                    "start": 9036,
                    "end": 9063
                  },
                  "start": 8989,
                  "end": 9063
                },
                "init": null,
                "definite": false,
                "start": 8989,
                "end": 9063
              }
            ],
            "declare": true,
            "start": 8977,
            "end": 9064
          }
        ],
        "start": 6028,
        "end": 9066
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 6004,
      "end": 9066
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 9067
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 24,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 37,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 61,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivatePropertyTypes",
    "start": 71,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 117,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 129,
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
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 156,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 163,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicPropertyTypes",
    "start": 173,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 218,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 230,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 246,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivatePropertyTypes",
    "start": 256,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 303,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 315,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 332,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicPropertyTypes",
    "start": 342,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 388,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 400,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 416,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 423,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPrivatePropertyTypes",
    "start": 429,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 475,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 482,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 506,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 533,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 541,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 548,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 573,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 591,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 609,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 636,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 644,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 663,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 680,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 687,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicPropertyTypes",
    "start": 693,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 738,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 745,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 769,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 786,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 794,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 801,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 826,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 843,
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
    "value": "publicClass",
    "start": 861,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 878,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 886,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 905,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 921,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPrivatePropertyTypes",
    "start": 927,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 974,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 981,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1005,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1023,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 1038,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1063,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 1081,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1099,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1117,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 1125,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1144,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1161,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPublicPropertyTypes",
    "start": 1167,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1213,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 1220,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1244,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1261,
    "end": 1268
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1269,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 1276,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1301,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 1318,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1336,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1353,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 1361,
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
    "value": "publicClass",
    "start": 1380,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1396,
    "end": 1402
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1403,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPrivatePropertyTypes",
    "start": 1407,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1442,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1465,
    "end": 1471
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1472,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPublicPropertyTypes",
    "start": 1476,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1510,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1523,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPrivatePropertyTypes",
    "start": 1527,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1563,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1577,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPublicPropertyTypes",
    "start": 1581,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1616,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1630,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1637,
    "end": 1644
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1645,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPrivatePropertyTypes",
    "start": 1649,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1691,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1714,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1721,
    "end": 1728
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1729,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPublicPropertyTypes",
    "start": 1733,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1774,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1787,
    "end": 1794
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1795,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPrivatePropertyTypes",
    "start": 1799,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1842,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1856,
    "end": 1863
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1864,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPublicPropertyTypes",
    "start": 1868,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1910,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1924,
    "end": 1930
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1931,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateModulePropertyTypes",
    "start": 1941,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 1993,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2005,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2019,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2043,
    "end": 2049
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2050,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPrivateModulePropertyTypes",
    "start": 2056,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2104,
    "end": 2110
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 2111,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2135,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2149,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 2175,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2193,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2207,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2231,
    "end": 2237
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2238,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPrivateModulePropertyTypes",
    "start": 2242,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2283,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2297,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2319,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2326,
    "end": 2333
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2334,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPrivateModulePropertyTypes",
    "start": 2338,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2386,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2400,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2423,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateModulePropertyTypes",
    "start": 2433,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 2486,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2498,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2512,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2527,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPrivateModulePropertyTypes",
    "start": 2533,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2582,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 2589,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2613,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2627,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 2644,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2662,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2676,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2691,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPrivateModulePropertyTypes",
    "start": 2695,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2737,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2751,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2764,
    "end": 2771
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2772,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPrivateModulePropertyTypes",
    "start": 2776,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2825,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2839,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2853,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2860,
    "end": 2869
  },
  {
    "type": "Identifier",
    "value": "publicModule",
    "start": 2870,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2889,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2895,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2921,
    "end": 2927
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2928,
    "end": 2933
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2934,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2959,
    "end": 2965
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2966,
    "end": 2975
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivatePropertyTypes",
    "start": 2976,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 3026,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 3038,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3073,
    "end": 3079
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3080,
    "end": 3089
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicPropertyTypes",
    "start": 3090,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 3139,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3151,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3175,
    "end": 3184
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivatePropertyTypes",
    "start": 3185,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 3236,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 3248,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3273,
    "end": 3282
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicPropertyTypes",
    "start": 3283,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 3333,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3345,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3369,
    "end": 3375
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3376,
    "end": 3381
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPrivatePropertyTypes",
    "start": 3382,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3432,
    "end": 3438
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 3439,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 3463,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3494,
    "end": 3501
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3502,
    "end": 3508
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 3509,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 3534,
    "end": 3546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 3556,
    "end": 3572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 3574,
    "end": 3586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3605,
    "end": 3612
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 3613,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3630,
    "end": 3631
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 3632,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3657,
    "end": 3663
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3664,
    "end": 3669
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicPropertyTypes",
    "start": 3670,
    "end": 3708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3719,
    "end": 3725
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 3726,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3750,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3771,
    "end": 3778
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3779,
    "end": 3785
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 3786,
    "end": 3809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3811,
    "end": 3822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 3832,
    "end": 3848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3848,
    "end": 3849
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3850,
    "end": 3861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3871,
    "end": 3878
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 3879,
    "end": 3896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3896,
    "end": 3897
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3898,
    "end": 3909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3922,
    "end": 3927
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPrivatePropertyTypes",
    "start": 3928,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3969,
    "end": 3970
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3979,
    "end": 3985
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 3986,
    "end": 4008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4010,
    "end": 4022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4032,
    "end": 4039
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4040,
    "end": 4046
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 4047,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4072,
    "end": 4084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4084,
    "end": 4085
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 4094,
    "end": 4110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4112,
    "end": 4124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4134,
    "end": 4141
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 4142,
    "end": 4159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4161,
    "end": 4173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4173,
    "end": 4174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4179,
    "end": 4180
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4186,
    "end": 4191
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPublicPropertyTypes",
    "start": 4192,
    "end": 4231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4232,
    "end": 4233
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4242,
    "end": 4248
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 4249,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4271,
    "end": 4272
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4273,
    "end": 4284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4284,
    "end": 4285
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4294,
    "end": 4301
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4302,
    "end": 4308
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 4309,
    "end": 4332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4332,
    "end": 4333
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4334,
    "end": 4345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4345,
    "end": 4346
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 4355,
    "end": 4371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4373,
    "end": 4384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4384,
    "end": 4385
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4394,
    "end": 4401
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 4402,
    "end": 4419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4421,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4438,
    "end": 4439
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4445,
    "end": 4451
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4452,
    "end": 4455
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPrivatePropertyTypes",
    "start": 4456,
    "end": 4489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4491,
    "end": 4503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4503,
    "end": 4504
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4518,
    "end": 4524
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4525,
    "end": 4528
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPublicPropertyTypes",
    "start": 4529,
    "end": 4561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4561,
    "end": 4562
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4563,
    "end": 4574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4574,
    "end": 4575
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4580,
    "end": 4583
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPrivatePropertyTypes",
    "start": 4584,
    "end": 4618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4618,
    "end": 4619
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4620,
    "end": 4632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4632,
    "end": 4633
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4638,
    "end": 4641
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPublicPropertyTypes",
    "start": 4642,
    "end": 4675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4675,
    "end": 4676
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4677,
    "end": 4688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4688,
    "end": 4689
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4695,
    "end": 4701
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4702,
    "end": 4709
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4710,
    "end": 4713
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPrivatePropertyTypes",
    "start": 4714,
    "end": 4754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4754,
    "end": 4755
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4756,
    "end": 4768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4768,
    "end": 4769
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4783,
    "end": 4789
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4790,
    "end": 4797
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4798,
    "end": 4801
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPublicPropertyTypes",
    "start": 4802,
    "end": 4841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4841,
    "end": 4842
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4843,
    "end": 4854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4854,
    "end": 4855
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4860,
    "end": 4867
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4868,
    "end": 4871
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPrivatePropertyTypes",
    "start": 4872,
    "end": 4913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4915,
    "end": 4927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4927,
    "end": 4928
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4933,
    "end": 4940
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4941,
    "end": 4944
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPublicPropertyTypes",
    "start": 4945,
    "end": 4985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4985,
    "end": 4986
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4987,
    "end": 4998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4998,
    "end": 4999
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5005,
    "end": 5011
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5012,
    "end": 5021
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateModulePropertyTypes",
    "start": 5022,
    "end": 5067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5068,
    "end": 5069
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 5078,
    "end": 5088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5088,
    "end": 5089
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 5090,
    "end": 5103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5103,
    "end": 5104
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5104,
    "end": 5115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5115,
    "end": 5116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5130,
    "end": 5131
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5136,
    "end": 5142
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5143,
    "end": 5148
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPrivateModulePropertyTypes",
    "start": 5149,
    "end": 5190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5191,
    "end": 5192
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5201,
    "end": 5207
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 5208,
    "end": 5230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5230,
    "end": 5231
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 5232,
    "end": 5245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5245,
    "end": 5246
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5246,
    "end": 5257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5257,
    "end": 5258
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 5276,
    "end": 5292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 5294,
    "end": 5307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5307,
    "end": 5308
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5308,
    "end": 5319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5319,
    "end": 5320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5334,
    "end": 5335
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5340,
    "end": 5346
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5347,
    "end": 5350
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPrivateModulePropertyTypes",
    "start": 5351,
    "end": 5390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5390,
    "end": 5391
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 5392,
    "end": 5405
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5405,
    "end": 5406
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5406,
    "end": 5417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5417,
    "end": 5418
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5432,
    "end": 5438
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5439,
    "end": 5446
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5447,
    "end": 5450
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPrivateModulePropertyTypes",
    "start": 5451,
    "end": 5497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5497,
    "end": 5498
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 5499,
    "end": 5512
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5512,
    "end": 5513
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5513,
    "end": 5524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5524,
    "end": 5525
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5540,
    "end": 5549
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateModulePropertyTypes",
    "start": 5550,
    "end": 5596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5597,
    "end": 5598
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 5607,
    "end": 5617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5617,
    "end": 5618
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 5619,
    "end": 5632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5632,
    "end": 5633
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5633,
    "end": 5644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5644,
    "end": 5645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5650,
    "end": 5651
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5656,
    "end": 5661
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPrivateModulePropertyTypes",
    "start": 5662,
    "end": 5704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5705,
    "end": 5706
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5715,
    "end": 5721
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 5722,
    "end": 5744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5744,
    "end": 5745
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 5746,
    "end": 5759
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5759,
    "end": 5760
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5760,
    "end": 5771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5771,
    "end": 5772
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 5781,
    "end": 5797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5797,
    "end": 5798
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 5799,
    "end": 5812
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5812,
    "end": 5813
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5813,
    "end": 5824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5824,
    "end": 5825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5830,
    "end": 5831
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5836,
    "end": 5839
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPrivateModulePropertyTypes",
    "start": 5840,
    "end": 5880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5880,
    "end": 5881
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 5882,
    "end": 5895
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5895,
    "end": 5896
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5896,
    "end": 5907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5907,
    "end": 5908
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5913,
    "end": 5920
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5921,
    "end": 5924
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPrivateModulePropertyTypes",
    "start": 5925,
    "end": 5972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5972,
    "end": 5973
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 5974,
    "end": 5987
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5987,
    "end": 5988
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5988,
    "end": 5999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5999,
    "end": 6000
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6001,
    "end": 6002
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 6004,
    "end": 6013
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 6014,
    "end": 6027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6028,
    "end": 6029
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6034,
    "end": 6039
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6040,
    "end": 6052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6053,
    "end": 6054
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6059,
    "end": 6060
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6066,
    "end": 6072
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6073,
    "end": 6078
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6079,
    "end": 6090
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6091,
    "end": 6092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6097,
    "end": 6098
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6104,
    "end": 6110
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6111,
    "end": 6120
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivatePropertyTypes",
    "start": 6121,
    "end": 6160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6161,
    "end": 6162
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 6171,
    "end": 6181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6181,
    "end": 6182
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6183,
    "end": 6195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6195,
    "end": 6196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6203,
    "end": 6204
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6210,
    "end": 6216
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6217,
    "end": 6226
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicPropertyTypes",
    "start": 6227,
    "end": 6265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6266,
    "end": 6267
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 6276,
    "end": 6286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6286,
    "end": 6287
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6288,
    "end": 6299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6299,
    "end": 6300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6305,
    "end": 6306
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6312,
    "end": 6321
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivatePropertyTypes",
    "start": 6322,
    "end": 6362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6363,
    "end": 6364
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 6373,
    "end": 6383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6383,
    "end": 6384
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6385,
    "end": 6397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6397,
    "end": 6398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6403,
    "end": 6404
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6410,
    "end": 6419
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicPropertyTypes",
    "start": 6420,
    "end": 6459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6460,
    "end": 6461
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 6470,
    "end": 6480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6480,
    "end": 6481
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6482,
    "end": 6493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6493,
    "end": 6494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6499,
    "end": 6500
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6506,
    "end": 6512
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6513,
    "end": 6518
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPrivatePropertyTypes",
    "start": 6519,
    "end": 6558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6559,
    "end": 6560
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6569,
    "end": 6575
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 6576,
    "end": 6598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6598,
    "end": 6599
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6600,
    "end": 6612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6612,
    "end": 6613
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 6623,
    "end": 6630
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6631,
    "end": 6637
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 6638,
    "end": 6661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6661,
    "end": 6662
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6663,
    "end": 6675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6675,
    "end": 6676
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 6685,
    "end": 6701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6701,
    "end": 6702
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6703,
    "end": 6715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6715,
    "end": 6716
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 6726,
    "end": 6733
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 6734,
    "end": 6751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6751,
    "end": 6752
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6753,
    "end": 6765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6765,
    "end": 6766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6771,
    "end": 6772
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6778,
    "end": 6784
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6785,
    "end": 6790
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicPropertyTypes",
    "start": 6791,
    "end": 6829
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6830,
    "end": 6831
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6840,
    "end": 6846
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 6847,
    "end": 6869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6869,
    "end": 6870
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6871,
    "end": 6882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6882,
    "end": 6883
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 6892,
    "end": 6899
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6900,
    "end": 6906
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 6907,
    "end": 6930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6930,
    "end": 6931
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6932,
    "end": 6943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6943,
    "end": 6944
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 6953,
    "end": 6969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6969,
    "end": 6970
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6971,
    "end": 6982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6982,
    "end": 6983
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 6992,
    "end": 6999
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 7000,
    "end": 7017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7017,
    "end": 7018
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7019,
    "end": 7030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7030,
    "end": 7031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7036,
    "end": 7037
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7043,
    "end": 7048
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPrivatePropertyTypes",
    "start": 7049,
    "end": 7089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7090,
    "end": 7091
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7100,
    "end": 7106
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 7107,
    "end": 7129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7129,
    "end": 7130
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 7131,
    "end": 7143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7143,
    "end": 7144
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7153,
    "end": 7160
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7161,
    "end": 7167
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 7168,
    "end": 7191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7191,
    "end": 7192
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 7193,
    "end": 7205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7205,
    "end": 7206
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 7215,
    "end": 7231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7231,
    "end": 7232
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 7233,
    "end": 7245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7245,
    "end": 7246
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7255,
    "end": 7262
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 7263,
    "end": 7280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7280,
    "end": 7281
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 7282,
    "end": 7294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7294,
    "end": 7295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7300,
    "end": 7301
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7307,
    "end": 7312
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPublicPropertyTypes",
    "start": 7313,
    "end": 7352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7353,
    "end": 7354
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7363,
    "end": 7369
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 7370,
    "end": 7392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7392,
    "end": 7393
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7394,
    "end": 7405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7405,
    "end": 7406
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7415,
    "end": 7422
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7423,
    "end": 7429
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 7430,
    "end": 7453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7453,
    "end": 7454
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7455,
    "end": 7466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7466,
    "end": 7467
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 7476,
    "end": 7492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7492,
    "end": 7493
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7494,
    "end": 7505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7505,
    "end": 7506
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7515,
    "end": 7522
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 7523,
    "end": 7540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7540,
    "end": 7541
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7542,
    "end": 7553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7553,
    "end": 7554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7559,
    "end": 7560
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7566,
    "end": 7572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7573,
    "end": 7576
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPrivatePropertyTypes",
    "start": 7577,
    "end": 7610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7610,
    "end": 7611
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 7612,
    "end": 7624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7624,
    "end": 7625
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7631,
    "end": 7637
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7638,
    "end": 7641
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPublicPropertyTypes",
    "start": 7642,
    "end": 7674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7674,
    "end": 7675
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7676,
    "end": 7687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7687,
    "end": 7688
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7693,
    "end": 7696
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPrivatePropertyTypes",
    "start": 7697,
    "end": 7731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7731,
    "end": 7732
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 7733,
    "end": 7745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7745,
    "end": 7746
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7751,
    "end": 7754
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPublicPropertyTypes",
    "start": 7755,
    "end": 7788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7788,
    "end": 7789
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7790,
    "end": 7801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7801,
    "end": 7802
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7808,
    "end": 7814
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7815,
    "end": 7822
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7823,
    "end": 7826
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPrivatePropertyTypes",
    "start": 7827,
    "end": 7867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7867,
    "end": 7868
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 7869,
    "end": 7881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7881,
    "end": 7882
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7888,
    "end": 7894
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7895,
    "end": 7902
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7903,
    "end": 7906
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPublicPropertyTypes",
    "start": 7907,
    "end": 7946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7946,
    "end": 7947
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7948,
    "end": 7959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7959,
    "end": 7960
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7965,
    "end": 7972
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7973,
    "end": 7976
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPrivatePropertyTypes",
    "start": 7977,
    "end": 8018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8018,
    "end": 8019
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 8020,
    "end": 8032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8032,
    "end": 8033
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 8038,
    "end": 8045
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8046,
    "end": 8049
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPublicPropertyTypes",
    "start": 8050,
    "end": 8090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8090,
    "end": 8091
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8092,
    "end": 8103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8103,
    "end": 8104
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8110,
    "end": 8116
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8117,
    "end": 8126
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateModulePropertyTypes",
    "start": 8127,
    "end": 8172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8173,
    "end": 8174
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 8183,
    "end": 8193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8193,
    "end": 8194
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8195,
    "end": 8208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8208,
    "end": 8209
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8209,
    "end": 8220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8220,
    "end": 8221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8227,
    "end": 8228
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8233,
    "end": 8239
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8240,
    "end": 8245
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPrivateModulePropertyTypes",
    "start": 8246,
    "end": 8287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8288,
    "end": 8289
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8298,
    "end": 8304
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 8305,
    "end": 8327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8327,
    "end": 8328
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8329,
    "end": 8342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8342,
    "end": 8343
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8343,
    "end": 8354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8354,
    "end": 8355
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 8365,
    "end": 8381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8381,
    "end": 8382
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8383,
    "end": 8396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8396,
    "end": 8397
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8397,
    "end": 8408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8408,
    "end": 8409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8415,
    "end": 8416
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8421,
    "end": 8427
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8428,
    "end": 8431
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPrivateModulePropertyTypes",
    "start": 8432,
    "end": 8471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8471,
    "end": 8472
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8473,
    "end": 8486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8486,
    "end": 8487
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8487,
    "end": 8498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8498,
    "end": 8499
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8505,
    "end": 8511
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 8512,
    "end": 8519
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8520,
    "end": 8523
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPrivateModulePropertyTypes",
    "start": 8524,
    "end": 8570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8570,
    "end": 8571
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8572,
    "end": 8585
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8585,
    "end": 8586
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8586,
    "end": 8597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8597,
    "end": 8598
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8604,
    "end": 8613
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateModulePropertyTypes",
    "start": 8614,
    "end": 8660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8661,
    "end": 8662
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 8671,
    "end": 8681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8681,
    "end": 8682
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8683,
    "end": 8696
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8696,
    "end": 8697
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8697,
    "end": 8708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8708,
    "end": 8709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8714,
    "end": 8715
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8720,
    "end": 8725
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPrivateModulePropertyTypes",
    "start": 8726,
    "end": 8768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8769,
    "end": 8770
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8779,
    "end": 8785
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 8786,
    "end": 8808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8808,
    "end": 8809
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8810,
    "end": 8823
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8823,
    "end": 8824
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8824,
    "end": 8835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8835,
    "end": 8836
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 8845,
    "end": 8861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8861,
    "end": 8862
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8863,
    "end": 8876
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8876,
    "end": 8877
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8877,
    "end": 8888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8888,
    "end": 8889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8894,
    "end": 8895
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8900,
    "end": 8903
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPrivateModulePropertyTypes",
    "start": 8904,
    "end": 8944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8944,
    "end": 8945
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8946,
    "end": 8959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8959,
    "end": 8960
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8960,
    "end": 8971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8971,
    "end": 8972
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 8977,
    "end": 8984
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8985,
    "end": 8988
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPrivateModulePropertyTypes",
    "start": 8989,
    "end": 9036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9036,
    "end": 9037
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 9038,
    "end": 9051
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9051,
    "end": 9052
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 9052,
    "end": 9063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9063,
    "end": 9064
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9065,
    "end": 9066
  }
]
```
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
        "name": "publicClassInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 25
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 26,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicInterfaceWithPublicPropertyTypesInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 86
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
              "name": "myProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 103
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 124
                },
                "typeArguments": null,
                "start": 105,
                "end": 124
              },
              "start": 103,
              "end": 124
            },
            "accessibility": null,
            "static": false,
            "start": 93,
            "end": 125
          }
        ],
        "start": 87,
        "end": 127
      },
      "declare": false,
      "start": 30,
      "end": 127
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassWithWithPublicPropertyTypesInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 180
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
              "name": "myPublicStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 216
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 237
                },
                "typeArguments": null,
                "start": 218,
                "end": 237
              },
              "start": 216,
              "end": 237
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 187,
            "end": 238
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 281
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 283,
                  "end": 302
                },
                "typeArguments": null,
                "start": 283,
                "end": 302
              },
              "start": 281,
              "end": 302
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 243,
            "end": 303
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 324
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 345
                },
                "typeArguments": null,
                "start": 326,
                "end": 345
              },
              "start": 324,
              "end": 345
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
            "start": 308,
            "end": 346
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 376
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 397
                },
                "typeArguments": null,
                "start": 378,
                "end": 397
              },
              "start": 376,
              "end": 397
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
            "start": 351,
            "end": 398
          }
        ],
        "start": 181,
        "end": 400
      },
      "abstract": false,
      "declare": false,
      "start": 128,
      "end": 400
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
            "name": "publicVarWithPublicPropertyTypesInGlobal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 466
                },
                "typeArguments": null,
                "start": 447,
                "end": 466
              },
              "start": 445,
              "end": 466
            },
            "start": 405,
            "end": 466
          },
          "init": null,
          "definite": false,
          "start": 405,
          "end": 466
        }
      ],
      "declare": false,
      "start": 401,
      "end": 467
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
            "name": "publicAmbientVarWithPublicPropertyTypesInGlobal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 548
                },
                "typeArguments": null,
                "start": 529,
                "end": 548
              },
              "start": 527,
              "end": 548
            },
            "start": 480,
            "end": 548
          },
          "init": null,
          "definite": false,
          "start": 480,
          "end": 548
        }
      ],
      "declare": true,
      "start": 468,
      "end": 549
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicModuleInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 561,
        "end": 581
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
              "name": "privateClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 606
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 607,
              "end": 614
            },
            "abstract": false,
            "declare": false,
            "start": 588,
            "end": 614
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 644
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 645,
                "end": 652
              },
              "abstract": false,
              "declare": false,
              "start": 627,
              "end": 652
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 620,
            "end": 652
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 668,
              "end": 681
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
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 698,
                    "end": 710
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 711,
                    "end": 722
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 692,
                  "end": 722
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 745,
                      "end": 756
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 757,
                      "end": 768
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 739,
                    "end": 768
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 732,
                  "end": 768
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceWithPrivatePropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 795,
                      "end": 834
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
                            "name": "myProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 849,
                            "end": 859
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 861,
                                "end": 873
                              },
                              "typeArguments": null,
                              "start": 861,
                              "end": 873
                            },
                            "start": 859,
                            "end": 873
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 849,
                          "end": 874
                        }
                      ],
                      "start": 835,
                      "end": 884
                    },
                    "declare": false,
                    "start": 785,
                    "end": 884
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 778,
                  "end": 884
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceWithPublicPropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 911,
                      "end": 949
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
                            "name": "myProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 964,
                            "end": 974
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 976,
                                "end": 987
                              },
                              "typeArguments": null,
                              "start": 976,
                              "end": 987
                            },
                            "start": 974,
                            "end": 987
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 964,
                          "end": 988
                        }
                      ],
                      "start": 950,
                      "end": 998
                    },
                    "declare": false,
                    "start": 901,
                    "end": 998
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 894,
                  "end": 998
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1018,
                    "end": 1058
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
                          "name": "myProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1073,
                          "end": 1083
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1085,
                              "end": 1097
                            },
                            "typeArguments": null,
                            "start": 1085,
                            "end": 1097
                          },
                          "start": 1083,
                          "end": 1097
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1073,
                        "end": 1098
                      }
                    ],
                    "start": 1059,
                    "end": 1108
                  },
                  "declare": false,
                  "start": 1008,
                  "end": 1108
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1128,
                    "end": 1167
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
                          "name": "myProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1182,
                          "end": 1192
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1194,
                              "end": 1205
                            },
                            "typeArguments": null,
                            "start": 1194,
                            "end": 1205
                          },
                          "start": 1192,
                          "end": 1205
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1182,
                        "end": 1206
                      }
                    ],
                    "start": 1168,
                    "end": 1216
                  },
                  "declare": false,
                  "start": 1118,
                  "end": 1216
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithWithPrivatePropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1239,
                      "end": 1278
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
                            "name": "myPublicStaticProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1300,
                            "end": 1322
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1324,
                                "end": 1336
                              },
                              "typeArguments": null,
                              "start": 1324,
                              "end": 1336
                            },
                            "start": 1322,
                            "end": 1336
                          },
                          "value": null,
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 1293,
                          "end": 1337
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1365,
                            "end": 1388
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1390,
                                "end": 1402
                              },
                              "typeArguments": null,
                              "start": 1390,
                              "end": 1402
                            },
                            "start": 1388,
                            "end": 1402
                          },
                          "value": null,
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": "private",
                          "start": 1350,
                          "end": 1403
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1416,
                            "end": 1432
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1434,
                                "end": 1446
                              },
                              "typeArguments": null,
                              "start": 1434,
                              "end": 1446
                            },
                            "start": 1432,
                            "end": 1446
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
                          "start": 1416,
                          "end": 1447
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1468,
                            "end": 1485
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1487,
                                "end": 1499
                              },
                              "typeArguments": null,
                              "start": 1487,
                              "end": 1499
                            },
                            "start": 1485,
                            "end": 1499
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
                          "start": 1460,
                          "end": 1500
                        }
                      ],
                      "start": 1279,
                      "end": 1510
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1233,
                    "end": 1510
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1226,
                  "end": 1510
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithWithPublicPropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1533,
                      "end": 1571
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
                            "name": "myPublicStaticProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1593,
                            "end": 1615
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1617,
                                "end": 1628
                              },
                              "typeArguments": null,
                              "start": 1617,
                              "end": 1628
                            },
                            "start": 1615,
                            "end": 1628
                          },
                          "value": null,
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 1586,
                          "end": 1629
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1657,
                            "end": 1680
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1682,
                                "end": 1693
                              },
                              "typeArguments": null,
                              "start": 1682,
                              "end": 1693
                            },
                            "start": 1680,
                            "end": 1693
                          },
                          "value": null,
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": "private",
                          "start": 1642,
                          "end": 1694
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1707,
                            "end": 1723
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1725,
                                "end": 1736
                              },
                              "typeArguments": null,
                              "start": 1725,
                              "end": 1736
                            },
                            "start": 1723,
                            "end": 1736
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
                          "start": 1707,
                          "end": 1737
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1758,
                            "end": 1775
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1777,
                                "end": 1788
                              },
                              "typeArguments": null,
                              "start": 1777,
                              "end": 1788
                            },
                            "start": 1775,
                            "end": 1788
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
                          "start": 1750,
                          "end": 1789
                        }
                      ],
                      "start": 1572,
                      "end": 1799
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1527,
                    "end": 1799
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1520,
                  "end": 1799
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1815,
                    "end": 1855
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
                          "name": "myPublicStaticProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1877,
                          "end": 1899
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1901,
                              "end": 1913
                            },
                            "typeArguments": null,
                            "start": 1901,
                            "end": 1913
                          },
                          "start": 1899,
                          "end": 1913
                        },
                        "value": null,
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 1870,
                        "end": 1914
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1942,
                          "end": 1965
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1967,
                              "end": 1979
                            },
                            "typeArguments": null,
                            "start": 1967,
                            "end": 1979
                          },
                          "start": 1965,
                          "end": 1979
                        },
                        "value": null,
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "private",
                        "start": 1927,
                        "end": 1980
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1993,
                          "end": 2009
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2011,
                              "end": 2023
                            },
                            "typeArguments": null,
                            "start": 2011,
                            "end": 2023
                          },
                          "start": 2009,
                          "end": 2023
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
                        "start": 1993,
                        "end": 2024
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2045,
                          "end": 2062
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2064,
                              "end": 2076
                            },
                            "typeArguments": null,
                            "start": 2064,
                            "end": 2076
                          },
                          "start": 2062,
                          "end": 2076
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
                        "start": 2037,
                        "end": 2077
                      }
                    ],
                    "start": 1856,
                    "end": 2087
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 1809,
                  "end": 2087
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2103,
                    "end": 2142
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
                          "name": "myPublicStaticProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2164,
                          "end": 2186
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2188,
                              "end": 2199
                            },
                            "typeArguments": null,
                            "start": 2188,
                            "end": 2199
                          },
                          "start": 2186,
                          "end": 2199
                        },
                        "value": null,
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 2157,
                        "end": 2200
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2228,
                          "end": 2251
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2253,
                              "end": 2264
                            },
                            "typeArguments": null,
                            "start": 2253,
                            "end": 2264
                          },
                          "start": 2251,
                          "end": 2264
                        },
                        "value": null,
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "private",
                        "start": 2213,
                        "end": 2265
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2278,
                          "end": 2294
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2296,
                              "end": 2307
                            },
                            "typeArguments": null,
                            "start": 2296,
                            "end": 2307
                          },
                          "start": 2294,
                          "end": 2307
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
                        "start": 2278,
                        "end": 2308
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2329,
                          "end": 2346
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2348,
                              "end": 2359
                            },
                            "typeArguments": null,
                            "start": 2348,
                            "end": 2359
                          },
                          "start": 2346,
                          "end": 2359
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
                        "start": 2321,
                        "end": 2360
                      }
                    ],
                    "start": 2143,
                    "end": 2370
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 2097,
                  "end": 2370
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
                          "name": "publicVarWithPrivatePropertyTypes",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2426,
                                "end": 2438
                              },
                              "typeArguments": null,
                              "start": 2426,
                              "end": 2438
                            },
                            "start": 2424,
                            "end": 2438
                          },
                          "start": 2391,
                          "end": 2438
                        },
                        "init": null,
                        "definite": false,
                        "start": 2391,
                        "end": 2438
                      }
                    ],
                    "declare": false,
                    "start": 2387,
                    "end": 2439
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 2380,
                  "end": 2439
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
                          "name": "publicVarWithPublicPropertyTypes",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2493,
                                "end": 2504
                              },
                              "typeArguments": null,
                              "start": 2493,
                              "end": 2504
                            },
                            "start": 2491,
                            "end": 2504
                          },
                          "start": 2459,
                          "end": 2504
                        },
                        "init": null,
                        "definite": false,
                        "start": 2459,
                        "end": 2504
                      }
                    ],
                    "declare": false,
                    "start": 2455,
                    "end": 2505
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 2448,
                  "end": 2505
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
                        "name": "privateVarWithPrivatePropertyTypes",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2554,
                              "end": 2566
                            },
                            "typeArguments": null,
                            "start": 2554,
                            "end": 2566
                          },
                          "start": 2552,
                          "end": 2566
                        },
                        "start": 2518,
                        "end": 2566
                      },
                      "init": null,
                      "definite": false,
                      "start": 2518,
                      "end": 2566
                    }
                  ],
                  "declare": false,
                  "start": 2514,
                  "end": 2567
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
                        "name": "privateVarWithPublicPropertyTypes",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2615,
                              "end": 2626
                            },
                            "typeArguments": null,
                            "start": 2615,
                            "end": 2626
                          },
                          "start": 2613,
                          "end": 2626
                        },
                        "start": 2580,
                        "end": 2626
                      },
                      "init": null,
                      "definite": false,
                      "start": 2580,
                      "end": 2626
                    }
                  ],
                  "declare": false,
                  "start": 2576,
                  "end": 2627
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
                          "name": "publicAmbientVarWithPrivatePropertyTypes",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2698,
                                "end": 2710
                              },
                              "typeArguments": null,
                              "start": 2698,
                              "end": 2710
                            },
                            "start": 2696,
                            "end": 2710
                          },
                          "start": 2656,
                          "end": 2710
                        },
                        "init": null,
                        "definite": false,
                        "start": 2656,
                        "end": 2710
                      }
                    ],
                    "declare": true,
                    "start": 2644,
                    "end": 2711
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 2637,
                  "end": 2711
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
                          "name": "publicAmbientVarWithPublicPropertyTypes",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2780,
                                "end": 2791
                              },
                              "typeArguments": null,
                              "start": 2780,
                              "end": 2791
                            },
                            "start": 2778,
                            "end": 2791
                          },
                          "start": 2739,
                          "end": 2791
                        },
                        "init": null,
                        "definite": false,
                        "start": 2739,
                        "end": 2791
                      }
                    ],
                    "declare": true,
                    "start": 2727,
                    "end": 2792
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 2720,
                  "end": 2792
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
                        "name": "privateAmbientVarWithPrivatePropertyTypes",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2856,
                              "end": 2868
                            },
                            "typeArguments": null,
                            "start": 2856,
                            "end": 2868
                          },
                          "start": 2854,
                          "end": 2868
                        },
                        "start": 2813,
                        "end": 2868
                      },
                      "init": null,
                      "definite": false,
                      "start": 2813,
                      "end": 2868
                    }
                  ],
                  "declare": true,
                  "start": 2801,
                  "end": 2869
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
                        "name": "privateAmbientVarWithPublicPropertyTypes",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2932,
                              "end": 2943
                            },
                            "typeArguments": null,
                            "start": 2932,
                            "end": 2943
                          },
                          "start": 2930,
                          "end": 2943
                        },
                        "start": 2890,
                        "end": 2943
                      },
                      "init": null,
                      "definite": false,
                      "start": 2890,
                      "end": 2943
                    }
                  ],
                  "declare": true,
                  "start": 2878,
                  "end": 2944
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceWithPrivateModulePropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2971,
                      "end": 3016
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
                            "name": "myProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3031,
                            "end": 3041
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
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3043,
                                  "end": 3056
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3057,
                                  "end": 3068
                                },
                                "start": 3043,
                                "end": 3068
                              },
                              "typeArguments": null,
                              "start": 3043,
                              "end": 3068
                            },
                            "start": 3041,
                            "end": 3068
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3031,
                          "end": 3069
                        }
                      ],
                      "start": 3017,
                      "end": 3079
                    },
                    "declare": false,
                    "start": 2961,
                    "end": 3079
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 2954,
                  "end": 3079
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithPrivateModulePropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3101,
                      "end": 3142
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
                            "name": "myPublicStaticProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3164,
                            "end": 3186
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
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3188,
                                  "end": 3201
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3202,
                                  "end": 3213
                                },
                                "start": 3188,
                                "end": 3213
                              },
                              "typeArguments": null,
                              "start": 3188,
                              "end": 3213
                            },
                            "start": 3186,
                            "end": 3213
                          },
                          "value": null,
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 3157,
                          "end": 3214
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3227,
                            "end": 3243
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
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3245,
                                  "end": 3258
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3259,
                                  "end": 3270
                                },
                                "start": 3245,
                                "end": 3270
                              },
                              "typeArguments": null,
                              "start": 3245,
                              "end": 3270
                            },
                            "start": 3243,
                            "end": 3270
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
                          "start": 3227,
                          "end": 3271
                        }
                      ],
                      "start": 3143,
                      "end": 3281
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3095,
                    "end": 3281
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3088,
                  "end": 3281
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
                          "name": "publicVarWithPrivateModulePropertyTypes",
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
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3342,
                                  "end": 3355
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3356,
                                  "end": 3367
                                },
                                "start": 3342,
                                "end": 3367
                              },
                              "typeArguments": null,
                              "start": 3342,
                              "end": 3367
                            },
                            "start": 3340,
                            "end": 3367
                          },
                          "start": 3301,
                          "end": 3367
                        },
                        "init": null,
                        "definite": false,
                        "start": 3301,
                        "end": 3367
                      }
                    ],
                    "declare": false,
                    "start": 3297,
                    "end": 3368
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3290,
                  "end": 3368
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
                          "name": "publicAmbientVarWithPrivateModulePropertyTypes",
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
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3444,
                                  "end": 3457
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3458,
                                  "end": 3469
                                },
                                "start": 3444,
                                "end": 3469
                              },
                              "typeArguments": null,
                              "start": 3444,
                              "end": 3469
                            },
                            "start": 3442,
                            "end": 3469
                          },
                          "start": 3396,
                          "end": 3469
                        },
                        "init": null,
                        "definite": false,
                        "start": 3396,
                        "end": 3469
                      }
                    ],
                    "declare": true,
                    "start": 3384,
                    "end": 3470
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 3377,
                  "end": 3470
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPrivateModulePropertyTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3490,
                    "end": 3536
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
                          "name": "myProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3551,
                          "end": 3561
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
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3563,
                                "end": 3576
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3577,
                                "end": 3588
                              },
                              "start": 3563,
                              "end": 3588
                            },
                            "typeArguments": null,
                            "start": 3563,
                            "end": 3588
                          },
                          "start": 3561,
                          "end": 3588
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3551,
                        "end": 3589
                      }
                    ],
                    "start": 3537,
                    "end": 3599
                  },
                  "declare": false,
                  "start": 3480,
                  "end": 3599
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithPrivateModulePropertyTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3614,
                    "end": 3656
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
                          "name": "myPublicStaticProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3678,
                          "end": 3700
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
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3702,
                                "end": 3715
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3716,
                                "end": 3727
                              },
                              "start": 3702,
                              "end": 3727
                            },
                            "typeArguments": null,
                            "start": 3702,
                            "end": 3727
                          },
                          "start": 3700,
                          "end": 3727
                        },
                        "value": null,
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 3671,
                        "end": 3728
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3741,
                          "end": 3757
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
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3759,
                                "end": 3772
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3773,
                                "end": 3784
                              },
                              "start": 3759,
                              "end": 3784
                            },
                            "typeArguments": null,
                            "start": 3759,
                            "end": 3784
                          },
                          "start": 3757,
                          "end": 3784
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
                        "start": 3741,
                        "end": 3785
                      }
                    ],
                    "start": 3657,
                    "end": 3795
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 3608,
                  "end": 3795
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
                        "name": "privateVarWithPrivateModulePropertyTypes",
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
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3850,
                                "end": 3863
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3864,
                                "end": 3875
                              },
                              "start": 3850,
                              "end": 3875
                            },
                            "typeArguments": null,
                            "start": 3850,
                            "end": 3875
                          },
                          "start": 3848,
                          "end": 3875
                        },
                        "start": 3808,
                        "end": 3875
                      },
                      "init": null,
                      "definite": false,
                      "start": 3808,
                      "end": 3875
                    }
                  ],
                  "declare": false,
                  "start": 3804,
                  "end": 3876
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
                        "name": "privateAmbientVarWithPrivateModulePropertyTypes",
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
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3946,
                                "end": 3959
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3960,
                                "end": 3971
                              },
                              "start": 3946,
                              "end": 3971
                            },
                            "typeArguments": null,
                            "start": 3946,
                            "end": 3971
                          },
                          "start": 3944,
                          "end": 3971
                        },
                        "start": 3897,
                        "end": 3971
                      },
                      "init": null,
                      "definite": false,
                      "start": 3897,
                      "end": 3971
                    }
                  ],
                  "declare": true,
                  "start": 3885,
                  "end": 3972
                }
              ],
              "start": 682,
              "end": 3978
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 658,
            "end": 3978
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivatePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 4001,
                "end": 4040
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4051,
                      "end": 4061
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4063,
                          "end": 4075
                        },
                        "typeArguments": null,
                        "start": 4063,
                        "end": 4075
                      },
                      "start": 4061,
                      "end": 4075
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4051,
                    "end": 4076
                  }
                ],
                "start": 4041,
                "end": 4092
              },
              "declare": false,
              "start": 3991,
              "end": 4092
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 3984,
            "end": 4092
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPublicPropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 4115,
                "end": 4153
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4164,
                      "end": 4174
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4176,
                          "end": 4187
                        },
                        "typeArguments": null,
                        "start": 4176,
                        "end": 4187
                      },
                      "start": 4174,
                      "end": 4187
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4164,
                    "end": 4188
                  }
                ],
                "start": 4154,
                "end": 4194
              },
              "declare": false,
              "start": 4105,
              "end": 4194
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 4098,
            "end": 4194
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivatePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 4210,
              "end": 4250
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
                    "name": "myProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4261,
                    "end": 4271
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4273,
                        "end": 4285
                      },
                      "typeArguments": null,
                      "start": 4273,
                      "end": 4285
                    },
                    "start": 4271,
                    "end": 4285
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4261,
                  "end": 4286
                }
              ],
              "start": 4251,
              "end": 4292
            },
            "declare": false,
            "start": 4200,
            "end": 4292
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicPropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 4308,
              "end": 4347
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
                    "name": "myProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4358,
                    "end": 4368
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4370,
                        "end": 4381
                      },
                      "typeArguments": null,
                      "start": 4370,
                      "end": 4381
                    },
                    "start": 4368,
                    "end": 4381
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4358,
                  "end": 4382
                }
              ],
              "start": 4348,
              "end": 4388
            },
            "declare": false,
            "start": 4298,
            "end": 4388
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivatePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 4407,
                "end": 4446
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
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4464,
                      "end": 4486
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4488,
                          "end": 4500
                        },
                        "typeArguments": null,
                        "start": 4488,
                        "end": 4500
                      },
                      "start": 4486,
                      "end": 4500
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 4457,
                    "end": 4501
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4534,
                      "end": 4557
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4559,
                          "end": 4571
                        },
                        "typeArguments": null,
                        "start": 4559,
                        "end": 4571
                      },
                      "start": 4557,
                      "end": 4571
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 4519,
                    "end": 4572
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4581,
                      "end": 4597
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4599,
                          "end": 4611
                        },
                        "typeArguments": null,
                        "start": 4599,
                        "end": 4611
                      },
                      "start": 4597,
                      "end": 4611
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
                    "start": 4581,
                    "end": 4612
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4638,
                      "end": 4655
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4657,
                          "end": 4669
                        },
                        "typeArguments": null,
                        "start": 4657,
                        "end": 4669
                      },
                      "start": 4655,
                      "end": 4669
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
                    "start": 4630,
                    "end": 4670
                  }
                ],
                "start": 4447,
                "end": 4676
              },
              "abstract": false,
              "declare": false,
              "start": 4401,
              "end": 4676
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4394,
            "end": 4676
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicPropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 4695,
                "end": 4733
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
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4751,
                      "end": 4773
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4775,
                          "end": 4786
                        },
                        "typeArguments": null,
                        "start": 4775,
                        "end": 4786
                      },
                      "start": 4773,
                      "end": 4786
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 4744,
                    "end": 4787
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4811,
                      "end": 4834
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4836,
                          "end": 4847
                        },
                        "typeArguments": null,
                        "start": 4836,
                        "end": 4847
                      },
                      "start": 4834,
                      "end": 4847
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 4796,
                    "end": 4848
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4857,
                      "end": 4873
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4875,
                          "end": 4886
                        },
                        "typeArguments": null,
                        "start": 4875,
                        "end": 4886
                      },
                      "start": 4873,
                      "end": 4886
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
                    "start": 4857,
                    "end": 4887
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4904,
                      "end": 4921
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4923,
                          "end": 4934
                        },
                        "typeArguments": null,
                        "start": 4923,
                        "end": 4934
                      },
                      "start": 4921,
                      "end": 4934
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
                    "start": 4896,
                    "end": 4935
                  }
                ],
                "start": 4734,
                "end": 4941
              },
              "abstract": false,
              "declare": false,
              "start": 4689,
              "end": 4941
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4682,
            "end": 4941
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivatePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 4953,
              "end": 4993
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
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5011,
                    "end": 5033
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5035,
                        "end": 5047
                      },
                      "typeArguments": null,
                      "start": 5035,
                      "end": 5047
                    },
                    "start": 5033,
                    "end": 5047
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 5004,
                  "end": 5048
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5072,
                    "end": 5095
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5097,
                        "end": 5109
                      },
                      "typeArguments": null,
                      "start": 5097,
                      "end": 5109
                    },
                    "start": 5095,
                    "end": 5109
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 5057,
                  "end": 5110
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5119,
                    "end": 5135
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5137,
                        "end": 5149
                      },
                      "typeArguments": null,
                      "start": 5137,
                      "end": 5149
                    },
                    "start": 5135,
                    "end": 5149
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
                  "start": 5119,
                  "end": 5150
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5167,
                    "end": 5184
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5186,
                        "end": 5198
                      },
                      "typeArguments": null,
                      "start": 5186,
                      "end": 5198
                    },
                    "start": 5184,
                    "end": 5198
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
                  "start": 5159,
                  "end": 5199
                }
              ],
              "start": 4994,
              "end": 5205
            },
            "abstract": false,
            "declare": false,
            "start": 4947,
            "end": 5205
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicPropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 5217,
              "end": 5256
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
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5274,
                    "end": 5296
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5298,
                        "end": 5309
                      },
                      "typeArguments": null,
                      "start": 5298,
                      "end": 5309
                    },
                    "start": 5296,
                    "end": 5309
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 5267,
                  "end": 5310
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5334,
                    "end": 5357
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5359,
                        "end": 5370
                      },
                      "typeArguments": null,
                      "start": 5359,
                      "end": 5370
                    },
                    "start": 5357,
                    "end": 5370
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 5319,
                  "end": 5371
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5380,
                    "end": 5396
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5398,
                        "end": 5409
                      },
                      "typeArguments": null,
                      "start": 5398,
                      "end": 5409
                    },
                    "start": 5396,
                    "end": 5409
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
                  "start": 5380,
                  "end": 5410
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5427,
                    "end": 5444
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5446,
                        "end": 5457
                      },
                      "typeArguments": null,
                      "start": 5446,
                      "end": 5457
                    },
                    "start": 5444,
                    "end": 5457
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
                  "start": 5419,
                  "end": 5458
                }
              ],
              "start": 5257,
              "end": 5464
            },
            "abstract": false,
            "declare": false,
            "start": 5211,
            "end": 5464
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
                    "name": "publicVarWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5516,
                          "end": 5528
                        },
                        "typeArguments": null,
                        "start": 5516,
                        "end": 5528
                      },
                      "start": 5514,
                      "end": 5528
                    },
                    "start": 5481,
                    "end": 5528
                  },
                  "init": null,
                  "definite": false,
                  "start": 5481,
                  "end": 5528
                }
              ],
              "declare": false,
              "start": 5477,
              "end": 5529
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5470,
            "end": 5529
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
                    "name": "publicVarWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5588,
                          "end": 5599
                        },
                        "typeArguments": null,
                        "start": 5588,
                        "end": 5599
                      },
                      "start": 5586,
                      "end": 5599
                    },
                    "start": 5554,
                    "end": 5599
                  },
                  "init": null,
                  "definite": false,
                  "start": 5554,
                  "end": 5599
                }
              ],
              "declare": false,
              "start": 5550,
              "end": 5600
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5543,
            "end": 5600
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
                  "name": "privateVarWithPrivatePropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5645,
                        "end": 5657
                      },
                      "typeArguments": null,
                      "start": 5645,
                      "end": 5657
                    },
                    "start": 5643,
                    "end": 5657
                  },
                  "start": 5609,
                  "end": 5657
                },
                "init": null,
                "definite": false,
                "start": 5609,
                "end": 5657
              }
            ],
            "declare": false,
            "start": 5605,
            "end": 5658
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
                  "name": "privateVarWithPublicPropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5702,
                        "end": 5713
                      },
                      "typeArguments": null,
                      "start": 5702,
                      "end": 5713
                    },
                    "start": 5700,
                    "end": 5713
                  },
                  "start": 5667,
                  "end": 5713
                },
                "init": null,
                "definite": false,
                "start": 5667,
                "end": 5713
              }
            ],
            "declare": false,
            "start": 5663,
            "end": 5714
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
                    "name": "publicAmbientVarWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5781,
                          "end": 5793
                        },
                        "typeArguments": null,
                        "start": 5781,
                        "end": 5793
                      },
                      "start": 5779,
                      "end": 5793
                    },
                    "start": 5739,
                    "end": 5793
                  },
                  "init": null,
                  "definite": false,
                  "start": 5739,
                  "end": 5793
                }
              ],
              "declare": true,
              "start": 5727,
              "end": 5794
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 5720,
            "end": 5794
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
                    "name": "publicAmbientVarWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5868,
                          "end": 5879
                        },
                        "typeArguments": null,
                        "start": 5868,
                        "end": 5879
                      },
                      "start": 5866,
                      "end": 5879
                    },
                    "start": 5827,
                    "end": 5879
                  },
                  "init": null,
                  "definite": false,
                  "start": 5827,
                  "end": 5879
                }
              ],
              "declare": true,
              "start": 5815,
              "end": 5880
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 5808,
            "end": 5880
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
                  "name": "privateAmbientVarWithPrivatePropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5940,
                        "end": 5952
                      },
                      "typeArguments": null,
                      "start": 5940,
                      "end": 5952
                    },
                    "start": 5938,
                    "end": 5952
                  },
                  "start": 5897,
                  "end": 5952
                },
                "init": null,
                "definite": false,
                "start": 5897,
                "end": 5952
              }
            ],
            "declare": true,
            "start": 5885,
            "end": 5953
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
                  "name": "privateAmbientVarWithPublicPropertyTypes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6012,
                        "end": 6023
                      },
                      "typeArguments": null,
                      "start": 6012,
                      "end": 6023
                    },
                    "start": 6010,
                    "end": 6023
                  },
                  "start": 5970,
                  "end": 6023
                },
                "init": null,
                "definite": false,
                "start": 5970,
                "end": 6023
              }
            ],
            "declare": true,
            "start": 5958,
            "end": 6024
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivateModulePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6047,
                "end": 6092
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6103,
                      "end": 6113
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6115,
                            "end": 6128
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6129,
                            "end": 6140
                          },
                          "start": 6115,
                          "end": 6140
                        },
                        "typeArguments": null,
                        "start": 6115,
                        "end": 6140
                      },
                      "start": 6113,
                      "end": 6140
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 6103,
                    "end": 6141
                  }
                ],
                "start": 6093,
                "end": 6156
              },
              "declare": false,
              "start": 6037,
              "end": 6156
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 6030,
            "end": 6156
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateModulePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6174,
                "end": 6215
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
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6233,
                      "end": 6255
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6257,
                            "end": 6270
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6271,
                            "end": 6282
                          },
                          "start": 6257,
                          "end": 6282
                        },
                        "typeArguments": null,
                        "start": 6257,
                        "end": 6282
                      },
                      "start": 6255,
                      "end": 6282
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 6226,
                    "end": 6283
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6301,
                      "end": 6317
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6319,
                            "end": 6332
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6333,
                            "end": 6344
                          },
                          "start": 6319,
                          "end": 6344
                        },
                        "typeArguments": null,
                        "start": 6319,
                        "end": 6344
                      },
                      "start": 6317,
                      "end": 6344
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
                    "start": 6301,
                    "end": 6345
                  }
                ],
                "start": 6216,
                "end": 6360
              },
              "abstract": false,
              "declare": false,
              "start": 6168,
              "end": 6360
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6161,
            "end": 6360
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
                    "name": "publicVarWithPrivateModulePropertyTypes",
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6417,
                            "end": 6430
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6431,
                            "end": 6442
                          },
                          "start": 6417,
                          "end": 6442
                        },
                        "typeArguments": null,
                        "start": 6417,
                        "end": 6442
                      },
                      "start": 6415,
                      "end": 6442
                    },
                    "start": 6376,
                    "end": 6442
                  },
                  "init": null,
                  "definite": false,
                  "start": 6376,
                  "end": 6442
                }
              ],
              "declare": false,
              "start": 6372,
              "end": 6443
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6365,
            "end": 6443
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
                    "name": "publicAmbientVarWithPrivateModulePropertyTypes",
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6524,
                            "end": 6537
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6538,
                            "end": 6549
                          },
                          "start": 6524,
                          "end": 6549
                        },
                        "typeArguments": null,
                        "start": 6524,
                        "end": 6549
                      },
                      "start": 6522,
                      "end": 6549
                    },
                    "start": 6476,
                    "end": 6549
                  },
                  "init": null,
                  "definite": false,
                  "start": 6476,
                  "end": 6549
                }
              ],
              "declare": true,
              "start": 6464,
              "end": 6550
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 6457,
            "end": 6550
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateModulePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 6575,
              "end": 6621
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
                    "name": "myProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6632,
                    "end": 6642
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
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6644,
                          "end": 6657
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6658,
                          "end": 6669
                        },
                        "start": 6644,
                        "end": 6669
                      },
                      "typeArguments": null,
                      "start": 6644,
                      "end": 6669
                    },
                    "start": 6642,
                    "end": 6669
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6632,
                  "end": 6670
                }
              ],
              "start": 6622,
              "end": 6676
            },
            "declare": false,
            "start": 6565,
            "end": 6676
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateModulePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 6687,
              "end": 6729
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
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6747,
                    "end": 6769
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
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6771,
                          "end": 6784
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6785,
                          "end": 6796
                        },
                        "start": 6771,
                        "end": 6796
                      },
                      "typeArguments": null,
                      "start": 6771,
                      "end": 6796
                    },
                    "start": 6769,
                    "end": 6796
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 6740,
                  "end": 6797
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6806,
                    "end": 6822
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
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6824,
                          "end": 6837
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6838,
                          "end": 6849
                        },
                        "start": 6824,
                        "end": 6849
                      },
                      "typeArguments": null,
                      "start": 6824,
                      "end": 6849
                    },
                    "start": 6822,
                    "end": 6849
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
                  "start": 6806,
                  "end": 6850
                }
              ],
              "start": 6730,
              "end": 6856
            },
            "abstract": false,
            "declare": false,
            "start": 6681,
            "end": 6856
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
                  "name": "privateVarWithPrivateModulePropertyTypes",
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
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6907,
                          "end": 6920
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6921,
                          "end": 6932
                        },
                        "start": 6907,
                        "end": 6932
                      },
                      "typeArguments": null,
                      "start": 6907,
                      "end": 6932
                    },
                    "start": 6905,
                    "end": 6932
                  },
                  "start": 6865,
                  "end": 6932
                },
                "init": null,
                "definite": false,
                "start": 6865,
                "end": 6932
              }
            ],
            "declare": false,
            "start": 6861,
            "end": 6933
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
                  "name": "privateAmbientVarWithPrivateModulePropertyTypes",
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
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6999,
                          "end": 7012
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7013,
                          "end": 7024
                        },
                        "start": 6999,
                        "end": 7024
                      },
                      "typeArguments": null,
                      "start": 6999,
                      "end": 7024
                    },
                    "start": 6997,
                    "end": 7024
                  },
                  "start": 6950,
                  "end": 7024
                },
                "init": null,
                "definite": false,
                "start": 6950,
                "end": 7024
              }
            ],
            "declare": true,
            "start": 6938,
            "end": 7025
          }
        ],
        "start": 582,
        "end": 7027
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 551,
      "end": 7027
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 7027
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "publicClassInGlobal",
    "start": 6,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 30,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicPropertyTypesInGlobal",
    "start": 40,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 93,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "publicClassInGlobal",
    "start": 105,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 128,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicPropertyTypesInGlobal",
    "start": 134,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 187,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 194,
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
    "value": "publicClassInGlobal",
    "start": 218,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 243,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 251,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 258,
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
    "value": "publicClassInGlobal",
    "start": 283,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 308,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "publicClassInGlobal",
    "start": 326,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 351,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 359,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "publicClassInGlobal",
    "start": 378,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 401,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPublicPropertyTypesInGlobal",
    "start": 405,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "publicClassInGlobal",
    "start": 447,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 468,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 476,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPublicPropertyTypesInGlobal",
    "start": 480,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "publicClassInGlobal",
    "start": 529,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 551,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "publicModuleInGlobal",
    "start": 561,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 582,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 588,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 594,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 620,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 627,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 633,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 658,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 668,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 692,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 698,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 711,
    "end": 712
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
    "start": 732,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 739,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 745,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 778,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 785,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivatePropertyTypes",
    "start": 795,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 849,
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
    "value": "privateClass",
    "start": 861,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 894,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 901,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicPropertyTypes",
    "start": 911,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 964,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 976,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1008,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivatePropertyTypes",
    "start": 1018,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 1073,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1085,
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
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1118,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicPropertyTypes",
    "start": 1128,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 1182,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1194,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1226,
    "end": 1232
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1233,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPrivatePropertyTypes",
    "start": 1239,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1293,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 1300,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1324,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1350,
    "end": 1357
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1358,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 1365,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1390,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 1416,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1434,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1460,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 1468,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1487,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1520,
    "end": 1526
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1527,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicPropertyTypes",
    "start": 1533,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1586,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 1593,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1617,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1642,
    "end": 1649
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1650,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 1657,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1682,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 1707,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1725,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1750,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 1758,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1777,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1809,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPrivatePropertyTypes",
    "start": 1815,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1870,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 1877,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1901,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1927,
    "end": 1934
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1935,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 1942,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1967,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 1993,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2011,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2037,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 2045,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2064,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2097,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPublicPropertyTypes",
    "start": 2103,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2157,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 2164,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2188,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2213,
    "end": 2220
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2221,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 2228,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2253,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 2278,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2296,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2321,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 2329,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2348,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2380,
    "end": 2386
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2387,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPrivatePropertyTypes",
    "start": 2391,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2426,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2448,
    "end": 2454
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2455,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPublicPropertyTypes",
    "start": 2459,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2493,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2514,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPrivatePropertyTypes",
    "start": 2518,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2554,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2576,
    "end": 2579
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPublicPropertyTypes",
    "start": 2580,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2615,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2637,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2644,
    "end": 2651
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2652,
    "end": 2655
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPrivatePropertyTypes",
    "start": 2656,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2698,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2720,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2727,
    "end": 2734
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2735,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPublicPropertyTypes",
    "start": 2739,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2780,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2801,
    "end": 2808
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2809,
    "end": 2812
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPrivatePropertyTypes",
    "start": 2813,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2856,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2878,
    "end": 2885
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2886,
    "end": 2889
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPublicPropertyTypes",
    "start": 2890,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2932,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2954,
    "end": 2960
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2961,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateModulePropertyTypes",
    "start": 2971,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 3031,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3043,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3057,
    "end": 3068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3088,
    "end": 3094
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3095,
    "end": 3100
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPrivateModulePropertyTypes",
    "start": 3101,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3157,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 3164,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3188,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3202,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 3227,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3245,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3259,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3290,
    "end": 3296
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3297,
    "end": 3300
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPrivateModulePropertyTypes",
    "start": 3301,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3340,
    "end": 3341
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3342,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3356,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3377,
    "end": 3383
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3384,
    "end": 3391
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3392,
    "end": 3395
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPrivateModulePropertyTypes",
    "start": 3396,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3444,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3458,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3480,
    "end": 3489
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateModulePropertyTypes",
    "start": 3490,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 3551,
    "end": 3561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3563,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3577,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3608,
    "end": 3613
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPrivateModulePropertyTypes",
    "start": 3614,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3671,
    "end": 3677
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 3678,
    "end": 3700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3702,
    "end": 3715
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3715,
    "end": 3716
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3716,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 3741,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3759,
    "end": 3772
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3772,
    "end": 3773
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3773,
    "end": 3784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3804,
    "end": 3807
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPrivateModulePropertyTypes",
    "start": 3808,
    "end": 3848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3848,
    "end": 3849
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3850,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3863,
    "end": 3864
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3864,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3885,
    "end": 3892
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3893,
    "end": 3896
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPrivateModulePropertyTypes",
    "start": 3897,
    "end": 3944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3946,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3960,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3984,
    "end": 3990
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3991,
    "end": 4000
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivatePropertyTypes",
    "start": 4001,
    "end": 4040
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 4051,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4063,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4075,
    "end": 4076
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4098,
    "end": 4104
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4105,
    "end": 4114
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicPropertyTypes",
    "start": 4115,
    "end": 4153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 4164,
    "end": 4174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4174,
    "end": 4175
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4176,
    "end": 4187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4187,
    "end": 4188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4193,
    "end": 4194
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4200,
    "end": 4209
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivatePropertyTypes",
    "start": 4210,
    "end": 4250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4251,
    "end": 4252
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 4261,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4271,
    "end": 4272
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4273,
    "end": 4285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4285,
    "end": 4286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4291,
    "end": 4292
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4298,
    "end": 4307
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicPropertyTypes",
    "start": 4308,
    "end": 4347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4348,
    "end": 4349
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 4358,
    "end": 4368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4370,
    "end": 4381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4381,
    "end": 4382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4394,
    "end": 4400
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4401,
    "end": 4406
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPrivatePropertyTypes",
    "start": 4407,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4457,
    "end": 4463
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 4464,
    "end": 4486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4486,
    "end": 4487
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4488,
    "end": 4500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4500,
    "end": 4501
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4519,
    "end": 4526
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4527,
    "end": 4533
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 4534,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4559,
    "end": 4571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4571,
    "end": 4572
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 4581,
    "end": 4597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4597,
    "end": 4598
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4599,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4630,
    "end": 4637
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 4638,
    "end": 4655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4657,
    "end": 4669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4669,
    "end": 4670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4675,
    "end": 4676
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4682,
    "end": 4688
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4689,
    "end": 4694
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicPropertyTypes",
    "start": 4695,
    "end": 4733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4734,
    "end": 4735
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4744,
    "end": 4750
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 4751,
    "end": 4773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4773,
    "end": 4774
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4775,
    "end": 4786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4786,
    "end": 4787
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4796,
    "end": 4803
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4804,
    "end": 4810
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 4811,
    "end": 4834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4834,
    "end": 4835
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4836,
    "end": 4847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4847,
    "end": 4848
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 4857,
    "end": 4873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4873,
    "end": 4874
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4875,
    "end": 4886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4886,
    "end": 4887
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4896,
    "end": 4903
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 4904,
    "end": 4921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4921,
    "end": 4922
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4923,
    "end": 4934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4934,
    "end": 4935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4940,
    "end": 4941
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4947,
    "end": 4952
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPrivatePropertyTypes",
    "start": 4953,
    "end": 4993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4994,
    "end": 4995
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5004,
    "end": 5010
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 5011,
    "end": 5033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5033,
    "end": 5034
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5035,
    "end": 5047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5047,
    "end": 5048
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5057,
    "end": 5064
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5065,
    "end": 5071
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 5072,
    "end": 5095
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5095,
    "end": 5096
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5097,
    "end": 5109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5109,
    "end": 5110
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 5119,
    "end": 5135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5135,
    "end": 5136
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5137,
    "end": 5149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5149,
    "end": 5150
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5159,
    "end": 5166
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 5167,
    "end": 5184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5184,
    "end": 5185
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5186,
    "end": 5198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5198,
    "end": 5199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5204,
    "end": 5205
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5211,
    "end": 5216
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPublicPropertyTypes",
    "start": 5217,
    "end": 5256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5257,
    "end": 5258
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5267,
    "end": 5273
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 5274,
    "end": 5296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5296,
    "end": 5297
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5298,
    "end": 5309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5309,
    "end": 5310
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5319,
    "end": 5326
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5327,
    "end": 5333
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticProperty",
    "start": 5334,
    "end": 5357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5357,
    "end": 5358
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5359,
    "end": 5370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5370,
    "end": 5371
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 5380,
    "end": 5396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5396,
    "end": 5397
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5398,
    "end": 5409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5409,
    "end": 5410
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5419,
    "end": 5426
  },
  {
    "type": "Identifier",
    "value": "myPrivateProperty",
    "start": 5427,
    "end": 5444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5444,
    "end": 5445
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5446,
    "end": 5457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5457,
    "end": 5458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5463,
    "end": 5464
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5470,
    "end": 5476
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5477,
    "end": 5480
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPrivatePropertyTypes",
    "start": 5481,
    "end": 5514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5514,
    "end": 5515
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5516,
    "end": 5528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5528,
    "end": 5529
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5543,
    "end": 5549
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5550,
    "end": 5553
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPublicPropertyTypes",
    "start": 5554,
    "end": 5586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5586,
    "end": 5587
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5588,
    "end": 5599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5599,
    "end": 5600
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5605,
    "end": 5608
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPrivatePropertyTypes",
    "start": 5609,
    "end": 5643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5643,
    "end": 5644
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5645,
    "end": 5657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5657,
    "end": 5658
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5663,
    "end": 5666
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPublicPropertyTypes",
    "start": 5667,
    "end": 5700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5700,
    "end": 5701
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5702,
    "end": 5713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5713,
    "end": 5714
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5720,
    "end": 5726
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5727,
    "end": 5734
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5735,
    "end": 5738
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPrivatePropertyTypes",
    "start": 5739,
    "end": 5779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5779,
    "end": 5780
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5781,
    "end": 5793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5793,
    "end": 5794
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5808,
    "end": 5814
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5815,
    "end": 5822
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5823,
    "end": 5826
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPublicPropertyTypes",
    "start": 5827,
    "end": 5866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5866,
    "end": 5867
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5868,
    "end": 5879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5879,
    "end": 5880
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5885,
    "end": 5892
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5893,
    "end": 5896
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPrivatePropertyTypes",
    "start": 5897,
    "end": 5938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5938,
    "end": 5939
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5940,
    "end": 5952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5952,
    "end": 5953
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5958,
    "end": 5965
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5966,
    "end": 5969
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPublicPropertyTypes",
    "start": 5970,
    "end": 6010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6010,
    "end": 6011
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6012,
    "end": 6023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6023,
    "end": 6024
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6030,
    "end": 6036
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6037,
    "end": 6046
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateModulePropertyTypes",
    "start": 6047,
    "end": 6092
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6093,
    "end": 6094
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 6103,
    "end": 6113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6113,
    "end": 6114
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 6115,
    "end": 6128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6128,
    "end": 6129
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6129,
    "end": 6140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6140,
    "end": 6141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6155,
    "end": 6156
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6161,
    "end": 6167
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6168,
    "end": 6173
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPrivateModulePropertyTypes",
    "start": 6174,
    "end": 6215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6216,
    "end": 6217
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6226,
    "end": 6232
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 6233,
    "end": 6255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6255,
    "end": 6256
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 6257,
    "end": 6270
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6270,
    "end": 6271
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6271,
    "end": 6282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6282,
    "end": 6283
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 6301,
    "end": 6317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6317,
    "end": 6318
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 6319,
    "end": 6332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6332,
    "end": 6333
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6333,
    "end": 6344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6344,
    "end": 6345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6359,
    "end": 6360
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6365,
    "end": 6371
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6372,
    "end": 6375
  },
  {
    "type": "Identifier",
    "value": "publicVarWithPrivateModulePropertyTypes",
    "start": 6376,
    "end": 6415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6415,
    "end": 6416
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 6417,
    "end": 6430
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6430,
    "end": 6431
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6431,
    "end": 6442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6442,
    "end": 6443
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6457,
    "end": 6463
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6464,
    "end": 6471
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6472,
    "end": 6475
  },
  {
    "type": "Identifier",
    "value": "publicAmbientVarWithPrivateModulePropertyTypes",
    "start": 6476,
    "end": 6522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6522,
    "end": 6523
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 6524,
    "end": 6537
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6537,
    "end": 6538
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6538,
    "end": 6549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6549,
    "end": 6550
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6565,
    "end": 6574
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateModulePropertyTypes",
    "start": 6575,
    "end": 6621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6622,
    "end": 6623
  },
  {
    "type": "Identifier",
    "value": "myProperty",
    "start": 6632,
    "end": 6642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6642,
    "end": 6643
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 6644,
    "end": 6657
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6657,
    "end": 6658
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6658,
    "end": 6669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6669,
    "end": 6670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6675,
    "end": 6676
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6681,
    "end": 6686
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPrivateModulePropertyTypes",
    "start": 6687,
    "end": 6729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6730,
    "end": 6731
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6740,
    "end": 6746
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticProperty",
    "start": 6747,
    "end": 6769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6769,
    "end": 6770
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 6771,
    "end": 6784
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6784,
    "end": 6785
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6785,
    "end": 6796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6796,
    "end": 6797
  },
  {
    "type": "Identifier",
    "value": "myPublicProperty",
    "start": 6806,
    "end": 6822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6822,
    "end": 6823
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 6824,
    "end": 6837
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6837,
    "end": 6838
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6838,
    "end": 6849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6849,
    "end": 6850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6855,
    "end": 6856
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6861,
    "end": 6864
  },
  {
    "type": "Identifier",
    "value": "privateVarWithPrivateModulePropertyTypes",
    "start": 6865,
    "end": 6905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6905,
    "end": 6906
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 6907,
    "end": 6920
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6920,
    "end": 6921
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6921,
    "end": 6932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6932,
    "end": 6933
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6938,
    "end": 6945
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6946,
    "end": 6949
  },
  {
    "type": "Identifier",
    "value": "privateAmbientVarWithPrivateModulePropertyTypes",
    "start": 6950,
    "end": 6997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6997,
    "end": 6998
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 6999,
    "end": 7012
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7012,
    "end": 7013
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7013,
    "end": 7024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7024,
    "end": 7025
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7026,
    "end": 7027
  }
]
```
