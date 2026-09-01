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
        "name": "RequiresLeadingSlash",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 25
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "/",
              "cooked": "/"
            },
            "tail": false,
            "start": 28,
            "end": 32
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 38,
            "end": 40
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 32,
            "end": 38
          }
        ],
        "start": 28,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 41
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RequiresLeadingSlash",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 78
                },
                "typeArguments": null,
                "start": 58,
                "end": 78
              },
              "start": 56,
              "end": 78
            },
            "start": 55,
            "end": 78
          },
          "init": {
            "type": "Literal",
            "value": "/bin",
            "raw": "\"/bin\"",
            "start": 81,
            "end": 87
          },
          "definite": false,
          "start": 55,
          "end": 87
        }
      ],
      "declare": false,
      "start": 49,
      "end": 88
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RequiresLeadingSlash",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 129
                },
                "typeArguments": null,
                "start": 109,
                "end": 129
              },
              "start": 107,
              "end": 129
            },
            "start": 106,
            "end": 129
          },
          "init": {
            "type": "Literal",
            "value": "no slash",
            "raw": "\"no slash\"",
            "start": 132,
            "end": 142
          },
          "definite": false,
          "start": 106,
          "end": 142
        }
      ],
      "declare": false,
      "start": 100,
      "end": 143
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Protocol",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 158
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
              "start": 159,
              "end": 160
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 169,
              "end": 175
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 159,
            "end": 175
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 187,
              "end": 193
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 177,
            "end": 193
          }
        ],
        "start": 158,
        "end": 194
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
            "start": 197,
            "end": 200
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "://",
              "cooked": "://"
            },
            "tail": false,
            "start": 201,
            "end": 207
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 208,
            "end": 210
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
              "start": 200,
              "end": 201
            },
            "typeArguments": null,
            "start": 200,
            "end": 201
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 208
            },
            "typeArguments": null,
            "start": 207,
            "end": 208
          }
        ],
        "start": 197,
        "end": 210
      },
      "declare": false,
      "start": 145,
      "end": 211
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "download",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 229
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "hostSpec",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Protocol",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 248
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
                          "value": "http",
                          "raw": "\"http\"",
                          "start": 249,
                          "end": 255
                        },
                        "start": 249,
                        "end": 255
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "https",
                          "raw": "\"https\"",
                          "start": 258,
                          "end": 265
                        },
                        "start": 258,
                        "end": 265
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "ftp",
                          "raw": "\"ftp\"",
                          "start": 268,
                          "end": 273
                        },
                        "start": 268,
                        "end": 273
                      }
                    ],
                    "start": 249,
                    "end": 273
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 275,
                    "end": 281
                  }
                ],
                "start": 248,
                "end": 282
              },
              "start": 240,
              "end": 282
            },
            "start": 238,
            "end": 282
          },
          "start": 230,
          "end": 282
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 284,
        "end": 287
      },
      "expression": false,
      "start": 212,
      "end": 287
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "download",
          "optional": false,
          "typeAnnotation": null,
          "start": 308,
          "end": 316
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "http://example.com/protocol",
            "raw": "\"http://example.com/protocol\"",
            "start": 317,
            "end": 346
          }
        ],
        "optional": false,
        "start": 308,
        "end": 347
      },
      "directive": null,
      "start": 308,
      "end": 348
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "download",
          "optional": false,
          "typeAnnotation": null,
          "start": 379,
          "end": 387
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "example.com/noprotocol",
            "raw": "\"example.com/noprotocol\"",
            "start": 388,
            "end": 412
          }
        ],
        "optional": false,
        "start": 379,
        "end": 413
      },
      "directive": null,
      "start": 379,
      "end": 414
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "download",
          "optional": false,
          "typeAnnotation": null,
          "start": 451,
          "end": 459
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "gopher://example.com/protocol",
            "raw": "\"gopher://example.com/protocol\"",
            "start": 460,
            "end": 491
          }
        ],
        "optional": false,
        "start": 451,
        "end": 492
      },
      "directive": null,
      "start": 451,
      "end": 493
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
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RequiresLeadingSlash",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 504,
                    "end": 524
                  },
                  "typeArguments": null,
                  "start": 504,
                  "end": 524
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 533,
                  "end": 539
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 542,
                    "end": 546
                  },
                  "start": 542,
                  "end": 546
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 549,
                    "end": 554
                  },
                  "start": 549,
                  "end": 554
                },
                "start": 504,
                "end": 554
              },
              "start": 502,
              "end": 554
            },
            "start": 501,
            "end": 554
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 557,
            "end": 561
          },
          "definite": false,
          "start": 501,
          "end": 561
        }
      ],
      "declare": false,
      "start": 495,
      "end": 562
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bools",
        "optional": false,
        "typeAnnotation": null,
        "start": 581,
        "end": 586
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 590,
                  "end": 593
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 600,
                  "end": 602
                }
              ],
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 593,
                  "end": 600
                }
              ],
              "start": 590,
              "end": 602
            },
            "start": 588,
            "end": 602
          },
          "start": 587,
          "end": 602
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 605,
          "end": 609
        },
        "start": 603,
        "end": 609
      },
      "body": null,
      "expression": false,
      "start": 564,
      "end": 610
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bools",
          "optional": false,
          "typeAnnotation": null,
          "start": 617,
          "end": 622
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "true",
            "raw": "\"true\"",
            "start": 623,
            "end": 629
          }
        ],
        "optional": false,
        "start": 617,
        "end": 630
      },
      "directive": null,
      "start": 617,
      "end": 631
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bools",
          "optional": false,
          "typeAnnotation": null,
          "start": 632,
          "end": 637
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "false",
            "raw": "\"false\"",
            "start": 638,
            "end": 645
          }
        ],
        "optional": false,
        "start": 632,
        "end": 646
      },
      "directive": null,
      "start": 632,
      "end": 647
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bools",
          "optional": false,
          "typeAnnotation": null,
          "start": 659,
          "end": 664
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "other",
            "raw": "\"other\"",
            "start": 665,
            "end": 672
          }
        ],
        "optional": false,
        "start": 659,
        "end": 673
      },
      "directive": null,
      "start": 659,
      "end": 674
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pat",
        "optional": false,
        "typeAnnotation": null,
        "start": 681,
        "end": 684
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
              "start": 685,
              "end": 686
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 695,
                  "end": 701
                },
                {
                  "type": "TSNullKeyword",
                  "start": 704,
                  "end": 708
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 711,
                  "end": 720
                }
              ],
              "start": 695,
              "end": 720
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 685,
            "end": 720
          }
        ],
        "start": 684,
        "end": 721
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
            "start": 724,
            "end": 727
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 728,
            "end": 730
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
              "start": 727,
              "end": 728
            },
            "typeArguments": null,
            "start": 727,
            "end": 728
          }
        ],
        "start": 724,
        "end": 730
      },
      "declare": false,
      "start": 676,
      "end": 730
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nullishes",
        "optional": false,
        "typeAnnotation": null,
        "start": 748,
        "end": 757
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "Pat",
                "optional": false,
                "typeAnnotation": null,
                "start": 761,
                "end": 764
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNullKeyword",
                        "start": 765,
                        "end": 769
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 772,
                        "end": 781
                      }
                    ],
                    "start": 765,
                    "end": 781
                  }
                ],
                "start": 764,
                "end": 782
              },
              "start": 761,
              "end": 782
            },
            "start": 759,
            "end": 782
          },
          "start": 758,
          "end": 782
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 785,
          "end": 789
        },
        "start": 783,
        "end": 789
      },
      "body": null,
      "expression": false,
      "start": 731,
      "end": 790
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 797,
          "end": 806
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "null",
            "raw": "\"null\"",
            "start": 807,
            "end": 813
          }
        ],
        "optional": false,
        "start": 797,
        "end": 814
      },
      "directive": null,
      "start": 797,
      "end": 815
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 816,
          "end": 825
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "undefined",
            "raw": "\"undefined\"",
            "start": 826,
            "end": 837
          }
        ],
        "optional": false,
        "start": 816,
        "end": 838
      },
      "directive": null,
      "start": 816,
      "end": 839
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 851,
          "end": 860
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 861,
            "end": 864
          }
        ],
        "optional": false,
        "start": 851,
        "end": 865
      },
      "directive": null,
      "start": 851,
      "end": 866
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 867,
          "end": 876
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "false",
            "raw": "\"false\"",
            "start": 877,
            "end": 884
          }
        ],
        "optional": false,
        "start": 867,
        "end": 885
      },
      "directive": null,
      "start": 867,
      "end": 886
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 887,
          "end": 896
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "NaN",
            "raw": "\"NaN\"",
            "start": 897,
            "end": 902
          }
        ],
        "optional": false,
        "start": 887,
        "end": 903
      },
      "directive": null,
      "start": 887,
      "end": 904
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 905,
          "end": 914
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 915,
            "end": 917
          }
        ],
        "optional": false,
        "start": 905,
        "end": 918
      },
      "directive": null,
      "start": 905,
      "end": 919
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 920,
          "end": 929
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "other",
            "raw": "\"other\"",
            "start": 930,
            "end": 937
          }
        ],
        "optional": false,
        "start": 920,
        "end": 938
      },
      "directive": null,
      "start": 920,
      "end": 939
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "numbers",
        "optional": false,
        "typeAnnotation": null,
        "start": 958,
        "end": 965
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 969,
                  "end": 972
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 978,
                  "end": 980
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 972,
                  "end": 978
                }
              ],
              "start": 969,
              "end": 980
            },
            "start": 967,
            "end": 980
          },
          "start": 966,
          "end": 980
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 983,
          "end": 987
        },
        "start": 981,
        "end": 987
      },
      "body": null,
      "expression": false,
      "start": 941,
      "end": 988
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1018,
          "end": 1025
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 1026,
            "end": 1029
          }
        ],
        "optional": false,
        "start": 1018,
        "end": 1030
      },
      "directive": null,
      "start": 1018,
      "end": 1031
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1032,
          "end": 1039
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1",
            "raw": "\"-1\"",
            "start": 1040,
            "end": 1044
          }
        ],
        "optional": false,
        "start": 1032,
        "end": 1045
      },
      "directive": null,
      "start": 1032,
      "end": 1046
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1047,
          "end": 1054
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 1055,
            "end": 1058
          }
        ],
        "optional": false,
        "start": 1047,
        "end": 1059
      },
      "directive": null,
      "start": 1047,
      "end": 1060
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1061,
          "end": 1068
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0b1",
            "raw": "\"0b1\"",
            "start": 1069,
            "end": 1074
          }
        ],
        "optional": false,
        "start": 1061,
        "end": 1075
      },
      "directive": null,
      "start": 1061,
      "end": 1076
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1077,
          "end": 1084
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0x1",
            "raw": "\"0x1\"",
            "start": 1085,
            "end": 1090
          }
        ],
        "optional": false,
        "start": 1077,
        "end": 1091
      },
      "directive": null,
      "start": 1077,
      "end": 1092
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1093,
          "end": 1100
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0o1",
            "raw": "\"0o1\"",
            "start": 1101,
            "end": 1106
          }
        ],
        "optional": false,
        "start": 1093,
        "end": 1107
      },
      "directive": null,
      "start": 1093,
      "end": 1108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1109,
          "end": 1116
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1e21",
            "raw": "\"1e21\"",
            "start": 1117,
            "end": 1123
          }
        ],
        "optional": false,
        "start": 1109,
        "end": 1124
      },
      "directive": null,
      "start": 1109,
      "end": 1125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1126,
          "end": 1133
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1E21",
            "raw": "\"1E21\"",
            "start": 1134,
            "end": 1140
          }
        ],
        "optional": false,
        "start": 1126,
        "end": 1141
      },
      "directive": null,
      "start": 1126,
      "end": 1142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1143,
          "end": 1150
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1e-21",
            "raw": "\"1e-21\"",
            "start": 1151,
            "end": 1158
          }
        ],
        "optional": false,
        "start": 1143,
        "end": 1159
      },
      "directive": null,
      "start": 1143,
      "end": 1160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1161,
          "end": 1168
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1E-21",
            "raw": "\"1E-21\"",
            "start": 1169,
            "end": 1176
          }
        ],
        "optional": false,
        "start": 1161,
        "end": 1177
      },
      "directive": null,
      "start": 1161,
      "end": 1178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1179,
          "end": 1186
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.1",
            "raw": "\"1.1\"",
            "start": 1187,
            "end": 1192
          }
        ],
        "optional": false,
        "start": 1179,
        "end": 1193
      },
      "directive": null,
      "start": 1179,
      "end": 1194
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1195,
          "end": 1202
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1",
            "raw": "\"-1.1\"",
            "start": 1203,
            "end": 1209
          }
        ],
        "optional": false,
        "start": 1195,
        "end": 1210
      },
      "directive": null,
      "start": 1195,
      "end": 1211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1212,
          "end": 1219
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1e-10",
            "raw": "\"-1.1e-10\"",
            "start": 1220,
            "end": 1230
          }
        ],
        "optional": false,
        "start": 1212,
        "end": 1231
      },
      "directive": null,
      "start": 1212,
      "end": 1232
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1233,
          "end": 1240
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1E-10",
            "raw": "\"-1.1E-10\"",
            "start": 1241,
            "end": 1251
          }
        ],
        "optional": false,
        "start": 1233,
        "end": 1252
      },
      "directive": null,
      "start": 1233,
      "end": 1253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1254,
          "end": 1261
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.1e-10",
            "raw": "\"1.1e-10\"",
            "start": 1262,
            "end": 1271
          }
        ],
        "optional": false,
        "start": 1254,
        "end": 1272
      },
      "directive": null,
      "start": 1254,
      "end": 1273
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1335,
          "end": 1342
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "?",
            "raw": "\"?\"",
            "start": 1343,
            "end": 1346
          }
        ],
        "optional": false,
        "start": 1335,
        "end": 1347
      },
      "directive": null,
      "start": 1335,
      "end": 1348
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1349,
          "end": 1356
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "NaN",
            "raw": "\"NaN\"",
            "start": 1357,
            "end": 1362
          }
        ],
        "optional": false,
        "start": 1349,
        "end": 1363
      },
      "directive": null,
      "start": 1349,
      "end": 1364
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1365,
          "end": 1372
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Infinity",
            "raw": "\"Infinity\"",
            "start": 1373,
            "end": 1383
          }
        ],
        "optional": false,
        "start": 1365,
        "end": 1384
      },
      "directive": null,
      "start": 1365,
      "end": 1385
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1386,
          "end": 1393
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "+Infinity",
            "raw": "\"+Infinity\"",
            "start": 1394,
            "end": 1405
          }
        ],
        "optional": false,
        "start": 1386,
        "end": 1406
      },
      "directive": null,
      "start": 1386,
      "end": 1407
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1408,
          "end": 1415
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-Infinity",
            "raw": "\"-Infinity\"",
            "start": 1416,
            "end": 1427
          }
        ],
        "optional": false,
        "start": 1408,
        "end": 1428
      },
      "directive": null,
      "start": 1408,
      "end": 1429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1430,
          "end": 1437
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1_000",
            "raw": "\"1_000\"",
            "start": 1438,
            "end": 1445
          }
        ],
        "optional": false,
        "start": 1430,
        "end": 1446
      },
      "directive": null,
      "start": 1430,
      "end": 1447
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1518,
          "end": 1525
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a10",
            "raw": "\"a10\"",
            "start": 1526,
            "end": 1531
          }
        ],
        "optional": false,
        "start": 1518,
        "end": 1532
      },
      "directive": null,
      "start": 1518,
      "end": 1533
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1534,
          "end": 1541
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "10a",
            "raw": "\"10a\"",
            "start": 1542,
            "end": 1547
          }
        ],
        "optional": false,
        "start": 1534,
        "end": 1548
      },
      "directive": null,
      "start": 1534,
      "end": 1549
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1601,
          "end": 1608
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "- 1",
            "raw": "\"- 1\"",
            "start": 1609,
            "end": 1614
          }
        ],
        "optional": false,
        "start": 1601,
        "end": 1615
      },
      "directive": null,
      "start": 1601,
      "end": 1616
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1617,
          "end": 1624
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-/**/1",
            "raw": "\"-/**/1\"",
            "start": 1625,
            "end": 1633
          }
        ],
        "optional": false,
        "start": 1617,
        "end": 1634
      },
      "directive": null,
      "start": 1617,
      "end": 1635
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bigints",
        "optional": false,
        "typeAnnotation": null,
        "start": 1654,
        "end": 1661
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1665,
                  "end": 1668
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1674,
                  "end": 1676
                }
              ],
              "types": [
                {
                  "type": "TSBigIntKeyword",
                  "start": 1668,
                  "end": 1674
                }
              ],
              "start": 1665,
              "end": 1676
            },
            "start": 1663,
            "end": 1676
          },
          "start": 1662,
          "end": 1676
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1679,
          "end": 1683
        },
        "start": 1677,
        "end": 1683
      },
      "body": null,
      "expression": false,
      "start": 1637,
      "end": 1684
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1714,
          "end": 1721
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 1722,
            "end": 1725
          }
        ],
        "optional": false,
        "start": 1714,
        "end": 1726
      },
      "directive": null,
      "start": 1714,
      "end": 1727
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1728,
          "end": 1735
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1",
            "raw": "\"-1\"",
            "start": 1736,
            "end": 1740
          }
        ],
        "optional": false,
        "start": 1728,
        "end": 1741
      },
      "directive": null,
      "start": 1728,
      "end": 1742
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1743,
          "end": 1750
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 1751,
            "end": 1754
          }
        ],
        "optional": false,
        "start": 1743,
        "end": 1755
      },
      "directive": null,
      "start": 1743,
      "end": 1756
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1757,
          "end": 1764
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0b1",
            "raw": "\"0b1\"",
            "start": 1765,
            "end": 1770
          }
        ],
        "optional": false,
        "start": 1757,
        "end": 1771
      },
      "directive": null,
      "start": 1757,
      "end": 1772
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1773,
          "end": 1780
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0x1",
            "raw": "\"0x1\"",
            "start": 1781,
            "end": 1786
          }
        ],
        "optional": false,
        "start": 1773,
        "end": 1787
      },
      "directive": null,
      "start": 1773,
      "end": 1788
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1789,
          "end": 1796
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0o1",
            "raw": "\"0o1\"",
            "start": 1797,
            "end": 1802
          }
        ],
        "optional": false,
        "start": 1789,
        "end": 1803
      },
      "directive": null,
      "start": 1789,
      "end": 1804
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1901,
          "end": 1908
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1e21",
            "raw": "\"1e21\"",
            "start": 1909,
            "end": 1915
          }
        ],
        "optional": false,
        "start": 1901,
        "end": 1916
      },
      "directive": null,
      "start": 1901,
      "end": 1917
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1918,
          "end": 1925
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1E21",
            "raw": "\"1E21\"",
            "start": 1926,
            "end": 1932
          }
        ],
        "optional": false,
        "start": 1918,
        "end": 1933
      },
      "directive": null,
      "start": 1918,
      "end": 1934
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1935,
          "end": 1942
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1e-21",
            "raw": "\"1e-21\"",
            "start": 1943,
            "end": 1950
          }
        ],
        "optional": false,
        "start": 1935,
        "end": 1951
      },
      "directive": null,
      "start": 1935,
      "end": 1952
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1953,
          "end": 1960
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1E-21",
            "raw": "\"1E-21\"",
            "start": 1961,
            "end": 1968
          }
        ],
        "optional": false,
        "start": 1953,
        "end": 1969
      },
      "directive": null,
      "start": 1953,
      "end": 1970
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2026,
          "end": 2033
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.0",
            "raw": "\"1.0\"",
            "start": 2034,
            "end": 2039
          }
        ],
        "optional": false,
        "start": 2026,
        "end": 2040
      },
      "directive": null,
      "start": 2026,
      "end": 2041
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2042,
          "end": 2049
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.1",
            "raw": "\"1.1\"",
            "start": 2050,
            "end": 2055
          }
        ],
        "optional": false,
        "start": 2042,
        "end": 2056
      },
      "directive": null,
      "start": 2042,
      "end": 2057
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2058,
          "end": 2065
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1",
            "raw": "\"-1.1\"",
            "start": 2066,
            "end": 2072
          }
        ],
        "optional": false,
        "start": 2058,
        "end": 2073
      },
      "directive": null,
      "start": 2058,
      "end": 2074
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2075,
          "end": 2082
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1e-10",
            "raw": "\"-1.1e-10\"",
            "start": 2083,
            "end": 2093
          }
        ],
        "optional": false,
        "start": 2075,
        "end": 2094
      },
      "directive": null,
      "start": 2075,
      "end": 2095
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2096,
          "end": 2103
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1E-10",
            "raw": "\"-1.1E-10\"",
            "start": 2104,
            "end": 2114
          }
        ],
        "optional": false,
        "start": 2096,
        "end": 2115
      },
      "directive": null,
      "start": 2096,
      "end": 2116
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2117,
          "end": 2124
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.1e-10",
            "raw": "\"1.1e-10\"",
            "start": 2125,
            "end": 2134
          }
        ],
        "optional": false,
        "start": 2117,
        "end": 2135
      },
      "directive": null,
      "start": 2117,
      "end": 2136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2198,
          "end": 2205
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "?",
            "raw": "\"?\"",
            "start": 2206,
            "end": 2209
          }
        ],
        "optional": false,
        "start": 2198,
        "end": 2210
      },
      "directive": null,
      "start": 2198,
      "end": 2211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2212,
          "end": 2219
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "NaN",
            "raw": "\"NaN\"",
            "start": 2220,
            "end": 2225
          }
        ],
        "optional": false,
        "start": 2212,
        "end": 2226
      },
      "directive": null,
      "start": 2212,
      "end": 2227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2228,
          "end": 2235
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Infinity",
            "raw": "\"Infinity\"",
            "start": 2236,
            "end": 2246
          }
        ],
        "optional": false,
        "start": 2228,
        "end": 2247
      },
      "directive": null,
      "start": 2228,
      "end": 2248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2249,
          "end": 2256
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "+Infinity",
            "raw": "\"+Infinity\"",
            "start": 2257,
            "end": 2268
          }
        ],
        "optional": false,
        "start": 2249,
        "end": 2269
      },
      "directive": null,
      "start": 2249,
      "end": 2270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2271,
          "end": 2278
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-Infinity",
            "raw": "\"-Infinity\"",
            "start": 2279,
            "end": 2290
          }
        ],
        "optional": false,
        "start": 2271,
        "end": 2291
      },
      "directive": null,
      "start": 2271,
      "end": 2292
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2293,
          "end": 2300
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1_000",
            "raw": "\"1_000\"",
            "start": 2301,
            "end": 2308
          }
        ],
        "optional": false,
        "start": 2293,
        "end": 2309
      },
      "directive": null,
      "start": 2293,
      "end": 2310
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2362,
          "end": 2369
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "- 1",
            "raw": "\"- 1\"",
            "start": 2370,
            "end": 2375
          }
        ],
        "optional": false,
        "start": 2362,
        "end": 2376
      },
      "directive": null,
      "start": 2362,
      "end": 2377
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2378,
          "end": 2385
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-/**/1",
            "raw": "\"-/**/1\"",
            "start": 2386,
            "end": 2394
          }
        ],
        "optional": false,
        "start": 2378,
        "end": 2395
      },
      "directive": null,
      "start": 2378,
      "end": 2396
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2467,
          "end": 2474
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a10n",
            "raw": "\"a10n\"",
            "start": 2475,
            "end": 2481
          }
        ],
        "optional": false,
        "start": 2467,
        "end": 2482
      },
      "directive": null,
      "start": 2467,
      "end": 2483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2484,
          "end": 2491
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "10an",
            "raw": "\"10an\"",
            "start": 2492,
            "end": 2498
          }
        ],
        "optional": false,
        "start": 2484,
        "end": 2499
      },
      "directive": null,
      "start": 2484,
      "end": 2500
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2646,
          "end": 2653
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1n",
            "raw": "\"1n\"",
            "start": 2654,
            "end": 2658
          }
        ],
        "optional": false,
        "start": 2646,
        "end": 2659
      },
      "directive": null,
      "start": 2646,
      "end": 2660
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2661,
          "end": 2668
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1n",
            "raw": "\"-1n\"",
            "start": 2669,
            "end": 2674
          }
        ],
        "optional": false,
        "start": 2661,
        "end": 2675
      },
      "directive": null,
      "start": 2661,
      "end": 2676
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2677,
          "end": 2684
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0n",
            "raw": "\"0n\"",
            "start": 2685,
            "end": 2689
          }
        ],
        "optional": false,
        "start": 2677,
        "end": 2690
      },
      "directive": null,
      "start": 2677,
      "end": 2691
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2692,
          "end": 2699
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0b1n",
            "raw": "\"0b1n\"",
            "start": 2700,
            "end": 2706
          }
        ],
        "optional": false,
        "start": 2692,
        "end": 2707
      },
      "directive": null,
      "start": 2692,
      "end": 2708
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2709,
          "end": 2716
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0x1n",
            "raw": "\"0x1n\"",
            "start": 2717,
            "end": 2723
          }
        ],
        "optional": false,
        "start": 2709,
        "end": 2724
      },
      "directive": null,
      "start": 2709,
      "end": 2725
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2726,
          "end": 2733
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0o1n",
            "raw": "\"0o1n\"",
            "start": 2734,
            "end": 2740
          }
        ],
        "optional": false,
        "start": 2726,
        "end": 2741
      },
      "directive": null,
      "start": 2726,
      "end": 2742
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2743,
          "end": 2750
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1e21n",
            "raw": "\"1e21n\"",
            "start": 2751,
            "end": 2758
          }
        ],
        "optional": false,
        "start": 2743,
        "end": 2759
      },
      "directive": null,
      "start": 2743,
      "end": 2760
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2761,
          "end": 2768
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1E21n",
            "raw": "\"1E21n\"",
            "start": 2769,
            "end": 2776
          }
        ],
        "optional": false,
        "start": 2761,
        "end": 2777
      },
      "directive": null,
      "start": 2761,
      "end": 2778
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2779,
          "end": 2786
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1e-21n",
            "raw": "\"1e-21n\"",
            "start": 2787,
            "end": 2795
          }
        ],
        "optional": false,
        "start": 2779,
        "end": 2796
      },
      "directive": null,
      "start": 2779,
      "end": 2797
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2798,
          "end": 2805
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1E-21n",
            "raw": "\"1E-21n\"",
            "start": 2806,
            "end": 2814
          }
        ],
        "optional": false,
        "start": 2798,
        "end": 2815
      },
      "directive": null,
      "start": 2798,
      "end": 2816
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2817,
          "end": 2824
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.1n",
            "raw": "\"1.1n\"",
            "start": 2825,
            "end": 2831
          }
        ],
        "optional": false,
        "start": 2817,
        "end": 2832
      },
      "directive": null,
      "start": 2817,
      "end": 2833
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2834,
          "end": 2841
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1n",
            "raw": "\"-1.1n\"",
            "start": 2842,
            "end": 2849
          }
        ],
        "optional": false,
        "start": 2834,
        "end": 2850
      },
      "directive": null,
      "start": 2834,
      "end": 2851
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2852,
          "end": 2859
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1e-10n",
            "raw": "\"-1.1e-10n\"",
            "start": 2860,
            "end": 2871
          }
        ],
        "optional": false,
        "start": 2852,
        "end": 2872
      },
      "directive": null,
      "start": 2852,
      "end": 2873
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2874,
          "end": 2881
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1E-10n",
            "raw": "\"-1.1E-10n\"",
            "start": 2882,
            "end": 2893
          }
        ],
        "optional": false,
        "start": 2874,
        "end": 2894
      },
      "directive": null,
      "start": 2874,
      "end": 2895
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2896,
          "end": 2903
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.1e-10n",
            "raw": "\"1.1e-10n\"",
            "start": 2904,
            "end": 2914
          }
        ],
        "optional": false,
        "start": 2896,
        "end": 2915
      },
      "directive": null,
      "start": 2896,
      "end": 2916
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AStr",
        "optional": false,
        "typeAnnotation": null,
        "start": 2923,
        "end": 2927
      },
      "typeParameters": null,
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
            "start": 2930,
            "end": 2934
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 2940,
            "end": 2942
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2934,
            "end": 2940
          }
        ],
        "start": 2930,
        "end": 2942
      },
      "declare": false,
      "start": 2918,
      "end": 2943
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ANum",
        "optional": false,
        "typeAnnotation": null,
        "start": 2949,
        "end": 2953
      },
      "typeParameters": null,
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
            "start": 2956,
            "end": 2960
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 2966,
            "end": 2968
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 2960,
            "end": 2966
          }
        ],
        "start": 2956,
        "end": 2968
      },
      "declare": false,
      "start": 2944,
      "end": 2969
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 2975,
        "end": 2979
      },
      "typeParameters": null,
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
            "start": 2982,
            "end": 2986
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 2989,
            "end": 2991
          }
        ],
        "types": [
          {
            "type": "TSAnyKeyword",
            "start": 2986,
            "end": 2989
          }
        ],
        "start": 2982,
        "end": 2991
      },
      "declare": false,
      "start": 2970,
      "end": 2992
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AStr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3011,
                  "end": 3015
                },
                "typeArguments": null,
                "start": 3011,
                "end": 3015
              },
              "start": 3009,
              "end": 3015
            },
            "start": 3006,
            "end": 3015
          },
          "init": null,
          "definite": false,
          "start": 3006,
          "end": 3015
        }
      ],
      "declare": true,
      "start": 2994,
      "end": 3016
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ANum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3034,
                  "end": 3038
                },
                "typeArguments": null,
                "start": 3034,
                "end": 3038
              },
              "start": 3032,
              "end": 3038
            },
            "start": 3029,
            "end": 3038
          },
          "init": null,
          "definite": false,
          "start": 3029,
          "end": 3038
        }
      ],
      "declare": true,
      "start": 3017,
      "end": 3039
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
            "name": "anyish",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AAny",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3060,
                  "end": 3064
                },
                "typeArguments": null,
                "start": 3060,
                "end": 3064
              },
              "start": 3058,
              "end": 3064
            },
            "start": 3052,
            "end": 3064
          },
          "init": null,
          "definite": false,
          "start": 3052,
          "end": 3064
        }
      ],
      "declare": true,
      "start": 3040,
      "end": 3065
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 3077,
          "end": 3080
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 3083,
          "end": 3086
        },
        "start": 3077,
        "end": 3086
      },
      "directive": null,
      "start": 3077,
      "end": 3087
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "typeAnnotation": null,
          "start": 3088,
          "end": 3094
        },
        "right": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "bno",
                "cooked": "bno"
              },
              "tail": true,
              "start": 3097,
              "end": 3102
            }
          ],
          "expressions": [],
          "start": 3097,
          "end": 3102
        },
        "start": 3088,
        "end": 3102
      },
      "directive": null,
      "start": 3088,
      "end": 3102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 3110,
          "end": 3113
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 3116,
          "end": 3119
        },
        "start": 3110,
        "end": 3119
      },
      "directive": null,
      "start": 3110,
      "end": 3120
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "typeAnnotation": null,
          "start": 3121,
          "end": 3127
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 3130,
          "end": 3133
        },
        "start": 3121,
        "end": 3133
      },
      "directive": null,
      "start": 3121,
      "end": 3134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 3135,
          "end": 3138
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "typeAnnotation": null,
          "start": 3141,
          "end": 3147
        },
        "start": 3135,
        "end": 3147
      },
      "directive": null,
      "start": 3135,
      "end": 3148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "typeAnnotation": null,
          "start": 3149,
          "end": 3155
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 3158,
          "end": 3161
        },
        "start": 3149,
        "end": 3161
      },
      "directive": null,
      "start": 3149,
      "end": 3162
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 3163,
          "end": 3166
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "typeAnnotation": null,
          "start": 3169,
          "end": 3175
        },
        "start": 3163,
        "end": 3175
      },
      "directive": null,
      "start": 3163,
      "end": 3176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "typeAnnotation": null,
          "start": 3177,
          "end": 3183
        },
        "right": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "aok",
                "cooked": "aok"
              },
              "tail": true,
              "start": 3186,
              "end": 3191
            }
          ],
          "expressions": [],
          "start": 3186,
          "end": 3191
        },
        "start": 3177,
        "end": 3191
      },
      "directive": null,
      "start": 3177,
      "end": 3191
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AGen",
        "optional": false,
        "typeAnnotation": null,
        "start": 3258,
        "end": 3262
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
              "start": 3263,
              "end": 3264
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3273,
                  "end": 3279
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 3282,
                  "end": 3288
                }
              ],
              "start": 3273,
              "end": 3288
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3263,
            "end": 3288
          }
        ],
        "start": 3262,
        "end": 3289
      },
      "typeAnnotation": {
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
              "name": "field",
              "optional": false,
              "typeAnnotation": null,
              "start": 3293,
              "end": 3298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                    "start": 3300,
                    "end": 3304
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 3305,
                    "end": 3307
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
                      "start": 3304,
                      "end": 3305
                    },
                    "typeArguments": null,
                    "start": 3304,
                    "end": 3305
                  }
                ],
                "start": 3300,
                "end": 3307
              },
              "start": 3298,
              "end": 3307
            },
            "accessibility": null,
            "static": false,
            "start": 3293,
            "end": 3307
          }
        ],
        "start": 3292,
        "end": 3308
      },
      "declare": false,
      "start": 3253,
      "end": 3309
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
            "name": "shouldWork1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AGen",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3329,
                  "end": 3333
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3334,
                      "end": 3340
                    }
                  ],
                  "start": 3333,
                  "end": 3341
                },
                "start": 3329,
                "end": 3341
              },
              "start": 3327,
              "end": 3341
            },
            "start": 3316,
            "end": 3341
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3344,
                "end": 3348
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3352,
                "end": 3355
              },
              "start": 3344,
              "end": 3355
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AGen",
                "optional": false,
                "typeAnnotation": null,
                "start": 3359,
                "end": 3363
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "yes",
                      "raw": "\"yes\"",
                      "start": 3364,
                      "end": 3369
                    },
                    "start": 3364,
                    "end": 3369
                  }
                ],
                "start": 3363,
                "end": 3370
              },
              "start": 3359,
              "end": 3370
            },
            "start": 3344,
            "end": 3370
          },
          "definite": false,
          "start": 3316,
          "end": 3370
        }
      ],
      "declare": false,
      "start": 3310,
      "end": 3371
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
            "name": "shouldWork2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AGen",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3391,
                  "end": 3395
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3396,
                      "end": 3402
                    }
                  ],
                  "start": 3395,
                  "end": 3403
                },
                "start": 3391,
                "end": 3403
              },
              "start": 3389,
              "end": 3403
            },
            "start": 3378,
            "end": 3403
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3406,
                "end": 3410
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3414,
                "end": 3417
              },
              "start": 3406,
              "end": 3417
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AGen",
                "optional": false,
                "typeAnnotation": null,
                "start": 3421,
                "end": 3425
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 3426,
                    "end": 3432
                  }
                ],
                "start": 3425,
                "end": 3433
              },
              "start": 3421,
              "end": 3433
            },
            "start": 3406,
            "end": 3433
          },
          "definite": false,
          "start": 3378,
          "end": 3433
        }
      ],
      "declare": false,
      "start": 3372,
      "end": 3434
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 3480,
        "end": 3481
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
            "start": 3484,
            "end": 3487
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 3493,
            "end": 3495
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 3487,
            "end": 3493
          }
        ],
        "start": 3484,
        "end": 3495
      },
      "declare": false,
      "start": 3475,
      "end": 3496
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 3502,
        "end": 3503
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
            "start": 3506,
            "end": 3509
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false,
            "start": 3510,
            "end": 3514
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 3515,
            "end": 3517
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
              "start": 3509,
              "end": 3510
            },
            "typeArguments": null,
            "start": 3509,
            "end": 3510
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 3514,
              "end": 3515
            },
            "typeArguments": null,
            "start": 3514,
            "end": 3515
          }
        ],
        "start": 3506,
        "end": 3517
      },
      "declare": false,
      "start": 3497,
      "end": 3518
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
            "name": "exampleBad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3537,
                  "end": 3538
                },
                "typeArguments": null,
                "start": 3537,
                "end": 3538
              },
              "start": 3535,
              "end": 3538
            },
            "start": 3525,
            "end": 3538
          },
          "init": {
            "type": "Literal",
            "value": "anything",
            "raw": "\"anything\"",
            "start": 3541,
            "end": 3551
          },
          "definite": false,
          "start": 3525,
          "end": 3551
        }
      ],
      "declare": false,
      "start": 3519,
      "end": 3552
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
            "name": "exampleGood",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3581,
                  "end": 3582
                },
                "typeArguments": null,
                "start": 3581,
                "end": 3582
              },
              "start": 3579,
              "end": 3582
            },
            "start": 3568,
            "end": 3582
          },
          "init": {
            "type": "Literal",
            "value": "1 2",
            "raw": "\"1 2\"",
            "start": 3585,
            "end": 3590
          },
          "definite": false,
          "start": 3568,
          "end": 3590
        }
      ],
      "declare": false,
      "start": 3562,
      "end": 3591
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
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "0",
                  "raw": "'0'",
                  "start": 3629,
                  "end": 3632
                },
                "start": 3629,
                "end": 3632
              },
              "start": 3627,
              "end": 3632
            },
            "start": 3625,
            "end": 3632
          },
          "init": null,
          "definite": false,
          "start": 3625,
          "end": 3632
        }
      ],
      "declare": false,
      "start": 3621,
      "end": 3633
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
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "0",
                      "raw": "'0'",
                      "start": 3642,
                      "end": 3645
                    },
                    "start": 3642,
                    "end": 3645
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
                        "start": 3648,
                        "end": 3651
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 3657,
                        "end": 3659
                      }
                    ],
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 3651,
                        "end": 3657
                      }
                    ],
                    "start": 3648,
                    "end": 3659
                  }
                ],
                "start": 3642,
                "end": 3659
              },
              "start": 3640,
              "end": 3659
            },
            "start": 3638,
            "end": 3659
          },
          "init": null,
          "definite": false,
          "start": 3638,
          "end": 3659
        }
      ],
      "declare": false,
      "start": 3634,
      "end": 3660
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 3741,
                        "end": 3747
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 3753,
                        "end": 3755
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3747,
                        "end": 3753
                      }
                    ],
                    "start": 3741,
                    "end": 3755
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo1",
                      "raw": "'foo1'",
                      "start": 3758,
                      "end": 3764
                    },
                    "start": 3758,
                    "end": 3764
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "1foo",
                      "raw": "'1foo'",
                      "start": 3767,
                      "end": 3773
                    },
                    "start": 3767,
                    "end": 3773
                  }
                ],
                "start": 3741,
                "end": 3773
              },
              "start": 3739,
              "end": 3773
            },
            "start": 3737,
            "end": 3773
          },
          "init": null,
          "definite": false,
          "start": 3737,
          "end": 3773
        }
      ],
      "declare": false,
      "start": 3733,
      "end": 3774
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                            "raw": "foo1",
                            "cooked": "foo1"
                          },
                          "tail": true,
                          "start": 3811,
                          "end": 3817
                        }
                      ],
                      "expressions": [],
                      "start": 3811,
                      "end": 3817
                    },
                    "start": 3811,
                    "end": 3817
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "1foo",
                      "raw": "'1foo'",
                      "start": 3820,
                      "end": 3826
                    },
                    "start": 3820,
                    "end": 3826
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foofoo",
                      "raw": "'foofoo'",
                      "start": 3829,
                      "end": 3837
                    },
                    "start": 3829,
                    "end": 3837
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 3840,
                        "end": 3846
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 3852,
                        "end": 3854
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3846,
                        "end": 3852
                      }
                    ],
                    "start": 3840,
                    "end": 3854
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foox",
                      "raw": "'foox'",
                      "start": 3857,
                      "end": 3863
                    },
                    "start": 3857,
                    "end": 3863
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "xfoo",
                      "raw": "'xfoo'",
                      "start": 3866,
                      "end": 3872
                    },
                    "start": 3866,
                    "end": 3872
                  }
                ],
                "start": 3811,
                "end": 3872
              },
              "start": 3809,
              "end": 3872
            },
            "start": 3807,
            "end": 3872
          },
          "init": null,
          "definite": false,
          "start": 3807,
          "end": 3872
        }
      ],
      "declare": false,
      "start": 3803,
      "end": 3873
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                            "raw": "foo1",
                            "cooked": "foo1"
                          },
                          "tail": true,
                          "start": 3919,
                          "end": 3925
                        }
                      ],
                      "expressions": [],
                      "start": 3919,
                      "end": 3925
                    },
                    "start": 3919,
                    "end": 3925
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "1foo",
                      "raw": "'1foo'",
                      "start": 3928,
                      "end": 3934
                    },
                    "start": 3928,
                    "end": 3934
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foofoo",
                      "raw": "'foofoo'",
                      "start": 3937,
                      "end": 3945
                    },
                    "start": 3937,
                    "end": 3945
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 3948,
                        "end": 3954
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 3960,
                        "end": 3962
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3954,
                        "end": 3960
                      }
                    ],
                    "start": 3948,
                    "end": 3962
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foox",
                      "raw": "'foox'",
                      "start": 3965,
                      "end": 3971
                    },
                    "start": 3965,
                    "end": 3971
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "xfoo",
                      "raw": "'xfoo'",
                      "start": 3974,
                      "end": 3980
                    },
                    "start": 3974,
                    "end": 3980
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
                        "start": 3983,
                        "end": 3986
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": true,
                        "start": 3992,
                        "end": 3997
                      }
                    ],
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 3986,
                        "end": 3992
                      }
                    ],
                    "start": 3983,
                    "end": 3997
                  }
                ],
                "start": 3919,
                "end": 3997
              },
              "start": 3917,
              "end": 3997
            },
            "start": 3915,
            "end": 3997
          },
          "init": null,
          "definite": false,
          "start": 3915,
          "end": 3997
        }
      ],
      "declare": false,
      "start": 3911,
      "end": 3998
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
            "name": "bb",
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
                    "start": 4052,
                    "end": 4055
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 4061,
                    "end": 4063
                  }
                ],
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 4055,
                    "end": 4061
                  }
                ],
                "start": 4052,
                "end": 4063
              },
              "start": 4050,
              "end": 4063
            },
            "start": 4048,
            "end": 4063
          },
          "init": null,
          "definite": false,
          "start": 4048,
          "end": 4063
        }
      ],
      "declare": false,
      "start": 4044,
      "end": 4064
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
            "name": "bb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                        "start": 4073,
                        "end": 4076
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 4082,
                        "end": 4084
                      }
                    ],
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 4076,
                        "end": 4082
                      }
                    ],
                    "start": 4073,
                    "end": 4084
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "0",
                      "raw": "'0'",
                      "start": 4087,
                      "end": 4090
                    },
                    "start": 4087,
                    "end": 4090
                  }
                ],
                "start": 4073,
                "end": 4090
              },
              "start": 4071,
              "end": 4090
            },
            "start": 4069,
            "end": 4090
          },
          "init": null,
          "definite": false,
          "start": 4069,
          "end": 4090
        }
      ],
      "declare": false,
      "start": 4065,
      "end": 4091
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2S",
        "optional": false,
        "typeAnnotation": null,
        "start": 4139,
        "end": 4142
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 4143,
              "end": 4144
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4153,
              "end": 4159
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4143,
            "end": 4159
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 4161,
              "end": 4162
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4171,
              "end": 4177
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4161,
            "end": 4177
          }
        ],
        "start": 4142,
        "end": 4178
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
            "start": 4181,
            "end": 4184
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 4185,
            "end": 4188
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 4189,
            "end": 4191
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
              "start": 4184,
              "end": 4185
            },
            "typeArguments": null,
            "start": 4184,
            "end": 4185
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 4188,
              "end": 4189
            },
            "typeArguments": null,
            "start": 4188,
            "end": 4189
          }
        ],
        "start": 4181,
        "end": 4191
      },
      "declare": false,
      "start": 4134,
      "end": 4192
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S10",
        "optional": false,
        "typeAnnotation": null,
        "start": 4199,
        "end": 4202
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
            "start": 4205,
            "end": 4208
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 4214,
            "end": 4216
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 4208,
            "end": 4214
          }
        ],
        "start": 4205,
        "end": 4216
      },
      "declare": false,
      "start": 4194,
      "end": 4217
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S11",
        "optional": false,
        "typeAnnotation": null,
        "start": 4234,
        "end": 4237
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
            "start": 4240,
            "end": 4243
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 4249,
            "end": 4252
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 4258,
            "end": 4261
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 4267,
            "end": 4269
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 4243,
            "end": 4249
          },
          {
            "type": "TSStringKeyword",
            "start": 4252,
            "end": 4258
          },
          {
            "type": "TSStringKeyword",
            "start": 4261,
            "end": 4267
          }
        ],
        "start": 4240,
        "end": 4269
      },
      "declare": false,
      "start": 4229,
      "end": 4270
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S12",
        "optional": false,
        "typeAnnotation": null,
        "start": 4287,
        "end": 4290
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T2S",
          "optional": false,
          "typeAnnotation": null,
          "start": 4293,
          "end": 4296
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 4297,
              "end": 4303
            },
            {
              "type": "TSStringKeyword",
              "start": 4305,
              "end": 4311
            }
          ],
          "start": 4296,
          "end": 4312
        },
        "start": 4293,
        "end": 4312
      },
      "declare": false,
      "start": 4282,
      "end": 4313
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4335,
        "end": 4338
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
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4342,
                  "end": 4345
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-",
                    "cooked": "-"
                  },
                  "tail": false,
                  "start": 4351,
                  "end": 4355
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 4361,
                  "end": 4363
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4345,
                  "end": 4351
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4355,
                  "end": 4361
                }
              ],
              "start": 4342,
              "end": 4363
            },
            "start": 4340,
            "end": 4363
          },
          "start": 4339,
          "end": 4363
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
                  "typeAnnotation": null,
                  "start": 4375,
                  "end": 4377
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4380,
                    "end": 4381
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 4385,
                    "end": 4387
                  },
                  "start": 4380,
                  "end": 4387
                },
                "definite": false,
                "start": 4375,
                "end": 4387
              }
            ],
            "declare": false,
            "start": 4371,
            "end": 4388
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
                  "typeAnnotation": null,
                  "start": 4408,
                  "end": 4410
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4413,
                    "end": 4414
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 4418,
                    "end": 4420
                  },
                  "start": 4413,
                  "end": 4420
                },
                "definite": false,
                "start": 4408,
                "end": 4420
              }
            ],
            "declare": false,
            "start": 4404,
            "end": 4421
          }
        ],
        "start": 4365,
        "end": 4449
      },
      "expression": false,
      "start": 4326,
      "end": 4449
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id",
          "optional": false,
          "typeAnnotation": null,
          "start": 4485,
          "end": 4487
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TA",
                "optional": false,
                "typeAnnotation": null,
                "start": 4488,
                "end": 4490
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4488,
              "end": 4490
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TId",
                "optional": false,
                "typeAnnotation": null,
                "start": 4492,
                "end": 4495
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 4504,
                "end": 4510
              },
              "default": {
                "type": "TSStringKeyword",
                "start": 4513,
                "end": 4519
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4492,
              "end": 4519
            }
          ],
          "start": 4487,
          "end": 4520
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
              "start": 4523,
              "end": 4526
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "-",
                "cooked": "-"
              },
              "tail": false,
              "start": 4529,
              "end": 4533
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 4536,
              "end": 4538
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TId",
                "optional": false,
                "typeAnnotation": null,
                "start": 4526,
                "end": 4529
              },
              "typeArguments": null,
              "start": 4526,
              "end": 4529
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TId",
                "optional": false,
                "typeAnnotation": null,
                "start": 4533,
                "end": 4536
              },
              "typeArguments": null,
              "start": 4533,
              "end": 4536
            }
          ],
          "start": 4523,
          "end": 4538
        },
        "declare": false,
        "start": 4480,
        "end": 4539
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4473,
      "end": 4539
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AA",
          "optional": false,
          "typeAnnotation": null,
          "start": 4554,
          "end": 4556
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 4557,
          "end": 4559
        },
        "abstract": false,
        "declare": false,
        "start": 4548,
        "end": 4559
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4541,
      "end": 4559
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BB",
          "optional": false,
          "typeAnnotation": null,
          "start": 4583,
          "end": 4585
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSAbstractMethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 4601,
                "end": 4604
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4609,
                          "end": 4611
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AA",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4612,
                                "end": 4614
                              },
                              "typeArguments": null,
                              "start": 4612,
                              "end": 4614
                            }
                          ],
                          "start": 4611,
                          "end": 4615
                        },
                        "start": 4609,
                        "end": 4615
                      },
                      "start": 4607,
                      "end": 4615
                    },
                    "start": 4605,
                    "end": 4615
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4618,
                    "end": 4622
                  },
                  "start": 4616,
                  "end": 4622
                },
                "body": null,
                "expression": false,
                "start": 4604,
                "end": 4623
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4592,
              "end": 4623
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "update",
                "optional": false,
                "typeAnnotation": null,
                "start": 4628,
                "end": 4634
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4639,
                          "end": 4641
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AA",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4642,
                                "end": 4644
                              },
                              "typeArguments": null,
                              "start": 4642,
                              "end": 4644
                            }
                          ],
                          "start": 4641,
                          "end": 4645
                        },
                        "start": 4639,
                        "end": 4645
                      },
                      "start": 4637,
                      "end": 4645
                    },
                    "start": 4635,
                    "end": 4645
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4648,
                    "end": 4652
                  },
                  "start": 4646,
                  "end": 4652
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
                            "type": "ThisExpression",
                            "start": 4663,
                            "end": 4667
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "get",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4668,
                            "end": 4671
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4663,
                          "end": 4671
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "TSNonNullExpression",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "id",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4672,
                              "end": 4674
                            },
                            "start": 4672,
                            "end": 4675
                          }
                        ],
                        "optional": false,
                        "start": 4663,
                        "end": 4676
                      },
                      "directive": null,
                      "start": 4663,
                      "end": 4677
                    }
                  ],
                  "start": 4653,
                  "end": 4683
                },
                "expression": false,
                "start": 4634,
                "end": 4683
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4628,
              "end": 4683
            }
          ],
          "start": 4586,
          "end": 4685
        },
        "abstract": true,
        "declare": false,
        "start": 4568,
        "end": 4685
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4561,
      "end": 4685
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conversionTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 4787,
        "end": 4801
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "groupName",
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
                    "value": "downcast",
                    "raw": "\"downcast\"",
                    "start": 4815,
                    "end": 4825
                  },
                  "start": 4815,
                  "end": 4825
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "dataDowncast",
                    "raw": "\"dataDowncast\"",
                    "start": 4828,
                    "end": 4842
                  },
                  "start": 4828,
                  "end": 4842
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "editingDowncast",
                    "raw": "\"editingDowncast\"",
                    "start": 4845,
                    "end": 4862
                  },
                  "start": 4845,
                  "end": 4862
                },
                {
                  "type": "TSIntersectionType",
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
                          "start": 4865,
                          "end": 4868
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "Downcast",
                            "cooked": "Downcast"
                          },
                          "tail": true,
                          "start": 4874,
                          "end": 4884
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4868,
                          "end": 4874
                        }
                      ],
                      "start": 4865,
                      "end": 4884
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 4887,
                      "end": 4889
                    }
                  ],
                  "start": 4865,
                  "end": 4889
                }
              ],
              "start": 4813,
              "end": 4889
            },
            "start": 4811,
            "end": 4889
          },
          "start": 4802,
          "end": 4889
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 4891,
        "end": 4893
      },
      "expression": false,
      "start": 4778,
      "end": 4893
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "conversionTest",
          "optional": false,
          "typeAnnotation": null,
          "start": 4894,
          "end": 4908
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "testDowncast",
            "raw": "\"testDowncast\"",
            "start": 4909,
            "end": 4923
          }
        ],
        "optional": false,
        "start": 4894,
        "end": 4924
      },
      "directive": null,
      "start": 4894,
      "end": 4925
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conversionTest2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4935,
        "end": 4950
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "groupName",
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
                    "value": "downcast",
                    "raw": "\"downcast\"",
                    "start": 4964,
                    "end": 4974
                  },
                  "start": 4964,
                  "end": 4974
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "dataDowncast",
                    "raw": "\"dataDowncast\"",
                    "start": 4977,
                    "end": 4991
                  },
                  "start": 4977,
                  "end": 4991
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "editingDowncast",
                    "raw": "\"editingDowncast\"",
                    "start": 4994,
                    "end": 5011
                  },
                  "start": 4994,
                  "end": 5011
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 5014,
                      "end": 5016
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
                          "start": 5019,
                          "end": 5022
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "Downcast",
                            "cooked": "Downcast"
                          },
                          "tail": true,
                          "start": 5028,
                          "end": 5038
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5022,
                          "end": 5028
                        }
                      ],
                      "start": 5019,
                      "end": 5038
                    }
                  ],
                  "start": 5014,
                  "end": 5038
                }
              ],
              "start": 4962,
              "end": 5038
            },
            "start": 4960,
            "end": 5038
          },
          "start": 4951,
          "end": 5038
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 5040,
        "end": 5042
      },
      "expression": false,
      "start": 4926,
      "end": 5042
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "conversionTest2",
          "optional": false,
          "typeAnnotation": null,
          "start": 5043,
          "end": 5058
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "testDowncast",
            "raw": "\"testDowncast\"",
            "start": 5059,
            "end": 5073
          }
        ],
        "optional": false,
        "start": 5043,
        "end": 5074
      },
      "directive": null,
      "start": 5043,
      "end": 5075
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conversionTest3",
        "optional": false,
        "typeAnnotation": null,
        "start": 5085,
        "end": 5100
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "groupName",
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
                    "value": "downcast",
                    "raw": "\"downcast\"",
                    "start": 5114,
                    "end": 5124
                  },
                  "start": 5114,
                  "end": 5124
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "dataDowncast",
                    "raw": "\"dataDowncast\"",
                    "start": 5127,
                    "end": 5141
                  },
                  "start": 5127,
                  "end": 5141
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "editingDowncast",
                    "raw": "\"editingDowncast\"",
                    "start": 5144,
                    "end": 5161
                  },
                  "start": 5144,
                  "end": 5161
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
                      "start": 5164,
                      "end": 5167
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "Downcast",
                        "cooked": "Downcast"
                      },
                      "tail": true,
                      "start": 5178,
                      "end": 5188
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5167,
                          "end": 5173
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 5176,
                          "end": 5178
                        }
                      ],
                      "start": 5167,
                      "end": 5178
                    }
                  ],
                  "start": 5164,
                  "end": 5188
                }
              ],
              "start": 5112,
              "end": 5188
            },
            "start": 5110,
            "end": 5188
          },
          "start": 5101,
          "end": 5188
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 5190,
        "end": 5192
      },
      "expression": false,
      "start": 5076,
      "end": 5192
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "conversionTest3",
          "optional": false,
          "typeAnnotation": null,
          "start": 5193,
          "end": 5208
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "testDowncast",
            "raw": "\"testDowncast\"",
            "start": 5209,
            "end": 5223
          }
        ],
        "optional": false,
        "start": 5193,
        "end": 5224
      },
      "directive": null,
      "start": 5193,
      "end": 5225
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conversionTest4",
        "optional": false,
        "typeAnnotation": null,
        "start": 5235,
        "end": 5250
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "groupName",
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
                    "value": "downcast",
                    "raw": "\"downcast\"",
                    "start": 5264,
                    "end": 5274
                  },
                  "start": 5264,
                  "end": 5274
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "dataDowncast",
                    "raw": "\"dataDowncast\"",
                    "start": 5277,
                    "end": 5291
                  },
                  "start": 5277,
                  "end": 5291
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "editingDowncast",
                    "raw": "\"editingDowncast\"",
                    "start": 5294,
                    "end": 5311
                  },
                  "start": 5294,
                  "end": 5311
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
                      "start": 5314,
                      "end": 5317
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "Downcast",
                        "cooked": "Downcast"
                      },
                      "tail": true,
                      "start": 5328,
                      "end": 5338
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 5317,
                          "end": 5319
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 5322,
                          "end": 5328
                        }
                      ],
                      "start": 5317,
                      "end": 5328
                    }
                  ],
                  "start": 5314,
                  "end": 5338
                }
              ],
              "start": 5262,
              "end": 5338
            },
            "start": 5260,
            "end": 5338
          },
          "start": 5251,
          "end": 5338
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 5340,
        "end": 5342
      },
      "expression": false,
      "start": 5226,
      "end": 5342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "conversionTest4",
          "optional": false,
          "typeAnnotation": null,
          "start": 5343,
          "end": 5358
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "testDowncast",
            "raw": "\"testDowncast\"",
            "start": 5359,
            "end": 5373
          }
        ],
        "optional": false,
        "start": 5343,
        "end": 5374
      },
      "directive": null,
      "start": 5343,
      "end": 5375
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5386,
        "end": 5389
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
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
                  "start": 5395,
                  "end": 5398
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "Test",
                    "cooked": "Test"
                  },
                  "tail": true,
                  "start": 5425,
                  "end": 5431
                }
              ],
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "a",
                            "cooked": "a"
                          },
                          "tail": false,
                          "start": 5398,
                          "end": 5402
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 5408,
                          "end": 5410
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5402,
                          "end": 5408
                        }
                      ],
                      "start": 5398,
                      "end": 5410
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
                          "start": 5413,
                          "end": 5416
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "a",
                            "cooked": "a"
                          },
                          "tail": true,
                          "start": 5422,
                          "end": 5425
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5416,
                          "end": 5422
                        }
                      ],
                      "start": 5413,
                      "end": 5425
                    }
                  ],
                  "start": 5398,
                  "end": 5425
                }
              ],
              "start": 5395,
              "end": 5431
            },
            "start": 5393,
            "end": 5431
          },
          "start": 5390,
          "end": 5431
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 5433,
        "end": 5435
      },
      "expression": false,
      "start": 5377,
      "end": 5435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 5436,
          "end": 5439
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "abaTest",
            "raw": "\"abaTest\"",
            "start": 5440,
            "end": 5449
          }
        ],
        "optional": false,
        "start": 5436,
        "end": 5450
      },
      "directive": null,
      "start": 5436,
      "end": 5451
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 5458,
          "end": 5461
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "abcTest",
            "raw": "\"abcTest\"",
            "start": 5462,
            "end": 5471
          }
        ],
        "optional": false,
        "start": 5458,
        "end": 5472
      },
      "directive": null,
      "start": 5458,
      "end": 5473
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 5482
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "RequiresLeadingSlash",
    "start": 5,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Template",
    "value": "`/${",
    "start": 28,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 38,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "RequiresLeadingSlash",
    "start": 58,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "String",
    "value": "\"/bin\"",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "RequiresLeadingSlash",
    "start": 109,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"no slash\"",
    "start": 132,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 145,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Protocol",
    "start": 150,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 161,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 179,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 200,
    "end": 201
  },
  {
    "type": "Template",
    "value": "}://${",
    "start": 201,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 207,
    "end": 208
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 212,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "download",
    "start": 221,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "hostSpec",
    "start": 230,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "Protocol",
    "start": 240,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 248,
    "end": 249
  },
  {
    "type": "String",
    "value": "\"http\"",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 256,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"https\"",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 266,
    "end": 267
  },
  {
    "type": "String",
    "value": "\"ftp\"",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 275,
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
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "download",
    "start": 308,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "String",
    "value": "\"http://example.com/protocol\"",
    "start": 317,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "download",
    "start": 379,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388
  },
  {
    "type": "String",
    "value": "\"example.com/noprotocol\"",
    "start": 388,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "download",
    "start": 451,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "String",
    "value": "\"gopher://example.com/protocol\"",
    "start": 460,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 495,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "RequiresLeadingSlash",
    "start": 504,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 525,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 533,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 540,
    "end": 541
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 549,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 557,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 564,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 572,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "bools",
    "start": 581,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 590,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 593,
    "end": 600
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 600,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 605,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "bools",
    "start": 617,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 623,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "bools",
    "start": 632,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 638,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "bools",
    "start": 659,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "String",
    "value": "\"other\"",
    "start": 665,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 676,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "Pat",
    "start": 681,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 687,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 695,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 702,
    "end": 703
  },
  {
    "type": "Null",
    "value": "null",
    "start": 704,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 711,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 722,
    "end": 723
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 724,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 727,
    "end": 728
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 728,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 731,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 739,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "nullishes",
    "start": 748,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "Pat",
    "start": 761,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 764,
    "end": 765
  },
  {
    "type": "Null",
    "value": "null",
    "start": 765,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 772,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 785,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "nullishes",
    "start": 797,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "String",
    "value": "\"null\"",
    "start": 807,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "nullishes",
    "start": 816,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 826,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "nullishes",
    "start": 851,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 861,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "nullishes",
    "start": 867,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 876,
    "end": 877
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 877,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "nullishes",
    "start": 887,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 896,
    "end": 897
  },
  {
    "type": "String",
    "value": "\"NaN\"",
    "start": 897,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "nullishes",
    "start": 905,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 915,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "nullishes",
    "start": 920,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 929,
    "end": 930
  },
  {
    "type": "String",
    "value": "\"other\"",
    "start": 930,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 941,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 949,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 958,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 969,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 972,
    "end": 978
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 978,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 983,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1018,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1032,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "String",
    "value": "\"-1\"",
    "start": 1040,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1047,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 1055,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1061,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "String",
    "value": "\"0b1\"",
    "start": 1069,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1077,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "String",
    "value": "\"0x1\"",
    "start": 1085,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "numbers",
    "start": 1093,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "String",
    "value": "\"0o1\"",
    "start": 1101,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "numbers",
    "start": 1109,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "String",
    "value": "\"1e21\"",
    "start": 1117,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1126,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "String",
    "value": "\"1E21\"",
    "start": 1134,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1143,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "String",
    "value": "\"1e-21\"",
    "start": 1151,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1161,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "String",
    "value": "\"1E-21\"",
    "start": 1169,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1179,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "String",
    "value": "\"1.1\"",
    "start": 1187,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1195,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "String",
    "value": "\"-1.1\"",
    "start": 1203,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1212,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "String",
    "value": "\"-1.1e-10\"",
    "start": 1220,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1233,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "String",
    "value": "\"-1.1E-10\"",
    "start": 1241,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1254,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "String",
    "value": "\"1.1e-10\"",
    "start": 1262,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1335,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "String",
    "value": "\"?\"",
    "start": 1343,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1349,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "String",
    "value": "\"NaN\"",
    "start": 1357,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1365,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "String",
    "value": "\"Infinity\"",
    "start": 1373,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1386,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "String",
    "value": "\"+Infinity\"",
    "start": 1394,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1408,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "String",
    "value": "\"-Infinity\"",
    "start": 1416,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "numbers",
    "start": 1430,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "String",
    "value": "\"1_000\"",
    "start": 1438,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1518,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "String",
    "value": "\"a10\"",
    "start": 1526,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1534,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "String",
    "value": "\"10a\"",
    "start": 1542,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1601,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "String",
    "value": "\"- 1\"",
    "start": 1609,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 1617,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "String",
    "value": "\"-/**/1\"",
    "start": 1625,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1637,
    "end": 1644
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1645,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 1654,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1665,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1668,
    "end": 1674
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1674,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1679,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 1714,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 1722,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 1728,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "String",
    "value": "\"-1\"",
    "start": 1736,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 1743,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 1751,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 1757,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "String",
    "value": "\"0b1\"",
    "start": 1765,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 1773,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "String",
    "value": "\"0x1\"",
    "start": 1781,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 1789,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "String",
    "value": "\"0o1\"",
    "start": 1797,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 1901,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "String",
    "value": "\"1e21\"",
    "start": 1909,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 1918,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "String",
    "value": "\"1E21\"",
    "start": 1926,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 1935,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "String",
    "value": "\"1e-21\"",
    "start": 1943,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 1953,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "String",
    "value": "\"1E-21\"",
    "start": 1961,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2026,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "String",
    "value": "\"1.0\"",
    "start": 2034,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2042,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "String",
    "value": "\"1.1\"",
    "start": 2050,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2058,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "String",
    "value": "\"-1.1\"",
    "start": 2066,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2075,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "String",
    "value": "\"-1.1e-10\"",
    "start": 2083,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2096,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "String",
    "value": "\"-1.1E-10\"",
    "start": 2104,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2117,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "String",
    "value": "\"1.1e-10\"",
    "start": 2125,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2198,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "String",
    "value": "\"?\"",
    "start": 2206,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2212,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "String",
    "value": "\"NaN\"",
    "start": 2220,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2228,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "String",
    "value": "\"Infinity\"",
    "start": 2236,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2249,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "String",
    "value": "\"+Infinity\"",
    "start": 2257,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2271,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "String",
    "value": "\"-Infinity\"",
    "start": 2279,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2293,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "String",
    "value": "\"1_000\"",
    "start": 2301,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2362,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "String",
    "value": "\"- 1\"",
    "start": 2370,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2378,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "String",
    "value": "\"-/**/1\"",
    "start": 2386,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2467,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "String",
    "value": "\"a10n\"",
    "start": 2475,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2484,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "String",
    "value": "\"10an\"",
    "start": 2492,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2646,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "String",
    "value": "\"1n\"",
    "start": 2654,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2661,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "String",
    "value": "\"-1n\"",
    "start": 2669,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2677,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "String",
    "value": "\"0n\"",
    "start": 2685,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2692,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "String",
    "value": "\"0b1n\"",
    "start": 2700,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2709,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "String",
    "value": "\"0x1n\"",
    "start": 2717,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2726,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "String",
    "value": "\"0o1n\"",
    "start": 2734,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2743,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "String",
    "value": "\"1e21n\"",
    "start": 2751,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2761,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "String",
    "value": "\"1E21n\"",
    "start": 2769,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2779,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "String",
    "value": "\"1e-21n\"",
    "start": 2787,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2798,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "String",
    "value": "\"1E-21n\"",
    "start": 2806,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2817,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "String",
    "value": "\"1.1n\"",
    "start": 2825,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2834,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "String",
    "value": "\"-1.1n\"",
    "start": 2842,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2852,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "String",
    "value": "\"-1.1e-10n\"",
    "start": 2860,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2874,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "String",
    "value": "\"-1.1E-10n\"",
    "start": 2882,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Identifier",
    "value": "bigints",
    "start": 2896,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "String",
    "value": "\"1.1e-10n\"",
    "start": 2904,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2918,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "AStr",
    "start": 2923,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 2930,
    "end": 2934
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2934,
    "end": 2940
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2940,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2944,
    "end": 2948
  },
  {
    "type": "Identifier",
    "value": "ANum",
    "start": 2949,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 2956,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2960,
    "end": 2966
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2966,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2970,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "AAny",
    "start": 2975,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 2982,
    "end": 2986
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2986,
    "end": 2989
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2989,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2994,
    "end": 3001
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3002,
    "end": 3005
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 3006,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Identifier",
    "value": "AStr",
    "start": 3011,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3017,
    "end": 3024
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3025,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 3029,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Identifier",
    "value": "ANum",
    "start": 3034,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3040,
    "end": 3047
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3048,
    "end": 3051
  },
  {
    "type": "Identifier",
    "value": "anyish",
    "start": 3052,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Identifier",
    "value": "AAny",
    "start": 3060,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 3077,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 3083,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Identifier",
    "value": "anyish",
    "start": 3088,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Template",
    "value": "`bno`",
    "start": 3097,
    "end": 3102
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 3110,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 3116,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Identifier",
    "value": "anyish",
    "start": 3121,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 3130,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 3135,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "anyish",
    "start": 3141,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Identifier",
    "value": "anyish",
    "start": 3149,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 3158,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 3163,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Identifier",
    "value": "anyish",
    "start": 3169,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Identifier",
    "value": "anyish",
    "start": 3177,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Template",
    "value": "`aok`",
    "start": 3186,
    "end": 3191
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3253,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "AGen",
    "start": 3258,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3265,
    "end": 3272
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3273,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3282,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 3293,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 3300,
    "end": 3304
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3305,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3310,
    "end": 3315
  },
  {
    "type": "Identifier",
    "value": "shouldWork1",
    "start": 3316,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Identifier",
    "value": "AGen",
    "start": 3329,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3334,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3340,
    "end": 3341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3342,
    "end": 3343
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3344,
    "end": 3348
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3349,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3352,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3356,
    "end": 3358
  },
  {
    "type": "Identifier",
    "value": "AGen",
    "start": 3359,
    "end": 3363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "String",
    "value": "\"yes\"",
    "start": 3364,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3372,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "shouldWork2",
    "start": 3378,
    "end": 3389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Identifier",
    "value": "AGen",
    "start": 3391,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3396,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3406,
    "end": 3410
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3411,
    "end": 3413
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3414,
    "end": 3417
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3418,
    "end": 3420
  },
  {
    "type": "Identifier",
    "value": "AGen",
    "start": 3421,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3426,
    "end": 3432
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3475,
    "end": 3479
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3484,
    "end": 3487
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3487,
    "end": 3493
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3493,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3497,
    "end": 3501
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3502,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3506,
    "end": 3509
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 3510,
    "end": 3514
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3515,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3519,
    "end": 3524
  },
  {
    "type": "Identifier",
    "value": "exampleBad",
    "start": 3525,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "String",
    "value": "\"anything\"",
    "start": 3541,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3562,
    "end": 3567
  },
  {
    "type": "Identifier",
    "value": "exampleGood",
    "start": 3568,
    "end": 3579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "String",
    "value": "\"1 2\"",
    "start": 3585,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3590,
    "end": 3591
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3621,
    "end": 3624
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 3625,
    "end": 3627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3627,
    "end": 3628
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 3629,
    "end": 3632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3634,
    "end": 3637
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 3638,
    "end": 3640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3640,
    "end": 3641
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 3642,
    "end": 3645
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3648,
    "end": 3651
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3651,
    "end": 3657
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3657,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3733,
    "end": 3736
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 3737,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 3741,
    "end": 3747
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3747,
    "end": 3753
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3753,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "String",
    "value": "'foo1'",
    "start": 3758,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "String",
    "value": "'1foo'",
    "start": 3767,
    "end": 3773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3803,
    "end": 3806
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 3807,
    "end": 3809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Template",
    "value": "`foo1`",
    "start": 3811,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "String",
    "value": "'1foo'",
    "start": 3820,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "String",
    "value": "'foofoo'",
    "start": 3829,
    "end": 3837
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 3840,
    "end": 3846
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3846,
    "end": 3852
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3852,
    "end": 3854
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "String",
    "value": "'foox'",
    "start": 3857,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "String",
    "value": "'xfoo'",
    "start": 3866,
    "end": 3872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3911,
    "end": 3914
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 3915,
    "end": 3917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3917,
    "end": 3918
  },
  {
    "type": "Template",
    "value": "`foo1`",
    "start": 3919,
    "end": 3925
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "String",
    "value": "'1foo'",
    "start": 3928,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "String",
    "value": "'foofoo'",
    "start": 3937,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3946,
    "end": 3947
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 3948,
    "end": 3954
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3954,
    "end": 3960
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3960,
    "end": 3962
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3963,
    "end": 3964
  },
  {
    "type": "String",
    "value": "'foox'",
    "start": 3965,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "String",
    "value": "'xfoo'",
    "start": 3974,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3983,
    "end": 3986
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3986,
    "end": 3992
  },
  {
    "type": "Template",
    "value": "}foo`",
    "start": 3992,
    "end": 3997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4044,
    "end": 4047
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 4048,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4052,
    "end": 4055
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4055,
    "end": 4061
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4061,
    "end": 4063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4065,
    "end": 4068
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 4069,
    "end": 4071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4073,
    "end": 4076
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4076,
    "end": 4082
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4082,
    "end": 4084
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4085,
    "end": 4086
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 4087,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4134,
    "end": 4138
  },
  {
    "type": "Identifier",
    "value": "T2S",
    "start": 4139,
    "end": 4142
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4145,
    "end": 4152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4153,
    "end": 4159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4161,
    "end": 4162
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4163,
    "end": 4170
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4171,
    "end": 4177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4177,
    "end": 4178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4179,
    "end": 4180
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4181,
    "end": 4184
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 4185,
    "end": 4188
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4188,
    "end": 4189
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4189,
    "end": 4191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4191,
    "end": 4192
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4194,
    "end": 4198
  },
  {
    "type": "Identifier",
    "value": "S10",
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
    "type": "Template",
    "value": "`${",
    "start": 4205,
    "end": 4208
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4208,
    "end": 4214
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4214,
    "end": 4216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4229,
    "end": 4233
  },
  {
    "type": "Identifier",
    "value": "S11",
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
    "type": "Template",
    "value": "`${",
    "start": 4240,
    "end": 4243
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4243,
    "end": 4249
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 4249,
    "end": 4252
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4252,
    "end": 4258
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 4258,
    "end": 4261
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4261,
    "end": 4267
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4267,
    "end": 4269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4269,
    "end": 4270
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4282,
    "end": 4286
  },
  {
    "type": "Identifier",
    "value": "S12",
    "start": 4287,
    "end": 4290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4291,
    "end": 4292
  },
  {
    "type": "Identifier",
    "value": "T2S",
    "start": 4293,
    "end": 4296
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4296,
    "end": 4297
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4297,
    "end": 4303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4305,
    "end": 4311
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4311,
    "end": 4312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4312,
    "end": 4313
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4326,
    "end": 4334
  },
  {
    "type": "Identifier",
    "value": "ff1",
    "start": 4335,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4339,
    "end": 4340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4340,
    "end": 4341
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4342,
    "end": 4345
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4345,
    "end": 4351
  },
  {
    "type": "Template",
    "value": "}-${",
    "start": 4351,
    "end": 4355
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4355,
    "end": 4361
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4361,
    "end": 4363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4365,
    "end": 4366
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4371,
    "end": 4374
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 4375,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4382,
    "end": 4384
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4385,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4404,
    "end": 4407
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 4408,
    "end": 4410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4411,
    "end": 4412
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4413,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 4415,
    "end": 4417
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4418,
    "end": 4420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4448,
    "end": 4449
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4473,
    "end": 4479
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4480,
    "end": 4484
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 4485,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Identifier",
    "value": "TA",
    "start": 4488,
    "end": 4490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4490,
    "end": 4491
  },
  {
    "type": "Identifier",
    "value": "TId",
    "start": 4492,
    "end": 4495
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4496,
    "end": 4503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4504,
    "end": 4510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4511,
    "end": 4512
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4513,
    "end": 4519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4523,
    "end": 4526
  },
  {
    "type": "Identifier",
    "value": "TId",
    "start": 4526,
    "end": 4529
  },
  {
    "type": "Template",
    "value": "}-${",
    "start": 4529,
    "end": 4533
  },
  {
    "type": "Identifier",
    "value": "TId",
    "start": 4533,
    "end": 4536
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4536,
    "end": 4538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4538,
    "end": 4539
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4541,
    "end": 4547
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4548,
    "end": 4553
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 4554,
    "end": 4556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4558,
    "end": 4559
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4561,
    "end": 4567
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 4568,
    "end": 4576
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4577,
    "end": 4582
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 4583,
    "end": 4585
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4586,
    "end": 4587
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 4592,
    "end": 4600
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 4601,
    "end": 4604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4604,
    "end": 4605
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 4605,
    "end": 4607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 4609,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 4612,
    "end": 4614
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4615,
    "end": 4616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4616,
    "end": 4617
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4618,
    "end": 4622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4622,
    "end": 4623
  },
  {
    "type": "Identifier",
    "value": "update",
    "start": 4628,
    "end": 4634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4634,
    "end": 4635
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 4635,
    "end": 4637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4637,
    "end": 4638
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 4639,
    "end": 4641
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4641,
    "end": 4642
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 4642,
    "end": 4644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4644,
    "end": 4645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4645,
    "end": 4646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4646,
    "end": 4647
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4648,
    "end": 4652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4663,
    "end": 4667
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 4668,
    "end": 4671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4671,
    "end": 4672
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 4672,
    "end": 4674
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4674,
    "end": 4675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4675,
    "end": 4676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4676,
    "end": 4677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4682,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4684,
    "end": 4685
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4778,
    "end": 4786
  },
  {
    "type": "Identifier",
    "value": "conversionTest",
    "start": 4787,
    "end": 4801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4801,
    "end": 4802
  },
  {
    "type": "Identifier",
    "value": "groupName",
    "start": 4802,
    "end": 4811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4811,
    "end": 4812
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4813,
    "end": 4814
  },
  {
    "type": "String",
    "value": "\"downcast\"",
    "start": 4815,
    "end": 4825
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "String",
    "value": "\"dataDowncast\"",
    "start": 4828,
    "end": 4842
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4843,
    "end": 4844
  },
  {
    "type": "String",
    "value": "\"editingDowncast\"",
    "start": 4845,
    "end": 4862
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4863,
    "end": 4864
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4865,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4868,
    "end": 4874
  },
  {
    "type": "Template",
    "value": "}Downcast`",
    "start": 4874,
    "end": 4884
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4885,
    "end": 4886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4887,
    "end": 4888
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4888,
    "end": 4889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4889,
    "end": 4890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4891,
    "end": 4892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4892,
    "end": 4893
  },
  {
    "type": "Identifier",
    "value": "conversionTest",
    "start": 4894,
    "end": 4908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4908,
    "end": 4909
  },
  {
    "type": "String",
    "value": "\"testDowncast\"",
    "start": 4909,
    "end": 4923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4923,
    "end": 4924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4924,
    "end": 4925
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4926,
    "end": 4934
  },
  {
    "type": "Identifier",
    "value": "conversionTest2",
    "start": 4935,
    "end": 4950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4950,
    "end": 4951
  },
  {
    "type": "Identifier",
    "value": "groupName",
    "start": 4951,
    "end": 4960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4960,
    "end": 4961
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4962,
    "end": 4963
  },
  {
    "type": "String",
    "value": "\"downcast\"",
    "start": 4964,
    "end": 4974
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4975,
    "end": 4976
  },
  {
    "type": "String",
    "value": "\"dataDowncast\"",
    "start": 4977,
    "end": 4991
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4992,
    "end": 4993
  },
  {
    "type": "String",
    "value": "\"editingDowncast\"",
    "start": 4994,
    "end": 5011
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5012,
    "end": 5013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5014,
    "end": 5015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5015,
    "end": 5016
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5017,
    "end": 5018
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5019,
    "end": 5022
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5022,
    "end": 5028
  },
  {
    "type": "Template",
    "value": "}Downcast`",
    "start": 5028,
    "end": 5038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5038,
    "end": 5039
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5040,
    "end": 5041
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5041,
    "end": 5042
  },
  {
    "type": "Identifier",
    "value": "conversionTest2",
    "start": 5043,
    "end": 5058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5058,
    "end": 5059
  },
  {
    "type": "String",
    "value": "\"testDowncast\"",
    "start": 5059,
    "end": 5073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5073,
    "end": 5074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5074,
    "end": 5075
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5076,
    "end": 5084
  },
  {
    "type": "Identifier",
    "value": "conversionTest3",
    "start": 5085,
    "end": 5100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5100,
    "end": 5101
  },
  {
    "type": "Identifier",
    "value": "groupName",
    "start": 5101,
    "end": 5110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5110,
    "end": 5111
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5112,
    "end": 5113
  },
  {
    "type": "String",
    "value": "\"downcast\"",
    "start": 5114,
    "end": 5124
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5125,
    "end": 5126
  },
  {
    "type": "String",
    "value": "\"dataDowncast\"",
    "start": 5127,
    "end": 5141
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5142,
    "end": 5143
  },
  {
    "type": "String",
    "value": "\"editingDowncast\"",
    "start": 5144,
    "end": 5161
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5162,
    "end": 5163
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5164,
    "end": 5167
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5167,
    "end": 5173
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5174,
    "end": 5175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5176,
    "end": 5177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5177,
    "end": 5178
  },
  {
    "type": "Template",
    "value": "}Downcast`",
    "start": 5178,
    "end": 5188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5190,
    "end": 5191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5191,
    "end": 5192
  },
  {
    "type": "Identifier",
    "value": "conversionTest3",
    "start": 5193,
    "end": 5208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5208,
    "end": 5209
  },
  {
    "type": "String",
    "value": "\"testDowncast\"",
    "start": 5209,
    "end": 5223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5223,
    "end": 5224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5224,
    "end": 5225
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5226,
    "end": 5234
  },
  {
    "type": "Identifier",
    "value": "conversionTest4",
    "start": 5235,
    "end": 5250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5250,
    "end": 5251
  },
  {
    "type": "Identifier",
    "value": "groupName",
    "start": 5251,
    "end": 5260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5260,
    "end": 5261
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5262,
    "end": 5263
  },
  {
    "type": "String",
    "value": "\"downcast\"",
    "start": 5264,
    "end": 5274
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5275,
    "end": 5276
  },
  {
    "type": "String",
    "value": "\"dataDowncast\"",
    "start": 5277,
    "end": 5291
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "String",
    "value": "\"editingDowncast\"",
    "start": 5294,
    "end": 5311
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5312,
    "end": 5313
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5314,
    "end": 5317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5317,
    "end": 5318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5318,
    "end": 5319
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5320,
    "end": 5321
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5322,
    "end": 5328
  },
  {
    "type": "Template",
    "value": "}Downcast`",
    "start": 5328,
    "end": 5338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5338,
    "end": 5339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5340,
    "end": 5341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5341,
    "end": 5342
  },
  {
    "type": "Identifier",
    "value": "conversionTest4",
    "start": 5343,
    "end": 5358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5358,
    "end": 5359
  },
  {
    "type": "String",
    "value": "\"testDowncast\"",
    "start": 5359,
    "end": 5373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5373,
    "end": 5374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5374,
    "end": 5375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5377,
    "end": 5385
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5386,
    "end": 5389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5389,
    "end": 5390
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 5390,
    "end": 5393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5393,
    "end": 5394
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5395,
    "end": 5398
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 5398,
    "end": 5402
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5402,
    "end": 5408
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5408,
    "end": 5410
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5411,
    "end": 5412
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5413,
    "end": 5416
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5416,
    "end": 5422
  },
  {
    "type": "Template",
    "value": "}a`",
    "start": 5422,
    "end": 5425
  },
  {
    "type": "Template",
    "value": "}Test`",
    "start": 5425,
    "end": 5431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5431,
    "end": 5432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5433,
    "end": 5434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5434,
    "end": 5435
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5436,
    "end": 5439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5439,
    "end": 5440
  },
  {
    "type": "String",
    "value": "\"abaTest\"",
    "start": 5440,
    "end": 5449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5449,
    "end": 5450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5450,
    "end": 5451
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5458,
    "end": 5461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5461,
    "end": 5462
  },
  {
    "type": "String",
    "value": "\"abcTest\"",
    "start": 5462,
    "end": 5471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5471,
    "end": 5472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5472,
    "end": 5473
  }
]
```
