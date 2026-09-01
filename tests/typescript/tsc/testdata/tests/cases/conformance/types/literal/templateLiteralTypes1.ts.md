__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "createScopedActionType",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 67
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 72
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 81,
                    "end": 87
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 71,
                  "end": 87
                }
              ],
              "start": 70,
              "end": 88
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "scope",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 97
                    },
                    "typeArguments": null,
                    "start": 96,
                    "end": 97
                  },
                  "start": 94,
                  "end": 97
                },
                "start": 89,
                "end": 97
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
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
                      "start": 103,
                      "end": 104
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 113,
                      "end": 119
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 103,
                    "end": 119
                  }
                ],
                "start": 102,
                "end": 120
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
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
                        "start": 127,
                        "end": 128
                      },
                      "typeArguments": null,
                      "start": 127,
                      "end": 128
                    },
                    "start": 125,
                    "end": 128
                  },
                  "start": 121,
                  "end": 128
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 133,
                      "end": 136
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "/",
                        "cooked": "/"
                      },
                      "tail": false,
                      "start": 141,
                      "end": 145
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 149,
                      "end": 151
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "scope",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 141
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 149
                    }
                  ],
                  "start": 133,
                  "end": 151
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 155,
                      "end": 158
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "/",
                        "cooked": "/"
                      },
                      "tail": false,
                      "start": 159,
                      "end": 163
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 164,
                      "end": 166
                    }
                  ],
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 159
                      },
                      "typeArguments": null,
                      "start": 158,
                      "end": 159
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 164
                      },
                      "typeArguments": null,
                      "start": 163,
                      "end": 164
                    }
                  ],
                  "start": 155,
                  "end": 166
                },
                "start": 133,
                "end": 166
              },
              "id": null,
              "generator": false,
              "start": 102,
              "end": 166
            },
            "id": null,
            "generator": false,
            "start": 70,
            "end": 166
          },
          "definite": false,
          "start": 45,
          "end": 166
        }
      ],
      "declare": false,
      "start": 39,
      "end": 167
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "createActionInMyScope",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 195
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createScopedActionType",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 220
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "MyScope",
                "raw": "\"MyScope\"",
                "start": 221,
                "end": 230
              }
            ],
            "optional": false,
            "start": 198,
            "end": 231
          },
          "definite": false,
          "start": 174,
          "end": 231
        }
      ],
      "declare": false,
      "start": 168,
      "end": 232
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "MY_ACTION",
            "optional": false,
            "typeAnnotation": null,
            "start": 289,
            "end": 298
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createActionInMyScope",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 322
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "MY_ACTION",
                "raw": "\"MY_ACTION\"",
                "start": 323,
                "end": 334
              }
            ],
            "optional": false,
            "start": 301,
            "end": 335
          },
          "definite": false,
          "start": 289,
          "end": 335
        }
      ],
      "declare": false,
      "start": 283,
      "end": 336
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventName",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 428
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 430
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 439,
              "end": 445
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 429,
            "end": 445
          }
        ],
        "start": 428,
        "end": 446
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 449,
            "end": 452
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "Changed",
              "cooked": "Changed"
            },
            "tail": true,
            "start": 453,
            "end": 462
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 453
            },
            "typeArguments": null,
            "start": 452,
            "end": 453
          }
        ],
        "start": 449,
        "end": 462
      },
      "declare": false,
      "start": 414,
      "end": 463
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EN1",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 472
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "EventName",
          "optional": false,
          "typeAnnotation": null,
          "start": 475,
          "end": 484
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Foo",
                    "raw": "'Foo'",
                    "start": 485,
                    "end": 490
                  },
                  "start": 485,
                  "end": 490
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Bar",
                    "raw": "'Bar'",
                    "start": 493,
                    "end": 498
                  },
                  "start": 493,
                  "end": 498
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Baz",
                    "raw": "'Baz'",
                    "start": 501,
                    "end": 506
                  },
                  "start": 501,
                  "end": 506
                }
              ],
              "start": 485,
              "end": 506
            }
          ],
          "start": 484,
          "end": 507
        },
        "start": 475,
        "end": 507
      },
      "declare": false,
      "start": 464,
      "end": 508
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Loc",
        "optional": false,
        "typeAnnotation": null,
        "start": 514,
        "end": 517
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 520,
            "end": 523
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "-",
              "cooked": "-"
            },
            "tail": false,
            "start": 550,
            "end": 554
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 581,
            "end": 583
          }
        ],
        "types": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "top",
                  "raw": "'top'",
                  "start": 523,
                  "end": 528
                },
                "start": 523,
                "end": 528
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "middle",
                  "raw": "'middle'",
                  "start": 531,
                  "end": 539
                },
                "start": 531,
                "end": 539
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "bottom",
                  "raw": "'bottom'",
                  "start": 542,
                  "end": 550
                },
                "start": 542,
                "end": 550
              }
            ],
            "start": 523,
            "end": 550
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "left",
                  "raw": "'left'",
                  "start": 554,
                  "end": 560
                },
                "start": 554,
                "end": 560
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "center",
                  "raw": "'center'",
                  "start": 563,
                  "end": 571
                },
                "start": 563,
                "end": 571
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "right",
                  "raw": "'right'",
                  "start": 574,
                  "end": 581
                },
                "start": 574,
                "end": 581
              }
            ],
            "start": 554,
            "end": 581
          }
        ],
        "start": 520,
        "end": 583
      },
      "declare": false,
      "start": 509,
      "end": 584
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToString",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 656
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
              "start": 657,
              "end": 658
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 667,
                  "end": 673
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 676,
                  "end": 682
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 685,
                  "end": 692
                },
                {
                  "type": "TSBigIntKeyword",
                  "start": 695,
                  "end": 701
                }
              ],
              "start": 667,
              "end": 701
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 657,
            "end": 701
          }
        ],
        "start": 656,
        "end": 702
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 705,
            "end": 708
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 709,
            "end": 711
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 708,
              "end": 709
            },
            "typeArguments": null,
            "start": 708,
            "end": 709
          }
        ],
        "start": 705,
        "end": 711
      },
      "declare": false,
      "start": 643,
      "end": 712
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS1",
        "optional": false,
        "typeAnnotation": null,
        "start": 718,
        "end": 721
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToString",
          "optional": false,
          "typeAnnotation": null,
          "start": 724,
          "end": 732
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "'abc'",
                    "start": 733,
                    "end": 738
                  },
                  "start": 733,
                  "end": 738
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 741,
                    "end": 743
                  },
                  "start": 741,
                  "end": 743
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 746,
                    "end": 750
                  },
                  "start": 746,
                  "end": 750
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "1234n",
                      "bigint": "1234",
                      "start": 754,
                      "end": 759
                    },
                    "prefix": true,
                    "start": 753,
                    "end": 759
                  },
                  "start": 753,
                  "end": 759
                }
              ],
              "start": 733,
              "end": 759
            }
          ],
          "start": 732,
          "end": 760
        },
        "start": 724,
        "end": 760
      },
      "declare": false,
      "start": 713,
      "end": 761
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL1",
        "optional": false,
        "typeAnnotation": null,
        "start": 815,
        "end": 818
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
              "start": 819,
              "end": 820
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 829,
              "end": 835
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 819,
            "end": 835
          }
        ],
        "start": 818,
        "end": 836
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "a",
              "cooked": "a"
            },
            "tail": false,
            "start": 839,
            "end": 843
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "b",
              "cooked": "b"
            },
            "tail": false,
            "start": 844,
            "end": 848
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "c",
              "cooked": "c"
            },
            "tail": true,
            "start": 849,
            "end": 852
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 843,
              "end": 844
            },
            "typeArguments": null,
            "start": 843,
            "end": 844
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 848,
              "end": 849
            },
            "typeArguments": null,
            "start": 848,
            "end": 849
          }
        ],
        "start": 839,
        "end": 852
      },
      "declare": false,
      "start": 810,
      "end": 853
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL2",
        "optional": false,
        "typeAnnotation": null,
        "start": 859,
        "end": 862
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
              "start": 863,
              "end": 864
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 873,
              "end": 879
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 863,
            "end": 879
          }
        ],
        "start": 862,
        "end": 880
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TL1",
          "optional": false,
          "typeAnnotation": null,
          "start": 883,
          "end": 886
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "x",
                    "cooked": "x"
                  },
                  "tail": false,
                  "start": 887,
                  "end": 891
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "y",
                    "cooked": "y"
                  },
                  "tail": true,
                  "start": 892,
                  "end": 895
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 891,
                    "end": 892
                  },
                  "typeArguments": null,
                  "start": 891,
                  "end": 892
                }
              ],
              "start": 887,
              "end": 895
            }
          ],
          "start": 886,
          "end": 896
        },
        "start": 883,
        "end": 896
      },
      "declare": false,
      "start": 854,
      "end": 897
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL3",
        "optional": false,
        "typeAnnotation": null,
        "start": 925,
        "end": 928
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TL2",
          "optional": false,
          "typeAnnotation": null,
          "start": 931,
          "end": 934
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "o",
                "raw": "'o'",
                "start": 935,
                "end": 938
              },
              "start": 935,
              "end": 938
            }
          ],
          "start": 934,
          "end": 939
        },
        "start": 931,
        "end": 939
      },
      "declare": false,
      "start": 920,
      "end": 940
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cases",
        "optional": false,
        "typeAnnotation": null,
        "start": 985,
        "end": 990
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
              "start": 991,
              "end": 992
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1001,
              "end": 1007
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 991,
            "end": 1007
          }
        ],
        "start": 990,
        "end": 1008
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 1011,
            "end": 1014
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false,
            "start": 1026,
            "end": 1030
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false,
            "start": 1042,
            "end": 1046
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false,
            "start": 1059,
            "end": 1063
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 1078,
            "end": 1080
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uppercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1024,
                    "end": 1025
                  },
                  "typeArguments": null,
                  "start": 1024,
                  "end": 1025
                }
              ],
              "start": 1023,
              "end": 1026
            },
            "start": 1014,
            "end": 1026
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1039
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
                    "start": 1040,
                    "end": 1041
                  },
                  "typeArguments": null,
                  "start": 1040,
                  "end": 1041
                }
              ],
              "start": 1039,
              "end": 1042
            },
            "start": 1030,
            "end": 1042
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null,
              "start": 1046,
              "end": 1056
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
                    "start": 1057,
                    "end": 1058
                  },
                  "typeArguments": null,
                  "start": 1057,
                  "end": 1058
                }
              ],
              "start": 1056,
              "end": 1059
            },
            "start": 1046,
            "end": 1059
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uncapitalize",
              "optional": false,
              "typeAnnotation": null,
              "start": 1063,
              "end": 1075
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
                    "start": 1076,
                    "end": 1077
                  },
                  "typeArguments": null,
                  "start": 1076,
                  "end": 1077
                }
              ],
              "start": 1075,
              "end": 1078
            },
            "start": 1063,
            "end": 1078
          }
        ],
        "start": 1011,
        "end": 1080
      },
      "declare": false,
      "start": 980,
      "end": 1081
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TCA1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1088,
        "end": 1092
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cases",
          "optional": false,
          "typeAnnotation": null,
          "start": 1095,
          "end": 1100
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 1101,
                "end": 1106
              },
              "start": 1101,
              "end": 1106
            }
          ],
          "start": 1100,
          "end": 1107
        },
        "start": 1095,
        "end": 1107
      },
      "declare": false,
      "start": 1083,
      "end": 1108
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TCA2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1136,
        "end": 1140
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cases",
          "optional": false,
          "typeAnnotation": null,
          "start": 1143,
          "end": 1148
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "BAR",
                "raw": "'BAR'",
                "start": 1149,
                "end": 1154
              },
              "start": 1149,
              "end": 1154
            }
          ],
          "start": 1148,
          "end": 1155
        },
        "start": 1143,
        "end": 1155
      },
      "declare": false,
      "start": 1131,
      "end": 1156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1207,
        "end": 1211
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
              "start": 1212,
              "end": 1213
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 1222,
                    "end": 1227
                  },
                  "start": 1222,
                  "end": 1227
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 1230,
                    "end": 1235
                  },
                  "start": 1230,
                  "end": 1235
                }
              ],
              "start": 1222,
              "end": 1235
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1212,
            "end": 1235
          }
        ],
        "start": 1211,
        "end": 1236
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "get",
                    "cooked": "get"
                  },
                  "tail": false,
                  "start": 1243,
                  "end": 1249
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1262,
                  "end": 1264
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Capitalize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1249,
                    "end": 1259
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
                          "start": 1260,
                          "end": 1261
                        },
                        "typeArguments": null,
                        "start": 1260,
                        "end": 1261
                      }
                    ],
                    "start": 1259,
                    "end": 1262
                  },
                  "start": 1249,
                  "end": 1262
                }
              ],
              "start": 1243,
              "end": 1264
            },
            "start": 1241,
            "end": 1264
          },
          "start": 1237,
          "end": 1264
        }
      ],
      "returnType": null,
      "body": {
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
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1280,
                      "end": 1286
                    },
                    "start": 1278,
                    "end": 1286
                  },
                  "start": 1276,
                  "end": 1286
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1289,
                  "end": 1293
                },
                "definite": false,
                "start": 1276,
                "end": 1293
              }
            ],
            "declare": false,
            "start": 1272,
            "end": 1294
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "getFoo",
                            "raw": "'getFoo'",
                            "start": 1307,
                            "end": 1315
                          },
                          "start": 1307,
                          "end": 1315
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "getBar",
                            "raw": "'getBar'",
                            "start": 1318,
                            "end": 1326
                          },
                          "start": 1318,
                          "end": 1326
                        }
                      ],
                      "start": 1307,
                      "end": 1326
                    },
                    "start": 1305,
                    "end": 1326
                  },
                  "start": 1303,
                  "end": 1326
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1329,
                  "end": 1333
                },
                "definite": false,
                "start": 1303,
                "end": 1333
              }
            ],
            "declare": false,
            "start": 1299,
            "end": 1334
          }
        ],
        "start": 1266,
        "end": 1336
      },
      "expression": false,
      "start": 1198,
      "end": 1336
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1347,
        "end": 1350
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
              "start": 1351,
              "end": 1352
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1351,
            "end": 1352
          }
        ],
        "start": 1350,
        "end": 1353
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1357,
                "end": 1358
              },
              "typeArguments": null,
              "start": 1357,
              "end": 1358
            },
            "start": 1355,
            "end": 1358
          },
          "start": 1354,
          "end": 1358
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1366,
                "end": 1367
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
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
                "start": 1371,
                "end": 1378
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1381,
                    "end": 1382
                  },
                  "typeArguments": null,
                  "start": 1381,
                  "end": 1382
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
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
                "end": 1385
              },
              "optional": false,
              "readonly": null,
              "start": 1363,
              "end": 1387
            },
            "start": 1361,
            "end": 1387
          },
          "start": 1360,
          "end": 1387
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1395,
                "end": 1396
              },
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1406,
                        "end": 1407
                      },
                      "typeArguments": null,
                      "start": 1406,
                      "end": 1407
                    },
                    "start": 1400,
                    "end": 1407
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1410,
                    "end": 1416
                  }
                ],
                "start": 1400,
                "end": 1416
              },
              "nameType": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "p_",
                      "cooked": "p_"
                    },
                    "tail": false,
                    "start": 1420,
                    "end": 1425
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1426,
                    "end": 1428
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1425,
                      "end": 1426
                    },
                    "typeArguments": null,
                    "start": 1425,
                    "end": 1426
                  }
                ],
                "start": 1420,
                "end": 1428
              },
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1431,
                    "end": 1432
                  },
                  "typeArguments": null,
                  "start": 1431,
                  "end": 1432
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1433,
                    "end": 1434
                  },
                  "typeArguments": null,
                  "start": 1433,
                  "end": 1434
                },
                "start": 1431,
                "end": 1435
              },
              "optional": false,
              "readonly": null,
              "start": 1392,
              "end": 1437
            },
            "start": 1390,
            "end": 1437
          },
          "start": 1389,
          "end": 1437
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1445,
                "end": 1446
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1449,
                "end": 1450
              },
              "start": 1445,
              "end": 1450
            },
            "directive": null,
            "start": 1445,
            "end": 1451
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1456,
                "end": 1457
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1460,
                "end": 1461
              },
              "start": 1456,
              "end": 1461
            },
            "directive": null,
            "start": 1456,
            "end": 1462
          }
        ],
        "start": 1439,
        "end": 1474
      },
      "expression": false,
      "start": 1338,
      "end": 1474
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1485,
        "end": 1488
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
              "start": 1489,
              "end": 1490
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1489,
            "end": 1490
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1492,
              "end": 1493
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1502,
                "end": 1503
              },
              "typeArguments": null,
              "start": 1502,
              "end": 1503
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1492,
            "end": 1503
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1505,
              "end": 1506
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1515,
              "end": 1521
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1505,
            "end": 1521
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1523,
              "end": 1524
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1533,
                "end": 1534
              },
              "typeArguments": null,
              "start": 1533,
              "end": 1534
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1523,
            "end": 1534
          }
        ],
        "start": 1488,
        "end": 1535
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1542,
                "end": 1543
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1547,
                  "end": 1548
                },
                "typeArguments": null,
                "start": 1547,
                "end": 1548
              },
              "nameType": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "p_",
                      "cooked": "p_"
                    },
                    "tail": false,
                    "start": 1552,
                    "end": 1557
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1558,
                    "end": 1560
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1557,
                      "end": 1558
                    },
                    "typeArguments": null,
                    "start": 1557,
                    "end": 1558
                  }
                ],
                "start": 1552,
                "end": 1560
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1563,
                  "end": 1564
                },
                "typeArguments": null,
                "start": 1563,
                "end": 1564
              },
              "optional": false,
              "readonly": null,
              "start": 1539,
              "end": 1566
            },
            "start": 1537,
            "end": 1566
          },
          "start": 1536,
          "end": 1566
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 1574,
                "end": 1575
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1579,
                  "end": 1580
                },
                "typeArguments": null,
                "start": 1579,
                "end": 1580
              },
              "nameType": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "p_",
                      "cooked": "p_"
                    },
                    "tail": false,
                    "start": 1584,
                    "end": 1589
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1590,
                    "end": 1592
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1589,
                      "end": 1590
                    },
                    "typeArguments": null,
                    "start": 1589,
                    "end": 1590
                  }
                ],
                "start": 1584,
                "end": 1592
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1595,
                  "end": 1596
                },
                "typeArguments": null,
                "start": 1595,
                "end": 1596
              },
              "optional": false,
              "readonly": null,
              "start": 1571,
              "end": 1598
            },
            "start": 1569,
            "end": 1598
          },
          "start": 1568,
          "end": 1598
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1606,
                "end": 1607
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1610,
                "end": 1611
              },
              "start": 1606,
              "end": 1611
            },
            "directive": null,
            "start": 1606,
            "end": 1612
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1617,
                "end": 1618
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1621,
                "end": 1622
              },
              "start": 1617,
              "end": 1622
            },
            "directive": null,
            "start": 1617,
            "end": 1623
          }
        ],
        "start": 1600,
        "end": 1635
      },
      "expression": false,
      "start": 1476,
      "end": 1635
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Join",
        "optional": false,
        "typeAnnotation": null,
        "start": 1703,
        "end": 1707
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
              "start": 1708,
              "end": 1709
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1718,
                "end": 1725
              },
              "start": 1718,
              "end": 1727
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1708,
            "end": 1727
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1730
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1739,
              "end": 1745
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1729,
            "end": 1745
          }
        ],
        "start": 1707,
        "end": 1746
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1753,
            "end": 1754
          },
          "typeArguments": null,
          "start": 1753,
          "end": 1754
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "start": 1763,
          "end": 1765
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1768,
            "end": 1770
          },
          "start": 1768,
          "end": 1770
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1777,
              "end": 1778
            },
            "typeArguments": null,
            "start": 1777,
            "end": 1778
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1788,
                    "end": 1794
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1797,
                    "end": 1803
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1806,
                    "end": 1813
                  },
                  {
                    "type": "TSBigIntKeyword",
                    "start": 1816,
                    "end": 1822
                  }
                ],
                "start": 1788,
                "end": 1822
              }
            ],
            "start": 1787,
            "end": 1823
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 1826,
                "end": 1829
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 1833,
                "end": 1835
              }
            ],
            "types": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1829,
                    "end": 1830
                  },
                  "typeArguments": null,
                  "start": 1829,
                  "end": 1830
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1831,
                    "end": 1832
                  },
                  "start": 1831,
                  "end": 1832
                },
                "start": 1829,
                "end": 1833
              }
            ],
            "start": 1826,
            "end": 1835
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1842,
                "end": 1843
              },
              "typeArguments": null,
              "start": 1842,
              "end": 1843
            },
            "extendsType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1853,
                      "end": 1859
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1862,
                      "end": 1868
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 1871,
                      "end": 1878
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 1881,
                      "end": 1887
                    }
                  ],
                  "start": 1853,
                  "end": 1887
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1898,
                        "end": 1899
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1898,
                      "end": 1899
                    },
                    "start": 1892,
                    "end": 1899
                  },
                  "start": 1889,
                  "end": 1899
                }
              ],
              "start": 1852,
              "end": 1900
            },
            "trueType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1903,
                  "end": 1906
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1910,
                  "end": 1913
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1914,
                  "end": 1917
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1927,
                  "end": 1929
                }
              ],
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1906,
                      "end": 1907
                    },
                    "typeArguments": null,
                    "start": 1906,
                    "end": 1907
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1908,
                      "end": 1909
                    },
                    "start": 1908,
                    "end": 1909
                  },
                  "start": 1906,
                  "end": 1910
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1913,
                    "end": 1914
                  },
                  "typeArguments": null,
                  "start": 1913,
                  "end": 1914
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Join",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1917,
                    "end": 1921
                  },
                  "typeArguments": {
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
                          "start": 1922,
                          "end": 1923
                        },
                        "typeArguments": null,
                        "start": 1922,
                        "end": 1923
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1925,
                          "end": 1926
                        },
                        "typeArguments": null,
                        "start": 1925,
                        "end": 1926
                      }
                    ],
                    "start": 1921,
                    "end": 1927
                  },
                  "start": 1917,
                  "end": 1927
                }
              ],
              "start": 1903,
              "end": 1929
            },
            "falseType": {
              "type": "TSStringKeyword",
              "start": 1936,
              "end": 1942
            },
            "start": 1842,
            "end": 1942
          },
          "start": 1777,
          "end": 1942
        },
        "start": 1753,
        "end": 1942
      },
      "declare": false,
      "start": 1698,
      "end": 1943
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TJ1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1950,
        "end": 1953
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Join",
          "optional": false,
          "typeAnnotation": null,
          "start": 1956,
          "end": 1960
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1962,
                    "end": 1963
                  },
                  "start": 1962,
                  "end": 1963
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1965,
                    "end": 1966
                  },
                  "start": 1965,
                  "end": 1966
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1968,
                    "end": 1969
                  },
                  "start": 1968,
                  "end": 1969
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1971,
                    "end": 1972
                  },
                  "start": 1971,
                  "end": 1972
                }
              ],
              "start": 1961,
              "end": 1973
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 1975,
                "end": 1978
              },
              "start": 1975,
              "end": 1978
            }
          ],
          "start": 1960,
          "end": 1979
        },
        "start": 1956,
        "end": 1979
      },
      "declare": false,
      "start": 1945,
      "end": 1979
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TJ2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1985,
        "end": 1988
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Join",
          "optional": false,
          "typeAnnotation": null,
          "start": 1991,
          "end": 1995
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 1997,
                    "end": 2002
                  },
                  "start": 1997,
                  "end": 2002
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 2004,
                    "end": 2009
                  },
                  "start": 2004,
                  "end": 2009
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "baz",
                    "raw": "'baz'",
                    "start": 2011,
                    "end": 2016
                  },
                  "start": 2011,
                  "end": 2016
                }
              ],
              "start": 1996,
              "end": 2017
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "-",
                "raw": "'-'",
                "start": 2019,
                "end": 2022
              },
              "start": 2019,
              "end": 2022
            }
          ],
          "start": 1995,
          "end": 2023
        },
        "start": 1991,
        "end": 2023
      },
      "declare": false,
      "start": 1980,
      "end": 2024
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TJ3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2030,
        "end": 2033
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Join",
          "optional": false,
          "typeAnnotation": null,
          "start": 2036,
          "end": 2040
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 2041,
              "end": 2043
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 2045,
                "end": 2048
              },
              "start": 2045,
              "end": 2048
            }
          ],
          "start": 2040,
          "end": 2049
        },
        "start": 2036,
        "end": 2049
      },
      "declare": false,
      "start": 2025,
      "end": 2049
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MatchPair",
        "optional": false,
        "typeAnnotation": null,
        "start": 2090,
        "end": 2099
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2100,
              "end": 2101
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2110,
              "end": 2116
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2100,
            "end": 2116
          }
        ],
        "start": 2099,
        "end": 2117
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 2120,
            "end": 2121
          },
          "typeArguments": null,
          "start": 2120,
          "end": 2121
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "[",
                "cooked": "["
              },
              "tail": false,
              "start": 2130,
              "end": 2134
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ",",
                "cooked": ","
              },
              "tail": false,
              "start": 2141,
              "end": 2145
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "]",
                "cooked": "]"
              },
              "tail": true,
              "start": 2152,
              "end": 2155
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2140,
                  "end": 2141
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2140,
                "end": 2141
              },
              "start": 2134,
              "end": 2141
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2151,
                  "end": 2152
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2151,
                "end": 2152
              },
              "start": 2145,
              "end": 2152
            }
          ],
          "start": 2130,
          "end": 2155
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 2159,
                "end": 2160
              },
              "typeArguments": null,
              "start": 2159,
              "end": 2160
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 2162,
                "end": 2163
              },
              "typeArguments": null,
              "start": 2162,
              "end": 2163
            }
          ],
          "start": 2158,
          "end": 2164
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 2167,
          "end": 2174
        },
        "start": 2120,
        "end": 2174
      },
      "declare": false,
      "start": 2085,
      "end": 2175
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 2182,
        "end": 2185
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null,
          "start": 2188,
          "end": 2197
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "[1,2]",
                "raw": "'[1,2]'",
                "start": 2198,
                "end": 2205
              },
              "start": 2198,
              "end": 2205
            }
          ],
          "start": 2197,
          "end": 2206
        },
        "start": 2188,
        "end": 2206
      },
      "declare": false,
      "start": 2177,
      "end": 2207
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 2228,
        "end": 2231
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null,
          "start": 2234,
          "end": 2243
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "[foo,bar]",
                "raw": "'[foo,bar]'",
                "start": 2244,
                "end": 2255
              },
              "start": 2244,
              "end": 2255
            }
          ],
          "start": 2243,
          "end": 2256
        },
        "start": 2234,
        "end": 2256
      },
      "declare": false,
      "start": 2223,
      "end": 2257
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 2282,
        "end": 2285
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null,
          "start": 2288,
          "end": 2297
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": " [1,2]",
                "raw": "' [1,2]'",
                "start": 2298,
                "end": 2306
              },
              "start": 2298,
              "end": 2306
            }
          ],
          "start": 2297,
          "end": 2307
        },
        "start": 2288,
        "end": 2307
      },
      "declare": false,
      "start": 2277,
      "end": 2308
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T23",
        "optional": false,
        "typeAnnotation": null,
        "start": 2326,
        "end": 2329
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null,
          "start": 2332,
          "end": 2341
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "[123]",
                "raw": "'[123]'",
                "start": 2342,
                "end": 2349
              },
              "start": 2342,
              "end": 2349
            }
          ],
          "start": 2341,
          "end": 2350
        },
        "start": 2332,
        "end": 2350
      },
      "declare": false,
      "start": 2321,
      "end": 2351
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T24",
        "optional": false,
        "typeAnnotation": null,
        "start": 2369,
        "end": 2372
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null,
          "start": 2375,
          "end": 2384
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "[1,2,3,4]",
                "raw": "'[1,2,3,4]'",
                "start": 2385,
                "end": 2396
              },
              "start": 2385,
              "end": 2396
            }
          ],
          "start": 2384,
          "end": 2397
        },
        "start": 2375,
        "end": 2397
      },
      "declare": false,
      "start": 2364,
      "end": 2398
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SnakeToCamelCase",
        "optional": false,
        "typeAnnotation": null,
        "start": 2424,
        "end": 2440
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2441,
              "end": 2442
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2451,
              "end": 2457
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2441,
            "end": 2457
          }
        ],
        "start": 2440,
        "end": 2458
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 2465,
            "end": 2466
          },
          "typeArguments": null,
          "start": 2465,
          "end": 2466
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2475,
              "end": 2478
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "_",
                "cooked": "_"
              },
              "tail": false,
              "start": 2485,
              "end": 2489
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2496,
              "end": 2498
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2484,
                  "end": 2485
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2484,
                "end": 2485
              },
              "start": 2478,
              "end": 2485
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2495,
                  "end": 2496
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2495,
                "end": 2496
              },
              "start": 2489,
              "end": 2496
            }
          ],
          "start": 2475,
          "end": 2498
        },
        "trueType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2501,
              "end": 2504
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2516,
              "end": 2519
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2539,
              "end": 2541
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Lowercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 2504,
                "end": 2513
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
                      "start": 2514,
                      "end": 2515
                    },
                    "typeArguments": null,
                    "start": 2514,
                    "end": 2515
                  }
                ],
                "start": 2513,
                "end": 2516
              },
              "start": 2504,
              "end": 2516
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SnakeToPascalCase",
                "optional": false,
                "typeAnnotation": null,
                "start": 2519,
                "end": 2536
              },
              "typeArguments": {
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
                      "start": 2537,
                      "end": 2538
                    },
                    "typeArguments": null,
                    "start": 2537,
                    "end": 2538
                  }
                ],
                "start": 2536,
                "end": 2539
              },
              "start": 2519,
              "end": 2539
            }
          ],
          "start": 2501,
          "end": 2541
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2548,
              "end": 2549
            },
            "typeArguments": null,
            "start": 2548,
            "end": 2549
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 2558,
                "end": 2561
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 2568,
                "end": 2570
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2567,
                    "end": 2568
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2567,
                  "end": 2568
                },
                "start": 2561,
                "end": 2568
              }
            ],
            "start": 2558,
            "end": 2570
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 2573,
                "end": 2576
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 2588,
                "end": 2590
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2576,
                  "end": 2585
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
                        "start": 2586,
                        "end": 2587
                      },
                      "typeArguments": null,
                      "start": 2586,
                      "end": 2587
                    }
                  ],
                  "start": 2585,
                  "end": 2588
                },
                "start": 2576,
                "end": 2588
              }
            ],
            "start": 2573,
            "end": 2590
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SnakeToPascalCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 2597,
              "end": 2614
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2615,
                    "end": 2616
                  },
                  "typeArguments": null,
                  "start": 2615,
                  "end": 2616
                }
              ],
              "start": 2614,
              "end": 2617
            },
            "start": 2597,
            "end": 2617
          },
          "start": 2548,
          "end": 2617
        },
        "start": 2465,
        "end": 2617
      },
      "declare": false,
      "start": 2419,
      "end": 2618
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SnakeToPascalCase",
        "optional": false,
        "typeAnnotation": null,
        "start": 2625,
        "end": 2642
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2643,
              "end": 2644
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2653,
              "end": 2659
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2643,
            "end": 2659
          }
        ],
        "start": 2642,
        "end": 2660
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "start": 2667,
          "end": 2673
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 2682,
            "end": 2683
          },
          "typeArguments": null,
          "start": 2682,
          "end": 2683
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 2686,
          "end": 2692
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2699,
              "end": 2700
            },
            "typeArguments": null,
            "start": 2699,
            "end": 2700
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 2709,
                "end": 2712
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "_",
                  "cooked": "_"
                },
                "tail": false,
                "start": 2719,
                "end": 2723
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 2730,
                "end": 2732
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2718,
                    "end": 2719
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2718,
                  "end": 2719
                },
                "start": 2712,
                "end": 2719
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2729,
                    "end": 2730
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2729,
                  "end": 2730
                },
                "start": 2723,
                "end": 2730
              }
            ],
            "start": 2709,
            "end": 2732
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 2735,
                "end": 2738
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 2762,
                "end": 2765
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 2785,
                "end": 2787
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Capitalize",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2738,
                  "end": 2748
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Lowercase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2749,
                        "end": 2758
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
                              "start": 2759,
                              "end": 2760
                            },
                            "typeArguments": null,
                            "start": 2759,
                            "end": 2760
                          }
                        ],
                        "start": 2758,
                        "end": 2761
                      },
                      "start": 2749,
                      "end": 2761
                    }
                  ],
                  "start": 2748,
                  "end": 2762
                },
                "start": 2738,
                "end": 2762
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SnakeToPascalCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2765,
                  "end": 2782
                },
                "typeArguments": {
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
                        "start": 2783,
                        "end": 2784
                      },
                      "typeArguments": null,
                      "start": 2783,
                      "end": 2784
                    }
                  ],
                  "start": 2782,
                  "end": 2785
                },
                "start": 2765,
                "end": 2785
              }
            ],
            "start": 2735,
            "end": 2787
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 2794,
                "end": 2795
              },
              "typeArguments": null,
              "start": 2794,
              "end": 2795
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 2804,
                  "end": 2807
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2814,
                  "end": 2816
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2813,
                      "end": 2814
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2813,
                    "end": 2814
                  },
                  "start": 2807,
                  "end": 2814
                }
              ],
              "start": 2804,
              "end": 2816
            },
            "trueType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 2819,
                  "end": 2822
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2846,
                  "end": 2848
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Capitalize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2822,
                    "end": 2832
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Lowercase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2833,
                          "end": 2842
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
                                "start": 2843,
                                "end": 2844
                              },
                              "typeArguments": null,
                              "start": 2843,
                              "end": 2844
                            }
                          ],
                          "start": 2842,
                          "end": 2845
                        },
                        "start": 2833,
                        "end": 2845
                      }
                    ],
                    "start": 2832,
                    "end": 2846
                  },
                  "start": 2822,
                  "end": 2846
                }
              ],
              "start": 2819,
              "end": 2848
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 2855,
              "end": 2860
            },
            "start": 2794,
            "end": 2860
          },
          "start": 2699,
          "end": 2860
        },
        "start": 2667,
        "end": 2860
      },
      "declare": false,
      "start": 2620,
      "end": 2861
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RR0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2868,
        "end": 2871
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SnakeToPascalCase",
          "optional": false,
          "typeAnnotation": null,
          "start": 2874,
          "end": 2891
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello_world_foo",
                "raw": "'hello_world_foo'",
                "start": 2892,
                "end": 2909
              },
              "start": 2892,
              "end": 2909
            }
          ],
          "start": 2891,
          "end": 2910
        },
        "start": 2874,
        "end": 2910
      },
      "declare": false,
      "start": 2863,
      "end": 2911
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RR1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2937,
        "end": 2940
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SnakeToPascalCase",
          "optional": false,
          "typeAnnotation": null,
          "start": 2943,
          "end": 2960
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "FOO_BAR_BAZ",
                "raw": "'FOO_BAR_BAZ'",
                "start": 2961,
                "end": 2974
              },
              "start": 2961,
              "end": 2974
            }
          ],
          "start": 2960,
          "end": 2975
        },
        "start": 2943,
        "end": 2975
      },
      "declare": false,
      "start": 2932,
      "end": 2976
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RR2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2998,
        "end": 3001
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SnakeToCamelCase",
          "optional": false,
          "typeAnnotation": null,
          "start": 3004,
          "end": 3020
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello_world_foo",
                "raw": "'hello_world_foo'",
                "start": 3021,
                "end": 3038
              },
              "start": 3021,
              "end": 3038
            }
          ],
          "start": 3020,
          "end": 3039
        },
        "start": 3004,
        "end": 3039
      },
      "declare": false,
      "start": 2993,
      "end": 3040
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RR3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3066,
        "end": 3069
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SnakeToCamelCase",
          "optional": false,
          "typeAnnotation": null,
          "start": 3072,
          "end": 3088
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "FOO_BAR_BAZ",
                "raw": "'FOO_BAR_BAZ'",
                "start": 3089,
                "end": 3102
              },
              "start": 3089,
              "end": 3102
            }
          ],
          "start": 3088,
          "end": 3103
        },
        "start": 3072,
        "end": 3103
      },
      "declare": false,
      "start": 3061,
      "end": 3104
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FirstTwoAndRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 3158,
        "end": 3173
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 3174,
              "end": 3175
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3184,
              "end": 3190
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3174,
            "end": 3190
          }
        ],
        "start": 3173,
        "end": 3191
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 3194,
            "end": 3195
          },
          "typeArguments": null,
          "start": 3194,
          "end": 3195
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3204,
              "end": 3207
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3214,
              "end": 3217
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3224,
              "end": 3227
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3234,
              "end": 3236
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3213,
                  "end": 3214
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3213,
                "end": 3214
              },
              "start": 3207,
              "end": 3214
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3223,
                  "end": 3224
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3223,
                "end": 3224
              },
              "start": 3217,
              "end": 3224
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3233,
                  "end": 3234
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3233,
                "end": 3234
              },
              "start": 3227,
              "end": 3234
            }
          ],
          "start": 3204,
          "end": 3236
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3240,
                  "end": 3243
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3244,
                  "end": 3247
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3248,
                  "end": 3250
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3243,
                    "end": 3244
                  },
                  "typeArguments": null,
                  "start": 3243,
                  "end": 3244
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3247,
                    "end": 3248
                  },
                  "typeArguments": null,
                  "start": 3247,
                  "end": 3248
                }
              ],
              "start": 3240,
              "end": 3250
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 3252,
                "end": 3253
              },
              "typeArguments": null,
              "start": 3252,
              "end": 3253
            }
          ],
          "start": 3239,
          "end": 3254
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 3257,
          "end": 3264
        },
        "start": 3194,
        "end": 3264
      },
      "declare": false,
      "start": 3153,
      "end": 3265
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T25",
        "optional": false,
        "typeAnnotation": null,
        "start": 3272,
        "end": 3275
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "FirstTwoAndRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 3278,
          "end": 3293
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "abcde",
                "raw": "'abcde'",
                "start": 3294,
                "end": 3301
              },
              "start": 3294,
              "end": 3301
            }
          ],
          "start": 3293,
          "end": 3302
        },
        "start": 3278,
        "end": 3302
      },
      "declare": false,
      "start": 3267,
      "end": 3303
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T26",
        "optional": false,
        "typeAnnotation": null,
        "start": 3327,
        "end": 3330
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "FirstTwoAndRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 3333,
          "end": 3348
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "ab",
                "raw": "'ab'",
                "start": 3349,
                "end": 3353
              },
              "start": 3349,
              "end": 3353
            }
          ],
          "start": 3348,
          "end": 3354
        },
        "start": 3333,
        "end": 3354
      },
      "declare": false,
      "start": 3322,
      "end": 3355
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T27",
        "optional": false,
        "typeAnnotation": null,
        "start": 3376,
        "end": 3379
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "FirstTwoAndRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 3382,
          "end": 3397
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 3398,
                "end": 3401
              },
              "start": 3398,
              "end": 3401
            }
          ],
          "start": 3397,
          "end": 3402
        },
        "start": 3382,
        "end": 3402
      },
      "declare": false,
      "start": 3371,
      "end": 3403
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HexDigit",
        "optional": false,
        "typeAnnotation": null,
        "start": 3422,
        "end": 3430
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "0",
              "raw": "'0'",
              "start": 3433,
              "end": 3436
            },
            "start": 3433,
            "end": 3436
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 3439,
              "end": 3442
            },
            "start": 3439,
            "end": 3442
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "2",
              "raw": "'2'",
              "start": 3445,
              "end": 3448
            },
            "start": 3445,
            "end": 3448
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "3",
              "raw": "'3'",
              "start": 3451,
              "end": 3454
            },
            "start": 3451,
            "end": 3454
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "4",
              "raw": "'4'",
              "start": 3457,
              "end": 3460
            },
            "start": 3457,
            "end": 3460
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "5",
              "raw": "'5'",
              "start": 3463,
              "end": 3466
            },
            "start": 3463,
            "end": 3466
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "6",
              "raw": "'6'",
              "start": 3469,
              "end": 3472
            },
            "start": 3469,
            "end": 3472
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "7",
              "raw": "'7'",
              "start": 3475,
              "end": 3478
            },
            "start": 3475,
            "end": 3478
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "8",
              "raw": "'8'",
              "start": 3480,
              "end": 3483
            },
            "start": 3480,
            "end": 3483
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "9",
              "raw": "'9'",
              "start": 3486,
              "end": 3489
            },
            "start": 3486,
            "end": 3489
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "A",
              "raw": "'A'",
              "start": 3492,
              "end": 3495
            },
            "start": 3492,
            "end": 3495
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "B",
              "raw": "'B'",
              "start": 3498,
              "end": 3501
            },
            "start": 3498,
            "end": 3501
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "C",
              "raw": "'C'",
              "start": 3504,
              "end": 3507
            },
            "start": 3504,
            "end": 3507
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "D",
              "raw": "'D'",
              "start": 3510,
              "end": 3513
            },
            "start": 3510,
            "end": 3513
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "E",
              "raw": "'E'",
              "start": 3516,
              "end": 3519
            },
            "start": 3516,
            "end": 3519
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "F",
              "raw": "'F'",
              "start": 3522,
              "end": 3525
            },
            "start": 3522,
            "end": 3525
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 3528,
              "end": 3531
            },
            "start": 3528,
            "end": 3531
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 3534,
              "end": 3537
            },
            "start": 3534,
            "end": 3537
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "c",
              "raw": "'c'",
              "start": 3540,
              "end": 3543
            },
            "start": 3540,
            "end": 3543
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "d",
              "raw": "'d'",
              "start": 3546,
              "end": 3549
            },
            "start": 3546,
            "end": 3549
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "e",
              "raw": "'e'",
              "start": 3552,
              "end": 3555
            },
            "start": 3552,
            "end": 3555
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "f",
              "raw": "'f'",
              "start": 3558,
              "end": 3561
            },
            "start": 3558,
            "end": 3561
          }
        ],
        "start": 3433,
        "end": 3561
      },
      "declare": false,
      "start": 3417,
      "end": 3562
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HexColor",
        "optional": false,
        "typeAnnotation": null,
        "start": 3569,
        "end": 3577
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 3578,
              "end": 3579
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3588,
              "end": 3594
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3578,
            "end": 3594
          }
        ],
        "start": 3577,
        "end": 3595
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 3602,
            "end": 3603
          },
          "typeArguments": null,
          "start": 3602,
          "end": 3603
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "#",
                "cooked": "#"
              },
              "tail": false,
              "start": 3612,
              "end": 3616
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3624,
              "end": 3627
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3635,
              "end": 3638
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3646,
              "end": 3649
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3657,
              "end": 3660
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3668,
              "end": 3671
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3679,
              "end": 3681
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3622,
                  "end": 3624
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3622,
                "end": 3624
              },
              "start": 3616,
              "end": 3624
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3633,
                  "end": 3635
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3633,
                "end": 3635
              },
              "start": 3627,
              "end": 3635
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3644,
                  "end": 3646
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3644,
                "end": 3646
              },
              "start": 3638,
              "end": 3646
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3655,
                  "end": 3657
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3655,
                "end": 3657
              },
              "start": 3649,
              "end": 3657
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3666,
                  "end": 3668
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3666,
                "end": 3668
              },
              "start": 3660,
              "end": 3668
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3677,
                  "end": 3679
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3677,
                "end": 3679
              },
              "start": 3671,
              "end": 3679
            }
          ],
          "start": 3612,
          "end": 3681
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3693,
                  "end": 3695
                },
                "typeArguments": null,
                "start": 3693,
                "end": 3695
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3697,
                  "end": 3699
                },
                "typeArguments": null,
                "start": 3697,
                "end": 3699
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3701,
                  "end": 3703
                },
                "typeArguments": null,
                "start": 3701,
                "end": 3703
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3705,
                  "end": 3707
                },
                "typeArguments": null,
                "start": 3705,
                "end": 3707
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3709,
                  "end": 3711
                },
                "typeArguments": null,
                "start": 3709,
                "end": 3711
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3713,
                  "end": 3715
                },
                "typeArguments": null,
                "start": 3713,
                "end": 3715
              }
            ],
            "start": 3692,
            "end": 3716
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3726,
                  "end": 3734
                },
                "typeArguments": null,
                "start": 3726,
                "end": 3734
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3736,
                  "end": 3744
                },
                "typeArguments": null,
                "start": 3736,
                "end": 3744
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3746,
                  "end": 3754
                },
                "typeArguments": null,
                "start": 3746,
                "end": 3754
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3756,
                  "end": 3764
                },
                "typeArguments": null,
                "start": 3756,
                "end": 3764
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3766,
                  "end": 3774
                },
                "typeArguments": null,
                "start": 3766,
                "end": 3774
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3776,
                  "end": 3784
                },
                "typeArguments": null,
                "start": 3776,
                "end": 3784
              }
            ],
            "start": 3725,
            "end": 3785
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 3800,
              "end": 3801
            },
            "typeArguments": null,
            "start": 3800,
            "end": 3801
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 3816,
            "end": 3821
          },
          "start": 3692,
          "end": 3821
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3832,
          "end": 3837
        },
        "start": 3602,
        "end": 3837
      },
      "declare": false,
      "start": 3564,
      "end": 3838
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TH1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3845,
        "end": 3848
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "HexColor",
          "optional": false,
          "typeAnnotation": null,
          "start": 3851,
          "end": 3859
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "#8080FF",
                "raw": "'#8080FF'",
                "start": 3860,
                "end": 3869
              },
              "start": 3860,
              "end": 3869
            }
          ],
          "start": 3859,
          "end": 3870
        },
        "start": 3851,
        "end": 3870
      },
      "declare": false,
      "start": 3840,
      "end": 3871
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TH2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3891,
        "end": 3894
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "HexColor",
          "optional": false,
          "typeAnnotation": null,
          "start": 3897,
          "end": 3905
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "#80c0ff",
                "raw": "'#80c0ff'",
                "start": 3906,
                "end": 3915
              },
              "start": 3906,
              "end": 3915
            }
          ],
          "start": 3905,
          "end": 3916
        },
        "start": 3897,
        "end": 3916
      },
      "declare": false,
      "start": 3886,
      "end": 3917
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TH3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3937,
        "end": 3940
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "HexColor",
          "optional": false,
          "typeAnnotation": null,
          "start": 3943,
          "end": 3951
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "#8080F",
                "raw": "'#8080F'",
                "start": 3952,
                "end": 3960
              },
              "start": 3952,
              "end": 3960
            }
          ],
          "start": 3951,
          "end": 3961
        },
        "start": 3943,
        "end": 3961
      },
      "declare": false,
      "start": 3932,
      "end": 3962
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TH4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3978,
        "end": 3981
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "HexColor",
          "optional": false,
          "typeAnnotation": null,
          "start": 3984,
          "end": 3992
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "#8080FFF",
                "raw": "'#8080FFF'",
                "start": 3993,
                "end": 4003
              },
              "start": 3993,
              "end": 4003
            }
          ],
          "start": 3992,
          "end": 4004
        },
        "start": 3984,
        "end": 4004
      },
      "declare": false,
      "start": 3973,
      "end": 4005
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Trim",
        "optional": false,
        "typeAnnotation": null,
        "start": 4046,
        "end": 4050
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 4051,
              "end": 4052
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4061,
              "end": 4067
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4051,
            "end": 4067
          }
        ],
        "start": 4050,
        "end": 4068
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 4075,
            "end": 4076
          },
          "typeArguments": null,
          "start": 4075,
          "end": 4076
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": " ",
                "cooked": " "
              },
              "tail": false,
              "start": 4085,
              "end": 4089
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 4096,
              "end": 4098
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4095,
                  "end": 4096
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4095,
                "end": 4096
              },
              "start": 4089,
              "end": 4096
            }
          ],
          "start": 4085,
          "end": 4098
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Trim",
            "optional": false,
            "typeAnnotation": null,
            "start": 4101,
            "end": 4105
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
                  "start": 4106,
                  "end": 4107
                },
                "typeArguments": null,
                "start": 4106,
                "end": 4107
              }
            ],
            "start": 4105,
            "end": 4108
          },
          "start": 4101,
          "end": 4108
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 4115,
              "end": 4116
            },
            "typeArguments": null,
            "start": 4115,
            "end": 4116
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 4125,
                "end": 4128
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " ",
                  "cooked": " "
                },
                "tail": true,
                "start": 4135,
                "end": 4138
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4134,
                    "end": 4135
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4134,
                  "end": 4135
                },
                "start": 4128,
                "end": 4135
              }
            ],
            "start": 4125,
            "end": 4138
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Trim",
              "optional": false,
              "typeAnnotation": null,
              "start": 4141,
              "end": 4145
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
                    "start": 4146,
                    "end": 4147
                  },
                  "typeArguments": null,
                  "start": 4146,
                  "end": 4147
                }
              ],
              "start": 4145,
              "end": 4148
            },
            "start": 4141,
            "end": 4148
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 4155,
              "end": 4156
            },
            "typeArguments": null,
            "start": 4155,
            "end": 4156
          },
          "start": 4115,
          "end": 4156
        },
        "start": 4075,
        "end": 4156
      },
      "declare": false,
      "start": 4041,
      "end": 4157
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TR1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4164,
        "end": 4167
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null,
          "start": 4170,
          "end": 4174
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "xx   ",
                "raw": "'xx   '",
                "start": 4175,
                "end": 4182
              },
              "start": 4175,
              "end": 4182
            }
          ],
          "start": 4174,
          "end": 4183
        },
        "start": 4170,
        "end": 4183
      },
      "declare": false,
      "start": 4159,
      "end": 4184
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TR2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4199,
        "end": 4202
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null,
          "start": 4205,
          "end": 4209
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "   xx",
                "raw": "'   xx'",
                "start": 4210,
                "end": 4217
              },
              "start": 4210,
              "end": 4217
            }
          ],
          "start": 4209,
          "end": 4218
        },
        "start": 4205,
        "end": 4218
      },
      "declare": false,
      "start": 4194,
      "end": 4219
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TR3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4234,
        "end": 4237
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null,
          "start": 4240,
          "end": 4244
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "   xx   ",
                "raw": "'   xx   '",
                "start": 4245,
                "end": 4255
              },
              "start": 4245,
              "end": 4255
            }
          ],
          "start": 4244,
          "end": 4256
        },
        "start": 4240,
        "end": 4256
      },
      "declare": false,
      "start": 4229,
      "end": 4257
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Split",
        "optional": false,
        "typeAnnotation": null,
        "start": 4273,
        "end": 4278
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 4279,
              "end": 4280
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4289,
              "end": 4295
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4279,
            "end": 4295
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 4297,
              "end": 4298
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4307,
              "end": 4313
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4297,
            "end": 4313
          }
        ],
        "start": 4278,
        "end": 4314
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "start": 4321,
          "end": 4327
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 4336,
            "end": 4337
          },
          "typeArguments": null,
          "start": 4336,
          "end": 4337
        },
        "trueType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 4340,
            "end": 4346
          },
          "start": 4340,
          "end": 4348
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 4355,
              "end": 4356
            },
            "typeArguments": null,
            "start": 4355,
            "end": 4356
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 4365,
              "end": 4367
            },
            "start": 4365,
            "end": 4367
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [],
            "start": 4370,
            "end": 4372
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 4379,
                "end": 4380
              },
              "typeArguments": null,
              "start": 4379,
              "end": 4380
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4389,
                  "end": 4392
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4399,
                  "end": 4402
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4403,
                  "end": 4406
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 4413,
                  "end": 4415
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4398,
                      "end": 4399
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4398,
                    "end": 4399
                  },
                  "start": 4392,
                  "end": 4399
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4402,
                    "end": 4403
                  },
                  "typeArguments": null,
                  "start": 4402,
                  "end": 4403
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4412,
                      "end": 4413
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4412,
                    "end": 4413
                  },
                  "start": 4406,
                  "end": 4413
                }
              ],
              "start": 4389,
              "end": 4415
            },
            "trueType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4419,
                    "end": 4420
                  },
                  "typeArguments": null,
                  "start": 4419,
                  "end": 4420
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Split",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4425,
                      "end": 4430
                    },
                    "typeArguments": {
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
                            "start": 4431,
                            "end": 4432
                          },
                          "typeArguments": null,
                          "start": 4431,
                          "end": 4432
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4434,
                            "end": 4435
                          },
                          "typeArguments": null,
                          "start": 4434,
                          "end": 4435
                        }
                      ],
                      "start": 4430,
                      "end": 4436
                    },
                    "start": 4425,
                    "end": 4436
                  },
                  "start": 4422,
                  "end": 4436
                }
              ],
              "start": 4418,
              "end": 4437
            },
            "falseType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4445,
                    "end": 4446
                  },
                  "typeArguments": null,
                  "start": 4445,
                  "end": 4446
                }
              ],
              "start": 4444,
              "end": 4447
            },
            "start": 4379,
            "end": 4447
          },
          "start": 4355,
          "end": 4447
        },
        "start": 4321,
        "end": 4447
      },
      "declare": false,
      "start": 4268,
      "end": 4448
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null,
        "start": 4455,
        "end": 4458
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null,
          "start": 4461,
          "end": 4466
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 4467,
                "end": 4472
              },
              "start": 4467,
              "end": 4472
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 4474,
                "end": 4477
              },
              "start": 4474,
              "end": 4477
            }
          ],
          "start": 4466,
          "end": 4478
        },
        "start": 4461,
        "end": 4478
      },
      "declare": false,
      "start": 4450,
      "end": 4479
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T41",
        "optional": false,
        "typeAnnotation": null,
        "start": 4497,
        "end": 4500
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null,
          "start": 4503,
          "end": 4508
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo.bar.baz",
                "raw": "'foo.bar.baz'",
                "start": 4509,
                "end": 4522
              },
              "start": 4509,
              "end": 4522
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 4524,
                "end": 4527
              },
              "start": 4524,
              "end": 4527
            }
          ],
          "start": 4508,
          "end": 4528
        },
        "start": 4503,
        "end": 4528
      },
      "declare": false,
      "start": 4492,
      "end": 4529
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T42",
        "optional": false,
        "typeAnnotation": null,
        "start": 4561,
        "end": 4564
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null,
          "start": 4567,
          "end": 4572
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo.bar",
                "raw": "'foo.bar'",
                "start": 4573,
                "end": 4582
              },
              "start": 4573,
              "end": 4582
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 4584,
                "end": 4586
              },
              "start": 4584,
              "end": 4586
            }
          ],
          "start": 4572,
          "end": 4587
        },
        "start": 4567,
        "end": 4587
      },
      "declare": false,
      "start": 4556,
      "end": 4588
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T43",
        "optional": false,
        "typeAnnotation": null,
        "start": 4634,
        "end": 4637
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null,
          "start": 4640,
          "end": 4645
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 4646,
              "end": 4649
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 4651,
                "end": 4654
              },
              "start": 4651,
              "end": 4654
            }
          ],
          "start": 4645,
          "end": 4655
        },
        "start": 4640,
        "end": 4655
      },
      "declare": false,
      "start": 4629,
      "end": 4656
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 4726,
        "end": 4733
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4734,
              "end": 4735
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4734,
            "end": 4735
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null,
              "start": 4737,
              "end": 4739
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4754,
                      "end": 4755
                    },
                    "typeArguments": null,
                    "start": 4754,
                    "end": 4755
                  },
                  "start": 4748,
                  "end": 4755
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4758,
                  "end": 4764
                }
              ],
              "start": 4748,
              "end": 4764
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4737,
            "end": 4764
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4766,
              "end": 4768
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4783,
                        "end": 4784
                      },
                      "typeArguments": null,
                      "start": 4783,
                      "end": 4784
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4785,
                        "end": 4787
                      },
                      "typeArguments": null,
                      "start": 4785,
                      "end": 4787
                    },
                    "start": 4783,
                    "end": 4788
                  },
                  "start": 4777,
                  "end": 4788
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4791,
                  "end": 4797
                }
              ],
              "start": 4777,
              "end": 4797
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4766,
            "end": 4797
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4799,
              "end": 4801
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4816,
                          "end": 4817
                        },
                        "typeArguments": null,
                        "start": 4816,
                        "end": 4817
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4818,
                          "end": 4820
                        },
                        "typeArguments": null,
                        "start": 4818,
                        "end": 4820
                      },
                      "start": 4816,
                      "end": 4821
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4822,
                        "end": 4824
                      },
                      "typeArguments": null,
                      "start": 4822,
                      "end": 4824
                    },
                    "start": 4816,
                    "end": 4825
                  },
                  "start": 4810,
                  "end": 4825
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4828,
                  "end": 4834
                }
              ],
              "start": 4810,
              "end": 4834
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4799,
            "end": 4834
          }
        ],
        "start": 4733,
        "end": 4835
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4841,
                "end": 4842
              },
              "typeArguments": null,
              "start": 4841,
              "end": 4842
            },
            "start": 4839,
            "end": 4842
          },
          "start": 4836,
          "end": 4842
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4850,
                  "end": 4853
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": ".",
                    "cooked": "."
                  },
                  "tail": false,
                  "start": 4855,
                  "end": 4859
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": ".",
                    "cooked": "."
                  },
                  "tail": false,
                  "start": 4861,
                  "end": 4865
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 4867,
                  "end": 4869
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4853,
                    "end": 4855
                  },
                  "typeArguments": null,
                  "start": 4853,
                  "end": 4855
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4859,
                    "end": 4861
                  },
                  "typeArguments": null,
                  "start": 4859,
                  "end": 4861
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4865,
                    "end": 4867
                  },
                  "typeArguments": null,
                  "start": 4865,
                  "end": 4867
                }
              ],
              "start": 4850,
              "end": 4869
            },
            "start": 4848,
            "end": 4869
          },
          "start": 4844,
          "end": 4869
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4872,
                  "end": 4873
                },
                "typeArguments": null,
                "start": 4872,
                "end": 4873
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4874,
                  "end": 4876
                },
                "typeArguments": null,
                "start": 4874,
                "end": 4876
              },
              "start": 4872,
              "end": 4877
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4878,
                "end": 4880
              },
              "typeArguments": null,
              "start": 4878,
              "end": 4880
            },
            "start": 4872,
            "end": 4881
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4882,
              "end": 4884
            },
            "typeArguments": null,
            "start": 4882,
            "end": 4884
          },
          "start": 4872,
          "end": 4885
        },
        "start": 4870,
        "end": 4885
      },
      "body": null,
      "expression": false,
      "start": 4709,
      "end": 4886
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 4904,
        "end": 4911
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4912,
              "end": 4913
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4912,
            "end": 4913
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null,
              "start": 4915,
              "end": 4917
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4932,
                      "end": 4933
                    },
                    "typeArguments": null,
                    "start": 4932,
                    "end": 4933
                  },
                  "start": 4926,
                  "end": 4933
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4936,
                  "end": 4942
                }
              ],
              "start": 4926,
              "end": 4942
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4915,
            "end": 4942
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4944,
              "end": 4946
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4961,
                        "end": 4962
                      },
                      "typeArguments": null,
                      "start": 4961,
                      "end": 4962
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4963,
                        "end": 4965
                      },
                      "typeArguments": null,
                      "start": 4963,
                      "end": 4965
                    },
                    "start": 4961,
                    "end": 4966
                  },
                  "start": 4955,
                  "end": 4966
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4969,
                  "end": 4975
                }
              ],
              "start": 4955,
              "end": 4975
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4944,
            "end": 4975
          }
        ],
        "start": 4911,
        "end": 4976
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4982,
                "end": 4983
              },
              "typeArguments": null,
              "start": 4982,
              "end": 4983
            },
            "start": 4980,
            "end": 4983
          },
          "start": 4977,
          "end": 4983
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4991,
                  "end": 4994
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": ".",
                    "cooked": "."
                  },
                  "tail": false,
                  "start": 4996,
                  "end": 5000
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 5002,
                  "end": 5004
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4994,
                    "end": 4996
                  },
                  "typeArguments": null,
                  "start": 4994,
                  "end": 4996
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5000,
                    "end": 5002
                  },
                  "typeArguments": null,
                  "start": 5000,
                  "end": 5002
                }
              ],
              "start": 4991,
              "end": 5004
            },
            "start": 4989,
            "end": 5004
          },
          "start": 4985,
          "end": 5004
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5007,
                "end": 5008
              },
              "typeArguments": null,
              "start": 5007,
              "end": 5008
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null,
                "start": 5009,
                "end": 5011
              },
              "typeArguments": null,
              "start": 5009,
              "end": 5011
            },
            "start": 5007,
            "end": 5012
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5013,
              "end": 5015
            },
            "typeArguments": null,
            "start": 5013,
            "end": 5015
          },
          "start": 5007,
          "end": 5016
        },
        "start": 5005,
        "end": 5016
      },
      "body": null,
      "expression": false,
      "start": 4887,
      "end": 5017
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 5035,
        "end": 5042
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 5043,
              "end": 5044
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5043,
            "end": 5044
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null,
              "start": 5046,
              "end": 5048
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5063,
                      "end": 5064
                    },
                    "typeArguments": null,
                    "start": 5063,
                    "end": 5064
                  },
                  "start": 5057,
                  "end": 5064
                },
                {
                  "type": "TSStringKeyword",
                  "start": 5067,
                  "end": 5073
                }
              ],
              "start": 5057,
              "end": 5073
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5046,
            "end": 5073
          }
        ],
        "start": 5042,
        "end": 5074
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5080,
                "end": 5081
              },
              "typeArguments": null,
              "start": 5080,
              "end": 5081
            },
            "start": 5078,
            "end": 5081
          },
          "start": 5075,
          "end": 5081
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null,
                "start": 5089,
                "end": 5091
              },
              "typeArguments": null,
              "start": 5089,
              "end": 5091
            },
            "start": 5087,
            "end": 5091
          },
          "start": 5083,
          "end": 5091
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5094,
              "end": 5095
            },
            "typeArguments": null,
            "start": 5094,
            "end": 5095
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null,
              "start": 5096,
              "end": 5098
            },
            "typeArguments": null,
            "start": 5096,
            "end": 5098
          },
          "start": 5094,
          "end": 5099
        },
        "start": 5092,
        "end": 5099
      },
      "body": null,
      "expression": false,
      "start": 5018,
      "end": 5100
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 5118,
        "end": 5125
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 5131,
              "end": 5137
            },
            "start": 5129,
            "end": 5137
          },
          "start": 5126,
          "end": 5137
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 5145,
              "end": 5151
            },
            "start": 5143,
            "end": 5151
          },
          "start": 5139,
          "end": 5151
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 5154,
          "end": 5161
        },
        "start": 5152,
        "end": 5161
      },
      "body": null,
      "expression": false,
      "start": 5101,
      "end": 5162
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5168,
            "end": 5170
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 5173,
              "end": 5180
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5183,
                        "end": 5184
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5188,
                              "end": 5189
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5192,
                                    "end": 5193
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 42,
                                    "raw": "42",
                                    "start": 5195,
                                    "end": 5197
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 5192,
                                  "end": 5197
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5199,
                                    "end": 5200
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "hello",
                                    "raw": "'hello'",
                                    "start": 5202,
                                    "end": 5209
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 5199,
                                  "end": 5209
                                }
                              ],
                              "start": 5191,
                              "end": 5211
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5188,
                            "end": 5211
                          }
                        ],
                        "start": 5186,
                        "end": 5212
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 5183,
                      "end": 5212
                    }
                  ],
                  "start": 5181,
                  "end": 5213
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5217,
                    "end": 5222
                  },
                  "typeArguments": null,
                  "start": 5217,
                  "end": 5222
                },
                "start": 5181,
                "end": 5222
              },
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 5224,
                "end": 5227
              }
            ],
            "optional": false,
            "start": 5173,
            "end": 5228
          },
          "definite": false,
          "start": 5168,
          "end": 5228
        }
      ],
      "declare": false,
      "start": 5164,
      "end": 5229
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5234,
            "end": 5236
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 5239,
              "end": 5246
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5249,
                        "end": 5250
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5254,
                              "end": 5255
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5258,
                                    "end": 5259
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 42,
                                    "raw": "42",
                                    "start": 5261,
                                    "end": 5263
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 5258,
                                  "end": 5263
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5265,
                                    "end": 5266
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "hello",
                                    "raw": "'hello'",
                                    "start": 5268,
                                    "end": 5275
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 5265,
                                  "end": 5275
                                }
                              ],
                              "start": 5257,
                              "end": 5277
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5254,
                            "end": 5277
                          }
                        ],
                        "start": 5252,
                        "end": 5278
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 5249,
                      "end": 5278
                    }
                  ],
                  "start": 5247,
                  "end": 5279
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5283,
                    "end": 5288
                  },
                  "typeArguments": null,
                  "start": 5283,
                  "end": 5288
                },
                "start": 5247,
                "end": 5288
              },
              {
                "type": "Literal",
                "value": "a.b",
                "raw": "'a.b'",
                "start": 5290,
                "end": 5295
              }
            ],
            "optional": false,
            "start": 5239,
            "end": 5296
          },
          "definite": false,
          "start": 5234,
          "end": 5296
        }
      ],
      "declare": false,
      "start": 5230,
      "end": 5297
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 5302,
            "end": 5304
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 5307,
              "end": 5314
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5317,
                        "end": 5318
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5322,
                              "end": 5323
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5326,
                                    "end": 5327
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 42,
                                    "raw": "42",
                                    "start": 5329,
                                    "end": 5331
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 5326,
                                  "end": 5331
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5333,
                                    "end": 5334
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "hello",
                                    "raw": "'hello'",
                                    "start": 5336,
                                    "end": 5343
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 5333,
                                  "end": 5343
                                }
                              ],
                              "start": 5325,
                              "end": 5345
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5322,
                            "end": 5345
                          }
                        ],
                        "start": 5320,
                        "end": 5346
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 5317,
                      "end": 5346
                    }
                  ],
                  "start": 5315,
                  "end": 5347
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5351,
                    "end": 5356
                  },
                  "typeArguments": null,
                  "start": 5351,
                  "end": 5356
                },
                "start": 5315,
                "end": 5356
              },
              {
                "type": "Literal",
                "value": "a.b.d",
                "raw": "'a.b.d'",
                "start": 5358,
                "end": 5365
              }
            ],
            "optional": false,
            "start": 5307,
            "end": 5366
          },
          "definite": false,
          "start": 5302,
          "end": 5366
        }
      ],
      "declare": false,
      "start": 5298,
      "end": 5367
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5374,
        "end": 5382
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
              "start": 5383,
              "end": 5384
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5383,
            "end": 5384
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Path",
              "optional": false,
              "typeAnnotation": null,
              "start": 5386,
              "end": 5390
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5399,
              "end": 5405
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5386,
            "end": 5405
          }
        ],
        "start": 5382,
        "end": 5406
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "start": 5413,
          "end": 5419
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Path",
            "optional": false,
            "typeAnnotation": null,
            "start": 5428,
            "end": 5432
          },
          "typeArguments": null,
          "start": 5428,
          "end": 5432
        },
        "trueType": {
          "type": "TSUnknownKeyword",
          "start": 5435,
          "end": 5442
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Path",
              "optional": false,
              "typeAnnotation": null,
              "start": 5449,
              "end": 5453
            },
            "typeArguments": null,
            "start": 5449,
            "end": 5453
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5468,
                "end": 5469
              },
              "typeArguments": null,
              "start": 5468,
              "end": 5469
            },
            "start": 5462,
            "end": 5469
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5472,
                "end": 5473
              },
              "typeArguments": null,
              "start": 5472,
              "end": 5473
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Path",
                "optional": false,
                "typeAnnotation": null,
                "start": 5474,
                "end": 5478
              },
              "typeArguments": null,
              "start": 5474,
              "end": 5478
            },
            "start": 5472,
            "end": 5479
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Path",
                "optional": false,
                "typeAnnotation": null,
                "start": 5486,
                "end": 5490
              },
              "typeArguments": null,
              "start": 5486,
              "end": 5490
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 5499,
                  "end": 5502
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": ".",
                    "cooked": "."
                  },
                  "tail": false,
                  "start": 5509,
                  "end": 5513
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 5520,
                  "end": 5522
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5508,
                      "end": 5509
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 5508,
                    "end": 5509
                  },
                  "start": 5502,
                  "end": 5509
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5519,
                      "end": 5520
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 5519,
                    "end": 5520
                  },
                  "start": 5513,
                  "end": 5520
                }
              ],
              "start": 5499,
              "end": 5522
            },
            "trueType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5525,
                  "end": 5526
                },
                "typeArguments": null,
                "start": 5525,
                "end": 5526
              },
              "extendsType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5541,
                    "end": 5542
                  },
                  "typeArguments": null,
                  "start": 5541,
                  "end": 5542
                },
                "start": 5535,
                "end": 5542
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5545,
                  "end": 5553
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5554,
                          "end": 5555
                        },
                        "typeArguments": null,
                        "start": 5554,
                        "end": 5555
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5556,
                          "end": 5557
                        },
                        "typeArguments": null,
                        "start": 5556,
                        "end": 5557
                      },
                      "start": 5554,
                      "end": 5558
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5560,
                        "end": 5561
                      },
                      "typeArguments": null,
                      "start": 5560,
                      "end": 5561
                    }
                  ],
                  "start": 5553,
                  "end": 5562
                },
                "start": 5545,
                "end": 5562
              },
              "falseType": {
                "type": "TSUnknownKeyword",
                "start": 5565,
                "end": 5572
              },
              "start": 5525,
              "end": 5572
            },
            "falseType": {
              "type": "TSUnknownKeyword",
              "start": 5579,
              "end": 5586
            },
            "start": 5486,
            "end": 5586
          },
          "start": 5449,
          "end": 5586
        },
        "start": 5413,
        "end": 5586
      },
      "declare": false,
      "start": 5369,
      "end": 5587
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getPropValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 5606,
        "end": 5618
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 5619,
              "end": 5620
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5619,
            "end": 5620
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 5622,
              "end": 5623
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5632,
              "end": 5638
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5622,
            "end": 5638
          }
        ],
        "start": 5618,
        "end": 5639
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5645,
                "end": 5646
              },
              "typeArguments": null,
              "start": 5645,
              "end": 5646
            },
            "start": 5643,
            "end": 5646
          },
          "start": 5640,
          "end": 5646
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5654,
                "end": 5655
              },
              "typeArguments": null,
              "start": 5654,
              "end": 5655
            },
            "start": 5652,
            "end": 5655
          },
          "start": 5648,
          "end": 5655
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropType",
            "optional": false,
            "typeAnnotation": null,
            "start": 5658,
            "end": 5666
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
                  "start": 5667,
                  "end": 5668
                },
                "typeArguments": null,
                "start": 5667,
                "end": 5668
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5670,
                  "end": 5671
                },
                "typeArguments": null,
                "start": 5670,
                "end": 5671
              }
            ],
            "start": 5666,
            "end": 5672
          },
          "start": 5658,
          "end": 5672
        },
        "start": 5656,
        "end": 5672
      },
      "body": null,
      "expression": false,
      "start": 5589,
      "end": 5673
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                "start": 5691,
                "end": 5697
              },
              "start": 5689,
              "end": 5697
            },
            "start": 5688,
            "end": 5697
          },
          "init": null,
          "definite": false,
          "start": 5688,
          "end": 5697
        }
      ],
      "declare": true,
      "start": 5674,
      "end": 5698
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 5706,
            "end": 5709
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5714,
                  "end": 5715
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5719,
                        "end": 5720
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5723,
                              "end": 5724
                            },
                            "value": {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 5726,
                              "end": 5728
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5723,
                            "end": 5728
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5730,
                              "end": 5731
                            },
                            "value": {
                              "type": "Literal",
                              "value": "hello",
                              "raw": "'hello'",
                              "start": 5733,
                              "end": 5740
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5730,
                            "end": 5740
                          }
                        ],
                        "start": 5722,
                        "end": 5742
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 5719,
                      "end": 5742
                    }
                  ],
                  "start": 5717,
                  "end": 5743
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5714,
                "end": 5743
              }
            ],
            "start": 5712,
            "end": 5744
          },
          "definite": false,
          "start": 5706,
          "end": 5744
        }
      ],
      "declare": false,
      "start": 5700,
      "end": 5745
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 5747,
          "end": 5759
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 5760,
            "end": 5763
          },
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 5765,
            "end": 5768
          }
        ],
        "optional": false,
        "start": 5747,
        "end": 5769
      },
      "directive": null,
      "start": 5747,
      "end": 5770
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 5806,
          "end": 5818
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 5819,
            "end": 5822
          },
          {
            "type": "Literal",
            "value": "a.b",
            "raw": "'a.b'",
            "start": 5824,
            "end": 5829
          }
        ],
        "optional": false,
        "start": 5806,
        "end": 5830
      },
      "directive": null,
      "start": 5806,
      "end": 5831
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 5860,
          "end": 5872
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 5873,
            "end": 5876
          },
          {
            "type": "Literal",
            "value": "a.b.d",
            "raw": "'a.b.d'",
            "start": 5878,
            "end": 5885
          }
        ],
        "optional": false,
        "start": 5860,
        "end": 5886
      },
      "directive": null,
      "start": 5860,
      "end": 5887
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 5899,
          "end": 5911
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 5912,
            "end": 5915
          },
          {
            "type": "Literal",
            "value": "a.b.x",
            "raw": "'a.b.x'",
            "start": 5917,
            "end": 5924
          }
        ],
        "optional": false,
        "start": 5899,
        "end": 5925
      },
      "directive": null,
      "start": 5899,
      "end": 5926
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 5939,
          "end": 5951
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 5952,
            "end": 5955
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 5957,
            "end": 5958
          }
        ],
        "optional": false,
        "start": 5939,
        "end": 5959
      },
      "directive": null,
      "start": 5939,
      "end": 5960
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6048,
        "end": 6050
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
              "start": 6051,
              "end": 6052
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6051,
            "end": 6052
          }
        ],
        "start": 6050,
        "end": 6053
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 6056,
            "end": 6057
          },
          "typeArguments": null,
          "start": 6056,
          "end": 6057
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "foo",
                "cooked": "foo"
              },
              "tail": false,
              "start": 6066,
              "end": 6072
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "bar",
                "cooked": "bar"
              },
              "tail": true,
              "start": 6079,
              "end": 6084
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6078,
                  "end": 6079
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 6078,
                "end": 6079
              },
              "start": 6072,
              "end": 6079
            }
          ],
          "start": 6066,
          "end": 6084
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S2",
            "optional": false,
            "typeAnnotation": null,
            "start": 6087,
            "end": 6089
          },
          "typeArguments": {
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
                  "start": 6090,
                  "end": 6091
                },
                "typeArguments": null,
                "start": 6090,
                "end": 6091
              }
            ],
            "start": 6089,
            "end": 6092
          },
          "start": 6087,
          "end": 6092
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6095,
          "end": 6100
        },
        "start": 6056,
        "end": 6100
      },
      "declare": false,
      "start": 6043,
      "end": 6101
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6107,
        "end": 6109
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 6110,
              "end": 6111
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 6120,
              "end": 6126
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6110,
            "end": 6126
          }
        ],
        "start": 6109,
        "end": 6127
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "S",
          "optional": false,
          "typeAnnotation": null,
          "start": 6130,
          "end": 6131
        },
        "typeArguments": null,
        "start": 6130,
        "end": 6131
      },
      "declare": false,
      "start": 6102,
      "end": 6132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TV1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6189,
        "end": 6192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 6195,
            "end": 6198
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 6205,
            "end": 6207
          }
        ],
        "types": [
          {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 6204,
                "end": 6205
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 6204,
              "end": 6205
            },
            "start": 6198,
            "end": 6205
          }
        ],
        "start": 6195,
        "end": 6207
      },
      "declare": false,
      "start": 6184,
      "end": 6208
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chars",
        "optional": false,
        "typeAnnotation": null,
        "start": 6281,
        "end": 6286
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 6287,
              "end": 6288
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 6297,
              "end": 6303
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6287,
            "end": 6303
          }
        ],
        "start": 6286,
        "end": 6304
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "start": 6311,
          "end": 6317
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 6326,
            "end": 6327
          },
          "typeArguments": null,
          "start": 6326,
          "end": 6327
        },
        "trueType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 6330,
            "end": 6336
          },
          "start": 6330,
          "end": 6338
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 6345,
              "end": 6346
            },
            "typeArguments": null,
            "start": 6345,
            "end": 6346
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6355,
                "end": 6358
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6366,
                "end": 6369
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6377,
                "end": 6380
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6388,
                "end": 6391
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6399,
                "end": 6402
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6410,
                "end": 6413
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6421,
                "end": 6424
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6432,
                "end": 6435
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6443,
                "end": 6446
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6454,
                "end": 6457
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6465,
                "end": 6468
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 6475,
                "end": 6477
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6364,
                    "end": 6366
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6364,
                  "end": 6366
                },
                "start": 6358,
                "end": 6366
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6375,
                    "end": 6377
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6375,
                  "end": 6377
                },
                "start": 6369,
                "end": 6377
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6386,
                    "end": 6388
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6386,
                  "end": 6388
                },
                "start": 6380,
                "end": 6388
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6397,
                    "end": 6399
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6397,
                  "end": 6399
                },
                "start": 6391,
                "end": 6399
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6408,
                    "end": 6410
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6408,
                  "end": 6410
                },
                "start": 6402,
                "end": 6410
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6419,
                    "end": 6421
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6419,
                  "end": 6421
                },
                "start": 6413,
                "end": 6421
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6430,
                    "end": 6432
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6430,
                  "end": 6432
                },
                "start": 6424,
                "end": 6432
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6441,
                    "end": 6443
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6441,
                  "end": 6443
                },
                "start": 6435,
                "end": 6443
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6452,
                    "end": 6454
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6452,
                  "end": 6454
                },
                "start": 6446,
                "end": 6454
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6463,
                    "end": 6465
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6463,
                  "end": 6465
                },
                "start": 6457,
                "end": 6465
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6474,
                    "end": 6475
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6474,
                  "end": 6475
                },
                "start": 6468,
                "end": 6475
              }
            ],
            "start": 6355,
            "end": 6477
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6481,
                  "end": 6483
                },
                "typeArguments": null,
                "start": 6481,
                "end": 6483
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6485,
                  "end": 6487
                },
                "typeArguments": null,
                "start": 6485,
                "end": 6487
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6489,
                  "end": 6491
                },
                "typeArguments": null,
                "start": 6489,
                "end": 6491
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6493,
                  "end": 6495
                },
                "typeArguments": null,
                "start": 6493,
                "end": 6495
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6497,
                  "end": 6499
                },
                "typeArguments": null,
                "start": 6497,
                "end": 6499
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6501,
                  "end": 6503
                },
                "typeArguments": null,
                "start": 6501,
                "end": 6503
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6505,
                  "end": 6507
                },
                "typeArguments": null,
                "start": 6505,
                "end": 6507
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6509,
                  "end": 6511
                },
                "typeArguments": null,
                "start": 6509,
                "end": 6511
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6513,
                  "end": 6515
                },
                "typeArguments": null,
                "start": 6513,
                "end": 6515
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6517,
                  "end": 6519
                },
                "typeArguments": null,
                "start": 6517,
                "end": 6519
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Chars",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6524,
                    "end": 6529
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6530,
                          "end": 6531
                        },
                        "typeArguments": null,
                        "start": 6530,
                        "end": 6531
                      }
                    ],
                    "start": 6529,
                    "end": 6532
                  },
                  "start": 6524,
                  "end": 6532
                },
                "start": 6521,
                "end": 6532
              }
            ],
            "start": 6480,
            "end": 6533
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 6540,
                "end": 6541
              },
              "typeArguments": null,
              "start": 6540,
              "end": 6541
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 6550,
                  "end": 6553
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 6560,
                  "end": 6563
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 6570,
                  "end": 6572
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6559,
                      "end": 6560
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 6559,
                    "end": 6560
                  },
                  "start": 6553,
                  "end": 6560
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6569,
                      "end": 6570
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 6569,
                    "end": 6570
                  },
                  "start": 6563,
                  "end": 6570
                }
              ],
              "start": 6550,
              "end": 6572
            },
            "trueType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6576,
                    "end": 6577
                  },
                  "typeArguments": null,
                  "start": 6576,
                  "end": 6577
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Chars",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6582,
                      "end": 6587
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6588,
                            "end": 6589
                          },
                          "typeArguments": null,
                          "start": 6588,
                          "end": 6589
                        }
                      ],
                      "start": 6587,
                      "end": 6590
                    },
                    "start": 6582,
                    "end": 6590
                  },
                  "start": 6579,
                  "end": 6590
                }
              ],
              "start": 6575,
              "end": 6591
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6598,
                  "end": 6599
                },
                "typeArguments": null,
                "start": 6598,
                "end": 6599
              },
              "extendsType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 6608,
                  "end": 6610
                },
                "start": 6608,
                "end": 6610
              },
              "trueType": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 6613,
                "end": 6615
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 6622,
                "end": 6627
              },
              "start": 6598,
              "end": 6627
            },
            "start": 6540,
            "end": 6627
          },
          "start": 6345,
          "end": 6627
        },
        "start": 6311,
        "end": 6627
      },
      "declare": false,
      "start": 6276,
      "end": 6628
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6635,
        "end": 6637
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Chars",
          "optional": false,
          "typeAnnotation": null,
          "start": 6640,
          "end": 6645
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "FooBarBazThisIsALongerString",
                "raw": "'FooBarBazThisIsALongerString'",
                "start": 6646,
                "end": 6676
              },
              "start": 6646,
              "end": 6676
            }
          ],
          "start": 6645,
          "end": 6677
        },
        "start": 6640,
        "end": 6677
      },
      "declare": false,
      "start": 6630,
      "end": 6678
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6799,
        "end": 6802
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
              "start": 6803,
              "end": 6804
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6803,
            "end": 6804
          }
        ],
        "start": 6802,
        "end": 6805
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 6808,
            "end": 6809
          },
          "typeArguments": null,
          "start": 6808,
          "end": 6809
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "*",
                "cooked": "*"
              },
              "tail": false,
              "start": 6818,
              "end": 6822
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "*",
                "cooked": "*"
              },
              "tail": true,
              "start": 6829,
              "end": 6832
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6828,
                  "end": 6829
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 6828,
                "end": 6829
              },
              "start": 6822,
              "end": 6829
            }
          ],
          "start": 6818,
          "end": 6832
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 6835,
            "end": 6836
          },
          "typeArguments": null,
          "start": 6835,
          "end": 6836
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6839,
          "end": 6844
        },
        "start": 6808,
        "end": 6844
      },
      "declare": false,
      "start": 6794,
      "end": 6845
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TF1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6852,
        "end": 6855
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 6858,
          "end": 6861
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 6862,
              "end": 6865
            }
          ],
          "start": 6861,
          "end": 6866
        },
        "start": 6858,
        "end": 6866
      },
      "declare": false,
      "start": 6847,
      "end": 6867
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TF2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6887,
        "end": 6890
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 6893,
          "end": 6896
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 6897,
              "end": 6903
            }
          ],
          "start": 6896,
          "end": 6904
        },
        "start": 6893,
        "end": 6904
      },
      "declare": false,
      "start": 6882,
      "end": 6905
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TF3",
        "optional": false,
        "typeAnnotation": null,
        "start": 6922,
        "end": 6925
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 6928,
          "end": 6931
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "abc",
                "raw": "'abc'",
                "start": 6932,
                "end": 6937
              },
              "start": 6932,
              "end": 6937
            }
          ],
          "start": 6931,
          "end": 6938
        },
        "start": 6928,
        "end": 6938
      },
      "declare": false,
      "start": 6917,
      "end": 6939
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TF4",
        "optional": false,
        "typeAnnotation": null,
        "start": 6957,
        "end": 6960
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 6963,
          "end": 6966
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "*abc*",
                "raw": "'*abc*'",
                "start": 6967,
                "end": 6974
              },
              "start": 6967,
              "end": 6974
            }
          ],
          "start": 6966,
          "end": 6975
        },
        "start": 6963,
        "end": 6975
      },
      "declare": false,
      "start": 6952,
      "end": 6976
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 7050,
        "end": 7051
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 7054,
        "end": 7057
      },
      "declare": false,
      "start": 7045,
      "end": 7058
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7065,
        "end": 7067
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7071,
                  "end": 7073
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7074,
                      "end": 7075
                    },
                    "typeArguments": null,
                    "start": 7074,
                    "end": 7075
                  },
                  "start": 7073,
                  "end": 7075
                },
                "accessibility": null,
                "static": false,
                "start": 7071,
                "end": 7075
              }
            ],
            "start": 7070,
            "end": 7076
          },
          {
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
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7080,
                  "end": 7082
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7083,
                      "end": 7084
                    },
                    "typeArguments": null,
                    "start": 7083,
                    "end": 7084
                  },
                  "start": 7082,
                  "end": 7084
                },
                "accessibility": null,
                "static": false,
                "start": 7080,
                "end": 7084
              }
            ],
            "start": 7079,
            "end": 7085
          },
          {
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7089,
                  "end": 7091
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7092,
                      "end": 7093
                    },
                    "typeArguments": null,
                    "start": 7092,
                    "end": 7093
                  },
                  "start": 7091,
                  "end": 7093
                },
                "accessibility": null,
                "static": false,
                "start": 7089,
                "end": 7093
              }
            ],
            "start": 7088,
            "end": 7094
          },
          {
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
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7098,
                  "end": 7100
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7101,
                      "end": 7102
                    },
                    "typeArguments": null,
                    "start": 7101,
                    "end": 7102
                  },
                  "start": 7100,
                  "end": 7102
                },
                "accessibility": null,
                "static": false,
                "start": 7098,
                "end": 7102
              }
            ],
            "start": 7097,
            "end": 7103
          },
          {
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
                  "name": "e1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7107,
                  "end": 7109
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7110,
                      "end": 7111
                    },
                    "typeArguments": null,
                    "start": 7110,
                    "end": 7111
                  },
                  "start": 7109,
                  "end": 7111
                },
                "accessibility": null,
                "static": false,
                "start": 7107,
                "end": 7111
              }
            ],
            "start": 7106,
            "end": 7112
          },
          {
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
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7116,
                  "end": 7118
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7119,
                      "end": 7120
                    },
                    "typeArguments": null,
                    "start": 7119,
                    "end": 7120
                  },
                  "start": 7118,
                  "end": 7120
                },
                "accessibility": null,
                "static": false,
                "start": 7116,
                "end": 7120
              }
            ],
            "start": 7115,
            "end": 7121
          },
          {
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
                  "name": "g1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7125,
                  "end": 7127
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7128,
                      "end": 7129
                    },
                    "typeArguments": null,
                    "start": 7128,
                    "end": 7129
                  },
                  "start": 7127,
                  "end": 7129
                },
                "accessibility": null,
                "static": false,
                "start": 7125,
                "end": 7129
              }
            ],
            "start": 7124,
            "end": 7130
          },
          {
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
                  "name": "h1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7134,
                  "end": 7136
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7137,
                      "end": 7138
                    },
                    "typeArguments": null,
                    "start": 7137,
                    "end": 7138
                  },
                  "start": 7136,
                  "end": 7138
                },
                "accessibility": null,
                "static": false,
                "start": 7134,
                "end": 7138
              }
            ],
            "start": 7133,
            "end": 7139
          },
          {
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
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7143,
                  "end": 7145
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7146,
                      "end": 7147
                    },
                    "typeArguments": null,
                    "start": 7146,
                    "end": 7147
                  },
                  "start": 7145,
                  "end": 7147
                },
                "accessibility": null,
                "static": false,
                "start": 7143,
                "end": 7147
              }
            ],
            "start": 7142,
            "end": 7148
          },
          {
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
                  "name": "j1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7152,
                  "end": 7154
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7155,
                      "end": 7156
                    },
                    "typeArguments": null,
                    "start": 7155,
                    "end": 7156
                  },
                  "start": 7154,
                  "end": 7156
                },
                "accessibility": null,
                "static": false,
                "start": 7152,
                "end": 7156
              }
            ],
            "start": 7151,
            "end": 7157
          }
        ],
        "start": 7070,
        "end": 7157
      },
      "declare": false,
      "start": 7060,
      "end": 7158
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U2",
        "optional": false,
        "typeAnnotation": null,
        "start": 7164,
        "end": 7166
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7170,
                  "end": 7172
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7173,
                      "end": 7174
                    },
                    "typeArguments": null,
                    "start": 7173,
                    "end": 7174
                  },
                  "start": 7172,
                  "end": 7174
                },
                "accessibility": null,
                "static": false,
                "start": 7170,
                "end": 7174
              }
            ],
            "start": 7169,
            "end": 7175
          },
          {
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
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7179,
                  "end": 7181
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7182,
                      "end": 7183
                    },
                    "typeArguments": null,
                    "start": 7182,
                    "end": 7183
                  },
                  "start": 7181,
                  "end": 7183
                },
                "accessibility": null,
                "static": false,
                "start": 7179,
                "end": 7183
              }
            ],
            "start": 7178,
            "end": 7184
          },
          {
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7188,
                  "end": 7190
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7191,
                      "end": 7192
                    },
                    "typeArguments": null,
                    "start": 7191,
                    "end": 7192
                  },
                  "start": 7190,
                  "end": 7192
                },
                "accessibility": null,
                "static": false,
                "start": 7188,
                "end": 7192
              }
            ],
            "start": 7187,
            "end": 7193
          },
          {
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
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7197,
                  "end": 7199
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7200,
                      "end": 7201
                    },
                    "typeArguments": null,
                    "start": 7200,
                    "end": 7201
                  },
                  "start": 7199,
                  "end": 7201
                },
                "accessibility": null,
                "static": false,
                "start": 7197,
                "end": 7201
              }
            ],
            "start": 7196,
            "end": 7202
          },
          {
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
                  "name": "e2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7206,
                  "end": 7208
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7209,
                      "end": 7210
                    },
                    "typeArguments": null,
                    "start": 7209,
                    "end": 7210
                  },
                  "start": 7208,
                  "end": 7210
                },
                "accessibility": null,
                "static": false,
                "start": 7206,
                "end": 7210
              }
            ],
            "start": 7205,
            "end": 7211
          },
          {
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
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7215,
                  "end": 7217
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7218,
                      "end": 7219
                    },
                    "typeArguments": null,
                    "start": 7218,
                    "end": 7219
                  },
                  "start": 7217,
                  "end": 7219
                },
                "accessibility": null,
                "static": false,
                "start": 7215,
                "end": 7219
              }
            ],
            "start": 7214,
            "end": 7220
          },
          {
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
                  "name": "g2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7224,
                  "end": 7226
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7227,
                      "end": 7228
                    },
                    "typeArguments": null,
                    "start": 7227,
                    "end": 7228
                  },
                  "start": 7226,
                  "end": 7228
                },
                "accessibility": null,
                "static": false,
                "start": 7224,
                "end": 7228
              }
            ],
            "start": 7223,
            "end": 7229
          },
          {
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
                  "name": "h2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7233,
                  "end": 7235
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7236,
                      "end": 7237
                    },
                    "typeArguments": null,
                    "start": 7236,
                    "end": 7237
                  },
                  "start": 7235,
                  "end": 7237
                },
                "accessibility": null,
                "static": false,
                "start": 7233,
                "end": 7237
              }
            ],
            "start": 7232,
            "end": 7238
          },
          {
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
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7242,
                  "end": 7244
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7245,
                      "end": 7246
                    },
                    "typeArguments": null,
                    "start": 7245,
                    "end": 7246
                  },
                  "start": 7244,
                  "end": 7246
                },
                "accessibility": null,
                "static": false,
                "start": 7242,
                "end": 7246
              }
            ],
            "start": 7241,
            "end": 7247
          },
          {
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
                  "name": "j2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7251,
                  "end": 7253
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7254,
                      "end": 7255
                    },
                    "typeArguments": null,
                    "start": 7254,
                    "end": 7255
                  },
                  "start": 7253,
                  "end": 7255
                },
                "accessibility": null,
                "static": false,
                "start": 7251,
                "end": 7255
              }
            ],
            "start": 7250,
            "end": 7256
          }
        ],
        "start": 7169,
        "end": 7256
      },
      "declare": false,
      "start": 7159,
      "end": 7257
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U3",
        "optional": false,
        "typeAnnotation": null,
        "start": 7263,
        "end": 7265
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7269,
                  "end": 7271
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7272,
                      "end": 7273
                    },
                    "typeArguments": null,
                    "start": 7272,
                    "end": 7273
                  },
                  "start": 7271,
                  "end": 7273
                },
                "accessibility": null,
                "static": false,
                "start": 7269,
                "end": 7273
              }
            ],
            "start": 7268,
            "end": 7274
          },
          {
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
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7278,
                  "end": 7280
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7281,
                      "end": 7282
                    },
                    "typeArguments": null,
                    "start": 7281,
                    "end": 7282
                  },
                  "start": 7280,
                  "end": 7282
                },
                "accessibility": null,
                "static": false,
                "start": 7278,
                "end": 7282
              }
            ],
            "start": 7277,
            "end": 7283
          },
          {
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7287,
                  "end": 7289
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7290,
                      "end": 7291
                    },
                    "typeArguments": null,
                    "start": 7290,
                    "end": 7291
                  },
                  "start": 7289,
                  "end": 7291
                },
                "accessibility": null,
                "static": false,
                "start": 7287,
                "end": 7291
              }
            ],
            "start": 7286,
            "end": 7292
          },
          {
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
                  "name": "d3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7296,
                  "end": 7298
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7299,
                      "end": 7300
                    },
                    "typeArguments": null,
                    "start": 7299,
                    "end": 7300
                  },
                  "start": 7298,
                  "end": 7300
                },
                "accessibility": null,
                "static": false,
                "start": 7296,
                "end": 7300
              }
            ],
            "start": 7295,
            "end": 7301
          },
          {
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
                  "name": "e3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7305,
                  "end": 7307
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7308,
                      "end": 7309
                    },
                    "typeArguments": null,
                    "start": 7308,
                    "end": 7309
                  },
                  "start": 7307,
                  "end": 7309
                },
                "accessibility": null,
                "static": false,
                "start": 7305,
                "end": 7309
              }
            ],
            "start": 7304,
            "end": 7310
          },
          {
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
                  "name": "f3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7314,
                  "end": 7316
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7317,
                      "end": 7318
                    },
                    "typeArguments": null,
                    "start": 7317,
                    "end": 7318
                  },
                  "start": 7316,
                  "end": 7318
                },
                "accessibility": null,
                "static": false,
                "start": 7314,
                "end": 7318
              }
            ],
            "start": 7313,
            "end": 7319
          },
          {
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
                  "name": "g3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7323,
                  "end": 7325
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7326,
                      "end": 7327
                    },
                    "typeArguments": null,
                    "start": 7326,
                    "end": 7327
                  },
                  "start": 7325,
                  "end": 7327
                },
                "accessibility": null,
                "static": false,
                "start": 7323,
                "end": 7327
              }
            ],
            "start": 7322,
            "end": 7328
          },
          {
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
                  "name": "h3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7332,
                  "end": 7334
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7335,
                      "end": 7336
                    },
                    "typeArguments": null,
                    "start": 7335,
                    "end": 7336
                  },
                  "start": 7334,
                  "end": 7336
                },
                "accessibility": null,
                "static": false,
                "start": 7332,
                "end": 7336
              }
            ],
            "start": 7331,
            "end": 7337
          },
          {
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
                  "name": "i3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7341,
                  "end": 7343
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7344,
                      "end": 7345
                    },
                    "typeArguments": null,
                    "start": 7344,
                    "end": 7345
                  },
                  "start": 7343,
                  "end": 7345
                },
                "accessibility": null,
                "static": false,
                "start": 7341,
                "end": 7345
              }
            ],
            "start": 7340,
            "end": 7346
          },
          {
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
                  "name": "j3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7350,
                  "end": 7352
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7353,
                      "end": 7354
                    },
                    "typeArguments": null,
                    "start": 7353,
                    "end": 7354
                  },
                  "start": 7352,
                  "end": 7354
                },
                "accessibility": null,
                "static": false,
                "start": 7350,
                "end": 7354
              }
            ],
            "start": 7349,
            "end": 7355
          }
        ],
        "start": 7268,
        "end": 7355
      },
      "declare": false,
      "start": 7258,
      "end": 7356
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U4",
        "optional": false,
        "typeAnnotation": null,
        "start": 7362,
        "end": 7364
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7368,
                  "end": 7370
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7371,
                      "end": 7372
                    },
                    "typeArguments": null,
                    "start": 7371,
                    "end": 7372
                  },
                  "start": 7370,
                  "end": 7372
                },
                "accessibility": null,
                "static": false,
                "start": 7368,
                "end": 7372
              }
            ],
            "start": 7367,
            "end": 7373
          },
          {
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
                  "name": "b4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7377,
                  "end": 7379
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7380,
                      "end": 7381
                    },
                    "typeArguments": null,
                    "start": 7380,
                    "end": 7381
                  },
                  "start": 7379,
                  "end": 7381
                },
                "accessibility": null,
                "static": false,
                "start": 7377,
                "end": 7381
              }
            ],
            "start": 7376,
            "end": 7382
          },
          {
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
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7386,
                  "end": 7388
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7389,
                      "end": 7390
                    },
                    "typeArguments": null,
                    "start": 7389,
                    "end": 7390
                  },
                  "start": 7388,
                  "end": 7390
                },
                "accessibility": null,
                "static": false,
                "start": 7386,
                "end": 7390
              }
            ],
            "start": 7385,
            "end": 7391
          },
          {
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
                  "name": "d4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7395,
                  "end": 7397
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7398,
                      "end": 7399
                    },
                    "typeArguments": null,
                    "start": 7398,
                    "end": 7399
                  },
                  "start": 7397,
                  "end": 7399
                },
                "accessibility": null,
                "static": false,
                "start": 7395,
                "end": 7399
              }
            ],
            "start": 7394,
            "end": 7400
          },
          {
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
                  "name": "e4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7404,
                  "end": 7406
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7407,
                      "end": 7408
                    },
                    "typeArguments": null,
                    "start": 7407,
                    "end": 7408
                  },
                  "start": 7406,
                  "end": 7408
                },
                "accessibility": null,
                "static": false,
                "start": 7404,
                "end": 7408
              }
            ],
            "start": 7403,
            "end": 7409
          },
          {
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
                  "name": "f4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7413,
                  "end": 7415
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7416,
                      "end": 7417
                    },
                    "typeArguments": null,
                    "start": 7416,
                    "end": 7417
                  },
                  "start": 7415,
                  "end": 7417
                },
                "accessibility": null,
                "static": false,
                "start": 7413,
                "end": 7417
              }
            ],
            "start": 7412,
            "end": 7418
          },
          {
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
                  "name": "g4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7422,
                  "end": 7424
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7425,
                      "end": 7426
                    },
                    "typeArguments": null,
                    "start": 7425,
                    "end": 7426
                  },
                  "start": 7424,
                  "end": 7426
                },
                "accessibility": null,
                "static": false,
                "start": 7422,
                "end": 7426
              }
            ],
            "start": 7421,
            "end": 7427
          },
          {
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
                  "name": "h4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7431,
                  "end": 7433
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7434,
                      "end": 7435
                    },
                    "typeArguments": null,
                    "start": 7434,
                    "end": 7435
                  },
                  "start": 7433,
                  "end": 7435
                },
                "accessibility": null,
                "static": false,
                "start": 7431,
                "end": 7435
              }
            ],
            "start": 7430,
            "end": 7436
          },
          {
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
                  "name": "i4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7440,
                  "end": 7442
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7443,
                      "end": 7444
                    },
                    "typeArguments": null,
                    "start": 7443,
                    "end": 7444
                  },
                  "start": 7442,
                  "end": 7444
                },
                "accessibility": null,
                "static": false,
                "start": 7440,
                "end": 7444
              }
            ],
            "start": 7439,
            "end": 7445
          },
          {
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
                  "name": "j4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7449,
                  "end": 7451
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7452,
                      "end": 7453
                    },
                    "typeArguments": null,
                    "start": 7452,
                    "end": 7453
                  },
                  "start": 7451,
                  "end": 7453
                },
                "accessibility": null,
                "static": false,
                "start": 7449,
                "end": 7453
              }
            ],
            "start": 7448,
            "end": 7454
          }
        ],
        "start": 7367,
        "end": 7454
      },
      "declare": false,
      "start": 7357,
      "end": 7455
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U5",
        "optional": false,
        "typeAnnotation": null,
        "start": 7461,
        "end": 7463
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "a5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7467,
                  "end": 7469
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7470,
                      "end": 7471
                    },
                    "typeArguments": null,
                    "start": 7470,
                    "end": 7471
                  },
                  "start": 7469,
                  "end": 7471
                },
                "accessibility": null,
                "static": false,
                "start": 7467,
                "end": 7471
              }
            ],
            "start": 7466,
            "end": 7472
          },
          {
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
                  "name": "b5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7476,
                  "end": 7478
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7479,
                      "end": 7480
                    },
                    "typeArguments": null,
                    "start": 7479,
                    "end": 7480
                  },
                  "start": 7478,
                  "end": 7480
                },
                "accessibility": null,
                "static": false,
                "start": 7476,
                "end": 7480
              }
            ],
            "start": 7475,
            "end": 7481
          },
          {
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
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7485,
                  "end": 7487
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7488,
                      "end": 7489
                    },
                    "typeArguments": null,
                    "start": 7488,
                    "end": 7489
                  },
                  "start": 7487,
                  "end": 7489
                },
                "accessibility": null,
                "static": false,
                "start": 7485,
                "end": 7489
              }
            ],
            "start": 7484,
            "end": 7490
          },
          {
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
                  "name": "d5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7494,
                  "end": 7496
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7497,
                      "end": 7498
                    },
                    "typeArguments": null,
                    "start": 7497,
                    "end": 7498
                  },
                  "start": 7496,
                  "end": 7498
                },
                "accessibility": null,
                "static": false,
                "start": 7494,
                "end": 7498
              }
            ],
            "start": 7493,
            "end": 7499
          },
          {
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
                  "name": "e5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7503,
                  "end": 7505
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7506,
                      "end": 7507
                    },
                    "typeArguments": null,
                    "start": 7506,
                    "end": 7507
                  },
                  "start": 7505,
                  "end": 7507
                },
                "accessibility": null,
                "static": false,
                "start": 7503,
                "end": 7507
              }
            ],
            "start": 7502,
            "end": 7508
          },
          {
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
                  "name": "f5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7512,
                  "end": 7514
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7515,
                      "end": 7516
                    },
                    "typeArguments": null,
                    "start": 7515,
                    "end": 7516
                  },
                  "start": 7514,
                  "end": 7516
                },
                "accessibility": null,
                "static": false,
                "start": 7512,
                "end": 7516
              }
            ],
            "start": 7511,
            "end": 7517
          },
          {
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
                  "name": "g5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7521,
                  "end": 7523
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7524,
                      "end": 7525
                    },
                    "typeArguments": null,
                    "start": 7524,
                    "end": 7525
                  },
                  "start": 7523,
                  "end": 7525
                },
                "accessibility": null,
                "static": false,
                "start": 7521,
                "end": 7525
              }
            ],
            "start": 7520,
            "end": 7526
          },
          {
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
                  "name": "h5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7530,
                  "end": 7532
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7533,
                      "end": 7534
                    },
                    "typeArguments": null,
                    "start": 7533,
                    "end": 7534
                  },
                  "start": 7532,
                  "end": 7534
                },
                "accessibility": null,
                "static": false,
                "start": 7530,
                "end": 7534
              }
            ],
            "start": 7529,
            "end": 7535
          },
          {
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
                  "name": "i5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7539,
                  "end": 7541
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7542,
                      "end": 7543
                    },
                    "typeArguments": null,
                    "start": 7542,
                    "end": 7543
                  },
                  "start": 7541,
                  "end": 7543
                },
                "accessibility": null,
                "static": false,
                "start": 7539,
                "end": 7543
              }
            ],
            "start": 7538,
            "end": 7544
          },
          {
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
                  "name": "j5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7548,
                  "end": 7550
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7551,
                      "end": 7552
                    },
                    "typeArguments": null,
                    "start": 7551,
                    "end": 7552
                  },
                  "start": 7550,
                  "end": 7552
                },
                "accessibility": null,
                "static": false,
                "start": 7548,
                "end": 7552
              }
            ],
            "start": 7547,
            "end": 7553
          }
        ],
        "start": 7466,
        "end": 7553
      },
      "declare": false,
      "start": 7456,
      "end": 7554
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U100000",
        "optional": false,
        "typeAnnotation": null,
        "start": 7561,
        "end": 7568
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7571,
              "end": 7573
            },
            "typeArguments": null,
            "start": 7571,
            "end": 7573
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U2",
              "optional": false,
              "typeAnnotation": null,
              "start": 7576,
              "end": 7578
            },
            "typeArguments": null,
            "start": 7576,
            "end": 7578
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U3",
              "optional": false,
              "typeAnnotation": null,
              "start": 7581,
              "end": 7583
            },
            "typeArguments": null,
            "start": 7581,
            "end": 7583
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U4",
              "optional": false,
              "typeAnnotation": null,
              "start": 7586,
              "end": 7588
            },
            "typeArguments": null,
            "start": 7586,
            "end": 7588
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U5",
              "optional": false,
              "typeAnnotation": null,
              "start": 7591,
              "end": 7593
            },
            "typeArguments": null,
            "start": 7591,
            "end": 7593
          }
        ],
        "start": 7571,
        "end": 7593
      },
      "declare": false,
      "start": 7556,
      "end": 7594
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Digits",
        "optional": false,
        "typeAnnotation": null,
        "start": 7611,
        "end": 7617
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 7620,
              "end": 7621
            },
            "start": 7620,
            "end": 7621
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 7624,
              "end": 7625
            },
            "start": 7624,
            "end": 7625
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 7628,
              "end": 7629
            },
            "start": 7628,
            "end": 7629
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 7632,
              "end": 7633
            },
            "start": 7632,
            "end": 7633
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 7636,
              "end": 7637
            },
            "start": 7636,
            "end": 7637
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 7640,
              "end": 7641
            },
            "start": 7640,
            "end": 7641
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 7644,
              "end": 7645
            },
            "start": 7644,
            "end": 7645
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 7,
              "raw": "7",
              "start": 7648,
              "end": 7649
            },
            "start": 7648,
            "end": 7649
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 7652,
              "end": 7653
            },
            "start": 7652,
            "end": 7653
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 9,
              "raw": "9",
              "start": 7656,
              "end": 7657
            },
            "start": 7656,
            "end": 7657
          }
        ],
        "start": 7620,
        "end": 7657
      },
      "declare": false,
      "start": 7606,
      "end": 7658
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D100000",
        "optional": false,
        "typeAnnotation": null,
        "start": 7665,
        "end": 7672
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 7675,
            "end": 7678
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 7684,
            "end": 7687
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 7693,
            "end": 7696
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 7702,
            "end": 7705
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 7711,
            "end": 7714
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 7720,
            "end": 7722
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null,
              "start": 7678,
              "end": 7684
            },
            "typeArguments": null,
            "start": 7678,
            "end": 7684
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null,
              "start": 7687,
              "end": 7693
            },
            "typeArguments": null,
            "start": 7687,
            "end": 7693
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null,
              "start": 7696,
              "end": 7702
            },
            "typeArguments": null,
            "start": 7696,
            "end": 7702
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null,
              "start": 7705,
              "end": 7711
            },
            "typeArguments": null,
            "start": 7705,
            "end": 7711
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null,
              "start": 7714,
              "end": 7720
            },
            "typeArguments": null,
            "start": 7714,
            "end": 7720
          }
        ],
        "start": 7675,
        "end": 7722
      },
      "declare": false,
      "start": 7660,
      "end": 7723
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TDigits",
        "optional": false,
        "typeAnnotation": null,
        "start": 7740,
        "end": 7747
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 7751,
                  "end": 7752
                },
                "start": 7751,
                "end": 7752
              }
            ],
            "start": 7750,
            "end": 7753
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 7757,
                  "end": 7758
                },
                "start": 7757,
                "end": 7758
              }
            ],
            "start": 7756,
            "end": 7759
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 7763,
                  "end": 7764
                },
                "start": 7763,
                "end": 7764
              }
            ],
            "start": 7762,
            "end": 7765
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 7769,
                  "end": 7770
                },
                "start": 7769,
                "end": 7770
              }
            ],
            "start": 7768,
            "end": 7771
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 7775,
                  "end": 7776
                },
                "start": 7775,
                "end": 7776
              }
            ],
            "start": 7774,
            "end": 7777
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 7781,
                  "end": 7782
                },
                "start": 7781,
                "end": 7782
              }
            ],
            "start": 7780,
            "end": 7783
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 6,
                  "raw": "6",
                  "start": 7787,
                  "end": 7788
                },
                "start": 7787,
                "end": 7788
              }
            ],
            "start": 7786,
            "end": 7789
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 7,
                  "raw": "7",
                  "start": 7793,
                  "end": 7794
                },
                "start": 7793,
                "end": 7794
              }
            ],
            "start": 7792,
            "end": 7795
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 8,
                  "raw": "8",
                  "start": 7799,
                  "end": 7800
                },
                "start": 7799,
                "end": 7800
              }
            ],
            "start": 7798,
            "end": 7801
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 9,
                  "raw": "9",
                  "start": 7805,
                  "end": 7806
                },
                "start": 7805,
                "end": 7806
              }
            ],
            "start": 7804,
            "end": 7807
          }
        ],
        "start": 7750,
        "end": 7807
      },
      "declare": false,
      "start": 7735,
      "end": 7808
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T100000",
        "optional": false,
        "typeAnnotation": null,
        "start": 7815,
        "end": 7822
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null,
                "start": 7829,
                "end": 7836
              },
              "typeArguments": null,
              "start": 7829,
              "end": 7836
            },
            "start": 7826,
            "end": 7836
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null,
                "start": 7841,
                "end": 7848
              },
              "typeArguments": null,
              "start": 7841,
              "end": 7848
            },
            "start": 7838,
            "end": 7848
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null,
                "start": 7853,
                "end": 7860
              },
              "typeArguments": null,
              "start": 7853,
              "end": 7860
            },
            "start": 7850,
            "end": 7860
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null,
                "start": 7865,
                "end": 7872
              },
              "typeArguments": null,
              "start": 7865,
              "end": 7872
            },
            "start": 7862,
            "end": 7872
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null,
                "start": 7877,
                "end": 7884
              },
              "typeArguments": null,
              "start": 7877,
              "end": 7884
            },
            "start": 7874,
            "end": 7884
          }
        ],
        "start": 7825,
        "end": 7885
      },
      "declare": false,
      "start": 7810,
      "end": 7886
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsNegative",
        "optional": false,
        "typeAnnotation": null,
        "start": 7925,
        "end": 7935
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
              "start": 7936,
              "end": 7937
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 7946,
              "end": 7952
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 7936,
            "end": 7952
          }
        ],
        "start": 7935,
        "end": 7953
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 7956,
              "end": 7959
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 7960,
              "end": 7962
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 7959,
                "end": 7960
              },
              "typeArguments": null,
              "start": 7959,
              "end": 7960
            }
          ],
          "start": 7956,
          "end": 7962
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "-",
                "cooked": "-"
              },
              "tail": false,
              "start": 7971,
              "end": 7975
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 7981,
              "end": 7983
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 7975,
              "end": 7981
            }
          ],
          "start": 7971,
          "end": 7983
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 7986,
            "end": 7990
          },
          "start": 7986,
          "end": 7990
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 7993,
            "end": 7998
          },
          "start": 7993,
          "end": 7998
        },
        "start": 7956,
        "end": 7998
      },
      "declare": false,
      "start": 7920,
      "end": 7999
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 8006,
        "end": 8008
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
              "start": 8009,
              "end": 8010
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 8019,
              "end": 8025
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8009,
            "end": 8025
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 8027,
              "end": 8028
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 8037,
              "end": 8043
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8027,
            "end": 8043
          }
        ],
        "start": 8008,
        "end": 8044
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 8052,
                "end": 8056
              },
              "start": 8052,
              "end": 8056
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 8058,
                "end": 8062
              },
              "start": 8058,
              "end": 8062
            }
          ],
          "start": 8051,
          "end": 8063
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsNegative",
                "optional": false,
                "typeAnnotation": null,
                "start": 8073,
                "end": 8083
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
                      "start": 8084,
                      "end": 8085
                    },
                    "typeArguments": null,
                    "start": 8084,
                    "end": 8085
                  }
                ],
                "start": 8083,
                "end": 8086
              },
              "start": 8073,
              "end": 8086
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsNegative",
                "optional": false,
                "typeAnnotation": null,
                "start": 8088,
                "end": 8098
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8099,
                      "end": 8100
                    },
                    "typeArguments": null,
                    "start": 8099,
                    "end": 8100
                  }
                ],
                "start": 8098,
                "end": 8101
              },
              "start": 8088,
              "end": 8101
            }
          ],
          "start": 8072,
          "end": 8102
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Every thing is ok!",
            "raw": "'Every thing is ok!'",
            "start": 8105,
            "end": 8125
          },
          "start": 8105,
          "end": 8125
        },
        "falseType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "strange",
                "raw": "'strange'",
                "start": 8129,
                "end": 8138
              },
              "start": 8129,
              "end": 8138
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsNegative",
                "optional": false,
                "typeAnnotation": null,
                "start": 8140,
                "end": 8150
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
                      "start": 8151,
                      "end": 8152
                    },
                    "typeArguments": null,
                    "start": 8151,
                    "end": 8152
                  }
                ],
                "start": 8150,
                "end": 8153
              },
              "start": 8140,
              "end": 8153
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsNegative",
                "optional": false,
                "typeAnnotation": null,
                "start": 8155,
                "end": 8165
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8166,
                      "end": 8167
                    },
                    "typeArguments": null,
                    "start": 8166,
                    "end": 8167
                  }
                ],
                "start": 8165,
                "end": 8168
              },
              "start": 8155,
              "end": 8168
            }
          ],
          "start": 8128,
          "end": 8169
        },
        "start": 8051,
        "end": 8169
      },
      "declare": false,
      "start": 8001,
      "end": 8170
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null,
        "start": 8177,
        "end": 8179
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AA",
          "optional": false,
          "typeAnnotation": null,
          "start": 8182,
          "end": 8184
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 8186,
                  "end": 8187
                },
                "prefix": true,
                "start": 8185,
                "end": 8187
              },
              "start": 8185,
              "end": 8187
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 8190,
                  "end": 8191
                },
                "prefix": true,
                "start": 8189,
                "end": 8191
              },
              "start": 8189,
              "end": 8191
            }
          ],
          "start": 8184,
          "end": 8192
        },
        "start": 8182,
        "end": 8192
      },
      "declare": false,
      "start": 8172,
      "end": 8193
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PathKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 8222,
        "end": 8230
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
              "start": 8231,
              "end": 8232
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8231,
            "end": 8232
          }
        ],
        "start": 8230,
        "end": 8233
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSUnknownKeyword",
          "start": 8240,
          "end": 8247
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 8256,
            "end": 8257
          },
          "typeArguments": null,
          "start": 8256,
          "end": 8257
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 8260,
          "end": 8265
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 8272,
              "end": 8273
            },
            "typeArguments": null,
            "start": 8272,
            "end": 8273
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 8291,
                "end": 8294
              },
              "start": 8291,
              "end": 8296
            },
            "start": 8282,
            "end": 8296
          },
          "trueType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Extract",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8299,
                  "end": 8306
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8313,
                          "end": 8314
                        },
                        "typeArguments": null,
                        "start": 8313,
                        "end": 8314
                      },
                      "start": 8307,
                      "end": 8314
                    },
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 8316,
                          "end": 8319
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 8325,
                          "end": 8327
                        }
                      ],
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 8319,
                          "end": 8325
                        }
                      ],
                      "start": 8316,
                      "end": 8327
                    }
                  ],
                  "start": 8306,
                  "end": 8328
                },
                "start": 8299,
                "end": 8328
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SubKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8331,
                  "end": 8338
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
                        "start": 8339,
                        "end": 8340
                      },
                      "typeArguments": null,
                      "start": 8339,
                      "end": 8340
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8342,
                        "end": 8349
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8356,
                                "end": 8357
                              },
                              "typeArguments": null,
                              "start": 8356,
                              "end": 8357
                            },
                            "start": 8350,
                            "end": 8357
                          },
                          {
                            "type": "TSTemplateLiteralType",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "",
                                  "cooked": ""
                                },
                                "tail": false,
                                "start": 8359,
                                "end": 8362
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "",
                                  "cooked": ""
                                },
                                "tail": true,
                                "start": 8368,
                                "end": 8370
                              }
                            ],
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 8362,
                                "end": 8368
                              }
                            ],
                            "start": 8359,
                            "end": 8370
                          }
                        ],
                        "start": 8349,
                        "end": 8371
                      },
                      "start": 8342,
                      "end": 8371
                    }
                  ],
                  "start": 8338,
                  "end": 8372
                },
                "start": 8331,
                "end": 8372
              }
            ],
            "start": 8299,
            "end": 8372
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 8379,
                "end": 8380
              },
              "typeArguments": null,
              "start": 8379,
              "end": 8380
            },
            "extendsType": {
              "type": "TSObjectKeyword",
              "start": 8389,
              "end": 8395
            },
            "trueType": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8398,
                    "end": 8405
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8412,
                            "end": 8413
                          },
                          "typeArguments": null,
                          "start": 8412,
                          "end": 8413
                        },
                        "start": 8406,
                        "end": 8413
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 8415,
                        "end": 8421
                      }
                    ],
                    "start": 8405,
                    "end": 8422
                  },
                  "start": 8398,
                  "end": 8422
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SubKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8425,
                    "end": 8432
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
                          "start": 8433,
                          "end": 8434
                        },
                        "typeArguments": null,
                        "start": 8433,
                        "end": 8434
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Extract",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8436,
                          "end": 8443
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8450,
                                  "end": 8451
                                },
                                "typeArguments": null,
                                "start": 8450,
                                "end": 8451
                              },
                              "start": 8444,
                              "end": 8451
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 8453,
                              "end": 8459
                            }
                          ],
                          "start": 8443,
                          "end": 8460
                        },
                        "start": 8436,
                        "end": 8460
                      }
                    ],
                    "start": 8432,
                    "end": 8461
                  },
                  "start": 8425,
                  "end": 8461
                }
              ],
              "start": 8398,
              "end": 8461
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 8468,
              "end": 8473
            },
            "start": 8379,
            "end": 8473
          },
          "start": 8272,
          "end": 8473
        },
        "start": 8240,
        "end": 8473
      },
      "declare": false,
      "start": 8217,
      "end": 8474
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 8481,
        "end": 8488
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
              "start": 8489,
              "end": 8490
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8489,
            "end": 8490
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 8492,
              "end": 8493
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 8502,
              "end": 8508
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8492,
            "end": 8508
          }
        ],
        "start": 8488,
        "end": 8509
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 8512,
            "end": 8513
          },
          "typeArguments": null,
          "start": 8512,
          "end": 8513
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 8528,
              "end": 8529
            },
            "typeArguments": null,
            "start": 8528,
            "end": 8529
          },
          "start": 8522,
          "end": 8529
        },
        "trueType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 8532,
              "end": 8535
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false,
              "start": 8536,
              "end": 8540
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 8554,
              "end": 8556
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 8535,
                "end": 8536
              },
              "typeArguments": null,
              "start": 8535,
              "end": 8536
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PathKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 8540,
                "end": 8548
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8549,
                        "end": 8550
                      },
                      "typeArguments": null,
                      "start": 8549,
                      "end": 8550
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8551,
                        "end": 8552
                      },
                      "typeArguments": null,
                      "start": 8551,
                      "end": 8552
                    },
                    "start": 8549,
                    "end": 8553
                  }
                ],
                "start": 8548,
                "end": 8554
              },
              "start": 8540,
              "end": 8554
            }
          ],
          "start": 8532,
          "end": 8556
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 8559,
          "end": 8564
        },
        "start": 8512,
        "end": 8564
      },
      "declare": false,
      "start": 8476,
      "end": 8565
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProp2",
        "optional": false,
        "typeAnnotation": null,
        "start": 8584,
        "end": 8592
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 8593,
              "end": 8594
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8593,
            "end": 8594
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 8596,
              "end": 8597
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PathKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 8606,
                "end": 8614
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
                      "start": 8615,
                      "end": 8616
                    },
                    "typeArguments": null,
                    "start": 8615,
                    "end": 8616
                  }
                ],
                "start": 8614,
                "end": 8617
              },
              "start": 8606,
              "end": 8617
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8596,
            "end": 8617
          }
        ],
        "start": 8592,
        "end": 8618
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 8624,
                "end": 8625
              },
              "typeArguments": null,
              "start": 8624,
              "end": 8625
            },
            "start": 8622,
            "end": 8625
          },
          "start": 8619,
          "end": 8625
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8633,
                "end": 8634
              },
              "typeArguments": null,
              "start": 8633,
              "end": 8634
            },
            "start": 8631,
            "end": 8634
          },
          "start": 8627,
          "end": 8634
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropType",
            "optional": false,
            "typeAnnotation": null,
            "start": 8637,
            "end": 8645
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
                  "start": 8646,
                  "end": 8647
                },
                "typeArguments": null,
                "start": 8646,
                "end": 8647
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8649,
                  "end": 8650
                },
                "typeArguments": null,
                "start": 8649,
                "end": 8650
              }
            ],
            "start": 8645,
            "end": 8651
          },
          "start": 8637,
          "end": 8651
        },
        "start": 8635,
        "end": 8651
      },
      "body": null,
      "expression": false,
      "start": 8567,
      "end": 8652
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 8660,
            "end": 8664
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8673,
                    "end": 8677
                  },
                  "value": {
                    "type": "Literal",
                    "value": "John",
                    "raw": "'John'",
                    "start": 8679,
                    "end": 8685
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 8673,
                  "end": 8685
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "age",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8691,
                    "end": 8694
                  },
                  "value": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 8696,
                    "end": 8698
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 8691,
                  "end": 8698
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cars",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8704,
                    "end": 8708
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "make",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8722,
                              "end": 8726
                            },
                            "value": {
                              "type": "Literal",
                              "value": "Ford",
                              "raw": "'Ford'",
                              "start": 8728,
                              "end": 8734
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 8722,
                            "end": 8734
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "age",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8736,
                              "end": 8739
                            },
                            "value": {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 8741,
                              "end": 8743
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 8736,
                            "end": 8743
                          }
                        ],
                        "start": 8720,
                        "end": 8745
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "make",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8757,
                              "end": 8761
                            },
                            "value": {
                              "type": "Literal",
                              "value": "Trabant",
                              "raw": "'Trabant'",
                              "start": 8763,
                              "end": 8772
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 8757,
                            "end": 8772
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "age",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8774,
                              "end": 8777
                            },
                            "value": {
                              "type": "Literal",
                              "value": 35,
                              "raw": "35",
                              "start": 8779,
                              "end": 8781
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 8774,
                            "end": 8781
                          }
                        ],
                        "start": 8755,
                        "end": 8783
                      }
                    ],
                    "start": 8710,
                    "end": 8789
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 8704,
                  "end": 8789
                }
              ],
              "start": 8667,
              "end": 8791
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 8795,
                "end": 8800
              },
              "typeArguments": null,
              "start": 8795,
              "end": 8800
            },
            "start": 8667,
            "end": 8800
          },
          "definite": false,
          "start": 8660,
          "end": 8800
        }
      ],
      "declare": false,
      "start": 8654,
      "end": 8801
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "make",
            "optional": false,
            "typeAnnotation": null,
            "start": 8807,
            "end": 8811
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 8814,
              "end": 8822
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null,
                "start": 8823,
                "end": 8827
              },
              {
                "type": "Literal",
                "value": "cars.1.make",
                "raw": "'cars.1.make'",
                "start": 8829,
                "end": 8842
              }
            ],
            "optional": false,
            "start": 8814,
            "end": 8843
          },
          "definite": false,
          "start": 8807,
          "end": 8843
        }
      ],
      "declare": false,
      "start": 8803,
      "end": 8844
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Spacing",
          "optional": false,
          "typeAnnotation": null,
          "start": 8894,
          "end": 8901
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "0",
                      "cooked": "0"
                    },
                    "tail": true,
                    "start": 8910,
                    "end": 8913
                  }
                ],
                "expressions": [],
                "start": 8910,
                "end": 8913
              },
              "start": 8910,
              "end": 8913
            },
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 8920,
                  "end": 8923
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "px",
                    "cooked": "px"
                  },
                  "tail": true,
                  "start": 8929,
                  "end": 8933
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 8923,
                  "end": 8929
                }
              ],
              "start": 8920,
              "end": 8933
            },
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 8940,
                  "end": 8943
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "rem",
                    "cooked": "rem"
                  },
                  "tail": true,
                  "start": 8949,
                  "end": 8954
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 8943,
                  "end": 8949
                }
              ],
              "start": 8940,
              "end": 8954
            },
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false,
                  "start": 8961,
                  "end": 8965
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 9053,
                  "end": 9055
                }
              ],
              "types": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 8965,
                        "end": 8966
                      },
                      "start": 8965,
                      "end": 8966
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 8969,
                        "end": 8970
                      },
                      "start": 8969,
                      "end": 8970
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 8973,
                        "end": 8974
                      },
                      "start": 8973,
                      "end": 8974
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 8977,
                        "end": 8978
                      },
                      "start": 8977,
                      "end": 8978
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 8981,
                        "end": 8982
                      },
                      "start": 8981,
                      "end": 8982
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 8985,
                        "end": 8986
                      },
                      "start": 8985,
                      "end": 8986
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 8989,
                        "end": 8990
                      },
                      "start": 8989,
                      "end": 8990
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 8993,
                        "end": 8994
                      },
                      "start": 8993,
                      "end": 8994
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 8997,
                        "end": 8998
                      },
                      "start": 8997,
                      "end": 8998
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 9001,
                        "end": 9003
                      },
                      "start": 9001,
                      "end": 9003
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 9006,
                        "end": 9008
                      },
                      "start": 9006,
                      "end": 9008
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 9011,
                        "end": 9013
                      },
                      "start": 9011,
                      "end": 9013
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 9016,
                        "end": 9018
                      },
                      "start": 9016,
                      "end": 9018
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 9021,
                        "end": 9023
                      },
                      "start": 9021,
                      "end": 9023
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 9026,
                        "end": 9028
                      },
                      "start": 9026,
                      "end": 9028
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 9031,
                        "end": 9033
                      },
                      "start": 9031,
                      "end": 9033
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 9036,
                        "end": 9038
                      },
                      "start": 9036,
                      "end": 9038
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 18,
                        "raw": "18",
                        "start": 9041,
                        "end": 9043
                      },
                      "start": 9041,
                      "end": 9043
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 19,
                        "raw": "19",
                        "start": 9046,
                        "end": 9048
                      },
                      "start": 9046,
                      "end": 9048
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 9051,
                        "end": 9053
                      },
                      "start": 9051,
                      "end": 9053
                    }
                  ],
                  "start": 8965,
                  "end": 9053
                }
              ],
              "start": 8961,
              "end": 9055
            }
          ],
          "start": 8908,
          "end": 9055
        },
        "declare": false,
        "start": 8889,
        "end": 9056
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 8882,
      "end": 9056
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "spacing",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Spacing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9073,
                  "end": 9080
                },
                "typeArguments": null,
                "start": 9073,
                "end": 9080
              },
              "start": 9071,
              "end": 9080
            },
            "start": 9064,
            "end": 9080
          },
          "init": {
            "type": "Literal",
            "value": "s12",
            "raw": "\"s12\"",
            "start": 9083,
            "end": 9088
          },
          "definite": false,
          "start": 9064,
          "end": 9088
        }
      ],
      "declare": false,
      "start": 9058,
      "end": 9088
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SpacingShorthand",
          "optional": false,
          "typeAnnotation": null,
          "start": 9102,
          "end": 9118
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 9127,
                  "end": 9130
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false,
                  "start": 9137,
                  "end": 9141
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 9148,
                  "end": 9150
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9130,
                    "end": 9137
                  },
                  "typeArguments": null,
                  "start": 9130,
                  "end": 9137
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9141,
                    "end": 9148
                  },
                  "typeArguments": null,
                  "start": 9141,
                  "end": 9148
                }
              ],
              "start": 9127,
              "end": 9150
            },
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 9157,
                  "end": 9160
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false,
                  "start": 9167,
                  "end": 9171
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false,
                  "start": 9178,
                  "end": 9182
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 9189,
                  "end": 9191
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9160,
                    "end": 9167
                  },
                  "typeArguments": null,
                  "start": 9160,
                  "end": 9167
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9171,
                    "end": 9178
                  },
                  "typeArguments": null,
                  "start": 9171,
                  "end": 9178
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9182,
                    "end": 9189
                  },
                  "typeArguments": null,
                  "start": 9182,
                  "end": 9189
                }
              ],
              "start": 9157,
              "end": 9191
            },
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 9198,
                  "end": 9201
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false,
                  "start": 9208,
                  "end": 9212
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false,
                  "start": 9219,
                  "end": 9223
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false,
                  "start": 9230,
                  "end": 9234
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 9241,
                  "end": 9243
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9201,
                    "end": 9208
                  },
                  "typeArguments": null,
                  "start": 9201,
                  "end": 9208
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9212,
                    "end": 9219
                  },
                  "typeArguments": null,
                  "start": 9212,
                  "end": 9219
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9223,
                    "end": 9230
                  },
                  "typeArguments": null,
                  "start": 9223,
                  "end": 9230
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9234,
                    "end": 9241
                  },
                  "typeArguments": null,
                  "start": 9234,
                  "end": 9241
                }
              ],
              "start": 9198,
              "end": 9243
            }
          ],
          "start": 9125,
          "end": 9243
        },
        "declare": false,
        "start": 9097,
        "end": 9244
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 9090,
      "end": 9244
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SpacingShorthand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9259,
                  "end": 9275
                },
                "typeArguments": null,
                "start": 9259,
                "end": 9275
              },
              "start": 9257,
              "end": 9275
            },
            "start": 9252,
            "end": 9275
          },
          "init": {
            "type": "Literal",
            "value": "0 0 0",
            "raw": "\"0 0 0\"",
            "start": 9278,
            "end": 9285
          },
          "definite": false,
          "start": 9252,
          "end": 9285
        }
      ],
      "declare": false,
      "start": 9246,
      "end": 9286
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 9286
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "createScopedActionType",
    "start": 45,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 73,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "scope",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 105,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 130,
    "end": 132
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "scope",
    "start": 136,
    "end": 141
  },
  {
    "type": "Template",
    "value": "}/${",
    "start": 141,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 145,
    "end": 149
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 149,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 152,
    "end": 154
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 158,
    "end": 159
  },
  {
    "type": "Template",
    "value": "}/${",
    "start": 159,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 163,
    "end": 164
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 168,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "createActionInMyScope",
    "start": 174,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "createScopedActionType",
    "start": 198,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "String",
    "value": "\"MyScope\"",
    "start": 221,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 283,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "MY_ACTION",
    "start": 289,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "createActionInMyScope",
    "start": 301,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "String",
    "value": "\"MY_ACTION\"",
    "start": 323,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 414,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "EventName",
    "start": 419,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 431,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 449,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 452,
    "end": 453
  },
  {
    "type": "Template",
    "value": "}Changed`",
    "start": 453,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 464,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "EN1",
    "start": 469,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "EventName",
    "start": 475,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 484,
    "end": 485
  },
  {
    "type": "String",
    "value": "'Foo'",
    "start": 485,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 491,
    "end": 492
  },
  {
    "type": "String",
    "value": "'Bar'",
    "start": 493,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 499,
    "end": 500
  },
  {
    "type": "String",
    "value": "'Baz'",
    "start": 501,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 509,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "Loc",
    "start": 514,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 520,
    "end": 523
  },
  {
    "type": "String",
    "value": "'top'",
    "start": 523,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 529,
    "end": 530
  },
  {
    "type": "String",
    "value": "'middle'",
    "start": 531,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 540,
    "end": 541
  },
  {
    "type": "String",
    "value": "'bottom'",
    "start": 542,
    "end": 550
  },
  {
    "type": "Template",
    "value": "}-${",
    "start": 550,
    "end": 554
  },
  {
    "type": "String",
    "value": "'left'",
    "start": 554,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 561,
    "end": 562
  },
  {
    "type": "String",
    "value": "'center'",
    "start": 563,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 572,
    "end": 573
  },
  {
    "type": "String",
    "value": "'right'",
    "start": 574,
    "end": 581
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 581,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 643,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "ToString",
    "start": 648,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 659,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 667,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 676,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 685,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 695,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 703,
    "end": 704
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 705,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 708,
    "end": 709
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 709,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 713,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "TS1",
    "start": 718,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "ToString",
    "start": 724,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 732,
    "end": 733
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 733,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 739,
    "end": 740
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 741,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 744,
    "end": 745
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 746,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 753,
    "end": 754
  },
  {
    "type": "Numeric",
    "value": "1234n",
    "start": 754,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 810,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "TL1",
    "start": 815,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 821,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 829,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 837,
    "end": 838
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 839,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 843,
    "end": 844
  },
  {
    "type": "Template",
    "value": "}b${",
    "start": 844,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 848,
    "end": 849
  },
  {
    "type": "Template",
    "value": "}c`",
    "start": 849,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 854,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "TL2",
    "start": 859,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 863,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 865,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 873,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "TL1",
    "start": 883,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 886,
    "end": 887
  },
  {
    "type": "Template",
    "value": "`x${",
    "start": 887,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 891,
    "end": 892
  },
  {
    "type": "Template",
    "value": "}y`",
    "start": 892,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "type",
    "start": 920,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "TL3",
    "start": 925,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "TL2",
    "start": 931,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 934,
    "end": 935
  },
  {
    "type": "String",
    "value": "'o'",
    "start": 935,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 980,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "Cases",
    "start": 985,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 991,
    "end": 992
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 993,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1001,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 1014,
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
    "value": "T",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 1026,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 1030,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 1042,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 1046,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 1059,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "Uncapitalize",
    "start": 1063,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1078,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1083,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "TCA1",
    "start": 1088,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "Cases",
    "start": 1095,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1101,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1131,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "TCA2",
    "start": 1136,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "Cases",
    "start": 1143,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "String",
    "value": "'BAR'",
    "start": 1149,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1198,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1207,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1214,
    "end": 1221
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1222,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1230,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1237,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Template",
    "value": "`get${",
    "start": 1243,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 1249,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1262,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1276,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1280,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1289,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1299,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1303,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "String",
    "value": "'getFoo'",
    "start": 1307,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "String",
    "value": "'getBar'",
    "start": 1318,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1329,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1338,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "fa1",
    "start": 1347,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1368,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1371,
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
    "value": "]",
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
    "value": "T",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1397,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1400,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1410,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1417,
    "end": 1419
  },
  {
    "type": "Template",
    "value": "`p_${",
    "start": 1420,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1426,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "z",
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
    "type": "Identifier",
    "value": "x",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1476,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "fa2",
    "start": 1485,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1494,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1507,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1515,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1525,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1544,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1549,
    "end": 1551
  },
  {
    "type": "Template",
    "value": "`p_${",
    "start": 1552,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1558,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1560,
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
    "value": "T",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1576,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1581,
    "end": 1583
  },
  {
    "type": "Template",
    "value": "`p_${",
    "start": 1584,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1590,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "x",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1698,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "Join",
    "start": 1703,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1710,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1718,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1731,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1739,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1755,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "String",
    "value": "''",
    "start": 1768,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1779,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1788,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1797,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1806,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1816,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1826,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1833,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1844,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1853,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1862,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1871,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1881,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1889,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1892,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1903,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1910,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1914,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "Join",
    "start": 1917,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1927,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1936,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1945,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "TJ1",
    "start": 1950,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "Join",
    "start": 1956,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "String",
    "value": "'.'",
    "start": 1975,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1980,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "TJ2",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "Join",
    "start": 1991,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1997,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 2004,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "String",
    "value": "'baz'",
    "start": 2011,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "String",
    "value": "'-'",
    "start": 2019,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2025,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "TJ3",
    "start": 2030,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "Join",
    "start": 2036,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "String",
    "value": "'.'",
    "start": 2045,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2085,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "MatchPair",
    "start": 2090,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2102,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2110,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2122,
    "end": 2129
  },
  {
    "type": "Template",
    "value": "`[${",
    "start": 2130,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2134,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Template",
    "value": "},${",
    "start": 2141,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2145,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Template",
    "value": "}]`",
    "start": 2152,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2167,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2177,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "T20",
    "start": 2182,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "MatchPair",
    "start": 2188,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "String",
    "value": "'[1,2]'",
    "start": 2198,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2223,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "T21",
    "start": 2228,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "MatchPair",
    "start": 2234,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "String",
    "value": "'[foo,bar]'",
    "start": 2244,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2277,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "T22",
    "start": 2282,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "MatchPair",
    "start": 2288,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "String",
    "value": "' [1,2]'",
    "start": 2298,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2321,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "T23",
    "start": 2326,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "MatchPair",
    "start": 2332,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "String",
    "value": "'[123]'",
    "start": 2342,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2364,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "T24",
    "start": 2369,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "MatchPair",
    "start": 2375,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "String",
    "value": "'[1,2,3,4]'",
    "start": 2385,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2419,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "SnakeToCamelCase",
    "start": 2424,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2443,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2451,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2467,
    "end": 2474
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2475,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2478,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Template",
    "value": "}_${",
    "start": 2485,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2489,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2496,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2501,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 2504,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2516,
    "end": 2519
  },
  {
    "type": "Identifier",
    "value": "SnakeToPascalCase",
    "start": 2519,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2539,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2550,
    "end": 2557
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2558,
    "end": 2561
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2561,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2568,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2573,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 2576,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2588,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "SnakeToPascalCase",
    "start": 2597,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2620,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "SnakeToPascalCase",
    "start": 2625,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2645,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2653,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2667,
    "end": 2673
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2674,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2686,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2701,
    "end": 2708
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2709,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2712,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Template",
    "value": "}_${",
    "start": 2719,
    "end": 2723
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2723,
    "end": 2728
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2730,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2735,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 2738,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 2749,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2762,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "SnakeToPascalCase",
    "start": 2765,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2785,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2796,
    "end": 2803
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2804,
    "end": 2807
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2807,
    "end": 2812
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2814,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2819,
    "end": 2822
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 2822,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 2833,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2846,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2855,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2863,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "RR0",
    "start": 2868,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "SnakeToPascalCase",
    "start": 2874,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "String",
    "value": "'hello_world_foo'",
    "start": 2892,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2932,
    "end": 2936
  },
  {
    "type": "Identifier",
    "value": "RR1",
    "start": 2937,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "SnakeToPascalCase",
    "start": 2943,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "String",
    "value": "'FOO_BAR_BAZ'",
    "start": 2961,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2993,
    "end": 2997
  },
  {
    "type": "Identifier",
    "value": "RR2",
    "start": 2998,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Identifier",
    "value": "SnakeToCamelCase",
    "start": 3004,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "String",
    "value": "'hello_world_foo'",
    "start": 3021,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3061,
    "end": 3065
  },
  {
    "type": "Identifier",
    "value": "RR3",
    "start": 3066,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "SnakeToCamelCase",
    "start": 3072,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "String",
    "value": "'FOO_BAR_BAZ'",
    "start": 3089,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3153,
    "end": 3157
  },
  {
    "type": "Identifier",
    "value": "FirstTwoAndRest",
    "start": 3158,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3176,
    "end": 3183
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3184,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3196,
    "end": 3203
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3204,
    "end": 3207
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3207,
    "end": 3212
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 3214,
    "end": 3217
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3217,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 3224,
    "end": 3227
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3227,
    "end": 3232
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3234,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3240,
    "end": 3243
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 3244,
    "end": 3247
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3248,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3257,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3267,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "T25",
    "start": 3272,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Identifier",
    "value": "FirstTwoAndRest",
    "start": 3278,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "String",
    "value": "'abcde'",
    "start": 3294,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3322,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "T26",
    "start": 3327,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "FirstTwoAndRest",
    "start": 3333,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "String",
    "value": "'ab'",
    "start": 3349,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3371,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "T27",
    "start": 3376,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Identifier",
    "value": "FirstTwoAndRest",
    "start": 3382,
    "end": 3397
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3398,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3417,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "HexDigit",
    "start": 3422,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 3433,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 3439,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 3445,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "String",
    "value": "'3'",
    "start": 3451,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "String",
    "value": "'4'",
    "start": 3457,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "String",
    "value": "'5'",
    "start": 3463,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "String",
    "value": "'6'",
    "start": 3469,
    "end": 3472
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "String",
    "value": "'7'",
    "start": 3475,
    "end": 3478
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "String",
    "value": "'8'",
    "start": 3480,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "String",
    "value": "'9'",
    "start": 3486,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 3492,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 3498,
    "end": 3501
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3502,
    "end": 3503
  },
  {
    "type": "String",
    "value": "'C'",
    "start": 3504,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "String",
    "value": "'D'",
    "start": 3510,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "String",
    "value": "'E'",
    "start": 3516,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "String",
    "value": "'F'",
    "start": 3522,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3528,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 3534,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 3540,
    "end": 3543
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3544,
    "end": 3545
  },
  {
    "type": "String",
    "value": "'d'",
    "start": 3546,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "String",
    "value": "'e'",
    "start": 3552,
    "end": 3555
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "String",
    "value": "'f'",
    "start": 3558,
    "end": 3561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3564,
    "end": 3568
  },
  {
    "type": "Identifier",
    "value": "HexColor",
    "start": 3569,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3580,
    "end": 3587
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3588,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3604,
    "end": 3611
  },
  {
    "type": "Template",
    "value": "`#${",
    "start": 3612,
    "end": 3616
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3616,
    "end": 3621
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3622,
    "end": 3624
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 3624,
    "end": 3627
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3627,
    "end": 3632
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3633,
    "end": 3635
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 3635,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3638,
    "end": 3643
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 3644,
    "end": 3646
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 3646,
    "end": 3649
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3649,
    "end": 3654
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 3655,
    "end": 3657
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 3657,
    "end": 3660
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3660,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 3666,
    "end": 3668
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 3668,
    "end": 3671
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3671,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 3677,
    "end": 3679
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3679,
    "end": 3681
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 3693,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 3697,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 3701,
    "end": 3703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3703,
    "end": 3704
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 3705,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 3709,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 3713,
    "end": 3715
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3715,
    "end": 3716
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3717,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3725,
    "end": 3726
  },
  {
    "type": "Identifier",
    "value": "HexDigit",
    "start": 3726,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Identifier",
    "value": "HexDigit",
    "start": 3736,
    "end": 3744
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Identifier",
    "value": "HexDigit",
    "start": 3746,
    "end": 3754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Identifier",
    "value": "HexDigit",
    "start": 3756,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Identifier",
    "value": "HexDigit",
    "start": 3766,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Identifier",
    "value": "HexDigit",
    "start": 3776,
    "end": 3784
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3786,
    "end": 3787
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 3800,
    "end": 3801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3802,
    "end": 3803
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3816,
    "end": 3821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3832,
    "end": 3837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3837,
    "end": 3838
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3840,
    "end": 3844
  },
  {
    "type": "Identifier",
    "value": "TH1",
    "start": 3845,
    "end": 3848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3849,
    "end": 3850
  },
  {
    "type": "Identifier",
    "value": "HexColor",
    "start": 3851,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "String",
    "value": "'#8080FF'",
    "start": 3860,
    "end": 3869
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3869,
    "end": 3870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3870,
    "end": 3871
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3886,
    "end": 3890
  },
  {
    "type": "Identifier",
    "value": "TH2",
    "start": 3891,
    "end": 3894
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3895,
    "end": 3896
  },
  {
    "type": "Identifier",
    "value": "HexColor",
    "start": 3897,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "String",
    "value": "'#80c0ff'",
    "start": 3906,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3932,
    "end": 3936
  },
  {
    "type": "Identifier",
    "value": "TH3",
    "start": 3937,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Identifier",
    "value": "HexColor",
    "start": 3943,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "String",
    "value": "'#8080F'",
    "start": 3952,
    "end": 3960
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3961,
    "end": 3962
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3973,
    "end": 3977
  },
  {
    "type": "Identifier",
    "value": "TH4",
    "start": 3978,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Identifier",
    "value": "HexColor",
    "start": 3984,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "String",
    "value": "'#8080FFF'",
    "start": 3993,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4004,
    "end": 4005
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4041,
    "end": 4045
  },
  {
    "type": "Identifier",
    "value": "Trim",
    "start": 4046,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4053,
    "end": 4060
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4061,
    "end": 4067
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4067,
    "end": 4068
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 4075,
    "end": 4076
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4077,
    "end": 4084
  },
  {
    "type": "Template",
    "value": "` ${",
    "start": 4085,
    "end": 4089
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4089,
    "end": 4094
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4096,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4099,
    "end": 4100
  },
  {
    "type": "Identifier",
    "value": "Trim",
    "start": 4101,
    "end": 4105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4106,
    "end": 4107
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4107,
    "end": 4108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4117,
    "end": 4124
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4125,
    "end": 4128
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4128,
    "end": 4133
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "Template",
    "value": "} `",
    "start": 4135,
    "end": 4138
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Identifier",
    "value": "Trim",
    "start": 4141,
    "end": 4145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4146,
    "end": 4147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4147,
    "end": 4148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4149,
    "end": 4150
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4156,
    "end": 4157
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4159,
    "end": 4163
  },
  {
    "type": "Identifier",
    "value": "TR1",
    "start": 4164,
    "end": 4167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4168,
    "end": 4169
  },
  {
    "type": "Identifier",
    "value": "Trim",
    "start": 4170,
    "end": 4174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4174,
    "end": 4175
  },
  {
    "type": "String",
    "value": "'xx   '",
    "start": 4175,
    "end": 4182
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4182,
    "end": 4183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4183,
    "end": 4184
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4194,
    "end": 4198
  },
  {
    "type": "Identifier",
    "value": "TR2",
    "start": 4199,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4203,
    "end": 4204
  },
  {
    "type": "Identifier",
    "value": "Trim",
    "start": 4205,
    "end": 4209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4209,
    "end": 4210
  },
  {
    "type": "String",
    "value": "'   xx'",
    "start": 4210,
    "end": 4217
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4217,
    "end": 4218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4218,
    "end": 4219
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4229,
    "end": 4233
  },
  {
    "type": "Identifier",
    "value": "TR3",
    "start": 4234,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4238,
    "end": 4239
  },
  {
    "type": "Identifier",
    "value": "Trim",
    "start": 4240,
    "end": 4244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "String",
    "value": "'   xx   '",
    "start": 4245,
    "end": 4255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4255,
    "end": 4256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4256,
    "end": 4257
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4268,
    "end": 4272
  },
  {
    "type": "Identifier",
    "value": "Split",
    "start": 4273,
    "end": 4278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4278,
    "end": 4279
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 4279,
    "end": 4280
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4281,
    "end": 4288
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4289,
    "end": 4295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4299,
    "end": 4306
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4307,
    "end": 4313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4313,
    "end": 4314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4315,
    "end": 4316
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4321,
    "end": 4327
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4328,
    "end": 4335
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4340,
    "end": 4346
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4346,
    "end": 4347
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4347,
    "end": 4348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4349,
    "end": 4350
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4357,
    "end": 4364
  },
  {
    "type": "String",
    "value": "''",
    "start": 4365,
    "end": 4367
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4370,
    "end": 4371
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4373,
    "end": 4374
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4381,
    "end": 4388
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4389,
    "end": 4392
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4392,
    "end": 4397
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4398,
    "end": 4399
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 4399,
    "end": 4402
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 4402,
    "end": 4403
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 4403,
    "end": 4406
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4406,
    "end": 4411
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4412,
    "end": 4413
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4413,
    "end": 4415
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4416,
    "end": 4417
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4418,
    "end": 4419
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4422,
    "end": 4425
  },
  {
    "type": "Identifier",
    "value": "Split",
    "start": 4425,
    "end": 4430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4431,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4436,
    "end": 4437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4438,
    "end": 4439
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4444,
    "end": 4445
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 4445,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4446,
    "end": 4447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4450,
    "end": 4454
  },
  {
    "type": "Identifier",
    "value": "T40",
    "start": 4455,
    "end": 4458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4459,
    "end": 4460
  },
  {
    "type": "Identifier",
    "value": "Split",
    "start": 4461,
    "end": 4466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4466,
    "end": 4467
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4467,
    "end": 4472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4472,
    "end": 4473
  },
  {
    "type": "String",
    "value": "'.'",
    "start": 4474,
    "end": 4477
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4478,
    "end": 4479
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4492,
    "end": 4496
  },
  {
    "type": "Identifier",
    "value": "T41",
    "start": 4497,
    "end": 4500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4501,
    "end": 4502
  },
  {
    "type": "Identifier",
    "value": "Split",
    "start": 4503,
    "end": 4508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4508,
    "end": 4509
  },
  {
    "type": "String",
    "value": "'foo.bar.baz'",
    "start": 4509,
    "end": 4522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "String",
    "value": "'.'",
    "start": 4524,
    "end": 4527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4527,
    "end": 4528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4556,
    "end": 4560
  },
  {
    "type": "Identifier",
    "value": "T42",
    "start": 4561,
    "end": 4564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4565,
    "end": 4566
  },
  {
    "type": "Identifier",
    "value": "Split",
    "start": 4567,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "String",
    "value": "'foo.bar'",
    "start": 4573,
    "end": 4582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4582,
    "end": 4583
  },
  {
    "type": "String",
    "value": "''",
    "start": 4584,
    "end": 4586
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4586,
    "end": 4587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4587,
    "end": 4588
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4629,
    "end": 4633
  },
  {
    "type": "Identifier",
    "value": "T43",
    "start": 4634,
    "end": 4637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4638,
    "end": 4639
  },
  {
    "type": "Identifier",
    "value": "Split",
    "start": 4640,
    "end": 4645
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4645,
    "end": 4646
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4646,
    "end": 4649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4649,
    "end": 4650
  },
  {
    "type": "String",
    "value": "'.'",
    "start": 4651,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4709,
    "end": 4716
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4717,
    "end": 4725
  },
  {
    "type": "Identifier",
    "value": "getProp",
    "start": 4726,
    "end": 4733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4733,
    "end": 4734
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4734,
    "end": 4735
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4735,
    "end": 4736
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 4737,
    "end": 4739
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4740,
    "end": 4747
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4748,
    "end": 4753
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4754,
    "end": 4755
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4756,
    "end": 4757
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4758,
    "end": 4764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4764,
    "end": 4765
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 4766,
    "end": 4768
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4769,
    "end": 4776
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4777,
    "end": 4782
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4783,
    "end": 4784
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4784,
    "end": 4785
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 4785,
    "end": 4787
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4787,
    "end": 4788
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4789,
    "end": 4790
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4791,
    "end": 4797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4797,
    "end": 4798
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 4799,
    "end": 4801
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4802,
    "end": 4809
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4810,
    "end": 4815
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4816,
    "end": 4817
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4817,
    "end": 4818
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 4818,
    "end": 4820
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4820,
    "end": 4821
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 4822,
    "end": 4824
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4824,
    "end": 4825
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4828,
    "end": 4834
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4834,
    "end": 4835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4835,
    "end": 4836
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4836,
    "end": 4839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4839,
    "end": 4840
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4841,
    "end": 4842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4842,
    "end": 4843
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 4844,
    "end": 4848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4848,
    "end": 4849
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4850,
    "end": 4853
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 4853,
    "end": 4855
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 4855,
    "end": 4859
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 4859,
    "end": 4861
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 4861,
    "end": 4865
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 4865,
    "end": 4867
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4867,
    "end": 4869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4869,
    "end": 4870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4870,
    "end": 4871
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4872,
    "end": 4873
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4873,
    "end": 4874
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 4874,
    "end": 4876
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4876,
    "end": 4877
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4877,
    "end": 4878
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 4878,
    "end": 4880
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4880,
    "end": 4881
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4881,
    "end": 4882
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 4882,
    "end": 4884
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4884,
    "end": 4885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4885,
    "end": 4886
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4887,
    "end": 4894
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4895,
    "end": 4903
  },
  {
    "type": "Identifier",
    "value": "getProp",
    "start": 4904,
    "end": 4911
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4911,
    "end": 4912
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4912,
    "end": 4913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 4915,
    "end": 4917
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4918,
    "end": 4925
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4926,
    "end": 4931
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4932,
    "end": 4933
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4934,
    "end": 4935
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4936,
    "end": 4942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 4944,
    "end": 4946
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4947,
    "end": 4954
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4955,
    "end": 4960
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4961,
    "end": 4962
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4962,
    "end": 4963
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 4963,
    "end": 4965
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4965,
    "end": 4966
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4967,
    "end": 4968
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4969,
    "end": 4975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4975,
    "end": 4976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4976,
    "end": 4977
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4977,
    "end": 4980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4980,
    "end": 4981
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4982,
    "end": 4983
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4983,
    "end": 4984
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 4985,
    "end": 4989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4989,
    "end": 4990
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4991,
    "end": 4994
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 4994,
    "end": 4996
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 4996,
    "end": 5000
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 5000,
    "end": 5002
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5002,
    "end": 5004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5004,
    "end": 5005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5005,
    "end": 5006
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5007,
    "end": 5008
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5008,
    "end": 5009
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 5009,
    "end": 5011
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5011,
    "end": 5012
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5012,
    "end": 5013
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 5013,
    "end": 5015
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5015,
    "end": 5016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5016,
    "end": 5017
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5018,
    "end": 5025
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5026,
    "end": 5034
  },
  {
    "type": "Identifier",
    "value": "getProp",
    "start": 5035,
    "end": 5042
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5042,
    "end": 5043
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5043,
    "end": 5044
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5044,
    "end": 5045
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 5046,
    "end": 5048
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5049,
    "end": 5056
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5057,
    "end": 5062
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5063,
    "end": 5064
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5065,
    "end": 5066
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5067,
    "end": 5073
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5073,
    "end": 5074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5074,
    "end": 5075
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5075,
    "end": 5078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5078,
    "end": 5079
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5080,
    "end": 5081
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5081,
    "end": 5082
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 5083,
    "end": 5087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5087,
    "end": 5088
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 5089,
    "end": 5091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5091,
    "end": 5092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5092,
    "end": 5093
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5094,
    "end": 5095
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5095,
    "end": 5096
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 5096,
    "end": 5098
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5098,
    "end": 5099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5099,
    "end": 5100
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5101,
    "end": 5108
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5109,
    "end": 5117
  },
  {
    "type": "Identifier",
    "value": "getProp",
    "start": 5118,
    "end": 5125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5125,
    "end": 5126
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5126,
    "end": 5129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5129,
    "end": 5130
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 5131,
    "end": 5137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5137,
    "end": 5138
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 5139,
    "end": 5143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5143,
    "end": 5144
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5145,
    "end": 5151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5151,
    "end": 5152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5152,
    "end": 5153
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5154,
    "end": 5161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5161,
    "end": 5162
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5164,
    "end": 5167
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 5168,
    "end": 5170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5171,
    "end": 5172
  },
  {
    "type": "Identifier",
    "value": "getProp",
    "start": 5173,
    "end": 5180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5180,
    "end": 5181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5183,
    "end": 5184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5184,
    "end": 5185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5186,
    "end": 5187
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5189,
    "end": 5190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5191,
    "end": 5192
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5192,
    "end": 5193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5193,
    "end": 5194
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 5195,
    "end": 5197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5197,
    "end": 5198
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 5199,
    "end": 5200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5200,
    "end": 5201
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 5202,
    "end": 5209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5210,
    "end": 5211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5211,
    "end": 5212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5212,
    "end": 5213
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 5214,
    "end": 5216
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 5217,
    "end": 5222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5222,
    "end": 5223
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5224,
    "end": 5227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5227,
    "end": 5228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5228,
    "end": 5229
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5230,
    "end": 5233
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 5234,
    "end": 5236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5237,
    "end": 5238
  },
  {
    "type": "Identifier",
    "value": "getProp",
    "start": 5239,
    "end": 5246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5246,
    "end": 5247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5247,
    "end": 5248
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5249,
    "end": 5250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5250,
    "end": 5251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5252,
    "end": 5253
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5254,
    "end": 5255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5255,
    "end": 5256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5257,
    "end": 5258
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5258,
    "end": 5259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5259,
    "end": 5260
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 5261,
    "end": 5263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5263,
    "end": 5264
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 5265,
    "end": 5266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5266,
    "end": 5267
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 5268,
    "end": 5275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5276,
    "end": 5277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5277,
    "end": 5278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5278,
    "end": 5279
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 5280,
    "end": 5282
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 5283,
    "end": 5288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5288,
    "end": 5289
  },
  {
    "type": "String",
    "value": "'a.b'",
    "start": 5290,
    "end": 5295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5295,
    "end": 5296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5296,
    "end": 5297
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5298,
    "end": 5301
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 5302,
    "end": 5304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5305,
    "end": 5306
  },
  {
    "type": "Identifier",
    "value": "getProp",
    "start": 5307,
    "end": 5314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5314,
    "end": 5315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5315,
    "end": 5316
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5317,
    "end": 5318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5318,
    "end": 5319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5320,
    "end": 5321
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5322,
    "end": 5323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5323,
    "end": 5324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5325,
    "end": 5326
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5326,
    "end": 5327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5327,
    "end": 5328
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 5329,
    "end": 5331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5331,
    "end": 5332
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 5333,
    "end": 5334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5334,
    "end": 5335
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 5336,
    "end": 5343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5344,
    "end": 5345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5345,
    "end": 5346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5346,
    "end": 5347
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 5348,
    "end": 5350
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 5351,
    "end": 5356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5356,
    "end": 5357
  },
  {
    "type": "String",
    "value": "'a.b.d'",
    "start": 5358,
    "end": 5365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5365,
    "end": 5366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5366,
    "end": 5367
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5369,
    "end": 5373
  },
  {
    "type": "Identifier",
    "value": "PropType",
    "start": 5374,
    "end": 5382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5382,
    "end": 5383
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5383,
    "end": 5384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5384,
    "end": 5385
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 5386,
    "end": 5390
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5391,
    "end": 5398
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5399,
    "end": 5405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5405,
    "end": 5406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5407,
    "end": 5408
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5413,
    "end": 5419
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5420,
    "end": 5427
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 5428,
    "end": 5432
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5433,
    "end": 5434
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5435,
    "end": 5442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5443,
    "end": 5444
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 5449,
    "end": 5453
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5454,
    "end": 5461
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5462,
    "end": 5467
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5468,
    "end": 5469
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5470,
    "end": 5471
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5472,
    "end": 5473
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5473,
    "end": 5474
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 5474,
    "end": 5478
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5478,
    "end": 5479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5480,
    "end": 5481
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 5486,
    "end": 5490
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5491,
    "end": 5498
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5499,
    "end": 5502
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5502,
    "end": 5507
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 5508,
    "end": 5509
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 5509,
    "end": 5513
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5513,
    "end": 5518
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5519,
    "end": 5520
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5520,
    "end": 5522
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5523,
    "end": 5524
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 5525,
    "end": 5526
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5527,
    "end": 5534
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5535,
    "end": 5540
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5541,
    "end": 5542
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5543,
    "end": 5544
  },
  {
    "type": "Identifier",
    "value": "PropType",
    "start": 5545,
    "end": 5553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5553,
    "end": 5554
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5554,
    "end": 5555
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5555,
    "end": 5556
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 5556,
    "end": 5557
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5557,
    "end": 5558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5558,
    "end": 5559
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5560,
    "end": 5561
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5561,
    "end": 5562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5563,
    "end": 5564
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5565,
    "end": 5572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5573,
    "end": 5574
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5579,
    "end": 5586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5586,
    "end": 5587
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5589,
    "end": 5596
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5597,
    "end": 5605
  },
  {
    "type": "Identifier",
    "value": "getPropValue",
    "start": 5606,
    "end": 5618
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5618,
    "end": 5619
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5619,
    "end": 5620
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5620,
    "end": 5621
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 5622,
    "end": 5623
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5624,
    "end": 5631
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5632,
    "end": 5638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5638,
    "end": 5639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5639,
    "end": 5640
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5640,
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
    "value": "T",
    "start": 5645,
    "end": 5646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5646,
    "end": 5647
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 5648,
    "end": 5652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5652,
    "end": 5653
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 5654,
    "end": 5655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5655,
    "end": 5656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5656,
    "end": 5657
  },
  {
    "type": "Identifier",
    "value": "PropType",
    "start": 5658,
    "end": 5666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5666,
    "end": 5667
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5667,
    "end": 5668
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5668,
    "end": 5669
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 5670,
    "end": 5671
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5671,
    "end": 5672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5672,
    "end": 5673
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5674,
    "end": 5681
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5682,
    "end": 5687
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5688,
    "end": 5689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5689,
    "end": 5690
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5691,
    "end": 5697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5697,
    "end": 5698
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5700,
    "end": 5705
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5706,
    "end": 5709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5710,
    "end": 5711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5712,
    "end": 5713
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5714,
    "end": 5715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5715,
    "end": 5716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5717,
    "end": 5718
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5719,
    "end": 5720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5720,
    "end": 5721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5722,
    "end": 5723
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5723,
    "end": 5724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5724,
    "end": 5725
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 5726,
    "end": 5728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5728,
    "end": 5729
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 5730,
    "end": 5731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5731,
    "end": 5732
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 5733,
    "end": 5740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5741,
    "end": 5742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5742,
    "end": 5743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5743,
    "end": 5744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5744,
    "end": 5745
  },
  {
    "type": "Identifier",
    "value": "getPropValue",
    "start": 5747,
    "end": 5759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5759,
    "end": 5760
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5760,
    "end": 5763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5763,
    "end": 5764
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5765,
    "end": 5768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5768,
    "end": 5769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5769,
    "end": 5770
  },
  {
    "type": "Identifier",
    "value": "getPropValue",
    "start": 5806,
    "end": 5818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5818,
    "end": 5819
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5819,
    "end": 5822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5822,
    "end": 5823
  },
  {
    "type": "String",
    "value": "'a.b'",
    "start": 5824,
    "end": 5829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5829,
    "end": 5830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5830,
    "end": 5831
  },
  {
    "type": "Identifier",
    "value": "getPropValue",
    "start": 5860,
    "end": 5872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5872,
    "end": 5873
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5873,
    "end": 5876
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5876,
    "end": 5877
  },
  {
    "type": "String",
    "value": "'a.b.d'",
    "start": 5878,
    "end": 5885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5885,
    "end": 5886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5886,
    "end": 5887
  },
  {
    "type": "Identifier",
    "value": "getPropValue",
    "start": 5899,
    "end": 5911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5911,
    "end": 5912
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5912,
    "end": 5915
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5915,
    "end": 5916
  },
  {
    "type": "String",
    "value": "'a.b.x'",
    "start": 5917,
    "end": 5924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5924,
    "end": 5925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5925,
    "end": 5926
  },
  {
    "type": "Identifier",
    "value": "getPropValue",
    "start": 5939,
    "end": 5951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5951,
    "end": 5952
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5952,
    "end": 5955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5955,
    "end": 5956
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5957,
    "end": 5958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5958,
    "end": 5959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5959,
    "end": 5960
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6043,
    "end": 6047
  },
  {
    "type": "Identifier",
    "value": "S1",
    "start": 6048,
    "end": 6050
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6050,
    "end": 6051
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6051,
    "end": 6052
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6052,
    "end": 6053
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6054,
    "end": 6055
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6056,
    "end": 6057
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6058,
    "end": 6065
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 6066,
    "end": 6072
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6072,
    "end": 6077
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6078,
    "end": 6079
  },
  {
    "type": "Template",
    "value": "}bar`",
    "start": 6079,
    "end": 6084
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6085,
    "end": 6086
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 6087,
    "end": 6089
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6089,
    "end": 6090
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6090,
    "end": 6091
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6091,
    "end": 6092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6093,
    "end": 6094
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6095,
    "end": 6100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6100,
    "end": 6101
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6102,
    "end": 6106
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 6107,
    "end": 6109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6109,
    "end": 6110
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6110,
    "end": 6111
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6112,
    "end": 6119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6120,
    "end": 6126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6126,
    "end": 6127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6128,
    "end": 6129
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6130,
    "end": 6131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6131,
    "end": 6132
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6184,
    "end": 6188
  },
  {
    "type": "Identifier",
    "value": "TV1",
    "start": 6189,
    "end": 6192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6193,
    "end": 6194
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 6195,
    "end": 6198
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6198,
    "end": 6203
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 6204,
    "end": 6205
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 6205,
    "end": 6207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6207,
    "end": 6208
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6276,
    "end": 6280
  },
  {
    "type": "Identifier",
    "value": "Chars",
    "start": 6281,
    "end": 6286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6286,
    "end": 6287
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6287,
    "end": 6288
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6289,
    "end": 6296
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6297,
    "end": 6303
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6303,
    "end": 6304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6305,
    "end": 6306
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6311,
    "end": 6317
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6318,
    "end": 6325
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6326,
    "end": 6327
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6328,
    "end": 6329
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6330,
    "end": 6336
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6336,
    "end": 6337
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6337,
    "end": 6338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6339,
    "end": 6340
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6345,
    "end": 6346
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6347,
    "end": 6354
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 6355,
    "end": 6358
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6358,
    "end": 6363
  },
  {
    "type": "Identifier",
    "value": "C0",
    "start": 6364,
    "end": 6366
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 6366,
    "end": 6369
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6369,
    "end": 6374
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 6375,
    "end": 6377
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 6377,
    "end": 6380
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6380,
    "end": 6385
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 6386,
    "end": 6388
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 6388,
    "end": 6391
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6391,
    "end": 6396
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 6397,
    "end": 6399
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 6399,
    "end": 6402
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6402,
    "end": 6407
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 6408,
    "end": 6410
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 6410,
    "end": 6413
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6413,
    "end": 6418
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 6419,
    "end": 6421
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 6421,
    "end": 6424
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6424,
    "end": 6429
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 6430,
    "end": 6432
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 6432,
    "end": 6435
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6435,
    "end": 6440
  },
  {
    "type": "Identifier",
    "value": "C7",
    "start": 6441,
    "end": 6443
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 6443,
    "end": 6446
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6446,
    "end": 6451
  },
  {
    "type": "Identifier",
    "value": "C8",
    "start": 6452,
    "end": 6454
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 6454,
    "end": 6457
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6457,
    "end": 6462
  },
  {
    "type": "Identifier",
    "value": "C9",
    "start": 6463,
    "end": 6465
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 6465,
    "end": 6468
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6468,
    "end": 6473
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6474,
    "end": 6475
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 6475,
    "end": 6477
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6478,
    "end": 6479
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6480,
    "end": 6481
  },
  {
    "type": "Identifier",
    "value": "C0",
    "start": 6481,
    "end": 6483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6483,
    "end": 6484
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 6485,
    "end": 6487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6487,
    "end": 6488
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 6489,
    "end": 6491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6491,
    "end": 6492
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 6493,
    "end": 6495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6495,
    "end": 6496
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 6497,
    "end": 6499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6499,
    "end": 6500
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 6501,
    "end": 6503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6503,
    "end": 6504
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 6505,
    "end": 6507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6507,
    "end": 6508
  },
  {
    "type": "Identifier",
    "value": "C7",
    "start": 6509,
    "end": 6511
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6511,
    "end": 6512
  },
  {
    "type": "Identifier",
    "value": "C8",
    "start": 6513,
    "end": 6515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6515,
    "end": 6516
  },
  {
    "type": "Identifier",
    "value": "C9",
    "start": 6517,
    "end": 6519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6519,
    "end": 6520
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 6521,
    "end": 6524
  },
  {
    "type": "Identifier",
    "value": "Chars",
    "start": 6524,
    "end": 6529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6529,
    "end": 6530
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6530,
    "end": 6531
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6531,
    "end": 6532
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6532,
    "end": 6533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6534,
    "end": 6535
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6540,
    "end": 6541
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6542,
    "end": 6549
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 6550,
    "end": 6553
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6553,
    "end": 6558
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6559,
    "end": 6560
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 6560,
    "end": 6563
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6563,
    "end": 6568
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6569,
    "end": 6570
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 6570,
    "end": 6572
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6573,
    "end": 6574
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6575,
    "end": 6576
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6576,
    "end": 6577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6577,
    "end": 6578
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 6579,
    "end": 6582
  },
  {
    "type": "Identifier",
    "value": "Chars",
    "start": 6582,
    "end": 6587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6587,
    "end": 6588
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6588,
    "end": 6589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6589,
    "end": 6590
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6590,
    "end": 6591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6592,
    "end": 6593
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6598,
    "end": 6599
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6600,
    "end": 6607
  },
  {
    "type": "String",
    "value": "''",
    "start": 6608,
    "end": 6610
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6611,
    "end": 6612
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6613,
    "end": 6614
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6614,
    "end": 6615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6616,
    "end": 6617
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6622,
    "end": 6627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6627,
    "end": 6628
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6630,
    "end": 6634
  },
  {
    "type": "Identifier",
    "value": "L1",
    "start": 6635,
    "end": 6637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6638,
    "end": 6639
  },
  {
    "type": "Identifier",
    "value": "Chars",
    "start": 6640,
    "end": 6645
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6645,
    "end": 6646
  },
  {
    "type": "String",
    "value": "'FooBarBazThisIsALongerString'",
    "start": 6646,
    "end": 6676
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6676,
    "end": 6677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6677,
    "end": 6678
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6794,
    "end": 6798
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6799,
    "end": 6802
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6802,
    "end": 6803
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6803,
    "end": 6804
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6804,
    "end": 6805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6806,
    "end": 6807
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6808,
    "end": 6809
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6810,
    "end": 6817
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 6818,
    "end": 6822
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6822,
    "end": 6827
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6828,
    "end": 6829
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 6829,
    "end": 6832
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6833,
    "end": 6834
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6835,
    "end": 6836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6837,
    "end": 6838
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6839,
    "end": 6844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6844,
    "end": 6845
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6847,
    "end": 6851
  },
  {
    "type": "Identifier",
    "value": "TF1",
    "start": 6852,
    "end": 6855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6856,
    "end": 6857
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6858,
    "end": 6861
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6861,
    "end": 6862
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6862,
    "end": 6865
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6865,
    "end": 6866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6866,
    "end": 6867
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6882,
    "end": 6886
  },
  {
    "type": "Identifier",
    "value": "TF2",
    "start": 6887,
    "end": 6890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6891,
    "end": 6892
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6893,
    "end": 6896
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6896,
    "end": 6897
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6897,
    "end": 6903
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6903,
    "end": 6904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6904,
    "end": 6905
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6917,
    "end": 6921
  },
  {
    "type": "Identifier",
    "value": "TF3",
    "start": 6922,
    "end": 6925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6926,
    "end": 6927
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6928,
    "end": 6931
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6931,
    "end": 6932
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 6932,
    "end": 6937
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6937,
    "end": 6938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6938,
    "end": 6939
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6952,
    "end": 6956
  },
  {
    "type": "Identifier",
    "value": "TF4",
    "start": 6957,
    "end": 6960
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6961,
    "end": 6962
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6963,
    "end": 6966
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6966,
    "end": 6967
  },
  {
    "type": "String",
    "value": "'*abc*'",
    "start": 6967,
    "end": 6974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6974,
    "end": 6975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6975,
    "end": 6976
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7045,
    "end": 7049
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7050,
    "end": 7051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7052,
    "end": 7053
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7054,
    "end": 7057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7057,
    "end": 7058
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7060,
    "end": 7064
  },
  {
    "type": "Identifier",
    "value": "U1",
    "start": 7065,
    "end": 7067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7068,
    "end": 7069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7070,
    "end": 7071
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 7071,
    "end": 7073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7073,
    "end": 7074
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7074,
    "end": 7075
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7075,
    "end": 7076
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7077,
    "end": 7078
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7079,
    "end": 7080
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 7080,
    "end": 7082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7082,
    "end": 7083
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7083,
    "end": 7084
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7084,
    "end": 7085
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7086,
    "end": 7087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7088,
    "end": 7089
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 7089,
    "end": 7091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7091,
    "end": 7092
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7092,
    "end": 7093
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7093,
    "end": 7094
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7095,
    "end": 7096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7097,
    "end": 7098
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 7098,
    "end": 7100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7100,
    "end": 7101
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7101,
    "end": 7102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7102,
    "end": 7103
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7104,
    "end": 7105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7106,
    "end": 7107
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 7107,
    "end": 7109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7109,
    "end": 7110
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7110,
    "end": 7111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7111,
    "end": 7112
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7113,
    "end": 7114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7115,
    "end": 7116
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 7116,
    "end": 7118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7118,
    "end": 7119
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7119,
    "end": 7120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7120,
    "end": 7121
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7122,
    "end": 7123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7124,
    "end": 7125
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 7125,
    "end": 7127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7127,
    "end": 7128
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7128,
    "end": 7129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7129,
    "end": 7130
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7131,
    "end": 7132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7133,
    "end": 7134
  },
  {
    "type": "Identifier",
    "value": "h1",
    "start": 7134,
    "end": 7136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7136,
    "end": 7137
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7137,
    "end": 7138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7138,
    "end": 7139
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7140,
    "end": 7141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7142,
    "end": 7143
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 7143,
    "end": 7145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7145,
    "end": 7146
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7146,
    "end": 7147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7147,
    "end": 7148
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7149,
    "end": 7150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7151,
    "end": 7152
  },
  {
    "type": "Identifier",
    "value": "j1",
    "start": 7152,
    "end": 7154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7154,
    "end": 7155
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7155,
    "end": 7156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7156,
    "end": 7157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7157,
    "end": 7158
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7159,
    "end": 7163
  },
  {
    "type": "Identifier",
    "value": "U2",
    "start": 7164,
    "end": 7166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7167,
    "end": 7168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7169,
    "end": 7170
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 7170,
    "end": 7172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7172,
    "end": 7173
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7173,
    "end": 7174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7174,
    "end": 7175
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7176,
    "end": 7177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7178,
    "end": 7179
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 7179,
    "end": 7181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7181,
    "end": 7182
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7182,
    "end": 7183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7183,
    "end": 7184
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7185,
    "end": 7186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7187,
    "end": 7188
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 7188,
    "end": 7190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7190,
    "end": 7191
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7191,
    "end": 7192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7192,
    "end": 7193
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7194,
    "end": 7195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7196,
    "end": 7197
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 7197,
    "end": 7199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7199,
    "end": 7200
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7200,
    "end": 7201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7201,
    "end": 7202
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7203,
    "end": 7204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7205,
    "end": 7206
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 7206,
    "end": 7208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7208,
    "end": 7209
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7209,
    "end": 7210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7210,
    "end": 7211
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7212,
    "end": 7213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7214,
    "end": 7215
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 7215,
    "end": 7217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7217,
    "end": 7218
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7218,
    "end": 7219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7219,
    "end": 7220
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7221,
    "end": 7222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7223,
    "end": 7224
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 7224,
    "end": 7226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7226,
    "end": 7227
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7227,
    "end": 7228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7228,
    "end": 7229
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7230,
    "end": 7231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7232,
    "end": 7233
  },
  {
    "type": "Identifier",
    "value": "h2",
    "start": 7233,
    "end": 7235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7235,
    "end": 7236
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7236,
    "end": 7237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7237,
    "end": 7238
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7239,
    "end": 7240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7241,
    "end": 7242
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 7242,
    "end": 7244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7244,
    "end": 7245
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7245,
    "end": 7246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7246,
    "end": 7247
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7248,
    "end": 7249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7250,
    "end": 7251
  },
  {
    "type": "Identifier",
    "value": "j2",
    "start": 7251,
    "end": 7253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7253,
    "end": 7254
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7254,
    "end": 7255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7255,
    "end": 7256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7256,
    "end": 7257
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7258,
    "end": 7262
  },
  {
    "type": "Identifier",
    "value": "U3",
    "start": 7263,
    "end": 7265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7266,
    "end": 7267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7268,
    "end": 7269
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 7269,
    "end": 7271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7271,
    "end": 7272
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7272,
    "end": 7273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7273,
    "end": 7274
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7275,
    "end": 7276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7277,
    "end": 7278
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 7278,
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
    "value": "A",
    "start": 7281,
    "end": 7282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7282,
    "end": 7283
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7284,
    "end": 7285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7286,
    "end": 7287
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 7287,
    "end": 7289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7289,
    "end": 7290
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7290,
    "end": 7291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7291,
    "end": 7292
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7293,
    "end": 7294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7295,
    "end": 7296
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 7296,
    "end": 7298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7298,
    "end": 7299
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7299,
    "end": 7300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7300,
    "end": 7301
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7302,
    "end": 7303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7304,
    "end": 7305
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 7305,
    "end": 7307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7307,
    "end": 7308
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7308,
    "end": 7309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7309,
    "end": 7310
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7311,
    "end": 7312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7313,
    "end": 7314
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 7314,
    "end": 7316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7316,
    "end": 7317
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7317,
    "end": 7318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7318,
    "end": 7319
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7320,
    "end": 7321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7322,
    "end": 7323
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 7323,
    "end": 7325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7325,
    "end": 7326
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7326,
    "end": 7327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7327,
    "end": 7328
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7329,
    "end": 7330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7331,
    "end": 7332
  },
  {
    "type": "Identifier",
    "value": "h3",
    "start": 7332,
    "end": 7334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7334,
    "end": 7335
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7335,
    "end": 7336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7336,
    "end": 7337
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7338,
    "end": 7339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7340,
    "end": 7341
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 7341,
    "end": 7343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7343,
    "end": 7344
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7344,
    "end": 7345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7345,
    "end": 7346
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7347,
    "end": 7348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7349,
    "end": 7350
  },
  {
    "type": "Identifier",
    "value": "j3",
    "start": 7350,
    "end": 7352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7352,
    "end": 7353
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7353,
    "end": 7354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7354,
    "end": 7355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7355,
    "end": 7356
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7357,
    "end": 7361
  },
  {
    "type": "Identifier",
    "value": "U4",
    "start": 7362,
    "end": 7364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7365,
    "end": 7366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7367,
    "end": 7368
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 7368,
    "end": 7370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7370,
    "end": 7371
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7371,
    "end": 7372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7372,
    "end": 7373
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7374,
    "end": 7375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7376,
    "end": 7377
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 7377,
    "end": 7379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7379,
    "end": 7380
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7380,
    "end": 7381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7381,
    "end": 7382
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7383,
    "end": 7384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7385,
    "end": 7386
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 7386,
    "end": 7388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7388,
    "end": 7389
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7389,
    "end": 7390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7390,
    "end": 7391
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7392,
    "end": 7393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7394,
    "end": 7395
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 7395,
    "end": 7397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7397,
    "end": 7398
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7398,
    "end": 7399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7399,
    "end": 7400
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7401,
    "end": 7402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7403,
    "end": 7404
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 7404,
    "end": 7406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7406,
    "end": 7407
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7407,
    "end": 7408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7408,
    "end": 7409
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7410,
    "end": 7411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7412,
    "end": 7413
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 7413,
    "end": 7415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7415,
    "end": 7416
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7416,
    "end": 7417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7417,
    "end": 7418
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7419,
    "end": 7420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7421,
    "end": 7422
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 7422,
    "end": 7424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7424,
    "end": 7425
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7425,
    "end": 7426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7426,
    "end": 7427
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7428,
    "end": 7429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7430,
    "end": 7431
  },
  {
    "type": "Identifier",
    "value": "h4",
    "start": 7431,
    "end": 7433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7433,
    "end": 7434
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7434,
    "end": 7435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7435,
    "end": 7436
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7437,
    "end": 7438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7439,
    "end": 7440
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 7440,
    "end": 7442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7442,
    "end": 7443
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7443,
    "end": 7444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7444,
    "end": 7445
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7446,
    "end": 7447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7448,
    "end": 7449
  },
  {
    "type": "Identifier",
    "value": "j4",
    "start": 7449,
    "end": 7451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7451,
    "end": 7452
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7452,
    "end": 7453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7453,
    "end": 7454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7454,
    "end": 7455
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7456,
    "end": 7460
  },
  {
    "type": "Identifier",
    "value": "U5",
    "start": 7461,
    "end": 7463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7464,
    "end": 7465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7466,
    "end": 7467
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 7467,
    "end": 7469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7469,
    "end": 7470
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7470,
    "end": 7471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7471,
    "end": 7472
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7473,
    "end": 7474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7475,
    "end": 7476
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 7476,
    "end": 7478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7478,
    "end": 7479
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7479,
    "end": 7480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7480,
    "end": 7481
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7482,
    "end": 7483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7484,
    "end": 7485
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 7485,
    "end": 7487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7487,
    "end": 7488
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7488,
    "end": 7489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7489,
    "end": 7490
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7491,
    "end": 7492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7493,
    "end": 7494
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 7494,
    "end": 7496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7496,
    "end": 7497
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7497,
    "end": 7498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7498,
    "end": 7499
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7500,
    "end": 7501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7502,
    "end": 7503
  },
  {
    "type": "Identifier",
    "value": "e5",
    "start": 7503,
    "end": 7505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7505,
    "end": 7506
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7506,
    "end": 7507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7507,
    "end": 7508
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7509,
    "end": 7510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7511,
    "end": 7512
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 7512,
    "end": 7514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7514,
    "end": 7515
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7515,
    "end": 7516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7516,
    "end": 7517
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7518,
    "end": 7519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7520,
    "end": 7521
  },
  {
    "type": "Identifier",
    "value": "g5",
    "start": 7521,
    "end": 7523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7523,
    "end": 7524
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7524,
    "end": 7525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7525,
    "end": 7526
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7527,
    "end": 7528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7529,
    "end": 7530
  },
  {
    "type": "Identifier",
    "value": "h5",
    "start": 7530,
    "end": 7532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7532,
    "end": 7533
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7533,
    "end": 7534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7534,
    "end": 7535
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7536,
    "end": 7537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7538,
    "end": 7539
  },
  {
    "type": "Identifier",
    "value": "i5",
    "start": 7539,
    "end": 7541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7541,
    "end": 7542
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7542,
    "end": 7543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7543,
    "end": 7544
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7545,
    "end": 7546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7547,
    "end": 7548
  },
  {
    "type": "Identifier",
    "value": "j5",
    "start": 7548,
    "end": 7550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7550,
    "end": 7551
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7551,
    "end": 7552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7552,
    "end": 7553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7553,
    "end": 7554
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7556,
    "end": 7560
  },
  {
    "type": "Identifier",
    "value": "U100000",
    "start": 7561,
    "end": 7568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7569,
    "end": 7570
  },
  {
    "type": "Identifier",
    "value": "U1",
    "start": 7571,
    "end": 7573
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 7574,
    "end": 7575
  },
  {
    "type": "Identifier",
    "value": "U2",
    "start": 7576,
    "end": 7578
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 7579,
    "end": 7580
  },
  {
    "type": "Identifier",
    "value": "U3",
    "start": 7581,
    "end": 7583
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 7584,
    "end": 7585
  },
  {
    "type": "Identifier",
    "value": "U4",
    "start": 7586,
    "end": 7588
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 7589,
    "end": 7590
  },
  {
    "type": "Identifier",
    "value": "U5",
    "start": 7591,
    "end": 7593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7593,
    "end": 7594
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7606,
    "end": 7610
  },
  {
    "type": "Identifier",
    "value": "Digits",
    "start": 7611,
    "end": 7617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7618,
    "end": 7619
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7620,
    "end": 7621
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7622,
    "end": 7623
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7624,
    "end": 7625
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7626,
    "end": 7627
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 7628,
    "end": 7629
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7630,
    "end": 7631
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 7632,
    "end": 7633
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7634,
    "end": 7635
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 7636,
    "end": 7637
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7638,
    "end": 7639
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 7640,
    "end": 7641
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7642,
    "end": 7643
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 7644,
    "end": 7645
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7646,
    "end": 7647
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 7648,
    "end": 7649
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7650,
    "end": 7651
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 7652,
    "end": 7653
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7654,
    "end": 7655
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 7656,
    "end": 7657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7657,
    "end": 7658
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7660,
    "end": 7664
  },
  {
    "type": "Identifier",
    "value": "D100000",
    "start": 7665,
    "end": 7672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7673,
    "end": 7674
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 7675,
    "end": 7678
  },
  {
    "type": "Identifier",
    "value": "Digits",
    "start": 7678,
    "end": 7684
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 7684,
    "end": 7687
  },
  {
    "type": "Identifier",
    "value": "Digits",
    "start": 7687,
    "end": 7693
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 7693,
    "end": 7696
  },
  {
    "type": "Identifier",
    "value": "Digits",
    "start": 7696,
    "end": 7702
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 7702,
    "end": 7705
  },
  {
    "type": "Identifier",
    "value": "Digits",
    "start": 7705,
    "end": 7711
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 7711,
    "end": 7714
  },
  {
    "type": "Identifier",
    "value": "Digits",
    "start": 7714,
    "end": 7720
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 7720,
    "end": 7722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7722,
    "end": 7723
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7735,
    "end": 7739
  },
  {
    "type": "Identifier",
    "value": "TDigits",
    "start": 7740,
    "end": 7747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7748,
    "end": 7749
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7750,
    "end": 7751
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7751,
    "end": 7752
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7752,
    "end": 7753
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7754,
    "end": 7755
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7756,
    "end": 7757
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7757,
    "end": 7758
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7758,
    "end": 7759
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7760,
    "end": 7761
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7762,
    "end": 7763
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 7763,
    "end": 7764
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7764,
    "end": 7765
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7766,
    "end": 7767
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7768,
    "end": 7769
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 7769,
    "end": 7770
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7770,
    "end": 7771
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7772,
    "end": 7773
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7774,
    "end": 7775
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 7775,
    "end": 7776
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7776,
    "end": 7777
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7778,
    "end": 7779
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7780,
    "end": 7781
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 7781,
    "end": 7782
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7782,
    "end": 7783
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7784,
    "end": 7785
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7786,
    "end": 7787
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 7787,
    "end": 7788
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7788,
    "end": 7789
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7790,
    "end": 7791
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7792,
    "end": 7793
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 7793,
    "end": 7794
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7794,
    "end": 7795
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7796,
    "end": 7797
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7798,
    "end": 7799
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 7799,
    "end": 7800
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7800,
    "end": 7801
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7802,
    "end": 7803
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7804,
    "end": 7805
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 7805,
    "end": 7806
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7806,
    "end": 7807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7807,
    "end": 7808
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7810,
    "end": 7814
  },
  {
    "type": "Identifier",
    "value": "T100000",
    "start": 7815,
    "end": 7822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7823,
    "end": 7824
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7825,
    "end": 7826
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 7826,
    "end": 7829
  },
  {
    "type": "Identifier",
    "value": "TDigits",
    "start": 7829,
    "end": 7836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7836,
    "end": 7837
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 7838,
    "end": 7841
  },
  {
    "type": "Identifier",
    "value": "TDigits",
    "start": 7841,
    "end": 7848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7848,
    "end": 7849
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 7850,
    "end": 7853
  },
  {
    "type": "Identifier",
    "value": "TDigits",
    "start": 7853,
    "end": 7860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7860,
    "end": 7861
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 7862,
    "end": 7865
  },
  {
    "type": "Identifier",
    "value": "TDigits",
    "start": 7865,
    "end": 7872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7872,
    "end": 7873
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 7874,
    "end": 7877
  },
  {
    "type": "Identifier",
    "value": "TDigits",
    "start": 7877,
    "end": 7884
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7884,
    "end": 7885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7885,
    "end": 7886
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7920,
    "end": 7924
  },
  {
    "type": "Identifier",
    "value": "IsNegative",
    "start": 7925,
    "end": 7935
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7935,
    "end": 7936
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7936,
    "end": 7937
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7938,
    "end": 7945
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7946,
    "end": 7952
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7952,
    "end": 7953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7954,
    "end": 7955
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 7956,
    "end": 7959
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7959,
    "end": 7960
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 7960,
    "end": 7962
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7963,
    "end": 7970
  },
  {
    "type": "Template",
    "value": "`-${",
    "start": 7971,
    "end": 7975
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7975,
    "end": 7981
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 7981,
    "end": 7983
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7984,
    "end": 7985
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7986,
    "end": 7990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7991,
    "end": 7992
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 7993,
    "end": 7998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7998,
    "end": 7999
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8001,
    "end": 8005
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 8006,
    "end": 8008
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8008,
    "end": 8009
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8009,
    "end": 8010
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8011,
    "end": 8018
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8019,
    "end": 8025
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8025,
    "end": 8026
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 8027,
    "end": 8028
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8029,
    "end": 8036
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8037,
    "end": 8043
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8043,
    "end": 8044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8045,
    "end": 8046
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8051,
    "end": 8052
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 8052,
    "end": 8056
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8056,
    "end": 8057
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 8058,
    "end": 8062
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8062,
    "end": 8063
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8064,
    "end": 8071
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8072,
    "end": 8073
  },
  {
    "type": "Identifier",
    "value": "IsNegative",
    "start": 8073,
    "end": 8083
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8083,
    "end": 8084
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8084,
    "end": 8085
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8085,
    "end": 8086
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8086,
    "end": 8087
  },
  {
    "type": "Identifier",
    "value": "IsNegative",
    "start": 8088,
    "end": 8098
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8098,
    "end": 8099
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 8099,
    "end": 8100
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8100,
    "end": 8101
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8101,
    "end": 8102
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8103,
    "end": 8104
  },
  {
    "type": "String",
    "value": "'Every thing is ok!'",
    "start": 8105,
    "end": 8125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8126,
    "end": 8127
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8128,
    "end": 8129
  },
  {
    "type": "String",
    "value": "'strange'",
    "start": 8129,
    "end": 8138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8138,
    "end": 8139
  },
  {
    "type": "Identifier",
    "value": "IsNegative",
    "start": 8140,
    "end": 8150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8150,
    "end": 8151
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8151,
    "end": 8152
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8152,
    "end": 8153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8153,
    "end": 8154
  },
  {
    "type": "Identifier",
    "value": "IsNegative",
    "start": 8155,
    "end": 8165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8165,
    "end": 8166
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 8166,
    "end": 8167
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8167,
    "end": 8168
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8168,
    "end": 8169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8169,
    "end": 8170
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8172,
    "end": 8176
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 8177,
    "end": 8179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8180,
    "end": 8181
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 8182,
    "end": 8184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8184,
    "end": 8185
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 8185,
    "end": 8186
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 8186,
    "end": 8187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8187,
    "end": 8188
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 8189,
    "end": 8190
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 8190,
    "end": 8191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8191,
    "end": 8192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8192,
    "end": 8193
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8217,
    "end": 8221
  },
  {
    "type": "Identifier",
    "value": "PathKeys",
    "start": 8222,
    "end": 8230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8230,
    "end": 8231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8231,
    "end": 8232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8232,
    "end": 8233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8234,
    "end": 8235
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 8240,
    "end": 8247
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8248,
    "end": 8255
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8256,
    "end": 8257
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8258,
    "end": 8259
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8260,
    "end": 8265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8266,
    "end": 8267
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8272,
    "end": 8273
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8274,
    "end": 8281
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 8282,
    "end": 8290
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 8291,
    "end": 8294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8294,
    "end": 8295
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8295,
    "end": 8296
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8297,
    "end": 8298
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 8299,
    "end": 8306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8306,
    "end": 8307
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 8307,
    "end": 8312
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8313,
    "end": 8314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8314,
    "end": 8315
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 8316,
    "end": 8319
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8319,
    "end": 8325
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 8325,
    "end": 8327
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8327,
    "end": 8328
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8329,
    "end": 8330
  },
  {
    "type": "Identifier",
    "value": "SubKeys",
    "start": 8331,
    "end": 8338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8338,
    "end": 8339
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8339,
    "end": 8340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8340,
    "end": 8341
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 8342,
    "end": 8349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8349,
    "end": 8350
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 8350,
    "end": 8355
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8356,
    "end": 8357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8357,
    "end": 8358
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 8359,
    "end": 8362
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8362,
    "end": 8368
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 8368,
    "end": 8370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8370,
    "end": 8371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8371,
    "end": 8372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8373,
    "end": 8374
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8379,
    "end": 8380
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8381,
    "end": 8388
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 8389,
    "end": 8395
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8396,
    "end": 8397
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 8398,
    "end": 8405
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8405,
    "end": 8406
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 8406,
    "end": 8411
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8412,
    "end": 8413
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8413,
    "end": 8414
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8415,
    "end": 8421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8421,
    "end": 8422
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8423,
    "end": 8424
  },
  {
    "type": "Identifier",
    "value": "SubKeys",
    "start": 8425,
    "end": 8432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8432,
    "end": 8433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8433,
    "end": 8434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8434,
    "end": 8435
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 8436,
    "end": 8443
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8443,
    "end": 8444
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 8444,
    "end": 8449
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8450,
    "end": 8451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8451,
    "end": 8452
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8453,
    "end": 8459
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8459,
    "end": 8460
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8460,
    "end": 8461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8462,
    "end": 8463
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8468,
    "end": 8473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8473,
    "end": 8474
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8476,
    "end": 8480
  },
  {
    "type": "Identifier",
    "value": "SubKeys",
    "start": 8481,
    "end": 8488
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8488,
    "end": 8489
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8489,
    "end": 8490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8490,
    "end": 8491
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 8492,
    "end": 8493
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8494,
    "end": 8501
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8502,
    "end": 8508
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8508,
    "end": 8509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8510,
    "end": 8511
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 8512,
    "end": 8513
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8514,
    "end": 8521
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 8522,
    "end": 8527
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8528,
    "end": 8529
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8530,
    "end": 8531
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 8532,
    "end": 8535
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 8535,
    "end": 8536
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 8536,
    "end": 8540
  },
  {
    "type": "Identifier",
    "value": "PathKeys",
    "start": 8540,
    "end": 8548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8548,
    "end": 8549
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8549,
    "end": 8550
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8550,
    "end": 8551
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 8551,
    "end": 8552
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8552,
    "end": 8553
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8553,
    "end": 8554
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 8554,
    "end": 8556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8557,
    "end": 8558
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8559,
    "end": 8564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8564,
    "end": 8565
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 8567,
    "end": 8574
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8575,
    "end": 8583
  },
  {
    "type": "Identifier",
    "value": "getProp2",
    "start": 8584,
    "end": 8592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8592,
    "end": 8593
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8593,
    "end": 8594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8594,
    "end": 8595
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 8596,
    "end": 8597
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8598,
    "end": 8605
  },
  {
    "type": "Identifier",
    "value": "PathKeys",
    "start": 8606,
    "end": 8614
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8614,
    "end": 8615
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8615,
    "end": 8616
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8616,
    "end": 8617
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8617,
    "end": 8618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8618,
    "end": 8619
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 8619,
    "end": 8622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8622,
    "end": 8623
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8624,
    "end": 8625
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8625,
    "end": 8626
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 8627,
    "end": 8631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8631,
    "end": 8632
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 8633,
    "end": 8634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8634,
    "end": 8635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8635,
    "end": 8636
  },
  {
    "type": "Identifier",
    "value": "PropType",
    "start": 8637,
    "end": 8645
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8645,
    "end": 8646
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8646,
    "end": 8647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8647,
    "end": 8648
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 8649,
    "end": 8650
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8650,
    "end": 8651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8651,
    "end": 8652
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8654,
    "end": 8659
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 8660,
    "end": 8664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8665,
    "end": 8666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8667,
    "end": 8668
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 8673,
    "end": 8677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8677,
    "end": 8678
  },
  {
    "type": "String",
    "value": "'John'",
    "start": 8679,
    "end": 8685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8685,
    "end": 8686
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 8691,
    "end": 8694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8694,
    "end": 8695
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 8696,
    "end": 8698
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8698,
    "end": 8699
  },
  {
    "type": "Identifier",
    "value": "cars",
    "start": 8704,
    "end": 8708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8708,
    "end": 8709
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8710,
    "end": 8711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8720,
    "end": 8721
  },
  {
    "type": "Identifier",
    "value": "make",
    "start": 8722,
    "end": 8726
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8726,
    "end": 8727
  },
  {
    "type": "String",
    "value": "'Ford'",
    "start": 8728,
    "end": 8734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8734,
    "end": 8735
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 8736,
    "end": 8739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8739,
    "end": 8740
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 8741,
    "end": 8743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8744,
    "end": 8745
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8745,
    "end": 8746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8755,
    "end": 8756
  },
  {
    "type": "Identifier",
    "value": "make",
    "start": 8757,
    "end": 8761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8761,
    "end": 8762
  },
  {
    "type": "String",
    "value": "'Trabant'",
    "start": 8763,
    "end": 8772
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8772,
    "end": 8773
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 8774,
    "end": 8777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8777,
    "end": 8778
  },
  {
    "type": "Numeric",
    "value": "35",
    "start": 8779,
    "end": 8781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8782,
    "end": 8783
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8788,
    "end": 8789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8790,
    "end": 8791
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 8792,
    "end": 8794
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 8795,
    "end": 8800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8800,
    "end": 8801
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8803,
    "end": 8806
  },
  {
    "type": "Identifier",
    "value": "make",
    "start": 8807,
    "end": 8811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8812,
    "end": 8813
  },
  {
    "type": "Identifier",
    "value": "getProp2",
    "start": 8814,
    "end": 8822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8822,
    "end": 8823
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 8823,
    "end": 8827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8827,
    "end": 8828
  },
  {
    "type": "String",
    "value": "'cars.1.make'",
    "start": 8829,
    "end": 8842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8842,
    "end": 8843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8843,
    "end": 8844
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8882,
    "end": 8888
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8889,
    "end": 8893
  },
  {
    "type": "Identifier",
    "value": "Spacing",
    "start": 8894,
    "end": 8901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8902,
    "end": 8903
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8908,
    "end": 8909
  },
  {
    "type": "Template",
    "value": "`0`",
    "start": 8910,
    "end": 8913
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8918,
    "end": 8919
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 8920,
    "end": 8923
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8923,
    "end": 8929
  },
  {
    "type": "Template",
    "value": "}px`",
    "start": 8929,
    "end": 8933
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8938,
    "end": 8939
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 8940,
    "end": 8943
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8943,
    "end": 8949
  },
  {
    "type": "Template",
    "value": "}rem`",
    "start": 8949,
    "end": 8954
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8959,
    "end": 8960
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 8961,
    "end": 8965
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8965,
    "end": 8966
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8967,
    "end": 8968
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 8969,
    "end": 8970
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8971,
    "end": 8972
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 8973,
    "end": 8974
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8975,
    "end": 8976
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 8977,
    "end": 8978
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8979,
    "end": 8980
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 8981,
    "end": 8982
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8983,
    "end": 8984
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 8985,
    "end": 8986
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8987,
    "end": 8988
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 8989,
    "end": 8990
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8991,
    "end": 8992
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 8993,
    "end": 8994
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8995,
    "end": 8996
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 8997,
    "end": 8998
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8999,
    "end": 9000
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 9001,
    "end": 9003
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9004,
    "end": 9005
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 9006,
    "end": 9008
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9009,
    "end": 9010
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 9011,
    "end": 9013
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9014,
    "end": 9015
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 9016,
    "end": 9018
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9019,
    "end": 9020
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 9021,
    "end": 9023
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9024,
    "end": 9025
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 9026,
    "end": 9028
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9029,
    "end": 9030
  },
  {
    "type": "Numeric",
    "value": "16",
    "start": 9031,
    "end": 9033
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9034,
    "end": 9035
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 9036,
    "end": 9038
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9039,
    "end": 9040
  },
  {
    "type": "Numeric",
    "value": "18",
    "start": 9041,
    "end": 9043
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9044,
    "end": 9045
  },
  {
    "type": "Numeric",
    "value": "19",
    "start": 9046,
    "end": 9048
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9049,
    "end": 9050
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 9051,
    "end": 9053
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 9053,
    "end": 9055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9055,
    "end": 9056
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 9058,
    "end": 9063
  },
  {
    "type": "Identifier",
    "value": "spacing",
    "start": 9064,
    "end": 9071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9071,
    "end": 9072
  },
  {
    "type": "Identifier",
    "value": "Spacing",
    "start": 9073,
    "end": 9080
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9081,
    "end": 9082
  },
  {
    "type": "String",
    "value": "\"s12\"",
    "start": 9083,
    "end": 9088
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9090,
    "end": 9096
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9097,
    "end": 9101
  },
  {
    "type": "Identifier",
    "value": "SpacingShorthand",
    "start": 9102,
    "end": 9118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9119,
    "end": 9120
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9125,
    "end": 9126
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 9127,
    "end": 9130
  },
  {
    "type": "Identifier",
    "value": "Spacing",
    "start": 9130,
    "end": 9137
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 9137,
    "end": 9141
  },
  {
    "type": "Identifier",
    "value": "Spacing",
    "start": 9141,
    "end": 9148
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 9148,
    "end": 9150
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9155,
    "end": 9156
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 9157,
    "end": 9160
  },
  {
    "type": "Identifier",
    "value": "Spacing",
    "start": 9160,
    "end": 9167
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 9167,
    "end": 9171
  },
  {
    "type": "Identifier",
    "value": "Spacing",
    "start": 9171,
    "end": 9178
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 9178,
    "end": 9182
  },
  {
    "type": "Identifier",
    "value": "Spacing",
    "start": 9182,
    "end": 9189
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 9189,
    "end": 9191
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9196,
    "end": 9197
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 9198,
    "end": 9201
  },
  {
    "type": "Identifier",
    "value": "Spacing",
    "start": 9201,
    "end": 9208
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 9208,
    "end": 9212
  },
  {
    "type": "Identifier",
    "value": "Spacing",
    "start": 9212,
    "end": 9219
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 9219,
    "end": 9223
  },
  {
    "type": "Identifier",
    "value": "Spacing",
    "start": 9223,
    "end": 9230
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 9230,
    "end": 9234
  },
  {
    "type": "Identifier",
    "value": "Spacing",
    "start": 9234,
    "end": 9241
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 9241,
    "end": 9243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9243,
    "end": 9244
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 9246,
    "end": 9251
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 9252,
    "end": 9257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9257,
    "end": 9258
  },
  {
    "type": "Identifier",
    "value": "SpacingShorthand",
    "start": 9259,
    "end": 9275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9276,
    "end": 9277
  },
  {
    "type": "String",
    "value": "\"0 0 0\"",
    "start": 9278,
    "end": 9285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9285,
    "end": 9286
  }
]
```
