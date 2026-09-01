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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 79
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
              "start": 80,
              "end": 81
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 81
          }
        ],
        "start": 79,
        "end": 82
      },
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
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 92
            },
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
                  "start": 94,
                  "end": 95
                },
                "typeArguments": null,
                "start": 94,
                "end": 95
              },
              "start": 92,
              "end": 95
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
            "start": 89,
            "end": 96
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 104
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 106
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
                          "start": 121,
                          "end": 122
                        },
                        "typeArguments": null,
                        "start": 121,
                        "end": 122
                      },
                      "start": 115,
                      "end": 122
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 105,
                    "end": 122
                  }
                ],
                "start": 104,
                "end": 123
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
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
                  "start": 124,
                  "end": 128
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
                      "start": 131,
                      "end": 132
                    },
                    "typeArguments": null,
                    "start": 131,
                    "end": 132
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 134
                    },
                    "typeArguments": null,
                    "start": 133,
                    "end": 134
                  },
                  "start": 131,
                  "end": 135
                },
                "start": 129,
                "end": 135
              },
              "body": null,
              "expression": false,
              "start": 104,
              "end": 136
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 101,
            "end": 136
          }
        ],
        "start": 83,
        "end": 138
      },
      "abstract": false,
      "declare": true,
      "start": 61,
      "end": 138
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 151
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
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 157,
                  "end": 160
                },
                "start": 157,
                "end": 160
              },
              "start": 155,
              "end": 160
            },
            "accessibility": null,
            "static": false,
            "start": 154,
            "end": 160
          }
        ],
        "start": 152,
        "end": 162
      },
      "declare": false,
      "start": 140,
      "end": 162
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 174
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
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 180,
                  "end": 183
                },
                "start": 180,
                "end": 183
              },
              "start": 178,
              "end": 183
            },
            "accessibility": null,
            "static": false,
            "start": 177,
            "end": 183
          }
        ],
        "start": 175,
        "end": 185
      },
      "declare": false,
      "start": 163,
      "end": 185
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
            "name": "tmp",
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
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 210
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
                            "start": 211,
                            "end": 212
                          },
                          "typeArguments": null,
                          "start": 211,
                          "end": 212
                        }
                      ],
                      "start": 210,
                      "end": 213
                    },
                    "start": 206,
                    "end": 213
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 220
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
                            "start": 221,
                            "end": 222
                          },
                          "typeArguments": null,
                          "start": 221,
                          "end": 222
                        }
                      ],
                      "start": 220,
                      "end": 223
                    },
                    "start": 216,
                    "end": 223
                  }
                ],
                "start": 206,
                "end": 223
              },
              "start": 204,
              "end": 223
            },
            "start": 201,
            "end": 223
          },
          "init": null,
          "definite": false,
          "start": 201,
          "end": 223
        }
      ],
      "declare": true,
      "start": 187,
      "end": 224
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "tmp",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 237
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 241
          },
          "optional": false,
          "computed": false,
          "start": 234,
          "end": 241
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "t",
            "raw": "'t'",
            "start": 242,
            "end": 245
          }
        ],
        "optional": false,
        "start": 234,
        "end": 246
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "A",
            "raw": "'A'",
            "start": 259,
            "end": 262
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 264,
              "end": 270
            }
          ],
          "start": 254,
          "end": 270
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "B",
            "raw": "'B'",
            "start": 280,
            "end": 283
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 285,
              "end": 291
            }
          ],
          "start": 275,
          "end": 291
        }
      ],
      "start": 226,
      "end": 293
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 368,
                      "end": 374
                    },
                    "start": 368,
                    "end": 376
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 379,
                      "end": 385
                    },
                    "start": 379,
                    "end": 387
                  }
                ],
                "start": 368,
                "end": 387
              },
              "start": 366,
              "end": 387
            },
            "start": 363,
            "end": 387
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 390,
            "end": 392
          },
          "definite": false,
          "start": 363,
          "end": 392
        }
      ],
      "declare": false,
      "start": 357,
      "end": 393
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
            "name": "arr1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 444,
                  "end": 450
                },
                "start": 444,
                "end": 452
              },
              "start": 442,
              "end": 452
            },
            "start": 438,
            "end": 452
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 456,
            "end": 458
          },
          "definite": false,
          "start": 438,
          "end": 458
        }
      ],
      "declare": false,
      "start": 432,
      "end": 459
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
            "name": "arr2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 473,
                  "end": 479
                },
                "start": 473,
                "end": 481
              },
              "start": 470,
              "end": 481
            },
            "start": 466,
            "end": 481
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 484,
            "end": 486
          },
          "definite": false,
          "start": 466,
          "end": 486
        }
      ],
      "declare": false,
      "start": 460,
      "end": 487
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 489,
            "end": 492
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 496
          },
          "optional": false,
          "computed": false,
          "start": 489,
          "end": 496
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 501,
                        "end": 507
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 510,
                        "end": 516
                      }
                    ],
                    "start": 501,
                    "end": 516
                  },
                  "start": 499,
                  "end": 516
                },
                "start": 498,
                "end": 516
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 525,
                    "end": 531
                  },
                  "start": 523,
                  "end": 531
                },
                "start": 518,
                "end": 531
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 550,
                    "end": 555
                  },
                  "start": 543,
                  "end": 555
                }
              ],
              "start": 536,
              "end": 557
            },
            "id": null,
            "generator": false,
            "start": 497,
            "end": 557
          }
        ],
        "optional": false,
        "start": 489,
        "end": 558
      },
      "directive": null,
      "start": 489,
      "end": 558
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 635,
            "end": 638
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 639,
            "end": 645
          },
          "optional": false,
          "computed": false,
          "start": 635,
          "end": 645
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "acc",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 652,
                      "end": 657
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 658,
                          "end": 664
                        }
                      ],
                      "start": 657,
                      "end": 665
                    },
                    "start": 652,
                    "end": 665
                  },
                  "start": 650,
                  "end": 665
                },
                "start": 647,
                "end": 665
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 670,
                        "end": 676
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 679,
                        "end": 685
                      }
                    ],
                    "start": 670,
                    "end": 685
                  },
                  "start": 668,
                  "end": 685
                },
                "start": 667,
                "end": 685
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 694,
                    "end": 700
                  },
                  "start": 692,
                  "end": 700
                },
                "start": 687,
                "end": 700
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 719,
                    "end": 721
                  },
                  "start": 712,
                  "end": 721
                }
              ],
              "start": 705,
              "end": 723
            },
            "id": null,
            "generator": false,
            "start": 646,
            "end": 723
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 725,
            "end": 727
          }
        ],
        "optional": false,
        "start": 635,
        "end": 728
      },
      "directive": null,
      "start": 635,
      "end": 728
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 730,
            "end": 733
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 741
          },
          "optional": false,
          "computed": false,
          "start": 730,
          "end": 741
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 746,
                        "end": 752
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 755,
                        "end": 761
                      }
                    ],
                    "start": 746,
                    "end": 761
                  },
                  "start": 744,
                  "end": 761
                },
                "start": 743,
                "end": 761
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 770,
                    "end": 776
                  },
                  "start": 768,
                  "end": 776
                },
                "start": 763,
                "end": 776
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 795,
                    "end": 800
                  },
                  "start": 788,
                  "end": 800
                }
              ],
              "start": 781,
              "end": 802
            },
            "id": null,
            "generator": false,
            "start": 742,
            "end": 802
          }
        ],
        "optional": false,
        "start": 730,
        "end": 803
      },
      "directive": null,
      "start": 730,
      "end": 803
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 805,
            "end": 809
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 810,
            "end": 813
          },
          "optional": false,
          "computed": false,
          "start": 805,
          "end": 813
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 818,
                    "end": 824
                  },
                  "start": 816,
                  "end": 824
                },
                "start": 815,
                "end": 824
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 833,
                    "end": 839
                  },
                  "start": 831,
                  "end": 839
                },
                "start": 826,
                "end": 839
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 858,
                    "end": 863
                  },
                  "start": 851,
                  "end": 863
                }
              ],
              "start": 844,
              "end": 865
            },
            "id": null,
            "generator": false,
            "start": 814,
            "end": 865
          }
        ],
        "optional": false,
        "start": 805,
        "end": 866
      },
      "directive": null,
      "start": 805,
      "end": 866
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 868,
            "end": 872
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 873,
            "end": 879
          },
          "optional": false,
          "computed": false,
          "start": 868,
          "end": 879
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "acc",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 886,
                      "end": 892
                    },
                    "start": 886,
                    "end": 894
                  },
                  "start": 884,
                  "end": 894
                },
                "start": 881,
                "end": 894
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 899,
                    "end": 905
                  },
                  "start": 897,
                  "end": 905
                },
                "start": 896,
                "end": 905
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 914,
                    "end": 920
                  },
                  "start": 912,
                  "end": 920
                },
                "start": 907,
                "end": 920
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 940,
                        "end": 941
                      }
                    ],
                    "start": 939,
                    "end": 942
                  },
                  "start": 932,
                  "end": 942
                }
              ],
              "start": 925,
              "end": 944
            },
            "id": null,
            "generator": false,
            "start": 880,
            "end": 944
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 946,
            "end": 948
          }
        ],
        "optional": false,
        "start": 868,
        "end": 949
      },
      "directive": null,
      "start": 868,
      "end": 949
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 951,
            "end": 955
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 956,
            "end": 963
          },
          "optional": false,
          "computed": false,
          "start": 951,
          "end": 963
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 968,
                    "end": 974
                  },
                  "start": 966,
                  "end": 974
                },
                "start": 965,
                "end": 974
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 983,
                    "end": 989
                  },
                  "start": 981,
                  "end": 989
                },
                "start": 976,
                "end": 989
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1008,
                    "end": 1013
                  },
                  "start": 1001,
                  "end": 1013
                }
              ],
              "start": 994,
              "end": 1015
            },
            "id": null,
            "generator": false,
            "start": 964,
            "end": 1015
          }
        ],
        "optional": false,
        "start": 951,
        "end": 1016
      },
      "directive": null,
      "start": 951,
      "end": 1016
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1017,
            "end": 1021
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 1022,
            "end": 1025
          },
          "optional": false,
          "computed": false,
          "start": 1017,
          "end": 1025
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1031,
                    "end": 1037
                  },
                  "start": 1028,
                  "end": 1037
                },
                "start": 1027,
                "end": 1037
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1046,
                    "end": 1052
                  },
                  "start": 1044,
                  "end": 1052
                },
                "start": 1039,
                "end": 1052
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1071,
                    "end": 1076
                  },
                  "start": 1064,
                  "end": 1076
                }
              ],
              "start": 1057,
              "end": 1078
            },
            "id": null,
            "generator": false,
            "start": 1026,
            "end": 1078
          }
        ],
        "optional": false,
        "start": 1017,
        "end": 1079
      },
      "directive": null,
      "start": 1017,
      "end": 1079
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1081,
            "end": 1085
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 1086,
            "end": 1092
          },
          "optional": false,
          "computed": false,
          "start": 1081,
          "end": 1092
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "acc",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1099,
                      "end": 1105
                    },
                    "start": 1099,
                    "end": 1107
                  },
                  "start": 1097,
                  "end": 1107
                },
                "start": 1094,
                "end": 1107
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1112,
                    "end": 1118
                  },
                  "start": 1110,
                  "end": 1118
                },
                "start": 1109,
                "end": 1118
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1127,
                    "end": 1133
                  },
                  "start": 1125,
                  "end": 1133
                },
                "start": 1120,
                "end": 1133
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 1152,
                    "end": 1154
                  },
                  "start": 1145,
                  "end": 1154
                }
              ],
              "start": 1138,
              "end": 1156
            },
            "id": null,
            "generator": false,
            "start": 1093,
            "end": 1156
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1158,
            "end": 1160
          }
        ],
        "optional": false,
        "start": 1081,
        "end": 1161
      },
      "directive": null,
      "start": 1081,
      "end": 1161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1163,
            "end": 1167
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 1168,
            "end": 1175
          },
          "optional": false,
          "computed": false,
          "start": 1163,
          "end": 1175
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1180,
                    "end": 1186
                  },
                  "start": 1178,
                  "end": 1186
                },
                "start": 1177,
                "end": 1186
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1195,
                    "end": 1201
                  },
                  "start": 1193,
                  "end": 1201
                },
                "start": 1188,
                "end": 1201
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1220,
                    "end": 1225
                  },
                  "start": 1213,
                  "end": 1225
                }
              ],
              "start": 1206,
              "end": 1227
            },
            "id": null,
            "generator": false,
            "start": 1176,
            "end": 1227
          }
        ],
        "optional": false,
        "start": 1163,
        "end": 1228
      },
      "directive": null,
      "start": 1163,
      "end": 1228
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1306,
        "end": 1309
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
              "name": "doThing",
              "optional": false,
              "typeAnnotation": null,
              "start": 1316,
              "end": 1323
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1327,
                    "end": 1334
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSThisType",
                        "start": 1335,
                        "end": 1339
                      }
                    ],
                    "start": 1334,
                    "end": 1340
                  },
                  "start": 1327,
                  "end": 1340
                },
                "start": 1325,
                "end": 1340
              },
              "body": null,
              "expression": false,
              "start": 1323,
              "end": 1340
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1316,
            "end": 1340
          }
        ],
        "start": 1310,
        "end": 1342
      },
      "abstract": false,
      "declare": true,
      "start": 1292,
      "end": 1342
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1358,
        "end": 1361
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1370,
        "end": 1373
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1380,
              "end": 1383
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1385,
                "end": 1391
              },
              "start": 1383,
              "end": 1391
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
            "start": 1380,
            "end": 1392
          }
        ],
        "start": 1374,
        "end": 1394
      },
      "abstract": false,
      "declare": true,
      "start": 1344,
      "end": 1394
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 1409,
        "end": 1412
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1421,
        "end": 1424
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 1431,
              "end": 1434
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1436,
                "end": 1442
              },
              "start": 1434,
              "end": 1442
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
            "start": 1431,
            "end": 1443
          }
        ],
        "start": 1425,
        "end": 1445
      },
      "abstract": false,
      "declare": true,
      "start": 1395,
      "end": 1445
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
                      "start": 1462,
                      "end": 1465
                    },
                    "typeArguments": null,
                    "start": 1462,
                    "end": 1465
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1468,
                      "end": 1471
                    },
                    "typeArguments": null,
                    "start": 1468,
                    "end": 1471
                  }
                ],
                "start": 1462,
                "end": 1471
              },
              "start": 1460,
              "end": 1471
            },
            "start": 1459,
            "end": 1471
          },
          "init": null,
          "definite": false,
          "start": 1459,
          "end": 1471
        }
      ],
      "declare": true,
      "start": 1447,
      "end": 1472
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1517,
                "end": 1518
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "doThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1519,
                "end": 1526
              },
              "optional": false,
              "computed": false,
              "start": 1517,
              "end": 1526
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1517,
            "end": 1528
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 1529,
            "end": 1533
          },
          "optional": false,
          "computed": false,
          "start": 1517,
          "end": 1533
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
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
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1543,
                          "end": 1546
                        },
                        "typeArguments": null,
                        "start": 1543,
                        "end": 1546
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Baz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1549,
                          "end": 1552
                        },
                        "typeArguments": null,
                        "start": 1549,
                        "end": 1552
                      }
                    ],
                    "start": 1543,
                    "end": 1552
                  },
                  "start": 1541,
                  "end": 1552
                },
                "start": 1535,
                "end": 1552
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1557,
              "end": 1573
            },
            "id": null,
            "generator": false,
            "start": 1534,
            "end": 1573
          }
        ],
        "optional": false,
        "start": 1517,
        "end": 1574
      },
      "directive": null,
      "start": 1517,
      "end": 1575
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 1575
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 61,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 107,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 115,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 124,
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
    "value": "K",
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
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 140,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 163,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 187,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 195,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "tmp",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 216,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "tmp",
    "start": 234,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 238,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "String",
    "value": "'t'",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 254,
    "end": 258
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 264,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 275,
    "end": 279
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 357,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 363,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 368,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 379,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 432,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "arr1",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 460,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "arr2",
    "start": 466,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 473,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 489,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 493,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 501,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 510,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 518,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 525,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 543,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 550,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 635,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 639,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "acc",
    "start": 647,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 652,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 658,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 670,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 679,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 687,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 694,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 702,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 712,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 730,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 734,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 746,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 755,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 763,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 770,
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
    "value": "=>",
    "start": 778,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 781,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 788,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 795,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "arr1",
    "start": 805,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 810,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 818,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 826,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 833,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 841,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 851,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 858,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "arr1",
    "start": 868,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 873,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "acc",
    "start": 881,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 886,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 899,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 907,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "number",
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
    "value": "=>",
    "start": 922,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 932,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "arr1",
    "start": 951,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 956,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 968,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 976,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 983,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 991,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1001,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 1008,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "arr2",
    "start": 1017,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1022,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 1039,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1046,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1054,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1064,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 1071,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "arr2",
    "start": 1081,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 1086,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "acc",
    "start": 1094,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1099,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1112,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 1120,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1127,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1135,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1145,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "arr2",
    "start": 1163,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 1168,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1180,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 1188,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1195,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1203,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1213,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 1220,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1292,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1300,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1306,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "doThing",
    "start": 1316,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Promise",
    "start": 1327,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1335,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1344,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1352,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1358,
    "end": 1361
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1362,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1370,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1385,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1395,
    "end": 1402
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1403,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 1409,
    "end": 1412
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1413,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1421,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1431,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1436,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1447,
    "end": 1454
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1455,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1462,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 1468,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "doThing",
    "start": 1519,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1529,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1535,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1543,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 1549,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1554,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1574,
    "end": 1575
  }
]
```
