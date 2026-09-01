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
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
                  "start": 133,
                  "end": 137
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 142
                },
                "optional": false,
                "computed": false,
                "start": 133,
                "end": 142
              },
              "right": {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 155,
                    "end": 156
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 159
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 178,
                          "end": 179
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 182,
                          "end": 183
                        },
                        "start": 178,
                        "end": 183
                      },
                      "start": 171,
                      "end": 184
                    }
                  ],
                  "start": 161,
                  "end": 190
                },
                "expression": false,
                "start": 145,
                "end": 190
              },
              "start": 133,
              "end": 190
            },
            "directive": null,
            "start": 133,
            "end": 190
          }
        ],
        "start": 14,
        "end": 192
      },
      "expression": false,
      "start": 0,
      "end": 192
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
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 287
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 297
            },
            "optional": false,
            "computed": false,
            "start": 285,
            "end": 297
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 304
          },
          "optional": false,
          "computed": false,
          "start": 285,
          "end": 304
        },
        "right": {
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 321
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 336,
                    "end": 337
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 340,
                    "end": 341
                  },
                  "start": 336,
                  "end": 341
                },
                "start": 329,
                "end": 342
              }
            ],
            "start": 323,
            "end": 344
          },
          "expression": false,
          "start": 307,
          "end": 344
        },
        "start": 285,
        "end": 344
      },
      "directive": null,
      "start": 285,
      "end": 344
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
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 443
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "staticProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 454
          },
          "optional": false,
          "computed": false,
          "start": 441,
          "end": 454
        },
        "right": {
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 468
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 471
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 486,
                    "end": 487
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 491
                  },
                  "start": 486,
                  "end": 491
                },
                "start": 479,
                "end": 492
              }
            ],
            "start": 473,
            "end": 494
          },
          "expression": false,
          "start": 457,
          "end": 494
        },
        "start": 441,
        "end": 494
      },
      "directive": null,
      "start": 441,
      "end": 494
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 502,
        "end": 504
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
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 634
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 636
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 638,
                  "end": 639
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 658,
                        "end": 659
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 662,
                        "end": 663
                      },
                      "start": 658,
                      "end": 663
                    },
                    "start": 651,
                    "end": 664
                  }
                ],
                "start": 641,
                "end": 670
              },
              "expression": false,
              "start": 634,
              "end": 670
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 627,
            "end": 670
          }
        ],
        "start": 505,
        "end": 672
      },
      "abstract": false,
      "declare": false,
      "start": 496,
      "end": 672
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
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 768
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 769,
              "end": 778
            },
            "optional": false,
            "computed": false,
            "start": 766,
            "end": 778
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "method2",
            "optional": false,
            "typeAnnotation": null,
            "start": 779,
            "end": 786
          },
          "optional": false,
          "computed": false,
          "start": 766,
          "end": 786
        },
        "right": {
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 799,
              "end": 800
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 802,
              "end": 803
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 818,
                    "end": 819
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 822,
                    "end": 823
                  },
                  "start": 818,
                  "end": 823
                },
                "start": 811,
                "end": 824
              }
            ],
            "start": 805,
            "end": 826
          },
          "expression": false,
          "start": 789,
          "end": 826
        },
        "start": 766,
        "end": 826
      },
      "directive": null,
      "start": 766,
      "end": 826
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
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 923,
            "end": 925
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "staticProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 926,
            "end": 936
          },
          "optional": false,
          "computed": false,
          "start": 923,
          "end": 936
        },
        "right": {
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 949,
              "end": 950
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 952,
              "end": 953
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 968,
                    "end": 969
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 972,
                    "end": 973
                  },
                  "start": 968,
                  "end": 973
                },
                "start": 961,
                "end": 974
              }
            ],
            "start": 955,
            "end": 976
          },
          "expression": false,
          "start": 939,
          "end": 976
        },
        "start": 923,
        "end": 976
      },
      "directive": null,
      "start": 923,
      "end": 976
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 976
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
    "value": "C1",
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
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 145,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 171,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 288,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 298,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 307,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 329,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "staticProp",
    "start": 444,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 457,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 479,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 496,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 502,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 627,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 641,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 651,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 769,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 779,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 789,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 811,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 923,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "staticProp",
    "start": 926,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 939,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 961,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976
  }
]
```
