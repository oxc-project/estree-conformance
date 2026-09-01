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
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 14
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 21,
            "end": 31
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
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
            "start": 37,
            "end": 54
          }
        ],
        "start": 15,
        "end": 56
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 75
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 92
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 99,
            "end": 109
          }
        ],
        "start": 93,
        "end": 111
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 111
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 130
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 147
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 154,
            "end": 164
          }
        ],
        "start": 148,
        "end": 166
      },
      "abstract": false,
      "declare": false,
      "start": 112,
      "end": 166
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived3",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 185
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 202
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 209,
            "end": 219
          }
        ],
        "start": 203,
        "end": 221
      },
      "abstract": false,
      "declare": false,
      "start": 167,
      "end": 221
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 236
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 251,
                    "end": 257
                  },
                  "start": 249,
                  "end": 257
                },
                "start": 248,
                "end": 257
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 260,
                "end": 266
              },
              "start": 258,
              "end": 266
            },
            "start": 243,
            "end": 267
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "type": "TSNumberKeyword",
                    "start": 280,
                    "end": 286
                  },
                  "start": 278,
                  "end": 286
                },
                "start": 277,
                "end": 286
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 289,
                "end": 295
              },
              "start": 287,
              "end": 295
            },
            "start": 272,
            "end": 296
          }
        ],
        "start": 237,
        "end": 298
      },
      "declare": false,
      "start": 223,
      "end": 298
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
            "name": "fn1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 319
                },
                "typeArguments": null,
                "start": 316,
                "end": 319
              },
              "start": 314,
              "end": 319
            },
            "start": 311,
            "end": 319
          },
          "init": null,
          "definite": false,
          "start": 311,
          "end": 319
        }
      ],
      "declare": true,
      "start": 299,
      "end": 320
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 391
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 401
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 402,
                "end": 411
              }
            ],
            "start": 394,
            "end": 412
          },
          "definite": false,
          "start": 390,
          "end": 412
        }
      ],
      "declare": false,
      "start": 386,
      "end": 413
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 421,
                "end": 427
              },
              "start": 419,
              "end": 427
            },
            "start": 418,
            "end": 427
          },
          "init": null,
          "definite": false,
          "start": 418,
          "end": 427
        }
      ],
      "declare": false,
      "start": 414,
      "end": 428
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 469
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 470,
            "end": 472
          }
        ],
        "start": 462,
        "end": 473
      },
      "directive": null,
      "start": 462,
      "end": 474
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 610,
        "end": 613
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 628,
                    "end": 634
                  },
                  "start": 626,
                  "end": 634
                },
                "start": 625,
                "end": 634
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 639,
                    "end": 645
                  },
                  "start": 637,
                  "end": 645
                },
                "start": 636,
                "end": 645
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 648,
                "end": 654
              },
              "start": 646,
              "end": 654
            },
            "start": 620,
            "end": 655
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 665,
                    "end": 666
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 665,
                  "end": 666
                }
              ],
              "start": 664,
              "end": 667
            },
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
                    "start": 671,
                    "end": 677
                  },
                  "start": 669,
                  "end": 677
                },
                "start": 668,
                "end": 677
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
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
                      "start": 682,
                      "end": 683
                    },
                    "typeArguments": null,
                    "start": 682,
                    "end": 683
                  },
                  "start": 680,
                  "end": 683
                },
                "start": 679,
                "end": 683
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 686,
                  "end": 687
                },
                "typeArguments": null,
                "start": 686,
                "end": 687
              },
              "start": 684,
              "end": 687
            },
            "start": 660,
            "end": 688
          }
        ],
        "start": 614,
        "end": 690
      },
      "declare": false,
      "start": 600,
      "end": 690
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
            "name": "fn2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 708,
                  "end": 711
                },
                "typeArguments": null,
                "start": 708,
                "end": 711
              },
              "start": 706,
              "end": 711
            },
            "start": 703,
            "end": 711
          },
          "init": null,
          "definite": false,
          "start": 703,
          "end": 711
        }
      ],
      "declare": true,
      "start": 691,
      "end": 712
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 718,
            "end": 719
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 726,
              "end": 729
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
                    "start": 730,
                    "end": 734
                  },
                  "typeArguments": null,
                  "start": 730,
                  "end": 734
                }
              ],
              "start": 729,
              "end": 735
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 736,
                "end": 737
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 739,
                "end": 748
              }
            ],
            "start": 722,
            "end": 749
          },
          "definite": false,
          "start": 718,
          "end": 749
        }
      ],
      "declare": false,
      "start": 714,
      "end": 750
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 758,
                  "end": 762
                },
                "typeArguments": null,
                "start": 758,
                "end": 762
              },
              "start": 756,
              "end": 762
            },
            "start": 755,
            "end": 762
          },
          "init": null,
          "definite": false,
          "start": 755,
          "end": 762
        }
      ],
      "declare": false,
      "start": 751,
      "end": 763
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 887,
            "end": 888
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 898
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 899,
                "end": 900
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 902,
                "end": 904
              }
            ],
            "start": 891,
            "end": 905
          },
          "definite": false,
          "start": 887,
          "end": 905
        }
      ],
      "declare": false,
      "start": 883,
      "end": 906
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1033,
          "end": 1036
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
                "start": 1037,
                "end": 1041
              },
              "typeArguments": null,
              "start": 1037,
              "end": 1041
            }
          ],
          "start": 1036,
          "end": 1042
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1043,
            "end": 1045
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1047,
            "end": 1048
          }
        ],
        "start": 1029,
        "end": 1049
      },
      "directive": null,
      "start": 1029,
      "end": 1050
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1189,
          "end": 1192
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1193,
            "end": 1195
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1197,
            "end": 1198
          }
        ],
        "start": 1185,
        "end": 1199
      },
      "directive": null,
      "start": 1185,
      "end": 1200
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1290,
        "end": 1293
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1304,
                    "end": 1305
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1304,
                  "end": 1305
                }
              ],
              "start": 1303,
              "end": 1306
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
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
                      "start": 1310,
                      "end": 1311
                    },
                    "typeArguments": null,
                    "start": 1310,
                    "end": 1311
                  },
                  "start": 1308,
                  "end": 1311
                },
                "start": 1307,
                "end": 1311
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1314,
                "end": 1320
              },
              "start": 1312,
              "end": 1320
            },
            "start": 1300,
            "end": 1321
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1330,
                    "end": 1331
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1330,
                  "end": 1331
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1333,
                    "end": 1334
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1333,
                  "end": 1334
                }
              ],
              "start": 1329,
              "end": 1335
            },
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
                    "start": 1339,
                    "end": 1345
                  },
                  "start": 1337,
                  "end": 1345
                },
                "start": 1336,
                "end": 1345
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
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
                      "start": 1350,
                      "end": 1351
                    },
                    "typeArguments": null,
                    "start": 1350,
                    "end": 1351
                  },
                  "start": 1348,
                  "end": 1351
                },
                "start": 1347,
                "end": 1351
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
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
                      "start": 1356,
                      "end": 1357
                    },
                    "typeArguments": null,
                    "start": 1356,
                    "end": 1357
                  },
                  "start": 1354,
                  "end": 1357
                },
                "start": 1353,
                "end": 1357
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1360,
                  "end": 1361
                },
                "typeArguments": null,
                "start": 1360,
                "end": 1361
              },
              "start": 1358,
              "end": 1361
            },
            "start": 1326,
            "end": 1362
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1371,
                    "end": 1372
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1371,
                  "end": 1372
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1374,
                    "end": 1375
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1374,
                  "end": 1375
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1377,
                    "end": 1378
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1377,
                  "end": 1378
                }
              ],
              "start": 1370,
              "end": 1379
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1383,
                      "end": 1384
                    },
                    "typeArguments": null,
                    "start": 1383,
                    "end": 1384
                  },
                  "start": 1381,
                  "end": 1384
                },
                "start": 1380,
                "end": 1384
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
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
                      "start": 1389,
                      "end": 1390
                    },
                    "typeArguments": null,
                    "start": 1389,
                    "end": 1390
                  },
                  "start": 1387,
                  "end": 1390
                },
                "start": 1386,
                "end": 1390
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
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
                      "start": 1395,
                      "end": 1396
                    },
                    "typeArguments": null,
                    "start": 1395,
                    "end": 1396
                  },
                  "start": 1393,
                  "end": 1396
                },
                "start": 1392,
                "end": 1396
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1399,
                "end": 1405
              },
              "start": 1397,
              "end": 1405
            },
            "start": 1367,
            "end": 1406
          }
        ],
        "start": 1294,
        "end": 1408
      },
      "declare": false,
      "start": 1280,
      "end": 1408
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
            "name": "fn3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1426,
                  "end": 1429
                },
                "typeArguments": null,
                "start": 1426,
                "end": 1429
              },
              "start": 1424,
              "end": 1429
            },
            "start": 1421,
            "end": 1429
          },
          "init": null,
          "definite": false,
          "start": 1421,
          "end": 1429
        }
      ],
      "declare": true,
      "start": 1409,
      "end": 1430
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1436,
            "end": 1437
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1444,
              "end": 1447
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1448,
                "end": 1449
              }
            ],
            "start": 1440,
            "end": 1450
          },
          "definite": false,
          "start": 1436,
          "end": 1450
        }
      ],
      "declare": false,
      "start": 1432,
      "end": 1451
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1456,
            "end": 1457
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1464,
              "end": 1467
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1468,
                "end": 1470
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1472,
                "end": 1473
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1475,
                "end": 1477
              }
            ],
            "start": 1460,
            "end": 1478
          },
          "definite": false,
          "start": 1456,
          "end": 1478
        }
      ],
      "declare": false,
      "start": 1452,
      "end": 1479
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1484,
            "end": 1485
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1492,
              "end": 1495
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 1496,
                "end": 1497
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 1499,
                "end": 1500
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 1502,
                "end": 1503
              }
            ],
            "start": 1488,
            "end": 1504
          },
          "definite": false,
          "start": 1484,
          "end": 1504
        }
      ],
      "declare": false,
      "start": 1480,
      "end": 1505
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1513,
                "end": 1519
              },
              "start": 1511,
              "end": 1519
            },
            "start": 1510,
            "end": 1519
          },
          "init": null,
          "definite": false,
          "start": 1510,
          "end": 1519
        }
      ],
      "declare": false,
      "start": 1506,
      "end": 1520
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1639,
            "end": 1640
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1647,
              "end": 1650
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1651,
                  "end": 1657
                }
              ],
              "start": 1650,
              "end": 1658
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 1659,
                "end": 1660
              }
            ],
            "start": 1643,
            "end": 1661
          },
          "definite": false,
          "start": 1639,
          "end": 1661
        }
      ],
      "declare": false,
      "start": 1635,
      "end": 1662
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1667,
            "end": 1668
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1675,
              "end": 1678
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 1679,
                  "end": 1685
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1687,
                  "end": 1693
                }
              ],
              "start": 1678,
              "end": 1694
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1695,
                "end": 1697
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1699,
                "end": 1701
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1703,
                "end": 1705
              }
            ],
            "start": 1671,
            "end": 1706
          },
          "definite": false,
          "start": 1667,
          "end": 1706
        }
      ],
      "declare": false,
      "start": 1663,
      "end": 1707
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1712,
            "end": 1713
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1720,
              "end": 1723
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1724,
                  "end": 1730
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1732,
                  "end": 1738
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1740,
                  "end": 1746
                }
              ],
              "start": 1723,
              "end": 1747
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1748,
                "end": 1750
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1752,
                "end": 1754
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1756,
                "end": 1757
              }
            ],
            "start": 1716,
            "end": 1758
          },
          "definite": false,
          "start": 1712,
          "end": 1758
        }
      ],
      "declare": false,
      "start": 1708,
      "end": 1759
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1871,
          "end": 1874
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1875,
              "end": 1881
            },
            {
              "type": "TSNumberKeyword",
              "start": 1883,
              "end": 1889
            },
            {
              "type": "TSNumberKeyword",
              "start": 1891,
              "end": 1897
            },
            {
              "type": "TSNumberKeyword",
              "start": 1899,
              "end": 1905
            }
          ],
          "start": 1874,
          "end": 1906
        },
        "arguments": [],
        "start": 1867,
        "end": 1908
      },
      "directive": null,
      "start": 1867,
      "end": 1909
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2024,
        "end": 2027
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 2038,
                    "end": 2039
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 2048,
                    "end": 2054
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2038,
                  "end": 2054
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2056,
                    "end": 2057
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 2066,
                    "end": 2072
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2056,
                  "end": 2072
                }
              ],
              "start": 2037,
              "end": 2073
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
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
                      "start": 2077,
                      "end": 2078
                    },
                    "typeArguments": null,
                    "start": 2077,
                    "end": 2078
                  },
                  "start": 2075,
                  "end": 2078
                },
                "start": 2074,
                "end": 2078
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
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
                      "start": 2083,
                      "end": 2084
                    },
                    "typeArguments": null,
                    "start": 2083,
                    "end": 2084
                  },
                  "start": 2081,
                  "end": 2084
                },
                "start": 2080,
                "end": 2084
              }
            ],
            "returnType": null,
            "start": 2034,
            "end": 2086
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 2095,
                    "end": 2096
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 2105,
                    "end": 2111
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2095,
                  "end": 2111
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2113,
                    "end": 2114
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 2123,
                    "end": 2129
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2113,
                  "end": 2129
                }
              ],
              "start": 2094,
              "end": 2130
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
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
                      "start": 2134,
                      "end": 2135
                    },
                    "typeArguments": null,
                    "start": 2134,
                    "end": 2135
                  },
                  "start": 2132,
                  "end": 2135
                },
                "start": 2131,
                "end": 2135
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
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
                      "start": 2140,
                      "end": 2141
                    },
                    "typeArguments": null,
                    "start": 2140,
                    "end": 2141
                  },
                  "start": 2138,
                  "end": 2141
                },
                "start": 2137,
                "end": 2141
              }
            ],
            "returnType": null,
            "start": 2091,
            "end": 2143
          }
        ],
        "start": 2028,
        "end": 2145
      },
      "declare": false,
      "start": 2014,
      "end": 2145
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
            "name": "fn4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2163,
                  "end": 2166
                },
                "typeArguments": null,
                "start": 2163,
                "end": 2166
              },
              "start": 2161,
              "end": 2166
            },
            "start": 2158,
            "end": 2166
          },
          "init": null,
          "definite": false,
          "start": 2158,
          "end": 2166
        }
      ],
      "declare": true,
      "start": 2146,
      "end": 2167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2173,
          "end": 2176
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2177,
              "end": 2183
            },
            {
              "type": "TSNumberKeyword",
              "start": 2185,
              "end": 2191
            }
          ],
          "start": 2176,
          "end": 2192
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2193,
            "end": 2195
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2197,
            "end": 2198
          }
        ],
        "start": 2169,
        "end": 2199
      },
      "directive": null,
      "start": 2169,
      "end": 2200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2205,
          "end": 2208
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2209,
              "end": 2215
            },
            {
              "type": "TSNumberKeyword",
              "start": 2217,
              "end": 2223
            }
          ],
          "start": 2208,
          "end": 2224
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2225,
            "end": 2226
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2228,
            "end": 2230
          }
        ],
        "start": 2201,
        "end": 2231
      },
      "directive": null,
      "start": 2201,
      "end": 2232
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2246,
          "end": 2249
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2250,
              "end": 2256
            },
            {
              "type": "TSStringKeyword",
              "start": 2258,
              "end": 2264
            }
          ],
          "start": 2249,
          "end": 2265
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2266,
            "end": 2268
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2270,
            "end": 2271
          }
        ],
        "start": 2242,
        "end": 2272
      },
      "directive": null,
      "start": 2242,
      "end": 2273
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2287,
          "end": 2290
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2291,
              "end": 2297
            },
            {
              "type": "TSStringKeyword",
              "start": 2299,
              "end": 2305
            }
          ],
          "start": 2290,
          "end": 2306
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2307,
            "end": 2308
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2310,
            "end": 2312
          }
        ],
        "start": 2283,
        "end": 2313
      },
      "directive": null,
      "start": 2283,
      "end": 2314
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2433,
          "end": 2436
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2437,
            "end": 2439
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2441,
            "end": 2442
          }
        ],
        "start": 2429,
        "end": 2443
      },
      "directive": null,
      "start": 2429,
      "end": 2444
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2449,
          "end": 2452
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2453,
            "end": 2454
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2456,
            "end": 2458
          }
        ],
        "start": 2445,
        "end": 2459
      },
      "directive": null,
      "start": 2445,
      "end": 2460
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2465,
          "end": 2468
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2469,
            "end": 2470
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 2472,
            "end": 2481
          }
        ],
        "start": 2461,
        "end": 2482
      },
      "directive": null,
      "start": 2461,
      "end": 2483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2488,
          "end": 2491
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2492,
            "end": 2494
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2496,
            "end": 2500
          }
        ],
        "start": 2484,
        "end": 2501
      },
      "directive": null,
      "start": 2484,
      "end": 2502
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2609,
          "end": 2612
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSBooleanKeyword",
              "start": 2613,
              "end": 2620
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 2622,
                "end": 2626
              },
              "typeArguments": null,
              "start": 2622,
              "end": 2626
            }
          ],
          "start": 2612,
          "end": 2627
        },
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2628,
            "end": 2632
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2634,
            "end": 2638
          }
        ],
        "start": 2605,
        "end": 2639
      },
      "directive": null,
      "start": 2605,
      "end": 2640
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2774,
          "end": 2777
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2778,
            "end": 2782
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2784,
            "end": 2788
          }
        ],
        "start": 2770,
        "end": 2789
      },
      "directive": null,
      "start": 2770,
      "end": 2790
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2804,
          "end": 2807
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2808,
            "end": 2812
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2814,
            "end": 2818
          }
        ],
        "start": 2800,
        "end": 2819
      },
      "directive": null,
      "start": 2800,
      "end": 2820
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2925,
        "end": 2928
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2946,
                            "end": 2952
                          },
                          "start": 2944,
                          "end": 2952
                        },
                        "start": 2943,
                        "end": 2952
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2957,
                        "end": 2961
                      },
                      "start": 2954,
                      "end": 2961
                    },
                    "start": 2942,
                    "end": 2961
                  },
                  "start": 2940,
                  "end": 2961
                },
                "start": 2939,
                "end": 2961
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2964,
                "end": 2970
              },
              "start": 2962,
              "end": 2970
            },
            "start": 2935,
            "end": 2971
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2987,
                            "end": 2993
                          },
                          "start": 2985,
                          "end": 2993
                        },
                        "start": 2984,
                        "end": 2993
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2998,
                        "end": 3002
                      },
                      "start": 2995,
                      "end": 3002
                    },
                    "start": 2983,
                    "end": 3002
                  },
                  "start": 2981,
                  "end": 3002
                },
                "start": 2980,
                "end": 3002
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3005,
                "end": 3011
              },
              "start": 3003,
              "end": 3011
            },
            "start": 2976,
            "end": 3012
          }
        ],
        "start": 2929,
        "end": 3014
      },
      "declare": false,
      "start": 2915,
      "end": 3014
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
            "name": "fn5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3032,
                  "end": 3035
                },
                "typeArguments": null,
                "start": 3032,
                "end": 3035
              },
              "start": 3030,
              "end": 3035
            },
            "start": 3027,
            "end": 3035
          },
          "init": null,
          "definite": false,
          "start": 3027,
          "end": 3035
        }
      ],
      "declare": true,
      "start": 3015,
      "end": 3036
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 3041,
            "end": 3042
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3049,
              "end": 3052
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3054,
                    "end": 3055
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3060,
                      "end": 3061
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3062,
                      "end": 3069
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3060,
                    "end": 3069
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3060,
                  "end": 3071
                },
                "id": null,
                "generator": false,
                "start": 3053,
                "end": 3071
              }
            ],
            "start": 3045,
            "end": 3072
          },
          "definite": false,
          "start": 3041,
          "end": 3072
        }
      ],
      "declare": false,
      "start": 3037,
      "end": 3073
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 3078,
            "end": 3079
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3086,
              "end": 3089
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3091,
                    "end": 3092
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3097,
                      "end": 3098
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "substr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3099,
                      "end": 3105
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3097,
                    "end": 3105
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3106,
                      "end": 3107
                    }
                  ],
                  "optional": false,
                  "start": 3097,
                  "end": 3108
                },
                "id": null,
                "generator": false,
                "start": 3090,
                "end": 3108
              }
            ],
            "start": 3082,
            "end": 3109
          },
          "definite": false,
          "start": 3078,
          "end": 3109
        }
      ],
      "declare": false,
      "start": 3074,
      "end": 3110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3110
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
    "value": "SomeBase",
    "start": 6,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 21,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 37,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "SomeDerived1",
    "start": 63,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 76,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 84,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 99,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 112,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "SomeDerived2",
    "start": 118,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 131,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 139,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 154,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "m",
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
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 167,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "SomeDerived3",
    "start": 173,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 186,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 194,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 209,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 223,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 243,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 251,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 272,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 299,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 307,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 311,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 386,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 394,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 402,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 414,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 421,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 462,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 466,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 600,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 620,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 628,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 639,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "number",
    "start": 648,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 671,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 686,
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
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 691,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 699,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 703,
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
    "value": "fn2",
    "start": 708,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 714,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 722,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 726,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 730,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 739,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 749,
    "end": 750
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 751,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 758,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 883,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 891,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 895,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 900,
    "end": 901
  },
  {
    "type": "String",
    "value": "''",
    "start": 902,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1029,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1037,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "String",
    "value": "''",
    "start": 1043,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1185,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1189,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "String",
    "value": "''",
    "start": 1193,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1280,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1290,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1300,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1314,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1326,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1339,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1367,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1399,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1409,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1417,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1421,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1426,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1432,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1440,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1444,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1452,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1460,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1464,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "String",
    "value": "''",
    "start": 1468,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "String",
    "value": "''",
    "start": 1475,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1480,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1488,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1492,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1506,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1513,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1635,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1643,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1647,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1651,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1663,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1671,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1675,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1679,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1687,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "String",
    "value": "''",
    "start": 1695,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "String",
    "value": "''",
    "start": 1699,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "String",
    "value": "''",
    "start": 1703,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1708,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1716,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1720,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1724,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1732,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1740,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "String",
    "value": "''",
    "start": 1748,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "String",
    "value": "''",
    "start": 1752,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1867,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1871,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1875,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1883,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1891,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1899,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2014,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2024,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2034,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2040,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2048,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2058,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2066,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2091,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2097,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2105,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2115,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2123,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2146,
    "end": 2153
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2154,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2158,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2163,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2169,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2173,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2177,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2185,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "String",
    "value": "''",
    "start": 2193,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2198,
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
    "value": "new",
    "start": 2201,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2205,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2209,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2217,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "String",
    "value": "''",
    "start": 2228,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2242,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2246,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2250,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2258,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "String",
    "value": "''",
    "start": 2266,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2283,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2287,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2291,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2299,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "String",
    "value": "''",
    "start": 2310,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2429,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2433,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "String",
    "value": "''",
    "start": 2437,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2445,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2449,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "String",
    "value": "''",
    "start": 2456,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2461,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2465,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2472,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2484,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2488,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "String",
    "value": "''",
    "start": 2492,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2496,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2605,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2609,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2613,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2622,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2628,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2634,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2770,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2774,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2778,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2784,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2800,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2804,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2808,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2814,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2915,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2925,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2935,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2946,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2954,
    "end": 2956
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2957,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2964,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2976,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2987,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2995,
    "end": 2997
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2998,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3005,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3015,
    "end": 3022
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3023,
    "end": 3026
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 3027,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 3032,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3037,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3045,
    "end": 3048
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 3049,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3057,
    "end": 3059
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 3062,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3074,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3082,
    "end": 3085
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 3086,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3094,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 3099,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3109,
    "end": 3110
  }
]
```
