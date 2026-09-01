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
        "start": 22,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 29,
              "end": 35
            },
            "start": 27,
            "end": 35
          },
          "start": 25,
          "end": 35
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 54
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 37,
          "end": 54
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 82
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 85,
                  "end": 87
                },
                "definite": false,
                "start": 80,
                "end": 87
              }
            ],
            "declare": false,
            "start": 76,
            "end": 88
          }
        ],
        "start": 56,
        "end": 102
      },
      "expression": false,
      "start": 13,
      "end": 102
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 121
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 126,
              "end": 132
            },
            "start": 124,
            "end": 132
          },
          "start": 122,
          "end": 132
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 158
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 161,
                  "end": 163
                },
                "definite": false,
                "start": 156,
                "end": 163
              }
            ],
            "declare": false,
            "start": 152,
            "end": 164
          }
        ],
        "start": 134,
        "end": 178
      },
      "expression": false,
      "start": 103,
      "end": 178
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 199
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 204,
              "end": 210
            },
            "start": 202,
            "end": 210
          },
          "start": 200,
          "end": 210
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 229
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 212,
          "end": 229
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 180,
      "end": 231
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 275,
        "end": 284
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 289,
              "end": 295
            },
            "start": 287,
            "end": 295
          },
          "start": 285,
          "end": 295
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 258,
      "end": 297
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 322
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 340
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 323,
          "end": 340
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 354
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 357,
                  "end": 359
                },
                "definite": false,
                "start": 352,
                "end": 359
              }
            ],
            "declare": false,
            "start": 348,
            "end": 360
          }
        ],
        "start": 342,
        "end": 374
      },
      "expression": false,
      "start": 311,
      "end": 374
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
        "end": 393
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 408
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 411,
                  "end": 413
                },
                "definite": false,
                "start": 406,
                "end": 413
              }
            ],
            "declare": false,
            "start": 402,
            "end": 414
          }
        ],
        "start": 396,
        "end": 428
      },
      "expression": false,
      "start": 375,
      "end": 428
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 441
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 446,
              "end": 452
            },
            "start": 444,
            "end": 452
          },
          "start": 442,
          "end": 452
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 461
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 454,
          "end": 461
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 430,
      "end": 463
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 498
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 503,
              "end": 509
            },
            "start": 501,
            "end": 509
          },
          "start": 499,
          "end": 509
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 514,
            "end": 518
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 511,
          "end": 518
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 487,
      "end": 520
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 555
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 560,
              "end": 563
            },
            "start": 558,
            "end": 563
          },
          "start": 556,
          "end": 563
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 572
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 565,
          "end": 572
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 574,
        "end": 586
      },
      "expression": false,
      "start": 544,
      "end": 586
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 597,
        "end": 606
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 611,
              "end": 617
            },
            "start": 609,
            "end": 617
          },
          "start": 607,
          "end": 617
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 588,
      "end": 619
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 641,
        "end": 650
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 655,
              "end": 661
            },
            "start": 653,
            "end": 661
          },
          "start": 651,
          "end": 661
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 632,
      "end": 663
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 685,
        "end": 694
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 699,
              "end": 702
            },
            "start": 697,
            "end": 702
          },
          "start": 695,
          "end": 702
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 704,
        "end": 719
      },
      "expression": false,
      "start": 676,
      "end": 719
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 738,
        "end": 740
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 745,
              "end": 751
            },
            "start": 743,
            "end": 751
          },
          "start": 741,
          "end": 751
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 756,
            "end": 760
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 753,
          "end": 760
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 721,
      "end": 762
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 803,
        "end": 805
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 810,
              "end": 816
            },
            "start": 808,
            "end": 816
          },
          "start": 806,
          "end": 816
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 825
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 818,
          "end": 825
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 786,
      "end": 827
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 869,
        "end": 871
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 876,
              "end": 882
            },
            "start": 874,
            "end": 882
          },
          "start": 872,
          "end": 882
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 852,
      "end": 884
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 925,
        "end": 927
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 932,
              "end": 938
            },
            "start": 930,
            "end": 938
          },
          "start": 928,
          "end": 938
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 908,
      "end": 940
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 963
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 13,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 25,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 37,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 40,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 103,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "f1NoError",
    "start": 112,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 152,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 156,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 180,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 188,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 204,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 215,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 258,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 266,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "f2NoError",
    "start": 275,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 311,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 326,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 357,
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
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 375,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "f3NoError",
    "start": 384,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 402,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 406,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 411,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 430,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 439,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 454,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 457,
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
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 487,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 496,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 499,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 503,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 511,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 514,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 544,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 556,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 560,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 565,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 568,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 588,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 597,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 607,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 611,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 632,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 641,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 651,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 655,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 676,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 685,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 695,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 699,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 721,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 729,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 738,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 741,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 745,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 753,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 756,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 786,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 794,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 803,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 806,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 810,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 818,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 852,
    "end": 859
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 860,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 869,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 872,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 876,
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
    "type": "Identifier",
    "value": "declare",
    "start": 908,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 916,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 925,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 928,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 932,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940
  }
]
```
