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
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 300
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
              "start": 304,
              "end": 310
            },
            "start": 302,
            "end": 310
          },
          "start": 301,
          "end": 310
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 313,
          "end": 319
        },
        "start": 311,
        "end": 319
      },
      "body": null,
      "expression": false,
      "start": 288,
      "end": 320
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 330,
        "end": 333
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
              "type": "TSNumberKeyword",
              "start": 337,
              "end": 343
            },
            "start": 335,
            "end": 343
          },
          "start": 334,
          "end": 343
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 346,
          "end": 352
        },
        "start": 344,
        "end": 352
      },
      "body": null,
      "expression": false,
      "start": 321,
      "end": 353
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 366
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
              "value": null,
              "raw": "null",
              "start": 378,
              "end": 382
            },
            "start": 371,
            "end": 383
          }
        ],
        "start": 369,
        "end": 385
      },
      "expression": false,
      "start": 354,
      "end": 385
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
            "start": 391,
            "end": 392
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 398
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 408
              }
            ],
            "optional": false,
            "start": 395,
            "end": 409
          },
          "definite": false,
          "start": 391,
          "end": 409
        }
      ],
      "declare": false,
      "start": 387,
      "end": 410
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
                "start": 418,
                "end": 424
              },
              "start": 416,
              "end": 424
            },
            "start": 415,
            "end": 424
          },
          "init": null,
          "definite": false,
          "start": 415,
          "end": 424
        }
      ],
      "declare": false,
      "start": 411,
      "end": 425
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 463
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 464,
            "end": 466
          }
        ],
        "optional": false,
        "start": 460,
        "end": 467
      },
      "directive": null,
      "start": 460,
      "end": 468
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 606
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
              "start": 610,
              "end": 616
            },
            "start": 608,
            "end": 616
          },
          "start": 607,
          "end": 616
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
              "start": 621,
              "end": 627
            },
            "start": 619,
            "end": 627
          },
          "start": 618,
          "end": 627
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 630,
          "end": 636
        },
        "start": 628,
        "end": 636
      },
      "body": null,
      "expression": false,
      "start": 594,
      "end": 637
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 647,
        "end": 650
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 651,
              "end": 652
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 651,
            "end": 652
          }
        ],
        "start": 650,
        "end": 653
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
              "start": 657,
              "end": 663
            },
            "start": 655,
            "end": 663
          },
          "start": 654,
          "end": 663
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
                "start": 668,
                "end": 669
              },
              "typeArguments": null,
              "start": 668,
              "end": 669
            },
            "start": 666,
            "end": 669
          },
          "start": 665,
          "end": 669
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
            "start": 672,
            "end": 673
          },
          "typeArguments": null,
          "start": 672,
          "end": 673
        },
        "start": 670,
        "end": 673
      },
      "body": null,
      "expression": false,
      "start": 638,
      "end": 674
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 684,
        "end": 687
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
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 708
            },
            "start": 692,
            "end": 709
          }
        ],
        "start": 690,
        "end": 711
      },
      "expression": false,
      "start": 675,
      "end": 711
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
            "start": 717,
            "end": 718
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 724
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
                    "start": 725,
                    "end": 729
                  },
                  "typeArguments": null,
                  "start": 725,
                  "end": 729
                }
              ],
              "start": 724,
              "end": 730
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 731,
                "end": 732
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 743
              }
            ],
            "optional": false,
            "start": 721,
            "end": 744
          },
          "definite": false,
          "start": 717,
          "end": 744
        }
      ],
      "declare": false,
      "start": 713,
      "end": 745
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
                  "start": 753,
                  "end": 757
                },
                "typeArguments": null,
                "start": 753,
                "end": 757
              },
              "start": 751,
              "end": 757
            },
            "start": 750,
            "end": 757
          },
          "init": null,
          "definite": false,
          "start": 750,
          "end": 757
        }
      ],
      "declare": false,
      "start": 746,
      "end": 758
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
            "start": 882,
            "end": 883
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 889
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 890,
                "end": 891
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 893,
                "end": 895
              }
            ],
            "optional": false,
            "start": 886,
            "end": 896
          },
          "definite": false,
          "start": 882,
          "end": 896
        }
      ],
      "declare": false,
      "start": 878,
      "end": 897
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1020,
          "end": 1023
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
                "start": 1024,
                "end": 1028
              },
              "typeArguments": null,
              "start": 1024,
              "end": 1028
            }
          ],
          "start": 1023,
          "end": 1029
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1030,
            "end": 1032
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1034,
            "end": 1035
          }
        ],
        "optional": false,
        "start": 1020,
        "end": 1036
      },
      "directive": null,
      "start": 1020,
      "end": 1037
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1172,
          "end": 1175
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1176,
            "end": 1178
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1180,
            "end": 1181
          }
        ],
        "optional": false,
        "start": 1172,
        "end": 1182
      },
      "directive": null,
      "start": 1172,
      "end": 1183
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1272,
        "end": 1275
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 1276,
              "end": 1277
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1276,
            "end": 1277
          }
        ],
        "start": 1275,
        "end": 1278
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
                "start": 1282,
                "end": 1283
              },
              "typeArguments": null,
              "start": 1282,
              "end": 1283
            },
            "start": 1280,
            "end": 1283
          },
          "start": 1279,
          "end": 1283
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1286,
          "end": 1292
        },
        "start": 1284,
        "end": 1292
      },
      "body": null,
      "expression": false,
      "start": 1263,
      "end": 1293
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1303,
        "end": 1306
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 1307,
              "end": 1308
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1307,
            "end": 1308
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1310,
              "end": 1311
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1310,
            "end": 1311
          }
        ],
        "start": 1306,
        "end": 1312
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
              "start": 1316,
              "end": 1322
            },
            "start": 1314,
            "end": 1322
          },
          "start": 1313,
          "end": 1322
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
                "start": 1327,
                "end": 1328
              },
              "typeArguments": null,
              "start": 1327,
              "end": 1328
            },
            "start": 1325,
            "end": 1328
          },
          "start": 1324,
          "end": 1328
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
                "start": 1333,
                "end": 1334
              },
              "typeArguments": null,
              "start": 1333,
              "end": 1334
            },
            "start": 1331,
            "end": 1334
          },
          "start": 1330,
          "end": 1334
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
            "start": 1337,
            "end": 1338
          },
          "typeArguments": null,
          "start": 1337,
          "end": 1338
        },
        "start": 1335,
        "end": 1338
      },
      "body": null,
      "expression": false,
      "start": 1294,
      "end": 1339
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1349,
        "end": 1352
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 1353,
              "end": 1354
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1353,
            "end": 1354
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1356,
              "end": 1357
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1356,
            "end": 1357
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1359,
              "end": 1360
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1359,
            "end": 1360
          }
        ],
        "start": 1352,
        "end": 1361
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
                "start": 1365,
                "end": 1366
              },
              "typeArguments": null,
              "start": 1365,
              "end": 1366
            },
            "start": 1363,
            "end": 1366
          },
          "start": 1362,
          "end": 1366
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
                "start": 1371,
                "end": 1372
              },
              "typeArguments": null,
              "start": 1371,
              "end": 1372
            },
            "start": 1369,
            "end": 1372
          },
          "start": 1368,
          "end": 1372
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
                "start": 1377,
                "end": 1378
              },
              "typeArguments": null,
              "start": 1377,
              "end": 1378
            },
            "start": 1375,
            "end": 1378
          },
          "start": 1374,
          "end": 1378
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1381,
          "end": 1387
        },
        "start": 1379,
        "end": 1387
      },
      "body": null,
      "expression": false,
      "start": 1340,
      "end": 1388
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1398,
        "end": 1401
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
              "value": null,
              "raw": "null",
              "start": 1413,
              "end": 1417
            },
            "start": 1406,
            "end": 1418
          }
        ],
        "start": 1404,
        "end": 1420
      },
      "expression": false,
      "start": 1389,
      "end": 1420
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
            "start": 1426,
            "end": 1427
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1430,
              "end": 1433
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1434,
                "end": 1435
              }
            ],
            "optional": false,
            "start": 1430,
            "end": 1436
          },
          "definite": false,
          "start": 1426,
          "end": 1436
        }
      ],
      "declare": false,
      "start": 1422,
      "end": 1437
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
            "start": 1442,
            "end": 1443
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1446,
              "end": 1449
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1450,
                "end": 1452
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1454,
                "end": 1455
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1457,
                "end": 1459
              }
            ],
            "optional": false,
            "start": 1446,
            "end": 1460
          },
          "definite": false,
          "start": 1442,
          "end": 1460
        }
      ],
      "declare": false,
      "start": 1438,
      "end": 1461
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
            "start": 1466,
            "end": 1467
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1470,
              "end": 1473
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 1474,
                "end": 1475
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 1477,
                "end": 1478
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 1480,
                "end": 1481
              }
            ],
            "optional": false,
            "start": 1470,
            "end": 1482
          },
          "definite": false,
          "start": 1466,
          "end": 1482
        }
      ],
      "declare": false,
      "start": 1462,
      "end": 1483
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
                "start": 1491,
                "end": 1497
              },
              "start": 1489,
              "end": 1497
            },
            "start": 1488,
            "end": 1497
          },
          "init": null,
          "definite": false,
          "start": 1488,
          "end": 1497
        }
      ],
      "declare": false,
      "start": 1484,
      "end": 1498
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
            "start": 1617,
            "end": 1618
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1621,
              "end": 1624
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1625,
                  "end": 1631
                }
              ],
              "start": 1624,
              "end": 1632
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 1633,
                "end": 1634
              }
            ],
            "optional": false,
            "start": 1621,
            "end": 1635
          },
          "definite": false,
          "start": 1617,
          "end": 1635
        }
      ],
      "declare": false,
      "start": 1613,
      "end": 1636
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
            "start": 1641,
            "end": 1642
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1645,
              "end": 1648
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 1649,
                  "end": 1655
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1657,
                  "end": 1663
                }
              ],
              "start": 1648,
              "end": 1664
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1665,
                "end": 1667
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1669,
                "end": 1671
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1673,
                "end": 1675
              }
            ],
            "optional": false,
            "start": 1645,
            "end": 1676
          },
          "definite": false,
          "start": 1641,
          "end": 1676
        }
      ],
      "declare": false,
      "start": 1637,
      "end": 1677
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
            "start": 1682,
            "end": 1683
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1686,
              "end": 1689
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1690,
                  "end": 1696
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1698,
                  "end": 1704
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1706,
                  "end": 1712
                }
              ],
              "start": 1689,
              "end": 1713
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1714,
                "end": 1716
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1718,
                "end": 1720
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1722,
                "end": 1723
              }
            ],
            "optional": false,
            "start": 1686,
            "end": 1724
          },
          "definite": false,
          "start": 1682,
          "end": 1724
        }
      ],
      "declare": false,
      "start": 1678,
      "end": 1725
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1833,
          "end": 1836
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1837,
              "end": 1843
            },
            {
              "type": "TSNumberKeyword",
              "start": 1845,
              "end": 1851
            },
            {
              "type": "TSNumberKeyword",
              "start": 1853,
              "end": 1859
            },
            {
              "type": "TSNumberKeyword",
              "start": 1861,
              "end": 1867
            }
          ],
          "start": 1836,
          "end": 1868
        },
        "arguments": [],
        "optional": false,
        "start": 1833,
        "end": 1870
      },
      "directive": null,
      "start": 1833,
      "end": 1871
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1985,
        "end": 1988
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 1989,
              "end": 1990
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1999,
              "end": 2005
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1989,
            "end": 2005
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2007,
              "end": 2008
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2017,
              "end": 2023
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2007,
            "end": 2023
          }
        ],
        "start": 1988,
        "end": 2024
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
                "start": 2028,
                "end": 2029
              },
              "typeArguments": null,
              "start": 2028,
              "end": 2029
            },
            "start": 2026,
            "end": 2029
          },
          "start": 2025,
          "end": 2029
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
                "start": 2034,
                "end": 2035
              },
              "typeArguments": null,
              "start": 2034,
              "end": 2035
            },
            "start": 2032,
            "end": 2035
          },
          "start": 2031,
          "end": 2035
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1976,
      "end": 2037
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2047,
        "end": 2050
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 2051,
              "end": 2052
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2061,
              "end": 2067
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2051,
            "end": 2067
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2069,
              "end": 2070
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2079,
              "end": 2085
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2069,
            "end": 2085
          }
        ],
        "start": 2050,
        "end": 2086
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
                "start": 2090,
                "end": 2091
              },
              "typeArguments": null,
              "start": 2090,
              "end": 2091
            },
            "start": 2088,
            "end": 2091
          },
          "start": 2087,
          "end": 2091
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
                "start": 2096,
                "end": 2097
              },
              "typeArguments": null,
              "start": 2096,
              "end": 2097
            },
            "start": 2094,
            "end": 2097
          },
          "start": 2093,
          "end": 2097
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2038,
      "end": 2099
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2109,
        "end": 2112
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
        "start": 2115,
        "end": 2118
      },
      "expression": false,
      "start": 2100,
      "end": 2118
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2119,
          "end": 2122
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2123,
              "end": 2129
            },
            {
              "type": "TSNumberKeyword",
              "start": 2131,
              "end": 2137
            }
          ],
          "start": 2122,
          "end": 2138
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2139,
            "end": 2141
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2143,
            "end": 2144
          }
        ],
        "optional": false,
        "start": 2119,
        "end": 2145
      },
      "directive": null,
      "start": 2119,
      "end": 2146
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2147,
          "end": 2150
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2151,
              "end": 2157
            },
            {
              "type": "TSNumberKeyword",
              "start": 2159,
              "end": 2165
            }
          ],
          "start": 2150,
          "end": 2166
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2167,
            "end": 2168
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2170,
            "end": 2172
          }
        ],
        "optional": false,
        "start": 2147,
        "end": 2173
      },
      "directive": null,
      "start": 2147,
      "end": 2174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2184,
          "end": 2187
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2188,
              "end": 2194
            },
            {
              "type": "TSStringKeyword",
              "start": 2196,
              "end": 2202
            }
          ],
          "start": 2187,
          "end": 2203
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2204,
            "end": 2206
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2208,
            "end": 2209
          }
        ],
        "optional": false,
        "start": 2184,
        "end": 2210
      },
      "directive": null,
      "start": 2184,
      "end": 2211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2221,
          "end": 2224
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2225,
              "end": 2231
            },
            {
              "type": "TSStringKeyword",
              "start": 2233,
              "end": 2239
            }
          ],
          "start": 2224,
          "end": 2240
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2241,
            "end": 2242
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2244,
            "end": 2246
          }
        ],
        "optional": false,
        "start": 2221,
        "end": 2247
      },
      "directive": null,
      "start": 2221,
      "end": 2248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2363,
          "end": 2366
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2367,
            "end": 2369
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2371,
            "end": 2372
          }
        ],
        "optional": false,
        "start": 2363,
        "end": 2373
      },
      "directive": null,
      "start": 2363,
      "end": 2374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2375,
          "end": 2378
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2379,
            "end": 2380
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2382,
            "end": 2384
          }
        ],
        "optional": false,
        "start": 2375,
        "end": 2385
      },
      "directive": null,
      "start": 2375,
      "end": 2386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2387,
          "end": 2390
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2391,
            "end": 2392
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 2394,
            "end": 2403
          }
        ],
        "optional": false,
        "start": 2387,
        "end": 2404
      },
      "directive": null,
      "start": 2387,
      "end": 2405
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2406,
          "end": 2409
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2410,
            "end": 2412
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2414,
            "end": 2418
          }
        ],
        "optional": false,
        "start": 2406,
        "end": 2419
      },
      "directive": null,
      "start": 2406,
      "end": 2420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2523,
          "end": 2526
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSBooleanKeyword",
              "start": 2527,
              "end": 2534
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 2536,
                "end": 2540
              },
              "typeArguments": null,
              "start": 2536,
              "end": 2540
            }
          ],
          "start": 2526,
          "end": 2541
        },
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2542,
            "end": 2546
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2548,
            "end": 2552
          }
        ],
        "optional": false,
        "start": 2523,
        "end": 2553
      },
      "directive": null,
      "start": 2523,
      "end": 2554
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2684,
          "end": 2687
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2688,
            "end": 2692
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2694,
            "end": 2698
          }
        ],
        "optional": false,
        "start": 2684,
        "end": 2699
      },
      "directive": null,
      "start": 2684,
      "end": 2700
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2710,
          "end": 2713
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2714,
            "end": 2718
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2720,
            "end": 2724
          }
        ],
        "optional": false,
        "start": 2710,
        "end": 2725
      },
      "directive": null,
      "start": 2710,
      "end": 2726
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2830,
        "end": 2833
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                      "start": 2841,
                      "end": 2847
                    },
                    "start": 2839,
                    "end": 2847
                  },
                  "start": 2838,
                  "end": 2847
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2852,
                  "end": 2856
                },
                "start": 2849,
                "end": 2856
              },
              "start": 2837,
              "end": 2856
            },
            "start": 2835,
            "end": 2856
          },
          "start": 2834,
          "end": 2856
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2859,
          "end": 2865
        },
        "start": 2857,
        "end": 2865
      },
      "body": null,
      "expression": false,
      "start": 2821,
      "end": 2866
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2876,
        "end": 2879
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                      "start": 2887,
                      "end": 2893
                    },
                    "start": 2885,
                    "end": 2893
                  },
                  "start": 2884,
                  "end": 2893
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2898,
                  "end": 2902
                },
                "start": 2895,
                "end": 2902
              },
              "start": 2883,
              "end": 2902
            },
            "start": 2881,
            "end": 2902
          },
          "start": 2880,
          "end": 2902
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2905,
          "end": 2911
        },
        "start": 2903,
        "end": 2911
      },
      "body": null,
      "expression": false,
      "start": 2867,
      "end": 2912
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2922,
        "end": 2925
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
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2937,
              "end": 2946
            },
            "start": 2930,
            "end": 2947
          }
        ],
        "start": 2928,
        "end": 2949
      },
      "expression": false,
      "start": 2913,
      "end": 2949
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
            "start": 2954,
            "end": 2955
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2958,
              "end": 2961
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
                    "start": 2963,
                    "end": 2964
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
                      "start": 2969,
                      "end": 2970
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2971,
                      "end": 2978
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2969,
                    "end": 2978
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2969,
                  "end": 2980
                },
                "id": null,
                "generator": false,
                "start": 2962,
                "end": 2980
              }
            ],
            "optional": false,
            "start": 2958,
            "end": 2981
          },
          "definite": false,
          "start": 2954,
          "end": 2981
        }
      ],
      "declare": false,
      "start": 2950,
      "end": 2982
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
            "start": 2987,
            "end": 2988
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2991,
              "end": 2994
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
                    "start": 2996,
                    "end": 2997
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
                      "start": 3002,
                      "end": 3003
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "substr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3004,
                      "end": 3010
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3002,
                    "end": 3010
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3011,
                      "end": 3012
                    }
                  ],
                  "optional": false,
                  "start": 3002,
                  "end": 3013
                },
                "id": null,
                "generator": false,
                "start": 2995,
                "end": 3013
              }
            ],
            "optional": false,
            "start": 2991,
            "end": 3014
          },
          "definite": false,
          "start": 2987,
          "end": 3014
        }
      ],
      "declare": false,
      "start": 2983,
      "end": 3015
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3016
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
    "value": "function",
    "start": 288,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 297,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 304,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 313,
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
    "value": "function",
    "start": 321,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 330,
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
    "value": "s",
    "start": 334,
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
    "value": "number",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 346,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 354,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 363,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 371,
    "end": 377
  },
  {
    "type": "Null",
    "value": "null",
    "start": 378,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 395,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 399,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 411,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 418,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 594,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 621,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 630,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 638,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 647,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 657,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 675,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 684,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 692,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 699,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 713,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 721,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 725,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 734,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 746,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "d",
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
    "value": "Date",
    "start": 753,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 878,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 886,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
    "end": 890
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 891,
    "end": 892
  },
  {
    "type": "String",
    "value": "''",
    "start": 893,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1024,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "String",
    "value": "''",
    "start": 1030,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1172,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "String",
    "value": "''",
    "start": 1176,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1263,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1286,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1294,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1303,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1316,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": ")",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1340,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1349,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ",",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "t",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1381,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1389,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1398,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1406,
    "end": 1412
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1413,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1422,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1430,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1446,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "String",
    "value": "''",
    "start": 1450,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "String",
    "value": "''",
    "start": 1457,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1462,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1470,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1484,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1491,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1613,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1621,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1625,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1637,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1645,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1649,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1657,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "String",
    "value": "''",
    "start": 1665,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "String",
    "value": "''",
    "start": 1669,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "String",
    "value": "''",
    "start": 1673,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1678,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1686,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1690,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1698,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1706,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "String",
    "value": "''",
    "start": 1714,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "String",
    "value": "''",
    "start": 1718,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1833,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1837,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1845,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1853,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1861,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1976,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1991,
    "end": 1998
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1999,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2009,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2017,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2038,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2047,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2053,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2061,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2071,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2079,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2100,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2109,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2119,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2123,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2131,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "String",
    "value": "''",
    "start": 2139,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2147,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2151,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2159,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "String",
    "value": "''",
    "start": 2170,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2184,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2188,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2196,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "String",
    "value": "''",
    "start": 2204,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2221,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2225,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2233,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "String",
    "value": "''",
    "start": 2244,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2363,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "String",
    "value": "''",
    "start": 2367,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2375,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "String",
    "value": "''",
    "start": 2382,
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
    "value": ";",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2387,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2394,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2406,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "String",
    "value": "''",
    "start": 2410,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2414,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2523,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2527,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2536,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2542,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2548,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2684,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2688,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2694,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2710,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2714,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2720,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2821,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2830,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2841,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2849,
    "end": 2851
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2852,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2859,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2867,
    "end": 2875
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2876,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2887,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2895,
    "end": 2897
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2898,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2905,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2913,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2922,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2930,
    "end": 2936
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2937,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2950,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2958,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2966,
    "end": 2968
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 2971,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2983,
    "end": 2986
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2991,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2999,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 3004,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3014,
    "end": 3015
  }
]
```
