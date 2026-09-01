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
              "start": 564,
              "end": 567
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
                  "start": 568,
                  "end": 571
                },
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
                  "tail": true,
                  "start": 588,
                  "end": 590
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 572,
                  "end": 573
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 587
                }
              ],
              "start": 568,
              "end": 590
            },
            "start": 564,
            "end": 590
          },
          "definite": false,
          "start": 559,
          "end": 590
        }
      ],
      "declare": false,
      "start": 555,
      "end": 591
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
            "start": 600,
            "end": 602
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 603,
            "end": 606
          },
          "optional": false,
          "computed": false,
          "start": 600,
          "end": 606
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 600,
        "end": 608
      },
      "directive": null,
      "start": 600,
      "end": 609
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
          "start": 619,
          "end": 621
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 619,
        "end": 623
      },
      "directive": null,
      "start": 619,
      "end": 624
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
          "start": 738,
          "end": 741
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
              "start": 742,
              "end": 745
            },
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
              "tail": true,
              "start": 755,
              "end": 757
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 746,
              "end": 747
            },
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 752,
              "end": 754
            }
          ],
          "start": 742,
          "end": 757
        },
        "start": 738,
        "end": 757
      },
      "directive": null,
      "start": 738,
      "end": 758
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
          "start": 851,
          "end": 854
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
              "start": 855,
              "end": 858
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 862,
              "end": 865
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 868,
              "end": 870
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 859,
              "end": 861
            },
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 866,
              "end": 867
            }
          ],
          "start": 855,
          "end": 870
        },
        "start": 851,
        "end": 870
      },
      "directive": null,
      "start": 851,
      "end": 871
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 930,
        "end": 933
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
              "start": 934,
              "end": 935
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 934,
            "end": 935
          }
        ],
        "start": 933,
        "end": 936
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
                "start": 943,
                "end": 963
              },
              "typeArguments": null,
              "start": 943,
              "end": 963
            },
            "start": 941,
            "end": 963
          },
          "start": 937,
          "end": 963
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
                "start": 968,
                "end": 969
              },
              "typeArguments": null,
              "start": 968,
              "end": 969
            },
            "start": 966,
            "end": 969
          },
          "start": 965,
          "end": 969
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 972,
          "end": 978
        },
        "start": 970,
        "end": 978
      },
      "body": null,
      "expression": false,
      "start": 921,
      "end": 979
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 989,
        "end": 992
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
              "start": 993,
              "end": 994
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 993,
            "end": 994
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 996,
              "end": 997
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 996,
            "end": 997
          }
        ],
        "start": 992,
        "end": 998
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
                "start": 1005,
                "end": 1025
              },
              "typeArguments": null,
              "start": 1005,
              "end": 1025
            },
            "start": 1003,
            "end": 1025
          },
          "start": 999,
          "end": 1025
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
              "start": 1030,
              "end": 1036
            },
            "start": 1028,
            "end": 1036
          },
          "start": 1027,
          "end": 1036
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
                "start": 1041,
                "end": 1042
              },
              "typeArguments": null,
              "start": 1041,
              "end": 1042
            },
            "start": 1039,
            "end": 1042
          },
          "start": 1038,
          "end": 1042
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
            "start": 1051,
            "end": 1052
          },
          "typeArguments": null,
          "start": 1051,
          "end": 1052
        },
        "start": 1049,
        "end": 1052
      },
      "body": null,
      "expression": false,
      "start": 980,
      "end": 1053
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1063,
        "end": 1066
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
              "start": 1067,
              "end": 1068
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1067,
            "end": 1068
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1070,
              "end": 1071
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1070,
            "end": 1071
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
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
          }
        ],
        "start": 1066,
        "end": 1075
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
                "start": 1082,
                "end": 1102
              },
              "typeArguments": null,
              "start": 1082,
              "end": 1102
            },
            "start": 1080,
            "end": 1102
          },
          "start": 1076,
          "end": 1102
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
                "start": 1107,
                "end": 1108
              },
              "typeArguments": null,
              "start": 1107,
              "end": 1108
            },
            "start": 1105,
            "end": 1108
          },
          "start": 1104,
          "end": 1108
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
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1123,
          "end": 1129
        },
        "start": 1121,
        "end": 1129
      },
      "body": null,
      "expression": false,
      "start": 1054,
      "end": 1130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1140,
        "end": 1143
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
              "start": 1155,
              "end": 1159
            },
            "start": 1148,
            "end": 1160
          }
        ],
        "start": 1146,
        "end": 1162
      },
      "expression": false,
      "start": 1131,
      "end": 1162
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
            "start": 1168,
            "end": 1169
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1175
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
                  "start": 1176,
                  "end": 1179
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1182,
                  "end": 1184
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1180,
                  "end": 1181
                }
              ],
              "start": 1176,
              "end": 1184
            },
            "start": 1172,
            "end": 1184
          },
          "definite": false,
          "start": 1168,
          "end": 1184
        }
      ],
      "declare": false,
      "start": 1164,
      "end": 1185
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
            "start": 1190,
            "end": 1191
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1194,
              "end": 1197
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
                  "start": 1198,
                  "end": 1201
                },
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
                  "tail": true,
                  "start": 1217,
                  "end": 1219
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1201,
                  "end": 1203
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1208,
                  "end": 1209
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1214,
                  "end": 1216
                }
              ],
              "start": 1198,
              "end": 1219
            },
            "start": 1194,
            "end": 1219
          },
          "definite": false,
          "start": 1190,
          "end": 1219
        }
      ],
      "declare": false,
      "start": 1186,
      "end": 1220
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
            "start": 1225,
            "end": 1226
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1229,
              "end": 1232
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
                  "start": 1233,
                  "end": 1236
                },
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
                  "tail": true,
                  "start": 1251,
                  "end": 1253
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1237,
                  "end": 1238
                },
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
                }
              ],
              "start": 1233,
              "end": 1253
            },
            "start": 1229,
            "end": 1253
          },
          "definite": false,
          "start": 1225,
          "end": 1253
        }
      ],
      "declare": false,
      "start": 1221,
      "end": 1254
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
                "start": 1262,
                "end": 1268
              },
              "start": 1260,
              "end": 1268
            },
            "start": 1259,
            "end": 1268
          },
          "init": null,
          "definite": false,
          "start": 1259,
          "end": 1268
        }
      ],
      "declare": false,
      "start": 1255,
      "end": 1269
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
            "start": 1384,
            "end": 1385
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1388,
              "end": 1391
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
                  "start": 1392,
                  "end": 1395
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1398,
                  "end": 1400
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 1396,
                  "end": 1397
                }
              ],
              "start": 1392,
              "end": 1400
            },
            "start": 1388,
            "end": 1400
          },
          "definite": false,
          "start": 1384,
          "end": 1400
        }
      ],
      "declare": false,
      "start": 1380,
      "end": 1400
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
            "start": 1405,
            "end": 1406
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1409,
              "end": 1412
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
                  "start": 1413,
                  "end": 1416
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1420,
                  "end": 1423
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1427,
                  "end": 1430
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1434,
                  "end": 1436
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1417,
                  "end": 1419
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1424,
                  "end": 1426
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1431,
                  "end": 1433
                }
              ],
              "start": 1413,
              "end": 1436
            },
            "start": 1409,
            "end": 1436
          },
          "definite": false,
          "start": 1405,
          "end": 1436
        }
      ],
      "declare": false,
      "start": 1401,
      "end": 1437
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
            "start": 1442,
            "end": 1443
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1446,
              "end": 1449
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
                  "start": 1450,
                  "end": 1453
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1457,
                  "end": 1460
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1464,
                  "end": 1467
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1470,
                  "end": 1472
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1454,
                  "end": 1456
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1461,
                  "end": 1463
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1468,
                  "end": 1469
                }
              ],
              "start": 1450,
              "end": 1472
            },
            "start": 1446,
            "end": 1472
          },
          "definite": false,
          "start": 1442,
          "end": 1472
        }
      ],
      "declare": false,
      "start": 1438,
      "end": 1473
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
          "start": 1577,
          "end": 1580
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
              "start": 1581,
              "end": 1583
            }
          ],
          "expressions": [],
          "start": 1581,
          "end": 1583
        },
        "start": 1577,
        "end": 1583
      },
      "directive": null,
      "start": 1577,
      "end": 1584
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1642,
        "end": 1645
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
              "start": 1646,
              "end": 1647
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1656,
              "end": 1662
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1646,
            "end": 1662
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1664,
              "end": 1665
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1674,
              "end": 1680
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1664,
            "end": 1680
          }
        ],
        "start": 1645,
        "end": 1681
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
                "start": 1688,
                "end": 1708
              },
              "typeArguments": null,
              "start": 1688,
              "end": 1708
            },
            "start": 1686,
            "end": 1708
          },
          "start": 1682,
          "end": 1708
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
                "start": 1713,
                "end": 1714
              },
              "typeArguments": null,
              "start": 1713,
              "end": 1714
            },
            "start": 1711,
            "end": 1714
          },
          "start": 1710,
          "end": 1714
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
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1633,
      "end": 1722
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1732,
        "end": 1735
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
              "start": 1736,
              "end": 1737
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1746,
              "end": 1752
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1736,
            "end": 1752
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1754,
              "end": 1755
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1764,
              "end": 1770
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1754,
            "end": 1770
          }
        ],
        "start": 1735,
        "end": 1771
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
                "start": 1778,
                "end": 1798
              },
              "typeArguments": null,
              "start": 1778,
              "end": 1798
            },
            "start": 1776,
            "end": 1798
          },
          "start": 1772,
          "end": 1798
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
                "start": 1803,
                "end": 1804
              },
              "typeArguments": null,
              "start": 1803,
              "end": 1804
            },
            "start": 1801,
            "end": 1804
          },
          "start": 1800,
          "end": 1804
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
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1723,
      "end": 1812
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1822,
        "end": 1825
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
                "start": 1832,
                "end": 1852
              },
              "typeArguments": null,
              "start": 1832,
              "end": 1852
            },
            "start": 1830,
            "end": 1852
          },
          "start": 1826,
          "end": 1852
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1813,
      "end": 1853
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1863,
        "end": 1866
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
        "start": 1869,
        "end": 1872
      },
      "expression": false,
      "start": 1854,
      "end": 1872
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
          "start": 1959,
          "end": 1962
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
              "start": 1963,
              "end": 1966
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1970,
              "end": 1973
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1977,
              "end": 1979
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 1967,
              "end": 1969
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1974,
              "end": 1975
            }
          ],
          "start": 1963,
          "end": 1979
        },
        "start": 1959,
        "end": 1979
      },
      "directive": null,
      "start": 1959,
      "end": 1980
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
          "start": 1981,
          "end": 1984
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
              "start": 1985,
              "end": 1988
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1992,
              "end": 1995
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1999,
              "end": 2001
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1989,
              "end": 1990
            },
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 1996,
              "end": 1998
            }
          ],
          "start": 1985,
          "end": 2001
        },
        "start": 1981,
        "end": 2001
      },
      "directive": null,
      "start": 1981,
      "end": 2002
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
          "start": 2003,
          "end": 2006
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
              "start": 2007,
              "end": 2010
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2014,
              "end": 2017
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2028,
              "end": 2030
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 2011,
              "end": 2012
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2018,
              "end": 2027
            }
          ],
          "start": 2007,
          "end": 2030
        },
        "start": 2003,
        "end": 2030
      },
      "directive": null,
      "start": 2003,
      "end": 2031
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
          "start": 2032,
          "end": 2035
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
              "start": 2036,
              "end": 2039
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2043,
              "end": 2046
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2052,
              "end": 2054
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2040,
              "end": 2042
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2047,
              "end": 2051
            }
          ],
          "start": 2036,
          "end": 2054
        },
        "start": 2032,
        "end": 2054
      },
      "directive": null,
      "start": 2032,
      "end": 2055
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
          "start": 2158,
          "end": 2161
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
              "start": 2162,
              "end": 2165
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2171,
              "end": 2174
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2180,
              "end": 2182
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2166,
              "end": 2170
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2175,
              "end": 2179
            }
          ],
          "start": 2162,
          "end": 2182
        },
        "start": 2158,
        "end": 2182
      },
      "directive": null,
      "start": 2158,
      "end": 2183
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
          "start": 2313,
          "end": 2316
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
              "start": 2317,
              "end": 2320
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2326,
              "end": 2329
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2335,
              "end": 2337
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2321,
              "end": 2325
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2330,
              "end": 2334
            }
          ],
          "start": 2317,
          "end": 2337
        },
        "start": 2313,
        "end": 2337
      },
      "directive": null,
      "start": 2313,
      "end": 2338
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
          "start": 2339,
          "end": 2342
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
              "start": 2343,
              "end": 2346
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2352,
              "end": 2355
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2361,
              "end": 2363
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2347,
              "end": 2351
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2356,
              "end": 2360
            }
          ],
          "start": 2343,
          "end": 2363
        },
        "start": 2339,
        "end": 2363
      },
      "directive": null,
      "start": 2339,
      "end": 2364
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2459,
        "end": 2462
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
                "start": 2469,
                "end": 2489
              },
              "typeArguments": null,
              "start": 2469,
              "end": 2489
            },
            "start": 2467,
            "end": 2489
          },
          "start": 2463,
          "end": 2489
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
                      "start": 2498,
                      "end": 2504
                    },
                    "start": 2496,
                    "end": 2504
                  },
                  "start": 2495,
                  "end": 2504
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2509,
                  "end": 2513
                },
                "start": 2506,
                "end": 2513
              },
              "start": 2494,
              "end": 2513
            },
            "start": 2492,
            "end": 2513
          },
          "start": 2491,
          "end": 2513
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2516,
          "end": 2522
        },
        "start": 2514,
        "end": 2522
      },
      "body": null,
      "expression": false,
      "start": 2450,
      "end": 2523
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2533,
        "end": 2536
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
                "start": 2543,
                "end": 2563
              },
              "typeArguments": null,
              "start": 2543,
              "end": 2563
            },
            "start": 2541,
            "end": 2563
          },
          "start": 2537,
          "end": 2563
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
                      "start": 2572,
                      "end": 2578
                    },
                    "start": 2570,
                    "end": 2578
                  },
                  "start": 2569,
                  "end": 2578
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2583,
                  "end": 2587
                },
                "start": 2580,
                "end": 2587
              },
              "start": 2568,
              "end": 2587
            },
            "start": 2566,
            "end": 2587
          },
          "start": 2565,
          "end": 2587
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2590,
          "end": 2596
        },
        "start": 2588,
        "end": 2596
      },
      "body": null,
      "expression": false,
      "start": 2524,
      "end": 2597
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2607,
        "end": 2610
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
              "start": 2622,
              "end": 2631
            },
            "start": 2615,
            "end": 2632
          }
        ],
        "start": 2613,
        "end": 2634
      },
      "expression": false,
      "start": 2598,
      "end": 2634
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
          "start": 2635,
          "end": 2638
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
              "start": 2639,
              "end": 2642
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2662,
              "end": 2664
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
                  "start": 2644,
                  "end": 2645
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
                    "start": 2650,
                    "end": 2651
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toFixed",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2652,
                    "end": 2659
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2650,
                  "end": 2659
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2650,
                "end": 2661
              },
              "id": null,
              "generator": false,
              "start": 2643,
              "end": 2661
            }
          ],
          "start": 2639,
          "end": 2664
        },
        "start": 2635,
        "end": 2664
      },
      "directive": null,
      "start": 2635,
      "end": 2665
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
          "start": 2712,
          "end": 2715
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
              "start": 2716,
              "end": 2719
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2739,
              "end": 2741
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
                  "start": 2721,
                  "end": 2722
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
                    "start": 2727,
                    "end": 2728
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "substr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2729,
                    "end": 2735
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2727,
                  "end": 2735
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2736,
                    "end": 2737
                  }
                ],
                "optional": false,
                "start": 2727,
                "end": 2738
              },
              "id": null,
              "generator": false,
              "start": 2720,
              "end": 2738
            }
          ],
          "start": 2716,
          "end": 2741
        },
        "start": 2712,
        "end": 2741
      },
      "directive": null,
      "start": 2712,
      "end": 2742
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 2743
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
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 564,
    "end": 567
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 568,
    "end": 571
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 572,
    "end": 573
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 574,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 578,
    "end": 587
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 600,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 619,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 738,
    "end": 741
  },
  {
    "type": "Template",
    "value": "`${",
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
    "type": "Template",
    "value": "}${",
    "start": 748,
    "end": 751
  },
  {
    "type": "String",
    "value": "''",
    "start": 752,
    "end": 754
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 755,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 851,
    "end": 854
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 855,
    "end": 858
  },
  {
    "type": "String",
    "value": "''",
    "start": 859,
    "end": 861
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 862,
    "end": 865
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 866,
    "end": 867
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 868,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 921,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 930,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 937,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 943,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "T",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 972,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 980,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 989,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "type": "Identifier",
    "value": "strs",
    "start": 999,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1005,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "start": 1030,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1041,
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
    "value": "u",
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
    "value": "U",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1054,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1076,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1082,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1107,
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
    "value": "u",
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
    "value": "U",
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
    "value": "t",
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
    "value": "T",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1123,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1131,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1140,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1148,
    "end": 1154
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1155,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1164,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1172,
    "end": 1175
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1176,
    "end": 1179
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1182,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1186,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1198,
    "end": 1201
  },
  {
    "type": "String",
    "value": "''",
    "start": 1201,
    "end": 1203
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1204,
    "end": 1207
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1210,
    "end": 1213
  },
  {
    "type": "String",
    "value": "''",
    "start": 1214,
    "end": 1216
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1217,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1221,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1229,
    "end": 1232
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Template",
    "value": "}${",
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
    "value": "}`",
    "start": 1251,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1255,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1262,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1388,
    "end": 1391
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1392,
    "end": 1395
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1398,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1401,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1405,
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
    "value": "fn3",
    "start": 1409,
    "end": 1412
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1413,
    "end": 1416
  },
  {
    "type": "String",
    "value": "''",
    "start": 1417,
    "end": 1419
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1420,
    "end": 1423
  },
  {
    "type": "String",
    "value": "''",
    "start": 1424,
    "end": 1426
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1427,
    "end": 1430
  },
  {
    "type": "String",
    "value": "''",
    "start": 1431,
    "end": 1433
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1434,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1446,
    "end": 1449
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1450,
    "end": 1453
  },
  {
    "type": "String",
    "value": "''",
    "start": 1454,
    "end": 1456
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1457,
    "end": 1460
  },
  {
    "type": "String",
    "value": "''",
    "start": 1461,
    "end": 1463
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1464,
    "end": 1467
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1470,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1577,
    "end": 1580
  },
  {
    "type": "Template",
    "value": "``",
    "start": 1581,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1633,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1642,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1648,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1656,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1666,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1674,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1682,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1688,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1713,
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
    "value": "m",
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
    "value": "U",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1723,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1732,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1738,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1746,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1756,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1764,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1772,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1778,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1803,
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
    "value": "m",
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
    "value": "U",
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
    "value": "function",
    "start": 1813,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1822,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1826,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1832,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1854,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1863,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1959,
    "end": 1962
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1963,
    "end": 1966
  },
  {
    "type": "String",
    "value": "''",
    "start": 1967,
    "end": 1969
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1970,
    "end": 1973
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1977,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1981,
    "end": 1984
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1992,
    "end": 1995
  },
  {
    "type": "String",
    "value": "''",
    "start": 1996,
    "end": 1998
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1999,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2003,
    "end": 2006
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2007,
    "end": 2010
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2014,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2018,
    "end": 2027
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2028,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2032,
    "end": 2035
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2036,
    "end": 2039
  },
  {
    "type": "String",
    "value": "''",
    "start": 2040,
    "end": 2042
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2043,
    "end": 2046
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2047,
    "end": 2051
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2052,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2158,
    "end": 2161
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2162,
    "end": 2165
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2166,
    "end": 2170
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2171,
    "end": 2174
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2175,
    "end": 2179
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2180,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2313,
    "end": 2316
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2317,
    "end": 2320
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2321,
    "end": 2325
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2326,
    "end": 2329
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2330,
    "end": 2334
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2335,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2339,
    "end": 2342
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2343,
    "end": 2346
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2347,
    "end": 2351
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2352,
    "end": 2355
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2356,
    "end": 2360
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2361,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2450,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2459,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 2463,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 2469,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2498,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2506,
    "end": 2508
  },
  {
    "type": "Keyword",
    "value": "void",
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
    "value": ":",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2516,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2524,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2533,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 2537,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 2543,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2572,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2580,
    "end": 2582
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2583,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2590,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2598,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2607,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2615,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2622,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2635,
    "end": 2638
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2639,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2647,
    "end": 2649
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 2652,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2662,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2712,
    "end": 2715
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2716,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2724,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 2729,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2739,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2741,
    "end": 2742
  }
]
```
