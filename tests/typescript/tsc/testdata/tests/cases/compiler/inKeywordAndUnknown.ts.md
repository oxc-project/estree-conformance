__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 32
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
              "type": "TSTypeLiteral",
              "members": [],
              "start": 36,
              "end": 38
            },
            "start": 34,
            "end": 38
          },
          "start": 33,
          "end": 38
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 43,
              "end": 50
            },
            "start": 41,
            "end": 50
          },
          "start": 40,
          "end": 50
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 64,
                  "end": 67
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                "start": 64,
                "end": 72
              },
              "prefix": true,
              "start": 62,
              "end": 73
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 85,
                  "end": 92
                }
              ],
              "start": 75,
              "end": 98
            },
            "alternate": null,
            "start": 58,
            "end": 98
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "directive": null,
            "start": 103,
            "end": 105
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 123
              },
              "prefix": true,
              "start": 121,
              "end": 123
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 135,
                  "end": 142
                }
              ],
              "start": 125,
              "end": 148
            },
            "alternate": null,
            "start": 117,
            "end": 148
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "directive": null,
            "start": 153,
            "end": 155
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 173,
                  "end": 176
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 181
                },
                "start": 173,
                "end": 181
              },
              "prefix": true,
              "start": 171,
              "end": 182
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 194,
                  "end": 201
                }
              ],
              "start": 184,
              "end": 207
            },
            "alternate": null,
            "start": 167,
            "end": 207
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 213
            },
            "directive": null,
            "start": 212,
            "end": 214
          }
        ],
        "start": 52,
        "end": 223
      },
      "expression": false,
      "start": 22,
      "end": 223
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isHTMLTable",
        "optional": false,
        "typeAnnotation": null,
        "start": 256,
        "end": 267
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "table",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 275,
              "end": 282
            },
            "start": 273,
            "end": 282
          },
          "start": 268,
          "end": 282
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 285,
          "end": 292
        },
        "start": 283,
        "end": 292
      },
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
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "table",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 313
                    },
                    "prefix": true,
                    "start": 307,
                    "end": 313
                  },
                  "prefix": true,
                  "start": 306,
                  "end": 313
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 322
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 334,
                    "end": 340
                  },
                  "start": 317,
                  "end": 340
                },
                "start": 306,
                "end": 340
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "html",
                  "raw": "'html'",
                  "start": 344,
                  "end": 350
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "table",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 359
                },
                "start": 344,
                "end": 359
              },
              "start": 306,
              "end": 359
            },
            "start": 299,
            "end": 360
          }
        ],
        "start": 293,
        "end": 362
      },
      "expression": false,
      "start": 247,
      "end": 362
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 375
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
              "type": "TSUnknownKeyword",
              "start": 379,
              "end": 386
            },
            "start": 377,
            "end": 386
          },
          "start": 376,
          "end": 386
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 402
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 406,
                    "end": 407
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 425
                  },
                  "start": 406,
                  "end": 425
                },
                "start": 401,
                "end": 425
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 429,
                  "end": 432
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 437
                },
                "start": 429,
                "end": 437
              },
              "start": 401,
              "end": 437
            },
            "start": 394,
            "end": 438
          }
        ],
        "start": 388,
        "end": 440
      },
      "expression": false,
      "start": 364,
      "end": 440
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 453
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
              "start": 454,
              "end": 455
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 454,
            "end": 455
          }
        ],
        "start": 453,
        "end": 456
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
                "start": 460,
                "end": 461
              },
              "typeArguments": null,
              "start": 460,
              "end": 461
            },
            "start": 458,
            "end": 461
          },
          "start": 457,
          "end": 461
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 477
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 481,
                    "end": 482
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 500
                  },
                  "start": 481,
                  "end": 500
                },
                "start": 476,
                "end": 500
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 504,
                  "end": 507
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 512
                },
                "start": 504,
                "end": 512
              },
              "start": 476,
              "end": 512
            },
            "start": 469,
            "end": 513
          }
        ],
        "start": 463,
        "end": 515
      },
      "expression": false,
      "start": 442,
      "end": 515
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 528
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
              "type": "TSTypeLiteral",
              "members": [],
              "start": 532,
              "end": 534
            },
            "start": 530,
            "end": 534
          },
          "start": 529,
          "end": 534
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
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 550
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 562,
                  "end": 568
                },
                "start": 549,
                "end": 568
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 572,
                  "end": 575
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 579,
                  "end": 580
                },
                "start": 572,
                "end": 580
              },
              "start": 549,
              "end": 580
            },
            "start": 542,
            "end": 581
          }
        ],
        "start": 536,
        "end": 583
      },
      "expression": false,
      "start": 517,
      "end": 583
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 594,
        "end": 596
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
              "start": 597,
              "end": 598
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 607,
              "end": 609
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 597,
            "end": 609
          }
        ],
        "start": 596,
        "end": 610
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
                "start": 614,
                "end": 615
              },
              "typeArguments": null,
              "start": 614,
              "end": 615
            },
            "start": 612,
            "end": 615
          },
          "start": 611,
          "end": 615
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
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 631
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 649
                },
                "start": 630,
                "end": 649
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 653,
                  "end": 656
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 660,
                  "end": 661
                },
                "start": 653,
                "end": 661
              },
              "start": 630,
              "end": 661
            },
            "start": 623,
            "end": 662
          }
        ],
        "start": 617,
        "end": 664
      },
      "expression": false,
      "start": 585,
      "end": 664
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 677
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
              "start": 678,
              "end": 679
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 678,
            "end": 679
          }
        ],
        "start": 677,
        "end": 680
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 684,
                    "end": 685
                  },
                  "typeArguments": null,
                  "start": 684,
                  "end": 685
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 688,
                  "end": 690
                }
              ],
              "start": 684,
              "end": 690
            },
            "start": 682,
            "end": 690
          },
          "start": 681,
          "end": 690
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
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 706
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 724
                },
                "start": 705,
                "end": 724
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 728,
                  "end": 731
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 735,
                  "end": 736
                },
                "start": 728,
                "end": 736
              },
              "start": 705,
              "end": 736
            },
            "start": 698,
            "end": 737
          }
        ],
        "start": 692,
        "end": 739
      },
      "expression": false,
      "start": 666,
      "end": 739
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 752
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
              "start": 753,
              "end": 754
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 763,
              "end": 765
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 753,
            "end": 765
          }
        ],
        "start": 752,
        "end": 766
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 770,
                    "end": 771
                  },
                  "typeArguments": null,
                  "start": 770,
                  "end": 771
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 774,
                  "end": 776
                }
              ],
              "start": 770,
              "end": 776
            },
            "start": 768,
            "end": 776
          },
          "start": 767,
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
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 792
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 804,
                  "end": 810
                },
                "start": 791,
                "end": 810
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 814,
                  "end": 817
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 821,
                  "end": 822
                },
                "start": 814,
                "end": 822
              },
              "start": 791,
              "end": 822
            },
            "start": 784,
            "end": 823
          }
        ],
        "start": 778,
        "end": 825
      },
      "expression": false,
      "start": 741,
      "end": 825
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 836,
        "end": 838
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
              "start": 839,
              "end": 840
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 849,
              "end": 855
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 839,
            "end": 855
          }
        ],
        "start": 838,
        "end": 856
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 860,
                    "end": 861
                  },
                  "typeArguments": null,
                  "start": 860,
                  "end": 861
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 864,
                  "end": 866
                }
              ],
              "start": 860,
              "end": 866
            },
            "start": 858,
            "end": 866
          },
          "start": 857,
          "end": 866
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
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 882
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 900
                },
                "start": 881,
                "end": 900
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 904,
                  "end": 907
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 911,
                  "end": 912
                },
                "start": 904,
                "end": 912
              },
              "start": 881,
              "end": 912
            },
            "start": 874,
            "end": 913
          }
        ],
        "start": 868,
        "end": 915
      },
      "expression": false,
      "start": 827,
      "end": 915
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 915
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 22,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "unknown",
    "start": 43,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 64,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 68,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 117,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 167,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 173,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 177,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 247,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "isHTMLTable",
    "start": 256,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "table",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 275,
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
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 285,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "table",
    "start": 308,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 314,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "table",
    "start": 317,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 323,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 334,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 341,
    "end": 343
  },
  {
    "type": "String",
    "value": "'html'",
    "start": 344,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 351,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "table",
    "start": 354,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 364,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 373,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "unknown",
    "start": 379,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 394,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 403,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 408,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 419,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 426,
    "end": 428
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 429,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 433,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 442,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 469,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 478,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 483,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 494,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 501,
    "end": 503
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 504,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 508,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 517,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 526,
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
    "value": "x",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
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
    "start": 542,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 551,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 562,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 569,
    "end": 571
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 572,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 576,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 582,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 585,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 599,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 617,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 623,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 632,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 643,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 650,
    "end": 652
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 653,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 657,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 663,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 666,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 675,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 698,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 707,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 718,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 725,
    "end": 727
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 728,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 732,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 741,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 750,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 753,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 755,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 767,
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
    "value": "T",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 784,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 793,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 804,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 811,
    "end": 813
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 814,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 818,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 827,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 841,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 849,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 868,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 874,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 883,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 894,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 901,
    "end": 903
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 904,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 908,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 914,
    "end": 915
  }
]
```
