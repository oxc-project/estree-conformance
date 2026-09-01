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
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
        "end": 297
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
              "start": 304,
              "end": 315
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 319,
                      "end": 325
                    },
                    "start": 317,
                    "end": 325
                  },
                  "start": 316,
                  "end": 325
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 315,
              "end": 327
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 304,
            "end": 327
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
              "start": 332,
              "end": 343
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 347,
                      "end": 353
                    },
                    "start": 345,
                    "end": 353
                  },
                  "start": 344,
                  "end": 353
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 343,
              "end": 355
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 332,
            "end": 355
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
              "start": 360,
              "end": 371
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
                "body": [],
                "start": 374,
                "end": 377
              },
              "expression": false,
              "start": 371,
              "end": 377
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 360,
            "end": 377
          }
        ],
        "start": 298,
        "end": 379
      },
      "abstract": false,
      "declare": false,
      "start": 288,
      "end": 379
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
          "start": 385,
          "end": 388
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 398
          }
        ],
        "start": 381,
        "end": 399
      },
      "directive": null,
      "start": 381,
      "end": 400
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
          "start": 438,
          "end": 441
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 442,
            "end": 444
          }
        ],
        "start": 434,
        "end": 445
      },
      "directive": null,
      "start": 434,
      "end": 446
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 581
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
              "start": 582,
              "end": 583
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 582,
            "end": 583
          }
        ],
        "start": 581,
        "end": 584
      },
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
              "start": 591,
              "end": 602
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 606,
                      "end": 612
                    },
                    "start": 604,
                    "end": 612
                  },
                  "start": 603,
                  "end": 612
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
                      "start": 617,
                      "end": 623
                    },
                    "start": 615,
                    "end": 623
                  },
                  "start": 614,
                  "end": 623
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 602,
              "end": 625
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 591,
            "end": 625
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
              "start": 630,
              "end": 641
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 645,
                      "end": 651
                    },
                    "start": 643,
                    "end": 651
                  },
                  "start": 642,
                  "end": 651
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
                        "start": 656,
                        "end": 657
                      },
                      "typeArguments": null,
                      "start": 656,
                      "end": 657
                    },
                    "start": 654,
                    "end": 657
                  },
                  "start": 653,
                  "end": 657
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 641,
              "end": 659
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 630,
            "end": 659
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
              "start": 664,
              "end": 675
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
                "body": [],
                "start": 678,
                "end": 681
              },
              "expression": false,
              "start": 675,
              "end": 681
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 664,
            "end": 681
          }
        ],
        "start": 585,
        "end": 683
      },
      "abstract": false,
      "declare": false,
      "start": 572,
      "end": 683
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
            "start": 689,
            "end": 690
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 700
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
                    "start": 701,
                    "end": 705
                  },
                  "typeArguments": null,
                  "start": 701,
                  "end": 705
                }
              ],
              "start": 700,
              "end": 706
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 707,
                "end": 708
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 710,
                "end": 719
              }
            ],
            "start": 693,
            "end": 720
          },
          "definite": false,
          "start": 689,
          "end": 720
        }
      ],
      "declare": false,
      "start": 685,
      "end": 721
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
            "start": 845,
            "end": 846
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 853,
              "end": 856
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 857,
                "end": 858
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 860,
                "end": 862
              }
            ],
            "start": 849,
            "end": 863
          },
          "definite": false,
          "start": 845,
          "end": 863
        }
      ],
      "declare": false,
      "start": 841,
      "end": 864
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
          "start": 991,
          "end": 994
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
                "start": 995,
                "end": 999
              },
              "typeArguments": null,
              "start": 995,
              "end": 999
            }
          ],
          "start": 994,
          "end": 1000
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1001,
            "end": 1003
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1005,
            "end": 1006
          }
        ],
        "start": 987,
        "end": 1007
      },
      "directive": null,
      "start": 987,
      "end": 1008
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
          "start": 1144,
          "end": 1147
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1148,
            "end": 1150
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1152,
            "end": 1153
          }
        ],
        "start": 1140,
        "end": 1154
      },
      "directive": null,
      "start": 1140,
      "end": 1155
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1241,
        "end": 1244
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
              "start": 1245,
              "end": 1246
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1245,
            "end": 1246
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1248,
              "end": 1249
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1248,
            "end": 1249
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1251,
              "end": 1252
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1251,
            "end": 1252
          }
        ],
        "start": 1244,
        "end": 1253
      },
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
              "start": 1260,
              "end": 1271
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1275,
                        "end": 1276
                      },
                      "typeArguments": null,
                      "start": 1275,
                      "end": 1276
                    },
                    "start": 1273,
                    "end": 1276
                  },
                  "start": 1272,
                  "end": 1276
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1271,
              "end": 1278
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1260,
            "end": 1278
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
              "start": 1283,
              "end": 1294
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 1298,
                      "end": 1304
                    },
                    "start": 1296,
                    "end": 1304
                  },
                  "start": 1295,
                  "end": 1304
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
                        "start": 1309,
                        "end": 1310
                      },
                      "typeArguments": null,
                      "start": 1309,
                      "end": 1310
                    },
                    "start": 1307,
                    "end": 1310
                  },
                  "start": 1306,
                  "end": 1310
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
                        "start": 1315,
                        "end": 1316
                      },
                      "typeArguments": null,
                      "start": 1315,
                      "end": 1316
                    },
                    "start": 1313,
                    "end": 1316
                  },
                  "start": 1312,
                  "end": 1316
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1294,
              "end": 1318
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1283,
            "end": 1318
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
              "start": 1323,
              "end": 1334
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                        "start": 1338,
                        "end": 1339
                      },
                      "typeArguments": null,
                      "start": 1338,
                      "end": 1339
                    },
                    "start": 1336,
                    "end": 1339
                  },
                  "start": 1335,
                  "end": 1339
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
                        "start": 1344,
                        "end": 1345
                      },
                      "typeArguments": null,
                      "start": 1344,
                      "end": 1345
                    },
                    "start": 1342,
                    "end": 1345
                  },
                  "start": 1341,
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
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1334,
              "end": 1353
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1323,
            "end": 1353
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
              "start": 1358,
              "end": 1369
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
                "body": [],
                "start": 1372,
                "end": 1375
              },
              "expression": false,
              "start": 1369,
              "end": 1375
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1358,
            "end": 1375
          }
        ],
        "start": 1254,
        "end": 1377
      },
      "abstract": false,
      "declare": false,
      "start": 1235,
      "end": 1377
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
          "start": 1383,
          "end": 1386
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1387,
            "end": 1388
          }
        ],
        "start": 1379,
        "end": 1389
      },
      "directive": null,
      "start": 1379,
      "end": 1390
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
          "start": 1395,
          "end": 1398
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1399,
            "end": 1401
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1403,
            "end": 1404
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1406,
            "end": 1408
          }
        ],
        "start": 1391,
        "end": 1409
      },
      "directive": null,
      "start": 1391,
      "end": 1410
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
          "start": 1415,
          "end": 1418
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 1419,
            "end": 1420
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 1422,
            "end": 1423
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 1425,
            "end": 1426
          }
        ],
        "start": 1411,
        "end": 1427
      },
      "directive": null,
      "start": 1411,
      "end": 1428
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
          "start": 1547,
          "end": 1550
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1551,
              "end": 1557
            }
          ],
          "start": 1550,
          "end": 1558
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1559,
            "end": 1560
          }
        ],
        "start": 1543,
        "end": 1561
      },
      "directive": null,
      "start": 1543,
      "end": 1562
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
          "start": 1576,
          "end": 1579
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1580,
              "end": 1586
            },
            {
              "type": "TSStringKeyword",
              "start": 1588,
              "end": 1594
            }
          ],
          "start": 1579,
          "end": 1595
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1596,
            "end": 1598
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1600,
            "end": 1602
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1604,
            "end": 1606
          }
        ],
        "start": 1572,
        "end": 1607
      },
      "directive": null,
      "start": 1572,
      "end": 1608
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
          "start": 1623,
          "end": 1626
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1627,
              "end": 1633
            },
            {
              "type": "TSStringKeyword",
              "start": 1635,
              "end": 1641
            },
            {
              "type": "TSStringKeyword",
              "start": 1643,
              "end": 1649
            }
          ],
          "start": 1626,
          "end": 1650
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1651,
            "end": 1653
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1655,
            "end": 1657
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1659,
            "end": 1660
          }
        ],
        "start": 1619,
        "end": 1661
      },
      "directive": null,
      "start": 1619,
      "end": 1662
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
          "start": 1774,
          "end": 1777
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1778,
              "end": 1784
            },
            {
              "type": "TSNumberKeyword",
              "start": 1786,
              "end": 1792
            },
            {
              "type": "TSNumberKeyword",
              "start": 1794,
              "end": 1800
            },
            {
              "type": "TSNumberKeyword",
              "start": 1802,
              "end": 1808
            }
          ],
          "start": 1777,
          "end": 1809
        },
        "arguments": [],
        "start": 1770,
        "end": 1811
      },
      "directive": null,
      "start": 1770,
      "end": 1812
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1923,
        "end": 1926
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
              "start": 1927,
              "end": 1928
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1937,
              "end": 1943
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1927,
            "end": 1943
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1945,
              "end": 1946
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1955,
              "end": 1961
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1945,
            "end": 1961
          }
        ],
        "start": 1926,
        "end": 1962
      },
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
              "start": 1969,
              "end": 1980
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1984,
                        "end": 1985
                      },
                      "typeArguments": null,
                      "start": 1984,
                      "end": 1985
                    },
                    "start": 1982,
                    "end": 1985
                  },
                  "start": 1981,
                  "end": 1985
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
                        "start": 1990,
                        "end": 1991
                      },
                      "typeArguments": null,
                      "start": 1990,
                      "end": 1991
                    },
                    "start": 1988,
                    "end": 1991
                  },
                  "start": 1987,
                  "end": 1991
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1980,
              "end": 1993
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1969,
            "end": 1993
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
              "start": 1998,
              "end": 2009
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
                "body": [],
                "start": 2012,
                "end": 2015
              },
              "expression": false,
              "start": 2009,
              "end": 2015
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1998,
            "end": 2015
          }
        ],
        "start": 1963,
        "end": 2017
      },
      "abstract": false,
      "declare": false,
      "start": 1917,
      "end": 2017
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
          "start": 2022,
          "end": 2025
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2026,
              "end": 2032
            },
            {
              "type": "TSNumberKeyword",
              "start": 2034,
              "end": 2040
            }
          ],
          "start": 2025,
          "end": 2041
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2042,
            "end": 2044
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2046,
            "end": 2047
          }
        ],
        "start": 2018,
        "end": 2048
      },
      "directive": null,
      "start": 2018,
      "end": 2049
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
          "start": 2054,
          "end": 2057
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2058,
              "end": 2064
            },
            {
              "type": "TSNumberKeyword",
              "start": 2066,
              "end": 2072
            }
          ],
          "start": 2057,
          "end": 2073
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2074,
            "end": 2075
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2077,
            "end": 2079
          }
        ],
        "start": 2050,
        "end": 2080
      },
      "directive": null,
      "start": 2050,
      "end": 2081
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
          "start": 2095,
          "end": 2098
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2099,
              "end": 2105
            },
            {
              "type": "TSStringKeyword",
              "start": 2107,
              "end": 2113
            }
          ],
          "start": 2098,
          "end": 2114
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2115,
            "end": 2117
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2119,
            "end": 2120
          }
        ],
        "start": 2091,
        "end": 2121
      },
      "directive": null,
      "start": 2091,
      "end": 2122
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
          "start": 2136,
          "end": 2139
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2140,
              "end": 2146
            },
            {
              "type": "TSStringKeyword",
              "start": 2148,
              "end": 2154
            }
          ],
          "start": 2139,
          "end": 2155
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2156,
            "end": 2157
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2159,
            "end": 2161
          }
        ],
        "start": 2132,
        "end": 2162
      },
      "directive": null,
      "start": 2132,
      "end": 2163
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
          "start": 2290,
          "end": 2293
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2294,
            "end": 2296
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2298,
            "end": 2299
          }
        ],
        "start": 2286,
        "end": 2300
      },
      "directive": null,
      "start": 2286,
      "end": 2301
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
          "start": 2306,
          "end": 2309
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2310,
            "end": 2311
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2313,
            "end": 2315
          }
        ],
        "start": 2302,
        "end": 2316
      },
      "directive": null,
      "start": 2302,
      "end": 2317
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
          "start": 2331,
          "end": 2334
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2335,
            "end": 2336
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 2338,
            "end": 2347
          }
        ],
        "start": 2327,
        "end": 2348
      },
      "directive": null,
      "start": 2327,
      "end": 2349
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
            "value": null,
            "raw": "null",
            "start": 2371,
            "end": 2375
          }
        ],
        "start": 2359,
        "end": 2376
      },
      "directive": null,
      "start": 2359,
      "end": 2377
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
          "start": 2484,
          "end": 2487
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSBooleanKeyword",
              "start": 2488,
              "end": 2495
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 2497,
                "end": 2501
              },
              "typeArguments": null,
              "start": 2497,
              "end": 2501
            }
          ],
          "start": 2487,
          "end": 2502
        },
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2503,
            "end": 2507
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2509,
            "end": 2513
          }
        ],
        "start": 2480,
        "end": 2514
      },
      "directive": null,
      "start": 2480,
      "end": 2515
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
          "start": 2649,
          "end": 2652
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2653,
            "end": 2657
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2659,
            "end": 2663
          }
        ],
        "start": 2645,
        "end": 2664
      },
      "directive": null,
      "start": 2645,
      "end": 2665
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
          "start": 2679,
          "end": 2682
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2683,
            "end": 2687
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2689,
            "end": 2693
          }
        ],
        "start": 2675,
        "end": 2694
      },
      "directive": null,
      "start": 2675,
      "end": 2695
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2796,
        "end": 2799
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
              "start": 2806,
              "end": 2817
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                              "start": 2825,
                              "end": 2831
                            },
                            "start": 2823,
                            "end": 2831
                          },
                          "start": 2822,
                          "end": 2831
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2836,
                          "end": 2840
                        },
                        "start": 2833,
                        "end": 2840
                      },
                      "start": 2821,
                      "end": 2840
                    },
                    "start": 2819,
                    "end": 2840
                  },
                  "start": 2818,
                  "end": 2840
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2817,
              "end": 2842
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2806,
            "end": 2842
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
              "start": 2847,
              "end": 2858
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                              "start": 2866,
                              "end": 2872
                            },
                            "start": 2864,
                            "end": 2872
                          },
                          "start": 2863,
                          "end": 2872
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2877,
                          "end": 2881
                        },
                        "start": 2874,
                        "end": 2881
                      },
                      "start": 2862,
                      "end": 2881
                    },
                    "start": 2860,
                    "end": 2881
                  },
                  "start": 2859,
                  "end": 2881
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2858,
              "end": 2883
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2847,
            "end": 2883
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
              "start": 2888,
              "end": 2899
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2911,
                      "end": 2920
                    },
                    "start": 2904,
                    "end": 2921
                  }
                ],
                "start": 2902,
                "end": 2923
              },
              "expression": false,
              "start": 2899,
              "end": 2923
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2888,
            "end": 2923
          }
        ],
        "start": 2800,
        "end": 2925
      },
      "abstract": false,
      "declare": false,
      "start": 2790,
      "end": 2925
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2930,
          "end": 2933
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
                "start": 2935,
                "end": 2936
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
                  "start": 2941,
                  "end": 2942
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2943,
                  "end": 2950
                },
                "optional": false,
                "computed": false,
                "start": 2941,
                "end": 2950
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2941,
              "end": 2952
            },
            "id": null,
            "generator": false,
            "start": 2934,
            "end": 2952
          }
        ],
        "start": 2926,
        "end": 2953
      },
      "directive": null,
      "start": 2926,
      "end": 2954
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2959,
          "end": 2962
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
                "start": 2964,
                "end": 2965
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
                  "start": 2970,
                  "end": 2971
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "substr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2972,
                  "end": 2978
                },
                "optional": false,
                "computed": false,
                "start": 2970,
                "end": 2978
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2979,
                  "end": 2980
                }
              ],
              "optional": false,
              "start": 2970,
              "end": 2981
            },
            "id": null,
            "generator": false,
            "start": 2963,
            "end": 2981
          }
        ],
        "start": 2955,
        "end": 2982
      },
      "directive": null,
      "start": 2955,
      "end": 2983
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2988,
          "end": 2991
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
                "start": 2993,
                "end": 2994
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2999,
                "end": 3000
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "blah",
                "optional": false,
                "typeAnnotation": null,
                "start": 3001,
                "end": 3005
              },
              "optional": false,
              "computed": false,
              "start": 2999,
              "end": 3005
            },
            "id": null,
            "generator": false,
            "start": 2992,
            "end": 3005
          }
        ],
        "start": 2984,
        "end": 3006
      },
      "directive": null,
      "start": 2984,
      "end": 3007
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3018
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
    "value": "class",
    "start": 288,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 304,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 319,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 332,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 360,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 381,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 385,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 389,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 572,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 578,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 591,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 606,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 617,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 630,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 645,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 664,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 685,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 693,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 697,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 701,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 710,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 841,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 849,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 853,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 856,
    "end": 857
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 858,
    "end": 859
  },
  {
    "type": "String",
    "value": "''",
    "start": 860,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 987,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 991,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 995,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "String",
    "value": "''",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1140,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "String",
    "value": "''",
    "start": 1148,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1235,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1241,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1260,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1283,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1298,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1323,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1344,
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
    "value": ")",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1358,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1379,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1383,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1391,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1395,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "String",
    "value": "''",
    "start": 1399,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "String",
    "value": "''",
    "start": 1406,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1411,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1415,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1543,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1547,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1551,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1576,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1580,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1588,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "String",
    "value": "''",
    "start": 1596,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "String",
    "value": "''",
    "start": 1600,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "String",
    "value": "''",
    "start": 1604,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1619,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1623,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1627,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1635,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1643,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "String",
    "value": "''",
    "start": 1651,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "String",
    "value": "''",
    "start": 1655,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "value": "new",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1774,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1778,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1786,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1794,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1802,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1917,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1923,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1929,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1937,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1947,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1955,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1969,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1998,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2018,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2022,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2026,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2034,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "String",
    "value": "''",
    "start": 2042,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2050,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2054,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2058,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2064,
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
    "type": "Numeric",
    "value": "3",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "String",
    "value": "''",
    "start": 2077,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2091,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2095,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2099,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2107,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "String",
    "value": "''",
    "start": 2115,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2132,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2136,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2140,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2148,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "String",
    "value": "''",
    "start": 2159,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2286,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2290,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "String",
    "value": "''",
    "start": 2294,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2302,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2306,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "String",
    "value": "''",
    "start": 2313,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2327,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2331,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2338,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2359,
    "end": 2362
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
    "type": "Null",
    "value": "null",
    "start": 2371,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2480,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2484,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2488,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2497,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2503,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2509,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2645,
    "end": 2648
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2649,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2653,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2659,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2675,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2679,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2683,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2689,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2790,
    "end": 2795
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2796,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2806,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2822,
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
    "value": "string",
    "start": 2825,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2833,
    "end": 2835
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2836,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2847,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2866,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2874,
    "end": 2876
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2877,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2888,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2904,
    "end": 2910
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2911,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2926,
    "end": 2929
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2930,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2938,
    "end": 2940
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 2943,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2951,
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
    "value": ";",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2955,
    "end": 2958
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2959,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2967,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 2972,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": ")",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2984,
    "end": 2987
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2988,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2996,
    "end": 2998
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 3001,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3006,
    "end": 3007
  }
]
```
