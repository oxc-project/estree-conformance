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
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 12,
        "end": 15
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 28
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 30
        },
        "start": 27,
        "end": 30
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 31,
        "end": 34
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 17,
      "end": 34
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "start": 46,
          "end": 49
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
        },
        "start": 46,
        "end": 51
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ma",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 67
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "importKind": "value",
            "start": 58,
            "end": 72
          }
        ],
        "start": 52,
        "end": 74
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 36,
      "end": 74
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mImport",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 93
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "importKind": "value",
            "start": 100,
            "end": 113
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 129,
                "end": 130
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 132
              },
              "start": 129,
              "end": 132
            },
            "importKind": "value",
            "start": 118,
            "end": 133
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 147
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "importKind": "value",
            "start": 138,
            "end": 152
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 166
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 170
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "start": 169,
              "end": 172
            },
            "importKind": "value",
            "start": 157,
            "end": 173
          }
        ],
        "start": 94,
        "end": 175
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 76,
      "end": 175
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m0",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 189
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 207
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 210,
              "end": 217
            },
            "expression": false,
            "start": 196,
            "end": 217
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 234
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 238,
                    "end": 244
                  },
                  "start": 236,
                  "end": 244
                },
                "start": 235,
                "end": 244
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 223,
            "end": 246
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 262
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 266,
                    "end": 272
                  },
                  "start": 264,
                  "end": 272
                },
                "start": 263,
                "end": 272
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 251,
            "end": 274
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 290
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 295,
                    "end": 298
                  },
                  "start": 293,
                  "end": 298
                },
                "start": 291,
                "end": 298
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 300,
              "end": 307
            },
            "expression": false,
            "start": 279,
            "end": 307
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 321
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 339,
                    "end": 340
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 347,
                          "end": 353
                        },
                        "start": 345,
                        "end": 353
                      },
                      "start": 343,
                      "end": 353
                    },
                    "start": 341,
                    "end": 353
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
                  "start": 332,
                  "end": 354
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 371,
                    "end": 372
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 378,
                          "end": 384
                        },
                        "start": 376,
                        "end": 384
                      },
                      "start": 374,
                      "end": 384
                    },
                    "start": 372,
                    "end": 384
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
                  "start": 363,
                  "end": 385
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 409,
                    "end": 411
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 394,
                  "end": 412
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 437
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 421,
                  "end": 438
                }
              ],
              "start": 322,
              "end": 444
            },
            "abstract": false,
            "declare": false,
            "start": 313,
            "end": 444
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 462
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 478,
                        "end": 484
                      },
                      "typeArguments": null,
                      "start": 478,
                      "end": 484
                    },
                    "start": 476,
                    "end": 484
                  },
                  "start": 473,
                  "end": 485
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 498,
                          "end": 504
                        },
                        "start": 496,
                        "end": 504
                      },
                      "start": 495,
                      "end": 504
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 507,
                        "end": 509
                      },
                      "typeArguments": null,
                      "start": 507,
                      "end": 509
                    },
                    "start": 505,
                    "end": 509
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 494,
                  "end": 510
                }
              ],
              "start": 463,
              "end": 516
            },
            "declare": false,
            "start": 450,
            "end": 516
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 531
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 535
            },
            "importKind": "value",
            "start": 522,
            "end": 536
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 550
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 554
            },
            "importKind": "value",
            "start": 541,
            "end": 555
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 569
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 573
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 575
              },
              "start": 572,
              "end": 575
            },
            "importKind": "value",
            "start": 560,
            "end": 576
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 590
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 594
            },
            "importKind": "value",
            "start": 581,
            "end": 595
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m6",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 609
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 613
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 615
              },
              "start": 612,
              "end": 615
            },
            "importKind": "value",
            "start": 600,
            "end": 616
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m7",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 630
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 633,
                  "end": 634
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 636
                },
                "start": 633,
                "end": 636
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 638
              },
              "start": 633,
              "end": 638
            },
            "importKind": "value",
            "start": 621,
            "end": 639
          }
        ],
        "start": 190,
        "end": 641
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 177,
      "end": 641
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 653,
        "end": 655
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 678,
                "end": 680
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 683,
                "end": 690
              },
              "expression": false,
              "start": 669,
              "end": 690
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 662,
            "end": 690
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 714
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 718,
                      "end": 724
                    },
                    "start": 716,
                    "end": 724
                  },
                  "start": 715,
                  "end": 724
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 703,
              "end": 726
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 696,
            "end": 726
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 749
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 753,
                      "end": 759
                    },
                    "start": 751,
                    "end": 759
                  },
                  "start": 750,
                  "end": 759
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 738,
              "end": 761
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 731,
            "end": 761
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 784
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 789,
                      "end": 792
                    },
                    "start": 787,
                    "end": 792
                  },
                  "start": 785,
                  "end": 792
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 794,
                "end": 801
              },
              "expression": false,
              "start": 773,
              "end": 801
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 766,
            "end": 801
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 822
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 840,
                      "end": 841
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 848,
                            "end": 854
                          },
                          "start": 846,
                          "end": 854
                        },
                        "start": 843,
                        "end": 854
                      },
                      "start": 841,
                      "end": 854
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
                    "start": 833,
                    "end": 855
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 872,
                      "end": 873
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 880,
                            "end": 886
                          },
                          "start": 878,
                          "end": 886
                        },
                        "start": 875,
                        "end": 886
                      },
                      "start": 873,
                      "end": 886
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
                    "start": 864,
                    "end": 887
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 911,
                      "end": 913
                    },
                    "typeAnnotation": null,
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 896,
                    "end": 914
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 937,
                      "end": 939
                    },
                    "typeAnnotation": null,
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 923,
                    "end": 940
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 957,
                      "end": 958
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "Hello",
                              "raw": "\"Hello\"",
                              "start": 982,
                              "end": 989
                            },
                            "start": 975,
                            "end": 990
                          }
                        ],
                        "start": 961,
                        "end": 1000
                      },
                      "expression": false,
                      "start": 958,
                      "end": 1000
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 950,
                    "end": 1000
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1017,
                      "end": 1018
                    },
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
                              "start": 1022,
                              "end": 1023
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1025,
                                "end": 1031
                              },
                              "start": 1023,
                              "end": 1031
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1022,
                            "end": 1032
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
                              "start": 1033,
                              "end": 1034
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1036,
                                "end": 1042
                              },
                              "start": 1034,
                              "end": 1042
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1033,
                            "end": 1043
                          }
                        ],
                        "start": 1020,
                        "end": 1045
                      },
                      "start": 1018,
                      "end": 1045
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
                    "start": 1010,
                    "end": 1046
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1055,
                      "end": 1066
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
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1075,
                            "end": 1076
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1068,
                          "end": 1076
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1089,
                                "end": 1095
                              },
                              "start": 1087,
                              "end": 1095
                            },
                            "start": 1085,
                            "end": 1095
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1078,
                          "end": 1095
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1105,
                            "end": 1107
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1097,
                          "end": 1107
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n4",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1121,
                                "end": 1127
                              },
                              "start": 1119,
                              "end": 1127
                            },
                            "start": 1117,
                            "end": 1127
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1109,
                          "end": 1127
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1129,
                        "end": 1140
                      },
                      "expression": false,
                      "start": 1067,
                      "end": 1140
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1055,
                    "end": 1140
                  }
                ],
                "start": 823,
                "end": 1146
              },
              "abstract": false,
              "declare": false,
              "start": 814,
              "end": 1146
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 807,
            "end": 1146
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1169,
                "end": 1171
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1187,
                          "end": 1193
                        },
                        "typeArguments": null,
                        "start": 1187,
                        "end": 1193
                      },
                      "start": 1185,
                      "end": 1193
                    },
                    "start": 1182,
                    "end": 1194
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1207,
                            "end": 1213
                          },
                          "start": 1205,
                          "end": 1213
                        },
                        "start": 1204,
                        "end": 1213
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1216,
                          "end": 1218
                        },
                        "typeArguments": null,
                        "start": 1216,
                        "end": 1218
                      },
                      "start": 1214,
                      "end": 1218
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1203,
                    "end": 1219
                  }
                ],
                "start": 1172,
                "end": 1225
              },
              "declare": false,
              "start": 1159,
              "end": 1225
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1152,
            "end": 1225
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1240
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1243,
              "end": 1244
            },
            "importKind": "value",
            "start": 1231,
            "end": 1245
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1257,
              "end": 1259
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1262,
              "end": 1263
            },
            "importKind": "value",
            "start": 1250,
            "end": 1264
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1276,
              "end": 1278
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1281,
                "end": 1282
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1283,
                "end": 1284
              },
              "start": 1281,
              "end": 1284
            },
            "importKind": "value",
            "start": 1269,
            "end": 1285
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1297,
              "end": 1299
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1302,
              "end": 1303
            },
            "importKind": "value",
            "start": 1290,
            "end": 1304
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1316,
              "end": 1318
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1321,
                "end": 1322
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1323,
                "end": 1324
              },
              "start": 1321,
              "end": 1324
            },
            "importKind": "value",
            "start": 1309,
            "end": 1325
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1337,
              "end": 1339
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1342,
                  "end": 1343
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1345
                },
                "start": 1342,
                "end": 1345
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1346,
                "end": 1347
              },
              "start": 1342,
              "end": 1347
            },
            "importKind": "value",
            "start": 1330,
            "end": 1348
          }
        ],
        "start": 656,
        "end": 1350
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 643,
      "end": 1350
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 1362,
        "end": 1363
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
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1387,
                "end": 1389
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1404,
                          "end": 1405
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 1408,
                          "end": 1410
                        },
                        "definite": false,
                        "start": 1404,
                        "end": 1410
                      }
                    ],
                    "declare": false,
                    "start": 1400,
                    "end": 1411
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
                                "start": 1434,
                                "end": 1440
                              },
                              "start": 1432,
                              "end": 1440
                            },
                            "start": 1431,
                            "end": 1440
                          },
                          "init": null,
                          "definite": false,
                          "start": 1431,
                          "end": 1440
                        }
                      ],
                      "declare": false,
                      "start": 1427,
                      "end": 1441
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1420,
                    "end": 1441
                  }
                ],
                "start": 1390,
                "end": 1447
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1377,
              "end": 1447
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1370,
            "end": 1447
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1470,
                "end": 1472
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
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1497,
                                "end": 1503
                              },
                              "start": 1495,
                              "end": 1503
                            },
                            "start": 1494,
                            "end": 1503
                          },
                          "init": null,
                          "definite": false,
                          "start": 1494,
                          "end": 1503
                        }
                      ],
                      "declare": false,
                      "start": 1490,
                      "end": 1504
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1483,
                    "end": 1504
                  }
                ],
                "start": 1473,
                "end": 1510
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1460,
              "end": 1510
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1453,
            "end": 1510
          }
        ],
        "start": 1364,
        "end": 1512
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1352,
      "end": 1512
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 1524,
        "end": 1525
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
                "name": "m25",
                "optional": false,
                "typeAnnotation": null,
                "start": 1550,
                "end": 1553
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
                        "name": "m5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1581,
                        "end": 1583
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
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1612,
                                        "end": 1618
                                      },
                                      "start": 1610,
                                      "end": 1618
                                    },
                                    "start": 1609,
                                    "end": 1618
                                  },
                                  "init": null,
                                  "definite": false,
                                  "start": 1609,
                                  "end": 1618
                                }
                              ],
                              "declare": false,
                              "start": 1605,
                              "end": 1619
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 1598,
                            "end": 1619
                          }
                        ],
                        "start": 1584,
                        "end": 1629
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 1571,
                      "end": 1629
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1564,
                    "end": 1629
                  }
                ],
                "start": 1554,
                "end": 1635
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1540,
              "end": 1635
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1533,
            "end": 1635
          }
        ],
        "start": 1526,
        "end": 1637
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1514,
      "end": 1637
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1649,
        "end": 1652
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
                "name": "m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1676,
                "end": 1678
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
                        "name": "m2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1706,
                        "end": 1708
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
                                "name": "m3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1740,
                                "end": 1742
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
                                            "name": "c",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1775,
                                                "end": 1781
                                              },
                                              "start": 1773,
                                              "end": 1781
                                            },
                                            "start": 1772,
                                            "end": 1781
                                          },
                                          "init": null,
                                          "definite": false,
                                          "start": 1772,
                                          "end": 1781
                                        }
                                      ],
                                      "declare": false,
                                      "start": 1768,
                                      "end": 1782
                                    },
                                    "specifiers": [],
                                    "source": null,
                                    "exportKind": "value",
                                    "attributes": [],
                                    "start": 1761,
                                    "end": 1782
                                  }
                                ],
                                "start": 1743,
                                "end": 1796
                              },
                              "kind": "namespace",
                              "declare": false,
                              "global": false,
                              "start": 1730,
                              "end": 1796
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 1723,
                            "end": 1796
                          }
                        ],
                        "start": 1709,
                        "end": 1806
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 1696,
                      "end": 1806
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1689,
                    "end": 1806
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1832,
                        "end": 1833
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 20,
                              "raw": "20",
                              "start": 1857,
                              "end": 1859
                            },
                            "start": 1850,
                            "end": 1860
                          }
                        ],
                        "start": 1836,
                        "end": 1870
                      },
                      "expression": false,
                      "start": 1823,
                      "end": 1870
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1816,
                    "end": 1870
                  }
                ],
                "start": 1679,
                "end": 1876
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1666,
              "end": 1876
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1659,
            "end": 1876
          }
        ],
        "start": 1653,
        "end": 1878
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1639,
      "end": 1878
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1898,
        "end": 1900
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1918,
                    "end": 1919
                  },
                  "init": null,
                  "definite": false,
                  "start": 1918,
                  "end": 1919
                }
              ],
              "declare": false,
              "start": 1914,
              "end": 1920
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1907,
            "end": 1920
          }
        ],
        "start": 1901,
        "end": 1922
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 1880,
      "end": 1922
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1942,
        "end": 1944
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1962,
                    "end": 1963
                  },
                  "init": null,
                  "definite": false,
                  "start": 1962,
                  "end": 1963
                }
              ],
              "declare": false,
              "start": 1958,
              "end": 1964
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1951,
            "end": 1964
          }
        ],
        "start": 1945,
        "end": 1966
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 1924,
      "end": 1966
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m43",
        "optional": false,
        "typeAnnotation": null,
        "start": 1986,
        "end": 1989
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2007,
                    "end": 2008
                  },
                  "init": null,
                  "definite": false,
                  "start": 2007,
                  "end": 2008
                }
              ],
              "declare": false,
              "start": 2003,
              "end": 2009
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1996,
            "end": 2009
          }
        ],
        "start": 1990,
        "end": 2011
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 1968,
      "end": 2011
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m55",
        "optional": false,
        "typeAnnotation": null,
        "start": 2031,
        "end": 2034
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2052,
                    "end": 2053
                  },
                  "init": null,
                  "definite": false,
                  "start": 2052,
                  "end": 2053
                }
              ],
              "declare": false,
              "start": 2048,
              "end": 2054
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2041,
            "end": 2054
          }
        ],
        "start": 2035,
        "end": 2056
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 2013,
      "end": 2056
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m3",
        "raw": "\"m3\"",
        "start": 2073,
        "end": 2077
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2098,
                        "end": 2104
                      },
                      "start": 2096,
                      "end": 2104
                    },
                    "start": 2095,
                    "end": 2104
                  },
                  "init": null,
                  "definite": false,
                  "start": 2095,
                  "end": 2104
                }
              ],
              "declare": false,
              "start": 2091,
              "end": 2105
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2084,
            "end": 2105
          }
        ],
        "start": 2078,
        "end": 2107
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 2058,
      "end": 2107
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exportTests",
        "optional": false,
        "typeAnnotation": null,
        "start": 2119,
        "end": 2130
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
                "name": "C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2150,
                "end": 2159
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
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2178,
                      "end": 2180
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 30,
                              "raw": "30",
                              "start": 2204,
                              "end": 2206
                            },
                            "start": 2197,
                            "end": 2207
                          }
                        ],
                        "start": 2183,
                        "end": 2217
                      },
                      "expression": false,
                      "start": 2180,
                      "end": 2217
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2170,
                    "end": 2217
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2234,
                      "end": 2236
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\"",
                              "start": 2260,
                              "end": 2268
                            },
                            "start": 2253,
                            "end": 2269
                          }
                        ],
                        "start": 2239,
                        "end": 2279
                      },
                      "expression": false,
                      "start": 2236,
                      "end": 2279
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2227,
                    "end": 2279
                  }
                ],
                "start": 2160,
                "end": 2285
              },
              "abstract": false,
              "declare": false,
              "start": 2144,
              "end": 2285
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2137,
            "end": 2285
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2296,
              "end": 2306
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
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2325,
                    "end": 2327
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 30,
                            "raw": "30",
                            "start": 2351,
                            "end": 2353
                          },
                          "start": 2344,
                          "end": 2354
                        }
                      ],
                      "start": 2330,
                      "end": 2364
                    },
                    "expression": false,
                    "start": 2327,
                    "end": 2364
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2317,
                  "end": 2364
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2381,
                    "end": 2383
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2407,
                            "end": 2415
                          },
                          "start": 2400,
                          "end": 2416
                        }
                      ],
                      "start": 2386,
                      "end": 2426
                    },
                    "expression": false,
                    "start": 2383,
                    "end": 2426
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2374,
                  "end": 2426
                }
              ],
              "start": 2307,
              "end": 2432
            },
            "abstract": false,
            "declare": false,
            "start": 2290,
            "end": 2432
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2451,
                "end": 2460
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
                      "name": "getC2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2479,
                      "end": 2492
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2520,
                                "end": 2530
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2516,
                              "end": 2532
                            },
                            "start": 2509,
                            "end": 2533
                          }
                        ],
                        "start": 2495,
                        "end": 2543
                      },
                      "expression": false,
                      "start": 2492,
                      "end": 2543
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2471,
                    "end": 2543
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "setC2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2560,
                      "end": 2573
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2579,
                                "end": 2589
                              },
                              "typeArguments": null,
                              "start": 2579,
                              "end": 2589
                            },
                            "start": 2577,
                            "end": 2589
                          },
                          "start": 2574,
                          "end": 2589
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2591,
                        "end": 2602
                      },
                      "expression": false,
                      "start": 2573,
                      "end": 2602
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2552,
                    "end": 2602
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2623,
                      "end": 2625
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2653,
                                "end": 2663
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2649,
                              "end": 2665
                            },
                            "start": 2642,
                            "end": 2666
                          }
                        ],
                        "start": 2628,
                        "end": 2676
                      },
                      "expression": false,
                      "start": 2625,
                      "end": 2676
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2611,
                    "end": 2676
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getC1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2692,
                      "end": 2704
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2732,
                                "end": 2741
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2728,
                              "end": 2743
                            },
                            "start": 2721,
                            "end": 2744
                          }
                        ],
                        "start": 2707,
                        "end": 2754
                      },
                      "expression": false,
                      "start": 2704,
                      "end": 2754
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2685,
                    "end": 2754
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "setC1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2770,
                      "end": 2782
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2788,
                                "end": 2797
                              },
                              "typeArguments": null,
                              "start": 2788,
                              "end": 2797
                            },
                            "start": 2786,
                            "end": 2797
                          },
                          "start": 2783,
                          "end": 2797
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2799,
                        "end": 2810
                      },
                      "expression": false,
                      "start": 2782,
                      "end": 2810
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2763,
                    "end": 2810
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2830,
                      "end": 2832
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2860,
                                "end": 2869
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2856,
                              "end": 2871
                            },
                            "start": 2849,
                            "end": 2872
                          }
                        ],
                        "start": 2835,
                        "end": 2882
                      },
                      "expression": false,
                      "start": 2832,
                      "end": 2882
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2819,
                    "end": 2882
                  }
                ],
                "start": 2461,
                "end": 2888
              },
              "abstract": false,
              "declare": false,
              "start": 2445,
              "end": 2888
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2438,
            "end": 2888
          }
        ],
        "start": 2131,
        "end": 2890
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2109,
      "end": 2890
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mAmbient",
        "optional": false,
        "typeAnnotation": null,
        "start": 2910,
        "end": 2918
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
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2931,
              "end": 2932
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
                    "name": "myProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2950,
                    "end": 2956
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2958,
                      "end": 2964
                    },
                    "start": 2956,
                    "end": 2964
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
                  "start": 2943,
                  "end": 2965
                }
              ],
              "start": 2933,
              "end": 2971
            },
            "abstract": false,
            "declare": false,
            "start": 2925,
            "end": 2971
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2986,
              "end": 2989
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2994,
                  "end": 2995
                },
                "typeArguments": null,
                "start": 2994,
                "end": 2995
              },
              "start": 2992,
              "end": 2995
            },
            "body": null,
            "expression": false,
            "start": 2977,
            "end": 2996
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
                  "name": "aVar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3011,
                        "end": 3012
                      },
                      "typeArguments": null,
                      "start": 3011,
                      "end": 3012
                    },
                    "start": 3009,
                    "end": 3012
                  },
                  "start": 3005,
                  "end": 3012
                },
                "init": null,
                "definite": false,
                "start": 3005,
                "end": 3012
              }
            ],
            "declare": false,
            "start": 3001,
            "end": 3013
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 3028,
              "end": 3029
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
                    "start": 3040,
                    "end": 3041
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3043,
                      "end": 3049
                    },
                    "start": 3041,
                    "end": 3049
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3040,
                  "end": 3050
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
                    "start": 3059,
                    "end": 3060
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3062,
                        "end": 3063
                      },
                      "typeArguments": null,
                      "start": 3062,
                      "end": 3063
                    },
                    "start": 3060,
                    "end": 3063
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3059,
                  "end": 3064
                }
              ],
              "start": 3030,
              "end": 3070
            },
            "declare": false,
            "start": 3018,
            "end": 3070
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 3080,
              "end": 3081
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3092,
                    "end": 3093
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 3092,
                  "end": 3093
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3103,
                    "end": 3104
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 3103,
                  "end": 3104
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3114,
                    "end": 3115
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 3114,
                  "end": 3115
                }
              ],
              "start": 3082,
              "end": 3121
            },
            "const": false,
            "declare": false,
            "start": 3075,
            "end": 3121
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3137,
              "end": 3139
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
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3156,
                    "end": 3157
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
                          "name": "myProp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3179,
                          "end": 3185
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3187,
                            "end": 3193
                          },
                          "start": 3185,
                          "end": 3193
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
                        "start": 3172,
                        "end": 3194
                      }
                    ],
                    "start": 3158,
                    "end": 3204
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 3150,
                  "end": 3204
                },
                {
                  "type": "TSDeclareFunction",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3223,
                    "end": 3226
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3230,
                        "end": 3231
                      },
                      "typeArguments": null,
                      "start": 3230,
                      "end": 3231
                    },
                    "start": 3228,
                    "end": 3231
                  },
                  "body": null,
                  "expression": false,
                  "start": 3214,
                  "end": 3232
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
                        "name": "aVar",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3251,
                              "end": 3252
                            },
                            "typeArguments": null,
                            "start": 3251,
                            "end": 3252
                          },
                          "start": 3249,
                          "end": 3252
                        },
                        "start": 3245,
                        "end": 3252
                      },
                      "init": null,
                      "definite": false,
                      "start": 3245,
                      "end": 3252
                    }
                  ],
                  "declare": false,
                  "start": 3241,
                  "end": 3253
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3272,
                    "end": 3273
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
                          "start": 3288,
                          "end": 3289
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3291,
                            "end": 3297
                          },
                          "start": 3289,
                          "end": 3297
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3288,
                        "end": 3298
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
                          "start": 3311,
                          "end": 3312
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3314,
                              "end": 3315
                            },
                            "typeArguments": null,
                            "start": 3314,
                            "end": 3315
                          },
                          "start": 3312,
                          "end": 3315
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3311,
                        "end": 3316
                      }
                    ],
                    "start": 3274,
                    "end": 3326
                  },
                  "declare": false,
                  "start": 3262,
                  "end": 3326
                },
                {
                  "type": "TSEnumDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3340,
                    "end": 3341
                  },
                  "body": {
                    "type": "TSEnumBody",
                    "members": [
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3356,
                          "end": 3357
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 3356,
                        "end": 3357
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3371,
                          "end": 3372
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 3371,
                        "end": 3372
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3386,
                          "end": 3387
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 3386,
                        "end": 3387
                      }
                    ],
                    "start": 3342,
                    "end": 3397
                  },
                  "const": false,
                  "declare": false,
                  "start": 3335,
                  "end": 3397
                }
              ],
              "start": 3140,
              "end": 3403
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 3127,
            "end": 3403
          }
        ],
        "start": 2919,
        "end": 3405
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 2892,
      "end": 3405
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 3416,
        "end": 3419
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mAmbient",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3435,
                  "end": 3443
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3444,
                  "end": 3447
                },
                "optional": false,
                "computed": false,
                "start": 3435,
                "end": 3447
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3435,
              "end": 3449
            },
            "start": 3428,
            "end": 3450
          }
        ],
        "start": 3422,
        "end": 3452
      },
      "expression": false,
      "start": 3407,
      "end": 3452
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
            "name": "cVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3458,
            "end": 3462
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "mAmbient",
                "optional": false,
                "typeAnnotation": null,
                "start": 3469,
                "end": 3477
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 3478,
                "end": 3479
              },
              "optional": false,
              "computed": false,
              "start": 3469,
              "end": 3479
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3465,
            "end": 3481
          },
          "definite": false,
          "start": 3458,
          "end": 3481
        }
      ],
      "declare": false,
      "start": 3454,
      "end": 3482
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
            "name": "aVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3487,
            "end": 3491
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mAmbient",
              "optional": false,
              "typeAnnotation": null,
              "start": 3494,
              "end": 3502
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "aVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 3503,
              "end": 3507
            },
            "optional": false,
            "computed": false,
            "start": 3494,
            "end": 3507
          },
          "definite": false,
          "start": 3487,
          "end": 3507
        }
      ],
      "declare": false,
      "start": 3483,
      "end": 3508
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
            "name": "bB",
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
                    "name": "mAmbient",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3517,
                    "end": 3525
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3526,
                    "end": 3527
                  },
                  "start": 3517,
                  "end": 3527
                },
                "typeArguments": null,
                "start": 3517,
                "end": 3527
              },
              "start": 3515,
              "end": 3527
            },
            "start": 3513,
            "end": 3527
          },
          "init": null,
          "definite": false,
          "start": 3513,
          "end": 3527
        }
      ],
      "declare": false,
      "start": 3509,
      "end": 3528
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
            "name": "eVar",
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
                    "name": "mAmbient",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3539,
                    "end": 3547
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3548,
                    "end": 3549
                  },
                  "start": 3539,
                  "end": 3549
                },
                "typeArguments": null,
                "start": 3539,
                "end": 3549
              },
              "start": 3537,
              "end": 3549
            },
            "start": 3533,
            "end": 3549
          },
          "init": null,
          "definite": false,
          "start": 3533,
          "end": 3549
        }
      ],
      "declare": false,
      "start": 3529,
      "end": 3550
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 3561,
        "end": 3566
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mAmbient",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3582,
                    "end": 3590
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3591,
                    "end": 3593
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3582,
                  "end": 3593
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3594,
                  "end": 3597
                },
                "optional": false,
                "computed": false,
                "start": 3582,
                "end": 3597
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3582,
              "end": 3599
            },
            "start": 3575,
            "end": 3600
          }
        ],
        "start": 3569,
        "end": 3602
      },
      "expression": false,
      "start": 3552,
      "end": 3602
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
            "name": "m3cVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3608,
            "end": 3614
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mAmbient",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3621,
                  "end": 3629
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3630,
                  "end": 3632
                },
                "optional": false,
                "computed": false,
                "start": 3621,
                "end": 3632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 3633,
                "end": 3634
              },
              "optional": false,
              "computed": false,
              "start": 3621,
              "end": 3634
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3617,
            "end": 3636
          },
          "definite": false,
          "start": 3608,
          "end": 3636
        }
      ],
      "declare": false,
      "start": 3604,
      "end": 3637
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
            "name": "m3aVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3642,
            "end": 3648
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "mAmbient",
                "optional": false,
                "typeAnnotation": null,
                "start": 3651,
                "end": 3659
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 3660,
                "end": 3662
              },
              "optional": false,
              "computed": false,
              "start": 3651,
              "end": 3662
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "aVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 3663,
              "end": 3667
            },
            "optional": false,
            "computed": false,
            "start": 3651,
            "end": 3667
          },
          "definite": false,
          "start": 3642,
          "end": 3667
        }
      ],
      "declare": false,
      "start": 3638,
      "end": 3668
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
            "name": "m3bB",
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
                      "name": "mAmbient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3679,
                      "end": 3687
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3688,
                      "end": 3690
                    },
                    "start": 3679,
                    "end": 3690
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3691,
                    "end": 3692
                  },
                  "start": 3679,
                  "end": 3692
                },
                "typeArguments": null,
                "start": 3679,
                "end": 3692
              },
              "start": 3677,
              "end": 3692
            },
            "start": 3673,
            "end": 3692
          },
          "init": null,
          "definite": false,
          "start": 3673,
          "end": 3692
        }
      ],
      "declare": false,
      "start": 3669,
      "end": 3693
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
            "name": "m3eVar",
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
                      "name": "mAmbient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3706,
                      "end": 3714
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3715,
                      "end": 3717
                    },
                    "start": 3706,
                    "end": 3717
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3718,
                    "end": 3719
                  },
                  "start": 3706,
                  "end": 3719
                },
                "typeArguments": null,
                "start": 3706,
                "end": 3719
              },
              "start": 3704,
              "end": 3719
            },
            "start": 3698,
            "end": 3719
          },
          "init": null,
          "definite": false,
          "start": 3698,
          "end": 3719
        }
      ],
      "declare": false,
      "start": 3694,
      "end": 3720
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3721
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
    "value": "a",
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
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 17,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 36,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Keyword",
    "value": "import",
    "start": 58,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "ma",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 76,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "mImport",
    "start": 86,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 100,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 118,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 138,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 157,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 177,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "m0",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 196,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 205,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 223,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 251,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 279,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 313,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "c1",
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
    "value": "public",
    "start": 332,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 345,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 363,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 376,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 378,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 394,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 402,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 421,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 428,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 435,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 450,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 460,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 478,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 495,
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
    "value": "number",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 507,
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
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 522,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 541,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 548,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 560,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 567,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 581,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 600,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 607,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 621,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 628,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 643,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 653,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 662,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 669,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 678,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 696,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 703,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 712,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 718,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
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
    "value": "export",
    "start": 731,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 738,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 747,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 753,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
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
    "value": "export",
    "start": 766,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 773,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 782,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 785,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 789,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 800,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 807,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 814,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 820,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 833,
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
    "value": ":",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 846,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 848,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 864,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 878,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 880,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 896,
    "end": 903
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 904,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 911,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 923,
    "end": 929
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 930,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 937,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 950,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 961,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 975,
    "end": 981
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 982,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1010,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 1025,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1055,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1068,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1078,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "n2",
    "start": 1085,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1089,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1097,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "n3",
    "start": 1105,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1109,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "n4",
    "start": 1117,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1121,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1152,
    "end": 1158
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1159,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 1169,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1187,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1207,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1216,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1231,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1238,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1250,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1257,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1269,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1276,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1290,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1297,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1309,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 1316,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1330,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 1337,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1352,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1370,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1377,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1387,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1400,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1408,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1420,
    "end": 1426
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1427,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1431,
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
    "value": "number",
    "start": 1434,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1453,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1460,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1470,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1483,
    "end": 1489
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1490,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1497,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1514,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1533,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1540,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "m25",
    "start": 1550,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1564,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1571,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1581,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1598,
    "end": 1604
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1605,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1612,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1639,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "m13",
    "start": 1649,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1659,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1666,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1676,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1689,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1696,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1706,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1723,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1730,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1740,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1761,
    "end": 1767
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1768,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1775,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1816,
    "end": 1822
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1823,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1850,
    "end": 1856
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1857,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1880,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1888,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1898,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1907,
    "end": 1913
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1914,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1924,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1932,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1942,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1951,
    "end": 1957
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1958,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1968,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1976,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "m43",
    "start": 1986,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1996,
    "end": 2002
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2003,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2013,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2021,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "m55",
    "start": 2031,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2041,
    "end": 2047
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2048,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2058,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 2066,
    "end": 2072
  },
  {
    "type": "String",
    "value": "\"m3\"",
    "start": 2073,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2084,
    "end": 2090
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2091,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2098,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2109,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "exportTests",
    "start": 2119,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2137,
    "end": 2143
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2144,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2150,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2170,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 2178,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2197,
    "end": 2203
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 2204,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2227,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 2234,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2253,
    "end": 2259
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2260,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2290,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2296,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2317,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 2325,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2344,
    "end": 2350
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 2351,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2374,
    "end": 2380
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 2381,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2400,
    "end": 2406
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2407,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2438,
    "end": 2444
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2445,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "C3_public",
    "start": 2451,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2471,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "getC2_private",
    "start": 2479,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2509,
    "end": 2515
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2516,
    "end": 2519
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2520,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2552,
    "end": 2559
  },
  {
    "type": "Identifier",
    "value": "setC2_private",
    "start": 2560,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2574,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2579,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2611,
    "end": 2618
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2619,
    "end": 2622
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2623,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2642,
    "end": 2648
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2649,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2653,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2685,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "getC1_public",
    "start": 2692,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2721,
    "end": 2727
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2728,
    "end": 2731
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2732,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2763,
    "end": 2769
  },
  {
    "type": "Identifier",
    "value": "setC1_public",
    "start": 2770,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2783,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2788,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2819,
    "end": 2825
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2826,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2830,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2849,
    "end": 2855
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2856,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2860,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2892,
    "end": 2899
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2900,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "mAmbient",
    "start": 2910,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2925,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2943,
    "end": 2949
  },
  {
    "type": "Identifier",
    "value": "myProp",
    "start": 2950,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2958,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2977,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2986,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3001,
    "end": 3004
  },
  {
    "type": "Identifier",
    "value": "aVar",
    "start": 3005,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3018,
    "end": 3027
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3040,
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
    "value": "number",
    "start": 3043,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 3075,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3127,
    "end": 3136
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 3137,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3150,
    "end": 3155
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3172,
    "end": 3178
  },
  {
    "type": "Identifier",
    "value": "myProp",
    "start": 3179,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3187,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3214,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3223,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3241,
    "end": 3244
  },
  {
    "type": "Identifier",
    "value": "aVar",
    "start": 3245,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3262,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3291,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 3335,
    "end": 3339
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 3340,
    "end": 3341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3342,
    "end": 3343
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3407,
    "end": 3415
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3416,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3420,
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
    "value": "return",
    "start": 3428,
    "end": 3434
  },
  {
    "type": "Identifier",
    "value": "mAmbient",
    "start": 3435,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3444,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3454,
    "end": 3457
  },
  {
    "type": "Identifier",
    "value": "cVar",
    "start": 3458,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3465,
    "end": 3468
  },
  {
    "type": "Identifier",
    "value": "mAmbient",
    "start": 3469,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3483,
    "end": 3486
  },
  {
    "type": "Identifier",
    "value": "aVar",
    "start": 3487,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Identifier",
    "value": "mAmbient",
    "start": 3494,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3502,
    "end": 3503
  },
  {
    "type": "Identifier",
    "value": "aVar",
    "start": 3503,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3507,
    "end": 3508
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3509,
    "end": 3512
  },
  {
    "type": "Identifier",
    "value": "bB",
    "start": 3513,
    "end": 3515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Identifier",
    "value": "mAmbient",
    "start": 3517,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3529,
    "end": 3532
  },
  {
    "type": "Identifier",
    "value": "eVar",
    "start": 3533,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Identifier",
    "value": "mAmbient",
    "start": 3539,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3552,
    "end": 3560
  },
  {
    "type": "Identifier",
    "value": "m3foo",
    "start": 3561,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3575,
    "end": 3581
  },
  {
    "type": "Identifier",
    "value": "mAmbient",
    "start": 3582,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3590,
    "end": 3591
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 3591,
    "end": 3593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3593,
    "end": 3594
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3594,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3604,
    "end": 3607
  },
  {
    "type": "Identifier",
    "value": "m3cVar",
    "start": 3608,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3617,
    "end": 3620
  },
  {
    "type": "Identifier",
    "value": "mAmbient",
    "start": 3621,
    "end": 3629
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3629,
    "end": 3630
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 3630,
    "end": 3632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3633,
    "end": 3634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3635,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3638,
    "end": 3641
  },
  {
    "type": "Identifier",
    "value": "m3aVar",
    "start": 3642,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Identifier",
    "value": "mAmbient",
    "start": 3651,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 3660,
    "end": 3662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Identifier",
    "value": "aVar",
    "start": 3663,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3669,
    "end": 3672
  },
  {
    "type": "Identifier",
    "value": "m3bB",
    "start": 3673,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Identifier",
    "value": "mAmbient",
    "start": 3679,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 3688,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3694,
    "end": 3697
  },
  {
    "type": "Identifier",
    "value": "m3eVar",
    "start": 3698,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Identifier",
    "value": "mAmbient",
    "start": 3706,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3714,
    "end": 3715
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 3715,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3719,
    "end": 3720
  }
]
```
