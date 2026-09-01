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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 91
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 101
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
                },
                "start": 103,
                "end": 111
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 121,
                      "end": 123
                    },
                    "start": 114,
                    "end": 124
                  }
                ],
                "start": 112,
                "end": 126
              },
              "expression": false,
              "start": 101,
              "end": 126
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 98,
            "end": 126
          }
        ],
        "start": 92,
        "end": 128
      },
      "abstract": false,
      "declare": false,
      "start": 84,
      "end": 128
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 137
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 147
      },
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 157
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 161,
                  "end": 167
                },
                "start": 159,
                "end": 167
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 185,
                      "end": 187
                    },
                    "start": 178,
                    "end": 188
                  }
                ],
                "start": 168,
                "end": 194
              },
              "expression": false,
              "start": 157,
              "end": 194
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 154,
            "end": 194
          }
        ],
        "start": 148,
        "end": 196
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 196
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 205
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
              "start": 206,
              "end": 207
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 217
              },
              "typeArguments": null,
              "start": 216,
              "end": 217
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 206,
            "end": 217
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 230
              },
              "typeArguments": null,
              "start": 229,
              "end": 230
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 219,
            "end": 230
          }
        ],
        "start": 205,
        "end": 231
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
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
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 259,
                                "end": 260
                              },
                              "typeArguments": null,
                              "start": 259,
                              "end": 260
                            },
                            "start": 257,
                            "end": 260
                          },
                          "start": 256,
                          "end": 260
                        },
                        "init": null,
                        "definite": false,
                        "start": 256,
                        "end": 260
                      }
                    ],
                    "declare": false,
                    "start": 252,
                    "end": 261
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 275
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 278,
                              "end": 279
                            },
                            "property": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "'foo'",
                              "start": 280,
                              "end": 285
                            },
                            "optional": false,
                            "computed": true,
                            "start": 278,
                            "end": 286
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 278,
                          "end": 288
                        },
                        "definite": false,
                        "start": 274,
                        "end": 288
                      }
                    ],
                    "declare": false,
                    "start": 270,
                    "end": 289
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 326
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 329,
                            "end": 330
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 331,
                            "end": 334
                          },
                          "optional": false,
                          "computed": false,
                          "start": 329,
                          "end": 334
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 329,
                        "end": 336
                      },
                      "start": 325,
                      "end": 336
                    },
                    "start": 318,
                    "end": 337
                  }
                ],
                "start": 242,
                "end": 343
              },
              "expression": false,
              "start": 239,
              "end": 343
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 238,
            "end": 343
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 350
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
                  "name": "x",
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
                        "start": 354,
                        "end": 355
                      },
                      "typeArguments": null,
                      "start": 354,
                      "end": 355
                    },
                    "start": 352,
                    "end": 355
                  },
                  "start": 351,
                  "end": 355
                }
              ],
              "returnType": null,
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 371,
                          "end": 372
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 375,
                              "end": 376
                            },
                            "property": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "'foo'",
                              "start": 377,
                              "end": 382
                            },
                            "optional": false,
                            "computed": true,
                            "start": 375,
                            "end": 383
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 375,
                          "end": 385
                        },
                        "definite": false,
                        "start": 371,
                        "end": 385
                      }
                    ],
                    "declare": false,
                    "start": 367,
                    "end": 386
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 422,
                        "end": 423
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 426,
                            "end": 427
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 428,
                            "end": 431
                          },
                          "optional": false,
                          "computed": false,
                          "start": 426,
                          "end": 431
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 426,
                        "end": 433
                      },
                      "start": 422,
                      "end": 433
                    },
                    "start": 415,
                    "end": 434
                  }
                ],
                "start": 357,
                "end": 440
              },
              "expression": false,
              "start": 350,
              "end": 440
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 349,
            "end": 440
          }
        ],
        "start": 232,
        "end": 442
      },
      "abstract": false,
      "declare": false,
      "start": 198,
      "end": 442
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 715,
            "end": 717
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 725,
                  "end": 726
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 727,
                        "end": 728
                      },
                      "typeArguments": null,
                      "start": 727,
                      "end": 728
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 730,
                        "end": 731
                      },
                      "typeArguments": null,
                      "start": 730,
                      "end": 731
                    }
                  ],
                  "start": 726,
                  "end": 732
                },
                "arguments": [],
                "start": 721,
                "end": 734
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 737
              },
              "optional": false,
              "computed": false,
              "start": 720,
              "end": 737
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 720,
            "end": 739
          },
          "definite": false,
          "start": 715,
          "end": 739
        }
      ],
      "declare": false,
      "start": 711,
      "end": 740
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
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 745,
            "end": 748
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 756,
                  "end": 757
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 758,
                        "end": 759
                      },
                      "typeArguments": null,
                      "start": 758,
                      "end": 759
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 761,
                        "end": 762
                      },
                      "typeArguments": null,
                      "start": 761,
                      "end": 762
                    }
                  ],
                  "start": 757,
                  "end": 763
                },
                "arguments": [],
                "start": 752,
                "end": 765
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 767,
                "end": 768
              },
              "optional": false,
              "computed": false,
              "start": 751,
              "end": 768
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 774
                },
                "typeArguments": null,
                "arguments": [],
                "start": 769,
                "end": 776
              }
            ],
            "optional": false,
            "start": 751,
            "end": 777
          },
          "definite": false,
          "start": 745,
          "end": 777
        }
      ],
      "declare": false,
      "start": 741,
      "end": 778
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 790,
        "end": 791
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
              "start": 792,
              "end": 793
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 802,
                "end": 803
              },
              "typeArguments": null,
              "start": 802,
              "end": 803
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 792,
            "end": 803
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 806
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 815,
                "end": 816
              },
              "typeArguments": null,
              "start": 815,
              "end": 816
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 805,
            "end": 816
          }
        ],
        "start": 791,
        "end": 817
      },
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
              "start": 824,
              "end": 827
            },
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
                  "start": 829,
                  "end": 830
                },
                "typeArguments": null,
                "start": 829,
                "end": 830
              },
              "start": 827,
              "end": 830
            },
            "accessibility": null,
            "static": false,
            "start": 824,
            "end": 831
          }
        ],
        "start": 818,
        "end": 833
      },
      "declare": false,
      "start": 780,
      "end": 833
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 901,
                  "end": 902
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 903,
                        "end": 904
                      },
                      "typeArguments": null,
                      "start": 903,
                      "end": 904
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 906,
                        "end": 907
                      },
                      "typeArguments": null,
                      "start": 906,
                      "end": 907
                    }
                  ],
                  "start": 902,
                  "end": 908
                },
                "start": 901,
                "end": 908
              },
              "start": 899,
              "end": 908
            },
            "start": 898,
            "end": 908
          },
          "init": null,
          "definite": false,
          "start": 898,
          "end": 908
        }
      ],
      "declare": false,
      "start": 894,
      "end": 909
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 914,
            "end": 916
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 919,
                  "end": 920
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 921,
                  "end": 924
                },
                "optional": false,
                "computed": false,
                "start": 919,
                "end": 924
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 925,
                "end": 928
              },
              "optional": false,
              "computed": false,
              "start": 919,
              "end": 928
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 919,
            "end": 930
          },
          "definite": false,
          "start": 914,
          "end": 930
        }
      ],
      "declare": false,
      "start": 910,
      "end": 931
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 936,
            "end": 939
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 942,
                  "end": 943
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 944,
                  "end": 947
                },
                "optional": false,
                "computed": false,
                "start": 942,
                "end": 947
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 948,
                "end": 953
              },
              "optional": false,
              "computed": true,
              "start": 942,
              "end": 954
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 942,
            "end": 956
          },
          "definite": false,
          "start": 936,
          "end": 956
        }
      ],
      "declare": false,
      "start": 932,
      "end": 957
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 973,
                            "end": 974
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 983,
                              "end": 984
                            },
                            "typeArguments": null,
                            "start": 983,
                            "end": 984
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 973,
                          "end": 984
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 986,
                            "end": 987
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 996,
                              "end": 997
                            },
                            "typeArguments": null,
                            "start": 996,
                            "end": 997
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 986,
                          "end": 997
                        }
                      ],
                      "start": 972,
                      "end": 998
                    },
                    "params": [],
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
                          "start": 1002,
                          "end": 1003
                        },
                        "typeArguments": null,
                        "start": 1002,
                        "end": 1003
                      },
                      "start": 1000,
                      "end": 1003
                    },
                    "start": 972,
                    "end": 1004
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 1010,
                            "end": 1011
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1020,
                              "end": 1021
                            },
                            "typeArguments": null,
                            "start": 1020,
                            "end": 1021
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1010,
                          "end": 1021
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1023,
                            "end": 1024
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1033,
                              "end": 1034
                            },
                            "typeArguments": null,
                            "start": 1033,
                            "end": 1034
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1023,
                          "end": 1034
                        }
                      ],
                      "start": 1009,
                      "end": 1035
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1039,
                              "end": 1040
                            },
                            "typeArguments": null,
                            "start": 1039,
                            "end": 1040
                          },
                          "start": 1037,
                          "end": 1040
                        },
                        "start": 1036,
                        "end": 1040
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
                          "start": 1043,
                          "end": 1044
                        },
                        "typeArguments": null,
                        "start": 1043,
                        "end": 1044
                      },
                      "start": 1041,
                      "end": 1044
                    },
                    "start": 1009,
                    "end": 1045
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 1051,
                            "end": 1052
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1061,
                              "end": 1062
                            },
                            "typeArguments": null,
                            "start": 1061,
                            "end": 1062
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1051,
                          "end": 1062
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1064,
                            "end": 1065
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1074,
                              "end": 1075
                            },
                            "typeArguments": null,
                            "start": 1074,
                            "end": 1075
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1064,
                          "end": 1075
                        }
                      ],
                      "start": 1050,
                      "end": 1076
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1080,
                              "end": 1081
                            },
                            "typeArguments": null,
                            "start": 1080,
                            "end": 1081
                          },
                          "start": 1078,
                          "end": 1081
                        },
                        "start": 1077,
                        "end": 1081
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
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
                              "start": 1086,
                              "end": 1087
                            },
                            "typeArguments": null,
                            "start": 1086,
                            "end": 1087
                          },
                          "start": 1084,
                          "end": 1087
                        },
                        "start": 1083,
                        "end": 1087
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
                          "start": 1090,
                          "end": 1091
                        },
                        "typeArguments": null,
                        "start": 1090,
                        "end": 1091
                      },
                      "start": 1088,
                      "end": 1091
                    },
                    "start": 1050,
                    "end": 1092
                  }
                ],
                "start": 966,
                "end": 1094
              },
              "start": 964,
              "end": 1094
            },
            "start": 963,
            "end": 1094
          },
          "init": null,
          "definite": false,
          "start": 963,
          "end": 1094
        }
      ],
      "declare": false,
      "start": 959,
      "end": 1094
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1245,
            "end": 1247
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1250,
                  "end": 1251
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1252,
                        "end": 1253
                      },
                      "typeArguments": null,
                      "start": 1252,
                      "end": 1253
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1255,
                        "end": 1256
                      },
                      "typeArguments": null,
                      "start": 1255,
                      "end": 1256
                    }
                  ],
                  "start": 1251,
                  "end": 1257
                },
                "arguments": [],
                "optional": false,
                "start": 1250,
                "end": 1259
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1260,
                "end": 1263
              },
              "optional": false,
              "computed": false,
              "start": 1250,
              "end": 1263
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1250,
            "end": 1265
          },
          "definite": false,
          "start": 1245,
          "end": 1265
        }
      ],
      "declare": false,
      "start": 1241,
      "end": 1266
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1272,
            "end": 1275
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1278,
                  "end": 1279
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1278,
                "end": 1281
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1282,
                "end": 1287
              },
              "optional": false,
              "computed": true,
              "start": 1278,
              "end": 1288
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1278,
            "end": 1290
          },
          "definite": false,
          "start": 1272,
          "end": 1290
        }
      ],
      "declare": false,
      "start": 1268,
      "end": 1291
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
            "name": "aB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1357,
            "end": 1359
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1366,
              "end": 1367
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1362,
            "end": 1369
          },
          "definite": false,
          "start": 1357,
          "end": 1369
        }
      ],
      "declare": false,
      "start": 1353,
      "end": 1370
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
            "name": "r3c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1375,
            "end": 1378
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1381,
                  "end": 1382
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "aB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1383,
                    "end": 1385
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "aB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1387,
                    "end": 1389
                  }
                ],
                "optional": false,
                "start": 1381,
                "end": 1390
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1391,
                "end": 1394
              },
              "optional": false,
              "computed": false,
              "start": 1381,
              "end": 1394
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1381,
            "end": 1396
          },
          "definite": false,
          "start": 1375,
          "end": 1396
        }
      ],
      "declare": false,
      "start": 1371,
      "end": 1397
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
            "name": "r3d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1403,
            "end": 1406
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1409,
                  "end": 1410
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "aB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1411,
                    "end": 1413
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "aB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1415,
                    "end": 1417
                  }
                ],
                "optional": false,
                "start": 1409,
                "end": 1418
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1419,
                "end": 1424
              },
              "optional": false,
              "computed": true,
              "start": 1409,
              "end": 1425
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1409,
            "end": 1427
          },
          "definite": false,
          "start": 1403,
          "end": 1427
        }
      ],
      "declare": false,
      "start": 1399,
      "end": 1428
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1434,
            "end": 1435
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1444,
                  "end": 1447
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
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
                          "start": 1450,
                          "end": 1451
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1460,
                            "end": 1461
                          },
                          "typeArguments": null,
                          "start": 1460,
                          "end": 1461
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1450,
                        "end": 1461
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1463,
                          "end": 1464
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1473,
                            "end": 1474
                          },
                          "typeArguments": null,
                          "start": 1473,
                          "end": 1474
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1463,
                        "end": 1474
                      }
                    ],
                    "start": 1449,
                    "end": 1475
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1479,
                            "end": 1480
                          },
                          "typeArguments": null,
                          "start": 1479,
                          "end": 1480
                        },
                        "start": 1477,
                        "end": 1480
                      },
                      "start": 1476,
                      "end": 1480
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
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
                            "start": 1485,
                            "end": 1486
                          },
                          "typeArguments": null,
                          "start": 1485,
                          "end": 1486
                        },
                        "start": 1483,
                        "end": 1486
                      },
                      "start": 1482,
                      "end": 1486
                    }
                  ],
                  "returnType": null,
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1505,
                              "end": 1506
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1509,
                                  "end": 1510
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": "foo",
                                  "raw": "'foo'",
                                  "start": 1511,
                                  "end": 1516
                                },
                                "optional": false,
                                "computed": true,
                                "start": 1509,
                                "end": 1517
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1509,
                              "end": 1519
                            },
                            "definite": false,
                            "start": 1505,
                            "end": 1519
                          }
                        ],
                        "declare": false,
                        "start": 1501,
                        "end": 1520
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1556,
                            "end": 1557
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1560,
                                "end": 1561
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1562,
                                "end": 1565
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1560,
                              "end": 1565
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1560,
                            "end": 1567
                          },
                          "start": 1556,
                          "end": 1567
                        },
                        "start": 1549,
                        "end": 1568
                      }
                    ],
                    "start": 1491,
                    "end": 1574
                  },
                  "id": null,
                  "generator": false,
                  "start": 1449,
                  "end": 1574
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1444,
                "end": 1574
              }
            ],
            "start": 1438,
            "end": 1576
          },
          "definite": false,
          "start": 1434,
          "end": 1576
        }
      ],
      "declare": false,
      "start": 1430,
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1741,
            "end": 1743
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1746,
                "end": 1747
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1748,
                "end": 1751
              },
              "optional": false,
              "computed": false,
              "start": 1746,
              "end": 1751
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "aB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1752,
                "end": 1754
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "aB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1756,
                "end": 1758
              }
            ],
            "optional": false,
            "start": 1746,
            "end": 1759
          },
          "definite": false,
          "start": 1741,
          "end": 1759
        }
      ],
      "declare": false,
      "start": 1737,
      "end": 1760
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 84,
  "end": 1820
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
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
    "value": "string",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 114,
    "end": 120
  },
  {
    "type": "String",
    "value": "''",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 130,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 138,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
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
    "value": "string",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 178,
    "end": 184
  },
  {
    "type": "String",
    "value": "''",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 208,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 221,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 279,
    "end": 280
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 280,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 318,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 331,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 376,
    "end": 377
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 377,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 415,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 428,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 711,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 715,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 721,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 730,
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
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 741,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 745,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 752,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 769,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 780,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 792,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 794,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 805,
    "end": 806
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 807,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 824,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 894,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 910,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 914,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 921,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 925,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 932,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 936,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 944,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 947,
    "end": 948
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 948,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 959,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 973,
    "end": 974
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 975,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 988,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1012,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1025,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1053,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1066,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1241,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1260,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
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
    "value": ";",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1268,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1282,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1353,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "aB",
    "start": 1357,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1362,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1371,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "r3c",
    "start": 1375,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "aB",
    "start": 1383,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "aB",
    "start": 1387,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1391,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1399,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "r3d",
    "start": 1403,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "aB",
    "start": 1411,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "aB",
    "start": 1415,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1419,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "var",
    "start": 1430,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1444,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1452,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1465,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1488,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1501,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1511,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1518,
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
    "value": "return",
    "start": 1549,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1562,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1737,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 1741,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1748,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "aB",
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
    "type": "Identifier",
    "value": "aB",
    "start": 1756,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1759,
    "end": 1760
  }
]
```
