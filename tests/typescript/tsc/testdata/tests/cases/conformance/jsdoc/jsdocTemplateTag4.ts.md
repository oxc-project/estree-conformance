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
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Multimap",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 310
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 320
            },
            "optional": false,
            "computed": false,
            "start": 302,
            "end": 320
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 324
          },
          "optional": false,
          "computed": false,
          "start": 302,
          "end": 324
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
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 340
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
                      "start": 355,
                      "end": 359
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 360,
                      "end": 364
                    },
                    "optional": false,
                    "computed": false,
                    "start": 355,
                    "end": 364
                  },
                  "property": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 365,
                      "end": 368
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 371,
                      "end": 373
                    },
                    "start": 365,
                    "end": 373
                  },
                  "optional": false,
                  "computed": true,
                  "start": 355,
                  "end": 374
                },
                "start": 348,
                "end": 375
              }
            ],
            "start": 342,
            "end": 377
          },
          "expression": false,
          "start": 327,
          "end": 377
        },
        "start": 302,
        "end": 377
      },
      "directive": null,
      "start": 302,
      "end": 377
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
            "start": 482,
            "end": 491
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
                        "start": 597,
                        "end": 601
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 602,
                        "end": 606
                      },
                      "optional": false,
                      "computed": false,
                      "start": 597,
                      "end": 606
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 609,
                      "end": 611
                    },
                    "start": 597,
                    "end": 611
                  },
                  "directive": null,
                  "start": 597,
                  "end": 612
                }
              ],
              "start": 505,
              "end": 614
            },
            "expression": false,
            "start": 494,
            "end": 614
          },
          "definite": false,
          "start": 482,
          "end": 614
        }
      ],
      "declare": false,
      "start": 478,
      "end": 615
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
              "name": "Multimap2",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 692
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 702
            },
            "optional": false,
            "computed": false,
            "start": 683,
            "end": 702
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 706
          },
          "optional": false,
          "computed": false,
          "start": 683,
          "end": 706
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
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 719,
              "end": 722
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
                      "start": 737,
                      "end": 741
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 742,
                      "end": 746
                    },
                    "optional": false,
                    "computed": false,
                    "start": 737,
                    "end": 746
                  },
                  "property": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 747,
                      "end": 750
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 753,
                      "end": 755
                    },
                    "start": 747,
                    "end": 755
                  },
                  "optional": false,
                  "computed": true,
                  "start": 737,
                  "end": 756
                },
                "start": 730,
                "end": 757
              }
            ],
            "start": 724,
            "end": 759
          },
          "expression": false,
          "start": 709,
          "end": 759
        },
        "start": 683,
        "end": 759
      },
      "directive": null,
      "start": 683,
      "end": 759
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
            "start": 765,
            "end": 767
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 770,
            "end": 772
          },
          "definite": false,
          "start": 765,
          "end": 772
        }
      ],
      "declare": false,
      "start": 761,
      "end": 773
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
            "start": 892,
            "end": 894
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Multimap3",
            "optional": false,
            "typeAnnotation": null,
            "start": 895,
            "end": 904
          },
          "optional": false,
          "computed": false,
          "start": 892,
          "end": 904
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
                      "start": 1010,
                      "end": 1014
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1015,
                      "end": 1019
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1010,
                    "end": 1019
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 1022,
                    "end": 1024
                  },
                  "start": 1010,
                  "end": 1024
                },
                "directive": null,
                "start": 1010,
                "end": 1025
              }
            ],
            "start": 918,
            "end": 1027
          },
          "expression": false,
          "start": 907,
          "end": 1027
        },
        "start": 892,
        "end": 1027
      },
      "directive": null,
      "start": 892,
      "end": 1028
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ns",
                "optional": false,
                "typeAnnotation": null,
                "start": 1096,
                "end": 1098
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Multimap3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1099,
                "end": 1108
              },
              "optional": false,
              "computed": false,
              "start": 1096,
              "end": 1108
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 1109,
              "end": 1118
            },
            "optional": false,
            "computed": false,
            "start": 1096,
            "end": 1118
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null,
            "start": 1119,
            "end": 1122
          },
          "optional": false,
          "computed": false,
          "start": 1096,
          "end": 1122
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
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 1135,
              "end": 1138
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
                      "start": 1153,
                      "end": 1157
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1158,
                      "end": 1162
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1153,
                    "end": 1162
                  },
                  "property": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1163,
                      "end": 1166
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 1169,
                      "end": 1171
                    },
                    "start": 1163,
                    "end": 1171
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1153,
                  "end": 1172
                },
                "start": 1146,
                "end": 1173
              }
            ],
            "start": 1140,
            "end": 1175
          },
          "expression": false,
          "start": 1125,
          "end": 1175
        },
        "start": 1096,
        "end": 1175
      },
      "directive": null,
      "start": 1096,
      "end": 1175
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 104,
  "end": 1175
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
    "start": 302,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 311,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 327,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 337,
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
    "value": "return",
    "start": 348,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 355,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 365,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 369,
    "end": 370
  },
  {
    "type": "String",
    "value": "''",
    "start": 371,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 478,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "Multimap2",
    "start": 482,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 494,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 597,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 602,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "Multimap2",
    "start": 683,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 693,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 703,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 709,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 719,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 730,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 737,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 742,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 747,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 751,
    "end": 752
  },
  {
    "type": "String",
    "value": "''",
    "start": 753,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 755,
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
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 761,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "Ns",
    "start": 765,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "Ns",
    "start": 892,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "Multimap3",
    "start": 895,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 907,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1010,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "Ns",
    "start": 1096,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "Multimap3",
    "start": 1099,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1109,
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
    "value": "get",
    "start": 1119,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1125,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1146,
    "end": 1152
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1153,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 1158,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "String",
    "value": "''",
    "start": 1169,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1174,
    "end": 1175
  }
]
```
