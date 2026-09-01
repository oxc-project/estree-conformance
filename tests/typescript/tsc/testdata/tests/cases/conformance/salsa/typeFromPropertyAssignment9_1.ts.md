__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "my",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 11
            },
            "operator": "??",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 15,
              "end": 17
            },
            "start": 9,
            "end": 17
          },
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
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
            "name": "my",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 46
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 53
          },
          "optional": false,
          "computed": false,
          "start": 44,
          "end": 53
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 82
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 85,
                    "end": 86
                  },
                  "start": 81,
                  "end": 86
                },
                "start": 74,
                "end": 87
              }
            ],
            "start": 68,
            "end": 89
          },
          "expression": false,
          "start": 56,
          "end": 89
        },
        "start": 44,
        "end": 89
      },
      "directive": null,
      "start": 44,
      "end": 89
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
            "name": "my",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 92
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "number",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 99
          },
          "optional": false,
          "computed": false,
          "start": 90,
          "end": 99
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 102,
          "end": 103
        },
        "start": 90,
        "end": 103
      },
      "directive": null,
      "start": 90,
      "end": 104
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
            "name": "my",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 107
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 114
          },
          "optional": false,
          "computed": false,
          "start": 105,
          "end": 114
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 117,
          "end": 119
        },
        "start": 105,
        "end": 119
      },
      "directive": null,
      "start": 105,
      "end": 120
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
            "name": "my",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 123
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "predicate",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 133
          },
          "optional": false,
          "computed": false,
          "start": 121,
          "end": 133
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 138
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "predicate",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 148
            },
            "optional": false,
            "computed": false,
            "start": 136,
            "end": 148
          },
          "operator": "??",
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 152,
            "end": 154
          },
          "start": 136,
          "end": 154
        },
        "start": 121,
        "end": 154
      },
      "directive": null,
      "start": 121,
      "end": 155
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
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 158
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "predicate",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 168
            },
            "optional": false,
            "computed": false,
            "start": 156,
            "end": 168
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "query",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 174
          },
          "optional": false,
          "computed": false,
          "start": 156,
          "end": 174
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
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "me",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 199,
                      "end": 201
                    },
                    "init": {
                      "type": "ThisExpression",
                      "start": 204,
                      "end": 208
                    },
                    "definite": false,
                    "start": 199,
                    "end": 208
                  }
                ],
                "declare": false,
                "start": 195,
                "end": 209
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
                      "name": "me",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 216
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "property",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 225
                    },
                    "optional": false,
                    "computed": false,
                    "start": 214,
                    "end": 225
                  },
                  "right": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 228,
                    "end": 233
                  },
                  "start": 214,
                  "end": 233
                },
                "directive": null,
                "start": 214,
                "end": 234
              }
            ],
            "start": 189,
            "end": 236
          },
          "expression": false,
          "start": 177,
          "end": 236
        },
        "start": 156,
        "end": 236
      },
      "directive": null,
      "start": 156,
      "end": 237
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
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 243
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "my",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 252
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "predicate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 262
                },
                "optional": false,
                "computed": false,
                "start": 250,
                "end": 262
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "query",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 268
              },
              "optional": false,
              "computed": false,
              "start": 250,
              "end": 268
            },
            "typeArguments": null,
            "arguments": [],
            "start": 246,
            "end": 270
          },
          "definite": false,
          "start": 242,
          "end": 270
        }
      ],
      "declare": false,
      "start": 238,
      "end": 271
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
                "name": "my",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 274
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 284
              },
              "optional": false,
              "computed": false,
              "start": 272,
              "end": 284
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "query",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 290
            },
            "optional": false,
            "computed": false,
            "start": 272,
            "end": 290
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "another",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 298
          },
          "optional": false,
          "computed": false,
          "start": 272,
          "end": 298
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
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 326,
                  "end": 327
                },
                "start": 319,
                "end": 328
              }
            ],
            "start": 313,
            "end": 330
          },
          "expression": false,
          "start": 301,
          "end": 330
        },
        "start": 272,
        "end": 330
      },
      "directive": null,
      "start": 272,
      "end": 330
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
                "name": "my",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 343
              },
              "optional": false,
              "computed": false,
              "start": 331,
              "end": 343
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "query",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 349
            },
            "optional": false,
            "computed": false,
            "start": 331,
            "end": 349
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 356
          },
          "optional": false,
          "computed": false,
          "start": 331,
          "end": 356
        },
        "right": {
          "type": "Literal",
          "value": "none",
          "raw": "'none'",
          "start": 359,
          "end": 365
        },
        "start": 331,
        "end": 365
      },
      "directive": null,
      "start": 331,
      "end": 365
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
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 425
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "predicate",
              "optional": false,
              "typeAnnotation": null,
              "start": 426,
              "end": 435
            },
            "optional": false,
            "computed": false,
            "start": 423,
            "end": 435
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sort",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 440
          },
          "optional": false,
          "computed": false,
          "start": 423,
          "end": 440
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "my",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 445
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 455
              },
              "optional": false,
              "computed": false,
              "start": 443,
              "end": 455
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "sort",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 460
            },
            "optional": false,
            "computed": false,
            "start": 443,
            "end": 460
          },
          "operator": "??",
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
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 479
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 487
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "first",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 502,
                        "end": 507
                      },
                      "operator": ">",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "second",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 510,
                        "end": 516
                      },
                      "start": 502,
                      "end": 516
                    },
                    "consequent": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "first",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 519,
                      "end": 524
                    },
                    "alternate": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "second",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 527,
                      "end": 533
                    },
                    "start": 502,
                    "end": 533
                  },
                  "start": 495,
                  "end": 534
                }
              ],
              "start": 489,
              "end": 536
            },
            "expression": false,
            "start": 464,
            "end": 536
          },
          "start": 443,
          "end": 536
        },
        "start": 423,
        "end": 536
      },
      "directive": null,
      "start": 423,
      "end": 536
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
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 539
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "predicate",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 549
            },
            "optional": false,
            "computed": false,
            "start": 537,
            "end": 549
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 550,
            "end": 554
          },
          "optional": false,
          "computed": false,
          "start": 537,
          "end": 554
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 570
                },
                "value": {
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 101,
                          "raw": "101",
                          "start": 582,
                          "end": 585
                        },
                        "start": 575,
                        "end": 586
                      }
                    ],
                    "start": 573,
                    "end": 588
                  },
                  "expression": false,
                  "start": 570,
                  "end": 588
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 569,
                "end": 588
              }
            ],
            "start": 563,
            "end": 590
          },
          "abstract": false,
          "declare": false,
          "start": 557,
          "end": 590
        },
        "start": 537,
        "end": 590
      },
      "directive": null,
      "start": 537,
      "end": 590
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
            "name": "min",
            "optional": false,
            "typeAnnotation": null,
            "start": 620,
            "end": 623
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "min",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 636
              },
              "optional": false,
              "computed": false,
              "start": 626,
              "end": 636
            },
            "operator": "??",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 640,
              "end": 642
            },
            "start": 626,
            "end": 642
          },
          "definite": false,
          "start": 620,
          "end": 642
        }
      ],
      "declare": false,
      "start": 616,
      "end": 643
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
            "name": "min",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 647
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nest",
            "optional": false,
            "typeAnnotation": null,
            "start": 648,
            "end": 652
          },
          "optional": false,
          "computed": false,
          "start": 644,
          "end": 652
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 655,
                "end": 659
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "min",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 663
              },
              "optional": false,
              "computed": false,
              "start": 655,
              "end": 663
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nest",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 668
            },
            "optional": false,
            "computed": false,
            "start": 655,
            "end": 668
          },
          "operator": "??",
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
              "body": [],
              "start": 684,
              "end": 687
            },
            "expression": false,
            "start": 672,
            "end": 687
          },
          "start": 655,
          "end": 687
        },
        "start": 644,
        "end": 687
      },
      "directive": null,
      "start": 644,
      "end": 688
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
              "name": "min",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 692
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nest",
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 697
            },
            "optional": false,
            "computed": false,
            "start": 689,
            "end": 697
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 703
          },
          "optional": false,
          "computed": false,
          "start": 689,
          "end": 703
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 706,
                  "end": 710
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "min",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 711,
                  "end": 714
                },
                "optional": false,
                "computed": false,
                "start": 706,
                "end": 714
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nest",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 719
              },
              "optional": false,
              "computed": false,
              "start": 706,
              "end": 719
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 725
            },
            "optional": false,
            "computed": false,
            "start": 706,
            "end": 725
          },
          "operator": "??",
          "right": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 735,
              "end": 738
            },
            "abstract": false,
            "declare": false,
            "start": 729,
            "end": 738
          },
          "start": 706,
          "end": 738
        },
        "start": 689,
        "end": 738
      },
      "directive": null,
      "start": 689,
      "end": 739
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
            "name": "min",
            "optional": false,
            "typeAnnotation": null,
            "start": 740,
            "end": 743
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "property",
            "optional": false,
            "typeAnnotation": null,
            "start": 744,
            "end": 752
          },
          "optional": false,
          "computed": false,
          "start": 740,
          "end": 752
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "global",
                "optional": false,
                "typeAnnotation": null,
                "start": 755,
                "end": 761
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "min",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 765
              },
              "optional": false,
              "computed": false,
              "start": 755,
              "end": 765
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 774
            },
            "optional": false,
            "computed": false,
            "start": 755,
            "end": 774
          },
          "operator": "??",
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 778,
            "end": 780
          },
          "start": 755,
          "end": 780
        },
        "start": 740,
        "end": 780
      },
      "directive": null,
      "start": 740,
      "end": 781
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 781
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 4,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 12,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 44,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 56,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 74,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 83,
    "end": 84
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 124,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 136,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 139,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "my",
    "start": 156,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 159,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 169,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 177,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "me",
    "start": 199,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "me",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 217,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 228,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 246,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 253,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 275,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "another",
    "start": 291,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 301,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 319,
    "end": 325
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 331,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 334,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 344,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 350,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358
  },
  {
    "type": "String",
    "value": "'none'",
    "start": 359,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 426,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "sort",
    "start": 436,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 446,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "sort",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 461,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 464,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 474,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 481,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 495,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 502,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 510,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 519,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 527,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 540,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 550,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 557,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 575,
    "end": 581
  },
  {
    "type": "Numeric",
    "value": "101",
    "start": 582,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 616,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 620,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 633,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 637,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "nest",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "nest",
    "start": 664,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 669,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 672,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 689,
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
    "value": "nest",
    "start": 693,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 698,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 706,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 711,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "nest",
    "start": 715,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 720,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 726,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 729,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 740,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 744,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 755,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 762,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 766,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 775,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  }
]
```
