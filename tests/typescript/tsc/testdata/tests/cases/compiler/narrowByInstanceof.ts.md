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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "start": 14,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 23
          }
        ],
        "start": 12,
        "end": 25
      },
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
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
              "start": 40,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 49
          }
        ],
        "start": 38,
        "end": 51
      },
      "declare": false,
      "start": 26,
      "end": 51
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
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
              "start": 66,
              "end": 67
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
              },
              "start": 67,
              "end": 75
            },
            "accessibility": null,
            "static": false,
            "start": 66,
            "end": 75
          }
        ],
        "start": 64,
        "end": 77
      },
      "declare": false,
      "start": 52,
      "end": 77
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 86
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 99,
                "end": 103
              },
              "start": 97,
              "end": 103
            },
            "start": 95,
            "end": 104
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 118
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
                  "start": 120,
                  "end": 121
                },
                "typeArguments": null,
                "start": 120,
                "end": 121
              },
              "start": 118,
              "end": 121
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 122
          }
        ],
        "start": 89,
        "end": 124
      },
      "declare": false,
      "start": 79,
      "end": 124
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 133
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 150
                },
                "typeArguments": null,
                "start": 149,
                "end": 150
              },
              "start": 147,
              "end": 150
            },
            "start": 142,
            "end": 151
          }
        ],
        "start": 136,
        "end": 153
      },
      "declare": false,
      "start": 126,
      "end": 153
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 167
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 172
                  },
                  "typeArguments": null,
                  "start": 171,
                  "end": 172
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 176
                  },
                  "typeArguments": null,
                  "start": 175,
                  "end": 176
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 180
                  },
                  "typeArguments": null,
                  "start": 179,
                  "end": 180
                }
              ],
              "start": 171,
              "end": 180
            },
            "start": 169,
            "end": 180
          },
          "start": 168,
          "end": 180
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AA",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 187
              },
              "typeArguments": null,
              "start": 185,
              "end": 187
            },
            "start": 183,
            "end": 187
          },
          "start": 182,
          "end": 187
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BB",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 194
              },
              "typeArguments": null,
              "start": 192,
              "end": 194
            },
            "start": 190,
            "end": 194
          },
          "start": 189,
          "end": 194
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "AB",
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
                    "name": "AA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 202
                  },
                  "typeArguments": null,
                  "start": 200,
                  "end": 202
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 207
                  },
                  "typeArguments": null,
                  "start": 205,
                  "end": 207
                }
              ],
              "start": 200,
              "end": 207
            },
            "start": 198,
            "end": 207
          },
          "start": 196,
          "end": 207
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
                "start": 219,
                "end": 220
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 233
              },
              "start": 219,
              "end": 233
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 246
                  },
                  "directive": null,
                  "start": 245,
                  "end": 247
                }
              ],
              "start": 235,
              "end": 259
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 279,
                    "end": 280
                  },
                  "directive": null,
                  "start": 279,
                  "end": 281
                }
              ],
              "start": 269,
              "end": 297
            },
            "start": 215,
            "end": 297
          },
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
                "start": 306,
                "end": 307
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 320
              },
              "start": 306,
              "end": 320
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 333
                  },
                  "directive": null,
                  "start": 332,
                  "end": 334
                }
              ],
              "start": 322,
              "end": 346
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 367
                  },
                  "directive": null,
                  "start": 366,
                  "end": 368
                }
              ],
              "start": 356,
              "end": 384
            },
            "start": 302,
            "end": 384
          },
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
                "start": 393,
                "end": 394
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null,
                "start": 406,
                "end": 408
              },
              "start": 393,
              "end": 408
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 421
                  },
                  "directive": null,
                  "start": 420,
                  "end": 422
                }
              ],
              "start": 410,
              "end": 438
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 459
                  },
                  "directive": null,
                  "start": 458,
                  "end": 460
                }
              ],
              "start": 448,
              "end": 480
            },
            "start": 389,
            "end": 480
          }
        ],
        "start": 209,
        "end": 482
      },
      "expression": false,
      "start": 155,
      "end": 482
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 496
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 505,
              "end": 508
            },
            "start": 503,
            "end": 508
          },
          "start": 497,
          "end": 508
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 519,
              "end": 522
            },
            "start": 517,
            "end": 522
          },
          "start": 510,
          "end": 522
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
                "name": "target",
                "optional": false,
                "typeAnnotation": null,
                "start": 534,
                "end": 540
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 559
              },
              "start": 534,
              "end": 559
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 571,
                        "end": 577
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "__then",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 578,
                        "end": 584
                      },
                      "optional": false,
                      "computed": false,
                      "start": 571,
                      "end": 584
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 571,
                    "end": 586
                  },
                  "directive": null,
                  "start": 571,
                  "end": 587
                }
              ],
              "start": 561,
              "end": 593
            },
            "alternate": null,
            "start": 530,
            "end": 593
          }
        ],
        "start": 524,
        "end": 595
      },
      "expression": false,
      "start": 484,
      "end": 595
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PersonMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 625,
        "end": 636
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Function",
        "optional": false,
        "typeAnnotation": null,
        "start": 645,
        "end": 653
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
              "name": "check",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 672
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 676,
                      "end": 679
                    },
                    "start": 674,
                    "end": 679
                  },
                  "start": 673,
                  "end": 679
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 705,
                              "end": 706
                            },
                            "prefix": true,
                            "start": 698,
                            "end": 706
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "object",
                            "raw": "\"object\"",
                            "start": 711,
                            "end": 719
                          },
                          "start": 698,
                          "end": 719
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 723,
                            "end": 724
                          },
                          "operator": "!==",
                          "right": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 729,
                            "end": 733
                          },
                          "start": 723,
                          "end": 733
                        },
                        "start": 698,
                        "end": 733
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 737,
                          "end": 738
                        },
                        "operator": "instanceof",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Person",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 750,
                          "end": 756
                        },
                        "start": 737,
                        "end": 756
                      },
                      "start": 698,
                      "end": 756
                    },
                    "start": 691,
                    "end": 757
                  }
                ],
                "start": 681,
                "end": 763
              },
              "expression": false,
              "start": 672,
              "end": 763
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 660,
            "end": 763
          }
        ],
        "start": 654,
        "end": 769
      },
      "abstract": false,
      "declare": false,
      "start": 619,
      "end": 769
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
            "name": "cls",
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 780
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "PersonMixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 787,
              "end": 798
            },
            "typeArguments": null,
            "arguments": [],
            "start": 783,
            "end": 800
          },
          "definite": false,
          "start": 777,
          "end": 800
        }
      ],
      "declare": false,
      "start": 771,
      "end": 801
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 809,
        "end": 815
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
              "name": "work",
              "optional": false,
              "typeAnnotation": null,
              "start": 822,
              "end": 826
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
                  "type": "TSVoidKeyword",
                  "start": 830,
                  "end": 834
                },
                "start": 828,
                "end": 834
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 837,
                          "end": 844
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 845,
                          "end": 848
                        },
                        "optional": false,
                        "computed": false,
                        "start": 837,
                        "end": 848
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "work",
                          "raw": "\"work\"",
                          "start": 849,
                          "end": 855
                        }
                      ],
                      "optional": false,
                      "start": 837,
                      "end": 856
                    },
                    "directive": null,
                    "start": 837,
                    "end": 856
                  }
                ],
                "start": 835,
                "end": 858
              },
              "expression": false,
              "start": 826,
              "end": 858
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 822,
            "end": 858
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sayHi",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 868
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
                  "type": "TSVoidKeyword",
                  "start": 872,
                  "end": 876
                },
                "start": 870,
                "end": 876
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 879,
                          "end": 886
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 887,
                          "end": 890
                        },
                        "optional": false,
                        "computed": false,
                        "start": 879,
                        "end": 890
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Hi",
                          "raw": "\"Hi\"",
                          "start": 891,
                          "end": 895
                        }
                      ],
                      "optional": false,
                      "start": 879,
                      "end": 896
                    },
                    "directive": null,
                    "start": 879,
                    "end": 896
                  }
                ],
                "start": 877,
                "end": 898
              },
              "expression": false,
              "start": 868,
              "end": 898
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 863,
            "end": 898
          }
        ],
        "start": 816,
        "end": 900
      },
      "abstract": false,
      "declare": false,
      "start": 803,
      "end": 900
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Car",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 911
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
              "name": "sayHi",
              "optional": false,
              "typeAnnotation": null,
              "start": 918,
              "end": 923
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
                  "type": "TSVoidKeyword",
                  "start": 927,
                  "end": 931
                },
                "start": 925,
                "end": 931
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 934,
                          "end": 941
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 942,
                          "end": 945
                        },
                        "optional": false,
                        "computed": false,
                        "start": 934,
                        "end": 945
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Wof Wof",
                          "raw": "\"Wof Wof\"",
                          "start": 946,
                          "end": 955
                        }
                      ],
                      "optional": false,
                      "start": 934,
                      "end": 956
                    },
                    "directive": null,
                    "start": 934,
                    "end": 956
                  }
                ],
                "start": 932,
                "end": 958
              },
              "expression": false,
              "start": 923,
              "end": 958
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 918,
            "end": 958
          }
        ],
        "start": 912,
        "end": 960
      },
      "abstract": false,
      "declare": false,
      "start": 902,
      "end": 960
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 971,
        "end": 975
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Person",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 979,
                    "end": 985
                  },
                  "typeArguments": null,
                  "start": 979,
                  "end": 985
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Car",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 988,
                    "end": 991
                  },
                  "typeArguments": null,
                  "start": 988,
                  "end": 991
                }
              ],
              "start": 979,
              "end": 991
            },
            "start": 977,
            "end": 991
          },
          "start": 976,
          "end": 991
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
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1003,
                "end": 1004
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 1016,
                "end": 1019
              },
              "start": 1003,
              "end": 1019
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1038
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1039,
                        "end": 1042
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1031,
                      "end": 1042
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Is Person",
                        "raw": "\"Is Person\"",
                        "start": 1043,
                        "end": 1054
                      }
                    ],
                    "optional": false,
                    "start": 1031,
                    "end": 1055
                  },
                  "directive": null,
                  "start": 1031,
                  "end": 1056
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1066,
                          "end": 1067
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Person",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1071,
                            "end": 1077
                          },
                          "typeArguments": null,
                          "start": 1071,
                          "end": 1077
                        },
                        "start": 1066,
                        "end": 1077
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "work",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1079,
                        "end": 1083
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1065,
                      "end": 1083
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1065,
                    "end": 1085
                  },
                  "directive": null,
                  "start": 1065,
                  "end": 1085
                }
              ],
              "start": 1021,
              "end": 1091
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1111,
                        "end": 1118
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1119,
                        "end": 1122
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1111,
                      "end": 1122
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Is Car",
                        "raw": "\"Is Car\"",
                        "start": 1123,
                        "end": 1131
                      }
                    ],
                    "optional": false,
                    "start": 1111,
                    "end": 1132
                  },
                  "directive": null,
                  "start": 1111,
                  "end": 1132
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
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1141,
                        "end": 1142
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sayHi",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1143,
                        "end": 1148
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1141,
                      "end": 1148
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1141,
                    "end": 1150
                  },
                  "directive": null,
                  "start": 1141,
                  "end": 1151
                }
              ],
              "start": 1101,
              "end": 1157
            },
            "start": 999,
            "end": 1157
          }
        ],
        "start": 993,
        "end": 1159
      },
      "expression": false,
      "start": 962,
      "end": 1159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1159
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
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 26,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 52,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 79,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 109,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 126,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 155,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 205,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 221,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 264,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 308,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 351,
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
    "value": "x",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 389,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 395,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 406,
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
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 443,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 484,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "bar",
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
    "type": "Identifier",
    "value": "target",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 505,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 510,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 519,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 530,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 534,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 541,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 552,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 571,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "__then",
    "start": 578,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 619,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "PersonMixin",
    "start": 625,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 637,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 645,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 660,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "check",
    "start": 667,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 691,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 698,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 707,
    "end": 710
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 711,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 720,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 725,
    "end": 728
  },
  {
    "type": "Null",
    "value": "null",
    "start": 729,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 734,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 739,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 750,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 771,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 777,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 781,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 783,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "PersonMixin",
    "start": 787,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 803,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 809,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "work",
    "start": 822,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 828,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 830,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 837,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 848,
    "end": 849
  },
  {
    "type": "String",
    "value": "\"work\"",
    "start": 849,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "sayHi",
    "start": 863,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 872,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 879,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 887,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 890,
    "end": 891
  },
  {
    "type": "String",
    "value": "\"Hi\"",
    "start": 891,
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
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 902,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "Car",
    "start": 908,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "sayHi",
    "start": 918,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 927,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 934,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 942,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 945,
    "end": 946
  },
  {
    "type": "String",
    "value": "\"Wof Wof\"",
    "start": 946,
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
    "value": "}",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 959,
    "end": 960
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 962,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 971,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 979,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "Car",
    "start": 988,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1005,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1031,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1039,
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
    "value": "\"Is Person\"",
    "start": 1043,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1068,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 1071,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "work",
    "start": 1079,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
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
    "value": "}",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1096,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1111,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1119,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "String",
    "value": "\"Is Car\"",
    "start": 1123,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "sayHi",
    "start": 1143,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1158,
    "end": 1159
  }
]
```
