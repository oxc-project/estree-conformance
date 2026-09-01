__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Maybe",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 91
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
              "start": 92,
              "end": 93
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 92,
            "end": 93
          }
        ],
        "start": 91,
        "end": 94
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSNullKeyword",
            "start": 97,
            "end": 101
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 104,
            "end": 113
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "typeArguments": null,
            "start": 116,
            "end": 117
          }
        ],
        "start": 97,
        "end": 117
      },
      "declare": false,
      "start": 81,
      "end": 118
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GraphQLError",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 146
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Error",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 160
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
              "name": "originalError",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 178
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 185
                },
                "typeArguments": null,
                "start": 180,
                "end": 185
              },
              "start": 178,
              "end": 185
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
            "start": 165,
            "end": 186
          }
        ],
        "start": 161,
        "end": 188
      },
      "abstract": false,
      "declare": true,
      "start": 120,
      "end": 188
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExecutionArgs",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 213
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "variableValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 232
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Maybe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 240
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "variable",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 263,
                                  "end": 269
                                },
                                "start": 261,
                                "end": 269
                              },
                              "start": 253,
                              "end": 269
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 272,
                              "end": 279
                            },
                            "start": 270,
                            "end": 279
                          },
                          "readonly": true,
                          "static": false,
                          "accessibility": null,
                          "start": 243,
                          "end": 279
                        }
                      ],
                      "start": 241,
                      "end": 281
                    }
                  ],
                  "start": 240,
                  "end": 282
                },
                "start": 235,
                "end": 282
              },
              "start": 233,
              "end": 282
            },
            "accessibility": null,
            "static": false,
            "start": 218,
            "end": 283
          }
        ],
        "start": 214,
        "end": 285
      },
      "declare": false,
      "start": 190,
      "end": 285
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExecutionContext",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 313
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
              "name": "variableValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 332
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "variable",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 347,
                            "end": 353
                          },
                          "start": 345,
                          "end": 353
                        },
                        "start": 337,
                        "end": 353
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 356,
                        "end": 363
                      },
                      "start": 354,
                      "end": 363
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 336,
                    "end": 363
                  }
                ],
                "start": 334,
                "end": 365
              },
              "start": 332,
              "end": 365
            },
            "accessibility": null,
            "static": false,
            "start": 318,
            "end": 366
          }
        ],
        "start": 314,
        "end": 368
      },
      "declare": false,
      "start": 287,
      "end": 368
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CoercedVariableValues",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 396
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
                  "name": "errors",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 411
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 413,
                      "end": 426
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "GraphQLError",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 427,
                            "end": 439
                          },
                          "typeArguments": null,
                          "start": 427,
                          "end": 439
                        }
                      ],
                      "start": 426,
                      "end": 440
                    },
                    "start": 413,
                    "end": 440
                  },
                  "start": 411,
                  "end": 440
                },
                "accessibility": null,
                "static": false,
                "start": 405,
                "end": 441
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "coerced",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 449
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 452,
                    "end": 457
                  },
                  "start": 450,
                  "end": 457
                },
                "accessibility": null,
                "static": false,
                "start": 442,
                "end": 457
              }
            ],
            "start": 403,
            "end": 459
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
                  "name": "coerced",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 466,
                  "end": 473
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "variable",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 488,
                                "end": 494
                              },
                              "start": 486,
                              "end": 494
                            },
                            "start": 478,
                            "end": 494
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 497,
                            "end": 504
                          },
                          "start": 495,
                          "end": 504
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 477,
                        "end": 504
                      }
                    ],
                    "start": 475,
                    "end": 506
                  },
                  "start": 473,
                  "end": 506
                },
                "accessibility": null,
                "static": false,
                "start": 466,
                "end": 507
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "errors",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 514
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 517,
                    "end": 522
                  },
                  "start": 515,
                  "end": 522
                },
                "accessibility": null,
                "static": false,
                "start": 508,
                "end": 522
              }
            ],
            "start": 464,
            "end": 524
          }
        ],
        "start": 401,
        "end": 524
      },
      "declare": false,
      "start": 370,
      "end": 525
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getVariableValues",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 561
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "inputs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "variable",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 594,
                          "end": 600
                        },
                        "start": 592,
                        "end": 600
                      },
                      "start": 584,
                      "end": 600
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 603,
                      "end": 610
                    },
                    "start": 601,
                    "end": 610
                  },
                  "readonly": true,
                  "static": false,
                  "accessibility": null,
                  "start": 574,
                  "end": 611
                }
              ],
              "start": 570,
              "end": 613
            },
            "start": 568,
            "end": 613
          },
          "start": 562,
          "end": 613
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "CoercedVariableValues",
            "optional": false,
            "typeAnnotation": null,
            "start": 616,
            "end": 637
          },
          "typeArguments": null,
          "start": 616,
          "end": 637
        },
        "start": 614,
        "end": 637
      },
      "body": null,
      "expression": false,
      "start": 527,
      "end": 638
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "buildExecutionContext",
          "optional": false,
          "typeAnnotation": null,
          "start": 656,
          "end": 677
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExecutionArgs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 700
                },
                "typeArguments": null,
                "start": 687,
                "end": 700
              },
              "start": 685,
              "end": 700
            },
            "start": 681,
            "end": 700
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 718
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GraphQLError",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 719,
                        "end": 731
                      },
                      "typeArguments": null,
                      "start": 719,
                      "end": 731
                    }
                  ],
                  "start": 718,
                  "end": 732
                },
                "start": 705,
                "end": 732
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExecutionContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 735,
                  "end": 751
                },
                "typeArguments": null,
                "start": 735,
                "end": 751
              }
            ],
            "start": 705,
            "end": 751
          },
          "start": 703,
          "end": 751
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "variableValues",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 764,
                          "end": 778
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rawVariableValues",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 780,
                          "end": 797
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 764,
                        "end": 797
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 762,
                    "end": 799
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 802,
                    "end": 806
                  },
                  "definite": false,
                  "start": 762,
                  "end": 806
                }
              ],
              "declare": false,
              "start": 756,
              "end": 807
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
                    "name": "coercedVariableValues",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 817,
                    "end": 838
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getVariableValues",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 841,
                      "end": 858
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rawVariableValues",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 859,
                          "end": 876
                        },
                        "operator": "??",
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 880,
                          "end": 882
                        },
                        "start": 859,
                        "end": 882
                      }
                    ],
                    "optional": false,
                    "start": 841,
                    "end": 883
                  },
                  "definite": false,
                  "start": 817,
                  "end": 883
                }
              ],
              "declare": false,
              "start": 811,
              "end": 884
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "coercedVariableValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 892,
                  "end": 913
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "errors",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 914,
                  "end": 920
                },
                "optional": false,
                "computed": false,
                "start": 892,
                "end": 920
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "coercedVariableValues",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 935,
                        "end": 956
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "errors",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 957,
                        "end": 963
                      },
                      "optional": false,
                      "computed": false,
                      "start": 935,
                      "end": 963
                    },
                    "start": 928,
                    "end": 964
                  }
                ],
                "start": 922,
                "end": 968
              },
              "alternate": null,
              "start": 888,
              "end": 968
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "variableValues",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 985,
                      "end": 999
                    },
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "coercedVariableValues",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1001,
                        "end": 1022
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "coerced",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1023,
                        "end": 1030
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1001,
                      "end": 1030
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 985,
                    "end": 1030
                  }
                ],
                "start": 979,
                "end": 1035
              },
              "start": 972,
              "end": 1036
            }
          ],
          "start": 752,
          "end": 1038
        },
        "expression": false,
        "start": 647,
        "end": 1038
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 640,
      "end": 1038
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 81,
  "end": 1038
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 81,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Maybe",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Null",
    "value": "null",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 104,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 120,
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
    "value": "GraphQLError",
    "start": 134,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 147,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "originalError",
    "start": 165,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 190,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "ExecutionArgs",
    "start": 200,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "variableValues",
    "start": 218,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Maybe",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 243,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "variable",
    "start": 253,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 272,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 287,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "ExecutionContext",
    "start": 297,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "variableValues",
    "start": 318,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "variable",
    "start": 337,
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
    "value": "string",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 356,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 370,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "CoercedVariableValues",
    "start": 375,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "errors",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 413,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "GraphQLError",
    "start": 427,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "coerced",
    "start": 442,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 452,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "coerced",
    "start": 466,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "variable",
    "start": 478,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 494,
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
    "value": "unknown",
    "start": 497,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "errors",
    "start": 508,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 517,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 527,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 535,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "getVariableValues",
    "start": 544,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "inputs",
    "start": 562,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 574,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "variable",
    "start": 584,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 594,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 603,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "CoercedVariableValues",
    "start": 616,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 640,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 647,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "buildExecutionContext",
    "start": 656,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 681,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "ExecutionArgs",
    "start": 687,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 705,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "GraphQLError",
    "start": 719,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "ExecutionContext",
    "start": 735,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 756,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "variableValues",
    "start": 764,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "rawVariableValues",
    "start": 780,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 802,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 811,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "coercedVariableValues",
    "start": 817,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "getVariableValues",
    "start": 841,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "rawVariableValues",
    "start": 859,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 877,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 888,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "coercedVariableValues",
    "start": 892,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "errors",
    "start": 914,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 922,
    "end": 923
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 928,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "coercedVariableValues",
    "start": 935,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "errors",
    "start": 957,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 967,
    "end": 968
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 972,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "variableValues",
    "start": 985,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "coercedVariableValues",
    "start": 1001,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "coerced",
    "start": 1023,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1037,
    "end": 1038
  }
]
```
