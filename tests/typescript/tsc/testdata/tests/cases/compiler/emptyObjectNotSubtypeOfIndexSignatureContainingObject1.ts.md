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
        "name": "Dictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 140
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
              "start": 141,
              "end": 142
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 141,
            "end": 142
          }
        ],
        "start": 140,
        "end": 143
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 156,
                    "end": 162
                  },
                  "start": 154,
                  "end": 162
                },
                "start": 149,
                "end": 162
              }
            ],
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
                  "start": 165,
                  "end": 166
                },
                "typeArguments": null,
                "start": 165,
                "end": 166
              },
              "start": 163,
              "end": 166
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 148,
            "end": 167
          }
        ],
        "start": 144,
        "end": 169
      },
      "declare": false,
      "start": 120,
      "end": 169
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumericDictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 198
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
              "start": 199,
              "end": 200
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 199,
            "end": 200
          }
        ],
        "start": 198,
        "end": 201
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 214,
                    "end": 220
                  },
                  "start": 212,
                  "end": 220
                },
                "start": 207,
                "end": 220
              }
            ],
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
                  "start": 223,
                  "end": 224
                },
                "typeArguments": null,
                "start": 223,
                "end": 224
              },
              "start": 221,
              "end": 224
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 206,
            "end": 225
          }
        ],
        "start": 202,
        "end": 227
      },
      "declare": false,
      "start": 171,
      "end": 227
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 248
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 256
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 249,
            "end": 256
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 265
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 258,
            "end": 265
          }
        ],
        "start": 248,
        "end": 266
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 287
                  },
                  "typeArguments": null,
                  "start": 280,
                  "end": 287
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 301
                    },
                    "typeArguments": null,
                    "start": 294,
                    "end": 301
                  },
                  "start": 288,
                  "end": 301
                },
                "start": 280,
                "end": 302
              },
              "start": 278,
              "end": 302
            },
            "start": 273,
            "end": 302
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 311,
                "end": 317
              },
              "start": 309,
              "end": 317
            },
            "start": 306,
            "end": 317
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "collection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 340
                },
                "typeArguments": null,
                "start": 333,
                "end": 340
              },
              "start": 331,
              "end": 340
            },
            "start": 321,
            "end": 340
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 353
            },
            "typeArguments": null,
            "start": 346,
            "end": 353
          },
          "start": 343,
          "end": 353
        },
        "start": 269,
        "end": 353
      },
      "declare": false,
      "start": 229,
      "end": 354
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DictionaryIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 379
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
              "start": 380,
              "end": 381
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 380,
            "end": 381
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 390
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 383,
            "end": 390
          }
        ],
        "start": 379,
        "end": 391
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectIterator",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 408
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Dictionary",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 419
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
                      "start": 420,
                      "end": 421
                    },
                    "typeArguments": null,
                    "start": 420,
                    "end": 421
                  }
                ],
                "start": 419,
                "end": 422
              },
              "start": 409,
              "end": 422
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 431
              },
              "typeArguments": null,
              "start": 424,
              "end": 431
            }
          ],
          "start": 408,
          "end": 432
        },
        "start": 394,
        "end": 432
      },
      "declare": false,
      "start": 356,
      "end": 433
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapValues",
        "optional": false,
        "typeAnnotation": null,
        "start": 538,
        "end": 547
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
              "start": 548,
              "end": 549
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 548,
            "end": 549
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 558
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 551,
            "end": 558
          }
        ],
        "start": 547,
        "end": 559
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                    "name": "Dictionary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 568,
                    "end": 578
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
                          "start": 579,
                          "end": 580
                        },
                        "typeArguments": null,
                        "start": 579,
                        "end": 580
                      }
                    ],
                    "start": 578,
                    "end": 581
                  },
                  "start": 568,
                  "end": 581
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumericDictionary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 584,
                    "end": 601
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
                          "start": 602,
                          "end": 603
                        },
                        "typeArguments": null,
                        "start": 602,
                        "end": 603
                      }
                    ],
                    "start": 601,
                    "end": 604
                  },
                  "start": 584,
                  "end": 604
                },
                {
                  "type": "TSNullKeyword",
                  "start": 607,
                  "end": 611
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 614,
                  "end": 623
                }
              ],
              "start": 568,
              "end": 623
            },
            "start": 566,
            "end": 623
          },
          "start": 563,
          "end": 623
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DictionaryIterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 655
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
                      "start": 656,
                      "end": 657
                    },
                    "typeArguments": null,
                    "start": 656,
                    "end": 657
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 659,
                      "end": 666
                    },
                    "typeArguments": null,
                    "start": 659,
                    "end": 666
                  }
                ],
                "start": 655,
                "end": 667
              },
              "start": 637,
              "end": 667
            },
            "start": 635,
            "end": 667
          },
          "start": 627,
          "end": 667
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Dictionary",
            "optional": false,
            "typeAnnotation": null,
            "start": 671,
            "end": 681
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 682,
                  "end": 689
                },
                "typeArguments": null,
                "start": 682,
                "end": 689
              }
            ],
            "start": 681,
            "end": 690
          },
          "start": 671,
          "end": 690
        },
        "start": 669,
        "end": 690
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 702,
                "end": 706
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 710,
                "end": 713
              },
              "start": 702,
              "end": 713
            },
            "start": 695,
            "end": 714
          }
        ],
        "start": 691,
        "end": 716
      },
      "expression": false,
      "start": 529,
      "end": 716
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 754,
        "end": 757
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
              "start": 762,
              "end": 765
            },
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
            "accessibility": null,
            "static": false,
            "start": 762,
            "end": 774
          }
        ],
        "start": 758,
        "end": 776
      },
      "declare": false,
      "start": 744,
      "end": 776
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 788,
        "end": 791
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 796,
              "end": 799
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 801,
                "end": 807
              },
              "start": 799,
              "end": 807
            },
            "accessibility": null,
            "static": false,
            "start": 796,
            "end": 808
          }
        ],
        "start": 792,
        "end": 810
      },
      "declare": false,
      "start": 778,
      "end": 810
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooToBar",
          "optional": false,
          "typeAnnotation": null,
          "start": 828,
          "end": 836
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 846,
                  "end": 852
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 853,
                      "end": 859
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 861,
                        "end": 864
                      },
                      "typeArguments": null,
                      "start": 861,
                      "end": 864
                    }
                  ],
                  "start": 852,
                  "end": 865
                },
                "start": 846,
                "end": 865
              },
              "start": 844,
              "end": 865
            },
            "start": 840,
            "end": 865
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null,
              "start": 869,
              "end": 875
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 876,
                  "end": 882
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 884,
                        "end": 887
                      },
                      "typeArguments": null,
                      "start": 884,
                      "end": 887
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 890,
                      "end": 894
                    }
                  ],
                  "start": 884,
                  "end": 894
                }
              ],
              "start": 875,
              "end": 895
            },
            "start": 869,
            "end": 895
          },
          "start": 867,
          "end": 895
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 912
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foos",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 915,
                        "end": 919
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 923,
                        "end": 927
                      },
                      "start": 915,
                      "end": 927
                    },
                    "consequent": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 930,
                      "end": 932
                    },
                    "alternate": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapValues",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 935,
                        "end": 944
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foos",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 945,
                          "end": 949
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 951,
                              "end": 952
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 956,
                              "end": 957
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 958,
                              "end": 961
                            },
                            "optional": false,
                            "computed": false,
                            "start": 956,
                            "end": 961
                          },
                          "id": null,
                          "generator": false,
                          "start": 951,
                          "end": 961
                        }
                      ],
                      "optional": false,
                      "start": 935,
                      "end": 962
                    },
                    "start": 915,
                    "end": 962
                  },
                  "definite": false,
                  "start": 906,
                  "end": 962
                }
              ],
              "declare": false,
              "start": 900,
              "end": 963
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 1043,
                "end": 1049
              },
              "start": 1036,
              "end": 1050
            }
          ],
          "start": 896,
          "end": 1052
        },
        "expression": false,
        "start": 819,
        "end": 1052
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 812,
      "end": 1052
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 120,
  "end": 1052
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 120,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 130,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 171,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "NumericDictionary",
    "start": 181,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 199,
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
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 207,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 229,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "ObjectIterator",
    "start": 234,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "TObject",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 273,
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
    "value": "TObject",
    "start": 280,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 288,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "TObject",
    "start": 294,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 306,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 311,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "collection",
    "start": 321,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "TObject",
    "start": 333,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 343,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 346,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 356,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "DictionaryIterator",
    "start": 361,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 383,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "ObjectIterator",
    "start": 394,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 409,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 424,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 529,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "mapValues",
    "start": 538,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 551,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "obj",
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
    "value": "Dictionary",
    "start": 568,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "NumericDictionary",
    "start": 584,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 605,
    "end": 606
  },
  {
    "type": "Null",
    "value": "null",
    "start": 607,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 614,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 627,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "DictionaryIterator",
    "start": 637,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 659,
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
    "value": ")",
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
    "value": "Dictionary",
    "start": 671,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 682,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 695,
    "end": 701
  },
  {
    "type": "Null",
    "value": "null",
    "start": 702,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 707,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 710,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 744,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 754,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "foo",
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
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 775,
    "end": 776
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 778,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 788,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 796,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 801,
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
    "value": "function",
    "start": 819,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "fooToBar",
    "start": 828,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "foos",
    "start": 840,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 846,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 853,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 861,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 869,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 876,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 884,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 888,
    "end": 889
  },
  {
    "type": "Null",
    "value": "null",
    "start": 890,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 896,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 900,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 906,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "foos",
    "start": 915,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 920,
    "end": 922
  },
  {
    "type": "Null",
    "value": "null",
    "start": 923,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "mapValues",
    "start": 935,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "foos",
    "start": 945,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 953,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 958,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1043,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1051,
    "end": 1052
  }
]
```
