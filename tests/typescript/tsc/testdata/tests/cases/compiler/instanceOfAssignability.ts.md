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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 23,
                    "end": 29
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 30,
                    "end": 36
                  }
                ],
                "start": 23,
                "end": 36
              },
              "start": 21,
              "end": 36
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 37
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 47
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 50,
                "end": 56
              },
              "start": 48,
              "end": 56
            },
            "accessibility": null,
            "static": false,
            "start": 39,
            "end": 57
          }
        ],
        "start": 15,
        "end": 59
      },
      "declare": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 132
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 148
          },
          "typeArguments": null,
          "start": 144,
          "end": 148
        }
      ],
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
              "start": 152,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              },
              "start": 155,
              "end": 163
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
            "start": 152,
            "end": 164
          }
        ],
        "start": 149,
        "end": 166
      },
      "abstract": false,
      "declare": false,
      "start": 118,
      "end": 166
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 249
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 265
          },
          "typeArguments": null,
          "start": 261,
          "end": 265
        }
      ],
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
              "start": 269,
              "end": 272
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 274,
                "end": 280
              },
              "start": 272,
              "end": 280
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
            "start": 269,
            "end": 281
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 291
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 293,
                "end": 299
              },
              "start": 291,
              "end": 299
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
            "start": 283,
            "end": 300
          }
        ],
        "start": 266,
        "end": 302
      },
      "abstract": false,
      "declare": false,
      "start": 235,
      "end": 302
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "move",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 324
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
            "accessibility": null,
            "start": 320,
            "end": 325
          }
        ],
        "start": 317,
        "end": 327
      },
      "abstract": false,
      "declare": false,
      "start": 304,
      "end": 327
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mammal",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 340
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 355
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
              "name": "milk",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 362
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
            "accessibility": null,
            "start": 358,
            "end": 363
          }
        ],
        "start": 356,
        "end": 365
      },
      "abstract": false,
      "declare": false,
      "start": 328,
      "end": 365
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Giraffe",
        "optional": false,
        "typeAnnotation": null,
        "start": 372,
        "end": 379
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mammal",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 394
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
              "name": "neck",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 401
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
            "accessibility": null,
            "start": 397,
            "end": 402
          }
        ],
        "start": 395,
        "end": 404
      },
      "abstract": false,
      "declare": false,
      "start": 366,
      "end": 404
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 418
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 427
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 428,
                        "end": 434
                      }
                    ],
                    "start": 427,
                    "end": 435
                  },
                  "start": 422,
                  "end": 435
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 441
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 442,
                        "end": 448
                      }
                    ],
                    "start": 441,
                    "end": 449
                  },
                  "start": 436,
                  "end": 449
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 450,
                  "end": 457
                }
              ],
              "start": 422,
              "end": 457
            },
            "start": 420,
            "end": 457
          },
          "start": 419,
          "end": 457
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 465,
                "end": 466
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 483
              },
              "start": 465,
              "end": 483
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 577
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 580,
                        "end": 581
                      },
                      "definite": false,
                      "start": 576,
                      "end": 581
                    }
                  ],
                  "declare": false,
                  "start": 572,
                  "end": 582
                }
              ],
              "start": 485,
              "end": 585
            },
            "alternate": null,
            "start": 462,
            "end": 585
          }
        ],
        "start": 459,
        "end": 587
      },
      "expression": false,
      "start": 406,
      "end": 587
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 598,
        "end": 601
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 605,
                "end": 609
              },
              "typeArguments": null,
              "start": 605,
              "end": 609
            },
            "start": 603,
            "end": 609
          },
          "start": 602,
          "end": 609
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 617,
                "end": 618
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived1",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 638
              },
              "start": 617,
              "end": 638
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 689,
                        "end": 690
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 693,
                        "end": 694
                      },
                      "definite": false,
                      "start": 689,
                      "end": 694
                    }
                  ],
                  "declare": false,
                  "start": 685,
                  "end": 695
                }
              ],
              "start": 640,
              "end": 698
            },
            "alternate": null,
            "start": 614,
            "end": 698
          }
        ],
        "start": 611,
        "end": 700
      },
      "expression": false,
      "start": 589,
      "end": 700
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 711,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 718,
                    "end": 722
                  },
                  "typeArguments": null,
                  "start": 718,
                  "end": 722
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 723,
                    "end": 731
                  },
                  "typeArguments": null,
                  "start": 723,
                  "end": 731
                }
              ],
              "start": 718,
              "end": 731
            },
            "start": 716,
            "end": 731
          },
          "start": 715,
          "end": 731
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 739,
                "end": 740
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived2",
                "optional": false,
                "typeAnnotation": null,
                "start": 752,
                "end": 760
              },
              "start": 739,
              "end": 760
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 812,
                        "end": 813
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 816,
                        "end": 817
                      },
                      "definite": false,
                      "start": 812,
                      "end": 817
                    }
                  ],
                  "declare": false,
                  "start": 808,
                  "end": 818
                }
              ],
              "start": 762,
              "end": 821
            },
            "alternate": null,
            "start": 736,
            "end": 821
          }
        ],
        "start": 733,
        "end": 823
      },
      "expression": false,
      "start": 702,
      "end": 823
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 834,
        "end": 837
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 841,
                    "end": 845
                  },
                  "typeArguments": null,
                  "start": 841,
                  "end": 845
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 846,
                    "end": 854
                  },
                  "typeArguments": null,
                  "start": 846,
                  "end": 854
                }
              ],
              "start": 841,
              "end": 854
            },
            "start": 839,
            "end": 854
          },
          "start": 838,
          "end": 854
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 862,
                "end": 863
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived1",
                "optional": false,
                "typeAnnotation": null,
                "start": 875,
                "end": 883
              },
              "start": 862,
              "end": 883
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 929,
                        "end": 930
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 933,
                        "end": 934
                      },
                      "definite": false,
                      "start": 929,
                      "end": 934
                    }
                  ],
                  "declare": false,
                  "start": 925,
                  "end": 935
                }
              ],
              "start": 885,
              "end": 938
            },
            "alternate": null,
            "start": 859,
            "end": 938
          }
        ],
        "start": 856,
        "end": 940
      },
      "expression": false,
      "start": 825,
      "end": 940
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 951,
        "end": 954
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived1",
                "optional": false,
                "typeAnnotation": null,
                "start": 958,
                "end": 966
              },
              "typeArguments": null,
              "start": 958,
              "end": 966
            },
            "start": 956,
            "end": 966
          },
          "start": 955,
          "end": 966
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 974,
                "end": 975
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived2",
                "optional": false,
                "typeAnnotation": null,
                "start": 987,
                "end": 995
              },
              "start": 974,
              "end": 995
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1042,
                        "end": 1043
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1046,
                        "end": 1047
                      },
                      "definite": false,
                      "start": 1042,
                      "end": 1047
                    }
                  ],
                  "declare": false,
                  "start": 1038,
                  "end": 1048
                }
              ],
              "start": 997,
              "end": 1051
            },
            "alternate": null,
            "start": 971,
            "end": 1051
          }
        ],
        "start": 968,
        "end": 1053
      },
      "expression": false,
      "start": 942,
      "end": 1053
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1064,
        "end": 1067
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Animal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1071,
                    "end": 1077
                  },
                  "typeArguments": null,
                  "start": 1071,
                  "end": 1077
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mammal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1078,
                    "end": 1084
                  },
                  "typeArguments": null,
                  "start": 1078,
                  "end": 1084
                }
              ],
              "start": 1071,
              "end": 1084
            },
            "start": 1069,
            "end": 1084
          },
          "start": 1068,
          "end": 1084
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1092,
                "end": 1093
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Giraffe",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1112
              },
              "start": 1092,
              "end": 1112
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1159,
                        "end": 1160
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1163,
                        "end": 1164
                      },
                      "definite": false,
                      "start": 1159,
                      "end": 1164
                    }
                  ],
                  "declare": false,
                  "start": 1155,
                  "end": 1165
                }
              ],
              "start": 1114,
              "end": 1168
            },
            "alternate": null,
            "start": 1089,
            "end": 1168
          }
        ],
        "start": 1086,
        "end": 1170
      },
      "expression": false,
      "start": 1055,
      "end": 1170
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1181,
        "end": 1184
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1188,
                    "end": 1193
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1194,
                        "end": 1200
                      }
                    ],
                    "start": 1193,
                    "end": 1201
                  },
                  "start": 1188,
                  "end": 1201
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1202,
                    "end": 1207
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1208,
                        "end": 1214
                      }
                    ],
                    "start": 1207,
                    "end": 1215
                  },
                  "start": 1202,
                  "end": 1215
                }
              ],
              "start": 1188,
              "end": 1215
            },
            "start": 1186,
            "end": 1215
          },
          "start": 1185,
          "end": 1215
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1223,
                "end": 1224
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 1236,
                "end": 1241
              },
              "start": 1223,
              "end": 1241
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1334,
                        "end": 1335
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1338,
                        "end": 1339
                      },
                      "definite": false,
                      "start": 1334,
                      "end": 1339
                    }
                  ],
                  "declare": false,
                  "start": 1330,
                  "end": 1340
                }
              ],
              "start": 1243,
              "end": 1343
            },
            "alternate": null,
            "start": 1220,
            "end": 1343
          }
        ],
        "start": 1217,
        "end": 1345
      },
      "expression": false,
      "start": 1172,
      "end": 1345
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Alpha",
        "optional": false,
        "typeAnnotation": null,
        "start": 1357,
        "end": 1362
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1365,
              "end": 1366
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 1365,
            "end": 1366
          }
        ],
        "start": 1363,
        "end": 1368
      },
      "declare": false,
      "start": 1347,
      "end": 1368
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Beta",
        "optional": false,
        "typeAnnotation": null,
        "start": 1379,
        "end": 1383
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1386,
              "end": 1387
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 1386,
            "end": 1387
          }
        ],
        "start": 1384,
        "end": 1389
      },
      "declare": false,
      "start": 1369,
      "end": 1389
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Gamma",
        "optional": false,
        "typeAnnotation": null,
        "start": 1400,
        "end": 1405
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1408,
              "end": 1409
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 1408,
            "end": 1409
          }
        ],
        "start": 1406,
        "end": 1411
      },
      "declare": false,
      "start": 1390,
      "end": 1411
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ABC",
        "optional": false,
        "typeAnnotation": null,
        "start": 1418,
        "end": 1421
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
              "start": 1424,
              "end": 1425
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
            "accessibility": null,
            "start": 1424,
            "end": 1426
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
              "start": 1427,
              "end": 1428
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
            "accessibility": null,
            "start": 1427,
            "end": 1429
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1430,
              "end": 1431
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
            "accessibility": null,
            "start": 1430,
            "end": 1432
          }
        ],
        "start": 1422,
        "end": 1434
      },
      "abstract": false,
      "declare": false,
      "start": 1412,
      "end": 1434
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1444,
        "end": 1447
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Alpha",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1451,
                    "end": 1456
                  },
                  "typeArguments": null,
                  "start": 1451,
                  "end": 1456
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Beta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1457,
                    "end": 1461
                  },
                  "typeArguments": null,
                  "start": 1457,
                  "end": 1461
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Gamma",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1462,
                    "end": 1467
                  },
                  "typeArguments": null,
                  "start": 1462,
                  "end": 1467
                }
              ],
              "start": 1451,
              "end": 1467
            },
            "start": 1449,
            "end": 1467
          },
          "start": 1448,
          "end": 1467
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1475,
                "end": 1476
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ABC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1488,
                "end": 1491
              },
              "start": 1475,
              "end": 1491
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1501,
                        "end": 1502
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1505,
                        "end": 1506
                      },
                      "definite": false,
                      "start": 1501,
                      "end": 1506
                    }
                  ],
                  "declare": false,
                  "start": 1497,
                  "end": 1507
                }
              ],
              "start": 1493,
              "end": 1510
            },
            "alternate": null,
            "start": 1472,
            "end": 1510
          }
        ],
        "start": 1469,
        "end": 1512
      },
      "expression": false,
      "start": 1435,
      "end": 1512
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1514
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
    "value": "Base",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 39,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 118,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 124,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 133,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 144,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 157,
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
    "start": 235,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 241,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 250,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 269,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 283,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 304,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 310,
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
    "value": "move",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
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
    "value": "Mammal",
    "start": 334,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 341,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "milk",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 366,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "Giraffe",
    "start": 372,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 380,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "Mammal",
    "start": 388,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "neck",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 406,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "Array",
    "start": 422,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 436,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 450,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 462,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 467,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 478,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "let",
    "start": 572,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 589,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 598,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 605,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 614,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 617,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 619,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 630,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 685,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 702,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 711,
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
    "value": "x",
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
    "value": "Base",
    "start": 718,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 723,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 736,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 741,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 752,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 808,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "function",
    "start": 825,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 834,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 841,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 846,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 859,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 864,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 875,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 925,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 942,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 951,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 958,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 966,
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
    "value": "if",
    "start": 971,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 974,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 976,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 987,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1038,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1055,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "fn6",
    "start": 1064,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 1071,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "Mammal",
    "start": 1078,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1089,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1094,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "Giraffe",
    "start": 1105,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1155,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1172,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "fn7",
    "start": 1181,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1188,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1194,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1202,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1208,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1220,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1225,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1236,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1330,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1347,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "Alpha",
    "start": 1357,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1369,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "Beta",
    "start": 1379,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1390,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "Gamma",
    "start": 1400,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1412,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "ABC",
    "start": 1418,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1435,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "fn8",
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
    "type": "Identifier",
    "value": "x",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "Alpha",
    "start": 1451,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "Beta",
    "start": 1457,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "Gamma",
    "start": 1462,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1472,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1477,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "ABC",
    "start": 1488,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1497,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1506,
    "end": 1507
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
  }
]
```
