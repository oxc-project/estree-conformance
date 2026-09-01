__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 103
              },
              "typeArguments": null,
              "start": 83,
              "end": 103
            },
            "start": 81,
            "end": 103
          },
          "start": 77,
          "end": 103
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 108,
              "end": 114
            },
            "start": 106,
            "end": 114
          },
          "start": 105,
          "end": 114
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 117,
          "end": 123
        },
        "start": 115,
        "end": 123
      },
      "body": null,
      "expression": false,
      "start": 64,
      "end": 124
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 137
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 164
              },
              "typeArguments": null,
              "start": 144,
              "end": 164
            },
            "start": 142,
            "end": 164
          },
          "start": 138,
          "end": 164
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
              "start": 169,
              "end": 175
            },
            "start": 167,
            "end": 175
          },
          "start": 166,
          "end": 175
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 178,
          "end": 184
        },
        "start": 176,
        "end": 184
      },
      "body": null,
      "expression": false,
      "start": 125,
      "end": 185
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 198
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
              "start": 210,
              "end": 214
            },
            "start": 203,
            "end": 215
          }
        ],
        "start": 201,
        "end": 217
      },
      "expression": false,
      "start": 186,
      "end": 217
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
                "start": 226,
                "end": 232
              },
              "start": 224,
              "end": 232
            },
            "start": 223,
            "end": 232
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 238
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 239,
                  "end": 242
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 253,
                  "end": 255
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 252
                }
              ],
              "start": 239,
              "end": 255
            },
            "start": 235,
            "end": 255
          },
          "definite": false,
          "start": 223,
          "end": 255
        }
      ],
      "declare": false,
      "start": 219,
      "end": 256
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 293
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 294,
              "end": 297
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 301,
              "end": 303
            }
          ],
          "expressions": [
            {
              "type": "ObjectExpression",
              "properties": [],
              "start": 298,
              "end": 300
            }
          ],
          "start": 294,
          "end": 303
        },
        "start": 290,
        "end": 303
      },
      "directive": null,
      "start": 290,
      "end": 304
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 324,
        "end": 327
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 354
              },
              "typeArguments": null,
              "start": 334,
              "end": 354
            },
            "start": 332,
            "end": 354
          },
          "start": 328,
          "end": 354
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 359,
              "end": 365
            },
            "start": 357,
            "end": 365
          },
          "start": 356,
          "end": 365
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
              "start": 370,
              "end": 376
            },
            "start": 368,
            "end": 376
          },
          "start": 367,
          "end": 376
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 379,
          "end": 385
        },
        "start": 377,
        "end": 385
      },
      "body": null,
      "expression": false,
      "start": 315,
      "end": 386
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 399
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
              "start": 400,
              "end": 401
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 400,
            "end": 401
          }
        ],
        "start": 399,
        "end": 402
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 429
              },
              "typeArguments": null,
              "start": 409,
              "end": 429
            },
            "start": 407,
            "end": 429
          },
          "start": 403,
          "end": 429
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
              "start": 434,
              "end": 440
            },
            "start": 432,
            "end": 440
          },
          "start": 431,
          "end": 440
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
                "start": 445,
                "end": 446
              },
              "typeArguments": null,
              "start": 445,
              "end": 446
            },
            "start": 443,
            "end": 446
          },
          "start": 442,
          "end": 446
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
            "start": 449,
            "end": 450
          },
          "typeArguments": null,
          "start": 449,
          "end": 450
        },
        "start": 447,
        "end": 450
      },
      "body": null,
      "expression": false,
      "start": 387,
      "end": 451
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 464
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
              "start": 476,
              "end": 485
            },
            "start": 469,
            "end": 486
          }
        ],
        "start": 467,
        "end": 488
      },
      "expression": false,
      "start": 452,
      "end": 488
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
            "name": "d1",
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
                  "start": 498,
                  "end": 502
                },
                "typeArguments": null,
                "start": 498,
                "end": 502
              },
              "start": 496,
              "end": 502
            },
            "start": 494,
            "end": 502
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 508
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 509,
                  "end": 512
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 515,
                  "end": 518
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 529,
                  "end": 531
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 513,
                  "end": 514
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 519,
                  "end": 528
                }
              ],
              "start": 509,
              "end": 531
            },
            "start": 505,
            "end": 531
          },
          "definite": false,
          "start": 494,
          "end": 531
        }
      ],
      "declare": false,
      "start": 490,
      "end": 532
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 559,
            "end": 561
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 573
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 574,
                  "end": 577
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 580,
                  "end": 583
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 594,
                  "end": 596
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 578,
                  "end": 579
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 593
                }
              ],
              "start": 574,
              "end": 596
            },
            "start": 570,
            "end": 596
          },
          "definite": false,
          "start": 559,
          "end": 596
        }
      ],
      "declare": false,
      "start": 555,
      "end": 597
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 608
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 609,
            "end": 612
          },
          "optional": false,
          "computed": false,
          "start": 606,
          "end": 612
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 606,
        "end": 614
      },
      "directive": null,
      "start": 606,
      "end": 615
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null,
          "start": 625,
          "end": 627
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 625,
        "end": 629
      },
      "directive": null,
      "start": 625,
      "end": 630
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 744,
          "end": 747
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 748,
              "end": 751
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 754,
              "end": 757
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 761,
              "end": 763
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 752,
              "end": 753
            },
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 758,
              "end": 760
            }
          ],
          "start": 748,
          "end": 763
        },
        "start": 744,
        "end": 763
      },
      "directive": null,
      "start": 744,
      "end": 764
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 857,
          "end": 860
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 861,
              "end": 864
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 868,
              "end": 871
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 874,
              "end": 876
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 865,
              "end": 867
            },
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 872,
              "end": 873
            }
          ],
          "start": 861,
          "end": 876
        },
        "start": 857,
        "end": 876
      },
      "directive": null,
      "start": 857,
      "end": 877
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 936,
        "end": 939
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
              "start": 940,
              "end": 941
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 940,
            "end": 941
          }
        ],
        "start": 939,
        "end": 942
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 949,
                "end": 969
              },
              "typeArguments": null,
              "start": 949,
              "end": 969
            },
            "start": 947,
            "end": 969
          },
          "start": 943,
          "end": 969
        },
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
                "start": 974,
                "end": 975
              },
              "typeArguments": null,
              "start": 974,
              "end": 975
            },
            "start": 972,
            "end": 975
          },
          "start": 971,
          "end": 975
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 978,
          "end": 984
        },
        "start": 976,
        "end": 984
      },
      "body": null,
      "expression": false,
      "start": 927,
      "end": 985
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 995,
        "end": 998
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
              "start": 999,
              "end": 1000
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 999,
            "end": 1000
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1003
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1002,
            "end": 1003
          }
        ],
        "start": 998,
        "end": 1004
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1011,
                "end": 1031
              },
              "typeArguments": null,
              "start": 1011,
              "end": 1031
            },
            "start": 1009,
            "end": 1031
          },
          "start": 1005,
          "end": 1031
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1036,
              "end": 1042
            },
            "start": 1034,
            "end": 1042
          },
          "start": 1033,
          "end": 1042
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
                "start": 1047,
                "end": 1048
              },
              "typeArguments": null,
              "start": 1047,
              "end": 1048
            },
            "start": 1045,
            "end": 1048
          },
          "start": 1044,
          "end": 1048
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
                "start": 1053,
                "end": 1054
              },
              "typeArguments": null,
              "start": 1053,
              "end": 1054
            },
            "start": 1051,
            "end": 1054
          },
          "start": 1050,
          "end": 1054
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
            "start": 1057,
            "end": 1058
          },
          "typeArguments": null,
          "start": 1057,
          "end": 1058
        },
        "start": 1055,
        "end": 1058
      },
      "body": null,
      "expression": false,
      "start": 986,
      "end": 1059
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1069,
        "end": 1072
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
              "start": 1073,
              "end": 1074
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1073,
            "end": 1074
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1077
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1076,
            "end": 1077
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1079,
              "end": 1080
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1079,
            "end": 1080
          }
        ],
        "start": 1072,
        "end": 1081
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1088,
                "end": 1108
              },
              "typeArguments": null,
              "start": 1088,
              "end": 1108
            },
            "start": 1086,
            "end": 1108
          },
          "start": 1082,
          "end": 1108
        },
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
                "start": 1113,
                "end": 1114
              },
              "typeArguments": null,
              "start": 1113,
              "end": 1114
            },
            "start": 1111,
            "end": 1114
          },
          "start": 1110,
          "end": 1114
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
                "start": 1119,
                "end": 1120
              },
              "typeArguments": null,
              "start": 1119,
              "end": 1120
            },
            "start": 1117,
            "end": 1120
          },
          "start": 1116,
          "end": 1120
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
                "start": 1125,
                "end": 1126
              },
              "typeArguments": null,
              "start": 1125,
              "end": 1126
            },
            "start": 1123,
            "end": 1126
          },
          "start": 1122,
          "end": 1126
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1129,
          "end": 1135
        },
        "start": 1127,
        "end": 1135
      },
      "body": null,
      "expression": false,
      "start": 1060,
      "end": 1136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1146,
        "end": 1149
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
              "start": 1161,
              "end": 1165
            },
            "start": 1154,
            "end": 1166
          }
        ],
        "start": 1152,
        "end": 1168
      },
      "expression": false,
      "start": 1137,
      "end": 1168
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
            "start": 1174,
            "end": 1175
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1178,
              "end": 1181
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1182,
                  "end": 1185
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1188,
                  "end": 1190
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1186,
                  "end": 1187
                }
              ],
              "start": 1182,
              "end": 1190
            },
            "start": 1178,
            "end": 1190
          },
          "definite": false,
          "start": 1174,
          "end": 1190
        }
      ],
      "declare": false,
      "start": 1170,
      "end": 1191
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
            "start": 1196,
            "end": 1197
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1200,
              "end": 1203
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1204,
                  "end": 1207
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1210,
                  "end": 1213
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1216,
                  "end": 1219
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1223,
                  "end": 1225
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1207,
                  "end": 1209
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1214,
                  "end": 1215
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1220,
                  "end": 1222
                }
              ],
              "start": 1204,
              "end": 1225
            },
            "start": 1200,
            "end": 1225
          },
          "definite": false,
          "start": 1196,
          "end": 1225
        }
      ],
      "declare": false,
      "start": 1192,
      "end": 1226
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
            "start": 1231,
            "end": 1232
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1235,
              "end": 1238
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1239,
                  "end": 1242
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1245,
                  "end": 1248
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1251,
                  "end": 1254
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1257,
                  "end": 1259
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1243,
                  "end": 1244
                },
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1249,
                  "end": 1250
                },
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1255,
                  "end": 1256
                }
              ],
              "start": 1239,
              "end": 1259
            },
            "start": 1235,
            "end": 1259
          },
          "definite": false,
          "start": 1231,
          "end": 1259
        }
      ],
      "declare": false,
      "start": 1227,
      "end": 1260
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
                "start": 1268,
                "end": 1274
              },
              "start": 1266,
              "end": 1274
            },
            "start": 1265,
            "end": 1274
          },
          "init": null,
          "definite": false,
          "start": 1265,
          "end": 1274
        }
      ],
      "declare": false,
      "start": 1261,
      "end": 1275
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
            "start": 1390,
            "end": 1391
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1394,
              "end": 1397
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1398,
                  "end": 1401
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1404,
                  "end": 1406
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 1402,
                  "end": 1403
                }
              ],
              "start": 1398,
              "end": 1406
            },
            "start": 1394,
            "end": 1406
          },
          "definite": false,
          "start": 1390,
          "end": 1406
        }
      ],
      "declare": false,
      "start": 1386,
      "end": 1406
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
            "start": 1411,
            "end": 1412
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1415,
              "end": 1418
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1419,
                  "end": 1422
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1426,
                  "end": 1429
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1433,
                  "end": 1436
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1440,
                  "end": 1442
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1423,
                  "end": 1425
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1430,
                  "end": 1432
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1437,
                  "end": 1439
                }
              ],
              "start": 1419,
              "end": 1442
            },
            "start": 1415,
            "end": 1442
          },
          "definite": false,
          "start": 1411,
          "end": 1442
        }
      ],
      "declare": false,
      "start": 1407,
      "end": 1443
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
            "start": 1448,
            "end": 1449
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1452,
              "end": 1455
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1456,
                  "end": 1459
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1463,
                  "end": 1466
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1470,
                  "end": 1473
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1476,
                  "end": 1478
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1460,
                  "end": 1462
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1467,
                  "end": 1469
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1474,
                  "end": 1475
                }
              ],
              "start": 1456,
              "end": 1478
            },
            "start": 1452,
            "end": 1478
          },
          "definite": false,
          "start": 1448,
          "end": 1478
        }
      ],
      "declare": false,
      "start": 1444,
      "end": 1479
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1583,
          "end": 1586
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1587,
              "end": 1589
            }
          ],
          "expressions": [],
          "start": 1587,
          "end": 1589
        },
        "start": 1583,
        "end": 1589
      },
      "directive": null,
      "start": 1583,
      "end": 1590
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1648,
        "end": 1651
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
              "start": 1652,
              "end": 1653
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1662,
              "end": 1668
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1652,
            "end": 1668
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1670,
              "end": 1671
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1680,
              "end": 1686
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1670,
            "end": 1686
          }
        ],
        "start": 1651,
        "end": 1687
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1694,
                "end": 1714
              },
              "typeArguments": null,
              "start": 1694,
              "end": 1714
            },
            "start": 1692,
            "end": 1714
          },
          "start": 1688,
          "end": 1714
        },
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
                "start": 1719,
                "end": 1720
              },
              "typeArguments": null,
              "start": 1719,
              "end": 1720
            },
            "start": 1717,
            "end": 1720
          },
          "start": 1716,
          "end": 1720
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
                "start": 1725,
                "end": 1726
              },
              "typeArguments": null,
              "start": 1725,
              "end": 1726
            },
            "start": 1723,
            "end": 1726
          },
          "start": 1722,
          "end": 1726
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1639,
      "end": 1728
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1738,
        "end": 1741
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
              "start": 1742,
              "end": 1743
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1752,
              "end": 1758
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1742,
            "end": 1758
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1760,
              "end": 1761
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1770,
              "end": 1776
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1760,
            "end": 1776
          }
        ],
        "start": 1741,
        "end": 1777
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1784,
                "end": 1804
              },
              "typeArguments": null,
              "start": 1784,
              "end": 1804
            },
            "start": 1782,
            "end": 1804
          },
          "start": 1778,
          "end": 1804
        },
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
                "start": 1809,
                "end": 1810
              },
              "typeArguments": null,
              "start": 1809,
              "end": 1810
            },
            "start": 1807,
            "end": 1810
          },
          "start": 1806,
          "end": 1810
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
                "start": 1815,
                "end": 1816
              },
              "typeArguments": null,
              "start": 1815,
              "end": 1816
            },
            "start": 1813,
            "end": 1816
          },
          "start": 1812,
          "end": 1816
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1729,
      "end": 1818
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1828,
        "end": 1831
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1838,
                "end": 1858
              },
              "typeArguments": null,
              "start": 1838,
              "end": 1858
            },
            "start": 1836,
            "end": 1858
          },
          "start": 1832,
          "end": 1858
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1819,
      "end": 1859
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1869,
        "end": 1872
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
        "start": 1875,
        "end": 1878
      },
      "expression": false,
      "start": 1860,
      "end": 1878
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1965,
          "end": 1968
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1969,
              "end": 1972
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1976,
              "end": 1979
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1983,
              "end": 1985
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 1973,
              "end": 1975
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1980,
              "end": 1981
            }
          ],
          "start": 1969,
          "end": 1985
        },
        "start": 1965,
        "end": 1985
      },
      "directive": null,
      "start": 1965,
      "end": 1986
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1987,
          "end": 1990
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1991,
              "end": 1994
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1998,
              "end": 2001
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2005,
              "end": 2007
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1995,
              "end": 1996
            },
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2002,
              "end": 2004
            }
          ],
          "start": 1991,
          "end": 2007
        },
        "start": 1987,
        "end": 2007
      },
      "directive": null,
      "start": 1987,
      "end": 2008
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2009,
          "end": 2012
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2013,
              "end": 2016
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2020,
              "end": 2023
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2034,
              "end": 2036
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 2017,
              "end": 2018
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2024,
              "end": 2033
            }
          ],
          "start": 2013,
          "end": 2036
        },
        "start": 2009,
        "end": 2036
      },
      "directive": null,
      "start": 2009,
      "end": 2037
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2038,
          "end": 2041
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2042,
              "end": 2045
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2049,
              "end": 2052
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2058,
              "end": 2060
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2046,
              "end": 2048
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2053,
              "end": 2057
            }
          ],
          "start": 2042,
          "end": 2060
        },
        "start": 2038,
        "end": 2060
      },
      "directive": null,
      "start": 2038,
      "end": 2061
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2164,
          "end": 2167
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2168,
              "end": 2171
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2177,
              "end": 2180
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2186,
              "end": 2188
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2172,
              "end": 2176
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2181,
              "end": 2185
            }
          ],
          "start": 2168,
          "end": 2188
        },
        "start": 2164,
        "end": 2188
      },
      "directive": null,
      "start": 2164,
      "end": 2189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2319,
          "end": 2322
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2323,
              "end": 2326
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2332,
              "end": 2335
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2341,
              "end": 2343
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2327,
              "end": 2331
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2336,
              "end": 2340
            }
          ],
          "start": 2323,
          "end": 2343
        },
        "start": 2319,
        "end": 2343
      },
      "directive": null,
      "start": 2319,
      "end": 2344
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2345,
          "end": 2348
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2349,
              "end": 2352
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2358,
              "end": 2361
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2367,
              "end": 2369
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2353,
              "end": 2357
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2362,
              "end": 2366
            }
          ],
          "start": 2349,
          "end": 2369
        },
        "start": 2345,
        "end": 2369
      },
      "directive": null,
      "start": 2345,
      "end": 2370
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2465,
        "end": 2468
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 2475,
                "end": 2495
              },
              "typeArguments": null,
              "start": 2475,
              "end": 2495
            },
            "start": 2473,
            "end": 2495
          },
          "start": 2469,
          "end": 2495
        },
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
                      "start": 2504,
                      "end": 2510
                    },
                    "start": 2502,
                    "end": 2510
                  },
                  "start": 2501,
                  "end": 2510
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2515,
                  "end": 2519
                },
                "start": 2512,
                "end": 2519
              },
              "start": 2500,
              "end": 2519
            },
            "start": 2498,
            "end": 2519
          },
          "start": 2497,
          "end": 2519
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2522,
          "end": 2528
        },
        "start": 2520,
        "end": 2528
      },
      "body": null,
      "expression": false,
      "start": 2456,
      "end": 2529
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2539,
        "end": 2542
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 2549,
                "end": 2569
              },
              "typeArguments": null,
              "start": 2549,
              "end": 2569
            },
            "start": 2547,
            "end": 2569
          },
          "start": 2543,
          "end": 2569
        },
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
                      "start": 2578,
                      "end": 2584
                    },
                    "start": 2576,
                    "end": 2584
                  },
                  "start": 2575,
                  "end": 2584
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2589,
                  "end": 2593
                },
                "start": 2586,
                "end": 2593
              },
              "start": 2574,
              "end": 2593
            },
            "start": 2572,
            "end": 2593
          },
          "start": 2571,
          "end": 2593
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2596,
          "end": 2602
        },
        "start": 2594,
        "end": 2602
      },
      "body": null,
      "expression": false,
      "start": 2530,
      "end": 2603
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2613,
        "end": 2616
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
              "start": 2628,
              "end": 2637
            },
            "start": 2621,
            "end": 2638
          }
        ],
        "start": 2619,
        "end": 2640
      },
      "expression": false,
      "start": 2604,
      "end": 2640
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2641,
          "end": 2644
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2645,
              "end": 2648
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2668,
              "end": 2670
            }
          ],
          "expressions": [
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
                  "start": 2650,
                  "end": 2651
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
                    "start": 2656,
                    "end": 2657
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toFixed",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2658,
                    "end": 2665
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2656,
                  "end": 2665
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2656,
                "end": 2667
              },
              "id": null,
              "generator": false,
              "start": 2649,
              "end": 2667
            }
          ],
          "start": 2645,
          "end": 2670
        },
        "start": 2641,
        "end": 2670
      },
      "directive": null,
      "start": 2641,
      "end": 2671
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2718,
          "end": 2721
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2722,
              "end": 2725
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2745,
              "end": 2747
            }
          ],
          "expressions": [
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
                  "start": 2727,
                  "end": 2728
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
                    "start": 2733,
                    "end": 2734
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "substr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2735,
                    "end": 2741
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2733,
                  "end": 2741
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2742,
                    "end": 2743
                  }
                ],
                "optional": false,
                "start": 2733,
                "end": 2744
              },
              "id": null,
              "generator": false,
              "start": 2726,
              "end": 2744
            }
          ],
          "start": 2722,
          "end": 2747
        },
        "start": 2718,
        "end": 2747
      },
      "directive": null,
      "start": 2718,
      "end": 2748
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 2749
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 64,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 83,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 125,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 144,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 186,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 203,
    "end": 209
  },
  {
    "type": "Null",
    "value": "null",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 219,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 235,
    "end": 238
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 239,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 243,
    "end": 252
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 290,
    "end": 293
  },
  {
    "type": "Template",
    "value": "`${",
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
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 315,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 328,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 334,
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
    "value": "s",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 359,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 370,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 379,
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
    "value": "function",
    "start": 387,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 403,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 409,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 452,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 469,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 476,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 498,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 505,
    "end": 508
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 509,
    "end": 512
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 513,
    "end": 514
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 515,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 519,
    "end": 528
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 555,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 559,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 570,
    "end": 573
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 574,
    "end": 577
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 578,
    "end": 579
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 580,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 584,
    "end": 593
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 606,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 609,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 625,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 744,
    "end": 747
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 748,
    "end": 751
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 752,
    "end": 753
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 754,
    "end": 757
  },
  {
    "type": "String",
    "value": "''",
    "start": 758,
    "end": 760
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 761,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 857,
    "end": 860
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 861,
    "end": 864
  },
  {
    "type": "String",
    "value": "''",
    "start": 865,
    "end": 867
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 868,
    "end": 871
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 872,
    "end": 873
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 874,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 927,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 936,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 943,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 949,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 978,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 986,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 995,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ">",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1005,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1011,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1053,
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
    "value": ":",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1060,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1069,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1082,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1088,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1129,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1137,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1146,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1154,
    "end": 1160
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1161,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1170,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1178,
    "end": 1181
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1182,
    "end": 1185
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1188,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1192,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1200,
    "end": 1203
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1204,
    "end": 1207
  },
  {
    "type": "String",
    "value": "''",
    "start": 1207,
    "end": 1209
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1210,
    "end": 1213
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1216,
    "end": 1219
  },
  {
    "type": "String",
    "value": "''",
    "start": 1220,
    "end": 1222
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1223,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1227,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1235,
    "end": 1238
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1239,
    "end": 1242
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1245,
    "end": 1248
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1251,
    "end": 1254
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1257,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1261,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1268,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1394,
    "end": 1397
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1398,
    "end": 1401
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1404,
    "end": 1406
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1407,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1415,
    "end": 1418
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1419,
    "end": 1422
  },
  {
    "type": "String",
    "value": "''",
    "start": 1423,
    "end": 1425
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1426,
    "end": 1429
  },
  {
    "type": "String",
    "value": "''",
    "start": 1430,
    "end": 1432
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1433,
    "end": 1436
  },
  {
    "type": "String",
    "value": "''",
    "start": 1437,
    "end": 1439
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1440,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1444,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1452,
    "end": 1455
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1456,
    "end": 1459
  },
  {
    "type": "String",
    "value": "''",
    "start": 1460,
    "end": 1462
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1463,
    "end": 1466
  },
  {
    "type": "String",
    "value": "''",
    "start": 1467,
    "end": 1469
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1470,
    "end": 1473
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1476,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1583,
    "end": 1586
  },
  {
    "type": "Template",
    "value": "``",
    "start": 1587,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1639,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1648,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1654,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1662,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1672,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1680,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1688,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1694,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1729,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1738,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1744,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1752,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1762,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1770,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1778,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1784,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1819,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1828,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1832,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1838,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1860,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1869,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1965,
    "end": 1968
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1969,
    "end": 1972
  },
  {
    "type": "String",
    "value": "''",
    "start": 1973,
    "end": 1975
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1976,
    "end": 1979
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1983,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1987,
    "end": 1990
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1991,
    "end": 1994
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1998,
    "end": 2001
  },
  {
    "type": "String",
    "value": "''",
    "start": 2002,
    "end": 2004
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2005,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2009,
    "end": 2012
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2013,
    "end": 2016
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2020,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2024,
    "end": 2033
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2034,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2038,
    "end": 2041
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2042,
    "end": 2045
  },
  {
    "type": "String",
    "value": "''",
    "start": 2046,
    "end": 2048
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2049,
    "end": 2052
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2053,
    "end": 2057
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2058,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2164,
    "end": 2167
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2168,
    "end": 2171
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2172,
    "end": 2176
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2177,
    "end": 2180
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2181,
    "end": 2185
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2186,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2319,
    "end": 2322
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2323,
    "end": 2326
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2327,
    "end": 2331
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2332,
    "end": 2335
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2336,
    "end": 2340
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2341,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2345,
    "end": 2348
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2349,
    "end": 2352
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2353,
    "end": 2357
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2358,
    "end": 2361
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2362,
    "end": 2366
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2367,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2456,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2465,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 2469,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 2475,
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
    "value": "f",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2504,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2512,
    "end": 2514
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2515,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2522,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2530,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2539,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 2543,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 2549,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2578,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2586,
    "end": 2588
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2589,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2596,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2604,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2613,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2621,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2628,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2641,
    "end": 2644
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2645,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2653,
    "end": 2655
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 2658,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2668,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2718,
    "end": 2721
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2722,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2730,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 2735,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2745,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2747,
    "end": 2748
  }
]
```
