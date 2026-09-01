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
        "name": "Multimap",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 121
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 216,
                  "end": 220
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 225
                },
                "optional": false,
                "computed": false,
                "start": 216,
                "end": 225
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 228,
                "end": 230
              },
              "start": 216,
              "end": 230
            },
            "directive": null,
            "start": 216,
            "end": 231
          }
        ],
        "start": 124,
        "end": 233
      },
      "expression": false,
      "start": 104,
      "end": 233
    },
    {
      "type": "EmptyStatement",
      "start": 233,
      "end": 234
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Multimap",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 244
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 254
          },
          "optional": false,
          "computed": false,
          "start": 236,
          "end": 254
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 348
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 352
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 371,
                            "end": 375
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 376,
                            "end": 380
                          },
                          "optional": false,
                          "computed": false,
                          "start": 371,
                          "end": 380
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 381,
                            "end": 384
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 387,
                            "end": 389
                          },
                          "start": 381,
                          "end": 389
                        },
                        "optional": false,
                        "computed": true,
                        "start": 371,
                        "end": 390
                      },
                      "start": 364,
                      "end": 391
                    }
                  ],
                  "start": 354,
                  "end": 397
                },
                "expression": false,
                "start": 348,
                "end": 397
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 345,
              "end": 397
            }
          ],
          "start": 257,
          "end": 399
        },
        "start": 236,
        "end": 399
      },
      "directive": null,
      "start": 236,
      "end": 399
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
            "name": "Multimap2",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 513
          },
          "init": {
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 619,
                        "end": 623
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 624,
                        "end": 628
                      },
                      "optional": false,
                      "computed": false,
                      "start": 619,
                      "end": 628
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 631,
                      "end": 633
                    },
                    "start": 619,
                    "end": 633
                  },
                  "directive": null,
                  "start": 619,
                  "end": 634
                }
              ],
              "start": 527,
              "end": 636
            },
            "expression": false,
            "start": 516,
            "end": 636
          },
          "definite": false,
          "start": 504,
          "end": 636
        }
      ],
      "declare": false,
      "start": 500,
      "end": 637
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Multimap2",
            "optional": false,
            "typeAnnotation": null,
            "start": 639,
            "end": 648
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 649,
            "end": 658
          },
          "optional": false,
          "computed": false,
          "start": 639,
          "end": 658
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 749,
                "end": 752
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 763,
                    "end": 766
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 785,
                            "end": 789
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 790,
                            "end": 794
                          },
                          "optional": false,
                          "computed": false,
                          "start": 785,
                          "end": 794
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 795,
                            "end": 798
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 801,
                            "end": 803
                          },
                          "start": 795,
                          "end": 803
                        },
                        "optional": false,
                        "computed": true,
                        "start": 785,
                        "end": 804
                      },
                      "start": 778,
                      "end": 805
                    }
                  ],
                  "start": 768,
                  "end": 811
                },
                "expression": false,
                "start": 754,
                "end": 811
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 749,
              "end": 811
            }
          ],
          "start": 661,
          "end": 813
        },
        "start": 639,
        "end": 813
      },
      "directive": null,
      "start": 639,
      "end": 813
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
            "name": "Ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 819,
            "end": 821
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 824,
            "end": 826
          },
          "definite": false,
          "start": 819,
          "end": 826
        }
      ],
      "declare": false,
      "start": 815,
      "end": 827
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 946,
            "end": 948
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Multimap3",
            "optional": false,
            "typeAnnotation": null,
            "start": 949,
            "end": 958
          },
          "optional": false,
          "computed": false,
          "start": 946,
          "end": 958
        },
        "right": {
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
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 1064,
                      "end": 1068
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1069,
                      "end": 1073
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1064,
                    "end": 1073
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 1076,
                    "end": 1078
                  },
                  "start": 1064,
                  "end": 1078
                },
                "directive": null,
                "start": 1064,
                "end": 1079
              }
            ],
            "start": 972,
            "end": 1081
          },
          "expression": false,
          "start": 961,
          "end": 1081
        },
        "start": 946,
        "end": 1081
      },
      "directive": null,
      "start": 946,
      "end": 1082
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 1084,
              "end": 1086
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Multimap3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1087,
              "end": 1096
            },
            "optional": false,
            "computed": false,
            "start": 1084,
            "end": 1096
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 1097,
            "end": 1106
          },
          "optional": false,
          "computed": false,
          "start": 1084,
          "end": 1106
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 1197,
                "end": 1200
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1201,
                    "end": 1204
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1223,
                            "end": 1227
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1228,
                            "end": 1232
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1223,
                          "end": 1232
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1233,
                            "end": 1236
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 1239,
                            "end": 1241
                          },
                          "start": 1233,
                          "end": 1241
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1223,
                        "end": 1242
                      },
                      "start": 1216,
                      "end": 1243
                    }
                  ],
                  "start": 1206,
                  "end": 1249
                },
                "expression": false,
                "start": 1200,
                "end": 1249
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1197,
              "end": 1249
            }
          ],
          "start": 1109,
          "end": 1251
        },
        "start": 1084,
        "end": 1251
      },
      "directive": null,
      "start": 1084,
      "end": 1251
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 104,
  "end": 1252
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 104,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Multimap",
    "start": 113,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 216,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Multimap",
    "start": 236,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 245,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 345,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 349,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 364,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 371,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 385,
    "end": 386
  },
  {
    "type": "String",
    "value": "''",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 500,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "Multimap2",
    "start": 504,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 516,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 624,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "Multimap2",
    "start": 639,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 649,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 749,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 754,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 763,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 778,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 785,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 790,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 795,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 799,
    "end": 800
  },
  {
    "type": "String",
    "value": "''",
    "start": 801,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 815,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "Ns",
    "start": 819,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "Ns",
    "start": 946,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "Multimap3",
    "start": 949,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 959,
    "end": 960
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 961,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 972,
    "end": 973
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1064,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 1069,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "Ns",
    "start": 1084,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "Multimap3",
    "start": 1087,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1097,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1197,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
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
    "start": 1216,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1223,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 1228,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "String",
    "value": "''",
    "start": 1239,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1250,
    "end": 1251
  }
]
```
