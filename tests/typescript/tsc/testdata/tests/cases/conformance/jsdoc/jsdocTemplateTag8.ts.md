__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "super_covariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 135
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 141
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 143,
                  "end": 144
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 140,
                "end": 144
              }
            ],
            "start": 138,
            "end": 146
          },
          "definite": false,
          "start": 120,
          "end": 146
        }
      ],
      "declare": false,
      "start": 116,
      "end": 147
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
            "name": "sub_covariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 203
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 209
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 211,
                  "end": 213
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 208,
                "end": 213
              }
            ],
            "start": 206,
            "end": 215
          },
          "definite": false,
          "start": 190,
          "end": 215
        }
      ],
      "declare": false,
      "start": 186,
      "end": 216
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_covariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 233
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_covariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 249
        },
        "start": 218,
        "end": 249
      },
      "directive": null,
      "start": 218,
      "end": 250
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_covariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 264
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_covariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 284
        },
        "start": 251,
        "end": 284
      },
      "directive": null,
      "start": 251,
      "end": 285
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
            "name": "super_contravariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 455
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 461
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 464,
                      "end": 465
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 470,
                    "end": 472
                  },
                  "id": null,
                  "generator": false,
                  "start": 463,
                  "end": 472
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 460,
                "end": 472
              }
            ],
            "start": 458,
            "end": 474
          },
          "definite": false,
          "start": 436,
          "end": 474
        }
      ],
      "declare": false,
      "start": 432,
      "end": 475
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
            "name": "sub_contravariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 539
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 544,
                  "end": 545
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 548,
                      "end": 549
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 554,
                    "end": 556
                  },
                  "id": null,
                  "generator": false,
                  "start": 547,
                  "end": 556
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 544,
                "end": 556
              }
            ],
            "start": 542,
            "end": 558
          },
          "definite": false,
          "start": 522,
          "end": 558
        }
      ],
      "declare": false,
      "start": 518,
      "end": 559
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_contravariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 561,
          "end": 580
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_contravariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 583,
          "end": 600
        },
        "start": 561,
        "end": 600
      },
      "directive": null,
      "start": 561,
      "end": 601
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_contravariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 612,
          "end": 629
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_contravariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 632,
          "end": 651
        },
        "start": 612,
        "end": 651
      },
      "directive": null,
      "start": 612,
      "end": 652
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
            "name": "super_invariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 787,
            "end": 802
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 807,
                  "end": 808
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 812
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 817,
                    "end": 819
                  },
                  "id": null,
                  "generator": false,
                  "start": 810,
                  "end": 819
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 807,
                "end": 819
              }
            ],
            "start": 805,
            "end": 821
          },
          "definite": false,
          "start": 787,
          "end": 821
        }
      ],
      "declare": false,
      "start": 783,
      "end": 822
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
            "name": "sub_invariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 865,
            "end": 878
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 884
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 887,
                      "end": 888
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 902,
                          "end": 904
                        },
                        "start": 895,
                        "end": 904
                      }
                    ],
                    "start": 893,
                    "end": 906
                  },
                  "id": null,
                  "generator": false,
                  "start": 886,
                  "end": 906
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 883,
                "end": 906
              }
            ],
            "start": 881,
            "end": 908
          },
          "definite": false,
          "start": 865,
          "end": 908
        }
      ],
      "declare": false,
      "start": 861,
      "end": 909
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_invariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 911,
          "end": 926
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_invariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 929,
          "end": 942
        },
        "start": 911,
        "end": 942
      },
      "directive": null,
      "start": 911,
      "end": 943
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_invariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 954,
          "end": 967
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_invariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 970,
          "end": 985
        },
        "start": 954,
        "end": 985
      },
      "directive": null,
      "start": 954,
      "end": 986
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1049,
        "end": 1050
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
          "typeAnnotation": null,
          "start": 1051,
          "end": 1052
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1054,
        "end": 1056
      },
      "expression": false,
      "start": 1040,
      "end": 1056
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 116,
  "end": 1056
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 116,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "super_covariant",
    "start": 120,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 186,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "sub_covariant",
    "start": 190,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "String",
    "value": "''",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "super_covariant",
    "start": 218,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "sub_covariant",
    "start": 236,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "sub_covariant",
    "start": 251,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "super_covariant",
    "start": 269,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "super_contravariant",
    "start": 436,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "=>",
    "start": 467,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 518,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "sub_contravariant",
    "start": 522,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 551,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "super_contravariant",
    "start": 561,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "sub_contravariant",
    "start": 583,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "sub_contravariant",
    "start": 612,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "super_contravariant",
    "start": 632,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 783,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "super_invariant",
    "start": 787,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 814,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 861,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "sub_invariant",
    "start": 865,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 890,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 895,
    "end": 901
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 902,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "super_invariant",
    "start": 911,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "sub_invariant",
    "start": 929,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "sub_invariant",
    "start": 954,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "super_invariant",
    "start": 970,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1040,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1051,
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
    "value": "{",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1055,
    "end": 1056
  }
]
```
