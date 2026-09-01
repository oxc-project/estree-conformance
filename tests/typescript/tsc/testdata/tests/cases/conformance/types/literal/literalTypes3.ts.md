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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            },
            "start": 13,
            "end": 21
          },
          "start": 12,
          "end": 21
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 34
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 39,
                "end": 44
              },
              "start": 33,
              "end": 44
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 57
                  },
                  "directive": null,
                  "start": 56,
                  "end": 58
                }
              ],
              "start": 46,
              "end": 74
            },
            "alternate": null,
            "start": 29,
            "end": 74
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 89,
                  "end": 94
                },
                "start": 83,
                "end": 94
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 99
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 104,
                  "end": 109
                },
                "start": 98,
                "end": 109
              },
              "start": 83,
              "end": 109
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 122
                  },
                  "directive": null,
                  "start": 121,
                  "end": 123
                }
              ],
              "start": 111,
              "end": 147
            },
            "alternate": null,
            "start": 79,
            "end": 147
          }
        ],
        "start": 23,
        "end": 149
      },
      "expression": false,
      "start": 0,
      "end": 149
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 162
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 166,
              "end": 172
            },
            "start": 164,
            "end": 172
          },
          "start": 163,
          "end": 172
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 189
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 206,
                  "end": 211
                },
                "consequent": [],
                "start": 201,
                "end": 212
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 226,
                  "end": 231
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
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
                "start": 221,
                "end": 247
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "baz",
                  "raw": "\"baz\"",
                  "start": 279,
                  "end": 284
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 299
                    },
                    "directive": null,
                    "start": 298,
                    "end": 300
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 339,
                    "end": 345
                  }
                ],
                "start": 274,
                "end": 345
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 375,
                      "end": 376
                    },
                    "directive": null,
                    "start": 375,
                    "end": 377
                  }
                ],
                "start": 354,
                "end": 377
              }
            ],
            "start": 180,
            "end": 394
          }
        ],
        "start": 174,
        "end": 396
      },
      "expression": false,
      "start": 151,
      "end": 396
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 407,
        "end": 409
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 413,
              "end": 419
            },
            "start": 411,
            "end": 419
          },
          "start": 410,
          "end": 419
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 434,
                    "end": 435
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 440,
                    "end": 445
                  },
                  "start": 434,
                  "end": 445
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 449,
                    "end": 450
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 455,
                    "end": 460
                  },
                  "start": 449,
                  "end": 460
                },
                "start": 434,
                "end": 460
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 476
              },
              "start": 434,
              "end": 476
            },
            "start": 427,
            "end": 477
          }
        ],
        "start": 421,
        "end": 509
      },
      "expression": false,
      "start": 398,
      "end": 509
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 520,
        "end": 522
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
              "type": "TSNumberKeyword",
              "start": 526,
              "end": 532
            },
            "start": 524,
            "end": 532
          },
          "start": 523,
          "end": 532
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 544,
                  "end": 545
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 550,
                  "end": 551
                },
                "start": 544,
                "end": 551
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 556
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 561,
                  "end": 562
                },
                "start": 555,
                "end": 562
              },
              "start": 544,
              "end": 562
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 582
                  },
                  "start": 574,
                  "end": 583
                }
              ],
              "start": 564,
              "end": 599
            },
            "alternate": null,
            "start": 540,
            "end": 599
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 619
              },
              "typeArguments": null,
              "arguments": [],
              "start": 610,
              "end": 621
            },
            "start": 604,
            "end": 622
          }
        ],
        "start": 534,
        "end": 624
      },
      "expression": false,
      "start": 511,
      "end": 624
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 637
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
              "type": "TSNumberKeyword",
              "start": 641,
              "end": 647
            },
            "start": 639,
            "end": 647
          },
          "start": 638,
          "end": 647
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                    "value": 1,
                    "raw": "1",
                    "start": 652,
                    "end": 653
                  },
                  "start": 652,
                  "end": 653
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 656,
                    "end": 657
                  },
                  "start": 656,
                  "end": 657
                }
              ],
              "start": 652,
              "end": 657
            },
            "start": 650,
            "end": 657
          },
          "start": 649,
          "end": 657
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 670
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 675,
                  "end": 676
                },
                "start": 669,
                "end": 676
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 681
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 686,
                  "end": 687
                },
                "start": 680,
                "end": 687
              },
              "start": 669,
              "end": 687
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
                    "start": 699,
                    "end": 700
                  },
                  "directive": null,
                  "start": 699,
                  "end": 701
                }
              ],
              "start": 689,
              "end": 721
            },
            "alternate": null,
            "start": 665,
            "end": 721
          }
        ],
        "start": 659,
        "end": 723
      },
      "expression": false,
      "start": 626,
      "end": 723
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 734,
        "end": 736
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
              "type": "TSNumberKeyword",
              "start": 740,
              "end": 746
            },
            "start": 738,
            "end": 746
          },
          "start": 737,
          "end": 746
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                    "value": 1,
                    "raw": "1",
                    "start": 751,
                    "end": 752
                  },
                  "start": 751,
                  "end": 752
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 755,
                    "end": 756
                  },
                  "start": 755,
                  "end": 756
                }
              ],
              "start": 751,
              "end": 756
            },
            "start": 749,
            "end": 756
          },
          "start": 748,
          "end": 756
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 769
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 774,
                  "end": 775
                },
                "start": 768,
                "end": 775
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 779,
                  "end": 780
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 785,
                  "end": 786
                },
                "start": 779,
                "end": 786
              },
              "start": 768,
              "end": 786
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
                    "start": 798,
                    "end": 799
                  },
                  "directive": null,
                  "start": 798,
                  "end": 800
                }
              ],
              "start": 788,
              "end": 820
            },
            "alternate": null,
            "start": 764,
            "end": 820
          }
        ],
        "start": 758,
        "end": 822
      },
      "expression": false,
      "start": 725,
      "end": 822
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 833,
        "end": 835
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
                  "type": "TSNumberKeyword",
                  "start": 839,
                  "end": 845
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 848,
                    "end": 853
                  },
                  "start": 848,
                  "end": 853
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 856,
                    "end": 861
                  },
                  "start": 856,
                  "end": 861
                }
              ],
              "start": 839,
              "end": 861
            },
            "start": 837,
            "end": 861
          },
          "start": 836,
          "end": 861
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                    "value": 1,
                    "raw": "1",
                    "start": 866,
                    "end": 867
                  },
                  "start": 866,
                  "end": 867
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 870,
                    "end": 871
                  },
                  "start": 870,
                  "end": 871
                },
                {
                  "type": "TSStringKeyword",
                  "start": 874,
                  "end": 880
                }
              ],
              "start": 866,
              "end": 880
            },
            "start": 864,
            "end": 880
          },
          "start": 863,
          "end": 880
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
                "start": 892,
                "end": 893
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 898,
                "end": 899
              },
              "start": 892,
              "end": 899
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
                    "start": 911,
                    "end": 912
                  },
                  "directive": null,
                  "start": 911,
                  "end": 913
                }
              ],
              "start": 901,
              "end": 945
            },
            "alternate": null,
            "start": 888,
            "end": 945
          }
        ],
        "start": 882,
        "end": 947
      },
      "expression": false,
      "start": 824,
      "end": 947
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 958,
        "end": 960
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
                  "type": "TSNumberKeyword",
                  "start": 964,
                  "end": 970
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 973,
                    "end": 978
                  },
                  "start": 973,
                  "end": 978
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 981,
                    "end": 986
                  },
                  "start": 981,
                  "end": 986
                }
              ],
              "start": 964,
              "end": 986
            },
            "start": 962,
            "end": 986
          },
          "start": 961,
          "end": 986
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1003
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1020,
                  "end": 1021
                },
                "consequent": [],
                "start": 1015,
                "end": 1022
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1036,
                  "end": 1037
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1051,
                      "end": 1052
                    },
                    "directive": null,
                    "start": 1051,
                    "end": 1053
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1076,
                    "end": 1082
                  }
                ],
                "start": 1031,
                "end": 1082
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 1096,
                  "end": 1101
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1115,
                      "end": 1116
                    },
                    "directive": null,
                    "start": 1115,
                    "end": 1117
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1140,
                    "end": 1146
                  }
                ],
                "start": 1091,
                "end": 1146
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1176,
                      "end": 1177
                    },
                    "directive": null,
                    "start": 1176,
                    "end": 1178
                  }
                ],
                "start": 1155,
                "end": 1178
              }
            ],
            "start": 994,
            "end": 1203
          }
        ],
        "start": 988,
        "end": 1205
      },
      "expression": false,
      "start": 949,
      "end": 1205
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1205
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 29,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 35,
    "end": 38
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 85,
    "end": 88
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 100,
    "end": 103
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 151,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 201,
    "end": 205
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 221,
    "end": 225
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "type": "Keyword",
    "value": "case",
    "start": 274,
    "end": 278
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 339,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 354,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 398,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 407,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 410,
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
    "value": "string",
    "start": 413,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 427,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 436,
    "end": 439
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 440,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 446,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 451,
    "end": 454
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 455,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 467,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 511,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 520,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 526,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 540,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 546,
    "end": 549
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 552,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 557,
    "end": 560
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 574,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 604,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 610,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 614,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 626,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 641,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 654,
    "end": 655
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 665,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 671,
    "end": 674
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 677,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 682,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "function",
    "start": 725,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 734,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 740,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 753,
    "end": 754
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 764,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 770,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 776,
    "end": 778
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 781,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 824,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 833,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 839,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 846,
    "end": 847
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 848,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 854,
    "end": 855
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 856,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 864,
    "end": 865
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 868,
    "end": 869
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 874,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 882,
    "end": 883
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
    "value": "x",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 894,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 901,
    "end": 902
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
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 949,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 958,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 964,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 971,
    "end": 972
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 973,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 979,
    "end": 980
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 981,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 988,
    "end": 989
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 994,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1031,
    "end": 1035
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "x",
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
    "value": "break",
    "start": 1076,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1091,
    "end": 1095
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1096,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1140,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 1155,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1204,
    "end": 1205
  }
]
```
