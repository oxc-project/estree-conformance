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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IState",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 37
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 38,
              "end": 45
            },
            "declare": false,
            "start": 21,
            "end": 45
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IToken",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 66
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
                    "name": "startIndex",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 87
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 89,
                      "end": 95
                    },
                    "start": 87,
                    "end": 95
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 77,
                  "end": 96
                }
              ],
              "start": 67,
              "end": 102
            },
            "declare": false,
            "start": 50,
            "end": 102
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IStateToken",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 128
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IToken",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 143
                },
                "typeArguments": null,
                "start": 137,
                "end": 143
              }
            ],
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
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 159
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 167
                      },
                      "typeArguments": null,
                      "start": 161,
                      "end": 167
                    },
                    "start": 159,
                    "end": 167
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 154,
                  "end": 168
                }
              ],
              "start": 144,
              "end": 174
            },
            "declare": false,
            "start": 107,
            "end": 174
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ILineTokens",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 200
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
                    "name": "tokens",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 217
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IToken",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 219,
                          "end": 225
                        },
                        "typeArguments": null,
                        "start": 219,
                        "end": 225
                      },
                      "start": 219,
                      "end": 227
                    },
                    "start": 217,
                    "end": 227
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 211,
                  "end": 228
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "endState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 245
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 247,
                        "end": 253
                      },
                      "typeArguments": null,
                      "start": 247,
                      "end": 253
                    },
                    "start": 245,
                    "end": 253
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 237,
                  "end": 254
                }
              ],
              "start": 201,
              "end": 260
            },
            "declare": false,
            "start": 179,
            "end": 260
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IAction",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 282
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 283,
              "end": 290
            },
            "declare": false,
            "start": 265,
            "end": 290
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IMode",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 310
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onEnter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 321,
                    "end": 328
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "line",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 334,
                          "end": 340
                        },
                        "start": 333,
                        "end": 340
                      },
                      "start": 329,
                      "end": 340
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 348,
                            "end": 354
                          },
                          "typeArguments": null,
                          "start": 348,
                          "end": 354
                        },
                        "start": 347,
                        "end": 354
                      },
                      "start": 342,
                      "end": 354
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "offset",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 363,
                          "end": 369
                        },
                        "start": 362,
                        "end": 369
                      },
                      "start": 356,
                      "end": 369
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 378
                      },
                      "typeArguments": null,
                      "start": 371,
                      "end": 378
                    },
                    "start": 370,
                    "end": 378
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 321,
                  "end": 379
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tokenize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 388,
                    "end": 396
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "line",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 402,
                          "end": 408
                        },
                        "start": 401,
                        "end": 408
                      },
                      "start": 397,
                      "end": 408
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 416,
                            "end": 422
                          },
                          "typeArguments": null,
                          "start": 416,
                          "end": 422
                        },
                        "start": 415,
                        "end": 422
                      },
                      "start": 410,
                      "end": 422
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "includeStates",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 438,
                          "end": 445
                        },
                        "start": 437,
                        "end": 445
                      },
                      "start": 424,
                      "end": 445
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ILineTokens",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 447,
                        "end": 458
                      },
                      "typeArguments": null,
                      "start": 447,
                      "end": 458
                    },
                    "start": 446,
                    "end": 458
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 388,
                  "end": 459
                }
              ],
              "start": 311,
              "end": 465
            },
            "declare": false,
            "start": 295,
            "end": 465
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bug",
                "optional": false,
                "typeAnnotation": null,
                "start": 483,
                "end": 486
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
                    "name": "IMode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 498,
                    "end": 503
                  },
                  "typeArguments": null,
                  "start": 498,
                  "end": 503
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "onEnter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 521,
                      "end": 528
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
                          "name": "line",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 534,
                              "end": 540
                            },
                            "start": 533,
                            "end": 540
                          },
                          "start": 529,
                          "end": 540
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IState",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 548,
                                "end": 554
                              },
                              "typeArguments": null,
                              "start": 548,
                              "end": 554
                            },
                            "start": 547,
                            "end": 554
                          },
                          "start": 542,
                          "end": 554
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "offset",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 563,
                              "end": 569
                            },
                            "start": 562,
                            "end": 569
                          },
                          "start": 556,
                          "end": 569
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IAction",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 571,
                            "end": 578
                          },
                          "typeArguments": null,
                          "start": 571,
                          "end": 578
                        },
                        "start": 570,
                        "end": 578
                      },
                      "body": {
                        "type": "BlockStatement",
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
                                  "name": "lineTokens",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ILineTokens",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 608,
                                        "end": 619
                                      },
                                      "typeArguments": null,
                                      "start": 608,
                                      "end": 619
                                    },
                                    "start": 607,
                                    "end": 619
                                  },
                                  "start": 597,
                                  "end": 619
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 621,
                                      "end": 625
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "tokenize",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 626,
                                      "end": 634
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 621,
                                    "end": 634
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "line",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 635,
                                      "end": 639
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "state",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 641,
                                      "end": 646
                                    },
                                    {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 648,
                                      "end": 652
                                    }
                                  ],
                                  "optional": false,
                                  "start": 621,
                                  "end": 653
                                },
                                "definite": false,
                                "start": 597,
                                "end": 653
                              }
                            ],
                            "declare": false,
                            "start": 593,
                            "end": 654
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
                                  "name": "tokens",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "IStateToken",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 678,
                                          "end": 689
                                        },
                                        "typeArguments": null,
                                        "start": 678,
                                        "end": 689
                                      },
                                      "start": 678,
                                      "end": 691
                                    },
                                    "start": 677,
                                    "end": 691
                                  },
                                  "start": 671,
                                  "end": 691
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "lineTokens",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 693,
                                    "end": 703
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "tokens",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 704,
                                    "end": 710
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 693,
                                  "end": 710
                                },
                                "definite": false,
                                "start": 671,
                                "end": 710
                              }
                            ],
                            "declare": false,
                            "start": 667,
                            "end": 711
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "tokens",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 728,
                                  "end": 734
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 735,
                                  "end": 741
                                },
                                "optional": false,
                                "computed": false,
                                "start": 728,
                                "end": 741
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 746,
                                "end": 747
                              },
                              "start": 728,
                              "end": 747
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 774,
                                        "end": 778
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "onEnter",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 779,
                                        "end": 786
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 774,
                                      "end": 786
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "line",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 787,
                                        "end": 791
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "tokens",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 793,
                                        "end": 799
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "offset",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 801,
                                        "end": 807
                                      }
                                    ],
                                    "optional": false,
                                    "start": 774,
                                    "end": 808
                                  },
                                  "start": 767,
                                  "end": 809
                                }
                              ],
                              "start": 749,
                              "end": 935
                            },
                            "alternate": null,
                            "start": 724,
                            "end": 935
                          }
                        ],
                        "start": 579,
                        "end": 945
                      },
                      "expression": false,
                      "start": 528,
                      "end": 945
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 514,
                    "end": 945
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tokenize",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 961,
                      "end": 969
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
                          "name": "line",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 975,
                              "end": 981
                            },
                            "start": 974,
                            "end": 981
                          },
                          "start": 970,
                          "end": 981
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IState",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 989,
                                "end": 995
                              },
                              "typeArguments": null,
                              "start": 989,
                              "end": 995
                            },
                            "start": 988,
                            "end": 995
                          },
                          "start": 983,
                          "end": 995
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "includeStates",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 1011,
                              "end": 1018
                            },
                            "start": 1010,
                            "end": 1018
                          },
                          "start": 997,
                          "end": 1018
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ILineTokens",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1020,
                            "end": 1031
                          },
                          "typeArguments": null,
                          "start": 1020,
                          "end": 1031
                        },
                        "start": 1019,
                        "end": 1031
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 1053,
                              "end": 1057
                            },
                            "start": 1046,
                            "end": 1058
                          }
                        ],
                        "start": 1032,
                        "end": 1068
                      },
                      "expression": false,
                      "start": 969,
                      "end": 1068
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 954,
                    "end": 1068
                  }
                ],
                "start": 504,
                "end": 1074
              },
              "abstract": false,
              "declare": false,
              "start": 477,
              "end": 1074
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 470,
            "end": 1074
          }
        ],
        "start": 15,
        "end": 1076
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1076
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1076
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
    "value": "Test",
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
    "type": "Keyword",
    "value": "interface",
    "start": 21,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 50,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "IToken",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "startIndex",
    "start": 77,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 107,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "IStateToken",
    "start": 117,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 129,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "IToken",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 179,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "ILineTokens",
    "start": 189,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "IToken",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "endState",
    "start": 237,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 265,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "IAction",
    "start": 275,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 295,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "onEnter",
    "start": 321,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 329,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 334,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 342,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 348,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "offset",
    "start": 356,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 363,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "IAction",
    "start": 371,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "tokenize",
    "start": 388,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 410,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 416,
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
    "value": "includeStates",
    "start": 424,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 438,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "ILineTokens",
    "start": 447,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 470,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 477,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "Bug",
    "start": 483,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 487,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 498,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 514,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "onEnter",
    "start": 521,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 529,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 534,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 542,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "offset",
    "start": 556,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 563,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "IAction",
    "start": 571,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 593,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "lineTokens",
    "start": 597,
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
    "value": "ILineTokens",
    "start": 608,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 619,
    "end": 620
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "tokenize",
    "start": 626,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 635,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 641,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 667,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 671,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "IStateToken",
    "start": 678,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "lineTokens",
    "start": 693,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 704,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 724,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 728,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 735,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 742,
    "end": 745
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 749,
    "end": 750
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 767,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 774,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "onEnter",
    "start": 779,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 787,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 793,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "offset",
    "start": 801,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 954,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "tokenize",
    "start": 961,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 970,
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
    "value": "string",
    "start": 975,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 983,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 989,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "includeStates",
    "start": 997,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1011,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "ILineTokens",
    "start": 1020,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1046,
    "end": 1052
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1053,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1075,
    "end": 1076
  }
]
```
